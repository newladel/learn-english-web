/* ========== ĐỘNG TỪ BẤT QUY TẮC ========== */
let ivFilter = 0; // 0 = tất cả, 1/2/3 = level

function renderIrregularVerbs() {
  const list = document.getElementById('ivList');
  if (!list) return;

  const filtered = ivFilter === 0 ? IRREGULAR_VERBS : IRREGULAR_VERBS.filter(v => v.level === ivFilter);
  const stats = {
    total: IRREGULAR_VERBS.length,
    l1: IRREGULAR_VERBS.filter(v => v.level === 1).length,
    l2: IRREGULAR_VERBS.filter(v => v.level === 2).length,
    l3: IRREGULAR_VERBS.filter(v => v.level === 3).length
  };

  let html = '';

  // Filter buttons
  html += '<div class="iv-filters">';
  html += '<button class="iv-filter-btn ' + (ivFilter === 0 ? 'active' : '') + '" onclick="ivSetFilter(0)">Tất cả (' + stats.total + ')</button>';
  html += '<button class="iv-filter-btn ' + (ivFilter === 1 ? 'active' : '') + '" onclick="ivSetFilter(1)">Cơ bản (' + stats.l1 + ')</button>';
  html += '<button class="iv-filter-btn ' + (ivFilter === 2 ? 'active' : '') + '" onclick="ivSetFilter(2)">Trung bình (' + stats.l2 + ')</button>';
  html += '<button class="iv-filter-btn ' + (ivFilter === 3 ? 'active' : '') + '" onclick="ivSetFilter(3)">Nâng cao (' + stats.l3 + ')</button>';
  html += '</div>';

  // Practice buttons
  html += '<div class="btn-row" style="margin-bottom:16px">';
  html += '<button class="btn" style="background:#43a047" onclick="ivStartPractice()">✏️ Luyện tập</button>';
  html += '<button class="btn secondary" onclick="ivToggleAll()">👁️ Ẩn/Hiện V3</button>';
  html += '</div>';

  // Table
  html += '<div class="iv-table-wrap">';
  html += '<table class="iv-table">';
  html += '<thead><tr><th>V1</th><th>V2</th><th>V3</th><th>Nghĩa</th><th></th></tr></thead>';
  html += '<tbody>';
  for (const v of filtered) {
    const safeV1 = v.v1.replace(/'/g, "\\'");
    const safeV3 = v.v3.replace(/'/g, "\\'");
    html += '<tr>';
    html += '<td><b style="color:#3f51b5">' + v.v1 + '</b></td>';
    html += '<td style="color:#f57c00">' + v.v2 + '</td>';
    html += '<td class="iv-v3" style="color:#d81b60">' + v.v3 + '</td>';
    html += '<td style="font-size:13px;color:#2e7d32">' + v.vi + '</td>';
    html += '<td><button style="background:#3f51b5;color:white;border:none;width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:14px" onclick="speakText(\'' + safeV1 + '\', \'en\')">🔊</button></td>';
    html += '</tr>';
  }
  html += '</tbody></table>';
  html += '</div>';

  list.innerHTML = html;
}

function ivSetFilter(level) {
  ivFilter = level;
  renderIrregularVerbs();
}

function ivToggleAll() {
  const cells = document.querySelectorAll('.iv-v3');
  let hidden = false;
  cells.forEach(c => {
    if (c.style.visibility !== 'hidden') {
      c.style.visibility = 'hidden';
      hidden = true;
    }
  });
  if (!hidden) cells.forEach(c => c.style.visibility = 'visible');
}

/* ========== LUYỆN TẬP ========== */
let ivSession = { queue: [], idx: 0, mode: 'v3', showAnswer: false };

function ivStartPractice() {
  const source = ivFilter === 0 ? IRREGULAR_VERBS : IRREGULAR_VERBS.filter(v => v.level === ivFilter);
  if (source.length === 0) { alert('Không có động từ để luyện.'); return; }
  const queue = source.slice().sort(() => Math.random() - 0.5).slice(0, 10);
  ivSession = { queue, idx: 0, mode: 'v3', showAnswer: false };
  showPage('iv-practice');
  ivRenderCard();
}

function ivRenderCard() {
  const s = ivSession;
  const body = document.getElementById('ivPracticeBody');
  if (!body) return;

  if (s.idx >= s.queue.length) {
    body.innerHTML = '<div class="empty-msg"><div style="font-size:60px">🎉</div><h2>Hoàn thành!</h2><p style="margin-top:12px">Bạn đã luyện ' + s.queue.length + ' động từ</p><button class="btn" style="margin-top:20px;max-width:200px;margin-left:auto;margin-right:auto;display:block" onclick="showPage(\'irregular\')">Quay lại</button></div>';
    return;
  }

  const v = s.queue[s.idx];
  const total = s.queue.length;
  let html = '';
  html += '<div class="progress-bar"><div class="progress-fill" style="width:' + ((s.idx / total) * 100) + '%"></div></div>';
  html += '<p style="text-align:center;margin-bottom:16px;color:#666;font-size:14px">' + (s.idx + 1) + ' / ' + total + '</p>';

  html += '<div class="flashcard" style="min-height:220px">';
  html += '<div style="font-size:14px;color:#666;margin-bottom:12px">V1 (nguyên thể)</div>';
  html += '<div class="flash-en">' + v.v1 + '</div>';
  html += '<div style="font-size:14px;color:#2e7d32;margin-top:8px">' + v.vi + '</div>';
  html += '</div>';

  html += '<div class="setting-box">';
  html += '<div style="font-weight:700;margin-bottom:8px">V2 (quá khứ) và V3 (quá khứ phân từ)?</div>';
  if (!s.showAnswer) {
    html += '<button class="flash-btn" style="background:#43a047" onclick="ivSession.showAnswer=true;ivRenderCard()">👁️ Xem đáp án</button>';
  } else {
    html += '<div style="background:#fff3e0;padding:12px;border-radius:8px;margin-bottom:12px">';
    html += '<div style="font-size:14px;color:#666">V2</div>';
    html += '<div style="font-size:20px;font-weight:700;color:#f57c00;margin-bottom:8px">' + v.v2 + '</div>';
    html += '<div style="font-size:14px;color:#666">V3</div>';
    html += '<div style="font-size:20px;font-weight:700;color:#d81b60">' + v.v3 + '</div>';
    html += '</div>';
    html += '<div style="background:#f9f9f9;padding:12px;border-radius:8px;font-style:italic;font-size:14px;color:#555">📝 ' + v.ex + '</div>';
    html += '<button class="flash-btn" style="margin-top:12px" onclick="ivNext()">✅ Đã hiểu, tiếp theo</button>';
  }
  html += '</div>';

  body.innerHTML = html;
}

function ivNext() {
  ivSession.idx++;
  ivSession.showAnswer = false;
  ivRenderCard();
}
