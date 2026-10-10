/* ========== CẤU HÌNH ========== */
const GEMINI_MODEL = 'gemini-3.5-flash-lite';
const SKILL_ICONS = { nghe:'🎧', noi:'🎤', doc:'📖', viet:'✏️', dich:'🌐' };

/* ========== LOCALSTORAGE ========== */
function getDone() { return JSON.parse(localStorage.getItem('done_lessons') || '[]'); }
function setDone(a) { localStorage.setItem('done_lessons', JSON.stringify(a)); }
function getGeminiKey() { return localStorage.getItem('gemini_key') || ''; }

function getStreak() {
  const last = localStorage.getItem('last_day');
  const today = new Date().toISOString().slice(0,10);
  if (last === today) return parseInt(localStorage.getItem('streak') || '0');
  const s = parseInt(localStorage.getItem('streak') || '0');
  if (!last) { localStorage.setItem('streak','1'); localStorage.setItem('last_day',today); return 1; }
  const diff = (new Date(today) - new Date(last)) / 86400000;
  const ns = diff === 1 ? s + 1 : 1;
  localStorage.setItem('streak', String(ns));
  localStorage.setItem('last_day', today);
  return ns;
}

function getVocabProgress() { return JSON.parse(localStorage.getItem('vocab_progress') || '{}'); }
function setVocabProgress(p) { localStorage.setItem('vocab_progress', JSON.stringify(p)); }
function getLearnedCount() { return Object.keys(getVocabProgress()).length; }

/* ========== ĐIỀU HƯỚNG ========== */
function updateStats() {
  const s = document.getElementById('streakVal');
  const d = document.getElementById('doneVal');
  const v = document.getElementById('vocabVal');
  if (s) s.textContent = getStreak() + ' ngày';
  if (d) d.textContent = getDone().length + ' bài';
  if (v) v.textContent = getLearnedCount() + ' từ';
}

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'home') updateStats();
  if (name === 'roadmap') renderRoadmap();
  if (name === 'vocab') renderVocab();
  if (name === 'translate') updateTranslateUI();
  if (name === 'settings') loadSettings();
}

/* ========== LỘ TRÌNH ========== */
function renderRoadmap() {
  const done = getDone();
  document.getElementById('roadmapList').innerHTML = roadmap.map((lv, i) => `
    <div class="level ${i === 0 ? 'open' : ''}">
      <div class="level-header" onclick="this.parentElement.classList.toggle('open')">
        <div><div class="level-title">${lv.code} — ${lv.name}</div><div class="level-desc">${lv.desc}</div></div>
        <div>▼</div>
      </div>
      <div class="level-body">
        ${lv.lessons.map(ls => `
          <div class="lesson ${done.includes(ls.id) ? 'done' : ''}" onclick="openLesson('${ls.id}')">
            <div class="check">${done.includes(ls.id) ? '✓' : ''}</div>
            <div class="name">${ls.title}</div><div>›</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ========== VISUAL ========== */
function renderVisual(visual) {
  if (!visual) return '';
  const parts = visual.split(':');
  const kind = parts[0];
  const data = parts[1] || '';

  if (kind === 'colors') {
    const colorMap = {
      red: '#e53935', blue: '#1e88e5', green: '#43a047',
      yellow: '#fdd835', black: '#212121', white: '#ffffff',
      orange: '#fb8c00', purple: '#8e24aa', pink: '#ec407a',
      brown: '#6d4c41', gray: '#757575', grey: '#757575'
    };
    const items = data.split(',').map(c => {
      const hex = colorMap[c.trim().toLowerCase()] || '#cccccc';
      const border = c.trim().toLowerCase() === 'white' ? '#ccc' : hex;
      return '<div class="color-swatch" style="background:' + hex + ';border-color:' + border + '" data-name="' + c.trim() + '"></div>';
    }).join('');
    return '<div class="visual-box"><div class="color-row">' + items + '</div></div>';
  }

  if (kind === 'numbers') {
    const nums = data.split(',').map(n => n.trim()).filter(x => x);
    const wordMap = { '1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','10':'ten','11':'eleven','12':'twelve','20':'twenty','100':'hundred' };
    const items = nums.map(n => {
      const w = wordMap[n] || '';
      return '<div class="number-tile"><div class="num">' + n + '</div>' + (w ? '<div class="word">' + w + '</div>' : '') + '</div>';
    }).join('');
    return '<div class="visual-box">' + items + '</div>';
  }

  if (kind === 'alphabet') {
    const letters = data.split('').map(l => '<div class="letter-tile">' + l + '</div>').join('');
    return '<div class="visual-box"><div class="alphabet-grid">' + letters + '</div></div>';
  }

  if (kind === 'emoji') {
    return '<div class="visual-box"><div class="emoji-visual">' + data + '</div></div>';
  }

  return '';
}

function openLesson(id) {
  let lesson;
  for (const lv of roadmap) { const f = lv.lessons.find(l => l.id === id); if (f) { lesson = f; break; } }
  document.getElementById('lessonTitle').textContent = lesson.title;
  const done = getDone();
  const isDone = done.includes(id);
  const html = lesson.skills.map((s, si) => `
    <div class="skill">
      <div class="skill-head">
        <div class="skill-icon">${SKILL_ICONS[s.type]}</div>
        <div style="flex:1"><b>${s.title}</b></div>
        <div class="skill-type">${s.type.toUpperCase()}</div>
      </div>
      ${renderVisual(s.visual)}
      <div class="content">${s.content.replace(/\n/g,'<br>')}</div>
      <button class="q-btn" style="width:100%;margin-bottom:12px;padding:12px" onclick="speakText(\`${s.content.replace(/`/g,'').replace(/"/g,'')}\`)">🔊 Đọc to</button>
      <div style="font-weight:700;margin-bottom:8px">Câu hỏi luyện tập:</div>
      ${s.qs.map((q, qi) => `
        <div style="margin-bottom:16px">
          <div class="q"><div class="q-text">${q[0]}</div></div>
          <input type="text" class="ans-input" id="inp-${si}-${qi}" placeholder="Nhập câu trả lời...">
          <div style="display:flex;gap:8px">
            <button class="q-btn" onclick="checkAns(${si},${qi},'${q[1].replace(/'/g,"\\'")}')">✓ Kiểm tra</button>
            <button class="q-btn gray" onclick="document.getElementById('ans-${si}-${qi}').classList.toggle('show')">Xem đáp án</button>
          </div>
          <div class="q-ans" id="ans-${si}-${qi}">Đáp án: ${q[1]}</div>
          <div id="result-${si}-${qi}"></div>
        </div>
      `).join('')}
    </div>
  `).join('') + `<button class="done-btn" onclick="markDone('${id}')">${isDone ? '✓ Đã hoàn thành' : 'Đánh dấu đã hoàn thành'}</button>`;
  document.getElementById('lessonBody').innerHTML = html;
  showPage('lesson');
}

function checkAns(si, qi, correct) {
  const inp = document.getElementById(`inp-${si}-${qi}`).value.trim().toLowerCase();
  const res = document.getElementById(`result-${si}-${qi}`);
  if (!inp) { res.innerHTML = '<div class="result-msg warn">Vui lòng nhập câu trả lời</div>'; return; }
  const c = correct.toLowerCase();
  const ok = inp === c || c.includes(inp) || inp.includes(c) || c.split(/[\s/]+/).some(w => w.length > 2 && inp.includes(w));
  res.innerHTML = ok ? '<div class="result-msg ok">✅ Chính xác!</div>' : '<div class="result-msg bad">❌ Chưa đúng. Thử lại hoặc xem đáp án.</div>';
}

function markDone(id) {
  const done = getDone();
  if (!done.includes(id)) { done.push(id); setDone(done); alert('Đã lưu tiến độ!'); }
  showPage('roadmap');
}

/* ========== ĐỌC TO ========== */
function speakText(text, lang) {
  if (!('speechSynthesis' in window)) { alert('Trình duyệt không hỗ trợ đọc.'); return; }
  if (!text) { alert('Không có nội dung để đọc.'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang === 'vi' ? 'vi-VN' : 'en-US';
  u.rate = 0.85;
  speechSynthesis.speak(u);
}

/* ========== GỌI GEMINI ========== */
async function callGemini(prompt) {
  const key = getGeminiKey();
  if (!key) {
    alert('Chưa có Gemini API key. Vào Cài đặt để nhập.');
    showPage('settings');
    return null;
  }
  try {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL + ':generateContent?key=' + key;
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    const d = await r.json();
    if (d.error) return { error: d.error.message, code: d.error.code };
    const t = d.candidates?.[0]?.content?.parts?.[0]?.text;
    return { text: t || 'Không có kết quả' };
  } catch (e) {
    return { error: e.message, code: 'network' };
  }
}

/* ========== AI SỬA LỖI VIẾT ========== */
async function checkWriting() {
  const text = document.getElementById('writeInput').value.trim();
  if (!text) { alert('Vui lòng viết gì đó trước!'); return; }
  if (text.length < 5) { alert('Viết ít nhất 5 ký tự!'); return; }
  const res = document.getElementById('writeResult');
  res.innerHTML = '<div class="result">🤖 Đang chấm bài...</div>';

  const prompt = 'Bạn là giáo viên tiếng Anh thân thiện. Học sinh viết đoạn văn sau:\n\n' +
    text + '\n\n' +
    'Hãy chấm điểm và sửa lỗi theo format SAU (giữ nguyên cấu trúc):\n\n' +
    '📊 ĐIỂM: [X/10]\n\n' +
    '✍️ BÀI SỬA:\n[đoạn văn đã sửa hoàn chỉnh bằng tiếng Anh]\n\n' +
    '❌ LỖI CHÍNH:\n- [lỗi 1: từ sai -> từ đúng + giải thích ngắn]\n- [lỗi 2: ...]\n\n' +
    '💡 GỢI Ý:\n[1-2 câu nhận xét bằng tiếng Việt về điểm mạnh, điểm cần cải thiện]\n\n' +
    'LƯU Ý: Xưng hô với người học là "Bạn" (KHÔNG dùng "Em"). Giọng thân thiện, khích lệ.\n\n' +
    'Chỉ trả về nội dung trên, không thêm gì khác.';

  const r = await callGemini(prompt);
  if (!r) return;
  if (r.error) {
    res.innerHTML = '<div class="result" style="background:#ffebee;color:#c62828"><b>Lỗi:</b><br>' + r.error + '<br><br><b>Code:</b> ' + r.code + '</div>';
    return;
  }
  res.innerHTML = '<div class="result" style="white-space:pre-wrap;line-height:1.7">' + r.text + '</div>';
}

function resetWrite() {
  document.getElementById('writeInput').value = '';
  document.getElementById('writeResult').innerHTML = '';
}

/* ========== DỊCH 2 CHIỀU ========== */
let currentDir = localStorage.getItem('translate_dir') || 'en-vi';

function updateTranslateUI() {
  const isEnVi = currentDir === 'en-vi';
  const title = document.getElementById('translateTitle');
  const input = document.getElementById('translateInput');
  const swapLabel = document.getElementById('swapLabel');
  const swapIcon = document.getElementById('swapIcon');
  if (title) title.textContent = isEnVi ? 'Dịch Anh → Việt' : 'Dịch Việt → Anh';
  if (input) input.placeholder = isEnVi ? 'Nhập câu tiếng Anh...' : 'Nhập câu tiếng Việt...';
  if (swapLabel) swapLabel.textContent = isEnVi ? 'Anh → Việt' : 'Việt → Anh';
  if (swapIcon) swapIcon.style.transform = isEnVi ? 'rotate(0deg)' : 'rotate(180deg)';
}

function swapDirection() {
  currentDir = currentDir === 'en-vi' ? 'vi-en' : 'en-vi';
  localStorage.setItem('translate_dir', currentDir);
  updateTranslateUI();
  const inp = document.getElementById('translateInput');
  const res = document.getElementById('translateResult');
  if (inp) inp.value = '';
  if (res) res.innerHTML = '';
}

async function doTranslate() {
  const text = document.getElementById('translateInput').value.trim();
  if (!text) return;
  const isEnVi = currentDir === 'en-vi';
  const prompt = isEnVi
    ? 'Dịch sang tiếng Việt và giải thích ngắn gọn ngữ pháp: "' + text + '"'
    : 'Dịch sang tiếng Anh và giải thích ngắn gọn ngữ pháp: "' + text + '"';

  document.getElementById('translateResult').innerHTML = '<div class="result">Đang dịch...</div>';
  const r = await callGemini(prompt);
  if (!r) return;
  if (r.error) {
    document.getElementById('translateResult').innerHTML = '<div class="result" style="background:#ffebee;color:#c62828"><b>Lỗi:</b><br>' + r.error + '<br><br><b>Code:</b> ' + r.code + '</div>';
    return;
  }
  document.getElementById('translateResult').innerHTML = '<div class="result">' + r.text.replace(/\n/g,'<br>') + '</div>';
}

/* ========== CÀI ĐẶT ========== */
function loadSettings() {
  const k = getGeminiKey();
  const inp = document.getElementById('geminiKeyInput');
  const status = document.getElementById('keyStatus');
  if (inp) inp.value = k;
  if (status) status.innerHTML = k ? '<span style="color:#2e7d32">✅ Đã có key (' + k.substring(0,8) + '...)</span>' : '<span style="color:#c62828">❌ Chưa có key</span>';
}

function saveKey() {
  const k = document.getElementById('geminiKeyInput').value.trim();
  if (!k) { alert('Vui lòng nhập key'); return; }
  localStorage.setItem('gemini_key', k);
  alert('Đã lưu key!');
  loadSettings();
}

function clearKey() {
  if (!confirm('Xóa Gemini API key?')) return;
  localStorage.removeItem('gemini_key');
  document.getElementById('geminiKeyInput').value = '';
  loadSettings();
}

/* ========== TỪ VỰNG / FLASHCARD ========== */
function renderVocab() {
  const prog = getVocabProgress();
  const dueCount = countDue();
  document.getElementById('reviewInfo').textContent = dueCount > 0 ? `${dueCount} từ cần ôn hôm nay` : 'Chưa có từ nào đến hạn';
  document.getElementById('topicGrid').innerHTML = VOCAB.map(t => {
    const learned = t.words.filter(w => prog[`${t.id}_${w.en}`]).length;
    return `
      <div class="topic-card" onclick="openTopic('${t.id}')">
        <div class="topic-icon">${t.icon}</div>
        <div class="topic-name">${t.name}</div>
        <div class="topic-count">${learned}/${t.words.length} từ</div>
      </div>
    `;
  }).join('');
}

function openTopic(tid) {
  const topic = VOCAB.find(t => t.id === tid);
  document.getElementById('vocabTitle').textContent = topic.name;
  const prog = getVocabProgress();
  const learned = topic.words.filter(w => prog[`${tid}_${w.en}`]).length;
  const total = topic.words.length;
  document.getElementById('vocabBody').innerHTML = `
    <div class="progress-bar"><div class="progress-fill" style="width:${(learned/total)*100}%"></div></div>
    <p style="text-align:center;margin-bottom:16px;color:#666">Đã học ${learned}/${total} từ</p>
    <button class="btn-big orange" onclick="startSession('${tid}','learn')">
      <div class="icon">📖</div>
      <div class="text"><div class="title">Học từ mới</div><div class="sub">Học 5-10 từ chưa thuộc</div></div>
      <div class="arrow">›</div>
    </button>
    <button class="btn-big purple" onclick="startSession('${tid}','review')">
      <div class="icon">🔁</div>
      <div class="text"><div class="title">Ôn tập</div><div class="sub">Ôn các từ đã học</div></div>
      <div class="arrow">›</div>
    </button>
  `;
  showPage('vocab-learn');
}

let session = { queue: [], idx: 0, topicId: '', mode: '', showAnswer: false };

function startSession(tid, mode) {
  const topic = VOCAB.find(t => t.id === tid);
  const prog = getVocabProgress();
  let queue;
  if (mode === 'learn') {
    queue = topic.words.filter(w => !prog[`${tid}_${w.en}`]).slice(0, 10);
    if (queue.length === 0) { alert('Bạn đã học hết từ trong chủ đề này!'); return; }
  } else {
    queue = topic.words.filter(w => prog[`${tid}_${w.en}`]);
    if (queue.length === 0) { alert('Bạn chưa học từ nào trong chủ đề này!'); return; }
    queue = queue.sort(() => Math.random() - 0.5);
  }
  session = { queue, idx: 0, topicId: tid, mode, showAnswer: false };
  renderCard();
}

function countDue() {
  const prog = getVocabProgress();
  const now = Date.now();
  return Object.values(prog).filter(p => p.nextReview <= now).length;
}

function reviewAll() {
  const prog = getVocabProgress();
  const now = Date.now();
  const dueKeys = Object.keys(prog).filter(k => prog[k].nextReview <= now);
  if (dueKeys.length === 0) { alert('Hôm nay chưa có từ nào cần ôn!'); return; }
  const queue = [];
  for (const t of VOCAB) for (const w of t.words) {
    const key = `${t.id}_${w.en}`;
    if (dueKeys.includes(key)) queue.push({ ...w, _key: key, _topicId: t.id });
  }
  session = { queue, idx: 0, topicId: '', mode: 'review-all', showAnswer: false };
  renderCard();
}

function renderCard() {
  const s = session;
  if (s.idx >= s.queue.length) {
    document.getElementById('vocabBody').innerHTML = `
      <div class="empty-msg">
        <div style="font-size:60px">🎉</div>
        <h2>Hoàn thành!</h2>
        <p style="margin-top:12px">Bạn đã học/ôn ${s.queue.length} từ</p>
        <button class="btn" style="margin-top:20px;max-width:200px;margin-left:auto;margin-right:auto;display:block" onclick="showPage('vocab')">Quay lại</button>
      </div>`;
    return;
  }
  const w = s.queue[s.idx];
  const total = s.queue.length;
  let html = `
    <div class="progress-bar"><div class="progress-fill" style="width:${(s.idx/total)*100}%"></div></div>
    <p style="text-align:center;margin-bottom:12px;color:#666;font-size:14px">${s.idx + 1} / ${total}</p>
    <div class="flashcard">
      <div class="flash-en">${w.en}</div>
      <div class="flash-ipa">${w.ipa}</div>
      ${s.showAnswer ? `
        <div class="flash-vi">${w.vi}</div>
        <div class="flash-ex">📝 ${w.ex}</div>
      ` : `<div style="color:#999;margin-top:20px">Nhấn "Xem đáp án" để xem nghĩa</div>`}
    </div>
    <button class="flash-btn" onclick="speakText('${w.en.replace(/'/g,"\\'")}', 'en')">🔊 Đọc to</button>
  `;
  if (!s.showAnswer) {
    html += `<button class="flash-btn" style="background:#2e7d32" onclick="session.showAnswer=true;renderCard()">👁️ Xem đáp án</button>`;
  } else if (s.mode === 'learn') {
    html += `<button class="flash-btn" onclick="rateCard('learned')">✅ Đã hiểu, từ tiếp theo</button>`;
  } else {
    html += `
      <div class="rate-row">
        <button class="rate-btn rate-quen" onclick="rateCard('quen')">😵 Quên</button>
        <button class="rate-btn rate-kho" onclick="rateCard('kho')">😕 Khó</button>
        <button class="rate-btn rate-duoc" onclick="rateCard('duoc')">🙂 Được</button>
        <button class="rate-btn rate-de" onclick="rateCard('de')">😎 Dễ</button>
      </div>
    `;
  }
  document.getElementById('vocabBody').innerHTML = html;
}

function rateCard(rating) {
  const s = session;
  const w = s.queue[s.idx];
  const key = w._key || `${s.topicId}_${w.en}`;
  const prog = getVocabProgress();
  const current = prog[key] || { level: 0, nextReview: 0 };
  let newLevel = current.level;
  let delayDays = 0;

  if (s.mode === 'learn' || rating === 'learned') {
    newLevel = 1;
    delayDays = 1;
  } else {
    const deltas = { quen: -2, kho: -1, duoc: 1, de: 2 };
    newLevel = Math.max(0, Math.min(5, current.level + deltas[rating]));
    const intervals = [0, 1, 3, 7, 14, 30];
    delayDays = intervals[newLevel];
  }

  prog[key] = { level: newLevel, nextReview: Date.now() + delayDays * 86400000, en: w.en, vi: w.vi, topicId: s.topicId || w._topicId || '' };
  setVocabProgress(prog);

  s.idx++;
  s.showAnswer = false;
  renderCard();
}

/* ========== KHỞI ĐỘNG ========== */
updateStats();
updateTranslateUI();
