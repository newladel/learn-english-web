/* ========== NGỮ PHÁP TIẾNG ANH ========== */
const GRAMMAR = [
  {
    id: 'g1', level: 'A0', title: 'Thì hiện tại đơn',
    formula: 'S + V(s/es) + O',
    when: 'Diễn tả thói quen, sự thật hiển nhiên, lịch trình.',
    examples: [
      { type: 'Khẳng định', en: 'I go to school every day.', vi: 'Tôi đi học mỗi ngày.' },
      { type: 'Phủ định', en: 'She does not like coffee.', vi: 'Cô ấy không thích cà phê.' },
      { type: 'Nghi vấn', en: 'Do you speak English?', vi: 'Bạn có nói tiếng Anh không?' }
    ],
    mistakes: [
      { wrong: 'He go to school.', right: 'He goes to school.', note: 'Ngôi 3 số ít (he/she/it) thêm -s/-es' },
      { wrong: 'She don\'t like it.', right: 'She doesn\'t like it.', note: 'Ngôi 3 số ít dùng doesn\'t' }
    ],
    exercises: [
      { q: 'She ___ (like) ice cream.', a: 'likes' },
      { q: 'They ___ (not/watch) TV every night.', a: 'do not watch' },
      { q: '___ you ___ (speak) English?', a: 'Do / speak' }
    ]
  },
  {
    id: 'g2', level: 'A1', title: 'Thì hiện tại tiếp diễn',
    formula: 'S + am/is/are + V-ing',
    when: 'Diễn tả hành động đang xảy ra ngay lúc nói, hoặc kế hoạch tương lai gần.',
    examples: [
      { type: 'Khẳng định', en: 'I am studying English now.', vi: 'Tôi đang học tiếng Anh.' },
      { type: 'Phủ định', en: 'She is not sleeping.', vi: 'Cô ấy không đang ngủ.' },
      { type: 'Nghi vấn', en: 'Are they playing football?', vi: 'Họ đang chơi bóng à?' }
    ],
    mistakes: [
      { wrong: 'I studying English.', right: 'I am studying English.', note: 'Phải có am/is/are' },
      { wrong: 'He is play game.', right: 'He is playing game.', note: 'Động từ phải thêm -ing' }
    ],
    exercises: [
      { q: 'They ___ (watch) TV now.', a: 'are watching' },
      { q: 'I ___ (not/sleep).', a: 'am not sleeping' },
      { q: '___ she ___ (cook)?', a: 'Is / cooking' }
    ]
  },
  {
    id: 'g3', level: 'A1', title: 'Thì quá khứ đơn',
    formula: 'S + V2/ed + O',
    when: 'Diễn tả hành động đã xảy ra và kết thúc trong quá khứ, có thời gian cụ thể.',
    examples: [
      { type: 'Khẳng định', en: 'I went to school yesterday.', vi: 'Hôm qua tôi đi học.' },
      { type: 'Phủ định', en: 'She did not come.', vi: 'Cô ấy đã không đến.' },
      { type: 'Nghi vấn', en: 'Did you see him?', vi: 'Bạn có thấy anh ấy không?' }
    ],
    mistakes: [
      { wrong: 'I go to school yesterday.', right: 'I went to school yesterday.', note: 'Phải dùng V2/ed' },
      { wrong: 'She did not went.', right: 'She did not go.', note: 'Sau did/didn\'t dùng V nguyên thể' }
    ],
    exercises: [
      { q: 'I ___ (go) to the park yesterday.', a: 'went' },
      { q: 'She ___ (not/come) to the party.', a: 'did not come' },
      { q: '___ you ___ (watch) the movie?', a: 'Did / watch' }
    ]
  },
  {
    id: 'g4', level: 'A1', title: 'Thì tương lai đơn',
    formula: 'S + will + V + O',
    when: 'Diễn tả hành động sẽ xảy ra trong tương lai, quyết định tại lúc nói.',
    examples: [
      { type: 'Khẳng định', en: 'I will call you tomorrow.', vi: 'Mai tôi sẽ gọi bạn.' },
      { type: 'Phủ định', en: 'She will not come.', vi: 'Cô ấy sẽ không đến.' },
      { type: 'Nghi vấn', en: 'Will you help me?', vi: 'Bạn sẽ giúp tôi chứ?' }
    ],
    mistakes: [
      { wrong: 'I will to call you.', right: 'I will call you.', note: 'Sau will dùng V nguyên thể, không có "to"' }
    ],
    exercises: [
      { q: 'I ___ (call) you tomorrow.', a: 'will call' },
      { q: 'She ___ (not/come).', a: 'will not come' },
      { q: '___ you ___ (help) me?', a: 'Will / help' }
    ]
  },
  {
    id: 'g5', level: 'A2', title: 'Thì hiện tại hoàn thành',
    formula: 'S + have/has + V3/ed + O',
    when: 'Diễn tả hành động đã xảy ra nhưng còn liên quan đến hiện tại, hoặc kéo dài đến hiện tại.',
    examples: [
      { type: 'Khẳng định', en: 'I have lived here for 5 years.', vi: 'Tôi đã sống ở đây 5 năm.' },
      { type: 'Phủ định', en: 'She has not finished yet.', vi: 'Cô ấy chưa xong.' },
      { type: 'Nghi vấn', en: 'Have you ever been to Japan?', vi: 'Bạn đã từng đến Nhật chưa?' }
    ],
    mistakes: [
      { wrong: 'I have went there.', right: 'I have gone there.', note: 'Sau have/has phải dùng V3/ed (gone, không phải went)' },
      { wrong: 'I have live here 5 years.', right: 'I have lived here for 5 years.', note: 'Cần "for" trước khoảng thời gian' }
    ],
    exercises: [
      { q: 'I ___ (live) here since 2020.', a: 'have lived' },
      { q: 'She ___ (not/finish) her homework.', a: 'has not finished' },
      { q: '___ you ever ___ (be) to Paris?', a: 'Have / been' }
    ]
  },
  {
    id: 'g6', level: 'A2', title: 'Câu so sánh hơn',
    formula: 'S + to be + adj-er/more adj + than + O',
    when: 'So sánh 2 người/vật.',
    examples: [
      { type: 'Tính từ ngắn', en: 'She is taller than me.', vi: 'Cô ấy cao hơn tôi.' },
      { type: 'Tính từ dài', en: 'This book is more interesting than that one.', vi: 'Cuốn sách này thú vị hơn cuốn kia.' },
      { type: 'Bất quy tắc', en: 'My English is better than yours.', vi: 'Tiếng Anh của tôi tốt hơn bạn.' }
    ],
    mistakes: [
      { wrong: 'She is more taller than me.', right: 'She is taller than me.', note: 'Không dùng "more" với adj ngắn' },
      { wrong: 'This is more good.', right: 'This is better.', note: 'Good → better (bất quy tắc)' }
    ],
    exercises: [
      { q: 'He is ___ (tall) than his brother.', a: 'taller' },
      { q: 'This is ___ (interesting) than that.', a: 'more interesting' },
      { q: 'Her English is ___ (good) than mine.', a: 'better' }
    ]
  },
  {
    id: 'g7', level: 'B1', title: 'Câu điều kiện loại 1',
    formula: 'If + S + V(s/es), S + will + V',
    when: 'Điều kiện có thể xảy ra ở hiện tại hoặc tương lai.',
    examples: [
      { type: 'Khẳng định', en: 'If it rains, I will stay home.', vi: 'Nếu trời mưa, tôi sẽ ở nhà.' },
      { type: 'Phủ định', en: 'If you don\'t study, you won\'t pass.', vi: 'Nếu bạn không học, bạn sẽ không đỗ.' },
      { type: 'Nghi vấn', en: 'Will you come if I invite you?', vi: 'Bạn sẽ đến nếu tôi mời chứ?' }
    ],
    mistakes: [
      { wrong: 'If it will rain, I will stay home.', right: 'If it rains, I will stay home.', note: 'Mệnh đề "If" không dùng "will"' }
    ],
    exercises: [
      { q: 'If it ___ (rain), I ___ (stay) home.', a: 'rains / will stay' },
      { q: 'If you study hard, you ___ (pass) the exam.', a: 'will pass' }
    ]
  },
  {
    id: 'g8', level: 'B1', title: 'Câu bị động (Passive Voice)',
    formula: 'S + be + V3/ed + (by O)',
    when: 'Khi muốn nhấn mạnh hành động hoặc người/vật chịu tác động.',
    examples: [
      { type: 'Hiện tại đơn', en: 'The letter is written by Tom.', vi: 'Lá thư được viết bởi Tom.' },
      { type: 'Quá khứ đơn', en: 'The house was built in 1990.', vi: 'Ngôi nhà được xây năm 1990.' },
      { type: 'Tương lai', en: 'The work will be done tomorrow.', vi: 'Công việc sẽ được hoàn thành ngày mai.' }
    ],
    mistakes: [
      { wrong: 'The letter is wrote by Tom.', right: 'The letter is written by Tom.', note: 'Sau be phải dùng V3/ed' }
    ],
    exercises: [
      { q: 'The cake ___ (make) by my mom.', a: 'is made' },
      { q: 'The car ___ (repair) yesterday.', a: 'was repaired' },
      { q: 'The report ___ (finish) tomorrow.', a: 'will be finished' }
    ]
  },
  {
    id: 'g9', level: 'B1', title: 'Mệnh đề quan hệ (Relative Clause)',
    formula: 'N + who/which/that/where/whose + S + V',
    when: 'Bổ sung thông tin cho danh từ đứng trước.',
    examples: [
      { type: 'Who (người)', en: 'The man who is talking is my father.', vi: 'Người đàn ông đang nói là bố tôi.' },
      { type: 'Which (vật)', en: 'The book which I bought is interesting.', vi: 'Cuốn sách tôi mua rất thú vị.' },
      { type: 'Where (nơi)', en: 'The house where I was born is old.', vi: 'Ngôi nhà tôi sinh ra đã cũ.' }
    ],
    mistakes: [
      { wrong: 'The man which is talking...', right: 'The man who is talking...', note: 'Người dùng who, vật dùng which' }
    ],
    exercises: [
      { q: 'The girl ___ is singing is my sister.', a: 'who' },
      { q: 'The car ___ he bought is red.', a: 'which' },
      { q: 'The city ___ I live is beautiful.', a: 'where' }
    ]
  },
  {
    id: 'g10', level: 'B2', title: 'Câu điều kiện loại 2',
    formula: 'If + S + V2/ed, S + would + V',
    when: 'Điều kiện không có thật ở hiện tại.',
    examples: [
      { type: 'Khẳng định', en: 'If I were rich, I would travel the world.', vi: 'Nếu tôi giàu, tôi sẽ đi du lịch thế giới.' },
      { type: 'Phủ định', en: 'If I didn\'t have a job, I would be bored.', vi: 'Nếu tôi không có việc, tôi sẽ chán.' }
    ],
    mistakes: [
      { wrong: 'If I am rich, I would travel.', right: 'If I were rich, I would travel.', note: 'Loại 2 dùng "were" cho mọi ngôi' }
    ],
    exercises: [
      { q: 'If I ___ (be) you, I would accept.', a: 'were' },
      { q: 'If she ___ (have) money, she would buy it.', a: 'had' }
    ]
  },
  {
    id: 'g11', level: 'B2', title: 'Câu điều kiện loại 3',
    formula: 'If + S + had + V3/ed, S + would have + V3/ed',
    when: 'Điều kiện không có thật trong quá khứ.',
    examples: [
      { type: 'Khẳng định', en: 'If I had studied, I would have passed.', vi: 'Nếu tôi học, tôi đã đỗ.' },
      { type: 'Phủ định', en: 'If she hadn\'t left, we would have been happy.', vi: 'Nếu cô ấy không rời đi, chúng tôi đã hạnh phúc.' }
    ],
    mistakes: [
      { wrong: 'If I studied, I would have passed.', right: 'If I had studied, I would have passed.', note: 'Loại 3 dùng had + V3' }
    ],
    exercises: [
      { q: 'If I ___ (know), I would have told you.', a: 'had known' },
      { q: 'If she ___ (come), we would have met her.', a: 'had come' }
    ]
  },
  {
    id: 'g12', level: 'B2', title: 'Câu tường thuật (Reported Speech)',
    formula: 'S + said/told + (that) + S + V(lùi thì)',
    when: 'Thuật lại lời nói của người khác.',
    examples: [
      { type: 'Hiện tại → Quá khứ', en: '"I am tired" → He said he was tired.', vi: 'Anh ấy nói anh ấy mệt.' },
      { type: 'Quá khứ → Quá khứ hoàn thành', en: '"I went home" → She said she had gone home.', vi: 'Cô ấy nói cô ấy đã về nhà.' },
      { type: 'Will → Would', en: '"I will help" → He said he would help.', vi: 'Anh ấy nói anh ấy sẽ giúp.' }
    ],
    mistakes: [
      { wrong: 'He said he is tired.', right: 'He said he was tired.', note: 'Phải lùi thì' }
    ],
    exercises: [
      { q: '"I am hungry" → She said she ___ hungry.', a: 'was' },
      { q: '"I will come" → He said he ___ come.', a: 'would' }
    ]
  },
  {
    id: 'g13', level: 'C1', title: 'Đảo ngữ (Inversion)',
    formula: 'Trạng từ phủ định + trợ động từ + S + V',
    when: 'Nhấn mạnh, trang trọng, văn viết.',
    examples: [
      { type: 'Never', en: 'Never have I seen such a beautiful place.', vi: 'Chưa bao giờ tôi thấy nơi đẹp thế.' },
      { type: 'Rarely', en: 'Rarely does she make mistakes.', vi: 'Hiếm khi cô ấy mắc lỗi.' },
      { type: 'Not only', en: 'Not only did he come, but he also helped.', vi: 'Anh ấy không chỉ đến mà còn giúp.' }
    ],
    mistakes: [
      { wrong: 'Never I have seen...', right: 'Never have I seen...', note: 'Phải đảo trợ động từ lên trước chủ ngữ' }
    ],
    exercises: [
      { q: 'Never ___ I ___ (see) such a thing.', a: 'have / seen' },
      { q: 'Rarely ___ she ___ (go) out.', a: 'does / go' }
    ]
  }
];
