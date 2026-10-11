/* ========== LỘ TRÌNH (ACCORDION) ========== */
let currentLessonSkills = [];

function renderRoadmap() {
  const done = getDone();
  document.getElementById('roadmapList').innerHTML = roadmap.map(lv => `
    <div class="level level-${lv.code.toLowerCase()}" id="level-${lv.code}">
      <div class="level-header" onclick="toggleLevelAccordion('${lv.code}')">
        <div class="level-code">${lv.code}</div>
        <div class="level-text">
          <div class="level-title">${lv.name}</div>
          <div class="level-desc">${lv.desc}</div>
        </div>
        <div class="level-arrow">▼</div>
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

function toggleLevelAccordion(code) {
  const allLevels = document.querySelectorAll('.level');
  const current = document.getElementById('level-' + code);
  const isOpen = current.classList.contains('open');

  // Đóng tất cả
  allLevels.forEach(l => l.classList.remove('open'));

  // Nếu current chưa mở → mở
  if (!isOpen) {
    current.classList.add('open');
    // Cuộn tới level vừa mở
    setTimeout(() => {
      current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}

/* ========== VISUAL ========== */
function renderVisual(visual) {
  if (!visual) return '';
  const parts = visual.split(':');
  const kind = parts[0];
  const data = parts[1] || '';

  if (kind === 'colors') {
    const colorMap = { red:'#e53935', blue:'#1e88e5', green:'#43a047', yellow:'#fdd835', black:'#212121', white:'#ffffff', orange:'#fb8c00', purple:'#8e24aa', pink:'#ec407a', brown:'#6d4c41', gray:'#757575' };
    const items = data.split(',').map(c => {
      const hex = colorMap[c.trim().toLowerCase()] || '#cccccc';
      const border = c.trim().toLowerCase() === 'white' ? '#ccc' : hex;
      return '<div class="color-swatch" style="background:' + hex + ';border-color:' + border + '" data-name="' + c.trim() + '"></div>';
    }).join('');
    return '<div class="visual-box"><div class="color-row">' + items + '</div></div>';
  }
  if (kind === 'numbers') {
    const nums = data.split(',').map(n => n.trim()).filter(x => x);
    const wordMap = { '1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine','10':'ten','11':'eleven','12':'twelve','13':'thirteen','14':'fourteen','15':'fifteen','16':'sixteen','17':'seventeen','18':'eighteen','19':'nineteen','20':'twenty','30':'thirty','40':'forty','50':'fifty','60':'sixty','70':'seventy','80':'eighty','90':'ninety','100':'hundred' };
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

/* ========== NÚT LUYỆN ĐỌC THÔNG MINH ========== */
function renderSpeakButtons(content, si) {
  const text = content.replace(/\n/g, ' ').trim();
  const words = text.split(/\s+/).filter(w => w);

  if (/[.!?]/.test(text) && words.length >= 5) {
    return '<button class="q-btn" style="width:100%;margin-bottom:12px;padding:12px;background:#43a047" onclick="openSpeakFromSkill(' + si + ')">🎤 Luyện đọc câu này</button>';
  }

  const parts = text.split(/[,;]/).map(s => s.trim()).filter(s => s);
  const shortParts = parts.filter(p => p.split(/\s+/).length <= 2);
  if (parts.length >= 3 && shortParts.length === parts.length) {
    let html = '<div style="margin-bottom:12px"><div style="font-size:13px;color:#666;margin-bottom:8px">🎤 Bấm từng từ để luyện đọc:</div><div style="display:flex;flex-wrap:wrap;gap:6px">';
    for (const p of parts) {
      const safe = p.replace(/'/g, "\\'");
      html += '<button style="padding:8px 12px;background:#43a047;color:white;border:none;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer" onclick="openSpeak(\'' + safe + '\')">🎤 ' + p + '</button>';
    }
    html += '</div></div>';
    return html;
  }

  return '<button class="q-btn" style="width:100%;margin-bottom:12px;padding:12px;background:#43a047" onclick="openSpeakFromSkill(' + si + ')">🎤 Luyện đọc</button>';
}

function openSpeakFromSkill(si) {
  if (!currentLessonSkills[si]) return;
  openSpeak(currentLessonSkills[si].content);
}

/* ========== MỞ BÀI HỌC ========== */
function openLesson(id) {
  let lesson;
  for (const lv of roadmap) { const f = lv.lessons.find(l => l.id === id); if (f) { lesson = f; break; } }
  currentLessonSkills = lesson.skills;
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
      <button class="q-btn" style="width:100%;margin-bottom:8px;padding:12px;background:#3f51b5" onclick="speakFromSkill(${si})">🔊 Đọc to</button>
      ${renderSpeakButtons(s.content, si)}
      <button class="q-btn" style="width:100%;margin-bottom:8px;padding:12px;background:#f57c00" onclick="extractVocabFromSkill(${si})">🔍 Trích xuất từ vựng</button>
      <div id="vocabExtractResult-${si}"></div>
      <div style="font-weight:700;margin-bottom:8px;margin-top:12px">Câu hỏi luyện tập:</div>
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

function speakFromSkill(si) {
  if (!currentLessonSkills[si]) return;
  speakText(currentLessonSkills[si].content);
}

function extractVocabFromSkill(si) {
  if (!currentLessonSkills[si]) return;
  extractVocabFromLesson(currentLessonSkills[si].content, 'vocabExtractResult-' + si);
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
