/* ========== URL PROXY APPS SCRIPT ========== */
const PROXY_URL = 'https://script.google.com/macros/s/AKfycbzBI0dQMSGrQwX_IASWbDuZ7uTwRJwNjbxwyhscJb0ys9R6d6va42YGnqOssYG-7rVA/exec';

/* ========== GỌI PROXY CHUNG ========== */
async function callProxy(action, payload) {
  try {
    const r = await fetch(PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(Object.assign({ action: action }, payload || {}))
    });
    const d = await r.json();
    return d;
  } catch (e) {
    return { ok: false, error: 'Lỗi mạng: ' + e.message };
  }
}

/* ========== AI SỬA LỖI VIẾT ========== */
async function checkWriting() {
  const text = document.getElementById('writeInput').value.trim();
  if (!text) { alert('Vui lòng viết gì đó trước!'); return; }
  if (text.length < 5) { alert('Viết ít nhất 5 ký tự!'); return; }
  const res = document.getElementById('writeResult');
  res.innerHTML = '<div class="result">🤖 Đang chấm bài...</div>';

  const d = await callProxy('check-writing', { text: text });
  if (!d) return;
  if (!d.ok) {
    res.innerHTML = '<div class="result" style="background:#ffebee;color:#c62828"><b>Lỗi:</b><br>' + (d.error || 'Không xác định') + '</div>';
    return;
  }
  res.innerHTML = '<div class="result" style="white-space:pre-wrap;line-height:1.7">' + d.result + '</div>';
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

  document.getElementById('translateResult').innerHTML = '<div class="result">Đang dịch...</div>';
  const d = await callProxy('translate', { text: text, dir: currentDir });
  if (!d) return;
  if (!d.ok) {
    document.getElementById('translateResult').innerHTML = '<div class="result" style="background:#ffebee;color:#c62828"><b>Lỗi:</b><br>' + (d.error || 'Không xác định') + '</div>';
    return;
  }
  document.getElementById('translateResult').innerHTML = '<div class="result">' + d.result.replace(/\n/g, '<br>') + '</div>';
}
