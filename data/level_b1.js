/* ========== LEVEL B1 — TRUNG CẤP ========== */
const levelB1 = {
  code: 'B1',
  name: 'Trung cấp',
  desc: 'Công việc, du lịch, sức khỏe',
  lessons: [
    {
      id: 'b1_1',
      title: 'Phỏng vấn xin việc',
      level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe phỏng vấn', content:'Interviewer: Tell me about yourself.\nCandidate: I have 3 years of experience in marketing.', visual:'emoji:💼🎤', qs:[['Mấy năm kinh nghiệm?','3 years'],['Lĩnh vực gì?','marketing']] },
        { type:'noi', title:'Tự giới thiệu', content:'Giới thiệu bản thân trong 30 giây', visual:'emoji:🗣️👤', qs:[['Nói: Tôi có kinh nghiệm về...','I have experience in ...']] },
        { type:'doc', title:'Đọc mô tả công việc', content:'We are looking for a candidate with strong communication skills and 2+ years of experience.', visual:'emoji:📄💼', qs:[['Cần kỹ năng gì?','communication'],['Kinh nghiệm bao nhiêu?','2+ years']] },
        { type:'viet', title:'Viết email ứng tuyển', content:'Viết email ngắn ứng tuyển vị trí marketing', visual:'emoji:✏️📧', qs:[['Viết email','Dear Sir/Madam, I am writing to apply for ...']] },
        { type:'dich', title:'Dịch phỏng vấn', content:'What are your strengths and weaknesses?', visual:'emoji:💪⚠️', qs:[['Nghĩa tiếng Việt?','Điểm mạnh và điểm yếu của bạn là gì?']] }
      ]
    },
    {
      id: 'b1_2',
      title: 'Du lịch & Khách sạn',
      level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe đặt phòng', content:'Receptionist: How many nights would you like to stay?\nGuest: Three nights, please.', visual:'emoji:🏨🌙', qs:[['Ở mấy đêm?','three'],['Ai hỏi?','receptionist']] },
        { type:'noi', title:'Đặt phòng', content:'Đặt phòng 2 đêm cho 2 người', visual:'emoji:🛏️👥', qs:[['Nói: Tôi muốn đặt phòng cho 2 người','I would like to book a room for two']] },
        { type:'doc', title:'Đọc mô tả khách sạn', content:'The hotel offers free breakfast, Wi-Fi, and a swimming pool.', visual:'emoji:🏨🍳📶🏊', qs:[['Có gì miễn phí?','breakfast, Wi-Fi'],['Tiện nghi gì?','swimming pool']] },
        { type:'viet', title:'Viết email đặt phòng', content:'Viết email đặt phòng 3 đêm', visual:'emoji:✏️🏨', qs:[['Viết email','I would like to book a room for 3 nights from ...']] },
        { type:'dich', title:'Dịch du lịch', content:'Could you recommend a good restaurant nearby?', visual:'emoji:🍽️📍', qs:[['Nghĩa tiếng Việt?','Bạn có thể giới thiệu một nhà hàng ngon gần đây không?']] }
      ]
    },
    {
      id: 'b1_3',
      title: 'Sức khỏe & Bác sĩ',
      level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe khám bệnh', content:'Doctor: What seems to be the problem?\nPatient: I have a headache and a fever.', visual:'emoji:👨‍⚕️🤒', qs:[['Bệnh nhân bị gì?','headache and fever'],['Ai hỏi?','doctor']] },
        { type:'noi', title:'Mô tả triệu chứng', content:'Nói bạn bị đau đầu và sốt', visual:'emoji:🤕🌡️', qs:[['Nói: Tôi bị đau đầu','I have a headache']] },
        { type:'doc', title:'Đọc đơn thuốc', content:'Take this medicine twice a day after meals.', visual:'emoji:💊📋', qs:[['Uống mấy lần/ngày?','twice'],['Uống khi nào?','after meals']] },
        { type:'viet', title:'Viết tin nhắn xin nghỉ', content:'Viết tin nhắn xin nghỉ ốm', visual:'emoji:✏️🤒', qs:[['Viết tin nhắn','I am feeling unwell and cannot come to work today']] },
        { type:'dich', title:'Dịch sức khỏe', content:'You should see a doctor as soon as possible', visual:'emoji:👨‍⚕️⏰', qs:[['Nghĩa tiếng Việt?','Bạn nên đi khám bác sĩ càng sớm càng tốt']] }
      ]
    }
  ]
};
