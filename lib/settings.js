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
