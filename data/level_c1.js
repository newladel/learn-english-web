/* ========== LEVEL C1 — THÀNH THẠO (15 BÀI) ========== */
const levelC1 = {
  code: 'C1',
  name: 'Thành thạo',
  desc: 'Học thuật, kinh doanh, tranh luận chuyên sâu',
  lessons: [
    {
      id: 'c1_1', title: 'Đàm phán kinh doanh', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe đàm phán', content:'A: We are prepared to offer a 10% discount if you commit to a two-year contract.\nB: That is reasonable, but we need more flexibility on payment terms.\nA: Let me see what we can do.', visual:'emoji:🤝💼💰', qs:[['Điều kiện giảm giá?','2-year contract'],['B yêu cầu gì?','flexibility on payment']] },
        { type:'noi', title:'Thực hành đàm phán', content:'Đàm phán giá với đối tác nước ngoài', visual:'emoji:🗣️🤝', qs:[['Nói: Chúng tôi có thể chấp nhận nếu...','We can accept if you ...']] },
        { type:'doc', title:'Đọc hợp đồng', content:'Either party may terminate this agreement with 30 days written notice. Confidentiality obligations survive termination for a period of two years.', visual:'emoji:📄✍️', qs:[['Báo trước bao lâu?','30 days'],['Nghĩa vụ bảo mật kéo dài bao lâu?','2 years']] },
        { type:'viet', title:'Viết email đề xuất', content:'Viết email đề xuất hợp tác thương mại', visual:'emoji:✏️📧', qs:[['Viết email','We propose ... Our offer includes ...']] },
        { type:'dich', title:'Dịch kinh doanh', content:'We look forward to a mutually beneficial partnership', visual:'emoji:🤝📈', qs:[['Nghĩa tiếng Việt?','Chúng tôi mong đợi một mối quan hệ hợp tác đôi bên cùng có lợi']] }
      ]
    },
    {
      id: 'c1_2', title: 'Viết luận học thuật', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe bài giảng', content:'The research methodology employed in this study combines qualitative interviews with quantitative surveys to provide a comprehensive analysis.', visual:'emoji:🎓📊🔬', qs:[['Phương pháp gì?','qualitative + quantitative'],['Kết quả gì?','comprehensive analysis']] },
        { type:'noi', title:'Thuyết trình học thuật', content:'Trình bày quan điểm học thuật về AI trong giáo dục', visual:'emoji:🗣️📊🎤', qs:[['Trình bày','According to research, ...']] },
        { type:'doc', title:'Đọc bài báo khoa học', content:'The findings suggest a strong correlation between socioeconomic status and educational outcomes, although causality cannot be definitively established.', visual:'emoji:📄📈', qs:[['Tương quan giữa gì?','socioeconomic status + education'],['Có thể khẳng định nhân quả không?','No']] },
        { type:'viet', title:'Viết mở bài luận', content:'Viết mở bài cho bài luận về AI và việc làm', visual:'emoji:✏️📝', qs:[['Viết mở bài','This essay examines ... It argues that ...']] },
        { type:'dich', title:'Dịch học thuật', content:'The study provides compelling evidence to support this hypothesis', visual:'emoji:📚✅', qs:[['Nghĩa tiếng Việt?','Nghiên cứu cung cấp bằng chứng thuyết phục ủng hộ giả thuyết này']] }
      ]
    },
    {
      id: 'c1_3', title: 'Tranh luận & Phản biện', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe tranh luận', content:'While I acknowledge the merits of your argument, I must respectfully disagree with your conclusion. The evidence does not support such a sweeping generalization.', visual:'emoji:🗣️⚖️💭', qs:[['Thừa nhận gì?','merits of argument'],['Phản đối gì?','sweeping generalization']] },
        { type:'noi', title:'Thực hành phản biện', content:'Phản biện quan điểm "tiền không mua được hạnh phúc"', visual:'emoji:💬🤔', qs:[['Nói: Tôi hiểu quan điểm...nhưng...','I understand your point, but ...']] },
        { type:'doc', title:'Đọc bài tranh luận', content:'Critics argue that the policy is well-intentioned but ultimately counterproductive, as it creates unintended consequences.', visual:'emoji:📰⚖️', qs:[['Chỉ trích gì?','well-intentioned but counterproductive'],['Tạo ra gì?','unintended consequences']] },
        { type:'viet', title:'Viết phản biện', content:'Viết 5 câu phản biện về ảnh hưởng của mạng xã hội', visual:'emoji:✏️📱', qs:[['Viết 5 câu','While social media has ... Nevertheless, ...']] },
        { type:'dich', title:'Dịch tranh luận', content:'It is imperative that we address this issue without further delay', visual:'emoji:⚠️⏰', qs:[['Nghĩa tiếng Việt?','Điều cấp thiết là chúng ta phải giải quyết vấn đề này không chậm trễ']] }
      ]
    },
    {
      id: 'c1_4', title: 'Phân tích văn học', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe phân tích', content:'The author uses symbolism and metaphor to explore themes of identity and belonging. The protagonist\'s journey mirrors the immigrant experience.', visual:'emoji:📖🎭', qs:[['Tác giả dùng gì?','symbolism and metaphor'],['Nhân vật chính đại diện cho gì?','immigrant experience']] },
        { type:'noi', title:'Phân tích tác phẩm', content:'Phân tích 1 tác phẩm văn học bạn yêu thích', visual:'emoji:🗣️📖', qs:[['Nói về tác phẩm','The novel explores ...']] },
        { type:'doc', title:'Đọc phê bình văn học', content:'The narrative employs a non-linear structure, shifting between past and present to create a sense of fragmented memory.', visual:'emoji:📚🔍', qs:[['Cấu trúc gì?','non-linear'],['Tạo cảm giác gì?','fragmented memory']] },
        { type:'viet', title:'Viết phân tích', content:'Viết 5 câu phân tích 1 nhân vật văn học', visual:'emoji:✏️🎭', qs:[['Viết 5 câu','The character embodies ...']] },
        { type:'dich', title:'Dịch văn học', content:'Literature reflects the soul of a civilization', visual:'emoji:📖✨', qs:[['Nghĩa tiếng Việt?','Văn học phản ánh tâm hồn của một nền văn minh']] }
      ]
    },
    {
      id: 'c1_5', title: 'Triết học & Tư duy', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về triết học', content:'Existentialism emphasizes individual freedom and responsibility. It asserts that existence precedes essence, meaning we define ourselves through our choices.', visual:'emoji:🤔💭', qs:[['Chủ nghĩa hiện sinh nhấn mạnh gì?','freedom and responsibility'],['Tồn tại và bản chất cái nào trước?','existence precedes essence']] },
        { type:'noi', title:'Thảo luận triết học', content:'Thảo luận về ý nghĩa cuộc sống', visual:'emoji:🗣️🤔', qs:[['Nói quan điểm','I believe life\'s meaning is ...']] },
        { type:'doc', title:'Đọc về đạo đức', content:'Utilitarianism holds that the morally right action is the one that produces the greatest good for the greatest number.', visual:'emoji:⚖️💡', qs:[['Chủ nghĩa vị lợi cho gì?','greatest good for greatest number']] },
        { type:'viet', title:'Viết về triết học', content:'Viết 5 câu về quan điểm sống của bạn', visual:'emoji:✏️💭', qs:[['Viết 5 câu','My philosophy of life is ...']] },
        { type:'dich', title:'Dịch triết học', content:'The unexamined life is not worth living', visual:'emoji:💭🌟', qs:[['Nghĩa tiếng Việt?','Cuộc sống không được suy ngẫm là cuộc sống không đáng sống']] }
      ]
    },
    {
      id: 'c1_6', title: 'Kinh tế vĩ mô', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về kinh tế', content:'Inflation erodes purchasing power, while deflation can lead to economic stagnation. Central banks use interest rates to balance these forces.', visual:'emoji:📈💰📉', qs:[['Lạm phát làm gì?','erodes purchasing power'],['Ngân hàng trung ương dùng gì?','interest rates']] },
        { type:'noi', title:'Thảo luận kinh tế', content:'Thảo luận về lạm phát và cách kiểm soát', visual:'emoji:🗣️💹', qs:[['Nói 2 cách','Raise interest rates / Reduce money supply']] },
        { type:'doc', title:'Đọc về GDP', content:'GDP measures the total value of goods and services produced within a country. However, it does not account for environmental costs or inequality.', visual:'emoji:📊🌍', qs:[['GDP đo gì?','total value of goods and services'],['Không tính gì?','environmental costs, inequality']] },
        { type:'viet', title:'Viết về kinh tế', content:'Viết 5 câu về ảnh hưởng của lạm phát', visual:'emoji:✏️📈', qs:[['Viết 5 câu','Inflation affects ...']] },
        { type:'dich', title:'Dịch kinh tế', content:'Economic growth must be balanced with social equity', visual:'emoji:⚖️📊', qs:[['Nghĩa tiếng Việt?','Tăng trưởng kinh tế phải được cân bằng với công bằng xã hội']] }
      ]
    },
    {
      id: 'c1_7', title: 'Đạo đức trong công nghệ', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về AI ethics', content:'As AI systems become more powerful, questions of accountability, transparency, and bias become increasingly urgent. Who is responsible when AI makes harmful decisions?', visual:'emoji:🤖⚖️', qs:[['Câu hỏi gì trở nên cấp thiết?','accountability, transparency, bias'],['Ai chịu trách nhiệm?','unclear']] },
        { type:'noi', title:'Thảo luận AI ethics', content:'Thảo luận về trách nhiệm của AI', visual:'emoji:🗣️🤖', qs:[['Nói quan điểm','I think the responsibility lies with ...']] },
        { type:'doc', title:'Đọc về privacy', content:'Data privacy regulations like GDPR aim to give individuals more control over their personal information, but enforcement remains challenging.', visual:'emoji:🔒📋', qs:[['GDPR nhắm gì?','give control over personal info'],['Thách thức?','enforcement']] },
        { type:'viet', title:'Viết về đạo đức', content:'Viết 5 câu về đạo đức trong phát triển AI', visual:'emoji:✏️🤖⚖️', qs:[['Viết 5 câu','Ethical AI development requires ...']] },
        { type:'dich', title:'Dịch đạo đức', content:'Technology should serve humanity, not the other way around', visual:'emoji:💻🌍', qs:[['Nghĩa tiếng Việt?','Công nghệ nên phục vụ nhân loại, không phải ngược lại']] }
      ]
    },
    {
      id: 'c1_8', title: 'Tâm lý học hành vi', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về tâm lý học', content:'Cognitive biases influence our decision-making more than we realize. Confirmation bias, for instance, leads us to favor information that confirms existing beliefs.', visual:'emoji:🧠💭', qs:[['Thiên kiến nhận thức ảnh hưởng gì?','decision-making'],['Confirmation bias làm gì?','favor info that confirms beliefs']] },
        { type:'noi', title:'Thảo luận tâm lý', content:'Nói về 1 cognitive bias và cách vượt qua', visual:'emoji:🗣️🧠', qs:[['Nói về bias','One example is ... To overcome it, ...']] },
        { type:'doc', title:'Đọc về motivation', content:'Intrinsic motivation, driven by personal satisfaction, often leads to better long-term outcomes than extrinsic motivation, which relies on external rewards.', visual:'emoji:🎯💪', qs:[['Động lực nội tại do gì?','personal satisfaction'],['Kết quả thế nào?','better long-term']] },
        { type:'viet', title:'Viết về tâm lý', content:'Viết 5 câu về cách vượt qua trì hoãn', visual:'emoji:✏️💭', qs:[['Viết 5 câu','To overcome procrastination, ...']] },
        { type:'dich', title:'Dịch tâm lý', content:'Understanding your own biases is the first step to overcoming them', visual:'emoji:🧠🔍', qs:[['Nghĩa tiếng Việt?','Hiểu thiên kiến của bản thân là bước đầu để vượt qua chúng']] }
      ]
    },
    {
      id: 'c1_9', title: 'Khoa học chính trị', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về chính trị', content:'Democracy relies on the active participation of citizens. Voting, civic engagement, and informed debate are essential pillars of a functioning democracy.', visual:'emoji:🏛️🗳️', qs:[['Dân chủ dựa vào gì?','active participation of citizens'],['Trụ cột gì?','voting, civic engagement, informed debate']] },
        { type:'noi', title:'Thảo luận chính trị', content:'Thảo luận về vai trò của truyền thông trong chính trị', visual:'emoji:🗣️📰', qs:[['Nói quan điểm','Media plays a role by ...']] },
        { type:'doc', title:'Đọc về quyền công dân', content:'Citizens have both rights and responsibilities. Rights include freedom of speech; responsibilities include obeying laws and respecting others.', visual:'emoji:⚖️🗳️', qs:[['Quyền gì?','freedom of speech'],['Trách nhiệm gì?','obey laws, respect others']] },
        { type:'viet', title:'Viết về chính trị', content:'Viết 5 câu về tầm quan trọng của tiếng nói công dân', visual:'emoji:✏️🗳️', qs:[['Viết 5 câu','Civic voice is important because ...']] },
        { type:'dich', title:'Dịch chính trị', content:'The price of freedom is eternal vigilance', visual:'emoji:🕊️👁️', qs:[['Nghĩa tiếng Việt?','Cái giá của tự do là sự cảnh giác vĩnh viễn']] }
      ]
    },
    {
      id: 'c1_10', title: 'Quản lý dự án', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về quản lý', content:'Effective project management involves clear scope definition, realistic timelines, resource allocation, and continuous risk assessment throughout the project lifecycle.', visual:'emoji:📊⏰', qs:[['Quản lý dự án cần gì?','scope, timelines, resources, risk assessment'],['Xuyên suốt gì?','project lifecycle']] },
        { type:'noi', title:'Thảo luận quản lý', content:'Nói về 3 kỹ năng của PM giỏi', visual:'emoji:🗣️📋', qs:[['Nói 3 kỹ năng','Communication / Leadership / Problem-solving']] },
        { type:'doc', title:'Đọc về Agile', content:'Agile methodology emphasizes iterative development, customer collaboration, and responsiveness to change over rigid planning.', visual:'emoji:🔄📊', qs:[['Agile nhấn mạnh gì?','iterative development, collaboration'],['Ưu tiên hơn gì?','over rigid planning']] },
        { type:'viet', title:'Viết về quản lý', content:'Viết 5 câu về cách quản lý thời gian hiệu quả', visual:'emoji:✏️⏰', qs:[['Viết 5 câu','Effective time management involves ...']] },
        { type:'dich', title:'Dịch quản lý', content:'Fail to plan, plan to fail', visual:'emoji:📋❌', qs:[['Nghĩa tiếng Việt?','Không lập kế hoạch nghĩa là lập kế hoạch thất bại']] }
      ]
    },
    {
      id: 'c1_11', title: 'Nghệ thuật thuyết phục', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về rhetoric', content:'Aristotle identified three modes of persuasion: ethos (credibility), pathos (emotion), and logos (logic). Effective speakers employ all three.', visual:'emoji:🎤⚖️', qs:[['Ba modes là gì?','ethos, pathos, logos'],['Ai xác định?','Aristotle']] },
        { type:'noi', title:'Thực hành rhetoric', content:'Thuyết phục người nghe về 1 vấn đề', visual:'emoji:🗣️🎤', qs:[['Nói: Tôi tin rằng...','I believe that ...']] },
        { type:'doc', title:'Đọc về storytelling', content:'Narratives are more persuasive than statistics alone. Stories engage emotions and make abstract concepts concrete and memorable.', visual:'emoji:📖💫', qs:[['Kể chuyện vs số liệu?','stories more persuasive'],['Làm gì với khái niệm trừu tượng?','make concrete']] },
        { type:'viet', title:'Viết thuyết phục', content:'Viết 5 câu thuyết phục về tầm quan trọng của đọc sách', visual:'emoji:✏️📚', qs:[['Viết 5 câu','Reading is essential because ...']] },
        { type:'dich', title:'Dịch thuyết phục', content:'Words have the power to inspire or destroy', visual:'emoji:💬💥', qs:[['Nghĩa tiếng Việt?','Ngôn từ có sức mạnh truyền cảm hứng hoặc hủy diệt']] }
      ]
    },
    {
      id: 'c1_12', title: 'Xử lý khủng hoảng', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về crisis management', content:'In a crisis, communication is critical. Organizations must respond quickly, transparently, and empathetically to maintain public trust.', visual:'emoji:🚨📢', qs:[['Trong khủng hoảng cần gì?','communication'],['Phải phản hồi thế nào?','quickly, transparently, empathetically']] },
        { type:'noi', title:'Thảo luận khủng hoảng', content:'Nói về cách xử lý 1 cuộc khủng hoảng truyền thông', visual:'emoji:🗣️🚨', qs:[['Nói 3 bước','Acknowledge / Act / Communicate']] },
        { type:'doc', title:'Đọc về reputation', content:'A company\'s reputation can be destroyed in minutes but takes years to rebuild. Proactive communication and accountability are essential.', visual:'emoji:🏢💔', qs:[['Reputation mất bao lâu?','minutes'],['Xây lại bao lâu?','years']] },
        { type:'viet', title:'Viết về khủng hoảng', content:'Viết 5 câu về bài học từ 1 cuộc khủng hoảng', visual:'emoji:✏️📋', qs:[['Viết 5 câu','The crisis taught us that ...']] },
        { type:'dich', title:'Dịch khủng hoảng', content:'Every crisis presents an opportunity for growth', visual:'emoji:🚨🌱', qs:[['Nghĩa tiếng Việt?','Mỗi cuộc khủng hoảng đều mang đến cơ hội phát triển']] }
      ]
    },
    {
      id: 'c1_13', title: 'Ngôn ngữ & Văn hóa', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về ngôn ngữ học', content:'Language shapes the way we perceive reality. The Sapir-Whorf hypothesis suggests that the structure of a language influences its speakers\' worldview.', visual:'emoji:🗣️🌍', qs:[['Ngôn ngữ định hình gì?','perceive reality'],['Giả thuyết gì?','Sapir-Whorf']] },
        { type:'noi', title:'Thảo luận ngôn ngữ', content:'Thảo luận về ảnh hưởng của ngôn ngữ đến tư duy', visual:'emoji:🗣️🧠', qs:[['Nói quan điểm','Language influences ...']] },
        { type:'doc', title:'Đọc về dịch thuật', content:'Translation is not merely replacing words from one language to another. It requires understanding cultural nuances, idioms, and context.', visual:'emoji:📚🔄', qs:[['Dịch thuật là gì?','not merely replacing words'],['Cần hiểu gì?','cultural nuances, idioms, context']] },
        { type:'viet', title:'Viết về ngôn ngữ', content:'Viết 5 câu về vai trò của ngôn ngữ trong văn hóa', visual:'emoji:✏️🌍', qs:[['Viết 5 câu','Language is ...']] },
        { type:'dich', title:'Dịch ngôn ngữ', content:'To learn a language is to have one more window from which to look at the world', visual:'emoji:🪟🌍', qs:[['Nghĩa tiếng Việt?','Học một ngôn ngữ là có thêm một cửa sổ để nhìn thế giới']] }
      ]
    },
    {
      id: 'c1_14', title: 'Chiến lược & Lãnh đạo', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về leadership', content:'Great leaders inspire others through vision, integrity, and empathy. They empower their teams rather than micromanaging every detail.', visual:'emoji:👔🎯', qs:[['Lãnh đạo giỏi truyền cảm hứng qua gì?','vision, integrity, empathy'],['Trao quyền hay micromanage?','empower']] },
        { type:'noi', title:'Thảo luận lãnh đạo', content:'Nói về 3 phẩm chất của lãnh đạo giỏi', visual:'emoji:🗣️👔', qs:[['Nói 3 phẩm chất','Vision / Integrity / Empathy']] },
        { type:'doc', title:'Đọc về strategy', content:'Strategic thinking involves seeing the big picture, anticipating future trends, and making decisions that align with long-term objectives.', visual:'emoji:📊🔭', qs:[['Tư duy chiến lược gồm gì?','see big picture, anticipate trends'],['Quyết định dựa trên gì?','long-term objectives']] },
        { type:'viet', title:'Viết về lãnh đạo', content:'Viết 5 câu về phong cách lãnh đạo bạn ngưỡng mộ', visual:'emoji:✏️👔', qs:[['Viết 5 câu','I admire ... style of leadership']] },
        { type:'dich', title:'Dịch lãnh đạo', content:'A leader is one who knows the way, goes the way, and shows the way', visual:'emoji:🧭👥', qs:[['Nghĩa tiếng Việt?','Một nhà lãnh đạo là người biết đường, đi đường, và chỉ đường']] }
      ]
    },
    {
      id: 'c1_15', title: 'Tầm nhìn & Đổi mới sáng tạo', level: 'C1',
      skills: [
        { type:'nghe', title:'Nghe về innovation', content:'Disruptive innovation challenges established markets and creates new ones. It often emerges from startups rather than industry incumbents.', visual:'emoji:💡🚀', qs:[['Disruptive innovation làm gì?','challenges established markets'],['Thường đến từ đâu?','startups']] },
        { type:'noi', title:'Thảo luận sáng tạo', content:'Nói về 1 ý tưởng đổi mới sáng tạo', visual:'emoji:🗣️💡', qs:[['Nói ý tưởng','My innovative idea is ...']] },
        { type:'doc', title:'Đọc về tầm nhìn', content:'Visionaries like Steve Jobs and Elon Musk share one trait: they see possibilities where others see obstacles. Their vision shapes the future.', visual:'emoji:🔮🚀', qs:[['Jobs và Musk có chung gì?','see possibilities'],['Tầm nhìn làm gì?','shape the future']] },
        { type:'viet', title:'Viết về tầm nhìn', content:'Viết 5 câu về tầm nhìn 10 năm tới của bạn', visual:'emoji:✏️🔮', qs:[['Viết 5 câu','In 10 years, I envision ...']] },
        { type:'dich', title:'Dịch tầm nhìn', content:'Innovation distinguishes between a leader and a follower', visual:'emoji:💡👑', qs:[['Nghĩa tiếng Việt?','Đổi mới sáng tạo phân biệt người dẫn đầu và người đi theo']] }
      ]
    }
  ]
};
