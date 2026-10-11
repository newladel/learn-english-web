/* ========== TRANG GIỚI THIỆU ========== */
function loadSettings() {
  const html = `
    <div class="setting-box" style="text-align:center">
      <div style="font-size:64px;margin-bottom:12px">📚</div>
      <h2 style="color:#3f51b5;margin-bottom:8px">Learn English</h2>
      <div style="color:#666;font-size:14px">Học tiếng Anh 0 → C1</div>
      <div style="color:#999;font-size:13px;margin-top:4px">Phiên bản 1.0</div>
    </div>

    <div class="setting-box">
      <div style="font-weight:700;margin-bottom:12px;font-size:16px">💾 Sao lưu & Phục hồi</div>
      <div class="setting-hint" style="margin-bottom:12px">Xuất dữ liệu để chuyển sang máy khác, hoặc backup đề phòng mất.</div>
      <div class="btn-row">
        <button class="btn" style="background:#3f51b5" onclick="exportData()">📤 Xuất dữ liệu</button>
        <button class="btn" style="background:#43a047" onclick="triggerImport()">📥 Nhập dữ liệu</button>
      </div>
      <input type="file" id="importFile" accept=".json" style="display:none" onchange="handleImport(event)">
      <div id="backupStatus" style="margin-top:12px;font-size:14px"></div>
    </div>

    <div class="setting-box">
      <div style="font-weight:700;margin-bottom:12px;font-size:16px">✨ Tính năng</div>
      <div style="line-height:2;font-size:14px">
        📚 <b>Lộ trình A0 → C1</b> — 6 cấp độ, đủ 5 kỹ năng<br>
        🃏 <b>Từ vựng Flashcard</b> — 6 chủ đề + Sổ tay cá nhân<br>
        📖 <b>Ngữ pháp</b> — Công thức + ví dụ + bài tập<br>
        🎤 <b>Luyện phát âm</b> — Chấm điểm bằng AI<br>
        ✍️ <b>Sửa lỗi viết</b> — AI phân tích chi tiết<br>
        🌐 <b>Dịch 2 chiều</b> — Anh ⇄ Việt<br>
        🔍 <b>Trích xuất từ vựng</b> — Tự động từ bài học
      </div>
    </div>

    <div class="setting-box">
      <div style="font-weight:700;margin-bottom:12px;font-size:16px">🎯 Cách dùng</div>
      <div style="line-height:1.8;font-size:14px">
        1. Vào <b>Lộ trình học</b> → chọn cấp độ phù hợp<br>
        2. Học từng bài → làm bài tập<br>
        3. Bấm <b>🔍 Trích xuất từ vựng</b> để thêm từ vào Sổ tay<br>
        4. Mỗi ngày ôn tập để giữ streak 🔥<br>
        5. Dùng <b>Luyện phát âm</b> để cải thiện nói
      </div>
    </div>

    <div class="setting-box">
      <div style="font-weight:700;margin-bottom:12px;font-size:16px">💡 Mẹo học tốt</div>
      <div style="line-height:1.8;font-size:14px">
        • Học <b>15-30 phút mỗi ngày</b> tốt hơn 3 tiếng cuối tuần<br>
        • Luôn <b>đọc to</b> khi học từ mới<br>
        • Dùng <b>AI sửa lỗi viết</b> mỗi tuần để kiểm tra tiến bộ<br>
        • Đừng sợ sai — sai rồi sửa mới giỏi
      </div>
    </div>

    <div class="setting-box" style="text-align:center">
      <div style="color:#666;font-size:13px;line-height:1.6">
        Made with ❤️ for Vietnamese learners<br>
        Sử dụng Gemini AI miễn phí của Google
      </div>
    </div>
  `;

  const about = document.getElementById('aboutBody');
  if (about) about.innerHTML = html;
}

/* ========== XUẤT DỮ LIỆU ========== */
function exportData() {
  const keys = ['done_lessons', 'streak', 'last_day', 'vocab_progress', 'notebook', 'translate_dir'];
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    data: {}
  };
  for (const k of keys) {
    const v = localStorage.getItem(k);
    if (v !== null) data.data[k] = v;
  }

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const date = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = 'learn-english-backup-' + date + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  const status = document.getElementById('backupStatus');
  if (status) status.innerHTML = '<span style="color:#2e7d32">✅ Đã xuất file backup!</span>';
}

/* ========== NHẬP DỮ LIỆU ========== */
function triggerImport() {
  const f = document.getElementById('importFile');
  if (f) f.click();
}

function handleImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.data || typeof data.data !== 'object') {
        throw new Error('File không đúng định dạng');
      }

      const count = Object.keys(data.data).length;
      if (count === 0) {
        throw new Error('File không có dữ liệu');
      }

      if (!confirm('Nhập dữ liệu từ file backup?\n\nDữ liệu hiện tại sẽ bị GHI ĐÈ.\n\nSố mục: ' + count)) {
        return;
      }

      for (const k of Object.keys(data.data)) {
        localStorage.setItem(k, data.data[k]);
      }

      const status = document.getElementById('backupStatus');
      if (status) status.innerHTML = '<span style="color:#2e7d32">✅ Đã nhập ' + count + ' mục dữ liệu! Đang tải lại...</span>';

      setTimeout(function() { location.reload(); }, 1500);

    } catch (err) {
      const status = document.getElementById('backupStatus');
      if (status) status.innerHTML = '<span style="color:#c62828">❌ Lỗi: ' + err.message + '</span>';
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}
