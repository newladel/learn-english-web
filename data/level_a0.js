/* ========== LEVEL A0 — MẤT GỐC ========== */
const levelA0 = {
  code: 'A0',
  name: 'Mất gốc',
  desc: 'Bảng chữ cái, số đếm, màu sắc',
  lessons: [
    {
      id: 'a0_1',
      title: 'Bảng chữ cái & Phát âm',
      level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe bảng chữ cái', content:'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z', visual:'alphabet:ABCDEFGHIJKLMNOPQRSTUVWXYZ', qs:[['Chữ thứ 3?','C'],['Chữ thứ 5?','E'],['Chữ cuối?','Z']] },
        { type:'noi', title:'Đọc to bảng chữ cái', content:'Đọc to 26 chữ cái tiếng Anh', visual:'alphabet:ABCDEFGHIJKLMNOPQRSTUVWXYZ', qs:[['Đọc 5 chữ đầu','A B C D E'],['Đọc 5 chữ cuối','V W X Y Z']] },
        { type:'doc', title:'Đọc câu đơn giản', content:'Hello. My name is Nam. I am a student.', qs:[['Tên nhân vật?','Nam'],['Nghề nghiệp?','student']] },
        { type:'viet', title:'Viết câu giới thiệu', content:'Viết câu giới thiệu bản thân', qs:[['Viết: Tôi tên là ___','My name is ___']] },
        { type:'dich', title:'Dịch câu chào', content:'Good morning', qs:[['Nghĩa tiếng Việt?','Chào buổi sáng']] }
      ]
    },
    {
      id: 'a0_2',
      title: 'Số đếm 1 - 100',
      level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe số 1-10', content:'one, two, three, four, five, six, seven, eight, nine, ten', visual:'numbers:1,2,3,4,5,6,7,8,9,10', qs:[['Số 3?','three'],['Số 7?','seven'],['Số 10?','ten']] },
        { type:'noi', title:'Đếm 1-10', content:'Đếm từ 1 đến 10', visual:'numbers:1,2,3,4,5,6,7,8,9,10', qs:[['Đọc to 1-10','one two three four five six seven eight nine ten']] },
        { type:'doc', title:'Đọc số trong câu', content:'I have 2 cats and 3 dogs.', qs:[['Mấy mèo?','2'],['Mấy chó?','3']] },
        { type:'viet', title:'Viết số bằng chữ', content:'Viết 7 và 9 bằng chữ', qs:[['7 = ?','seven'],['9 = ?','nine']] },
        { type:'dich', title:'Dịch tuổi', content:'I am 20 years old', qs:[['Nghĩa tiếng Việt?','Tôi 20 tuổi']] }
      ]
    },
    {
      id: 'a0_3',
      title: 'Màu sắc cơ bản',
      level: 'A0',
      skills: [
        { type:'nghe', title:'Nghe màu sắc', content:'red, blue, green, yellow, black, white', visual:'colors:red,blue,green,yellow,black,white', qs:[['Màu đỏ?','red'],['Màu xanh dương?','blue'],['Màu vàng?','yellow']] },
        { type:'noi', title:'Nói màu sắc', content:'Đọc to 6 màu cơ bản', visual:'colors:red,blue,green,yellow,black,white', qs:[['Đọc to','red blue green yellow black white']] },
        { type:'doc', title:'Đọc mô tả màu', content:'The sky is blue. The grass is green. The sun is yellow.', visual:'colors:blue,green,yellow', qs:[['Bầu trời màu gì?','blue'],['Cỏ màu gì?','green'],['Mặt trời màu gì?','yellow']] },
        { type:'viet', title:'Viết câu về màu', content:'Viết: Quả táo màu đỏ', qs:[['Viết câu','The apple is red']] },
        { type:'dich', title:'Dịch màu', content:'My favorite color is blue', qs:[['Nghĩa tiếng Việt?','Màu yêu thích của tôi là xanh dương']] }
      ]
    }
  ]
};
