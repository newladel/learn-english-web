/* ========== LEVEL A1 — SƠ CẤP ========== */
const levelA1 = {
  code: 'A1',
  name: 'Sơ cấp',
  desc: 'Chào hỏi, gia đình, thói quen',
  lessons: [
    {
      id: 'a1_1',
      title: 'Chào hỏi & Giới thiệu',
      level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe hội thoại', content:'A: Hello! How are you?\nB: I am fine, thank you. And you?', visual:'emoji:👋😊', qs:[['A hỏi gì?','How are you?'],['B trả lời?','I am fine, thank you']] },
        { type:'noi', title:'Thực hành chào hỏi', content:'Chào và hỏi thăm bạn', visual:'emoji:👋🤝', qs:[['Nói: Xin chào, bạn khỏe không?','Hello, how are you?']] },
        { type:'doc', title:'Đọc hội thoại', content:'Tom: Good morning, Lisa.\nLisa: Good morning, Tom. Nice to meet you.', visual:'emoji:🌅👥', qs:[['Chào khi nào?','morning'],['Lisa nói gì thêm?','Nice to meet you']] },
        { type:'viet', title:'Viết lời chào', content:'Viết 3 cách chào', visual:'emoji:✏️💬', qs:[['Viết 3 cách','Hello / Hi / Good morning']] },
        { type:'dich', title:'Dịch câu hỏi', content:'How old are you?', visual:'emoji:🎂❓', qs:[['Nghĩa tiếng Việt?','Bạn bao nhiêu tuổi?']] }
      ]
    },
    {
      id: 'a1_2',
      title: 'Gia đình & Bạn bè',
      level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe giới thiệu gia đình', content:'I have a father, a mother, and one sister.', visual:'emoji:👨👩👧', qs:[['Có mấy chị/em gái?','1'],['Kể tên thành viên?','father, mother, sister']] },
        { type:'noi', title:'Nói về gia đình', content:'Giới thiệu 3 thành viên gia đình', visual:'emoji:👨‍👩‍👧‍👦', qs:[['Nói về gia đình bạn','This is my father/mother/brother']] },
        { type:'doc', title:'Đọc đoạn văn', content:'My family has 4 people. We live in Hanoi.', visual:'emoji:🏠👨‍👩‍👧‍👦', qs:[['Gia đình mấy người?','4'],['Ở đâu?','Hanoi']] },
        { type:'viet', title:'Viết về gia đình', content:'Viết 2 câu về gia đình', visual:'emoji:✏️❤️', qs:[['Viết 2 câu','My family has ... people. We live in ...']] },
        { type:'dich', title:'Dịch về gia đình', content:'I love my family very much', visual:'emoji:❤️👨‍👩‍👧', qs:[['Nghĩa tiếng Việt?','Tôi yêu gia đình tôi rất nhiều']] }
      ]
    },
    {
      id: 'a1_3',
      title: 'Thói quen hàng ngày',
      level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe thói quen', content:'I wake up at 6. I have breakfast at 7. I go to school at 8.', visual:'emoji:⏰🌅🍳', qs:[['Thức dậy lúc mấy giờ?','6'],['Ăn sáng lúc mấy giờ?','7']] },
        { type:'noi', title:'Nói về thói quen', content:'Kể 3 việc bạn làm buổi sáng', visual:'emoji:🌅🪥🍳', qs:[['Nói 3 việc','I wake up / I brush my teeth / I have breakfast']] },
        { type:'doc', title:'Đọc lịch trình', content:'Every day, Lan goes to school at 7 AM and comes home at 5 PM.', visual:'emoji:🏫⏰', qs:[['Lan đi học lúc mấy giờ?','7 AM'],['Về nhà lúc mấy giờ?','5 PM']] },
        { type:'viet', title:'Viết thói quen', content:'Viết 3 câu về thói quen của bạn', visual:'emoji:✏️📅', qs:[['Viết 3 câu','I usually ... / I often ... / I always ...']] },
        { type:'dich', title:'Dịch thói quen', content:'I always brush my teeth before bed', visual:'emoji:🪥🌙', qs:[['Nghĩa tiếng Việt?','Tôi luôn đánh răng trước khi ngủ']] }
      ]
    }
  ]
};
