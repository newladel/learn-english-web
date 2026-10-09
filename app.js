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

function doTranslate() {
  const text = document.getElementById('translateInput').value.trim();
  if (!text) return;
  const key = getGeminiKey();
  if (!key) {
    alert('Chưa có Gemini API key. Vào Cài đặt để nhập.');
    showPage('settings');
    return;
  }
  const isEnVi = currentDir === 'en-vi';
  const prompt = isEnVi
    ? 'Dịch sang tiếng Việt và giải thích ngắn gọn ngữ pháp: "' + text + '"'
    : 'Dịch sang tiếng Anh và giải thích ngắn gọn ngữ pháp: "' + text + '"';

  document.getElementById('translateResult').innerHTML = '<div class="result">Đang dịch...</div>';
  fetch('https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL + ':generateContent?key=' + key, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  })
  .then(r => r.json())
  .then(d => {
    if (d.error) {
      document.getElementById('translateResult').innerHTML = '<div class="result" style="background:#ffebee;color:#c62828"><b>Lỗi:</b><br>' + d.error.message + '<br><br><b>Code:</b> ' + d.error.code + '</div>';
      return;
    }
    const t = d.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!t) {
      document.getElementById('translateResult').innerHTML = '<div class="result" style="background:#fff3e0">Không có kết quả</div>';
      return;
    }
    document.getElementById('translateResult').innerHTML = '<div class="result">' + t.replace(/\n/g,'<br>') + '</div>';
  })
  .catch(e => { document.getElementById('translateResult').innerHTML = '<div class="result" style="background:#ffebee">Lỗi mạng: ' + e.message + '</div>'; });
}

/* ========== CÀI ĐẶT ========== */
function loadSettings() {
  const k = getGeminiKey();
  const inp = document.getElementById('geminiKeyInput');
  const status = document.getElementById('keyStatus');
  if (inp) inp.value = k;
  if (status) status.innerHTML = k ? '<span style="color:#2e7d32">✅ Đã có key</span>' : '<span style="color:#c62828">❌ Chưa có key</span>';
}

function saveKey() {
  const k = document.getElementById('geminiKeyInput').value.trim();
  if (!k) { alert('Vui lòng nhập key'); return; }
  if (!k.startsWith('AIza')) {
    if (!confirm('Key Gemini thường bắt đầu bằng "AIza". Key bạn nhập không đúng định dạng. Vẫn lưu?')) return;
  }
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
