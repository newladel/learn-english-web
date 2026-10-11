/* ========== LEVEL B1 — TRUNG CẤP (15 BÀI) ========== */
const levelB1 = {
  code: 'B1',
  name: 'Trung cấp',
  desc: 'Công việc, du lịch, sức khỏe, công nghệ',
  lessons: [
    {
      id: 'b1_1', title: 'Phỏng vấn xin việc', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe phỏng vấn', content:'Interviewer: Tell me about yourself.\nCandidate: I have 3 years of experience in marketing. I worked at ABC Company as a team leader.', visual:'emoji:💼🎤', qs:[['Ứng viên có mấy năm kinh nghiệm?','3 years'],['Làm vị trí gì?','team leader']] },
        { type:'noi', title:'Tự giới thiệu', content:'Giới thiệu bản thân trong 1 phút', visual:'emoji:🗣️👤', qs:[['Nói: Tôi có kinh nghiệm về...','I have experience in ...']] },
        { type:'doc', title:'Đọc mô tả công việc', content:'We are looking for a candidate with strong communication skills and 2+ years of experience in sales. Fluency in English is required.', visual:'emoji:📄💼', qs:[['Cần kỹ năng gì?','communication'],['Kinh nghiệm bao nhiêu?','2+ years']] },
        { type:'viet', title:'Viết email ứng tuyển', content:'Viết email ứng tuyển vị trí Marketing Manager', visual:'emoji:✏️📧', qs:[['Viết email','Dear Sir/Madam, I am writing to apply for ...']] },
        { type:'dich', title:'Dịch phỏng vấn', content:'What are your strengths and weaknesses?', visual:'emoji:💪⚠️', qs:[['Nghĩa tiếng Việt?','Điểm mạnh và điểm yếu của bạn là gì?']] }
      ]
    },
    {
      id: 'b1_2', title: 'Du lịch & Khách sạn', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe đặt phòng', content:'Receptionist: How many nights would you like to stay?\nGuest: Three nights, please. Do you have a room with a city view?\nReceptionist: Yes, we do. It costs 80 dollars per night.', visual:'emoji:🏨🌙', qs:[['Ở mấy đêm?','3'],['Phòng view gì?','city view']] },
        { type:'noi', title:'Đặt phòng nâng cao', content:'Đặt phòng có view biển cho 2 đêm', visual:'emoji:🌊🛏️', qs:[['Nói: Tôi muốn phòng view biển','I would like a room with sea view']] },
        { type:'doc', title:'Đọc mô tả khách sạn', content:'Our 5-star hotel offers free breakfast, Wi-Fi, a swimming pool, and a spa. Airport transfer is available at an extra cost.', visual:'emoji:🏨⭐🍳', qs:[['Có mấy sao?','5-star'],['Dịch vụ nào tính phí?','airport transfer']] },
        { type:'viet', title:'Viết email đặt phòng', content:'Viết email đặt phòng 3 đêm có view biển', visual:'emoji:✏️📧', qs:[['Viết email','I would like to book a room with sea view for 3 nights']] },
        { type:'dich', title:'Dịch du lịch', content:'Could you recommend a good restaurant nearby?', visual:'emoji:🍽️📍', qs:[['Nghĩa tiếng Việt?','Bạn có thể giới thiệu một nhà hàng ngon gần đây không?']] }
      ]
    },
    {
      id: 'b1_3', title: 'Sức khỏe & Bác sĩ', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe khám bệnh', content:'Doctor: What seems to be the problem?\nPatient: I have had a headache for three days, and I feel dizzy.\nDoctor: Let me check your blood pressure.', visual:'emoji:👨‍⚕️🤒', qs:[['Đau đầu mấy ngày?','3 days'],['Bác sĩ kiểm tra gì?','blood pressure']] },
        { type:'noi', title:'Mô tả triệu chứng', content:'Nói bạn bị đau đầu 3 ngày và chóng mặt', visual:'emoji:🤕💫', qs:[['Nói: Tôi bị đau đầu 3 ngày','I have had a headache for 3 days']] },
        { type:'doc', title:'Đọc đơn thuốc', content:'Take this medicine twice a day after meals. Avoid coffee and alcohol. Come back in one week for a check-up.', visual:'emoji:💊📋', qs:[['Uống mấy lần/ngày?','twice'],['Uống khi nào?','after meals']] },
        { type:'viet', title:'Viết tin nhắn xin nghỉ', content:'Viết tin nhắn xin nghỉ 2 ngày vì ốm', visual:'emoji:✏️🤒', qs:[['Viết tin nhắn','I am feeling unwell and need to take 2 days off']] },
        { type:'dich', title:'Dịch sức khỏe', content:'You should see a doctor as soon as possible', visual:'emoji:👨‍⚕️⏰', qs:[['Nghĩa tiếng Việt?','Bạn nên đi khám bác sĩ càng sớm càng tốt']] }
      ]
    },
    {
      id: 'b1_4', title: 'Công việc & Văn phòng', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe hội thoại công sở', content:'Manager: Could you finish the report by Friday?\nEmployee: Sure. I will also prepare the slides for the meeting.\nManager: Great. Let me know if you need help.', visual:'emoji:💼📊', qs:[['Phải xong báo cáo khi nào?','Friday'],['Nhân viên chuẩn bị gì thêm?','slides']] },
        { type:'noi', title:'Trao đổi công việc', content:'Trao đổi với đồng nghiệp về deadline', visual:'emoji:🗣️⏰', qs:[['Nói: Tôi sẽ xong trước thứ 6','I will finish before Friday']] },
        { type:'doc', title:'Đọc email công việc', content:'Dear team, please submit your weekly reports by 5 PM on Friday. Attach any supporting documents. Thank you.', visual:'emoji:📧📋', qs:[['Phải nộp khi nào?','5 PM Friday'],['Cần đính kèm gì?','supporting documents']] },
        { type:'viet', title:'Viết email công việc', content:'Viết email xin nghỉ phép 3 ngày', visual:'emoji:✏️📧', qs:[['Viết email','I would like to request 3 days off ...']] },
        { type:'dich', title:'Dịch công việc', content:'Can we reschedule the meeting to next week?', visual:'emoji:❓📅', qs:[['Nghĩa tiếng Việt?','Chúng ta có thể dời cuộc họp sang tuần sau không?']] }
      ]
    },
    {
      id: 'b1_5', title: 'Công nghệ & Internet', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe về công nghệ', content:'Artificial intelligence is changing the way we work. Many companies use AI to automate tasks and improve productivity.', visual:'emoji:🤖💡', qs:[['AI thay đổi gì?','way we work'],['Công ty dùng AI làm gì?','automate tasks']] },
        { type:'noi', title:'Thảo luận về AI', content:'Nói 2 lợi ích và 1 rủi ro của AI', visual:'emoji:🗣️🤖', qs:[['Nói 2 lợi ích','AI helps ...']] },
        { type:'doc', title:'Đọc bài về mạng xã hội', content:'Social media connects people but can also cause addiction. Studies show that teenagers spend 3-4 hours a day on social media.', visual:'emoji:📱⏰', qs:[['Mạng xã hội gây gì?','addiction'],['Teen dùng bao lâu/ngày?','3-4 hours']] },
        { type:'viet', title:'Viết về công nghệ', content:'Viết 5 câu về ảnh hưởng của Internet đến cuộc sống', visual:'emoji:✏️🌐', qs:[['Viết 5 câu','The Internet has changed ...']] },
        { type:'dich', title:'Dịch công nghệ', content:'You should update your software regularly', visual:'emoji:💻🔄', qs:[['Nghĩa tiếng Việt?','Bạn nên cập nhật phần mềm thường xuyên']] }
      ]
    },
    {
      id: 'b1_6', title: 'Học tập & Giáo dục', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe về học tập', content:'A: How are you preparing for the IELTS exam?\nB: I study 2 hours every day. I also practice with an online tutor twice a week.', visual:'emoji:📚🎓', qs:[['B học mấy tiếng/ngày?','2 hours'],['Học với ai?','online tutor']] },
        { type:'noi', title:'Nói về học tập', content:'Nói cách bạn học tiếng Anh mỗi ngày', visual:'emoji:🗣️📖', qs:[['Nói: Tôi học tiếng Anh...','I study English by ...']] },
        { type:'doc', title:'Đọc về giáo dục', content:'Online learning has become popular. Students can study from home and save time. However, it requires self-discipline.', visual:'emoji:💻🏠', qs:[['Học online có lợi gì?','study from home'],['Cần gì?','self-discipline']] },
        { type:'viet', title:'Viết về học tập', content:'Viết 5 câu về mục tiêu học tập của bạn', visual:'emoji:✏️🎯', qs:[['Viết 5 câu','My goal is to ...']] },
        { type:'dich', title:'Dịch giáo dục', content:'Education is the key to success', visual:'emoji:🎓🔑', qs:[['Nghĩa tiếng Việt?','Giáo dục là chìa khóa của thành công']] }
      ]
    },
    {
      id: 'b1_7', title: 'Môi trường & Biến đổi khí hậu', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe về môi trường', content:'Climate change is causing more extreme weather. Many countries are taking action to reduce carbon emissions.', visual:'emoji:🌍🌡️', qs:[['Biến đổi khí hậu gây gì?','extreme weather'],['Các nước đang làm gì?','reduce carbon emissions']] },
        { type:'noi', title:'Thảo luận môi trường', content:'Nói 3 cách bảo vệ môi trường', visual:'emoji:♻️🌱', qs:[['Nói 3 cách','Reduce plastic / Recycle / Use public transport']] },
        { type:'doc', title:'Đọc về năng lượng tái tạo', content:'Solar and wind power are renewable energy sources. They are clean and becoming cheaper every year.', visual:'emoji:☀️💨', qs:[['Nguồn năng lượng nào?','solar, wind'],['Xu hướng giá?','cheaper']] },
        { type:'viet', title:'Viết về môi trường', content:'Viết 5 câu về tầm quan trọng của bảo vệ môi trường', visual:'emoji:✏️🌍', qs:[['Viết 5 câu','Protecting the environment is ...']] },
        { type:'dich', title:'Dịch môi trường', content:'Governments must take action to reduce pollution', visual:'emoji:🏛️🌫️', qs:[['Nghĩa tiếng Việt?','Các chính phủ phải hành động để giảm ô nhiễm']] }
      ]
    },
    {
      id: 'b1_8', title: 'Kể chuyện quá khứ', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe kể chuyện', content:'Last weekend, I went to the countryside to visit my grandparents. We had a big family dinner and shared stories until midnight.', visual:'emoji:🏡🍽️', qs:[['Đi đâu cuối tuần?','countryside'],['Làm gì cùng gia đình?','had a big dinner, shared stories']] },
        { type:'noi', title:'Kể lại sự kiện', content:'Kể về cuối tuần trước của bạn', visual:'emoji:🗣️📅', qs:[['Nói: Cuối tuần trước tôi...','Last weekend, I ...']] },
        { type:'doc', title:'Đọc câu chuyện', content:'When I was a child, I lived in a small village. Every summer, I would swim in the river with my friends.', visual:'emoji:🏞️👦', qs:[['Sống ở đâu khi nhỏ?','small village'],['Mùa hè làm gì?','swim in the river']] },
        { type:'viet', title:'Viết về kỷ niệm', content:'Viết 5 câu về một kỷ niệm đáng nhớ', visual:'emoji:✏️💭', qs:[['Viết 5 câu','I remember when ...']] },
        { type:'dich', title:'Dịch kể chuyện', content:'It was the best day of my life', visual:'emoji:⭐❤️', qs:[['Nghĩa tiếng Việt?','Đó là ngày tuyệt vời nhất trong cuộc đời tôi']] }
      ]
    },
    {
      id: 'b1_9', title: 'Giao tiếp xã hội', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe hội thoại', content:'A: Would you like to join us for dinner tonight?\nB: I would love to, but I have to work late. Maybe another time?', visual:'emoji:🍽️🤝', qs:[['A rủ đi đâu?','dinner'],['B có đi không?','No, has to work late']] },
        { type:'noi', title:'Mời và từ chối', content:'Mời bạn đi ăn, từ chối khéo', visual:'emoji:🍽️❌', qs:[['Nói: Tôi rất muốn nhưng...','I would love to, but ...']] },
        { type:'doc', title:'Đọc email mời', content:'Hi Lan, I am having a small party on Saturday at 7 PM. Would you like to come? Please let me know by Friday.', visual:'emoji:🎉📧', qs:[['Tiệc thứ mấy?','Saturday'],['Báo trước khi nào?','Friday']] },
        { type:'viet', title:'Viết lời mời', content:'Viết email mời bạn đến sinh nhật', visual:'emoji:✏️🎂', qs:[['Viết email','I am having a birthday party ... Would you like to come?']] },
        { type:'dich', title:'Dịch giao tiếp', content:'Thanks for inviting me. I would love to come', visual:'emoji:🙏❤️', qs:[['Nghĩa tiếng Việt?','Cảm ơn đã mời tôi. Tôi rất muốn đến']] }
      ]
    },
    {
      id: 'b1_10', title: 'Thể thao & Sức khỏe', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe về thể thao', content:'Running is one of the best exercises. It improves heart health, reduces stress, and helps you sleep better.', visual:'emoji:🏃💪', qs:[['Chạy bộ cải thiện gì?','heart health'],['Giảm gì?','stress']] },
        { type:'noi', title:'Nói về thể thao', content:'Nói 1 môn thể thao và lợi ích của nó', visual:'emoji:⚽💪', qs:[['Nói: Bơi giúp...','Swimming helps ...']] },
        { type:'doc', title:'Đọc về sức khỏe', content:'A balanced diet includes vegetables, fruits, protein, and grains. You should also drink 2 liters of water daily.', visual:'emoji:🥗💧', qs:[['Chế độ ăn gồm gì?','vegetables, fruits, protein, grains'],['Uống bao nhiêu nước/ngày?','2 liters']] },
        { type:'viet', title:'Viết về sức khỏe', content:'Viết 5 câu về cách giữ sức khỏe', visual:'emoji:✏️💪', qs:[['Viết 5 câu','To stay healthy, I ...']] },
        { type:'dich', title:'Dịch sức khỏe', content:'Regular exercise is essential for good health', visual:'emoji:🏃❤️', qs:[['Nghĩa tiếng Việt?','Tập thể dục đều đặn là rất cần thiết cho sức khỏe tốt']] }
      ]
    },
    {
      id: 'b1_11', title: 'Kế hoạch & Dự định', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe về kế hoạch', content:'A: What are your plans for the summer?\nB: I am going to travel to Japan with my family. We have already booked the flights.', visual:'emoji:✈️🗾', qs:[['Đi đâu hè này?','Japan'],['Đặt gì rồi?','flights']] },
        { type:'noi', title:'Nói kế hoạch', content:'Nói 3 kế hoạch hè của bạn', visual:'emoji:☀️🎯', qs:[['Nói 3 kế hoạch','I am going to ...']] },
        { type:'doc', title:'Đọc về kế hoạch', content:'Next month, I will start a new job at a software company. I am also planning to move to a new apartment.', visual:'emoji:💼🏠', qs:[['Bắt đầu công việc gì?','new job at software company'],['Dự định chuyển đâu?','new apartment']] },
        { type:'viet', title:'Viết kế hoạch', content:'Viết 5 câu về kế hoạch 1 năm tới', visual:'emoji:✏️📅', qs:[['Viết 5 câu','Next year, I will ...']] },
        { type:'dich', title:'Dịch kế hoạch', content:'What are you going to do next weekend?', visual:'emoji:❓📅', qs:[['Nghĩa tiếng Việt?','Bạn định làm gì vào cuối tuần sau?']] }
      ]
    },
    {
      id: 'b1_12', title: 'So sánh & Lựa chọn', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe so sánh', content:'A: Which do you prefer, city life or country life?\nB: I prefer the city because there are more job opportunities, but the country is quieter.', visual:'emoji:🏙️🌾', qs:[['B thích gì?','city'],['Lý do?','more job opportunities']] },
        { type:'noi', title:'So sánh', content:'So sánh 2 món ăn bạn thích', visual:'emoji:🍕🍜', qs:[['Nói: Tôi thích X hơn Y vì...','I prefer X to Y because ...']] },
        { type:'doc', title:'Đọc so sánh', content:'Mobile phones are more convenient than laptops for quick tasks. However, laptops are better for professional work.', visual:'emoji:📱💻', qs:[['Cái nào tiện hơn cho việc nhanh?','phones'],['Laptop tốt hơn cho gì?','professional work']] },
        { type:'viet', title:'Viết so sánh', content:'Viết 5 câu so sánh học online và học offline', visual:'emoji:✏️⚖️', qs:[['Viết 5 câu','Online learning is ... while offline ...']] },
        { type:'dich', title:'Dịch so sánh', content:'This restaurant is more expensive than the one across the street', visual:'emoji:💰🍽️', qs:[['Nghĩa tiếng Việt?','Nhà hàng này đắt hơn cái bên kia đường']] }
      ]
    },
    {
      id: 'b1_13', title: 'Du lịch nước ngoài', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe về du lịch', content:'A: Have you ever been abroad?\nB: Yes, I have been to Thailand twice. I love the food and the beaches there.', visual:'emoji:🌏✈️', qs:[['B đi nước nào?','Thailand'],['Đi mấy lần?','twice']] },
        { type:'noi', title:'Nói về du lịch', content:'Kể về chuyến đi nước ngoài của bạn', visual:'emoji:🗣️🌏', qs:[['Nói: Tôi đã đi...','I have been to ...']] },
        { type:'doc', title:'Đọc về điểm đến', content:'Kyoto is famous for its ancient temples and beautiful cherry blossoms. The best time to visit is in spring.', visual:'emoji:🌸⛩️', qs:[['Kyoto nổi tiếng về gì?','ancient temples, cherry blossoms'],['Nên đi khi nào?','spring']] },
        { type:'viet', title:'Viết về du lịch', content:'Viết 5 câu giới thiệu 1 thành phố bạn thích', visual:'emoji:✏️🏙️', qs:[['Viết 5 câu','[City] is famous for ...']] },
        { type:'dich', title:'Dịch du lịch', content:'Have you ever tried local food when traveling?', visual:'emoji:🍜❓', qs:[['Nghĩa tiếng Việt?','Bạn đã từng thử đồ ăn địa phương khi du lịch chưa?']] }
      ]
    },
    {
      id: 'b1_14', title: 'Vấn đề xã hội', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe về xã hội', content:'Traffic congestion is a serious problem in big cities. Many people are late for work because of it.', visual:'emoji:🚗🚦', qs:[['Vấn đề gì?','traffic congestion'],['Hậu quả?','late for work']] },
        { type:'noi', title:'Thảo luận xã hội', content:'Nói về 1 vấn đề xã hội và cách giải quyết', visual:'emoji:🗣️🏙️', qs:[['Nói: Một vấn đề là...','One problem is ...']] },
        { type:'doc', title:'Đọc về ô nhiễm', content:'Air pollution in many cities is getting worse. Governments should promote public transport and electric vehicles.', visual:'emoji:🌫️🚌', qs:[['Ô nhiễm gì tệ hơn?','air pollution'],['Giải pháp?','promote public transport, EVs']] },
        { type:'viet', title:'Viết về xã hội', content:'Viết 5 câu về ảnh hưởng của mạng xã hội', visual:'emoji:✏️📱', qs:[['Viết 5 câu','Social media has ...']] },
        { type:'dich', title:'Dịch xã hội', content:'Poverty is still a major issue in many countries', visual:'emoji:🌍💔', qs:[['Nghĩa tiếng Việt?','Nghèo đói vẫn là vấn đề lớn ở nhiều quốc gia']] }
      ]
    },
    {
      id: 'b1_15', title: 'Ước mơ & Hoài bão', level: 'B1',
      skills: [
        { type:'nghe', title:'Nghe về ước mơ', content:'My biggest dream is to open my own restaurant. I have been cooking since I was 15. I hope to achieve it within 5 years.', visual:'emoji:👨‍🍳🌟', qs:[['Ước mơ gì?','open restaurant'],['Nấu ăn từ khi nào?','since 15']] },
        { type:'noi', title:'Nói về ước mơ', content:'Nói về ước mơ lớn nhất của bạn', visual:'emoji:🌟🗣️', qs:[['Nói: Ước mơ của tôi là...','My dream is to ...']] },
        { type:'doc', title:'Đọc về thành công', content:'Success does not come overnight. It requires hard work, patience, and never giving up on your goals.', visual:'emoji:💪🎯', qs:[['Thành công cần gì?','hard work, patience'],['Không nên làm gì?','give up']] },
        { type:'viet', title:'Viết về ước mơ', content:'Viết 5 câu về ước mơ và kế hoạch đạt được', visual:'emoji:✏️⭐', qs:[['Viết 5 câu','My dream is ... To achieve it, I will ...']] },
        { type:'dich', title:'Dịch ước mơ', content:'Follow your dreams, no matter how difficult', visual:'emoji:🌟💪', qs:[['Nghĩa tiếng Việt?','Theo đuổi ước mơ của bạn, dù khó khăn đến đâu']] }
      ]
    }
  ]
};
