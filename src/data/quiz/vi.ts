import type { QuizQuestion } from '../countries';

const CONTINENT_VI: Record<string, string> = {
  Europe: 'Châu Âu',
  Asia: 'Châu Á',
  Africa: 'Châu Phi',
  'North America': 'Bắc Mỹ',
  'South America': 'Nam Mỹ',
  Oceania: 'Châu Đại Dương',
};

export const QUIZ_QUESTIONS_VI: QuizQuestion[] = [
  {
    id: 'continent', stage: 1, multiSelect: true, stageName: 'Vị trí & sự phù hợp thực tế', question: 'Bạn có thể cân nhắc những châu lục nào?',
    subtitle: 'Chọn bất kỳ châu lục nào bạn sẵn sàng cân nhắc. Để trống hết nếu muốn tính cả mọi khu vực.', category: 'openness',
    options: [
      { label: 'Bất cứ đâu', desc: 'Giữ lại mọi khu vực trong kết quả.', value: 'all', icon: 'fa-solid fa-earth-americas', isNoPreference: true },
      ...['Europe','Asia','Africa','North America','South America','Oceania'].map((region, i) => ({ label: CONTINENT_VI[region], desc: `Tính cả các điểm đến ở ${CONTINENT_VI[region]}.`, value: region, icon: ['fa-solid fa-landmark','fa-solid fa-torii-gate','fa-solid fa-mountain-sun','fa-solid fa-city','fa-solid fa-leaf','fa-solid fa-water'][i] }))
    ]
  },
  {
    id: 'timezoneOverlap', stage: 1, multiSelect: true, stageName: 'Vị trí & sự phù hợp thực tế', question: 'Khách hàng hoặc cộng sự của bạn ở đâu?',
    subtitle: 'Bộ lọc múi giờ khá rộng; một quốc gia có thể trải trên nhiều múi giờ.', category: 'openness',
    options: [
      { label: 'Không ràng buộc múi giờ', desc: 'Giữ lại tất cả các điểm đến.', value: 'all', icon: 'fa-solid fa-clock', isNoPreference: true },
      { label: 'Châu Mỹ', desc: 'Ưu tiên khung giờ trùng với châu Mỹ.', value: 'Americas', icon: 'fa-solid fa-clock' },
      { label: 'Châu Âu hoặc châu Phi', desc: 'Ưu tiên khung giờ trùng với châu Âu hoặc châu Phi.', value: 'Europe/Africa', icon: 'fa-solid fa-clock' },
      { label: 'Châu Á hoặc châu Đại Dương', desc: 'Ưu tiên khung giờ trùng với châu Á hoặc châu Đại Dương.', value: 'Asia/Oceania', icon: 'fa-solid fa-clock' }
    ]
  },
  {
    id: 'healthcarePreference', stage: 1, multiSelect: true, stageName: 'Vị trí & sự phù hợp thực tế', question: 'Chế độ y tế thế nào hợp với bạn?',
    subtitle: 'Chỉ xét ở cấp độ quốc gia; phạm vi bảo hiểm và chi phí tùy thuộc điều kiện tham gia và nơi bạn sinh sống.', category: 'openness',
    options: [
      { label: 'Y tế công hoặc bảo hiểm toàn dân', desc: 'Ưu tiên nơi có bảo hiểm công phủ rộng.', value: 'public', icon: 'fa-solid fa-hospital' },
      { label: 'Phòng khám tư giá phải chăng', desc: 'Tôi sẵn sàng trả trực tiếp cho việc khám chữa bệnh.', value: 'affordable-private', icon: 'fa-solid fa-stethoscope' },
      { label: 'Tôi có thể dự trù tiền bảo hiểm tư nhân', desc: 'Mua bảo hiểm tư nhân là chấp nhận được.', value: 'private-required', icon: 'fa-solid fa-shield-heart' },
      { label: 'Không có ưu tiên', desc: 'Không chấm điểm mức phù hợp về y tế.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'taxPreference', stage: 1, multiSelect: true, stageName: 'Vị trí & sự phù hợp thực tế', question: 'Bạn nhìn nhận thuế và dịch vụ công thế nào?',
    subtitle: 'Thuế phụ thuộc vào tình trạng cư trú, nguồn thu nhập và hoàn cảnh cá nhân.', category: 'openness',
    options: [
      { label: 'Thuế cao đổi lấy dịch vụ công rộng', desc: 'Tôi coi trọng gói dịch vụ công.', value: 'higher-services', icon: 'fa-solid fa-building-columns' },
      { label: 'Thuế thấp hoặc thuế theo lãnh thổ', desc: 'Tôi ưu tiên sự linh hoạt về tài chính.', value: 'lower-territorial', icon: 'fa-solid fa-coins' },
      { label: 'Không có ưu tiên', desc: 'Không chấm điểm mức phù hợp về thuế.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'environmentPreference', stage: 1, multiSelect: true, stageName: 'Vị trí & sự phù hợp thực tế', question: 'Bạn chấp nhận biến động về môi trường đến mức nào?',
    subtitle: 'Chất lượng nước, không khí và thiên tai khác nhau theo vùng và theo mùa.', category: 'openness',
    options: [
      { label: 'Ưu tiên nơi ít bị ảnh hưởng', desc: 'Tôi thích những nơi ít gặp các vấn đề môi trường thường thấy.', value: 'lower', icon: 'fa-solid fa-leaf' },
      { label: 'Tôi có thể thích nghi với vấn đề theo vùng hoặc mùa', desc: 'Tôi không ngại tìm hiểu điều kiện tại địa phương.', value: 'flexible', icon: 'fa-solid fa-cloud-sun' },
      { label: 'Không có ưu tiên', desc: 'Không chấm điểm mức phù hợp về môi trường.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: "visaPath", stage: 1, multiSelect: true, stageName: "Yếu tố thiết yếu & điều không thể thỏa hiệp",
    question: "Bạn thực sự có thể đi con đường định cư nào?",
    subtitle: "Đây chỉ là ước lượng mức phù hợp rộng; điều kiện tham gia tùy thuộc hộ chiếu, tuổi, thu nhập và tình hình việc làm của bạn.", category: "career",
    options: [
      { label: "Làm từ xa / digital nomad", desc: "Tôi dự định tiếp tục làm việc từ xa.", value: "remote", icon: "fa-solid fa-laptop" },
      { label: "Working holiday, du học hoặc visa trao đổi thanh niên", desc: "Tôi có thể đủ điều kiện cho lộ trình làm việc hoặc học tập tạm thời.", value: "mobility", icon: "fa-solid fa-plane" },
      { label: "Việc làm tại chỗ có nhà tuyển dụng bảo lãnh", desc: "Tôi dự định tìm việc làm hợp điều kiện tại nước sở tại.", value: "sponsored", icon: "fa-solid fa-briefcase" },
      { label: "Quốc tịch / thường trú nhân", desc: "Tôi đã có quyền sinh sống ở đó; mục này không được chấm điểm.", value: "residency", icon: "fa-solid fa-id-card" },
      { label: "Chưa chắc / không có ưu tiên", desc: "Giữ thông tin này để tham khảo, không dùng làm bộ lọc.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "languageComfort", stage: 1, stageName: "Yếu tố thiết yếu & điều không thể thỏa hiệp",
    question: "Bạn chịu được rào cản ngôn ngữ ở mức nào?",
    subtitle: "Nghĩ đến khám bệnh, ngân hàng, thuê nhà và các việc vặt hằng ngày.", category: "openness",
    options: [
      { label: "Tôi cần dùng tiếng Anh ngay từ ngày đầu", desc: "Tiếng Anh phải xử lý được phần lớn việc hằng ngày.", value: "english", icon: "fa-solid fa-language" },
      { label: "Tôi hào hứng học ngôn ngữ bản địa", desc: "Tôi có thể xoay xở nhờ hỗ trợ dịch thuật trong lúc học.", value: "learn", icon: "fa-solid fa-book-open" },
      { label: "Không có ưu tiên", desc: "Ngôn ngữ không nên ảnh hưởng đến kết quả của tôi.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "budget",
    multiSelect: true,
    stage: 1,
    stageName: "Yếu tố thiết yếu & điều không thể thỏa hiệp",
    question: "Trần chi tiêu hằng tháng của bạn là bao nhiêu?",
    subtitle: "Gồm tiền thuê căn hộ một phòng ngủ tiện nghi, ăn ngoài hằng ngày và chi phí đi lại.",
    category: "budget",
    options: [
      { label: "Tiết kiệm & chi phí thấp (<1.500 USD/tháng)", desc: "Ăn ngoài mỗi ngày, ở căn hộ hiện đại, tối ưu từng đồng tiêu.", value: "lean", icon: "fa-solid fa-wallet" },
      { label: "Dư dả tầm trung (1.500 – 2.800 USD/tháng)", desc: "Mức sống ổn ở châu Âu hoặc châu Á, y tế chất lượng, thoải mái ăn uống.", value: "moderate", icon: "fa-solid fa-scale-balanced" },
      { label: "Cao cấp & thu nhập cao (từ 2.800 USD/tháng trở lên)", desc: "Hạ tầng hoàn hảo, dịch vụ công đẳng cấp thế giới, mức lương top.", value: "premium", icon: "fa-solid fa-landmark" },
      { label: "Linh hoạt / không có ưu tiên", desc: "Sẵn sàng ở bất cứ đâu hợp với lối sống, không phân biệt phân khúc giá.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "lgbtq",
    multiSelect: true,
    stage: 1,
    stageName: "Yếu tố thiết yếu & điều không thể thỏa hiệp",
    question: "Bạn yêu cầu quyền LGBTQ+ và sự an toàn xã hội ở mức nào?",
    subtitle: "Sự bảo vệ về pháp lý và mức độ chấp nhận trong xã hội khác nhau rất nhiều giữa các nước.",
    category: "lgbtq",
    options: [
      { label: "Phải được pháp luật bảo vệ & xã hội cởi mở", desc: "Hôn nhân bình đẳng đầy đủ, luật chống phân biệt đối xử, cộng đồng mở nở rộ.", value: "protected", icon: "fa-solid fa-rainbow" },
      { label: "Chấp nhận vừa phải / an toàn", desc: "Chấp nhận chung và an toàn về mặt xã hội, dù phong tục bảo thủ còn tồn tại.", value: "tolerant", icon: "fa-solid fa-shield-heart" },
      { label: "Không có ưu tiên / không phải mối quan tâm cá nhân", desc: "Không loại trừ quốc gia nào dựa trên chính sách LGBTQ+ hay chuẩn mực xã hội.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "transit",
    multiSelect: true,
    stage: 1,
    stageName: "Yếu tố thiết yếu & điều không thể thỏa hiệp",
    question: "Bạn muốn di chuyển hằng ngày thế nào?",
    subtitle: "Phong cách đi lại quyết định sức khỏe, sự tự do và mức độ căng thẳng hằng ngày.",
    category: "transit",
    options: [
      { label: "Thị trấn đi bộ & tàu điện đúng giờ", desc: "Tôi ghét lái xe. Tôi muốn tàu điện, xe điện và những đại lộ phố cổ đi bộ được.", value: "walkable-rail", icon: "fa-solid fa-train-subway" },
      { label: "Phố xá nhộn nhịp & taxi giá rẻ", desc: "Xe máy, xe ôm công nghệ và hơi thở sôi động của đường phố.", value: "motorbike-active", icon: "fa-solid fa-motorcycle" },
      { label: "Đường rộng thênh thang & tự do với ô tô", desc: "Các chuyến đi đường cảnh đẹp, bãi đỗ rộng rãi và tự do sau tay lái.", value: "car-dependent", icon: "fa-solid fa-car" },
      { label: "Linh hoạt / không có ưu tiên", desc: "Sẵn sàng thích nghi với phương tiện giao thông mà quốc gia đó có.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "convenience",
    stage: 2,
    stageName: "Nhịp sống hằng ngày",
    question: "Bạn kỳ vọng thế nào về dịch vụ và sự tiện lợi hằng ngày?",
    subtitle: "Chi phí lao động và chuẩn mực văn hóa quyết định bạn có thể thuê người lo việc nhà hay phải tự làm.",
    category: "convenience",
    options: [
      { label: "Tiện lợi tối đa & giao hàng 24/7", desc: "Giặt ủi giá rẻ, cửa hàng tiện lợi mở 24/7, app giao hàng tức thì.", value: "high-convenience", icon: "fa-solid fa-basket-shopping" },
      { label: "Tự tay lo liệu & văn hóa tự làm ở nơi lương cao", desc: "Tôi thích tự nấu, tự sửa đồ và tôn trọng giờ nghỉ của người làm dịch vụ.", value: "diy", icon: "fa-solid fa-screwdriver-wrench" },
      { label: "Không có ưu tiên / thấy ổn với cả hai", desc: "Tự làm thấy vui, nhưng cũng trân trọng sự tiện lợi khi có.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "weekend",
    multiSelect: true,
    stage: 2,
    stageName: "Nhịp sống hằng ngày",
    question: "Cuối tuần và buổi tối điển hình nên trông thế nào?",
    subtitle: "Từ chợ đêm rực rỡ mở 24/7 đến những ngày Chủ nhật tĩnh lặng.",
    category: "weekend",
    options: [
      { label: "Phố phường nhộn nhịp & Chủ nhật vẫn mở cửa", desc: "Chợ đêm, quảng trường rộn rã, văn hóa cà phê khuya, thương mại hoạt động cả bảy ngày.", value: "vibrant-24-7", icon: "fa-solid fa-martini-glass-citrus" },
      { label: "Chủ nhật dành để nghỉ & buổi tối êm đềm", desc: "Cửa hàng đóng cửa Chủ nhật, khu dân cư buổi tối yên ắng, tĩnh lặng tuyệt đối.", value: "quiet-sunday", icon: "fa-solid fa-bed" },
      { label: "Không có ưu tiên / thấy vui với cả hai không khí", desc: "Thích những đêm ra ngoài sôi động lẫn những buổi cuối tuần yên bình ở nhà.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "climate",
    multiSelect: true,
    stage: 2,
    stageName: "Nhịp sống hằng ngày",
    question: "Khí hậu nào khiến bạn thấy hứng khởi nhất?",
    subtitle: "Thời tiết quyết định tủ đồ, sức bền theo mùa và các hoạt động ngoài trời.",
    category: "climate",
    options: [
      { label: "Nắng ấm nhiệt đới & nhiều nắng", desc: "Không cần áo khoác mùa đông, gió nhiệt đới mát dịu và ăn uống ngoài trời quanh năm.", value: "tropical", icon: "fa-solid fa-sun" },
      { label: "Bốn mùa rõ rệt & mùa đông có tuyết", desc: "Hoa anh đào, lá thu vàng và những mùa đông ấm cúng bên lò sưởi.", value: "four-seasons", icon: "fa-solid fa-snowflake" },
      { label: "Không khí ven biển dễ chịu & ít ẩm", desc: "Gió biển ôn hòa, ít oi bức, ngày nào cũng dễ chịu quanh năm.", value: "mild-coastal", icon: "fa-solid fa-water" },
      { label: "Không có ưu tiên / thời tiết chẳng làm phiền tôi", desc: "Lạnh, nóng, ẩm hay mưa theo mùa đều ổn.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: 'temperature', stage: 2, multiSelect: true, stageName: 'Sở thích thời tiết', question: 'Khoảng nhiệt độ ban ngày nào thấy dễ chịu nhất?',
    subtitle: 'Chọn nhiệt độ ban ngày điển hình mà bạn thấy thoải mái nhất.', category: 'temperature',
    options: [
      { label: 'Rất lạnh · dưới 10°C (50°F)', desc: 'Tôi hợp với những mùa đông dài và lạnh.', value: 'very-cold', icon: 'fa-solid fa-temperature-low' },
      { label: 'Mát mẻ · 10–17°C (50–63°F)', desc: 'Tôi thích không khí se se lạnh và mùa hè dịu nhẹ.', value: 'cool', icon: 'fa-solid fa-cloud' },
      { label: 'Ôn hòa · 18–24°C (64–75°F)', desc: 'Thời tiết phần lớn dịu nhẹ hợp với tôi nhất.', value: 'temperate', icon: 'fa-solid fa-cloud-sun' },
      { label: 'Ấm áp · 25–30°C (77–86°F)', desc: 'Tôi thích ngày nắng ấm và mùa đông ôn hòa.', value: 'warm', icon: 'fa-solid fa-sun' },
      { label: 'Nóng · từ 31°C trở lên (88°F+)', desc: 'Cho tôi cái nắng và những mùa đông rất dịu.', value: 'hot', icon: 'fa-solid fa-temperature-high' },
      { label: 'Không có ưu tiên', desc: 'Nhiệt độ không nên ảnh hưởng đến kết quả của tôi.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'humidity', stage: 2, multiSelect: true, stageName: 'Sở thích thời tiết', question: 'Mức độ ẩm nào thấy dễ chịu?',
    subtitle: 'Mô hình ở cấp quốc gia khá rộng; ven biển, vùng núi và các mùa có thể khác hẳn nhau.', category: 'humidity',
    options: [
      { label: 'Không khí khô', desc: 'Tôi thích ít gặp thời tiết oi bức hay dính dáng.', value: 'dry', icon: 'fa-solid fa-wind' },
      { label: 'Cân bằng', desc: 'Có chút ẩm không sao, miễn là không kéo dài quanh năm.', value: 'moderate', icon: 'fa-solid fa-cloud-sun' },
      { label: 'Không khí ẩm', desc: 'Tôi thấy ổn với không khí ấm nhiều hơi nước.', value: 'humid', icon: 'fa-solid fa-droplet' },
      { label: 'Không có ưu tiên', desc: 'Độ ẩm không nên ảnh hưởng đến kết quả của tôi.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'rainfall', stage: 2, multiSelect: true, stageName: 'Sở thích thời tiết', question: 'Bạn thích mưa bao nhiêu?',
    subtitle: 'Cân nhắc tổng thể quanh năm, kể cả mùa mưa.', category: 'rainfall',
    options: [
      { label: 'Hầu như khô ráo', desc: 'Tôi thích những nơi ít mưa trong năm.', value: 'low', icon: 'fa-solid fa-sun' },
      { label: 'Mưa theo mùa', desc: 'Có mùa mưa cũng được, miễn là trong năm có những giai đoạn khô ráo.', value: 'seasonal', icon: 'fa-solid fa-cloud-sun-rain' },
      { label: 'Mưa thường xuyên', desc: 'Những cơn mưa đều đặn và thảm thực vật xanh tốt hợp với tôi.', value: 'frequent', icon: 'fa-solid fa-cloud-showers-heavy' },
      { label: 'Không có ưu tiên', desc: 'Lượng mưa không nên ảnh hưởng đến kết quả của tôi.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: 'snowfall', stage: 2, multiSelect: true, stageName: 'Sở thích thời tiết', question: 'Bạn nghĩ gì về tuyết?',
    subtitle: 'Đây là mô tả chung cho cả nước; độ cao và vùng miền ảnh hưởng rất nhiều.', category: 'snowfall',
    options: [
      { label: 'Tôi muốn tránh tuyết', desc: 'Tôi thích những nơi tuyết hiếm khi xuất hiện.', value: 'rare', icon: 'fa-solid fa-sun' },
      { label: 'Có chút tuyết cũng thú vị', desc: 'Một chút tuyết theo mùa là đáng mừng.', value: 'seasonal', icon: 'fa-solid fa-cloud-snow' },
      { label: 'Càng nhiều tuyết càng tốt', desc: 'Tôi thích những nơi có mùa đông tuyết phủ đều đặn.', value: 'frequent', icon: 'fa-solid fa-snowflake' },
      { label: 'Không có ưu tiên', desc: 'Tuyết không nên ảnh hưởng đến kết quả của tôi.', value: 'no-preference', icon: 'fa-solid fa-asterisk', isNoPreference: true }
    ]
  },
  {
    id: "religion",
    multiSelect: true,
    stage: 3,
    stageName: "Xã hội, tôn giáo & con người",
    question: "Tôn giáo nên hiện diện trong xã hội và đời sống hằng ngày thế nào?",
    subtitle: "Sự khoan dung với người không theo tôn giáo, không gian cầu nguyện công cộng và mức độ hiện diện của tôn giáo khác nhau rất nhiều.",
    category: "religion",
    options: [
      { label: "Xã hội thế tục & tôn giáo là việc riêng", desc: "Tôn giáo hoàn toàn thuộc đời sống cá nhân và tách khỏi pháp luật; chào đón người không theo tôn giáo và niềm tin đa dạng.", value: "secular", icon: "fa-solid fa-scale-balanced" },
      { label: "Di sản văn hóa & truyền thống dân gian", desc: "Chùa chiền, đền thờ hay nhà thờ cổ được gìn giữ như di sản, nhưng áp lực tôn giáo hằng ngày thấp.", value: "cultural-tradition", icon: "fa-solid fa-torii-gate" },
      { label: "Cộng đồng tâm linh sôi nổi & cơ sở đầy đủ", desc: "Đời sống tín ngưỡng phong phú, không gian cầu nguyện thuận tiện, thánh đường/mosque và cộng đồng tâm linh gắn kết.", value: "prominent", icon: "fa-solid fa-hands-praying" },
      { label: "Linh hoạt / không có ưu tiên", desc: "Thấy ổn trong xã hội thế tục, giàu truyền thống hay sùng đạo.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "openness",
    stage: 3,
    stageName: "Xã hội, tôn giáo & con người",
    question: "Môi trường của bạn nên quốc tế hóa hay đậm bản địa?",
    subtitle: "Khả năng dùng tiếng Anh, sự đa văn hóa và hạ tầng cho người nước ngoài, so với việc đắm mình vào văn hóa bản địa.",
    category: "openness",
    options: [
      { label: "Quốc tế & thân thiện với expat", desc: "Những trung tâm đa văn hóa, nơi tiếng Anh phổ biến và người nước ngoài dễ dàng hòa nhập vào các dịch vụ hằng ngày.", value: "cosmopolitan", icon: "fa-solid fa-globe" },
      { label: "Đậm bản địa & mang nét văn hóa riêng biệt", desc: "Văn hóa bản địa truyền thống, ít “bubble” expat; sinh hoạt hằng ngày đòi hỏi phải thích nghi với ngôn ngữ và phong tục địa phương.", value: "reserved", icon: "fa-solid fa-house-chimney" },
      { label: "Linh hoạt / không có ưu tiên", desc: "Thấy ổn ở cả nơi giao thoa quốc tế lẫn nơi đậm bản địa.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "socialFabric",
    multiSelect: true,
    stage: 3,
    stageName: "Xã hội, tôn giáo & con người",
    question: "Thế giới xã hội xung quanh bạn nên vận hành thế nào?",
    subtitle: "Sự ấm áp và không gian riêng luôn đi kèm đánh đổi: cộng đồng gắn kết sẽ có sự tò mò và chuyện phiếm; văn hóa tôn trọng riêng tư thì kết bạn chậm hơn. Chọn bất kỳ lựa chọn nào phù hợp.",
    category: "openness",
    options: [
      { label: "Cộng đồng cửa mở", desc: "Hàng xóm là bạn, lời mời đến nhanh, phố xá sôi động; đừng ngạc nhiên nếu ai cũng tò mò về đời tư của bạn.", value: "woven", icon: "fa-solid fa-door-open" },
      { label: "Ở giữa hai thái cực", desc: "Lịch sự trước tiên; tình bạn lớn dần qua những lần gặp gỡ chung như công việc, sở thích hay khu phố.", value: "balanced", icon: "fa-solid fa-scale-balanced" },
      { label: "Lịch sự, tôn trọng riêng tư", desc: "Cửa đóng được tôn trọng và ít ai hỏi chuyện riêng; tình bạn cần chủ động vun đắp.", value: "private", icon: "fa-solid fa-shield-halved" },
      { label: "Linh hoạt / không có ưu tiên", desc: "Thấy ổn với cả cộng đồng gắn kết lẫn lối sống tôn trọng riêng tư.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "density",
    stage: 3,
    stageName: "Xã hội, tôn giáo & con người",
    question: "Mật độ dân cư và nhịp sống thế nào hợp với bạn?",
    subtitle: "Từ những skyline tấp nập đến vùng quê thanh bình, rộng rãi.",
    category: "density",
    options: [
      { label: "Nhộn nhịp, đông đúc & tràn đầy năng lượng trẻ", desc: "Năng lượng cao, phố xá đông vui, dân số trẻ và nhịp sống thành thị nhanh.", value: "bustling", icon: "fa-solid fa-city" },
      { label: "Rộng rãi, thoáng đãng & thưa dân", desc: "Thiên nhiên bao la, khu dân cư yên tĩnh, hoàn toàn không có cảm giác chen chúc.", value: "spacious", icon: "fa-solid fa-mountain-sun" },
      { label: "Linh hoạt / không có ưu tiên", desc: "Thấy ổn ở cả thủ đô nhộn nhịp lẫn thung lũng yên tĩnh.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "career",
    multiSelect: true,
    stage: 4,
    stageName: "Công việc & ưu tiên cốt lõi",
    question: "Sự nghiệp hoặc hình thức làm việc chính của bạn là gì?",
    subtitle: "Luật visa, thế mạnh ngành nghề tại địa phương và khả năng tìm việc thực tế cho người nước ngoài.",
    category: "career",
    options: [
      { label: "Làm từ xa / digital nomad", desc: "Visa nomad thân thiện, nhiều quán cà phê/không gian làm việc chung, Wi-Fi nhanh ổn định, thuế địa phương thấp.", value: "nomad", icon: "fa-solid fa-laptop-code" },
      { label: "Trung tâm công ty lớn & công nghệ lương cao", desc: "Tập đoàn đa quốc gia, mức lương cao, thị trường việc làm văn phòng dùng tiếng Anh.", value: "corporate", icon: "fa-solid fa-briefcase" },
      { label: "Hòa nhập bản địa / linh hoạt", desc: "Sẵn sàng học ngôn ngữ bản địa để làm cho doanh nghiệp địa phương, dạy học hoặc khởi nghiệp.", value: "local", icon: "fa-solid fa-language" },
      { label: "Linh hoạt / không có ưu tiên", desc: "Không tìm việc làm tại địa phương hay định cư phụ thuộc vào việc làm.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  },
  {
    id: "priority",
    stage: 4,
    stageName: "Công việc & ưu tiên cốt lõi",
    question: "Ưu tiên số 1 không thể thỏa hiệp của bạn là gì? (Được nhân 2.5×)",
    subtitle: "Dealbreaker duy nhất biến một đất nước xa lạ thành mái nhà.",
    category: "priority",
    options: [
      { label: "An ninh công đẳng cấp thế giới (đi một mình lúc 3 giờ sáng vẫn an tâm)", desc: "Không sợ hãi khi đi một mình ban đêm, trật tự công cộng sạch sẽ và mức độ tin cậy cao.", value: "safety", icon: "fa-solid fa-shield-halved" },
      { label: "Ẩm thực đỉnh cao & chợ tươi ngon", desc: "Văn hóa ẩm thực đam mê, chợ tươi sạch sẽ và đồ ăn tuyệt vời ở mọi mức giá.", value: "foodie", icon: "fa-solid fa-utensils" },
      { label: "Cân bằng công việc–cuộc sống nghiêm ngặt & nghỉ phép hào phóng", desc: "Tan làm đúng 5 giờ chiều, 30 ngày nghỉ phép và hoàn toàn không có áp lực văn hóa “chạy đua”.", value: "wlb", icon: "fa-solid fa-spa" },
      { label: "Ngay cạnh núi non & thiên nhiên", desc: "Sống gần những cung đường trekking hùng vĩ, điểm lướt sóng hay núi rừng nguyên sinh.", value: "nature", icon: "fa-solid fa-tree" },
      { label: "Một cộng đồng ôm trọn lấy tôi", desc: "Hàng xóm là bạn bè, lời mời bất ngờ và cảm giác thuộc về ngay lập tức.", value: "warmth", icon: "fa-solid fa-people-roof" },
      { label: "Cuộc sống cân bằng / không mê thứ gì quá đà", desc: "Coi trọng sự cân bằng lành mạnh như nhau ở mọi mặt.", value: "no-preference", icon: "fa-solid fa-asterisk", isNoPreference: true }
    ]
  }
];
