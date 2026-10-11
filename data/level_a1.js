/* ========== LEVEL A1 — SƠ CẤP (15 BÀI) ========== */
const levelA1 = {
  code: 'A1',
  name: 'Sơ cấp',
  desc: 'Chào hỏi, gia đình, thói quen, mua sắm cơ bản',
  lessons: [
    {
      id: 'a1_1', title: 'Chào hỏi & Giới thiệu', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe hội thoại chào hỏi', content:'A: Hello! How are you?\nB: I am fine, thank you. And you?\nA: I am good, thanks.', visual:'emoji:👋😊', qs:[['A hỏi gì?','How are you?'],['B trả lời thế nào?','I am fine, thank you']] },
        { type:'noi', title:'Thực hành chào hỏi', content:'Chào và hỏi thăm bạn bè', visual:'emoji:👋🤝', qs:[['Nói: Xin chào, bạn khỏe không?','Hello, how are you?']] },
        { type:'doc', title:'Đọc hội thoại', content:'Tom: Good morning, Lisa. Nice to meet you.\nLisa: Nice to meet you too, Tom.', visual:'emoji:🌅👥', qs:[['Chào khi nào?','morning'],['Lisa nói gì thêm?','Nice to meet you too']] },
        { type:'viet', title:'Viết lời chào', content:'Viết 3 cách chào khác nhau', visual:'emoji:✏️💬', qs:[['Viết 3 cách','Hello / Hi / Good morning']] },
        { type:'dich', title:'Dịch câu hỏi', content:'How old are you?', visual:'emoji:🎂❓', qs:[['Nghĩa tiếng Việt?','Bạn bao nhiêu tuổi?']] }
      ]
    },
    {
      id: 'a1_2', title: 'Gia đình & Bạn bè', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe giới thiệu gia đình', content:'I have a father, a mother, and one sister. My sister is 10 years old.', visual:'emoji:👨👩👧', qs:[['Có mấy chị/em gái?','1'],['Chị ấy mấy tuổi?','10']] },
        { type:'noi', title:'Nói về gia đình', content:'Giới thiệu 3-4 thành viên gia đình bạn', visual:'emoji:👨‍👩‍👧‍👦', qs:[['Nói về bố','This is my father']] },
        { type:'doc', title:'Đọc đoạn văn', content:'My family has 4 people. We live in Hanoi. My father is a doctor.', visual:'emoji:🏠👨‍⚕️', qs:[['Gia đình mấy người?','4'],['Sống ở đâu?','Hanoi']] },
        { type:'viet', title:'Viết về gia đình', content:'Viết 3 câu về gia đình bạn', visual:'emoji:✏️❤️', qs:[['Viết 3 câu','My family has ... We live in ...']] },
        { type:'dich', title:'Dịch về gia đình', content:'I love my family very much', visual:'emoji:❤️👨‍👩‍👧', qs:[['Nghĩa tiếng Việt?','Tôi yêu gia đình tôi rất nhiều']] }
      ]
    },
    {
      id: 'a1_3', title: 'Thói quen hàng ngày', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe thói quen', content:'I wake up at 6. I have breakfast at 7. I go to school at 8.', visual:'emoji:⏰🌅🍳', qs:[['Dậy lúc mấy giờ?','6'],['Ăn sáng lúc nào?','7']] },
        { type:'noi', title:'Nói về thói quen', content:'Kể 3 việc bạn làm buổi sáng', visual:'emoji:🌅🪥🍳', qs:[['Nói 3 việc','I wake up / I brush my teeth / I have breakfast']] },
        { type:'doc', title:'Đọc lịch trình', content:'Every day, Lan goes to school at 7 AM and comes home at 5 PM.', visual:'emoji:🏫⏰', qs:[['Lan đi học lúc mấy giờ?','7 AM'],['Về nhà lúc mấy giờ?','5 PM']] },
        { type:'viet', title:'Viết thói quen', content:'Viết 3 câu về thói quen của bạn', visual:'emoji:✏️📅', qs:[['Viết 3 câu','I usually ... / I often ... / I always ...']] },
        { type:'dich', title:'Dịch thói quen', content:'I always brush my teeth before bed', visual:'emoji:🪥🌙', qs:[['Nghĩa tiếng Việt?','Tôi luôn đánh răng trước khi ngủ']] }
      ]
    },
    {
      id: 'a1_4', title: 'Số điện thoại & Địa chỉ', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe số điện thoại', content:'My phone number is 0912 345 678. I live at 25 Le Loi Street.', visual:'emoji:📱🏠', qs:[['Số điện thoại?','0912 345 678'],['Sống ở đâu?','25 Le Loi Street']] },
        { type:'noi', title:'Đọc số điện thoại', content:'Đọc số điện thoại của bạn', visual:'emoji:📞🔢', qs:[['Nói số của bạn','My phone number is ...']] },
        { type:'doc', title:'Đọc địa chỉ', content:'I live at 100 Nguyen Hue Street, District 1, Ho Chi Minh City.', visual:'emoji:🏠🗺️', qs:[['Số nhà?','100'],['Quận mấy?','District 1']] },
        { type:'viet', title:'Viết địa chỉ', content:'Viết địa chỉ nhà bạn bằng tiếng Anh', visual:'emoji:✏️🏠', qs:[['Viết địa chỉ','I live at ...']] },
        { type:'dich', title:'Dịch địa chỉ', content:'What is your address?', visual:'emoji:❓🏠', qs:[['Nghĩa tiếng Việt?','Địa chỉ của bạn là gì?']] }
      ]
    },
    {
      id: 'a1_5', title: 'Đặt hàng ở quán ăn', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe gọi món', content:'Waiter: What would you like?\nCustomer: I would like a bowl of noodles, please.\nWaiter: Anything to drink?\nCustomer: Just water, thanks.', visual:'emoji:🍜💧', qs:[['Khách gọi gì?','a bowl of noodles'],['Uống gì?','water']] },
        { type:'noi', title:'Gọi món', content:'Gọi 1 món ăn và 1 đồ uống', visual:'emoji:🍜☕', qs:[['Nói: Tôi muốn một tô phở','I would like a bowl of pho']] },
        { type:'doc', title:'Đọc menu', content:'Menu: Pho 5 dollars, Fried rice 4 dollars, Coffee 2 dollars, Tea 1.5 dollars.', visual:'emoji:🍜🍚☕🍵', qs:[['Phở bao nhiêu?','5 dollars'],['Trà bao nhiêu?','1.5 dollars']] },
        { type:'viet', title:'Viết đơn gọi món', content:'Viết 3 món bạn muốn gọi', visual:'emoji:✏️🍽️', qs:[['Viết 3 món','I would like ... / Can I have ...']] },
        { type:'dich', title:'Dịch nhà hàng', content:'Can I have the bill, please?', visual:'emoji:🧾💵', qs:[['Nghĩa tiếng Việt?','Cho tôi xin hóa đơn được không?']] }
      ]
    },
    {
      id: 'a1_6', title: 'Miêu tả người', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe miêu tả', content:'My best friend is tall and thin. She has long black hair and brown eyes.', visual:'emoji:👩', qs:[['Bạn ấy cao hay thấp?','tall'],['Tóc màu gì?','black']] },
        { type:'noi', title:'Miêu tả bạn bè', content:'Miêu tả ngoại hình 1 người bạn', visual:'emoji:👥', qs:[['Nói: Cô ấy cao và xinh','She is tall and beautiful']] },
        { type:'doc', title:'Đọc miêu tả', content:'Tom is short and fat. He has short brown hair and blue eyes.', visual:'emoji:👦', qs:[['Tom cao hay thấp?','short'],['Mắt màu gì?','blue']] },
        { type:'viet', title:'Viết miêu tả', content:'Viết 3 câu miêu tả mẹ bạn', visual:'emoji:✏️👩', qs:[['Viết 3 câu','My mother is ... She has ...']] },
        { type:'dich', title:'Dịch miêu tả', content:'She has beautiful long hair', visual:'emoji:💇‍♀️', qs:[['Nghĩa tiếng Việt?','Cô ấy có mái tóc dài đẹp']] }
      ]
    },
    {
      id: 'a1_7', title: 'Sở thích & Thời gian rảnh', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe về sở thích', content:'In my free time, I like reading books and listening to music. I also play football on weekends.', visual:'emoji:📚🎵⚽', qs:[['Thích làm gì?','reading books, listening to music'],['Cuối tuần làm gì?','play football']] },
        { type:'noi', title:'Nói về sở thích', content:'Kể 3 sở thích của bạn', visual:'emoji:🎨🎵⚽', qs:[['Nói 3 sở thích','I like ... / I enjoy ...']] },
        { type:'doc', title:'Đọc về sở thích', content:'Lan loves cooking. She cooks every day. Her favorite food is pasta.', visual:'emoji:👩‍🍳🍝', qs:[['Lan thích gì?','cooking'],['Món yêu thích?','pasta']] },
        { type:'viet', title:'Viết về sở thích', content:'Viết 3 câu về sở thích của bạn', visual:'emoji:✏️🎯', qs:[['Viết 3 câu','I like ... / My hobby is ...']] },
        { type:'dich', title:'Dịch sở thích', content:'What do you do in your free time?', visual:'emoji:❓⏰', qs:[['Nghĩa tiếng Việt?','Bạn làm gì vào thời gian rảnh?']] }
      ]
    },
    {
      id: 'a1_8', title: 'Nhà ở & Đồ đạc', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe miêu tả nhà', content:'My house has 3 bedrooms, 1 living room and 2 bathrooms. There is a garden in front.', visual:'emoji:🏠🌳', qs:[['Có mấy phòng ngủ?','3'],['Có gì phía trước?','a garden']] },
        { type:'noi', title:'Nói về nhà bạn', content:'Miêu tả nhà bạn có mấy phòng', visual:'emoji:🏠🛏️', qs:[['Nói: Nhà tôi có 2 phòng ngủ','My house has 2 bedrooms']] },
        { type:'doc', title:'Đọc miêu tả phòng', content:'My bedroom has a bed, a desk and a wardrobe. The window is next to the bed.', visual:'emoji:🛏️🪑', qs:[['Có gì trong phòng?','bed, desk, wardrobe'],['Cửa sổ ở đâu?','next to the bed']] },
        { type:'viet', title:'Viết miêu tả nhà', content:'Viết 3 câu về nhà bạn', visual:'emoji:✏️🏠', qs:[['Viết 3 câu','My house has ... There is ...']] },
        { type:'dich', title:'Dịch nhà ở', content:'My house is small but comfortable', visual:'emoji:🏠❤️', qs:[['Nghĩa tiếng Việt?','Nhà tôi nhỏ nhưng thoải mái']] }
      ]
    },
    {
      id: 'a1_9', title: 'Công việc & Nghề nghiệp', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe về nghề nghiệp', content:'My father is a teacher. My mother is a nurse. My brother is a student.', visual:'emoji:👨‍🏫👩‍⚕️👨‍🎓', qs:[['Bố làm gì?','teacher'],['Mẹ làm gì?','nurse']] },
        { type:'noi', title:'Nói về nghề', content:'Nói nghề nghiệp của bạn hoặc bố mẹ', visual:'emoji:💼👔', qs:[['Nói: Tôi là sinh viên','I am a student']] },
        { type:'doc', title:'Đọc về công việc', content:'Lisa works in a hospital. She is a doctor. She helps sick people every day.', visual:'emoji:👩‍⚕️🏥', qs:[['Lisa làm ở đâu?','hospital'],['Cô ấy làm gì?','doctor']] },
        { type:'viet', title:'Viết về nghề', content:'Viết 3 câu về công việc của bạn', visual:'emoji:✏️💼', qs:[['Viết 3 câu','I am a ... I work in ...']] },
        { type:'dich', title:'Dịch nghề nghiệp', content:'What do you do for a living?', visual:'emoji:❓💼', qs:[['Nghĩa tiếng Việt?','Bạn làm nghề gì?']] }
      ]
    },
    {
      id: 'a1_10', title: 'Hỏi đường đơn giản', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe hỏi đường', content:'A: Excuse me, where is the bank?\nB: Go straight and turn right. It is next to the post office.', visual:'emoji:🏦➡️', qs:[['Ngân hàng ở đâu?','next to the post office'],['Rẽ phải hay trái?','right']] },
        { type:'noi', title:'Hỏi đường', content:'Hỏi đường đến chợ', visual:'emoji:🗺️🏪', qs:[['Nói: Chợ ở đâu?','Where is the market?']] },
        { type:'doc', title:'Đọc bản đồ', content:'The library is between the school and the park. It is on Main Street.', visual:'emoji:📚🏫🌳', qs:[['Thư viện ở giữa gì?','school and park'],['Ở đường nào?','Main Street']] },
        { type:'viet', title:'Viết chỉ đường', content:'Viết 3 câu chỉ đường đến trường', visual:'emoji:✏️🧭', qs:[['Viết 3 câu','Go straight / Turn left / Turn right']] },
        { type:'dich', title:'Dịch hỏi đường', content:'Excuse me, where is the nearest bus stop?', visual:'emoji:🚌❓', qs:[['Nghĩa tiếng Việt?','Xin lỗi, bến xe buýt gần nhất ở đâu?']] }
      ]
    },
    {
      id: 'a1_11', title: 'Mua sắm cơ bản', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe mua sắm', content:'A: How much is this shirt?\nB: It is 15 dollars.\nA: Can I try it on?', visual:'emoji:👕💰', qs:[['Áo giá bao nhiêu?','15 dollars'],['A muốn làm gì?','try it on']] },
        { type:'noi', title:'Hỏi giá', content:'Hỏi giá một món đồ', visual:'emoji:💰❓', qs:[['Nói: Cái này bao nhiêu tiền?','How much is this?']] },
        { type:'doc', title:'Đọc bảng giá', content:'T-shirt: 12 dollars. Jeans: 25 dollars. Shoes: 40 dollars. Hat: 8 dollars.', visual:'emoji:👕👖👟🎩', qs:[['Quần jeans?','25 dollars'],['Mũ?','8 dollars']] },
        { type:'viet', title:'Viết câu mua sắm', content:'Viết 2 câu hỏi mua hàng', visual:'emoji:✏️🛍️', qs:[['Viết 2 câu','How much is this? / Do you have this in blue?']] },
        { type:'dich', title:'Dịch mua sắm', content:'I would like to buy this shirt', visual:'emoji:🛍️👕', qs:[['Nghĩa tiếng Việt?','Tôi muốn mua chiếc áo này']] }
      ]
    },
    {
      id: 'a1_12', title: 'Thời tiết & Mùa', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe thời tiết', content:'Today is sunny and hot. Tomorrow will be rainy and cool. In winter, it is very cold.', visual:'emoji:☀️🌧️❄️', qs:[['Hôm nay thế nào?','sunny and hot'],['Mùa đông thế nào?','very cold']] },
        { type:'noi', title:'Nói thời tiết', content:'Nói thời tiết hôm nay', visual:'emoji:🌤️', qs:[['Nói: Hôm nay trời nắng','Today is sunny']] },
        { type:'doc', title:'Đọc về 4 mùa', content:'There are 4 seasons in a year: spring, summer, autumn, winter. Summer is the hottest.', visual:'emoji:🌸☀️🍂❄️', qs:[['Có mấy mùa?','4'],['Mùa nào nóng nhất?','summer']] },
        { type:'viet', title:'Viết về mùa', content:'Viết 3 câu về mùa bạn thích', visual:'emoji:✏️🍂', qs:[['Viết 3 câu','My favorite season is ... Because ...']] },
        { type:'dich', title:'Dịch thời tiết', content:'What is the weather like today?', visual:'emoji:❓🌤️', qs:[['Nghĩa tiếng Việt?','Thời tiết hôm nay thế nào?']] }
      ]
    },
    {
      id: 'a1_13', title: 'Sức khỏe & Triệu chứng', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe khám bệnh', content:'Doctor: What is the problem?\nPatient: I have a headache and a fever.\nDoctor: Take this medicine twice a day.', visual:'emoji:👨‍⚕️🤒', qs:[['Bệnh nhân bị gì?','headache and fever'],['Uống thuốc mấy lần?','twice a day']] },
        { type:'noi', title:'Mô tả triệu chứng', content:'Nói bạn bị đau đầu và sốt', visual:'emoji:🤕🌡️', qs:[['Nói: Tôi bị đau đầu','I have a headache']] },
        { type:'doc', title:'Đọc đơn thuốc', content:'Take 2 pills after meals. Drink lots of water and rest.', visual:'emoji:💊💧🛏️', qs:[['Uống mấy viên?','2 pills'],['Uống khi nào?','after meals']] },
        { type:'viet', title:'Viết tin nhắn xin nghỉ', content:'Viết tin nhắn xin nghỉ ốm', visual:'emoji:✏️🤒', qs:[['Viết tin nhắn','I am feeling unwell and cannot come to work today']] },
        { type:'dich', title:'Dịch sức khỏe', content:'You should see a doctor soon', visual:'emoji:👨‍⚕️⏰', qs:[['Nghĩa tiếng Việt?','Bạn nên đi khám bác sĩ sớm']] }
      ]
    },
    {
      id: 'a1_14', title: 'Du lịch & Kỳ nghỉ', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe về kỳ nghỉ', content:'Last summer, I went to Da Nang with my family. We stayed for 5 days. The beach was beautiful.', visual:'emoji:🏖️🌊', qs:[['Đi đâu?','Da Nang'],['Ở mấy ngày?','5 days']] },
        { type:'noi', title:'Nói về kỳ nghỉ', content:'Kể về kỳ nghỉ gần nhất của bạn', visual:'emoji:✈️🏝️', qs:[['Nói: Tôi đã đi ...','I went to ...']] },
        { type:'doc', title:'Đọc về chuyến đi', content:'Next month, we will visit Ha Long Bay. We will stay in a hotel near the beach.', visual:'emoji:⛵🏨', qs:[['Sẽ đi đâu?','Ha Long Bay'],['Ở đâu?','a hotel near the beach']] },
        { type:'viet', title:'Viết về kỳ nghỉ', content:'Viết 3 câu về kỳ nghỉ mơ ước', visual:'emoji:✏️🌴', qs:[['Viết 3 câu','I want to visit ... I will ...']] },
        { type:'dich', title:'Dịch du lịch', content:'Where did you go on your last vacation?', visual:'emoji:❓✈️', qs:[['Nghĩa tiếng Việt?','Bạn đã đi đâu vào kỳ nghỉ trước?']] }
      ]
    },
    {
      id: 'a1_15', title: 'Kế hoạch tương lai', level: 'A1',
      skills: [
        { type:'nghe', title:'Nghe kế hoạch', content:'Next year, I will study English harder. I want to travel to England. I will save money every month.', visual:'emoji:📚✈️💰', qs:[['Sẽ học gì?','English'],['Muốn đi đâu?','England']] },
        { type:'noi', title:'Nói kế hoạch', content:'Nói 3 kế hoạch tương lai của bạn', visual:'emoji:🎯🔮', qs:[['Nói 3 kế hoạch','I will ... / I want to ...']] },
        { type:'doc', title:'Đọc về ước mơ', content:'My dream is to become a teacher. I will go to university next year. I will work hard.', visual:'emoji:🎓👩‍🏫', qs:[['Ước mơ làm gì?','teacher'],['Sẽ làm gì?','go to university']] },
        { type:'viet', title:'Viết về tương lai', content:'Viết 3 câu về kế hoạch 5 năm tới', visual:'emoji:✏️📅', qs:[['Viết 3 câu','In 5 years, I will ...']] },
        { type:'dich', title:'Dịch tương lai', content:'What are your plans for next year?', visual:'emoji:❓🎯', qs:[['Nghĩa tiếng Việt?','Kế hoạch năm sau của bạn là gì?']] }
      ]
    }
  ]
};
