/* ========== LEVEL A2 — CƠ BẢN (15 BÀI) ========== */
const levelA2 = {
  code: 'A2',
  name: 'Cơ bản',
  desc: 'Mua sắm, ăn uống, chỉ đường, du lịch',
  lessons: [
    {
      id: 'a2_1', title: 'Mua sắm quần áo', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe hội thoại mua sắm', content:'A: Can I help you?\nB: Yes, I am looking for a blue shirt in size M.\nA: Let me check. Here you are.', visual:'emoji:👕🛍️', qs:[['B muốn gì?','a blue shirt'],['Size gì?','M']] },
        { type:'noi', title:'Hỏi size & thử đồ', content:'Hỏi size và xin thử đồ', visual:'emoji:📏👕', qs:[['Nói: Tôi có thể thử không?','Can I try it on?']] },
        { type:'doc', title:'Đọc bảng size', content:'Sizes: S (small), M (medium), L (large), XL (extra large).', visual:'emoji:📏👕', qs:[['L là gì?','large'],['XL là gì?','extra large']] },
        { type:'viet', title:'Viết câu mua sắm', content:'Viết 3 câu hỏi khi đi mua sắm', visual:'emoji:✏️🛍️', qs:[['Viết 3 câu','How much is this? / Do you have this in blue?']] },
        { type:'dich', title:'Dịch mua sắm', content:'Do you have this in a smaller size?', visual:'emoji:❓📏', qs:[['Nghĩa tiếng Việt?','Bạn có cái này size nhỏ hơn không?']] }
      ]
    },
    {
      id: 'a2_2', title: 'Ăn uống & Nhà hàng', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe gọi món', content:'Waiter: Are you ready to order?\nCustomer: Yes, I would like the grilled chicken with rice.\nWaiter: And to drink?\nCustomer: Orange juice, please.', visual:'emoji:🍗🍚🥤', qs:[['Khách gọi gì?','grilled chicken with rice'],['Uống gì?','orange juice']] },
        { type:'noi', title:'Đặt bàn và gọi món', content:'Đặt bàn cho 2 người, gọi 2 món', visual:'emoji:🍽️👥', qs:[['Nói: Đặt bàn cho 2 người','A table for two, please']] },
        { type:'doc', title:'Đọc menu nhà hàng', content:'Main dishes: Steak 15 dollars, Salmon 18 dollars, Pizza 12 dollars. Desserts: Cake 5 dollars, Ice cream 3 dollars.', visual:'emoji:🥩🐟🍕🍰', qs:[['Steak giá bao nhiêu?','15 dollars'],['Kem giá bao nhiêu?','3 dollars']] },
        { type:'viet', title:'Viết đơn gọi món', content:'Viết đơn gọi món cho 2 người (3 món)', visual:'emoji:✏️🍽️', qs:[['Viết 3 món','I would like ...']] },
        { type:'dich', title:'Dịch nhà hàng', content:'Could we have the menu, please?', visual:'emoji:📋❓', qs:[['Nghĩa tiếng Việt?','Cho chúng tôi xin thực đơn được không?']] }
      ]
    },
    {
      id: 'a2_3', title: 'Hỏi đường chi tiết', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe chỉ đường', content:'A: Excuse me, how do I get to the train station?\nB: Go straight for 2 blocks, then turn left. It is on your right, next to the bank.', visual:'emoji:🚉🗺️', qs:[['Đi thẳng mấy dãy nhà?','2 blocks'],['Rẽ trái hay phải?','left']] },
        { type:'noi', title:'Hỏi đường', content:'Hỏi đường đến sân bay', visual:'emoji:✈️🗺️', qs:[['Nói: Làm sao đến sân bay?','How do I get to the airport?']] },
        { type:'doc', title:'Đọc bản đồ thành phố', content:'The post office is opposite the school. The supermarket is between the bank and the hospital.', visual:'emoji:🏤🏫🏦🏥', qs:[['Bưu điện ở đâu?','opposite the school'],['Siêu thị ở giữa gì?','bank and hospital']] },
        { type:'viet', title:'Viết chỉ đường', content:'Viết 4 câu chỉ đường đến chợ Bến Thành', visual:'emoji:✏️🧭', qs:[['Viết 4 câu','First, go straight ... Then turn ...']] },
        { type:'dich', title:'Dịch hỏi đường', content:'Is there a pharmacy near here?', visual:'emoji:💊❓', qs:[['Nghĩa tiếng Việt?','Có hiệu thuốc nào gần đây không?']] }
      ]
    },
    {
      id: 'a2_4', title: 'Đặt phòng khách sạn', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe đặt phòng', content:'Receptionist: Good evening. How can I help you?\nGuest: I have a reservation. My name is Nguyen.\nReceptionist: Yes, a double room for 3 nights. Here is your key.', visual:'emoji:🏨🔑', qs:[['Đặt phòng mấy đêm?','3 nights'],['Loại phòng gì?','double room']] },
        { type:'noi', title:'Đặt phòng', content:'Đặt phòng 2 đêm cho 2 người', visual:'emoji:🛏️👥', qs:[['Nói: Tôi muốn đặt phòng','I would like to book a room']] },
        { type:'doc', title:'Đọc mô tả khách sạn', content:'Our hotel offers free breakfast, Wi-Fi, and a swimming pool. Check-in at 2 PM, check-out at 12 PM.', visual:'emoji:🏨🍳📶🏊', qs:[['Có gì miễn phí?','breakfast, Wi-Fi'],['Check-in lúc mấy giờ?','2 PM']] },
        { type:'viet', title:'Viết email đặt phòng', content:'Viết email đặt phòng 3 đêm từ 20/12', visual:'emoji:✏️📧', qs:[['Viết email','I would like to book a room for 3 nights from ...']] },
        { type:'dich', title:'Dịch khách sạn', content:'Does the room have air conditioning?', visual:'emoji:❄️❓', qs:[['Nghĩa tiếng Việt?','Phòng có điều hòa không?']] }
      ]
    },
    {
      id: 'a2_5', title: 'Đi lại & Giao thông', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe về giao thông', content:'A: How do you get to work?\nB: I usually take the bus, but sometimes I ride my motorbike. It takes 20 minutes.', visual:'emoji:🚌🏍️', qs:[['B đi làm bằng gì?','bus or motorbike'],['Mất bao lâu?','20 minutes']] },
        { type:'noi', title:'Nói về đi lại', content:'Nói bạn đi học/đi làm bằng gì', visual:'emoji:🚗🚲', qs:[['Nói: Tôi đi làm bằng xe bus','I go to work by bus']] },
        { type:'doc', title:'Đọc lịch tàu', content:'Train to Hanoi: 7 AM, 10 AM, 2 PM, 6 PM. Ticket price: 50 dollars. Journey: 8 hours.', visual:'emoji:🚂⏰', qs:[['Có mấy chuyến?','4'],['Giá vé?','50 dollars']] },
        { type:'viet', title:'Viết về đi lại', content:'Viết 3 câu về cách bạn đi đến trường', visual:'emoji:✏️🚌', qs:[['Viết 3 câu','I go to school by ... It takes ...']] },
        { type:'dich', title:'Dịch giao thông', content:'What time is the next train?', visual:'emoji:❓🚂', qs:[['Nghĩa tiếng Việt?','Chuyến tàu tiếp theo lúc mấy giờ?']] }
      ]
    },
    {
      id: 'a2_6', title: 'Mô tả người chi tiết', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe miêu tả', content:'My brother is 25 years old. He is tall with short black hair. He usually wears glasses and a blue jacket.', visual:'emoji:👨‍🦱👓', qs:[['Anh ấy bao nhiêu tuổi?','25'],['Có gì đặc biệt?','glasses']] },
        { type:'noi', title:'Miêu tả người', content:'Miêu tả 1 thành viên gia đình', visual:'emoji:🗣️👤', qs:[['Nói: Anh ấy cao và đeo kính','He is tall and wears glasses']] },
        { type:'doc', title:'Đọc miêu tả', content:'My teacher has long brown hair and green eyes. She is kind and funny. She always smiles.', visual:'emoji:👩‍🏫😊', qs:[['Tóc màu gì?','brown'],['Mắt màu gì?','green']] },
        { type:'viet', title:'Viết miêu tả', content:'Viết 4 câu miêu tả bạn thân', visual:'emoji:✏️👥', qs:[['Viết 4 câu','My best friend is ... She has ...']] },
        { type:'dich', title:'Dịch miêu tả', content:'He is in his thirties with a beard', visual:'emoji:🧔', qs:[['Nghĩa tiếng Việt?','Anh ấy khoảng 30 tuổi và có râu']] }
      ]
    },
    {
      id: 'a2_7', title: 'Sở thích nâng cao', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe về sở thích', content:'In my free time, I like watching movies and playing guitar. I have played guitar for 3 years.', visual:'emoji:🎸🎬', qs:[['Thích gì?','watching movies, playing guitar'],['Chơi guitar bao lâu?','3 years']] },
        { type:'noi', title:'Nói về sở thích', content:'Nói 3 sở thích + thời gian bạn làm', visual:'emoji:🎨🎵', qs:[['Nói 3 sở thích','I have ... for ...']] },
        { type:'doc', title:'Đọc về sở thích', content:'Mai loves reading. She reads 2 books a month. Her favorite genre is mystery.', visual:'emoji:📚🔍', qs:[['Mai đọc mấy quyển/tháng?','2'],['Thể loại yêu thích?','mystery']] },
        { type:'viet', title:'Viết về sở thích', content:'Viết 4 câu về sở thích của bạn', visual:'emoji:✏️🎯', qs:[['Viết 4 câu','I am interested in ... I have ... for ...']] },
        { type:'dich', title:'Dịch sở thích', content:'How long have you been playing football?', visual:'emoji:❓⚽', qs:[['Nghĩa tiếng Việt?','Bạn chơi bóng đá bao lâu rồi?']] }
      ]
    },
    {
      id: 'a2_8', title: 'Cảm xúc & Tâm trạng', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe về cảm xúc', content:'A: You look happy today!\nB: Yes, I got a new job. I am very excited.\nA: Congratulations!', visual:'emoji:😊🎉', qs:[['B có chuyện gì?','got a new job'],['Cảm thấy thế nào?','excited']] },
        { type:'noi', title:'Nói cảm xúc', content:'Nói bạn cảm thấy thế nào hôm nay', visual:'emoji:😊😢😐', qs:[['Nói: Tôi cảm thấy vui','I feel happy']] },
        { type:'doc', title:'Đọc về cảm xúc', content:'Tom is sad because he failed the exam. He is worried about his future.', visual:'emoji:😢😟', qs:[['Tom cảm thấy gì?','sad'],['Tại sao?','failed the exam']] },
        { type:'viet', title:'Viết về cảm xúc', content:'Viết 3 câu về ngày hôm nay của bạn', visual:'emoji:✏️💭', qs:[['Viết 3 câu','Today I feel ... because ...']] },
        { type:'dich', title:'Dịch cảm xúc', content:'I am so tired after a long day', visual:'emoji:😴', qs:[['Nghĩa tiếng Việt?','Tôi rất mệt sau một ngày dài']] }
      ]
    },
    {
      id: 'a2_9', title: 'Sức khỏe & Bác sĩ', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe khám bệnh', content:'Doctor: What seems to be the problem?\nPatient: I have a sore throat and a cough.\nDoctor: You should take medicine and rest.', visual:'emoji:👨‍⚕️🤧', qs:[['Bệnh nhân bị gì?','sore throat and cough'],['Bác sĩ khuyên gì?','take medicine and rest']] },
        { type:'noi', title:'Mô tả triệu chứng', content:'Nói bạn bị đau họng và ho', visual:'emoji:🤒🗣️', qs:[['Nói: Tôi bị đau họng','I have a sore throat']] },
        { type:'doc', title:'Đọc toa thuốc', content:'Take 1 pill 3 times a day after meals. Drink warm water. Do not eat spicy food.', visual:'emoji:💊💧🌶️', qs:[['Uống mấy lần/ngày?','3'],['Không ăn gì?','spicy food']] },
        { type:'viet', title:'Viết tin nhắn xin nghỉ', content:'Viết tin nhắn xin nghỉ vì ốm', visual:'emoji:✏️🤒', qs:[['Viết tin nhắn','I am sick and cannot come today']] },
        { type:'dich', title:'Dịch sức khỏe', content:'I have a stomachache since yesterday', visual:'emoji:🤢', qs:[['Nghĩa tiếng Việt?','Tôi bị đau bụng từ hôm qua']] }
      ]
    },
    {
      id: 'a2_10', title: 'Thời gian & Lịch trình', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe về lịch trình', content:'A: When is your English class?\nB: It is on Mondays and Wednesdays from 6 to 8 PM.\nA: How long is it?', visual:'emoji:📅⏰', qs:[['Lớp học ngày nào?','Mondays and Wednesdays'],['Từ mấy giờ đến mấy giờ?','6 to 8 PM']] },
        { type:'noi', title:'Nói lịch trình', content:'Nói lịch học của bạn trong tuần', visual:'emoji:🗓️💬', qs:[['Nói: Tôi học tiếng Anh vào thứ 2','I study English on Monday']] },
        { type:'doc', title:'Đọc lịch làm việc', content:'The office is open from 8 AM to 5 PM on weekdays. Closed on weekends and holidays.', visual:'emoji:🏢🕐', qs:[['Mở cửa mấy giờ?','8 AM to 5 PM'],['Cuối tuần có mở không?','No']] },
        { type:'viet', title:'Viết lịch trình', content:'Viết lịch trình của bạn cho thứ 2', visual:'emoji:✏️📅', qs:[['Viết 4 hoạt động','At 6 AM, I ...']] },
        { type:'dich', title:'Dịch lịch trình', content:'What time does the meeting start?', visual:'emoji:❓🕐', qs:[['Nghĩa tiếng Việt?','Cuộc họp bắt đầu lúc mấy giờ?']] }
      ]
    },
    {
      id: 'a2_11', title: 'Mua vé & Đặt chỗ', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe mua vé', content:'A: I would like 2 tickets for the 7 PM show, please.\nB: That will be 20 dollars.\nA: Here you are. Can I pay by card?', visual:'emoji:🎬🎟️', qs:[['Mua mấy vé?','2 tickets'],['Suất mấy giờ?','7 PM']] },
        { type:'noi', title:'Mua vé', content:'Mua 2 vé xem phim 8 giờ tối', visual:'emoji:🎟️🎬', qs:[['Nói: Tôi muốn 2 vé','I would like 2 tickets']] },
        { type:'doc', title:'Đọc thông tin show', content:'Movie: Avengers. Showtimes: 2 PM, 5 PM, 8 PM. Price: 10 dollars per ticket. Venue: CGV Cinema.', visual:'emoji:🎬🕐', qs:[['Có mấy suất?','3'],['Giá vé?','10 dollars']] },
        { type:'viet', title:'Viết hỏi đặt chỗ', content:'Viết 2 câu hỏi về đặt chỗ', visual:'emoji:✏️🎟️', qs:[['Viết 2 câu','Can I book ... / Is it available ...']] },
        { type:'dich', title:'Dịch mua vé', content:'Are there any seats available for tonight?', visual:'emoji:💺❓', qs:[['Nghĩa tiếng Việt?','Còn chỗ nào cho tối nay không?']] }
      ]
    },
    {
      id: 'a2_12', title: 'Thời tiết & Dự báo', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe dự báo thời tiết', content:'Today will be cloudy with a chance of rain in the afternoon. Temperature: 22 to 28 degrees Celsius.', visual:'emoji:☁️🌧️🌡️', qs:[['Hôm nay thế nào?','cloudy'],['Nhiệt độ bao nhiêu?','22 to 28']] },
        { type:'noi', title:'Nói dự báo', content:'Nói dự báo thời tiết ngày mai', visual:'emoji:🌤️📅', qs:[['Nói: Ngày mai trời nắng','Tomorrow will be sunny']] },
        { type:'doc', title:'Đọc tin thời tiết', content:'In summer, the weather is usually hot and humid. In winter, it is cold and dry.', visual:'emoji:☀️❄️', qs:[['Mùa hè thế nào?','hot and humid'],['Mùa đông thế nào?','cold and dry']] },
        { type:'viet', title:'Viết về thời tiết', content:'Viết 3 câu về thời tiết hôm nay', visual:'emoji:✏️🌤️', qs:[['Viết 3 câu','Today is ... The temperature is ...']] },
        { type:'dich', title:'Dịch thời tiết', content:'It will rain heavily tomorrow morning', visual:'emoji:🌧️🌅', qs:[['Nghĩa tiếng Việt?','Trời sẽ mưa to vào sáng mai']] }
      ]
    },
    {
      id: 'a2_13', title: 'Miêu tả đồ vật', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe miêu tả đồ vật', content:'This phone is new and expensive. It has a big screen and a good camera. It costs 800 dollars.', visual:'emoji:📱💰', qs:[['Điện thoại có gì?','big screen, good camera'],['Giá bao nhiêu?','800 dollars']] },
        { type:'noi', title:'Miêu tả đồ vật', content:'Miêu tả điện thoại của bạn', visual:'emoji:📱🗣️', qs:[['Nói: Điện thoại của tôi...','My phone is ...']] },
        { type:'doc', title:'Đọc mô tả sản phẩm', content:'This laptop is light and fast. It has 16GB RAM and 512GB SSD. Battery lasts 10 hours.', visual:'emoji:💻⚡', qs:[['Bao nhiêu RAM?','16GB'],['Pin kéo dài bao lâu?','10 hours']] },
        { type:'viet', title:'Viết miêu tả', content:'Viết 3 câu miêu tả laptop bạn muốn mua', visual:'emoji:✏️💻', qs:[['Viết 3 câu','The laptop has ... It costs ...']] },
        { type:'dich', title:'Dịch miêu tả', content:'This bag is made of leather and very durable', visual:'emoji:👜', qs:[['Nghĩa tiếng Việt?','Túi này làm bằng da và rất bền']] }
      ]
    },
    {
      id: 'a2_14', title: 'Sở thích thể thao', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe về thể thao', content:'A: Do you play any sports?\nB: Yes, I play badminton twice a week. I also go swimming on Sundays.', visual:'emoji:🏸🏊', qs:[['B chơi gì?','badminton'],['Chơi mấy lần/tuần?','twice a week']] },
        { type:'noi', title:'Nói về thể thao', content:'Nói môn thể thao bạn thích và tần suất', visual:'emoji:⚽🏀', qs:[['Nói: Tôi chơi bóng đá mỗi tuần','I play football every week']] },
        { type:'doc', title:'Đọc về thể thao', content:'Swimming is good for your health. It helps you stay fit and relax. Many people swim in summer.', visual:'emoji:🏊💪', qs:[['Bơi có ích gì?','good for health'],['Nhiều người bơi khi nào?','in summer']] },
        { type:'viet', title:'Viết về thể thao', content:'Viết 3 câu về môn thể thao yêu thích', visual:'emoji:✏️⚽', qs:[['Viết 3 câu','My favorite sport is ... I play it ...']] },
        { type:'dich', title:'Dịch thể thao', content:'How often do you exercise?', visual:'emoji:❓💪', qs:[['Nghĩa tiếng Việt?','Bạn tập thể dục bao lâu một lần?']] }
      ]
    },
    {
      id: 'a2_15', title: 'Lễ hội & Truyền thống', level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe về Tết', content:'Tet is the most important festival in Vietnam. Families get together and eat special food. Children receive lucky money.', visual:'emoji:🎉🧧', qs:[['Tết quan trọng thế nào?','most important'],['Trẻ em nhận gì?','lucky money']] },
        { type:'noi', title:'Nói về lễ hội', content:'Nói về 1 lễ hội bạn thích', visual:'emoji:🎊🗣️', qs:[['Nói: Tôi thích Tết vì...','I like Tet because ...']] },
        { type:'doc', title:'Đọc về lễ hội', content:'Christmas is celebrated on December 25. People decorate trees and exchange gifts. It is a family holiday.', visual:'emoji:🎄🎁', qs:[['Giáng sinh ngày nào?','December 25'],['Mọi người làm gì?','decorate trees, exchange gifts']] },
        { type:'viet', title:'Viết về lễ hội', content:'Viết 4 câu về lễ hội bạn thích', visual:'emoji:✏️🎉', qs:[['Viết 4 câu','My favorite festival is ... It is celebrated ...']] },
        { type:'dich', title:'Dịch lễ hội', content:'What do people usually do during Tet?', visual:'emoji:❓🎉', qs:[['Nghĩa tiếng Việt?','Mọi người thường làm gì trong dịp Tết?']] }
      ]
    }
  ]
};
