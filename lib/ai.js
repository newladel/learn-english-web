/* ========== GỌI GEMINI API ========== */
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
