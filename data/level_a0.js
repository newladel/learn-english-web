/* ========== LEVEL A0 — MẤT GỐC (15 BÀI) ========== */
const levelA0 = {
  code: 'A0',
  name: 'Mất gốc',
  desc: 'Bảng chữ cái, số đếm, màu sắc, đồ vật cơ bản',
  lessons: [
    {
      id: 'a0_1', title: 'Bảng chữ cái & Phát âm', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe bảng chữ cái', content:'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z', visual:'alphabet:ABCDEFGHIJKLMNOPQRSTUVWXYZ', qs:[['Chữ thứ 3?','C'],['Chữ thứ 5?','E'],['Chữ cuối?','Z']] },
        { type:'noi', title:'Đọc to bảng chữ cái', content:'Đọc to 26 chữ cái tiếng Anh', visual:'alphabet:ABCDEFGHIJKLMNOPQRSTUVWXYZ', qs:[['Đọc 5 chữ đầu','A B C D E'],['Đọc 5 chữ cuối','V W X Y Z']] },
        { type:'doc', title:'Đọc câu đơn giản', content:'Hello. My name is Nam. I am a student.', qs:[['Tên nhân vật?','Nam'],['Nghề nghiệp?','student']] },
        { type:'viet', title:'Viết câu giới thiệu', content:'Viết câu giới thiệu bản thân', qs:[['Viết: Tôi tên là ___','My name is ___']] },
        { type:'dich', title:'Dịch câu chào', content:'Good morning', qs:[['Nghĩa tiếng Việt?','Chào buổi sáng']] }
      ]
    },
    {
      id: 'a0_2', title: 'Số đếm 1 - 10', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe số 1-10', content:'one, two, three, four, five, six, seven, eight, nine, ten', visual:'numbers:1,2,3,4,5,6,7,8,9,10', qs:[['Số 3?','three'],['Số 7?','seven'],['Số 10?','ten']] },
        { type:'noi', title:'Đếm 1-10', content:'Đếm từ 1 đến 10', visual:'numbers:1,2,3,4,5,6,7,8,9,10', qs:[['Đọc to 1-10','one two three four five six seven eight nine ten']] },
        { type:'doc', title:'Đọc số trong câu', content:'I have 2 cats and 3 dogs.', visual:'emoji:🐱🐱🐶🐶🐶', qs:[['Mấy mèo?','2'],['Mấy chó?','3']] },
        { type:'viet', title:'Viết số bằng chữ', content:'Viết 7 và 9 bằng chữ', qs:[['7 = ?','seven'],['9 = ?','nine']] },
        { type:'dich', title:'Dịch tuổi', content:'I am 20 years old', qs:[['Nghĩa tiếng Việt?','Tôi 20 tuổi']] }
      ]
    },
    {
      id: 'a0_3', title: 'Màu sắc cơ bản', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe màu sắc', content:'red, blue, green, yellow, black, white', visual:'colors:red,blue,green,yellow,black,white', qs:[['Màu đỏ?','red'],['Màu xanh dương?','blue'],['Màu vàng?','yellow']] },
        { type:'noi', title:'Nói màu sắc', content:'Đọc to 6 màu cơ bản', visual:'colors:red,blue,green,yellow,black,white', qs:[['Đọc to','red blue green yellow black white']] },
        { type:'doc', title:'Đọc mô tả màu', content:'The sky is blue. The grass is green. The sun is yellow.', visual:'colors:blue,green,yellow', qs:[['Bầu trời màu gì?','blue'],['Cỏ màu gì?','green'],['Mặt trời màu gì?','yellow']] },
        { type:'viet', title:'Viết câu về màu', content:'Viết: Quả táo màu đỏ', visual:'emoji:🍎', qs:[['Viết câu','The apple is red']] },
        { type:'dich', title:'Dịch màu', content:'My favorite color is blue', qs:[['Nghĩa tiếng Việt?','Màu yêu thích của tôi là xanh dương']] }
      ]
    },
    {
      id: 'a0_4', title: 'Số đếm 11 - 100', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe số 11-20', content:'eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty', visual:'numbers:11,12,13,14,15,16,17,18,19,20', qs:[['Số 12?','twelve'],['Số 15?','fifteen'],['Số 20?','twenty']] },
        { type:'noi', title:'Đếm 11-20', content:'Đếm từ 11 đến 20', visual:'numbers:11,12,13,14,15,16,17,18,19,20', qs:[['Đọc 11-15','eleven twelve thirteen fourteen fifteen']] },
        { type:'doc', title:'Số tròn chục', content:'Thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred.', visual:'numbers:30,40,50,60,70,80,90,100', qs:[['Số 50?','fifty'],['Số 100?','one hundred']] },
        { type:'viet', title:'Viết số lớn', content:'Viết 25, 50, 99 bằng chữ', qs:[['25 = ?','twenty-five'],['50 = ?','fifty']] },
        { type:'dich', title:'Dịch giá tiền', content:'This shirt costs 25 dollars', qs:[['Nghĩa tiếng Việt?','Chiếc áo này giá 25 đô la']] }
      ]
    },
    {
      id: 'a0_5', title: 'Hình dạng', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe hình dạng', content:'circle, square, triangle, rectangle, star, heart', visual:'emoji:⭕⬛🔺▬⭐❤️', qs:[['Hình tròn?','circle'],['Hình vuông?','square'],['Ngôi sao?','star']] },
        { type:'noi', title:'Nói hình dạng', content:'Đọc to 6 hình cơ bản', visual:'emoji:⭕⬛🔺▬⭐❤️', qs:[['Đọc to','circle square triangle rectangle star heart']] },
        { type:'doc', title:'Đọc mô tả hình', content:'The ball is a circle. The box is a square.', visual:'emoji:⚽📦', qs:[['Quả bóng hình gì?','circle'],['Cái hộp hình gì?','square']] },
        { type:'viet', title:'Viết về hình', content:'Viết: Cái bánh pizza là hình tròn', visual:'emoji:🍕', qs:[['Viết câu','The pizza is a circle']] },
        { type:'dich', title:'Dịch hình dạng', content:'Draw a red triangle', qs:[['Nghĩa tiếng Việt?','Vẽ một hình tam giác màu đỏ']] }
      ]
    },
    {
      id: 'a0_6', title: 'Động vật quen thuộc', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe tên động vật', content:'dog, cat, bird, fish, cow, pig, chicken, duck', visual:'emoji:🐕🐈🐦🐟🐄🐖🐓🦆', qs:[['Con chó?','dog'],['Con mèo?','cat'],['Con chim?','bird']] },
        { type:'noi', title:'Nói tên động vật', content:'Đọc to 8 con vật', visual:'emoji:🐕🐈🐦🐟🐄🐖🐓🦆', qs:[['Đọc to','dog cat bird fish cow pig chicken duck']] },
        { type:'doc', title:'Đọc mô tả con vật', content:'The dog is big. The cat is small. Birds can fly.', visual:'emoji:🐕🐈🐦', qs:[['Con gì to?','dog'],['Con gì nhỏ?','cat'],['Con gì bay được?','birds']] },
        { type:'viet', title:'Viết về con vật', content:'Viết: Con mèo của tôi màu trắng', visual:'emoji:🐈', qs:[['Viết câu','My cat is white']] },
        { type:'dich', title:'Dịch động vật', content:'I have two dogs and one cat', qs:[['Nghĩa tiếng Việt?','Tôi có hai con chó và một con mèo']] }
      ]
    },
    {
      id: 'a0_7', title: 'Thức ăn & Đồ uống', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe món ăn', content:'rice, bread, meat, fish, egg, milk, water, coffee, tea', visual:'emoji:🍚🍞🥩🐟🥚🥛💧☕🍵', qs:[['Cơm?','rice'],['Bánh mì?','bread'],['Nước?','water']] },
        { type:'noi', title:'Nói món ăn', content:'Đọc to 9 món', visual:'emoji:🍚🍞🥩🐟🥚🥛💧☕🍵', qs:[['Đọc to','rice bread meat fish egg milk water coffee tea']] },
        { type:'doc', title:'Đọc bữa ăn', content:'I eat rice and fish for lunch. I drink water.', visual:'emoji:🍚🐟💧', qs:[['Ăn gì?','rice and fish'],['Uống gì?','water']] },
        { type:'viet', title:'Viết về món ăn yêu thích', content:'Viết: Tôi thích cà phê', visual:'emoji:☕', qs:[['Viết câu','I like coffee']] },
        { type:'dich', title:'Dịch món ăn', content:'I would like a cup of tea', qs:[['Nghĩa tiếng Việt?','Tôi muốn một tách trà']] }
      ]
    },
    {
      id: 'a0_8', title: 'Gia đình', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe thành viên gia đình', content:'father, mother, brother, sister, son, daughter, grandfather, grandmother', visual:'emoji:👨👩👦👧👴👵', qs:[['Bố?','father'],['Mẹ?','mother'],['Anh trai?','brother']] },
        { type:'noi', title:'Nói về gia đình', content:'Đọc to 8 thành viên', visual:'emoji:👨👩👦👧👴👵', qs:[['Đọc to','father mother brother sister son daughter grandfather grandmother']] },
        { type:'doc', title:'Đọc về gia đình', content:'My family has 4 people: my father, my mother, my sister and me.', visual:'emoji:👨‍👩‍👧‍👦', qs:[['Gia đình mấy người?','4'],['Có chị gái không?','yes']] },
        { type:'viet', title:'Viết về gia đình', content:'Viết: Mẹ tôi là giáo viên', visual:'emoji:👩‍🏫', qs:[['Viết câu','My mother is a teacher']] },
        { type:'dich', title:'Dịch về gia đình', content:'I love my family very much', qs:[['Nghĩa tiếng Việt?','Tôi yêu gia đình tôi rất nhiều']] }
      ]
    },
    {
      id: 'a0_9', title: 'Cơ thể người', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe bộ phận cơ thể', content:'head, hand, foot, eye, ear, nose, mouth, hair', visual:'emoji:👤', qs:[['Đầu?','head'],['Tay?','hand'],['Mắt?','eye']] },
        { type:'noi', title:'Nói bộ phận', content:'Đọc to 8 bộ phận', visual:'emoji:👤', qs:[['Đọc to','head hand foot eye ear nose mouth hair']] },
        { type:'doc', title:'Đọc mô tả', content:'I have two eyes, one nose and one mouth.', qs:[['Mấy mắt?','2'],['Mấy mũi?','1'],['Mấy miệng?','1']] },
        { type:'viet', title:'Viết câu', content:'Viết: Tôi có hai tay', visual:'emoji:🙌', qs:[['Viết câu','I have two hands']] },
        { type:'dich', title:'Dịch cơ thể', content:'Wash your hands before eating', qs:[['Nghĩa tiếng Việt?','Rửa tay trước khi ăn']] }
      ]
    },
    {
      id: 'a0_10', title: 'Quần áo', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe tên quần áo', content:'shirt, pants, shoes, hat, dress, skirt, jacket, socks', visual:'emoji:👕👖👟🎩👗👚🧥🧦', qs:[['Áo sơ mi?','shirt'],['Quần dài?','pants'],['Giày?','shoes']] },
        { type:'noi', title:'Nói quần áo', content:'Đọc to 8 loại', visual:'emoji:👕👖👟🎩👗👚🧥🧦', qs:[['Đọc to','shirt pants shoes hat dress skirt jacket socks']] },
        { type:'doc', title:'Đọc mô tả', content:'I wear a white shirt and black pants.', visual:'emoji:👕👖', qs:[['Áo màu gì?','white'],['Quần màu gì?','black']] },
        { type:'viet', title:'Viết câu', content:'Viết: Cô ấy mặc váy đỏ', visual:'emoji:👗', qs:[['Viết câu','She wears a red dress']] },
        { type:'dich', title:'Dịch quần áo', content:'These shoes are too small', qs:[['Nghĩa tiếng Việt?','Đôi giày này quá nhỏ']] }
      ]
    },
    {
      id: 'a0_11', title: 'Đồ vật trong nhà', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe đồ vật', content:'table, chair, bed, door, window, TV, phone, book', visual:'emoji:🪑🛏️🚪🪟📺📱📚', qs:[['Cái bàn?','table'],['Cái ghế?','chair'],['Cái giường?','bed']] },
        { type:'noi', title:'Nói đồ vật', content:'Đọc to 8 đồ vật', visual:'emoji:🪑🛏️🚪🪟📺📱📚', qs:[['Đọc to','table chair bed door window TV phone book']] },
        { type:'doc', title:'Đọc mô tả', content:'My room has a bed, a table and a chair.', visual:'emoji:🛏️🪑', qs:[['Có gì trong phòng?','bed table chair']] },
        { type:'viet', title:'Viết câu', content:'Viết: Sách ở trên bàn', visual:'emoji:📚🪑', qs:[['Viết câu','The book is on the table']] },
        { type:'dich', title:'Dịch đồ vật', content:'Close the door, please', qs:[['Nghĩa tiếng Việt?','Làm ơn đóng cửa lại']] }
      ]
    },
    {
      id: 'a0_12', title: 'Phương tiện đi lại', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe phương tiện', content:'car, bus, bike, train, plane, motorbike, boat, taxi', visual:'emoji:🚗🚌🚲🚂✈️🏍️⛵🚕', qs:[['Ô tô?','car'],['Xe buýt?','bus'],['Máy bay?','plane']] },
        { type:'noi', title:'Nói phương tiện', content:'Đọc to 8 loại', visual:'emoji:🚗🚌🚲🚂✈️🏍️⛵🚕', qs:[['Đọc to','car bus bike train plane motorbike boat taxi']] },
        { type:'doc', title:'Đọc mô tả', content:'I go to school by bike. My father drives a car.', visual:'emoji:🚲🚗', qs:[['Tôi đi học bằng gì?','bike'],['Bố lái gì?','car']] },
        { type:'viet', title:'Viết câu', content:'Viết: Tôi đi làm bằng xe buýt', visual:'emoji:🚌', qs:[['Viết câu','I go to work by bus']] },
        { type:'dich', title:'Dịch phương tiện', content:'The train leaves at 8 AM', qs:[['Nghĩa tiếng Việt?','Tàu khởi hành lúc 8 giờ sáng']] }
      ]
    },
    {
      id: 'a0_13', title: 'Thời gian & Giờ', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe giờ', content:'one o\'clock, two o\'clock, three o\'clock, half past four, quarter past five', visual:'emoji:🕐🕑🕒🕟🕔', qs:[['1 giờ?','one o\'clock'],['4 rưỡi?','half past four']] },
        { type:'noi', title:'Nói giờ', content:'Nói 6:00, 8:30, 9:15', qs:[['6:00 = ?','six o\'clock'],['8:30 = ?','half past eight']] },
        { type:'doc', title:'Đọc lịch trình', content:'I wake up at 6 AM. I have breakfast at 7 AM. I go to school at 8 AM.', visual:'emoji:⏰🌅🍳🏫', qs:[['Dậy lúc mấy giờ?','6 AM'],['Ăn sáng lúc nào?','7 AM']] },
        { type:'viet', title:'Viết giờ', content:'Viết: Tôi ngủ lúc 10 giờ tối', visual:'emoji:😴🌙', qs:[['Viết câu','I sleep at 10 PM']] },
        { type:'dich', title:'Dịch thời gian', content:'What time is it now?', qs:[['Nghĩa tiếng Việt?','Bây giờ là mấy giờ?']] }
      ]
    },
    {
      id: 'a0_14', title: 'Thứ & Tháng', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe thứ trong tuần', content:'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday', visual:'emoji:📅', qs:[['Thứ 2?','Monday'],['Thứ 6?','Friday'],['Chủ nhật?','Sunday']] },
        { type:'noi', title:'Nói 7 thứ', content:'Đọc to 7 ngày', qs:[['Đọc to','Monday Tuesday Wednesday Thursday Friday Saturday Sunday']] },
        { type:'doc', title:'Nghe tháng', content:'January, February, March, April, May, June, July, August, September, October, November, December', qs:[['Tháng 1?','January'],['Tháng 12?','December']] },
        { type:'viet', title:'Viết ngày', content:'Viết: Hôm nay là thứ hai', visual:'emoji:📅', qs:[['Viết câu','Today is Monday']] },
        { type:'dich', title:'Dịch ngày tháng', content:'My birthday is in June', qs:[['Nghĩa tiếng Việt?','Sinh nhật tôi vào tháng 6']] }
      ]
    },
    {
      id: 'a0_15', title: 'Thời tiết', level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe thời tiết', content:'sunny, rainy, cloudy, windy, hot, cold, warm, cool', visual:'emoji:☀️🌧️☁️💨🔥❄️🌤️', qs:[['Nắng?','sunny'],['Mưa?','rainy'],['Nóng?','hot']] },
        { type:'noi', title:'Nói thời tiết', content:'Đọc to 8 từ', visual:'emoji:☀️🌧️☁️💨🔥❄️', qs:[['Đọc to','sunny rainy cloudy windy hot cold warm cool']] },
        { type:'doc', title:'Đọc dự báo', content:'Today is sunny and hot. Tomorrow will be rainy and cool.', visual:'emoji:☀️🌧️', qs:[['Hôm nay thế nào?','sunny and hot'],['Mai thế nào?','rainy and cool']] },
        { type:'viet', title:'Viết câu', content:'Viết: Hôm nay trời đẹp', visual:'emoji:☀️', qs:[['Viết câu','The weather is nice today']] },
        { type:'dich', title:'Dịch thời tiết', content:'It is very cold in winter', qs:[['Nghĩa tiếng Việt?','Trời rất lạnh vào mùa đông']] }
      ]
    }
  ]
};
