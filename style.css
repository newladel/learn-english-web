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
  if (name === 'grammar') renderGrammar();
  if (name === 'chat') renderChat();
  if (name === 'irregular') renderIrregularVerbs();
}
