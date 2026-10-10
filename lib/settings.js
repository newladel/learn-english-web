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
