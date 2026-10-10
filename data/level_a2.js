/* ========== LEVEL A2 — CƠ BẢN ========== */
const levelA2 = {
  code: 'A2',
  name: 'Cơ bản',
  desc: 'Mua sắm, ăn uống, chỉ đường',
  lessons: [
    {
      id: 'a2_1',
      title: 'Mua sắm',
      level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe hội thoại mua sắm', content:'A: How much is this shirt?\nB: It is 20 dollars.\nA: Can I try it on?', qs:[['Áo giá bao nhiêu?','20 dollars'],['A muốn làm gì?','try it on']] },
        { type:'noi', title:'Hỏi giá', content:'Hỏi giá một món đồ', qs:[['Nói: Cái này bao nhiêu tiền?','How much is this?']] },
        { type:'doc', title:'Đọc bảng giá', content:'T-shirt: 15 USD. Jeans: 30 USD. Shoes: 45 USD.', qs:[['Jeans giá bao nhiêu?','30 USD'],['Giày giá bao nhiêu?','45 USD']] },
        { type:'viet', title:'Viết câu mua sắm', content:'Viết 2 câu hỏi mua hàng', qs:[['Viết 2 câu','How much is this? / Do you have this in blue?']] },
        { type:'dich', title:'Dịch mua sắm', content:'I would like to buy this shirt', qs:[['Nghĩa tiếng Việt?','Tôi muốn mua chiếc áo này']] }
      ]
    },
    {
      id: 'a2_2',
      title: 'Ăn uống & Nhà hàng',
      level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe gọi món', content:'Waiter: What would you like to order?\nCustomer: I would like a coffee, please.', qs:[['Khách gọi gì?','coffee'],['Ai hỏi?','waiter']] },
        { type:'noi', title:'Gọi món', content:'Gọi một món ăn và đồ uống', qs:[['Nói: Tôi muốn một tách cà phê','I would like a cup of coffee']] },
        { type:'doc', title:'Đọc menu', content:'Menu: Pho 5 USD, Rice 3 USD, Coffee 2 USD, Tea 1.5 USD.', qs:[['Phở giá bao nhiêu?','5 USD'],['Trà giá bao nhiêu?','1.5 USD']] },
        { type:'viet', title:'Viết đơn gọi món', content:'Viết 3 món bạn muốn gọi', qs:[['Viết 3 món','I would like ... / Can I have ...']] },
        { type:'dich', title:'Dịch nhà hàng', content:'Can I have the bill, please?', qs:[['Nghĩa tiếng Việt?','Cho tôi xin hóa đơn được không?']] }
      ]
    },
    {
      id: 'a2_3',
      title: 'Chỉ đường',
      level: 'A2',
      skills: [
        { type:'nghe', title:'Nghe chỉ đường', content:'Go straight, then turn left at the traffic light. The bank is on your right.', qs:[['Rẽ trái ở đâu?','at the traffic light'],['Ngân hàng ở bên nào?','on your right']] },
        { type:'noi', title:'Hỏi đường', content:'Hỏi đường đến nhà ga', qs:[['Nói: Làm sao để đến nhà ga?','How do I get to the train station?']] },
        { type:'doc', title:'Đọc bản đồ', content:'The library is next to the park, opposite the hospital.', qs:[['Thư viện ở cạnh gì?','park'],['Đối diện gì?','hospital']] },
        { type:'viet', title:'Viết chỉ đường', content:'Viết 3 câu chỉ đường', qs:[['Viết 3 câu','Go straight / Turn left / Turn right']] },
        { type:'dich', title:'Dịch chỉ đường', content:'Excuse me, where is the nearest bus stop?', qs:[['Nghĩa tiếng Việt?','Xin lỗi, bến xe buýt gần nhất ở đâu?']] }
      ]
    }
  ]
};
