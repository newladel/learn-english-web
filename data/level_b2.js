/* ========== LEVEL B2 — KHÁ (15 BÀI) ========== */
const levelB2 = {
  code: 'B2',
  name: 'Khá',
  desc: 'Công nghệ, môi trường, giáo dục, xã hội',
  lessons: [
    {
      id: 'b2_1', title: 'Trí tuệ nhân tạo (AI)', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về AI', content:'Artificial intelligence is transforming many industries, from healthcare to finance. It can analyze huge amounts of data faster than humans.', visual:'emoji:🤖💡', qs:[['AI thay đổi ngành nào?','healthcare, finance'],['AI làm được gì?','analyze data faster']] },
        { type:'noi', title:'Thảo luận về AI', content:'Nói về lợi ích và rủi ro của AI trong đời sống', visual:'emoji:🗣️🤖', qs:[['Nói 2 lợi ích, 1 rủi ro','AI improves efficiency, but can replace jobs']] },
        { type:'doc', title:'Đọc bài về AI', content:'While AI brings many benefits, it also raises ethical concerns. Issues like privacy, bias, and job displacement need to be addressed.', visual:'emoji:📄⚠️', qs:[['AI gây lo ngại gì?','privacy, bias, job displacement'],['Cần làm gì?','address these issues']] },
        { type:'viet', title:'Viết đoạn văn về AI', content:'Viết 5 câu về ảnh hưởng của AI đến việc làm', visual:'emoji:✏️🤖', qs:[['Viết 5 câu','AI has ... On one hand ... On the other hand ...']] },
        { type:'dich', title:'Dịch về AI', content:'AI is expected to reshape the global economy', visual:'emoji:🌏💼', qs:[['Nghĩa tiếng Việt?','AI được kỳ vọng sẽ định hình lại nền kinh tế toàn cầu']] }
      ]
    },
    {
      id: 'b2_2', title: 'Biến đổi khí hậu', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về khí hậu', content:'Climate change is causing more frequent extreme weather events, including droughts, floods, and heatwaves across the globe.', visual:'emoji:🌍🌡️⛈️', qs:[['Thời tiết cực đoan nào?','droughts, floods, heatwaves'],['Phạm vi?','across the globe']] },
        { type:'noi', title:'Thảo luận khí hậu', content:'Nói 3 giải pháp giảm biến đổi khí hậu', visual:'emoji:♻️🌱🌍', qs:[['Nói 3 giải pháp','Reduce emissions / Use renewable energy / Plant trees']] },
        { type:'doc', title:'Đọc báo môi trường', content:'Scientists warn that without urgent action, global temperatures could rise by 2 degrees Celsius by 2050, causing irreversible damage.', visual:'emoji:📰🔬', qs:[['Nhiệt độ có thể tăng bao nhiêu?','2 degrees'],['Đến năm nào?','2050']] },
        { type:'viet', title:'Viết luận môi trường', content:'Viết 5 câu về vai trò của cá nhân trong bảo vệ môi trường', visual:'emoji:✏️🌍💚', qs:[['Viết 5 câu','Individuals can ...']] },
        { type:'dich', title:'Dịch môi trường', content:'Governments must take urgent action to reduce carbon emissions', visual:'emoji:🏛️🌫️', qs:[['Nghĩa tiếng Việt?','Các chính phủ phải hành động khẩn cấp để giảm khí thải carbon']] }
      ]
    },
    {
      id: 'b2_3', title: 'Giáo dục hiện đại', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về giáo dục', content:'Online education has made learning more accessible, but it requires strong self-discipline and reliable internet access.', visual:'emoji:💻🎓', qs:[['Học online có lợi gì?','more accessible'],['Cần gì?','self-discipline, internet']] },
        { type:'noi', title:'Thảo luận giáo dục', content:'So sánh học online và học truyền thống', visual:'emoji:🗣️⚖️', qs:[['Nói 2 ưu, 2 nhược','Online is flexible but lacks interaction']] },
        { type:'doc', title:'Đọc về giáo dục', content:'Many universities now offer hybrid courses combining in-person and online learning. This approach provides flexibility while maintaining interaction.', visual:'emoji:📚🔄', qs:[['Khóa học hybrid là gì?','combine in-person and online'],['Lợi ích?','flexibility + interaction']] },
        { type:'viet', title:'Viết về giáo dục', content:'Viết 5 câu về tầm quan trọng của học tập suốt đời', visual:'emoji:✏️📚', qs:[['Viết 5 câu','Lifelong learning is ...']] },
        { type:'dich', title:'Dịch giáo dục', content:'Education is the most powerful weapon to change the world', visual:'emoji:🎓🌍', qs:[['Nghĩa tiếng Việt?','Giáo dục là vũ khí mạnh mẽ nhất để thay đổi thế giới']] }
      ]
    },
    {
      id: 'b2_4', title: 'Kinh doanh & Khởi nghiệp', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về startup', content:'Starting a business requires careful planning, a clear vision, and sufficient funding. Most startups fail within the first three years.', visual:'emoji:🚀💼', qs:[['Khởi nghiệp cần gì?','planning, vision, funding'],['Bao nhiêu startup thất bại?','most within first 3 years']] },
        { type:'noi', title:'Thảo luận kinh doanh', content:'Nói về 1 ý tưởng khởi nghiệp của bạn', visual:'emoji:💡🗣️', qs:[['Nói ý tưởng','My business idea is ...']] },
        { type:'doc', title:'Đọc case study', content:'Airbnb started as a small idea in 2008. Today it is worth over 100 billion dollars, proving that big ideas can start small.', visual:'emoji:📊🏢', qs:[['Airbnb bắt đầu khi nào?','2008'],['Giá trị hiện tại?','100 billion dollars']] },
        { type:'viet', title:'Viết kế hoạch', content:'Viết 5 câu về kế hoạch khởi nghiệp', visual:'emoji:✏️🚀', qs:[['Viết 5 câu','My startup will ...']] },
        { type:'dich', title:'Dịch kinh doanh', content:'Innovation is the key to success in business', visual:'emoji:💡🔑', qs:[['Nghĩa tiếng Việt?','Đổi mới sáng tạo là chìa khóa thành công trong kinh doanh']] }
      ]
    },
    {
      id: 'b2_5', title: 'Truyền thông & Quảng cáo', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về quảng cáo', content:'Effective advertising targets the right audience at the right time. It uses psychology to influence consumer behavior.', visual:'emoji:📺🎯', qs:[['Quảng cáo hiệu quả cần gì?','target audience, right time'],['Dùng gì để ảnh hưởng?','psychology']] },
        { type:'noi', title:'Thảo luận truyền thông', content:'Nói về ảnh hưởng của quảng cáo đến người tiêu dùng', visual:'emoji:📢🗣️', qs:[['Nói 2 ảnh hưởng','Ads influence buying decisions']] },
        { type:'doc', title:'Đọc về viral marketing', content:'Viral marketing spreads content rapidly through social networks. A successful campaign can reach millions of people at almost no cost.', visual:'emoji:🦠📈', qs:[['Viral marketing là gì?','spread content rapidly'],['Chi phí?','almost no cost']] },
        { type:'viet', title:'Viết về quảng cáo', content:'Viết 5 câu về chiến dịch quảng cáo bạn ấn tượng', visual:'emoji:✏️📺', qs:[['Viết 5 câu','One memorable campaign was ...']] },
        { type:'dich', title:'Dịch truyền thông', content:'Social media has revolutionized how brands communicate', visual:'emoji:📱💬', qs:[['Nghĩa tiếng Việt?','Mạng xã hội đã cách mạng hóa cách các thương hiệu giao tiếp']] }
      ]
    },
    {
      id: 'b2_6', title: 'Đa văn hóa & Toàn cầu hóa', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về toàn cầu hóa', content:'Globalization has connected economies worldwide, but it has also created challenges for local cultures and traditional industries.', visual:'emoji:🌏🔗', qs:[['Toàn cầu hóa kết nối gì?','economies worldwide'],['Thách thức gì?','local cultures, traditional industries']] },
        { type:'noi', title:'Thảo luận đa văn hóa', content:'Nói về ưu và nhược của toàn cầu hóa', visual:'emoji:🗣️🌏', qs:[['Nói 2 ưu, 2 nhược','Globalization brings ... but ...']] },
        { type:'doc', title:'Đọc về văn hóa', content:'Living in a multicultural society enriches our perspective. It teaches tolerance, empathy, and open-mindedness.', visual:'emoji:🤝🌍', qs:[['Sống đa văn hóa dạy gì?','tolerance, empathy, open-mindedness']] },
        { type:'viet', title:'Viết về văn hóa', content:'Viết 5 câu về lợi ích của việc học ngoại ngữ', visual:'emoji:✏️🌐', qs:[['Viết 5 câu','Learning languages opens ...']] },
        { type:'dich', title:'Dịch văn hóa', content:'Understanding other cultures promotes global peace', visual:'emoji:🕊️🌍', qs:[['Nghĩa tiếng Việt?','Hiểu biết các nền văn hóa khác thúc đẩy hòa bình toàn cầu']] }
      ]
    },
    {
      id: 'b2_7', title: 'Sức khỏe tinh thần', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về mental health', content:'Mental health is as important as physical health. Stress, anxiety, and depression affect millions of people worldwide.', visual:'emoji:🧠💚', qs:[['Sức khỏe tinh thần quan trọng thế nào?','as important as physical'],['Vấn đề gì phổ biến?','stress, anxiety, depression']] },
        { type:'noi', title:'Thảo luận sức khỏe tinh thần', content:'Nói 3 cách giảm căng thẳng', visual:'emoji:🧘🌱', qs:[['Nói 3 cách','Meditate / Exercise / Talk to friends']] },
        { type:'doc', title:'Đọc về thiền', content:'Meditation helps reduce stress and improve focus. Just 10 minutes a day can make a significant difference in mental well-being.', visual:'emoji:🧘‍♂️✨', qs:[['Thiền giúp gì?','reduce stress, improve focus'],['Bao lâu/ngày?','10 minutes']] },
        { type:'viet', title:'Viết về sức khỏe tinh thần', content:'Viết 5 câu về cách chăm sóc sức khỏe tinh thần', visual:'emoji:✏️🧠', qs:[['Viết 5 câu','To take care of mental health, ...']] },
        { type:'dich', title:'Dịch sức khỏe tinh thần', content:'It is okay to ask for help when you feel overwhelmed', visual:'emoji:🙏💚', qs:[['Nghĩa tiếng Việt?','Không sao khi cầu cứu khi bạn cảm thấy quá tải']] }
      ]
    },
    {
      id: 'b2_8', title: 'Nghệ thuật & Văn học', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về nghệ thuật', content:'Art has the power to express emotions that words cannot capture. It reflects the culture and values of a society.', visual:'emoji:🎨🖼️', qs:[['Nghệ thuật có sức mạnh gì?','express emotions'],['Phản ánh gì?','culture and values']] },
        { type:'noi', title:'Thảo luận nghệ thuật', content:'Nói về 1 tác phẩm nghệ thuật bạn thích', visual:'emoji:🗣️🎨', qs:[['Nói về tác phẩm','My favorite artwork is ...']] },
        { type:'doc', title:'Đọc về văn học', content:'Classic literature provides insights into human nature. Reading novels improves empathy and critical thinking skills.', visual:'emoji:📖🧠', qs:[['Văn học cổ điển cung cấp gì?','insights into human nature'],['Đọc tiểu thuyết cải thiện gì?','empathy, critical thinking']] },
        { type:'viet', title:'Viết về sách', content:'Viết 5 câu về cuốn sách bạn yêu thích', visual:'emoji:✏️📚', qs:[['Viết 5 câu','My favorite book is ... because ...']] },
        { type:'dich', title:'Dịch nghệ thuật', content:'Music is the universal language of mankind', visual:'emoji:🎵🌍', qs:[['Nghĩa tiếng Việt?','Âm nhạc là ngôn ngữ chung của nhân loại']] }
      ]
    },
    {
      id: 'b2_9', title: 'Du lịch bền vững', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về du lịch xanh', content:'Sustainable tourism aims to minimize environmental impact while supporting local communities. It encourages responsible travel.', visual:'emoji:🌱✈️', qs:[['Du lịch bền vững nhắm gì?','minimize impact, support locals'],['Khuyến khích gì?','responsible travel']] },
        { type:'noi', title:'Thảo luận du lịch xanh', content:'Nói 3 cách du lịch thân thiện môi trường', visual:'emoji:🗣️🌱', qs:[['Nói 3 cách','Avoid plastic / Use public transport / Support local business']] },
        { type:'doc', title:'Đọc về eco-tourism', content:'Eco-tourism destinations like Costa Rica attract travelers who want to explore nature without causing harm to the environment.', visual:'emoji:🌴🐒', qs:[['Eco-tourism thu hút ai?','travelers who care about environment'],['Ví dụ điểm đến?','Costa Rica']] },
        { type:'viet', title:'Viết về du lịch', content:'Viết 5 câu về kế hoạch du lịch bền vững', visual:'emoji:✏️🌱', qs:[['Viết 5 câu','For sustainable travel, I will ...']] },
        { type:'dich', title:'Dịch du lịch', content:'Travel responsibly to preserve destinations for future generations', visual:'emoji:🌍💚', qs:[['Nghĩa tiếng Việt?','Du lịch có trách nhiệm để bảo tồn điểm đến cho thế hệ tương lai']] }
      ]
    },
    {
      id: 'b2_10', title: 'An ninh mạng', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về cybersecurity', content:'Cyber attacks are becoming more sophisticated. Companies must invest in security to protect sensitive data.', visual:'emoji:🔒💻', qs:[['Tấn công mạng thế nào?','more sophisticated'],['Công ty phải làm gì?','invest in security']] },
        { type:'noi', title:'Thảo luận an ninh', content:'Nói 3 cách bảo vệ dữ liệu cá nhân', visual:'emoji:🗣️🔐', qs:[['Nói 3 cách','Strong passwords / 2FA / Don\'t share personal info']] },
        { type:'doc', title:'Đọc về phishing', content:'Phishing emails pretend to be from trusted sources. Never click links or share passwords through email.', visual:'emoji:📧🎣', qs:[['Phishing là gì?','fake emails from trusted sources'],['Không nên làm gì?','click links, share passwords']] },
        { type:'viet', title:'Viết về bảo mật', content:'Viết 5 câu về tầm quan trọng của bảo mật trực tuyến', visual:'emoji:✏️🔒', qs:[['Viết 5 câu','Online security is important because ...']] },
        { type:'dich', title:'Dịch an ninh mạng', content:'Always verify before trusting unknown sources', visual:'emoji:🔍✅', qs:[['Nghĩa tiếng Việt?','Luôn xác minh trước khi tin tưởng nguồn không rõ']] }
      ]
    },
    {
      id: 'b2_11', title: 'Thị trường lao động', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về thị trường lao động', content:'The job market is becoming more competitive. Employers look for candidates with both technical skills and soft skills like communication.', visual:'emoji:💼📊', qs:[['Thị trường việc làm thế nào?','more competitive'],['Nhà tuyển dụng tìm gì?','technical + soft skills']] },
        { type:'noi', title:'Thảo luận nghề nghiệp', content:'Nói về xu hướng nghề nghiệp tương lai', visual:'emoji:🗣️📈', qs:[['Nói 2 xu hướng','AI, remote work, green jobs']] },
        { type:'doc', title:'Đọc về remote work', content:'Remote work has become common since the pandemic. It offers flexibility but can blur the line between work and personal life.', visual:'emoji:🏠💻', qs:[['Làm remote phổ biến từ khi nào?','pandemic'],['Nhược điểm?','blur work-life balance']] },
        { type:'viet', title:'Viết về nghề nghiệp', content:'Viết 5 câu về công việc mơ ước', visual:'emoji:✏️💼', qs:[['Viết 5 câu','My dream job is ... because ...']] },
        { type:'dich', title:'Dịch lao động', content:'Adaptability is essential in today\'s fast-changing world', visual:'emoji:🔄💪', qs:[['Nghĩa tiếng Việt?','Khả năng thích ứng rất cần thiết trong thế giới thay đổi nhanh ngày nay']] }
      ]
    },
    {
      id: 'b2_12', title: 'Khoa học & Nghiên cứu', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về khoa học', content:'Scientific research requires rigorous methodology, peer review, and reproducibility. These ensure the validity of results.', visual:'emoji:🔬📊', qs:[['Nghiên cứu cần gì?','methodology, peer review, reproducibility'],['Đảm bảo gì?','validity of results']] },
        { type:'noi', title:'Thảo luận khoa học', content:'Nói về 1 phát minh khoa học quan trọng', visual:'emoji:🗣️🔬', qs:[['Nói về phát minh','One important invention is ...']] },
        { type:'doc', title:'Đọc về vaccine', content:'Vaccines have saved millions of lives. They work by training the immune system to fight specific diseases.', visual:'emoji:💉🛡️', qs:[['Vaccine làm gì?','train immune system'],['Cứu bao nhiêu người?','millions']] },
        { type:'viet', title:'Viết về khoa học', content:'Viết 5 câu về vai trò của khoa học trong cuộc sống', visual:'emoji:✏️🔬', qs:[['Viết 5 câu','Science plays a vital role ...']] },
        { type:'dich', title:'Dịch khoa học', content:'Scientific breakthroughs have transformed our daily lives', visual:'emoji:🔬✨', qs:[['Nghĩa tiếng Việt?','Những đột phá khoa học đã biến đổi cuộc sống hàng ngày của chúng ta']] }
      ]
    },
    {
      id: 'b2_13', title: 'Giao tiếp thuyết phục', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe thuyết trình', content:'A compelling presentation combines clear structure, strong evidence, and effective delivery. Practice is crucial for success.', visual:'emoji:🎤📊', qs:[['Thuyết trình tốt cần gì?','structure, evidence, delivery'],['Điều gì quan trọng?','practice']] },
        { type:'noi', title:'Thực hành thuyết trình', content:'Trình bày quan điểm về việc học online trong 1 phút', visual:'emoji:🗣️🎤', qs:[['Trình bày','In my opinion ... First ... Second ...']] },
        { type:'doc', title:'Đọc về negotiation', content:'Successful negotiation requires understanding both sides, finding common ground, and being willing to compromise.', visual:'emoji:🤝⚖️', qs:[['Đàm phán cần gì?','understand both sides'],['Cần sẵn sàng làm gì?','compromise']] },
        { type:'viet', title:'Viết bài thuyết phục', content:'Viết 5 câu thuyết phục mọi người đọc sách', visual:'emoji:✏️📚', qs:[['Viết 5 câu','Reading is beneficial because ...']] },
        { type:'dich', title:'Dịch thuyết phục', content:'The art of persuasion lies in understanding your audience', visual:'emoji:🎯🗣️', qs:[['Nghĩa tiếng Việt?','Nghệ thuật thuyết phục nằm ở việc hiểu khán giả của bạn']] }
      ]
    },
    {
      id: 'b2_14', title: 'Tài chính cá nhân', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về tài chính', content:'Managing personal finances involves budgeting, saving, and investing. Financial literacy is essential for long-term security.', visual:'emoji:💰📊', qs:[['Quản lý tài chính gồm gì?','budgeting, saving, investing'],['Tại sao cần?','long-term security']] },
        { type:'noi', title:'Thảo luận tài chính', content:'Nói 3 cách tiết kiệm tiền', visual:'emoji:🗣️💰', qs:[['Nói 3 cách','Budget / Cook at home / Avoid impulse buying']] },
        { type:'doc', title:'Đọc về đầu tư', content:'Compound interest can significantly grow your savings over time. Starting early is more important than investing large amounts.', visual:'emoji:📈💵', qs:[['Compound interest làm gì?','grow savings'],['Điều gì quan trọng hơn?','starting early']] },
        { type:'viet', title:'Viết về tài chính', content:'Viết 5 câu về kế hoạch tài chính cá nhân', visual:'emoji:✏️💰', qs:[['Viết 5 câu','My financial plan is to ...']] },
        { type:'dich', title:'Dịch tài chính', content:'Investing in yourself is the best investment you can make', visual:'emoji:💪💎', qs:[['Nghĩa tiếng Việt?','Đầu tư vào bản thân là khoản đầu tư tốt nhất bạn có thể thực hiện']] }
      ]
    },
    {
      id: 'b2_15', title: 'Tương lai & Đổi mới', level: 'B2',
      skills: [
        { type:'nghe', title:'Nghe về tương lai', content:'By 2050, we may live in a world with self-driving cars, smart cities, and AI assistants everywhere. Change is inevitable.', visual:'emoji:🚗🏙️🤖', qs:[['Tương lai có gì?','self-driving cars, smart cities, AI'],['Điều gì chắc chắn?','change is inevitable']] },
        { type:'noi', title:'Dự đoán tương lai', content:'Dự đoán 3 thay đổi lớn trong 20 năm tới', visual:'emoji:🔮🌍', qs:[['Nói 3 dự đoán','I think ... will ...']] },
        { type:'doc', title:'Đọc về tương lai', content:'The pace of technological change is accelerating. Lifelong learning will become essential to remain relevant in the workforce.', visual:'emoji:⚡📚', qs:[['Thay đổi công nghệ thế nào?','accelerating'],['Học suốt đời trở thành gì?','essential']] },
        { type:'viet', title:'Viết về tương lai', content:'Viết 5 câu về thế giới bạn muốn sống vào năm 2050', visual:'emoji:✏️🌍', qs:[['Viết 5 câu','In 2050, I hope ...']] },
        { type:'dich', title:'Dịch tương lai', content:'The future belongs to those who prepare for it today', visual:'emoji:🌟🔮', qs:[['Nghĩa tiếng Việt?','Tương lai thuộc về những ai chuẩn bị cho nó ngay hôm nay']] }
      ]
    }
  ]
};
