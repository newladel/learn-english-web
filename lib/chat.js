/* ========== GIAO TIẾP VỚI AI ========== */
let chatSituation = null;
let chatHistory = [];
let chatRecognition = null;
let chatListening = false;
let chatSpeaking = false;

/* ========== HIỂN THỊ DANH SÁCH TÌNH HUỐNG ========== */
function renderChat() {
  const list = document.getElementById('chatList');
  if (!list) return;
  list.innerHTML = CHAT_SITUATIONS.map(s => `
    <div class="chat-situation-card" onclick="openChatRoom('${s.id}')">
      <div class="chat-situation-icon">${s.icon}</div>
      <div class="chat-situation-text">
        <div class="chat-situation-title">${s.title}</div>
        <div class="chat-situation-desc">${s.desc}</div>
      </div>
      <div class="chat-situation-arrow">›</div>
    </div>
  `).join('');
}

/* ========== MỞ PHÒNG CHAT ========== */
function openChatRoom(sid) {
  const s = CHAT_SITUATIONS.find(x => x.id === sid);
  if (!s) return;

  chatSituation = s;
  chatHistory = [];

  document.getElementById('chatRoomTitle').textContent = s.title;
  document.getElementById('chatMessages').innerHTML = '';
  document.getElementById('chatTextInput').value = '';
  document.getElementById('chatStatus').textContent = '';

  showPage('chat-room');

  // AI nói trước
  addChatMessage('ai', s.opening, true);
}

function backFromChat() { showPage('home'); }

function backFromChatRoom() {
  stopChatListening();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  chatSpeaking = false;
  showPage('chat');
}

/* ========== THÊM TIN NHẮN ========== */
function addChatMessage(role, text, autoSpeak) {
  const container = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-' + role;
  div.innerHTML = '<div class="chat-bubble">' + escapeHtml(text).replace(/\n/g, '<br>') + '</div>';
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;

  chatHistory.push({ role: role === 'ai' ? 'assistant' : 'user', text: text });

  if (autoSpeak && role === 'ai') {
    setTimeout(function() {
      chatSpeak(text);
    }, 300);
  }
}

function escapeHtml(t) {
  return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ========== AI NÓI ========== */
function chatSpeak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();

  // Tách phần "Tip: ..." ra để đọc riêng (không đọc tiếng Việt bằng giọng Anh)
  const parts = text.split(/Tip:/i);
  const englishPart = parts[0].trim();

  if (englishPart) {
    const u = new SpeechSynthesisUtterance(englishPart);
    u.lang = 'en-US';
    u.rate = 0.85;
    chatSpeaking = true;
    u.onend = function() { chatSpeaking = false; };
    speechSynthesis.speak(u);
  }
}

/* ========== GỬI TIN NHẮN ========== */
async function chatSendText() {
  const inp = document.getElementById('chatTextInput');
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  await chatSendMessage(text);
}

async function chatSendMessage(text) {
  addChatMessage('user', text, false);

  const status = document.getElementById('chatStatus');
  status.textContent = '🤖 AI đang trả lời...';

  // Bỏ tin nhắn cuối cùng (của user) ra khỏi history vì proxy sẽ tự thêm
  const historyForAI = chatHistory.slice(0, -1);

  const d = await callProxy('chat', {
    message: text,
    situation: chatSituation ? chatSituation.title : 'general conversation',
    history: historyForAI
  });

  if (!d || !d.ok) {
    status.textContent = '';
    const errMsg = (d && d.error) ? d.error : 'Không kết nối được AI';
    addChatMessage('ai', '⚠️ Lỗi: ' + errMsg, false);
    return;
  }

  status.textContent = '';
  addChatMessage('ai', d.result, true);
}

/* ========== NHẬN DIỆN GIỌNG NÓI ========== */
function chatGetRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const r = new SR();
  r.lang = 'en-US';
  r.continuous = false;
  r.interimResults = false;
  r.maxAlternatives = 1;
  return r;
}

function chatStartListening() {
  const btn = document.getElementById('chatMicBtn');
  const status = document.getElementById('chatStatus');

  if (chatListening) {
    stopChatListening();
    return;
  }

  // Dừng TTS nếu đang đọc
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  chatSpeaking = false;

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    status.textContent = '❌ Trình duyệt không hỗ trợ mic. Dùng Chrome hoặc Samsung Internet.';
    return;
  }

  chatRecognition = chatGetRecognition();
  if (!chatRecognition) {
    status.textContent = 'Không khởi tạo được mic.';
    return;
  }

  chatRecognition.onstart = function() {
    chatListening = true;
    btn.classList.add('recording');
    btn.textContent = '⏹️';
    status.textContent = '🎤 Đang nghe... Nói tiếng Anh tự nhiên.';
  };

  chatRecognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    status.textContent = '✅ Bạn nói: "' + transcript + '"';
    chatSendMessage(transcript);
  };

  chatRecognition.onerror = function(event) {
    status.textContent = 'Lỗi mic: ' + event.error;
    stopChatListening();
  };

  chatRecognition.onend = function() {
    chatListening = false;
    btn.classList.remove('recording');
    btn.textContent = '🎤';
  };

  try {
    chatRecognition.start();
  } catch (e) {
    status.textContent = 'Lỗi: ' + e.message;
  }
}

function stopChatListening() {
  if (chatRecognition && chatListening) {
    try { chatRecognition.stop(); } catch (e) {}
  }
  chatListening = false;
  const btn = document.getElementById('chatMicBtn');
  if (btn) {
    btn.classList.remove('recording');
    btn.textContent = '🎤';
  }
}
