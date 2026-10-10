/* ========== LEVEL C1 — THÀNH THẠO ========== */
const levelC1 = {
  code: 'C1',
  name: 'Thành thạo',
  desc: 'Kinh doanh, học thuật, tranh luận',
  lessons: [
    {
      id: 'c1_1',
      title: 'Đàm phán kinh doanh',
      level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe đàm phán', content:'A: We offer a 10% discount for a two-year contract.\nB: We need more flexibility on payment terms.', visual:'emoji:🤝💼💰', qs:[['Điều kiện giảm giá?','2-year contract'],['B yêu cầu gì?','flexibility on payment']] },
        { type:'noi', title:'Đàm phán', content:'Đàm phán giá với đối tác', visual:'emoji:🗣️🤝', qs:[['Nói: Chúng tôi có thể chấp nhận nếu...','We can accept if you ...']] },
        { type:'doc', title:'Đọc hợp đồng', content:'Either party may terminate this agreement with 30 days written notice.', visual:'emoji:📄✍️⏰', qs:[['Báo trước bao lâu?','30 days'],['Hình thức?','written notice']] },
        { type:'viet', title:'Viết đề xuất', content:'Viết đề xuất kinh doanh 5 câu', visual:'emoji:✏️📊💼', qs:[['Viết đề xuất','We propose ... / Our offer includes ...']] },
        { type:'dich', title:'Dịch kinh doanh', content:'We look forward to a mutually beneficial partnership', visual:'emoji:🤝📈', qs:[['Nghĩa tiếng Việt?','Chúng tôi mong đợi một mối quan hệ hợp tác đôi bên cùng có lợi']] }
      ]
    },
    {
      id: 'c1_2',
      title: 'Viết học thuật',
      level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe bài giảng', content:'The research methodology combines qualitative interviews with quantitative surveys.', visual:'emoji:🎓📊🔬', qs:[['Phương pháp gì?','research methodology'],['Kết hợp gì?','qualitative + quantitative']] },
        { type:'noi', title:'Thuyết trình', content:'Trình bày quan điểm học thuật', visual:'emoji:🗣️📊🎤', qs:[['Nói: Theo nghiên cứu, ...','According to research, ...']] },
        { type:'doc', title:'Đọc bài báo khoa học', content:'The findings suggest a strong correlation between socioeconomic status and educational outcomes.', visual:'emoji:📄📈🎓', qs:[['Tương quan giữa gì?','socioeconomic status + education'],['Kết luận?','strong correlation']] },
        { type:'viet', title:'Viết luận học thuật', content:'Viết mở bài cho bài luận về AI và việc làm', visual:'emoji:✏️📝🎓', qs:[['Viết mở bài','This essay examines ... / It argues that ...']] },
        { type:'dich', title:'Dịch học thuật', content:'The study provides compelling evidence to support this hypothesis', visual:'emoji:📚✅🔬', qs:[['Nghĩa tiếng Việt?','Nghiên cứu cung cấp bằng chứng thuyết phục ủng hộ giả thuyết này']] }
      ]
    },
    {
      id: 'c1_3',
      title: 'Tranh luận & Thuyết phục',
      level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe tranh luận', content:'While I acknowledge the merits of your argument, I must respectfully disagree with your conclusion.', visual:'emoji:🗣️⚖️💭', qs:[['Thừa nhận gì?','merits of argument'],['Họ làm gì?','respectfully disagree']] },
        { type:'noi', title:'Phản biện', content:'Phản biện một quan điểm', visual:'emoji:💬🤔⚖️', qs:[['Nói: Tôi hiểu quan điểm của bạn, nhưng...','I understand your point, but ...']] },
        { type:'doc', title:'Đọc bài tranh luận', content:'Critics argue that the policy is well-intentioned but ultimately counterproductive.', visual:'emoji:📰⚖️💭', qs:[['Chỉ trích gì?','well-intentioned'],['Kết luận?','counterproductive']] },
        { type:'viet', title:'Viết phản biện', content:'Viết 5 câu phản biện về mạng xã hội', visual:'emoji:✏️📱⚖️', qs:[['Viết 5 câu','While social media has ... / Nevertheless, ...']] },
        { type:'dich', title:'Dịch tranh luận', content:'It is imperative that we address this issue without further delay', visual:'emoji:⚠️⏰💪', qs:[['Nghĩa tiếng Việt?','Điều cấp thiết là chúng ta phải giải quyết vấn đề này không chậm trễ']] }
      ]
    }
  ]
};
