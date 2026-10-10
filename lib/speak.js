/* ========== ĐỌC TO (TTS) ========== */
function speakText(text, lang) {
  if (!('speechSynthesis' in window)) { alert('Trình duyệt không hỗ trợ đọc.'); return; }
  if (!text) { alert('Không có nội dung để đọc.'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === 'vi' ? 'vi-VN' : 'en-US';
  u.rate = 0.85;
  speechSynthesis.speak(u);
}

/* ========== LUYỆN PHÁT ÂM (Web Speech API) ========== */
let speakTarget = '';
let recognition = null;
let isListening = false;

function openSpeak(text) {
  speakTarget = text.replace(/\n/g, ' ').trim();
  document.getElementById('speakTarget').textContent = speakTarget;
  document.getElementById('speakStatus').textContent = '';
  document.getElementById('speakResult').innerHTML = '';
  document.getElementById('micBtn').textContent = '🎤 Bấm để đọc';
  document.getElementById('micBtn').style.background = '#43a047';
  isListening = false;
  showPage('speak');
  setTimeout(playTarget, 500);
}

function backFromSpeak() { stopListening(); showPage('lesson'); }
function playTarget() { speakText(speakTarget, 'en'); }

function getRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const r = new SR();
  r.lang = 'en-US';
  r.continuous = false;
  r.interimResults = false;
  r.maxAlternatives = 1;
  return r;
}

function startListening() {
  const btn = document.getElementById('micBtn');
  const status = document.getElementById('speakStatus');
  if (isListening) { stopListening(); return; }
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    status.innerHTML = '<span style="color:#c62828">❌ Trình duyệt không hỗ trợ nhận diện giọng nói.</span>';
    return;
  }
  recognition = getRecognition();
  if (!recognition) { status.textContent = 'Không khởi tạo được micro.'; return; }
  recognition.onstart = function() {
    isListening = true;
    btn.textContent = '⏹️ Dừng (đang nghe...)';
    btn.style.background = '#c62828';
    status.textContent = '🎤 Đang nghe... Hãy đọc to.';
  };
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    showSpeakResult(transcript);
  };
  recognition.onerror = function(event) {
    status.innerHTML = '<span style="color:#c62828">Lỗi: ' + event.error + '</span>';
    isListening = false;
    btn.textContent = '🎤 Bấm để đọc';
    btn.style.background = '#43a047';
  };
  recognition.onend = function() {
    isListening = false;
    btn.textContent = '🎤 Bấm để đọc';
    btn.style.background = '#43a047';
    if (status.textContent.indexOf('Đang nghe') === 0) status.textContent = 'Đã dừng. Bấm micro để đọc lại.';
  };
  try { recognition.start(); } catch (e) { status.textContent = 'Lỗi: ' + e.message; }
}

function stopListening() {
  if (recognition && isListening) { try { recognition.stop(); } catch (e) {} }
  isListening = false;
  const btn = document.getElementById('micBtn');
  if (btn) { btn.textContent = '🎤 Bấm để đọc'; btn.style.background = '#43a047'; }
}

function normalizeText(t) {
  return t.toLowerCase().replace(/[.,!?;:'"]/g, '').replace(/\s+/g, ' ').trim();
}

function showSpeakResult(transcript) {
  const status = document.getElementById('speakStatus');
  const result = document.getElementById('speakResult');
  status.textContent = '✅ Đã nhận diện xong.';

  const targetNorm = normalizeText(speakTarget);
  const spokenNorm = normalizeText(transcript);
  const targetWords = targetNorm.split(' ').filter(w => w);
  const spokenWords = spokenNorm.split(' ').filter(w => w);

  let correctCount = 0;
  const targetHtml = targetWords.map(w => {
    const isCorrect = spokenWords.indexOf(w) !== -1;
    if (isCorrect) correctCount++;
    const bg = isCorrect ? '#c8e6c9' : '#ffcdd2';
    const color = isCorrect ? '#2e7d32' : '#c62828';
    return '<span style="background:' + bg + ';color:' + color + ';padding:2px 6px;border-radius:6px;margin:2px;display:inline-block;font-weight:700">' + w + '</span>';
  }).join('');

  let score = targetWords.length > 0 ? Math.round((correctCount / targetWords.length) * 100) : 0;

  let scoreColor, scoreEmoji, feedback;
  if (score >= 80) { scoreColor = '#2e7d32'; scoreEmoji = '🏆'; feedback = 'Xuất sắc! Phát âm rất chuẩn.'; }
  else if (score >= 50) { scoreColor = '#43a047'; scoreEmoji = '✅'; feedback = 'Đạt yêu cầu! Cố gắng thêm chút nữa.'; }
  else if (score >= 30) { scoreColor = '#ef6c00'; scoreEmoji = '⚠️'; feedback = 'Gần đạt. Chú ý các từ bị đỏ.'; }
  else { scoreColor = '#c62828'; scoreEmoji = '❌'; feedback = 'Cố gắng đọc chậm và rõ từng từ nhé!'; }

  result.innerHTML = `
    <div style="margin-top:16px;padding:16px;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.08)">
      <div style="text-align:center;font-size:42px;font-weight:800;color:${scoreColor};margin-bottom:8px">${scoreEmoji} ${score}%</div>
      <div style="text-align:center;color:#666;margin-bottom:16px;font-size:14px">${feedback}</div>
      <div style="font-weight:700;margin-bottom:8px;font-size:14px">Bạn đã đọc:</div>
      <div style="background:#f5f5f5;padding:12px;border-radius:8px;margin-bottom:12px;font-size:15px">${transcript}</div>
      <div style="font-weight:700;margin-bottom:8px;font-size:14px">Từng từ:</div>
      <div style="background:#f9f9f9;padding:12px;border-radius:8px;line-height:1.8">${targetHtml}</div>
      <div style="margin-top:12px;font-size:13px;color:#666">Đúng: <b>${correctCount}/${targetWords.length}</b> từ</div>
      <div class="btn-row" style="margin-top:16px">
        <button class="btn" style="background:#43a047" onclick="startListening()">🎤 Đọc lại</button>
        <button class="btn secondary" onclick="playTarget()">🔊 Nghe mẫu</button>
      </div>
    </div>
  `;
}
