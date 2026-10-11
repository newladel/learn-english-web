/* ========== TÌNH HUỐNG GIAO TIẾP ========== */
const CHAT_SITUATIONS = [
  {
    id: 'order-food',
    icon: '🍽️',
    title: 'Gọi món ở nhà hàng',
    desc: 'Đặt món, hỏi giá, thanh toán',
    opening: 'Hello! Welcome to our restaurant. What would you like to order today?'
  },
  {
    id: 'order-coffee',
    icon: '☕',
    title: 'Mua cà phê',
    desc: 'Đặt đồ uống ở quán cà phê',
    opening: 'Hi there! What can I get for you today?'
  },
  {
    id: 'ask-directions',
    icon: '🗺️',
    title: 'Hỏi đường',
    desc: 'Hỏi đường đến địa điểm',
    opening: 'Hello! You look a bit lost. Can I help you find something?'
  },
  {
    id: 'shopping',
    icon: '🛍️',
    title: 'Mua sắm quần áo',
    desc: 'Hỏi size, giá, thử đồ',
    opening: 'Welcome! Are you looking for anything in particular today?'
  },
  {
    id: 'hotel',
    icon: '🏨',
    title: 'Đặt phòng khách sạn',
    desc: 'Check-in, hỏi dịch vụ',
    opening: 'Good afternoon! Welcome to our hotel. Do you have a reservation?'
  },
  {
    id: 'airport',
    icon: '✈️',
    title: 'Ở sân bay',
    desc: 'Check-in, hỏi cổng, hành lý',
    opening: 'Hello! May I see your passport and ticket, please?'
  },
  {
    id: 'job-interview',
    icon: '💼',
    title: 'Phỏng vấn xin việc',
    desc: 'Trả lời câu hỏi phỏng vấn',
    opening: 'Good morning! Thank you for coming. Please tell me a bit about yourself.'
  },
  {
    id: 'small-talk',
    icon: '💬',
    title: 'Small talk',
    desc: 'Nói chuyện xã giao hàng ngày',
    opening: 'Hi! Nice weather today, isn\'t it? How are you doing?'
  },
  {
    id: 'doctor',
    icon: '👨‍⚕️',
    title: 'Đi khám bác sĩ',
    desc: 'Mô tả triệu chứng',
    opening: 'Hello! Please have a seat. What seems to be the problem today?'
  },
  {
    id: 'making-friends',
    icon: '🤝',
    title: 'Kết bạn',
    desc: 'Làm quen, giới thiệu bản thân',
    opening: 'Hey! I don\'t think we\'ve met. I\'m Alex. What\'s your name?'
  }
];
