const roadmap = [
  { code:'A0', name:'Mất gốc', desc:'Bảng chữ cái, số đếm, màu sắc', lessons: [
    { id:'a0_1', title:'Bảng chữ cái & Phát âm', skills: [
      { type:'nghe', title:'Nghe bảng chữ cái', content:'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z', qs:[['Chữ thứ 3?','C'],['Chữ thứ 5?','E'],['Chữ cuối?','Z']] },
      { type:'noi', title:'Đọc to bảng chữ cái', content:'Đọc to 26 chữ cái tiếng Anh', qs:[['Đọc 5 chữ đầu','A B C D E'],['Đọc 5 chữ cuối','V W X Y Z']] },
      { type:'doc', title:'Đọc câu đơn giản', content:'Hello. My name is Nam. I am a student.', qs:[['Tên nhân vật?','Nam'],['Nghề nghiệp?','student']] },
      { type:'viet', title:'Viết câu giới thiệu', content:'Viết câu giới thiệu bản thân', qs:[['Viết: Tôi tên là ___','My name is ___']] },
      { type:'dich', title:'Dịch câu chào', content:'Good morning', qs:[['Nghĩa tiếng Việt?','Chào buổi sáng']] }
    ]},
    { id:'a0_2', title:'Số đếm 1 - 100', skills: [
      { type:'nghe', title:'Nghe số', content:'one, two, three, four, five, six, seven, eight, nine, ten', qs:[['Số 3?','three'],['Số 7?','seven'],['Số 10?','ten']] },
      { type:'noi', title:'Đếm 1-10', content:'Đếm từ 1 đến 10', qs:[['Đọc to 1-10','one two three four five six seven eight nine ten']] },
      { type:'doc', title:'Đọc số trong câu', content:'I have 2 cats and 3 dogs.', qs:[['Mấy mèo?','2'],['Mấy chó?','3']] },
      { type:'viet', title:'Viết số bằng chữ', content:'Viết 7 và 9 bằng chữ', qs:[['7 = ?','seven'],['9 = ?','nine']] },
      { type:'dich', title:'Dịch tuổi', content:'I am 20 years old', qs:[['Nghĩa tiếng Việt?','Tôi 20 tuổi']] }
    ]},
    { id:'a0_3', title:'Màu sắc & Hình dạng', skills: [
      { type:'nghe', title:'Nghe màu sắc', content:'red, blue, green, yellow, black, white', qs:[['Màu đỏ?','red'],['Màu xanh dương?','blue']] },
      { type:'noi', title:'Nói màu sắc', content:'Đọc to 6 màu cơ bản', qs:[['Đọc to','red blue green yellow black white']] },
      { type:'doc', title:'Đọc mô tả', content:'The sky is blue. The grass is green.', qs:[['Bầu trời màu gì?','blue'],['Cỏ màu gì?','green']] },
      { type:'viet', title:'Viết màu', content:'Viết: Quả táo màu đỏ', qs:[['Viết câu','The apple is red']] },
      { type:'dich', title:'Dịch màu', content:'My favorite color is blue', qs:[['Nghĩa tiếng Việt?','Màu yêu thích của tôi là xanh dương']] }
    ]}
  ]},
  { code:'A1', name:'Sơ cấp', desc:'Chào hỏi, gia đình, thói quen', lessons: [
    { id:'a1_1', title:'Chào hỏi & Giới thiệu', skills: [
      { type:'nghe', title:'Nghe hội thoại', content:'A: Hello! How are you?\nB: I am fine, thank you. And you?', qs:[['A hỏi gì?','How are you?'],['B trả lời?','I am fine, thank you']] },
      { type:'noi', title:'Thực hành chào hỏi', content:'Chào và hỏi thăm bạn', qs:[['Nói: Xin chào, bạn khỏe không?','Hello, how are you?']] },
      { type:'doc', title:'Đọc hội thoại', content:'Tom: Good morning, Lisa.\nLisa: Good morning, Tom. Nice to meet you.', qs:[['Chào khi nào?','morning'],['Lisa nói gì thêm?','Nice to meet you']] },
      { type:'viet', title:'Viết lời chào', content:'Viết 3 cách chào', qs:[['Viết 3 cách','Hello / Hi / Good morning']] },
      { type:'dich', title:'Dịch câu hỏi', content:'How old are you?', qs:[['Nghĩa tiếng Việt?','Bạn bao nhiêu tuổi?']] }
    ]},
    { id:'a1_2', title:'Gia đình & Bạn bè', skills: [
      { type:'nghe', title:'Nghe giới thiệu gia đình', content:'I have a father, a mother, and one sister.', qs:[['Có mấy chị/em gái?','1'],['Kể tên thành viên?','father, mother, sister']] },
      { type:'noi', title:'Nói về gia đình', content:'Giới thiệu 3 thành viên gia đình', qs:[['Nói về gia đình bạn','This is my father/mother/brother']] },
      { type:'doc', title:'Đọc đoạn văn', content:'My family has 4 people. We live in Hanoi.', qs:[['Gia đình mấy người?','4'],['Ở đâu?','Hanoi']] },
      { type:'viet', title:'Viết về gia đình', content:'Viết 2 câu về gia đình', qs:[['Viết 2 câu','My family has ... people. We live in ...']] },
      { type:'dich', title:'Dịch về gia đình', content:'I love my family very much', qs:[['Nghĩa tiếng Việt?','Tôi yêu gia đình tôi rất nhiều']] }
    ]},
    { id:'a1_3', title:'Thói quen hàng ngày', skills: [
      { type:'nghe', title:'Nghe thói quen', content:'I wake up at 6. I have breakfast at 7. I go to school at 8.', qs:[['Thức dậy lúc mấy giờ?','6'],['Ăn sáng lúc mấy giờ?','7']] },
      { type:'noi', title:'Nói về thói quen', content:'Kể 3 việc bạn làm buổi sáng', qs:[['Nói 3 việc','I wake up / I brush my teeth / I have breakfast']] },
      { type:'doc', title:'Đọc lịch trình', content:'Every day, Lan goes to school at 7 AM and comes home at 5 PM.', qs:[['Lan đi học lúc mấy giờ?','7 AM'],['Về nhà lúc mấy giờ?','5 PM']] },
      { type:'viet', title:'Viết thói quen', content:'Viết 3 câu về thói quen của bạn', qs:[['Viết 3 câu','I usually ... / I often ... / I always ...']] },
      { type:'dich', title:'Dịch thói quen', content:'I always brush my teeth before bed', qs:[['Nghĩa tiếng Việt?','Tôi luôn đánh răng trước khi ngủ']] }
    ]}
  ]},
  { code:'A2', name:'Cơ bản', desc:'Mua sắm, ăn uống, chỉ đường', lessons: [
    { id:'a2_1', title:'Mua sắm', skills: [
      { type:'nghe', title:'Nghe hội thoại mua sắm', content:'A: How much is this shirt?\nB: It is 20 dollars.\nA: Can I try it on?', qs:[['Áo giá bao nhiêu?','20 dollars'],['A muốn làm gì?','try it on']] },
      { type:'noi', title:'Hỏi giá', content:'Hỏi giá một món đồ', qs:[['Nói: Cái này bao nhiêu tiền?','How much is this?']] },
      { type:'doc', title:'Đọc bảng giá', content:'T-shirt: 15 USD. Jeans: 30 USD. Shoes: 45 USD.', qs:[['Jeans giá bao nhiêu?','30 USD'],['Giày giá bao nhiêu?','45 USD']] },
      { type:'viet', title:'Viết câu mua sắm', content:'Viết 2 câu hỏi mua hàng', qs:[['Viết 2 câu','How much is this? / Do you have this in blue?']] },
      { type:'dich', title:'Dịch mua sắm', content:'I would like to buy this shirt', qs:[['Nghĩa tiếng Việt?','Tôi muốn mua chiếc áo này']] }
    ]},
    { id:'a2_2', title:'Ăn uống & Nhà hàng', skills: [
      { type:'nghe', title:'Nghe gọi món', content:'Waiter: What would you like to order?\nCustomer: I would like a coffee, please.', qs:[['Khách gọi gì?','coffee'],['Ai hỏi?','waiter']] },
      { type:'noi', title:'Gọi món', content:'Gọi một món ăn và đồ uống', qs:[['Nói: Tôi muốn một tách cà phê','I would like a cup of coffee']] },
      { type:'doc', title:'Đọc menu', content:'Menu: Pho 5 USD, Rice 3 USD, Coffee 2 USD, Tea 1.5 USD.', qs:[['Phở giá bao nhiêu?','5 USD'],['Trà giá bao nhiêu?','1.5 USD']] },
      { type:'viet', title:'Viết đơn gọi món', content:'Viết 3 món bạn muốn gọi', qs:[['Viết 3 món','I would like ... / Can I have ...']] },
      { type:'dich', title:'Dịch nhà hàng', content:'Can I have the bill, please?', qs:[['Nghĩa tiếng Việt?','Cho tôi xin hóa đơn được không?']] }
    ]},
    { id:'a2_3', title:'Chỉ đường', skills: [
      { type:'nghe', title:'Nghe chỉ đường', content:'Go straight, then turn left at the traffic light. The bank is on your right.', qs:[['Rẽ trái ở đâu?','at the traffic light'],['Ngân hàng ở bên nào?','on your right']] },
      { type:'noi', title:'Hỏi đường', content:'Hỏi đường đến nhà ga', qs:[['Nói: Làm sao để đến nhà ga?','How do I get to the train station?']] },
      { type:'doc', title:'Đọc bản đồ', content:'The library is next to the park, opposite the hospital.', qs:[['Thư viện ở cạnh gì?','park'],['Đối diện gì?','hospital']] },
      { type:'viet', title:'Viết chỉ đường', content:'Viết 3 câu chỉ đường', qs:[['Viết 3 câu','Go straight / Turn left / Turn right']] },
      { type:'dich', title:'Dịch chỉ đường', content:'Excuse me, where is the nearest bus stop?', qs:[['Nghĩa tiếng Việt?','Xin lỗi, bến xe buýt gần nhất ở đâu?']] }
    ]}
  ]},
  { code:'B1', name:'Trung cấp', desc:'Công việc, du lịch, sức khỏe', lessons: [
    { id:'b1_1', title:'Phỏng vấn xin việc', skills: [
      { type:'nghe', title:'Nghe phỏng vấn', content:'Interviewer: Tell me about yourself.\nCandidate: I have 3 years of experience in marketing.', qs:[['Mấy năm kinh nghiệm?','3 years'],['Lĩnh vực gì?','marketing']] },
      { type:'noi', title:'Tự giới thiệu', content:'Giới thiệu bản thân trong 30 giây', qs:[['Nói: Tôi có kinh nghiệm về...','I have experience in ...']] },
      { type:'doc', title:'Đọc mô tả công việc', content:'We are looking for a candidate with strong communication skills and 2+ years of experience.', qs:[['Cần kỹ năng gì?','communication'],['Kinh nghiệm bao nhiêu?','2+ years']] },
      { type:'viet', title:'Viết email ứng tuyển', content:'Viết email ngắn ứng tuyển vị trí marketing', qs:[['Viết email','Dear Sir/Madam, I am writing to apply for ...']] },
      { type:'dich', title:'Dịch phỏng vấn', content:'What are your strengths and weaknesses?', qs:[['Nghĩa tiếng Việt?','Điểm mạnh và điểm yếu của bạn là gì?']] }
    ]},
    { id:'b1_2', title:'Du lịch & Khách sạn', skills: [
      { type:'nghe', title:'Nghe đặt phòng', content:'Receptionist: How many nights would you like to stay?\nGuest: Three nights, please.', qs:[['Ở mấy đêm?','three'],['Ai hỏi?','receptionist']] },
      { type:'noi', title:'Đặt phòng', content:'Đặt phòng 2 đêm cho 2 người', qs:[['Nói: Tôi muốn đặt phòng cho 2 người','I would like to book a room for two']] },
      { type:'doc', title:'Đọc mô tả khách sạn', content:'The hotel offers free breakfast, Wi-Fi, and a swimming pool.', qs:[['Có gì miễn phí?','breakfast, Wi-Fi'],['Tiện nghi gì?','swimming pool']] },
      { type:'viet', title:'Viết email đặt phòng', content:'Viết email đặt phòng 3 đêm', qs:[['Viết email','I would like to book a room for 3 nights from ...']] },
      { type:'dich', title:'Dịch du lịch', content:'Could you recommend a good restaurant nearby?', qs:[['Nghĩa tiếng Việt?','Bạn có thể giới thiệu một nhà hàng ngon gần đây không?']] }
    ]},
    { id:'b1_3', title:'Sức khỏe & Bác sĩ', skills: [
      { type:'nghe', title:'Nghe khám bệnh', content:'Doctor: What seems to be the problem?\nPatient: I have a headache and a fever.', qs:[['Bệnh nhân bị gì?','headache and fever'],['Ai hỏi?','doctor']] },
      { type:'noi', title:'Mô tả triệu chứng', content:'Nói bạn bị đau đầu và sốt', qs:[['Nói: Tôi bị đau đầu','I have a headache']] },
      { type:'doc', title:'Đọc đơn thuốc', content:'Take this medicine twice a day after meals.', qs:[['Uống mấy lần/ngày?','twice'],['Uống khi nào?','after meals']] },
      { type:'viet', title:'Viết tin nhắn xin nghỉ', content:'Viết tin nhắn xin nghỉ ốm', qs:[['Viết tin nhắn','I am feeling unwell and cannot come to work today']] },
      { type:'dich', title:'Dịch sức khỏe', content:'You should see a doctor as soon as possible', qs:[['Nghĩa tiếng Việt?','Bạn nên đi khám bác sĩ càng sớm càng tốt']] }
    ]}
  ]},
  { code:'B2', name:'Khá', desc:'Công nghệ, môi trường, giáo dục', lessons: [
    { id:'b2_1', title:'Công nghệ & Internet', skills: [
      { type:'nghe', title:'Nghe về AI', content:'Artificial intelligence is transforming many industries, from healthcare to finance.', qs:[['AI thay đổi ngành nào?','healthcare, finance']] },
      { type:'noi', title:'Thảo luận công nghệ', content:'Nói về lợi ích và rủi ro của AI', qs:[['Nói 2 lợi ích, 1 rủi ro','AI improves efficiency / It can replace jobs']] },
      { type:'doc', title:'Đọc bài viết', content:'Social media has changed how people communicate, but it also raises privacy concerns.', qs:[['Thay đổi gì?','communication'],['Vấn đề gì?','privacy']] },
      { type:'viet', title:'Viết đoạn văn', content:'Viết 5 câu về ảnh hưởng của Internet', qs:[['Viết 5 câu','The Internet has ... / However, ...']] },
      { type:'dich', title:'Dịch công nghệ', content:'The company is investing heavily in research and development', qs:[['Nghĩa tiếng Việt?','Công ty đang đầu tư mạnh vào nghiên cứu và phát triển']] }
    ]},
    { id:'b2_2', title:'Môi trường', skills: [
      { type:'nghe', title:'Nghe về biến đổi khí hậu', content:'Climate change is causing more frequent extreme weather events around the world.', qs:[['Hậu quả chính?','extreme weather'],['Phạm vi?','around the world']] },
      { type:'noi', title:'Thảo luận môi trường', content:'Nói 3 cách bảo vệ môi trường', qs:[['Nói 3 cách','Reduce plastic / Recycle / Use public transport']] },
      { type:'doc', title:'Đọc báo môi trường', content:'Renewable energy sources such as solar and wind power are becoming cheaper every year.', qs:[['Nguồn năng lượng nào?','solar, wind'],['Xu hướng giá?','cheaper']] },
      { type:'viet', title:'Viết luận môi trường', content:'Viết 5 câu về tầm quan trọng của bảo vệ môi trường', qs:[['Viết 5 câu','Protecting the environment is ... / We should ...']] },
      { type:'dich', title:'Dịch môi trường', content:'Governments must take action to reduce carbon emissions', qs:[['Nghĩa tiếng Việt?','Các chính phủ phải hành động để giảm khí thải carbon']] }
    ]},
    { id:'b2_3', title:'Giáo dục & Sự nghiệp', skills: [
      { type:'nghe', title:'Nghe về học tập', content:'Lifelong learning is essential in the rapidly changing job market.', qs:[['Học tập gì?','lifelong learning'],['Tại sao cần?','changing job market']] },
      { type:'noi', title:'Thảo luận sự nghiệp', content:'Nói về kế hoạch sự nghiệp 5 năm tới', qs:[['Nói kế hoạch','In 5 years, I want to ...']] },
      { type:'doc', title:'Đọc về giáo dục', content:'Online education has made learning more accessible, but it requires strong self-discipline.', qs:[['Ưu điểm?','accessible'],['Yêu cầu gì?','self-discipline']] },
      { type:'viet', title:'Viết về sự nghiệp', content:'Viết 5 câu về mục tiêu sự nghiệp', qs:[['Viết 5 câu','My career goal is ... / I plan to ...']] },
      { type:'dich', title:'Dịch giáo dục', content:'Education is the most powerful weapon to change the world', qs:[['Nghĩa tiếng Việt?','Giáo dục là vũ khí mạnh mẽ nhất để thay đổi thế giới']] }
    ]}
  ]},
  { code:'C1', name:'Thành thạo', desc:'Kinh doanh, học thuật, tranh luận', lessons: [
    { id:'c1_1', title:'Đàm phán kinh doanh', skills: [
      { type:'nghe', title:'Nghe đàm phán', content:'A: We offer a 10% discount for a two-year contract.\nB: We need more flexibility on payment terms.', qs:[['Điều kiện giảm giá?','2-year contract'],['B yêu cầu gì?','flexibility on payment']] },
      { type:'noi', title:'Đàm phán', content:'Đàm phán giá với đối tác', qs:[['Nói: Chúng tôi có thể chấp nhận nếu...','We can accept if you ...']] },
      { type:'doc', title:'Đọc hợp đồng', content:'Either party may terminate this agreement with 30 days written notice.', qs:[['Báo trước bao lâu?','30 days'],['Hình thức?','written notice']] },
      { type:'viet', title:'Viết đề xuất', content:'Viết đề xuất kinh doanh 5 câu', qs:[['Viết đề xuất','We propose ... / Our offer includes ...']] },
      { type:'dich', title:'Dịch kinh doanh', content:'We look forward to a mutually beneficial partnership', qs:[['Nghĩa tiếng Việt?','Chúng tôi mong đợi một mối quan hệ hợp tác đôi bên cùng có lợi']] }
    ]},
    { id:'c1_2', title:'Viết học thuật', skills: [
      { type:'nghe', title:'Nghe bài giảng', content:'The research methodology combines qualitative interviews with quantitative surveys.', qs:[['Phương pháp gì?','research methodology'],['Kết hợp gì?','qualitative + quantitative']] },
      { type:'noi', title:'Thuyết trình', content:'Trình bày quan điểm học thuật', qs:[['Nói: Theo nghiên cứu, ...','According to research, ...']] },
      { type:'doc', title:'Đọc bài báo khoa học', content:'The findings suggest a strong correlation between socioeconomic status and educational outcomes.', qs:[['Tương quan giữa gì?','socioeconomic status + education'],['Kết luận?','strong correlation']] },
      { type:'viet', title:'Viết luận học thuật', content:'Viết mở bài cho bài luận về AI và việc làm', qs:[['Viết mở bài','This essay examines ... / It argues that ...']] },
      { type:'dich', title:'Dịch học thuật', content:'The study provides compelling evidence to support this hypothesis', qs:[['Nghĩa tiếng Việt?','Nghiên cứu cung cấp bằng chứng thuyết phục ủng hộ giả thuyết này']] }
    ]},
    { id:'c1_3', title:'Tranh luận & Thuyết phục', skills: [
      { type:'nghe', title:'Nghe tranh luận', content:'While I acknowledge the merits of your argument, I must respectfully disagree with your conclusion.', qs:[['Thừa nhận gì?','merits of argument'],['Họ làm gì?','respectfully disagree']] },
      { type:'noi', title:'Phản biện', content:'Phản biện một quan điểm', qs:[['Nói: Tôi hiểu quan điểm của bạn, nhưng...','I understand your point, but ...']] },
      { type:'doc', title:'Đọc bài tranh luận', content:'Critics argue that the policy is well-intentioned but ultimately counterproductive.', qs:[['Chỉ trích gì?','well-intentioned'],['Kết luận?','counterproductive']] },
      { type:'viet', title:'Viết phản biện', content:'Viết 5 câu phản biện về mạng xã hội', qs:[['Viết 5 câu','While social media has ... / Nevertheless, ...']] },
      { type:'dich', title:'Dịch tranh luận', content:'It is imperative that we address this issue without further delay', qs:[['Nghĩa tiếng Việt?','Điều cấp thiết là chúng ta phải giải quyết vấn đề này không chậm trễ']] }
    ]}
  ]}
];
