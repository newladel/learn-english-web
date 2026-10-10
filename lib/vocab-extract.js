/* ========== TRÍCH XUẤT TỪ VỰNG TỪ BÀI HỌC ========== */
let extractedVocab = [];
let extractTargetId = '';

async function extractVocabFromLesson(content, targetId) {
  if (!content || content.length < 5) { alert('Nội dung quá ngắn để trích xuất.'); return; }
  extractTargetId = targetId || 'vocabExtractResult';
  const result = document.getElementById(extractTargetId);
  if (!result) { alert('Lỗi giao diện. Refresh trang.'); return; }

  result.innerHTML = '<div class="result">🤖 Đang phân tích từ vựng...</div>';

  const d = await callProxy('extract-vocab', { content: content });
  if (!d) { result.innerHTML = ''; return; }
  if (!d.ok) {
    result.innerHTML = '<div class="result" style="background:#ffebee;color:#c62828"><b>Lỗi:</b><br>' + (d.error || 'Không xác định') + '<br><br><small>' + (d.raw || '') + '</small></div>';
    return;
  }

  const arr = d.vocab;
  if (!Array.isArray(arr) || arr.length === 0) {
    result.innerHTML = '<div class="result" style="background:#fff3e0">Không có từ nào được trích xuất.</div>';
    return;
  }

  extractedVocab = arr;

  let html = '<div style="margin-top:16px;padding:14px;background:#fff;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.08)">';
  html += '<div style="font-weight:700;margin-bottom:12px;font-size:15px">✨ Từ vựng trích xuất (' + arr.length + ' từ)</div>';
  html += '<div style="display:flex;flex-direction:column;gap:8px">';
  for (let i = 0; i < arr.length; i++) {
    const w = arr[i];
    const safeEn = (w.en || '').replace(/'/g, "\\'");
    html += '<div style="background:#f9f9f9;padding:10px 12px;border-radius:8px;display:flex;align-items:center;gap:10px">';
    html += '<div style="flex:1"><b style="color:#3f51b5">' + (w.en || '') + '</b>';
    if (w.ipa) html += ' <span style="color:#666;font-size:13px">' + w.ipa + '</span>';
    html += '<br><span style="color:#2e7d32;font-size:14px">' + (w.vi || '') + '</span></div>';
    html += '<button style="background:#3f51b5;color:white;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer;font-size:16px" onclick="speakText(\'' + safeEn + '\', \'en\')">🔊</button>';
    html += '</div>';
  }
  html += '</div>';
  html += '<button class="btn" style="margin-top:14px;background:#2e7d32" onclick="saveExtractedVocab()">💾 Lưu tất cả vào Sổ tay</button>';
  html += '</div>';

  result.innerHTML = html;
}

function saveExtractedVocab() {
  if (extractedVocab.length === 0) { alert('Không có từ nào để lưu.'); return; }

  const notebook = getNotebook();
  let addedCount = 0;
  for (const w of extractedVocab) {
    if (!w.en) continue;
    const key = 'nb_' + w.en.toLowerCase().trim();
    if (!notebook[key]) {
      notebook[key] = {
        en: w.en,
        ipa: w.ipa || '',
        vi: w.vi || '',
        ex: '',
        level: 0,
        nextReview: Date.now(),
        savedAt: Date.now()
      };
      addedCount++;
    }
  }
  setNotebook(notebook);

  const result = document.getElementById(extractTargetId);
  if (result) {
    result.innerHTML = '<div class="result" style="background:#e8f5e9;color:#2e7d32;text-align:center;font-weight:700">✅ Đã lưu ' + addedCount + ' từ mới vào Sổ tay!<br><span style="font-weight:400;font-size:14px">Vào Từ vựng → Sổ tay của tôi để ôn.</span></div>';
  }
  extractedVocab = [];
}

/* ========== SỔ TAY CÁ NHÂN ========== */
function getNotebook() { return JSON.parse(localStorage.getItem('notebook') || '{}'); }
function setNotebook(n) { localStorage.setItem('notebook', JSON.stringify(n)); }
function getNotebookCount() { return Object.keys(getNotebook()).length; }

function openNotebook() {
  const notebook = getNotebook();
  const keys = Object.keys(notebook);
  document.getElementById('vocabTitle').textContent = '📓 Sổ tay của tôi';

  if (keys.length === 0) {
    document.getElementById('vocabBody').innerHTML = '<div class="empty-msg"><div style="font-size:60px">📓</div><h2>Sổ tay trống</h2><p style="margin-top:12px">Vào bài học → bấm "🔍 Trích xuất từ vựng" để thêm từ.</p></div>';
    showPage('vocab-learn');
    return;
  }

  const now = Date.now();
  const dueCount = keys.filter(k => notebook[k].nextReview <= now).length;

  let html = '<div class="progress-bar"><div class="progress-fill" style="width:100%"></div></div>';
  html += '<p style="text-align:center;margin-bottom:16px;color:#666">' + keys.length + ' từ | ' + dueCount + ' từ cần ôn</p>';

  if (dueCount > 0) {
    html += '<button class="btn-big purple" onclick="startNotebookReview()" style="margin-bottom:12px"><div class="icon">🔁</div><div class="text"><div class="title">Ôn tập</div><div class="sub">' + dueCount + ' từ đến hạn</div></div><div class="arrow">›</div></button>';
  }
  html += '<button class="btn-big orange" onclick="startNotebookLearn()" style="margin-bottom:12px"><div class="icon">📖</div><div class="text"><div class="title">Học tất cả</div><div class="sub">Ôn toàn bộ sổ tay</div></div><div class="arrow">›</div></button>';

  html += '<h3 style="margin:20px 0 12px;font-size:16px">Danh sách từ (' + keys.length + ')</h3>';
  html += '<div style="display:flex;flex-direction:column;gap:8px">';
  for (const k of keys) {
    const w = notebook[k];
    const safeEn = w.en.replace(/'/g, "\\'");
    html += '<div style="background:#fff;padding:12px;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,.08);display:flex;align-items:center;gap:10px">';
    html += '<div style="flex:1"><b style="color:#3f51b5">' + w.en + '</b>';
    if (w.ipa) html += ' <span style="color:#666;font-size:12px">' + w.ipa + '</span>';
    html += '<br><span style="color:#2e7d32;font-size:14px">' + w.vi + '</span></div>';
    html += '<button style="background:#3f51b5;color:white;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer" onclick="speakText(\'' + safeEn + '\', \'en\')">🔊</button>';
    html += '<button style="background:#c62828;color:white;border:none;width:36px;height:36px;border-radius:50%;cursor:pointer" onclick="deleteNotebookWord(\'' + k + '\')">🗑️</button>';
    html += '</div>';
  }
  html += '</div>';

  document.getElementById('vocabBody').innerHTML = html;
  showPage('vocab-learn');
}

function deleteNotebookWord(key) {
  if (!confirm('Xóa từ này khỏi sổ tay?')) return;
  const notebook = getNotebook();
  delete notebook[key];
  setNotebook(notebook);
  openNotebook();
}

function startNotebookLearn() {
  const notebook = getNotebook();
  const keys = Object.keys(notebook);
  if (keys.length === 0) return;
  const queue = keys.map(k => ({ ...notebook[k], _key: k, _topicId: 'notebook' }));
  session = { queue: queue.sort(() => Math.random() - 0.5), idx: 0, topicId: 'notebook', mode: 'learn', showAnswer: false };
  renderCard();
}

function startNotebookReview() {
  const notebook = getNotebook();
  const now = Date.now();
  const keys = Object.keys(notebook).filter(k => notebook[k].nextReview <= now);
  if (keys.length === 0) { alert('Hôm nay chưa có từ nào cần ôn!'); return; }
  const queue = keys.map(k => ({ ...notebook[k], _key: k, _topicId: 'notebook' }));
  session = { queue, idx: 0, topicId: 'notebook', mode: 'review-all', showAnswer: false };
  renderCard();
}
