import type { CountryDossierProse } from '../../countries';

// Vietnamese mirror of content/en/curated.ts — Phase 1F: all 22 Tier-1 flagship
// dossiers translated (docs/i18n-plan.md). Keys, order, and schema mirror the
// English file; downsides[0] === realityCheck is enforced by
// scripts/qc-profile-sections.mjs --locale vi.

export const VI_CURATED: Record<string, CountryDossierProse> = {
  "Portugal": {
    "tagline": "Ánh nắng chan hoà trên bờ biển Đại Tây Dương, tình người dịu dàng, và nhịp sống thư thái bậc nhất châu Âu.",
    "realityCheck": "Quy trình hành chính nhà nước (giấy tờ nhập cư AIMA, điện nước, ngân hàng) chậm đến mức nhức nhối, và các căn hộ cũ phần lớn không có lò sưởi trung tâm nên mùa đông ẩm rất khó chịu.",
    "culture": "Hồn Bồ Đào Nha nằm trong 'saudade' — nỗi nhớ da diết mà chính người bản xứ cũng khó gọi tên — cùng di sản chài lưới ven biển và những góc cà phê ngoài trời thơm mùi pastéis de nata, ly bica nhỏ mà đậm. Cuộc sống chảy chậm và rất 'người': giờ nghỉ trưa được tôn trọng thật sự, không ai vội vàng chỉ để tỏ ra bận rộn. Đường lát đá calçada, gạch azulejo men xanh, và thói quen cuối tuần về quê thăm họ hàng giữ nhịp sống xưa vẫn đè lên bên cạnh nền kinh tế công nghệ và du lịch đang lớn dần.",
    "people": "Ai tới Bồ Đào Nha cũng thấy người bản xứ nói nhỏ nhẹ, khiêm tốn và hiếu khách đến bất ngờ. Trình độ tiếng Anh thuộc hàng cao nhất Nam Âu, và họ kiên nhẫn, ấm áp thật lòng với những vị khách biết tôn trọng. Câu chuyện nào cũng mở đầu bằng gia đình và bóng đá, mà một khi đã được mời ăn trưa chủ nhật, bàn ăn thường đầy người suốt mấy tiếng.",
    "costOfLiving": "So với Tây Âu thì chi phí sinh hoạt ở Bồ vừa phải, dù giá thuê nhà ở Lisbon và Porto đã tăng vọt. Các thị trấn ven biển nhỏ như Nazaré, Ericeira hay dải Silver Coast vẫn cực kỳ đáng tiền: một bữa hải sản tươi 10–14 USD, rượu vang địa phương dưới 4 USD.",
    "workday": "Sáng bắt đầu thong thả từ 9:00 đến 9:30; buổi chiều có nghỉ trưa 1–2 tiếng, thường ăn cùng đồng nghiệp ngoài quán. Văn hoá hối hả gồng gánh bị coi là khó chịu; người ta tin vào sự bền bỉ đều đặn hơn là chạy đua.",
    "evening": "Chiều xuống, dân bản xứ tụ ở các 'miradouro' — quảng trường ngắm cảnh — tay cầm bia lạnh xem hoàng hôn chìm xuống biển, rồi tiếp bằng cá mòi nướng, canh caldo verde và chuyện trò đến tận nửa đêm.",
    "upsides": [
      "Hơn 300 ngày nắng mỗi năm và bờ biển lướt sóng thuộc hàng tuyệt hảo.",
      "Luôn nằm trong nhóm 5 quốc gia an toàn nhất thế giới.",
      "Người dân ở đây nói tiếng Anh tốt và môi trường xã hội rất thân thiện với người nước ngoài."
    ],
    "downsides": [
      "Quy trình hành chính nhà nước (giấy tờ nhập cư AIMA, điện nước, ngân hàng) chậm đến mức nhức nhối, và các căn hộ cũ phần lớn không có lò sưởi trung tâm nên mùa đông ẩm rất khó chịu.",
      "Lương địa phương thấp so với giá nhà đang vọt lên ở trung tâm Lisbon.",
      "Vùng nội địa thường xuyên đối mặt với cháy rừng và thiếu nước vào mùa hè."
    ]
  },
  "Netherlands": {
    "tagline": "Bình đẳng, di chuyển bằng xe đạp, nói thẳng, và được thiết kế tinh xảo cho một cuộc sống cân bằng đáng sống.",
    "realityCheck": "Cả nước đang khát nhà trầm trọng nên việc tìm một chỗ thuê là cuộc chiến thật sự, cộng thêm mùa đông xám xịt và gió lộng không ngày nào dứt.",
    "culture": "Xe đạp được ưu tiên hơn ô tô trong mọi quyết định quy hoạch, và đó chỉ là phần nổi của một xã hội bình đẳng đến tận gốc: cấu trúc tổ chức phẳng, mọi việc xử bằng đồng thuận ('mô hình polder'), còn 'gezelligheid' — cái ấm cúng thân tình — là thước đo cho một buổi tối thành công. Dân chủ trực tiếp hiện diện trong từng chi tiết: dân được mời góp ý về quy hoạch phố phường, văn hoá tình nguyện rất mạnh, và ai cũng đạp xe băng qua gió mưa mà không than vãn.",
    "people": "Thẳng thắn, sòng phẳng và bình đẳng đến tận xương. Lời nói thẳng của người Hà Lan không phải vô duyên — với họ, không phí thời gian của ai mới là tôn trọng. Gần như ai cũng nói tiếng Anh lưu loát, nên vài tháng đầu cực dễ, nhưng cũng chính điều đó khiến bạn chậm học tiếng Hà Lan: đồng nghiệp chuyển sang tiếng Anh ngay khi bạn ngập ngừng.",
    "costOfLiving": "Ở Hà Lan, cái đắt nhất là tiền nhà vùng Randstad (Amsterdam, Utrecht, Rotterdam), nơi một phòng trọ nhỏ cũng ngất ngưởng. Bù lại bạn hầu như không cần ô tô, đi lại bằng xe đạp hay tàu gần như không tốn mấy, y tế công cộng chất lượng hàng đầu, và đồ tươi ở Albert Heijn vẫn giá phải chăng.",
    "workday": "Đây là chuẩn mực của cân bằng giữa công việc và cuộc sống. Hơn 50% dân số đi làm làm việc bán thời gian (32–36 giờ/tuần), và rời văn phòng đúng 5 giờ chiều là chuyện bình thường.",
    "evening": "Khi tan làm, phố đầy tiếng chuông xe đạp leng keng đổ về nhà. Buổi tối dành cho mâm 'borrel' — bia, bitterballen và phô mai — ở những quán cafe nâu cổ kính, picnic bên kênh đào mùa hè, hay một bữa cơm nhà ấm áp.",
    "upsides": [
      "Hạ tầng xe đạp và quy hoạch đô thị tốt nhất hành tinh.",
      "Đỉnh cao cân bằng công việc — cuộc sống, với giờ làm linh hoạt được luật bảo vệ.",
      "Gần như ai cũng giỏi tiếng Anh nên việc chuyển tới định cư cực mượt."
    ],
    "downsides": [
      "Cả nước đang khát nhà trầm trọng nên việc tìm một chỗ thuê là cuộc chiến thật sự, cộng thêm mùa đông xám xịt và gió lộng không ngày nào dứt.",
      "Bảo hiểm y tế bắt buộc tính riêng, cộng thêm một khoản cố định mỗi tháng.",
      "Sự thẳng thắn kiểu Hà Lan nghe rất gai với người mới, đặc biệt là góp ý ở chỗ làm."
    ]
  },
  "Norway": {
    "tagline": "Dãy fjord hùng vĩ, nắng nửa đêm, xã hội bình đẳng và tin cậy nhau cao, cùng đam mê ngoài trời triệt để.",
    "realityCheck": "Ăn ngoài và uống rượu đắt đến nghẹt thở, văn hoá tự lực cánh sinh gắt gao đến mức gần như không có dịch vụ rẻ tiền nào thuê được người, cùng những tháng mùa đông tối om và rét dưới 0°C.",
    "culture": "Phong cách sống xoay quanh 'friluftsliv' — sống ngoài trời — và 'kos', cái ấm cúng kiểu Bắc Âu. Thiên nhiên không phải điểm hẹn cuối tuần mà là một quyền thiêng liêng, được 'allemannsretten' bảo hộ: quyền tự do đi khắp mọi miền hoang dã. Cuối tuần lên cabin, ván trượt tuyết băng đồng dựng sẵn ở cửa, và một xã hội gần như không có thứ bậc thấy được — tất cả khiến văn hoá Na Uy bớt cứng nhắc so với tiếng tăm.",
    "people": "Dân Na Uy bình đẳng, khiêm tốn — sinh ra từ luật Jante nổi tiếng — tôn trọng không gian riêng tư và mê thể thao ngoài trời như một phần cuộc sống. Chuyện kết thân không tự nảy mà cần điểm neo: một câu lạc bộ thể thao hay nhóm sở thích nào đó. Nhưng một khi đã là bạn thì tình bạn ấy là trọn đời.",
    "costOfLiving": "Giá sinh hoạt ở Na Uy thuộc nhóm đắt nhất thế giới: đi ăn ngoài, gọi rượu, hay đơn giản là đầy túi rau củ quả đều giá gắt. Nhưng với người bản xứ, lương cao, đại học miễn học phí và an sinh xã hội phủ kín cân bằng lại phần lớn chi phí đó, nên đời sống thường nhật vẫn ổn. Du khách ngắn hạn thì tự chịu phần chênh ấy.",
    "workday": "Mỗi tuần làm đúng 37,5 giờ, giờ giấc được giữ nghiêm ngặt. Ai cũng rời văn phòng trước 4 giờ chiều để về với gia đình, đi leo núi, trượt tuyết hay đơn giản là ở bên nhau. Niềm tin giữa sếp và nhân viên gần như tuyệt đối.",
    "evening": "Hè thì mặt trời gần như không lặn, người ta chèo kayak và tắm biển lúc 10 giờ đêm. Còn đông, buổi tối chuyển sang ấm cúng kiểu khác: lò củi, chăn len, bữa tối ánh nến và những đường trượt tuyết băng đồng thắp đèn.",
    "upsides": [
      "Fjord, thác nước và thiên nhiên hoang sơ tuyệt đẹp ngay ngoài cửa.",
      "Lưới an sinh xã hội, bình đẳng giới và niềm tin cộng đồng ở đỉnh cao.",
      "Tiếng Anh lưu loát gần như của bản xứ, ở khắp nơi."
    ],
    "downsides": [
      "Ăn ngoài và uống rượu đắt đến nghẹt thở, văn hoá tự lực cánh sinh gắt gao đến mức gần như không có dịch vụ rẻ tiền nào thuê được người, cùng những tháng mùa đông tối om và rét dưới 0°C.",
      "Thuế thu nhập và VAT cao, và cả tài sản cũng bị đánh thuế theo cách nhiều người mới đến không ngờ tới.",
      "Xã hội dè dặt dễ khiến người hướng ngoại thấy cô đơn trong thời gian đầu."
    ]
  },
  "Spain": {
    "tagline": "Plaza sôi động đến khuya, văn hoá tapas rộn ràng, hơi ấm Địa Trung Hải, và cuộc sống thật sự diễn ra ngoài trời.",
    "realityCheck": "Việc làm tại chỗ khan hiếm dai dẳng với tỉ lệ thất nghiệp trong nước vẫn cao, các đợt nắng nóng cực đoan hoành hành ở vùng nội địa mỗi mùa hè, và giấy tờ hành chính chậm thì nổi tiếng.",
    "culture": "Bàn ăn là sự kiện xã hội kéo dài hàng giờ, gia đình là trung tâm và cuộc sống diễn ra ngoài trời. Quảng trường là phòng khách của mỗi thị trấn. Bản sắc vùng miền vẫn rất mạnh: tiếng Catalan, tiếng Galicia và tiếng Basque song hành cùng tiếng Castilian, còn những lễ hội địa phương từ fallas đến ferias có thể đảo lộn cả lịch của một thị trấn.",
    "people": "Nhiệt tình, hướng ngoại và cởi mở. Đi chơi là chuyện cả nhiều thế hệ cùng tham gia, và cuộc sống xoay quanh bạn bè, đồ ăn, lễ hội. Kế hoạch hẹn hò thường lỏng lẻo và được xác nhận giờ chót, nên kiên nhẫn với sự xê dịch giờ giấc quan trọng hơn đòi hỏi đúng giờ.",
    "costOfLiving": "Đồ ăn tươi vùng miền tuyệt vời, rượu vang chỉ 3–6 USD và y tế giá rẻ, nên sinh hoạt hàng ngày dễ chịu hơn hẳn chuẩn Bắc Âu. Riêng tiền nhà là chuyện ngặt: Madrid, Barcelona và các thành phố ven biển tăng giá thuê nhanh nhất, trong khi các thị trấn nội địa và thủ phủ vùng nhỏ vẫn đáng tiền hơn hẳn.",
    "workday": "Truyền thống ở đây là chia ngày làm đôi với bữa trưa muộn (14:00–16:00), dù các văn phòng doanh nghiệp hiện đại đã chạy theo khung 9–6, kèm quyền ngắt kết nối ngoài giờ được luật bảo vệ.",
    "evening": "Đêm bắt đầu thật muộn — 21:30 hay 22:00 mới là giờ ăn tối chuẩn. Người ta tapear, tức vừa đi vừa nhắm tapas qua các con phố cổ sầm uất, rồi ăn kem và đi dạo — thứ gọi là 'paseo' — cho tới khuya.",
    "upsides": [
      "Nắng quanh năm và khí hậu Địa Trung Hải tuyệt vời.",
      "Y tế công chất lượng cao và những thành phố cổ an toàn, dễ đi bộ.",
      "Kho tàng văn hoá phong phú từ Andalusia đến xứ Basque."
    ],
    "downsides": [
      "Việc làm tại chỗ khan hiếm dai dẳng với tỉ lệ thất nghiệp trong nước vẫn cao, các đợt nắng nóng cực đoan hoành hành ở vùng nội địa mỗi mùa hè, và giấy tờ hành chính chậm thì nổi tiếng.",
      "Giá thuê ở Madrid, Barcelona và các thành phố ven biển tăng nhanh hơn hẳn mặt bằng lương địa phương.",
      "Tiếng nói vùng miền và chính trị bản sắc chi phối đời sống hằng ngày; vùng Catalonia hay Basque chạy một phần bằng ngôn ngữ riêng."
    ]
  },
  "Germany": {
    "tagline": "Chuẩn mực kỹ sư về hiệu quả, không gian xanh sống động, cân bằng công — sống được tôn như tín điều, và chiều dày lịch sử.",
    "realityCheck": "Chủ nhật cửa hàng đóng kín tuyệt đối (siêu thị cũng thế), thủ tục hành chính vẫn cày bằng giấy tờ vật lý (Anmeldung), và văn hoá tự làm mọi thứ khiến dịch vụ trong nhà cực đắt.",
    "culture": "Trật tự, đúng giờ và ý thức môi trường là ba chữ được đề cao nhất. Đời sống xã hội nở rộ ở vườn bia, công viên thành phố và các trung tâm văn hoá. Vereinsleben — mạng lưới câu lạc bộ dày đặc cho đủ mọi thứ, từ hợp xướng đến bóng đá — là cách nhiều người Đức dựng xây cộng đồng, và giờ yên tĩnh ngày chủ nhật vẫn chi phối nhịp tuần.",
    "people": "Lời nói của người Đức thẳng, trật tự và tôn trọng luật chung. Ban đầu có vẻ khép kín, nhưng một khi tin cậy đã có, tình bạn của họ chân thành và đáng dựa. Chuyện phiếm chỉ để phục vụ mục đích chứ không xu nịnh, và việc chỉ ra sai sót của người khác thường là ý giúp chứ không phải chê bai.",
    "costOfLiving": "Kể cả so với London hay Paris thì sinh hoạt ở Đức vẫn hợp lý: siêu thị Aldi, Lidl rẻ bất ngờ, phương tiện công được trợ giá mạnh và y tế bao phủ toàn diện. Nhưng giá thuê ở Berlin, Munich, Frankfurt đã nhảy vọt, và tiền đặt cọc cộng bếp lắp sẵn có thể tạo một khoản chi trước mắt không nhỏ.",
    "workday": "Công việc rất tập trung và hiệu quả: tuần làm 35–38 giờ được giữ đúng mực, cộng 30 ngày nghỉ phép có lương hào phóng mỗi năm.",
    "evening": "Hoàng hôn buông xuống là khu phố lặng đi; mùa hè người ta kéo ra vườn bia (Biergarten) ngồi tới tối muộn, còn cuối tuần thì đi tàu rời thành phố vào rừng.",
    "upsides": [
      "Tàu cao tốc và mạng lưới giao thông công cộng trải khắp châu Âu.",
      "Quyền lợi người lao động hào phóng và ranh giới công — tư được tôn trọng tuyệt đối.",
      "Đời sống nghệ thuật, âm nhạc và văn hoá club sôi động ở những thành phố như Berlin."
    ],
    "downsides": [
      "Chủ nhật cửa hàng đóng kín tuyệt đối (siêu thị cũng thế), thủ tục hành chính vẫn cày bằng giấy tờ vật lý (Anmeldung), và văn hoá tự làm mọi thứ khiến dịch vụ trong nhà cực đắt.",
      "Các khoản thuế và bảo hiểm xã hội rút một phần lớn lương gộp, và số lương ròng làm nhiều người mới đến ngạc nhiên.",
      "Muốn hoà nhập sâu về xã hội và sự nghiệp thì bắt buộc phải học tiếng Đức."
    ]
  },
  "Italy": {
    "tagline": "Nghệ thuật sống động từng góc phố, lòng sùng bái ẩm thực, những quảng trường lịch sử và dolce far niente — nghệ thuật nhàn rỗi muôn thuở.",
    "realityCheck": "Bộ máy hành chính rối rắm và chậm nổi tiếng, cơ hội thăng tiến hạn chế nếu không ở trong các trung tâm đa quốc gia, còn rào cản ngôn ngữ thì rõ nét ở ngoài vùng đô thị.",
    "culture": "Văn hoá nơi đây gắn chặt với lịch sử, sự đam mê và tình cảm gia đình. Đời thường xoay quanh chất lượng món ăn, chợ địa phương, vẻ đẹp kiến trúc và niềm vui tận hưởng khoảnh khắc. Ly espresso buổi sáng, bữa trưa Chủ nhật kéo dài và buổi đi dạo chiều (passeggiata) là những tục lệ xã hội thiêng liêng, và mỗi thị trấn đều canh giữ công thức riêng cùng thánh bảo hộ với cả sự nghiêm túc.",
    "people": "Người Ý ấm áp, sống cảm xúc và biểu cảm rõ trên mặt, đồng thời mang niềm tự hào sâu sắc về quê hương (campanilismo). Câu chuyện và tình thân dễ nảy nở bên ly cà phê hay ly vang. Buộc phải giữ phép tắc trong lần gặp đầu — xưng hô, chào hỏi, ăn mặc — nhưng khi đã thân rồi thì sự nồng nhiệt và cả đùa cợt đều đến rất tự nhiên.",
    "costOfLiving": "Chi phí sinh hoạt ở mức trung bình. Nguyên liệu tươi từ chợ, ly espresso ($1.20) và ăn tại quán địa phương rẻ bất ngờ nếu tránh những con hẻm du lịch. Milan và trung tâm Rome đắt nhất, còn miền Nam và các thị trấn trên đồi cho thuê nhà rẻ hơn nhưng việc làm lương tốt cũng ít theo.",
    "workday": "Buổi sáng bắt đầu bằng ly espresso nhanh gọn ở quán đầu phố. Ngày làm việc hòa quyện niềm tự hào nghề nghiệp với kết nối xã hội, kèm những giờ nghỉ trưa ăn uống đàng hoàng.",
    "evening": "Tối về là giờ aperitivo từ 18:30 với spritz và đồ nhắm, rồi cả phố đi dạo trên nền đá cuội (passeggiata) trước khi vào bữa tối lúc 20:30–21:30.",
    "upsides": [
      "Di sản văn hoá, bảo tàng và vẻ đẹp lịch sử mà khó nơi nào sánh được.",
      "Ẩm thực đạt chuẩn quốc tế với sự cuồng tín về nguyên liệu tươi.",
      "Cảnh quan đa dạng từ dãy Dolomites đến bờ biển Amalfi."
    ],
    "downsides": [
      "Bộ máy hành chính rối rắm và chậm nổi tiếng, cơ hội thăng tiến hạn chế nếu không ở trong các trung tâm đa quốc gia, còn rào cản ngôn ngữ thì rõ nét ở ngoài vùng đô thị.",
      "Thất nghiệp thanh niên vẫn cao, và hợp đồng dài hạn thì khó xin lắm.",
      "Giao thông công cộng ngoài các hành trình tàu chính thường thất thường."
    ]
  },
  "France": {
    "tagline": "Phong cách sống được trau chuốt thành nghệ thuật: di sản ẩm thực, quán cà phê văn chương, tuần làm 35 giờ và lòng sùng bái mãnh liệt dành cho nghệ thuật tận hưởng.",
    "realityCheck": "Muốn sinh sống và làm giấy tờ, tiếng Pháp phải thông thạo thật sự, còn các đợt đình công giao thông hay lao động tái diễn nhiều khi làm đảo lộn cả thói quen thường ngày.",
    "culture": "Nền văn hoá tôn vinh l’art de vivre — niềm vui của văn chương, rượu vang, tranh biện trí tuệ và ẩm thực. Người dân tự hào về lưới an sinh xã hội và khoản đầu tư cho văn hoá. Chợ, phiên đồ cổ brocante và bữa trưa Chủ nhật dài dằng neo cả tuần lễ, còn lịch học với kỳ nghỉ tháng Tám trứ danh vẫn quyết định nhịp sống của cả nước.",
    "people": "Cách giao tiếp nơi đây trang nhã và giàu chất trí thức. Những công thức lịch sự (nhất định phải chào 'Bonjour madame/monsieur') là chìa khoá xã hội không thể bỏ qua. Tình bạn đến chậm và có chọn lọc, nhưng một khi đã được chấp nhận, bạn sẽ thấy lòng hiếu khách rộng lượng và những cuộc tranh luận sôi nổi.",
    "costOfLiving": "Ngoài Paris, các thành phố vùng như Lyon, Bordeaux hay Montpellier có chi phí vừa phải, còn trung tâm thủ đô thì đắt đỏ kinh khủng. Giao thông công cộng xuất sắc và các sự kiện văn hoá được trợ giá. Đồ ăn và chi phí y tế rẻ hơn ở Anh hay Mỹ, nhưng hoá đơn nhà hàng và giá thuê nhà Paris thì trả phần bù cao ngất.",
    "workday": "Tuần làm việc 35 giờ được luật bảo vệ nghiêm ngặt, và hai tiếng nghỉ trưa với bữa ăn nóng là điều mọi người tôn trọng như một văn hoá.",
    "evening": "Mỗi tối, các bistro trên sân vườn đầy rượu vang và tháp charcuterie, người dân đi dạo dọc bờ sông, còn rạp hát lẫn rạp chiếu phim lúc nào cũng nhộn nhịp.",
    "upsides": [
      "Đồ ăn, rượu vang, bánh mì và phô mai thuộc hàng tuyệt hảo của thế giới.",
      "Đường sắt cao tốc TGV nối các thành phố nhanh và êm như đi dạo.",
      "Nghỉ phép hằng năm hào phóng (tối thiểu 5 tuần) cùng luật lao động bảo vệ người làm."
    ],
    "downsides": [
      "Muốn sinh sống và làm giấy tờ, tiếng Pháp phải thông thạo thật sự, còn các đợt đình công giao thông hay lao động tái diễn nhiều khi làm đảo lộn cả thói quen thường ngày.",
      "Nhà ở trung tâm Paris khan hiếm và đắt đỏ, nhiều hợp đồng thuê còn đòi người bảo lãnh quốc tịch Pháp.",
      "Hệ thống thuế phức tạp cùng núi giấy tờ hành chính khiến ai cũng phải còng lưng."
    ]
  },
  "United Kingdom": {
    "tagline": "Quán pub ấm cúng, đồng quê ngàn năm tuổi, chất dí dỏm sắc lẹm, và nhịp sống quốc tế nhộn nhịp của những đô thị toàn cầu.",
    "realityCheck": "Thời tiết xám xịt và âm u dai dẳng suốt thu đông, giá tàu hỏa lẫn nhà cửa cao vọt, còn hệ thống y tế công thì hàng chờ dài lê thê.",
    "culture": "Cuộc sống nơi đây là sự pha trộn đậm đặc giữa truyền thống hàng trăm năm và nghệ thuật, hài kịch, âm nhạc đương đại tầm cỡ thế giới. Quán pub địa phương là trái tim của đời sống cộng đồng. Giai cấp, giọng nói và vùng miền vẫn âm thầm định hình cơ hội, trong khi lịch trình dày đặc các lễ hội, bóng đá và phiên chợ vui làng giúp bản sắc địa phương luôn hiện diện.",
    "people": "Thái độ chung là lịch thiệp, hay tự trào và đầy chất hài. Xếp hàng trật tự và trò đấu khẩu qua lại là nền tảng văn hoá thường nhật. Sự dè dặt thực ra là một phép lịch sự: ý kiến mạnh thường được gói trong câu nói khiêm nhường, còn lời mời ra quán pub thường mới là khởi đầu thật của tình bạn.",
    "costOfLiving": "London và vùng Đông Nam đắt đỏ rõ rệt, nhưng Scotland, Wales hay Bắc nước Anh rẻ hơn hẳn một nhịp. Tiền nhà ngốn phần lớn thu nhập, giá vé tàu thuộc hàng đắt nhất châu Âu, còn đồ ăn và hoá đơn điện nước mấy năm gần đây tăng nhanh hơn cả mức lương.",
    "workday": "Giờ làm việc từ 9h đến 17h30, và chiều thứ Sáu tụ tập nhau ở pub là truyền thống bền bỉ trong đủ mọi ngành nghề.",
    "evening": "Buổi tối dành cho việc rủ nhau nhắm vài cốc bia, đêm cà ri ấm cúng, xem kịch West End hay đá bóng giao hữu khu phố.",
    "upsides": [
      "Khung cảnh văn hoá tầm cỡ thủ đô thế giới ở London, với các bảo tàng quốc gia miễn phí.",
      "Môi trường nói tiếng Anh khiến giao tiếp ngay ngày đầu tiên chẳng chút khó khăn.",
      "Các thị trấn đi bộ thuận tiện cùng những lối mòn nông thôn (public footpaths) đẹp như tranh."
    ],
    "downsides": [
      "Thời tiết xám xịt và âm u dai dẳng suốt thu đông, giá tàu hỏa lẫn nhà cửa cao vọt, còn hệ thống y tế công thì hàng chờ dài lê thê.",
      "Bất bình đẳng vùng miền rất rõ, cơ hội dồn về London và Đông Nam gần như tuyệt đối.",
      "Văn hoá rượu bia vẫn chi phối các buổi giao lưu sau giờ làm, đôi khi khiến người không uống thấy mình bị bỏ rơi."
    ]
  },
  "Switzerland": {
    "tagline": "Chính xác từng milimet giữa núi Alps, hồ nước trong như pha lê, trật tự công cộng sạch bong và sự phồn vinh bậc nhất châu Âu.",
    "realityCheck": "Chi phí sinh hoạt đắt nhuôi (bảo hiểm y tế tư nhân bắt buộc, bữa ăn bình dân cũng trên 30 USD), giờ nghỉ yên tĩnh (Ruhezeit) thi hành nghiêm, và ngày Chủ nhật cửa hàng đóng cửa toàn bộ.",
    "culture": "Xây trên nền tảng dân chủ trực tiếp, trung lập, sự tôn trọng công cộng kín đáo và nghề thủ công tỉ mỉ. Yên tĩnh, sạch sẽ và đúng giờ trị vì trên hết. Câu lạc bộ địa phương, phiên chợ theo mùa và quân đội dân binh giúp việc tham gia xã hội trở nên cụ thể, đến mức các thị trấn nhỏ cũng vận hành bằng tình nguyện viên và những cuộc bỏ phiếu liên tục.",
    "people": "Tính cách nơi đây trầm tĩnh, lịch sự và tôn trọng luật chơi chung. Tình bạn được đắp qua các hoạt động cùng nhau như leo núi hay trượt tuyết. Láng giềng thì lịch sự nhưng có chừng mực, và muốn từ người quen tiến lên bạn bè thật sự, cách chuẩn nhất là gia nhập một câu lạc bộ.",
    "costOfLiving": "Sống ở Thụy Sĩ tốn kém nhất châu Âu, đổi lại mức lương dẫn đầu thế giới, thuế thu nhập khá thấp và hạ tầng công cộng sạch không một vết. Bảo hiểm y tế là bắt buộc và mua tư nhân, còn tiền gửi trẻ em ở vài bang có khi còn cao hơn tiền thuê nhà.",
    "workday": "Làm việc 40–42 giờ mỗi tuần với sự đúng giờ tuyệt đối. Tàu đi làm trên tuyến SBB chạy chuẩn như đồng hồ Thụy Sĩ.",
    "evening": "Mùa hè thì bơi trên dòng sông trong vắt (như Aare ở Bern), tối tối ăn fondue, còn cuối tuần lại leo lên các cung đường núi Alps.",
    "upsides": [
      "Mức sống, an ninh công cộng và hạ tầng thuộc hàng số một châu Âu.",
      "Những đỉnh núi, hồ nước hùng vĩ cùng bầu không khí núi trong lành hiếm có.",
      "Mạng giao thông công cộng tin cậy, đúng giờ và sạch sẽ đến khó tin."
    ],
    "downsides": [
      "Chi phí sinh hoạt đắt nhuôi (bảo hiểm y tế tư nhân bắt buộc, bữa ăn bình dân cũng trên 30 USD), giờ nghỉ yên tĩnh (Ruhezeit) thi hành nghiêm, và ngày Chủ nhật cửa hàng đóng cửa toàn bộ.",
      "Tìm căn hộ thuê là cả một cuộc cạnh tranh, nhiều hợp đồng đòi người bảo lãnh người Thụy Sĩ cùng tiền đặt cọc.",
      "Không biết tiếng Đức hay tiếng Pháp thì khó lòng hoà nhập cho sâu."
    ]
  },
  "Greece": {
    "tagline": "Biển Aegean xanh ngọc lam, cội nguồn triết học ngàn năm, chế độ ăn Địa Trung Hải và bầu trời xanh không dứa.",
    "realityCheck": "Giấy tờ hành chính nhà nước chậm chạp và rắc rối, mùa hè nắng nóng gay gắt kèm cảnh chen chán khách du lịch vào cao điểm, còn mức lương nội địa thì khiêm tốn.",
    "culture": "Đời sống nơi đây đam mê, giàu chất triết lý và cực kỳ xã giao. Mọi thứ diễn ra ngoài trời — bên bàn taverna, trên triền biển, ở quảng trường đảo. Lễ Phục sinh Chính thống, ngày tên thánh và những đêm hè dài dằng định hình cả lịch năm, còn lòng hiếu khách được xem là danh dự chứ không phải một loại dịch vụ.",
    "people": "Sự hiếu khách (Philoxenia) ở đây thật lòng đến mức khách đến được tiếp như người nhà. Trò chuyện sôi nổi và đầy cảm xúc, câu hỏi cá nhân đến sớm và không hề xin lỗi, còn từ chối món ăn hay ly cà phê thường bị hiểu là một lời khước từ nhẹ nhàng mà rõ ràng.",
    "costOfLiving": "Đây là một trong những nước Tây/Nam châu Âu dễ sống nhất. Ô live tươi, phô mai feta, hải sản và giá thuê nhà trên đảo đều hời. Riêng Athens tiền nhà đã leo thang nhanh, còn các đảo theo mùa thì đung đưa giữa mùa đông rẻ mạt và mùa hè đắt đỏ đông nghịt.",
    "workday": "Một ngày bắt đầu nhàn nhã, nghỉ trưa tránh cái nắng hè, rồi làm việc hiệu quả vào buổi chiều.",
    "evening": "Bữa tối muộn lúc 21:30 dưới giàn hoa giấy, nhắm bạch tuộc nướng, tzatziki và vang địa phương cùng tiếng rembetiko sống.",
    "upsides": [
      "Hàng nghìn hòn đảo tuyệt đẹp nổi trên vùng biển Aegean và Ionian trong xanh.",
      "Chi phí sinh hoạt thấp cộng với di sản lịch sử đồ sộ.",
      "Khí hậu Địa Trung Hải ấm áp nắng nhuôm trên 250 ngày mỗi năm."
    ],
    "downsides": [
      "Giấy tờ hành chính nhà nước chậm chạp và rắc rối, mùa hè nắng nóng gay gắt kèm cảnh chen chán khách du lịch vào cao điểm, còn mức lương nội địa thì khiêm tốn.",
      "Đời sống đảo theo mùa rõ rệt, nhiều cửa hàng và tuyến phà ngừng máy hoặc đóng cửa khi đông về.",
      "Cháy rừng và thiếu nước đã trở thành rủi ro lặp lại mỗi mùa hè."
    ]
  },
  "Japan": {
    "tagline": "Hiệu quả đến mức máy móc, lễ phép một cách sâu sắc, và ấm áp kiểu trầm lặng — kèm một bộ quy tắc xã hội không bao giờ được nói thành lời.",
    "realityCheck": "Cục hành chính cứng nhắc (con dấu hanko và mọi giấy tờ phải xử lý trực tiếp), rào cản ngôn ngữ dốc ở ngoài các trung tâm lớn, cùng những phép tắc xã hội vô hình nhưng khắt khe.",
    "culture": "Trụ cột là 'wa' — sự hòa hợp xã hội — cùng sự tôn trọng sâu sắc dành cho nghề thủ công, cho từng mùa trong năm và cho người xung quanh. Các truyền thống như trà đạo hay lễ hội matsuri khu phố vẫn sống khỏe, nhưng đời thường ở đây hiện đại, đúng giờ đến từng phút, và dựa trên một nguyên tắc ngầm: đừng làm phiền người khác.",
    "people": "Lịch sự, kín đáo, và giúp đỡ tận tình đến bất ngờ khi được hỏi, nhưng để kết thân sâu sắc với người bản địa, một người nước ngoài cần cả kiên nhẫn lẫn công sức học tiếng. Người Nhật coi trọng sự khiêm tốn, đúng giờ, và 'kuuki wo yomu' — biết đọc không khí trước khi mở miệng.",
    "costOfLiving": "Rẻ bất ngờ nếu bạn tránh các phường trung tâm xa xỉ của Tokyo. Một bát ramen ngon hết $6–$8, thuê căn 1K hiện đại ở Tokyo hay Osaka khoảng $650–$1,100, còn bảo hiểm y tế quốc gia vừa rẻ vừa bao phủ tốt. Trái cây nhập khẩu và phí cao tốc trong nước thì đắt.",
    "workday": "Mọi ngày bắt đầu bằng những chuyến tàu đúng giờ đến từng giây, trên đó dân văn phòng chợp mắt hoặc lặng lẽ đọc sách. Văn hoá công ty truyền thống vẫn kéo dài giờ làm kèm 'nomikai' — nhậu cùng đồng nghiệp sau giờ hành chính — dù các startup công nghệ và việc remote đang thay đổi rất nhanh. Giờ nghỉ trưa gần như thiêng liêng: hộp bento từ konbini hay suất teishoku nhanh gọn thống trị.",
    "evening": "An toàn tuyệt đối, kể cả 3 giờ sáng. Buổi tối có thể là xiên yakitori với ly highball dưới ánh đèn lồng trong những con hẻm nhỏ (yokocho), một lần ngâm mình ở sento gần nhà, hay đơn giản là về nhà thư giãn sau khi ghé 7-Eleven mua vài món ăn tươi.",
    "upsides": [
      "Giao thông công cộng, sự sạch sẽ và an ninh đường phố thuộc hàng tốt nhất thế giới.",
      "Chất lượng đồ ăn xuất sắc ở mọi tầm giá, từ suất ăn $5 trong cửa hàng tiện lợi đến nhà hàng Michelin.",
      "Bốn mùa rõ rệt với thiên nhiên ngoạn mục, chạm tới được chỉ bằng tàu điện."
    ],
    "downsides": [
      "Cục hành chính cứng nhắc (con dấu hanko và mọi giấy tờ phải xử lý trực tiếp), rào cản ngôn ngữ dốc ở ngoài các trung tâm lớn, cùng những phép tắc xã hội vô hình nhưng khắt khe.",
      "Căn hộ khá chật, và số tiền thuê trung tâm Tokyo đổi lại không gian ít hơn giá gợi ý nhiều.",
      "Người nước ngoài không nói được tiếng Nhật hội thoại dễ rơi vào cô đơn xã hội kéo dài."
    ]
  },
  "Vietnam": {
    "tagline": "Năng lượng rền vang ngay mặt đường, văn hoá cà phê huyền thoại, và cái hối hả ấm áp của người dân tự kinh doanh, tự mưu sinh.",
    "realityCheck": "Xe máy rối như tơ gà và còi xe vang trời, độ ẩm nhiệt đới và chất lượng không khí ở thành phố lớn sụt giảm theo mùa, cùng chính sách visa vẫn đang dần thay đổi.",
    "culture": "Đằng sau cái hối hả là các giá trị gia đình kiểu Nho giáo, những dãy phố mang dấu ấn Pháp, và một cái nhìn lạc quan phóng tốc về tương lai. Đời sống diễn ra ngay trên vỉa hè: từ đi thái cực quyền buổi sáng trong công viên đến bữa tiệc ẩm thực trên những chiếc ghế nhựa thấp tè. Thờ cúng tổ tiên, đoàn viên ngày Tết, và những chuyến đưa đón con đi học bằng xe máy giữ gia đình luôn ở vị trí trung tâm, trong khi lớp trẻ đẩy nhanh một giới cà phê và startup đang chạy rất nhanh.",
    "people": "Ấm áp, tò mò, chịu thương chịu khó, và hiếu khách một cách nổi tiếng. Người dân ở đây mưu sinh giỏi, nặng tình gia đình, hay rủ bạn cùng nhâm nhi ly trà đá hoặc luyện vài câu tiếng Anh. Sự hiếu khách ở đây dân dã hơn là trang trọng: khả năng cao bạn được nhét cho một chiếc ghế nhựa trên vỉa hè chứ không phải một tấm danh thiếp.",
    "costOfLiving": "Một trong những nơi đồng ra tiền nhất thế giới. Chung cư cao cấp có hồ bơi ở TP. Hồ Chí Minh hay Đà Nẵng chỉ mất $450–$750/tháng, tô Phở hay ổ Bánh Mì giá $1.50–$3, còn đi Grab xuyên thành phố hết $2. Ăn ngoài mỗi ngày vẫn rẻ hơn tự nấu ở nhà, và nếu chịu khó ra chợ đầu vía buổi sáng, đồ tươi còn mềm nữa.",
    "workday": "Ngày làm bắt đầu sớm, khoảng 7:30–8:00 sáng, để né cái nóng nhiệt đới, và được đánh thức bằng ly cà phê sữa đá đậm. Nhiều văn phòng và cửa tiệm vẫn giữ nghỉ trưa thật đúng nghĩa — ăn trưa rồi chợp mắt — từ 12:00 đến 1:30 chiều.",
    "evening": "Trời dịu xuống là lúc thành phố bừng tỉnh. Gia đình rong xe máy dọc bờ sông, giới trẻ lấp kín các quán cà phê đẹp mắt đến tận 11 giờ đêm, còn tụ bạn ghé hàng nhậu vỉa hè nướng hải sản và chén bia mát.",
    "upsides": [
      "Giá sinh hoạt thấp đến mức bạn có thể sống khá giả, ăn ngoài mỗi ngày mà vẫn dư dả.",
      "Món ăn đỉnh cao và văn hoá cà phê không nơi nào sánh nổi.",
      "Kinh tế tăng tốc tràn đầy năng lượng, cùng người dân dễ mến."
    ],
    "downsides": [
      "Xe máy rối như tơ gà và còi xe vang trời, độ ẩm nhiệt đới và chất lượng không khí ở thành phố lớn sụt giảm theo mùa, cùng chính sách visa vẫn đang dần thay đổi.",
      "Khó đi lại bằng tiếng Anh ngoài các khu du lịch và khu expat, và nhiều giấy tờ chính thức vẫn cần tiếng Việt.",
      "Mùa hè kéo theo mưa lớn, ngập lụt và bão ở miền Trung lẫn miền Bắc."
    ]
  },
  "South Korea": {
    "tagline": "Kết nối tốc độ ánh sáng, đổi mới chớp nhoáng, năng lượng đêm sôi động, và niềm tự hào cung điện ngàn năm.",
    "realityCheck": "Áp lực phải khuôn theo chuẩn mực xã hội rất nặng, quan điểm pháp lý bảo thủ với quyền của cộng đồng LGBTQ+, cùng mùa hè ẩm khó chịu nối tiếp ngay mùa đông dưới 0°C.",
    "culture": "Tốc độ là từ khoá của mọi thứ: 'Ppalli-ppalli' — nhanh, nhanh hơn — cùng làn sóng K-culture cắt cạnh và tôn kính Nho giáo dành cho tuổi tác, học vấn. Từ Tết đến Chuseok, các gia đình vẫn đổ về quê tổ tiên vào đúng mùa lễ, còn trên cùng một dãy phố, phòng học đêm, quán PC bang và cung điện cổ đứng cạnh nhau như một điều hiển nhiên.",
    "people": "Chăm chỉ, nhạy xu hướng, và hào phóng một khi đã xây được tình riêng. Ý thức công cộng cao gần như tuyệt đối về trật tự và an toàn nơi đông người. Tuổi tác và thứ bậc chi phối cả lời nói lẫn chỗ ngồi, nên học vài đại từ kính ngữ và hỏi năm sinh ngay từ đầu là chuyện bình thường, không phải tọc mạch.",
    "costOfLiving": "Nói chung là phải chăng. Giao thông công cộng rẻ, ăn BBQ Hàn Quốc hay các quán canh nóng cũng mềm, nhưng hệ thống đặt cọc nhà 'jeonse' khá rối. Đồ trong nước và hàng nhập khẩu đắt hơn ở Nhật hay Đài Loan một chút, còn hóa đơn sưởi mùa đông thì không nhân nhượng.",
    "workday": "Khẩn trương và rộn ràng. Cáp quang tốc độ cao phủ khắp nơi, các khu kinh doanh nhộn nhịp, và cơm trưa cả nhóm thường đặt giao tận văn phòng.",
    "evening": "Các thành phố không biết ngủ. Tối là gà rán kiểu Hàn với bia ('chimaek'), hàng ăn trong lều pojangmacha, quán PC bang, karaoke 'noraebang' bỏ xu, và những quán cà phê mở 24/7.",
    "upsides": [
      "Internet cực nhanh, giao thông hiện đại, và an toàn cá nhân xuất sắc.",
      "Tiện nghi 24/7 với giao hàng tên lửa cho gần như mọi thứ.",
      "Lịch sử dày đặc sống êm ru cạnh công nghệ của tương lai."
    ],
    "downsides": [
      "Áp lực phải khuôn theo chuẩn mực xã hội rất nặng, quan điểm pháp lý bảo thủ với quyền của cộng đồng LGBTQ+, cùng mùa hè ẩm khó chịu nối tiếp ngay mùa đông dưới 0°C.",
      "Chất lượng không khí sụt mạnh vào mùa xuân khi bụi vàng và bụi mịn tràn từ phía Tây.",
      "Giờ làm dài và văn hoá công ty bảo thủ ở các công ty nội địa."
    ]
  },
  "Thailand": {
    "tagline": "Chùa chạm vàng, đam mê ẩm thực huyền thoại, thiên đường đảo nhiệt đới, và xứ sở của những nụ cười.",
    "realityCheck": "Cái nóng và độ ẩm nhiệt đới lúc trưa gần như giày vò, khói đốt ruộng mùa vụ ở miền Bắc theo mùa, cùng các thủ tục gia hạn visa dài hạn phức tạp.",
    "culture": "Chữ 'Sabai-Sabai' — thảnh thơi, dễ chịu — và 'Sanuk' — biến chuyện thường ngày thành niềm vui — dẫn dắt nhịp sống. Phật giáo Nam tông ngấm sâu vào phép tôn trọng xã giao và các lễ hội chùa chiền. Sáng sáng nhà sư đi khất thực, mỗi cửa hàng có một nhà linh vật, cùng những quy ước rất nghiêm về hoàng gia và về phần đầu, phần chân — tất cả nằm lặng lẽ dưới lớp mặt du lịch.",
    "people": "Dịu dàng, luôn nở nụ cười, và tôn trọng người đối diện đến khó tin. Người bản địa sẵn sàng xoay xở đủ cách để khách cảm thấy như ở nhà. Mâu thuẫn thường được gạt đi bằng một nụ cười thay vì đối đầu, nên lớn tiếng hay bực bội nơi công cộng chỉ khép cửa, trong khi sự kiên nhẫn nhẹ nhàng lại mở ra mọi thứ.",
    "costOfLiving": "Đồng tiền đổi được nhiều giá trị sống ở đây. Pad Thai và Tom Yum ở các sạp đêm $1.50–$3, còn chung cư cao cấp có hồ bơi trên mái chỉ $500–$850/tháng. Bangkok và các đảo đắt hơn Chiang Mai cùng miền Đông Bắc, nơi chi phí ngày thường rơi xuống rất thấp.",
    "workday": "Bắt đầu sớm trước khi nắng lên đỉnh, điểm xuyết ly trà sữa Thái đá và chút đồ ăn vỉa hè. Môi trường làm việc nhẹ nhàng và lịch sự.",
    "evening": "Chợ đêm thức giấc với mùi sả và ớt quyện vào nhau, các sky bar trên nóc nhà rộn ràng khách, còn những thị trấn biển thưởng thức màn đốt lửa và tiếng guitar mộc.",
    "upsides": [
      "Văn hoá ẩm thực mê hoặc, được nhìn nhận là một trong những nền ngon nhất thế giới.",
      "Sống sang với giá mềm, kèm bệnh viện tư nhân chất lượng cao.",
      "Cộng đồng expat và digital nomad đông đúc ở Bangkok, Chiang Mai và Phuket."
    ],
    "downsides": [
      "Cái nóng và độ ẩm nhiệt đới lúc trưa gần như giày vò, khói đốt ruộng mùa vụ ở miền Bắc theo mùa, cùng các thủ tục gia hạn visa dài hạn phức tạp.",
      "An toàn giao thông kém theo chuẩn khu vực, và đi xe máy mang rủi ro thật sự.",
      "Ngoài ngành du lịch, tiếng Anh hạn chế, và mọi việc chính thức đều cần tiếng Thái."
    ]
  },
  "Taiwan": {
    "tagline": "Chợ đêm trứ danh, tuyến đường sắt ngoạn mục giữa núi, cộng đồng an toàn hiếm có và sự hiếu khách khó quên.",
    "realityCheck": "Hè ẩm nực như thiêu đốt kèm nguy cơ bão theo mùa, nhà cũ thiếu cách nhiệt hiện đại và vị thế địa chính trị phức tạp.",
    "culture": "Sự dung hợp hài hòa giữa văn hóa bản địa, người Khách Gia, thổ dân và di sản thuộc địa Nhật Bản. Ẩm thực, lòng tốt và ý thức công cộng được đề cao trong đời thường. Lễ hội chùa miếu, bàn thờ tổ tiên và hàng dài chờ ở chợ đêm đứng cạnh nền kinh tế nhanh nhạy do kỹ sư dẫn dắt, còn những phép lịch sự nhỏ như xếp hàng hay đứng thang máy cũng được coi trọng đàng hoàng.",
    "people": "Được mệnh danh là một trong những dân tộc thân thiện và nhiệt tình nhất thế giới, người Đài Loan sẵn sàng đi xa thêm vài dãy phố chỉ để chỉ đường cho bạn. Sự lịch sự ở đây mang tính thực dụng hơn hình thức, và một khi được mời đi ăn, hãy chuẩn bị được đãi no đến khi phải van xin ngừng lại.",
    "costOfLiving": "Mức giá dễ chịu hiếm thấy ở châu Á. Tàu cao tốc giá phải chăng, bữa ăn chợ đêm ngon miệng chỉ $3–$6, và bảo hiểm y tế toàn dân (NHI) nổi tiếng khắp thế giới. Riêng giá thuê lẫn giá mua nhà ở Đài Bắc là ngoại lệ, còn hàng nhập khẩu luôn kèm phần phụ phí đáng kể.",
    "workday": "Chăm chỉ và đậm chất công nghệ, cân bằng bằng những ly trà sữa và quãng nghỉ ở cửa hàng tiện lợi.",
    "evening": "Chợ đêm nhộn nhịp với đậu hũ thối, bánh hành lá và trái cây tươi, rồi khép lại bằng suối nước nóng Beitou.",
    "upsides": [
      "Quốc gia đầu tiên ở châu Á hợp pháp hóa hôn nhân đồng giới, với lễ diễu hành Pride lớn bậc nhất khu vực.",
      "An toàn công cộng vượt trội cùng hệ thống y tế toàn dân hàng đầu thế giới.",
      "Món ăn đường phố tuyệt vời và núi xanh trong tầm tay ngay từ Đài Bắc."
    ],
    "downsides": [
      "Hè ẩm nực như thiêu đốt kèm nguy cơ bão theo mùa, nhà cũ thiếu cách nhiệt hiện đại và vị thế địa chính trị phức tạp.",
      "Mua nhà ở trung tâm Đài Bắc chênh cao so với mức lương địa phương.",
      "Rủi ro động đất là có thật, và mức gia cố chống động của các tòa nhà cũ rất chênh lệch."
    ]
  },
  "Indonesia": {
    "tagline": "Quần đảo núi lửa, sóng lướt ván nhiệt đới, truyền thống chữa lành tâm linh và văn hóa mỗi đảo một sắc thái.",
    "realityCheck": "Tắc nghẽn xe máy ở các điểm du lịch, xu hướng pháp lý bảo thủ ở cấp quốc gia và mưa gió mùa dữ dội.",
    "culture": "Cả một quần đảo hơn 17.000 hòn đảo với sự đa dạng sâu sắc — từ nghi lễ Hindu ở đền Bali, nghệ thuật Java đến truyền thống thủy thủ ven biển. Gotong royong (tương trợ cộng đồng), lễ cầu nguyện tập thể và lễ hội làng xã khiến đời sống chung hiện ra rõ mồn một, còn lịch tôn giáo lẫn vùng miền mỗi nơi mỗi khác, chẳng thể gói trong một hình mẫu duy nhất.",
    "people": "Lịch thiệp, tươi cười và nặng tình cộng đồng theo tinh thần Gotong Royong. Sự tôn trọng với người lớn tuổi, khách phương xa và truyền thống ăn sâu vào gốc rễ. Sự hài hòa được chuộng hơn lời nói thẳng, nên mâu thuẫn thường được làm dịu nhẹ; cách tiếp cận kiên nhẫn, đi đường vòng hiệu quả hơn đối đầu.",
    "costOfLiving": "Rẻ một cách thật sự. Villa riêng có hồ bơi ở Bali cho thuê $700–$1,200/tháng, bữa warung (Nasi Goreng) chỉ tốn $1.50–$3. Jakarta và Surabaya mềm hơn các enclave du lịch chính, dù tắc đường và quãng đường đi lại bào mòn dần phần tiết kiệm đó.",
    "workday": "Nhịp chậm rãi kiểu nhiệt đới, nhất là ở các hub ven biển như Canggu và Ubud, giữa những thửa ruộng bậc thang xanh mượt.",
    "evening": "Ngắm hoàng hôn cháy đỏ trên Ấn Độ Dương ở beach club, tiệc hải sản nướng tại bãi và những buổi yoga hay guitar mộc.",
    "upsides": [
      "Thiên nhiên nhiệt đới ngoạn mục cùng các điểm lướt sóng và lặn biển đỉnh cao.",
      "Giá mềm cho phép sống trong villa và chăm chút sức khỏe cá nhân thường xuyên.",
      "Cộng đồng làm việc từ xa và wellness quy mô lớn hội tụ tại Bali."
    ],
    "downsides": [
      "Tắc nghẽn xe máy ở các điểm du lịch, xu hướng pháp lý bảo thủ ở cấp quốc gia và mưa gió mùa dữ dội.",
      "Quản lý rác thải và chất lượng không khí tụt hậu ở các thành phố tăng trưởng nóng.",
      "Dịch vụ y tế và chăm sóc cấp cứu chênh nhau rất xa giữa các đảo."
    ]
  },
  "Mexico": {
    "tagline": "Màu sắc rực rỡ, lòng hiếu khách rộng lớn, tinh hoa ẩm thực di sản thế giới và niềm vui sống không tắt.",
    "realityCheck": "An toàn chênh lệch đáng kể theo từng khu phố và vùng, đòi hỏi luôn tỉnh táo nơi ở, và nước máy đô thị không uống được.",
    "culture": "Hòa quyện giữa nền văn minh Mesoamerica cổ đại và di sản baroque Tây Ban Nha. Gia đình, nghệ thuật, âm nhạc (mariachi, son jarocho) và các dịp lễ hội là nhịp thở của đời thường. Bàn thờ Día de Muertos, chợ tianguis góc phố và bữa trưa chủ nhật kéo dài khiến đời sống cộng đồng luôn hiện hữu, còn từng vùng từ Oaxaca đến Yucatán vẫn giữ giọng riêng, chưa trộn thành một câu chuyện quốc gia chung.",
    "people": "Ấm áp, cởi mở, hào phóng và tự hào về truyền thống phong phú của mình. Hiếu khách là đức tính gốc — người nước ngoài dễ dàng được kéo vào chuyện trò và tiệc tùng. Một lời chào trước mỗi yêu cầu cùng thiện chí bàn về gia đình, món ăn, quê quán sẽ mở được nhiều cửa hơn bất cứ sự hiệu quả lạnh lùng nào.",
    "costOfLiving": "Cuộc sống thỏa sức với chi phí thấp ngoài các dải du lịch sang trọng. Taco vỉa hè ngon chỉ $1–$1.50, chợ tianguis địa phương rẻ bất ngờ, còn căn hộ đẹp kiểu thuộc địa hay hiện đại cho thuê $600–$1,100/tháng. Các thành phố trung tâm như Guadalajara hay Querétaro càng ưu đãi hơn.",
    "workday": "Sôi động và đi trên các mối quan hệ. Ngày làm có bữa sáng giữa buổi ('desayunos') và bữa trưa ngồi bàn muộn ('comidas') cùng đồng nghiệp quanh 2:00–4:00 chiều.",
    "evening": "Quảng trường (zocalo) sống dậy với trẻ em nô đùa, các cặp đôi nhảy múa, hàng churro rong và quán mezcaleria rót cocktail đến khuya.",
    "upsides": [
      "Nền văn hóa mãnh liệt, đa dạng sinh học phong phú cùng ẩm thực được UNESCO ghi danh.",
      "Sống thoải mái với chi phí mềm và đi lại nhiều nơi thường xuyên.",
      "Thời tiết dễ chịu kiểu mùa xuân quanh năm trên cao nguyên trung tâm."
    ],
    "downsides": [
      "An toàn chênh lệch đáng kể theo từng khu phố và vùng, đòi hỏi luôn tỉnh táo nơi ở, và nước máy đô thị không uống được.",
      "Chăm sóc y tế chia cắt gắt giữa bệnh viện tư và phòng khám công đông đúc.",
      "Giấy tờ hành chính khó đoán và đôi khi gây hao hụt thời gian bất thường."
    ]
  },
  "Canada": {
    "tagline": "Hoang sơ bát ngát, niềm tin công dân cao, sức ấm đa văn hóa và không khí núi trong lành.",
    "realityCheck": "Mùa đông giá rét dưới 0°C kéo dài dai dẳng, áp lực giá nhà lớn ở các đô thị lớn và vùng ngoại ô phụ thuộc ô tô mênh mông.",
    "culture": "Lịch sự, đa văn hóa, mê ngoài trời và nặng ý thức công dân. 'Bức tranh khảm' kiểu Canada tôn vinh bản sắc di dân song hành truyền thống thổ dân. Mùa đông định hình lịch sinh hoạt chung — sân băng khúc côn cầu, dốc trượt tuyết, trung tâm cộng đồng — còn mùa hè gói cottage, lễ hội và mùa hiên tưới nắng vào vài tháng sôi động nhất năm.",
    "people": "Nổi tiếng thân thiện, chu đáo và hay giúp người. Sự đa dạng được coi là sức mạnh quốc gia, nhất là ở các đô thị lớn. Nhưng lịch sự đôi khi dễ hiểu là xa cách: người lạ lịch lời mà chậm chuyển từ chuyện nhỏ sang tình bạn thật, và phần lớn quan hệ hình thành qua công việc, thể thao hay hàng xóm.",
    "costOfLiving": "Cao, nhất là thị trường nhà ở Vancouver và Toronto. Tiền thực phẩm, vé máy bay nội địa và gói di động đều đắt, bù lại các dịch vụ công ổn định. Thành phố nhỏ và đồng bằng Prairie rẻ hơn, nhưng việc làm ít hơn và mùa đông lại dài hơn.",
    "workday": "Phối hợp và khuôn mẫu quanh khung giờ 8:30–5:00, kèm linh hoạt làm việc từ xa ngày càng phổ biến. Sức khỏe người lao động luôn được đặt nặng.",
    "evening": "Về mùa đông là khúc côn cầu trên băng, nhậu với brewery thủ công và quây quần ở nhà; mùa hè là căn lều bên hồ, ăn ngoài hiên và đi bộ đến khi trời sẫm.",
    "upsides": [
      "Núi Rocky hùng vĩ, các vườn quốc gia và nguồn nước sạch vô tận.",
      "Xã hội cởi mở, an toàn và tiến bộ, chào đón người mới đến.",
      "Giáo dục công và y tế toàn dân duy trì ở chất lượng cao."
    ],
    "downsides": [
      "Mùa đông giá rét dưới 0°C kéo dài dai dẳng, áp lực giá nhà lớn ở các đô thị lớn và vùng ngoại ô phụ thuộc ô tô mênh mông.",
      "Thực phẩm, cước di động và vé máy bay nội địa đều vượt xa dự liệu của phần lớn người mới đến.",
      "Khói cháy rừng ngày càng trùm lên các thành phố phía tây mỗi mùa hè."
    ]
  },
  "Costa Rica": {
    "tagline": "Sống chậm theo tinh thần Pura Vida, giữa rừng mây sương mù và sự đa dạng sinh học bậc nhất thế giới — một thiên đường sinh thái thật sự yên bình.",
    "realityCheck": "Cơ sở hạ tầng được bảo trì chậm rãi (đường nông thôn đầy ổ gà), mưa lớn dồn dập trong mùa mưa, và thuế nhập khẩu cao khiến đồ điện tử đắt đỏ.",
    "culture": "Pura Vida — sống cho đẹp, sống cho nhẹ nhõm — là triết lý thấm vào từng ngày: biết ơn điều mình có, giữ hòa khí và không gấp gáp. Năm 1948, nước này nổi tiếng vì dồn toàn bộ ngân sách quân đội sang y tế và giáo dục. Chủ nhật đá bóng, bữa trưa sum họp nhà và chuyến hành hương thường niên về Cartago giúp bản sắc xứ nhỏ luôn sống động, dù làn sóng du lịch đang dần thay đổi các thị trấn ven biển.",
    "people": "Hiền lành, chu đáo, yêu sự bình yên và có ý thức về môi trường; hòa khí xã hội được đặt lên trên cả chính kiến cá nhân. Lời từ chối thẳng thừng rất hiếm gặp — một câu 'để xem đã' mơ hồ thường chính là cách nói không, và sự kiên nhẫn với những câu trả lời vòng vo sẽ giúp bạn bớt nhiều phiền phức.",
    "costOfLiving": "Mức trung bình: đắt hơn các nước láng giềng Trung Mỹ một chút vì thuế môi trường và sự ổn định chính trị, nhưng vẫn rẻ hơn Bắc Mỹ rất nhiều. Đồ tạp hóa và điện tử đều mang phần giá nhập khẩu, còn tiền thuê nhà ở các thị trấn biển và khu đông người nước ngoài đã vượt xa mặt bằng chung của cả nước.",
    "workday": "Cả ngày làm bắt đầu sớm quanh 7 giờ với trái cây nhiệt đới tươi và đĩa Gallo Pinto, rồi khép lại cùng ánh chiều để còn thời gian cho những thú vui ngoài trời.",
    "evening": "Ngắm hoàng hôn trên biển Thái Bình Dương, lắng nghe âm thanh của rừng rậm, và ghé quán soda gia đình để ăn tối bình dị.",
    "upsides": [
      "Quá 25% diện tích cả nước là vườn quốc gia được bảo vệ.",
      "Nền dân chủ ổn định và chỉ số phát triển con người thuộc nhóm cao.",
      "Lướt sóng đỉnh cao, rừng mưa bạt ngàn và sắc xanh tươi quanh năm."
    ],
    "downsides": [
      "Cơ sở hạ tầng được bảo trì chậm rãi (đường nông thôn đầy ổ gà), mưa lớn dồn dập trong mùa mưa, và thuế nhập khẩu cao khiến đồ điện tử đắt đỏ.",
      "Y tế công hoạt động được nhưng xếp hàng rất lâu, nên nhiều người trú trụ ở đây vẫn mua thêm bảo hiểm tư nhân.",
      "Mặt bằng nhà đất và tiền thuê ở các thị trấn biển nổi tiếng đã tăng mạnh theo sức cầu từ khách nước ngoài."
    ]
  },
  "Colombia": {
    "tagline": "Khí hậu ôn hòa như mùa xuân quanh năm, nhịp salsa rộn ràng, dãy Andes hùng vĩ, và sự hiếu khách ấm áp.",
    "realityCheck": "Sống ở thành phố đòi hỏi luôn tỉnh táo và tinh ý khi ra đường, muốn vượt qua các dãy núi phải bay nội địa, và kẹt xe thì vô cùng nghiêm trọng.",
    "culture": "Sôi động, nhạc tính và mỗi vùng một vẻ riêng. Từ salsa vùng Caribbean ở Cali đến văn hóa cà phê Andes trên cao nguyên Eje Cafetero, cuộc sống trôi theo nhịp điệu và bản lĩnh. Cumbia, vallenato, champeta — mỗi điệu nhạc mang theo một miền đất riêng, còn chủ nhật có ciclovía biến các đại lộ thành làn đạp xe và sàn nhảy tự phát.",
    "people": "Ấm áp, lễ phép và vui vẻ đúng nghĩa. Người Colombia nổi tiếng trò chuyện hay và rất tự hào khi kể về những đổi thay của quê hương mình. Lời chào được đối xử cầu kỳ và không vội vàng — hỏi thẳng một chuyện mà bỏ qua câu chào sẽ bị xem là lạnh nhạt.",
    "costOfLiving": "Rẻ đến bất ngờ. Một bữa tối đúng điệu ở Medellín hay Bogotá chỉ bằng một phần nhỏ giá Bắc Mỹ, còn căn hộ cao tầng hiện đại cho thuê khoảng $500–$800/mo. Đi chợ và đi lại rất rẻ, nhưng đồ điện tử và ô tô nhập khẩu thì chịu thuế nặng đủ để khiến bạn phải suy nghĩ.",
    "workday": "Từ sáng sớm, mọi việc bắt đầu cùng ly tinto đậm đặc. Quan hệ cá nhân ấm áp luôn được đặt trước mọi chuyện thương lượng.",
    "evening": "Sàn nhảy salsa sôi động, các quán cà phê thủ công ở El Poblado, và những quảng trường ngoài trời rộn ràng nhạc sống cùng đồ ăn đường phố.",
    "upsides": [
      "Medellín ôn hòa quanh năm đúng như danh xưng 'Thành phố mùa xuân vĩnh cửu'.",
      "Giá cả thấp nhưng chất lượng sống cao, rất đáng với người làm việc từ xa.",
      "Dân địa phương thân thiện, giúp việc rèn tiếng Tây Ban Nha trở nên tự nhiên."
    ],
    "downsides": [
      "Sống ở thành phố đòi hỏi luôn tỉnh táo và tinh ý khi ra đường, muốn vượt qua các dãy núi phải bay nội địa, và kẹt xe thì vô cùng nghiêm trọng.",
      "Ồn ào và bụi khí trên những trục giao thông đông đúc của thành phố.",
      "Thủ tục ngân hàng và xác minh visa giấy tờ rườm rà, mất thời gian."
    ]
  },
  "Australia": {
    "tagline": "Bãi biển cát vàng, lối sống ngoài trời, văn hóa cà phê dẫn đầu thế giới, và tình bạn thoải mái kiểu mateship.",
    "realityCheck": "Địa lý nằm quá xa khiến du lịch quốc tế đắt đỏ, giá nhà ở các thành phố cao, và dịch vụ nhà cửa theo giờ thợ rất đắt nên đa số phải tự tay làm.",
    "culture": "Sống ngoài trời như một nghi thức: bãi biển, ván lướt, phòng gym và thể thao cuối tuần. 'No worries' không đơn thuần là câu cửa miệng — đó là triết lý bình đẳng trong cách đối xử. Văn hóa biển, trận đấu cuối tuần và tiệc nướng sân sau là nghi lễ chung của một xã hội đa nguồn gốc, nơi di sản người bản địa và dân đảo Torres Strait ngày càng được nhìn nhận công khai.",
    "people": "Thoải mái, dí dỏm và thẳng thắn. Bạn được đánh giá qua tính cách chứ không qua chức tước hay bộ dạng bề ngoài. 'Tall-poppy syndrome' ở đây có thật: phô trương bản thân thường bị trêu choả, trong khi cách tự trào hóm hỉnh lại đi xa hơn, nhất là ở các thị trấn nhỏ và giới thợ thủ công.",
    "costOfLiving": "Đắt, nhất là Sydney và Melbourne, nhưng được bù lại bằng mức lương tối thiểu và lương chuyên môn thuộc hàng cao nhất thế giới. Đi chợ, tiền điện và ăn ngoài đều leo thang, còn giá nhà ở các thành phố lớn ngốn một phần đáng kể của cả những đồng lương khá giả.",
    "workday": "Ngày làm khởi động sớm khoảng 8 giờ với ly flat white rang xay, rồi kết thúc đúng 4:30–5:00 chiều để kịp phòng gym, bãi biển hay công viên.",
    "evening": "Đi bộ dọc bờ biển lúc hoàng hôn, tiệc nướng cùng bia thủ công, và những bữa tối giản dị trong các khu phố đa văn hóa.",
    "upsides": [
      "Bãi biển ngoạn mục, nắng vàng và môi trường ngoài trời gần như nguyên sơ.",
      "Tiền lương cao cùng chất lượng sống tổng thể thuộc nhóm tốt nhất.",
      "Văn hóa quán cà phê và cà phê đặc sản phát triển cực mạnh."
    ],
    "downsides": [
      "Địa lý nằm quá xa khiến du lịch quốc tế đắt đỏ, giá nhà ở các thành phố cao, và dịch vụ nhà cửa theo giờ thợ rất đắt nên đa số phải tự tay làm.",
      "Việc làm ưu tiên kinh nghiệm trong nước, còn visa dựa trên bảo lãnh gắn quyền cư trú vào người sử dụng lao động.",
      "Nắng gay gắt với chỉ số UV rất cao, buộc phải che chắn da nghiêm túc."
    ]
  },
  "New Zealand": {
    "tagline": "Cảnh núi tuyết kỳ vĩ, sự tôn trọng văn hóa Māori, nhịp sống ven biển thong thả, và bầu không khí trong lành tinh khiết.",
    "realityCheck": "Cách ly địa lý đến mức cực đoan khiến vé máy bay về châu Âu/châu Á rất đắt, đời sống phụ thuộc xe hơi nặng nề, và tia UV gay gắt hơn nhiều người tưởng.",
    "culture": "Bám rễ trong khái niệm 'Kaitiakitanga' của người Māori — nghĩa là làm người gìn giữ thiên nhiên — cùng tinh thần bình đẳng và óc sáng tạo 'sợi dây số 8' nổi tiếng. Đi tramping, câu lạc bộ lướt sóng và vườn rau sau nhà là chuyện bình thường chứ không phải thú chơi của số ít, còn Hiệp ước Waitangi ngày càng chi phối ngôn ngữ, chính sách và tên gọi địa danh.",
    "people": "Chân thành, thân thiện và không màu mè. Người Kiwi coi trọng sự khiêm tốn, những chuyến phiêu lưu ngoài trời và tinh thần chăm lo cho cộng đồng của mình. 'Tall-poppy syndrome' cũng hiện diện rõ: tham vọng phô trương thường bị trêu vui, còn thực tài thì được nể trọng trong lặng lẽ.",
    "costOfLiving": "Cao vì vị trí đảo quốc và hàng hóa phải nhập khẩu. Tiền đi chợ và xăng dầu đều đắt, nhưng chất lượng sống cùng môi trường trong lành thì khó tìm nơi nào sánh bằng. Nhà cửa ở Auckland và Wellington hút phần lớn ngân sách, còn thuê nhà ngoài các trung tâm chính rẻ hơn nhưng vẫn tăng đều.",
    "workday": "Nhịp làm việc chuẩn giờ từ 8:30 đến 17:00, và tăng ca không được khuyến khích. Sáng thì đồng nghiệp rót cho nhau ly flat white, tan ca là kéo nhau ra ngoài trời ngay.",
    "evening": "Lướt sóng lúc hoàng hôn, tiệc nướng trong sân sau, đi bộ dọc bờ biển thanh bình, và ngắm sao dưới bầu trời không ô nhiễm ánh sáng.",
    "upsides": [
      "Một trong những cảnh quan hoang sơ ngoạn mục nhất hành tinh.",
      "An ninh hàng đầu, chính quyền minh bạch và tội phạm thấp.",
      "Cân bằng công việc–cuộc sống tốt và văn hóa ngoài trời đậm nét."
    ],
    "downsides": [
      "Cách ly địa lý đến mức cực đoan khiến vé máy bay về châu Âu/châu Á rất đắt, đời sống phụ thuộc xe hơi nặng nề, và tia UV gay gắt hơn nhiều người tưởng.",
      "Thị trường việc làm nhỏ và hẹp, nên muốn chuyển hướng sự nghiệp thường phải rời nước.",
      "Rủi ro động đất là một phần tất yếu của cuộc sống nơi Vành đai lửa Thái Bình Dương."
    ]
  }
};
