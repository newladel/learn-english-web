/* ========== TỪ VỰNG / FLASHCARD ========== */
function renderVocab() {
  const prog = getVocabProgress();
  const dueCount = countDue();
  document.getElementById('reviewInfo').textContent = dueCount > 0 ? `${dueCount} từ cần ôn hôm nay` : 'Chưa có từ nào đến hạn';

  const nbInfo = document.getElementById('notebookInfo');
  if (nbInfo) {
    const nbCount = getNotebookCount();
    nbInfo.textContent = nbCount > 0 ? nbCount + ' từ đã lưu' : 'Chưa có từ nào';
  }

  document.getElementById('topicGrid').innerHTML = VOCAB.map(t => {
    const learned = t.words.filter(w => prog[`${t.id}_${w.en}`]).length;
    return `<div class="topic-card" onclick="openTopic('${t.id}')"><div class="topic-icon">${t.icon}</div><div class="topic-name">${t.name}</div><div class="topic-count">${learned}/${t.words.length} từ</div></div>`;
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
    <button class="btn-big orange" onclick="startSession('${tid}','learn')"><div class="icon">📖</div><div class="text"><div class="title">Học từ mới</div><div class="sub">Học 5-10 từ chưa thuộc</div></div><div class="arrow">›</div></button>
    <button class="btn-big purple" onclick="startSession('${tid}','review')"><div class="icon">🔁</div><div class="text"><div class="title">Ôn tập</div><div class="sub">Ôn các từ đã học</div></div><div class="arrow">›</div></button>
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
    document.getElementById('vocabBody').innerHTML = `<div class="empty-msg"><div style="font-size:60px">🎉</div><h2>Hoàn thành!</h2><p style="margin-top:12px">Bạn đã học/ôn ${s.queue.length} từ</p><button class="btn" style="margin-top:20px;max-width:200px;margin-left:auto;margin-right:auto;display:block" onclick="showPage('vocab')">Quay lại</button></div>`;
    return;
  }
  const w = s.queue[s.idx];
  const total = s.queue.length;
  let html = `<div class="progress-bar"><div class="progress-fill" style="width:${(s.idx/total)*100}%"></div></div>
    <p style="text-align:center;margin-bottom:12px;color:#666;font-size:14px">${s.idx + 1} / ${total}</p>
    <div class="flashcard">
      <div class="flash-en">${w.en}</div>
      <div class="flash-ipa">${w.ipa}</div>
      ${s.showAnswer ? `<div class="flash-vi">${w.vi}</div>${w.ex ? '<div class="flash-ex">📝 ' + w.ex + '</div>' : ''}` : `<div style="color:#999;margin-top:20px">Nhấn "Xem đáp án" để xem nghĩa</div>`}
    </div>
    <button class="flash-btn" onclick="speakText('${w.en.replace(/'/g,"\\'")}', 'en')">🔊 Đọc to</button>`;
  if (!s.showAnswer) { html += `<button class="flash-btn" style="background:#2e7d32" onclick="session.showAnswer=true;renderCard()">👁️ Xem đáp án</button>`; }
  else if (s.mode === 'learn') { html += `<button class="flash-btn" onclick="rateCard('learned')">✅ Đã hiểu, từ tiếp theo</button>`; }
  else { html += `<div class="rate-row"><button class="rate-btn rate-quen" onclick="rateCard('quen')">😵 Quên</button><button class="rate-btn rate-kho" onclick="rateCard('kho')">😕 Khó</button><button class="rate-btn rate-duoc" onclick="rateCard('duoc')">🙂 Được</button><button class="rate-btn rate-de" onclick="rateCard('de')">😎 Dễ</button></div>`; }
  document.getElementById('vocabBody').innerHTML = html;
}

function rateCard(rating) {
  const s = session;
  const w = s.queue[s.idx];
  const key = w._key || `${s.topicId}_${w.en}`;

  // Nếu là sổ tay → lưu vào notebook
  if (s.topicId === 'notebook') {
    const nb = getNotebook();
    const current = nb[key] || { level: 0, nextReview: 0 };
    let newLevel = current.level;
    let delayDays = 0;
    if (s.mode === 'learn' || rating === 'learned') { newLevel = 1; delayDays = 1; }
    else {
      const deltas = { quen: -2, kho: -1, duoc: 1, de: 2 };
      newLevel = Math.max(0, Math.min(5, current.level + deltas[rating]));
      const intervals = [0, 1, 3, 7, 14, 30];
      delayDays = intervals[newLevel];
    }
    nb[key] = { ...current, en: w.en, ipa: w.ipa, vi: w.vi, ex: w.ex, level: newLevel, nextReview: Date.now() + delayDays * 86400000, savedAt: current.savedAt || Date.now() };
    setNotebook(nb);
  } else {
    const prog = getVocabProgress();
    const current = prog[key] || { level: 0, nextReview: 0 };
    let newLevel = current.level;
    let delayDays = 0;
    if (s.mode === 'learn' || rating === 'learned') { newLevel = 1; delayDays = 1; }
    else {
      const deltas = { quen: -2, kho: -1, duoc: 1, de: 2 };
      newLevel = Math.max(0, Math.min(5, current.level + deltas[rating]));
      const intervals = [0, 1, 3, 7, 14, 30];
      delayDays = intervals[newLevel];
    }
    prog[key] = { level: newLevel, nextReview: Date.now() + delayDays * 86400000, en: w.en, vi: w.vi, topicId: s.topicId || w._topicId || '' };
    setVocabProgress(prog);
  }

  s.idx++;
  s.showAnswer = false;
  renderCard();
}
