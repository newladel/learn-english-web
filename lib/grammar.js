/* ========== HIỂN THỊ NGỮ PHÁP ========== */
function renderGrammar() {
  const list = document.getElementById('grammarList');
  if (!list) return;

  const levels = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1'];
  let html = '';
  for (const lv of levels) {
    const items = GRAMMAR.filter(g => g.level === lv);
    if (items.length === 0) continue;
    html += '<h3 style="margin:20px 0 12px;font-size:16px;color:#3f51b5">Cấp ' + lv + '</h3>';
    html += '<div style="display:flex;flex-direction:column;gap:10px">';
    for (const g of items) {
      html += '<div onclick="openGrammar(\'' + g.id + '\')" style="background:#fff;padding:14px;border-radius:12px;box-shadow:0 1px 4px rgba(0,0,0,.08);cursor:pointer;display:flex;align-items:center;gap:12px">';
      html += '<div style="flex:1"><div style="font-weight:700;font-size:15px;color:#222">' + g.title + '</div>';
      html += '<div style="font-size:13px;color:#666;margin-top:2px">' + g.formula + '</div></div>';
      html += '<div style="color:#999;font-size:20px">›</div>';
      html += '</div>';
    }
    html += '</div>';
  }
  list.innerHTML = html;
}

function openGrammar(id) {
  const g = GRAMMAR.find(x => x.id === id);
  if (!g) return;

  document.getElementById('grammarTitle').textContent = g.title;

  let html = '';

  html += '<div class="setting-box">';
  html += '<div style="font-size:13px;color:#666;margin-bottom:6px">Công thức</div>';
  html += '<div style="background:#e8eaf6;padding:14px;border-radius:10px;font-size:16px;font-weight:700;color:#3f51b5;text-align:center">' + g.formula + '</div>';
  html += '</div>';

  html += '<div class="setting-box">';
  html += '<div style="font-size:13px;color:#666;margin-bottom:6px">Khi nào dùng</div>';
  html += '<div style="font-size:15px;line-height:1.6">' + g.when + '</div>';
  html += '</div>';

  html += '<div class="setting-box">';
  html += '<div style="font-weight:700;margin-bottom:12px">📝 Ví dụ</div>';
  for (const ex of g.examples) {
    const safeEn = ex.en.replace(/'/g, "\\'");
    html += '<div style="margin-bottom:12px;padding:12px;background:#f9f9f9;border-radius:10px">';
    html += '<div style="font-size:12px;color:#666;margin-bottom:4px">' + ex.type + '</div>';
    html += '<div style="font-size:15px;color:#3f51b5;font-weight:600;margin-bottom:4px">' + ex.en + ' <button style="background:#3f51b5;color:white;border:none;width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:12px" onclick="speakText(\'' + safeEn + '\', \'en\')">🔊</button></div>';
    html += '<div style="font-size:14px;color:#2e7d32">' + ex.vi + '</div>';
    html += '</div>';
  }
  html += '</div>';

  if (g.mistakes && g.mistakes.length > 0) {
    html += '<div class="setting-box">';
    html += '<div style="font-weight:700;margin-bottom:12px">⚠️ Lỗi thường gặp</div>';
    for (const m of g.mistakes) {
      html += '<div style="margin-bottom:12px;padding:12px;background:#fff3e0;border-radius:10px">';
      html += '<div style="color:#c62828;font-size:14px">❌ ' + m.wrong + '</div>';
      html += '<div style="color:#2e7d32;font-size:14px;margin-top:4px">✅ ' + m.right + '</div>';
      html += '<div style="color:#666;font-size:13px;margin-top:6px;font-style:italic">💡 ' + m.note + '</div>';
      html += '</div>';
    }
    html += '</div>';
  }

  if (g.exercises && g.exercises.length > 0) {
    html += '<div class="setting-box">';
    html += '<div style="font-weight:700;margin-bottom:12px">✏️ Bài tập</div>';
    for (let i = 0; i < g.exercises.length; i++) {
      const ex = g.exercises[i];
      html += '<div style="margin-bottom:14px">';
      html += '<div style="font-size:15px;margin-bottom:8px">' + (i+1) + '. ' + ex.q + '</div>';
      html += '<input type="text" class="ans-input" id="gram-inp-' + i + '" placeholder="Nhập đáp án...">';
      html += '<div style="display:flex;gap:8px">';
      html += '<button class="q-btn" onclick="checkGrammar(' + i + ', \'' + ex.a.replace(/'/g, "\\'") + '\')">✓ Kiểm tra</button>';
      html += '<button class="q-btn gray" onclick="document.getElementById(\'gram-ans-' + i + '\').classList.toggle(\'show\')">Xem đáp án</button>';
      html += '</div>';
      html += '<div class="q-ans" id="gram-ans-' + i + '">Đáp án: ' + ex.a + '</div>';
      html += '<div id="gram-res-' + i + '"></div>';
      html += '</div>';
    }
    html += '</div>';
  }

  document.getElementById('grammarBody').innerHTML = html;
  showPage('grammar-detail');
}

function checkGrammar(i, correct) {
  const inp = document.getElementById('gram-inp-' + i).value.trim().toLowerCase();
  const res = document.getElementById('gram-res-' + i);
  if (!inp) { res.innerHTML = '<div class="result-msg warn">Vui lòng nhập câu trả lời</div>'; return; }
  const c = correct.toLowerCase();
  // So sánh linh hoạt: bỏ khoảng trắng thừa và dấu /
  const norm = s => s.replace(/\s+/g, ' ').replace(/\s*\/\s*/g, ' / ').trim();
  const ok = norm(inp) === norm(c) || c.includes(inp) || inp.includes(c.split(' / ')[0]) || inp === c.split(' / ')[0];
  res.innerHTML = ok ? '<div class="result-msg ok">✅ Chính xác!</div>' : '<div class="result-msg bad">❌ Chưa đúng. Thử lại hoặc xem đáp án.</div>';
}
