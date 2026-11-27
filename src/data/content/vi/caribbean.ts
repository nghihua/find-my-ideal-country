import type { CountryDossierProse } from '../../countries';

// Vietnamese mirror of content/en/caribbean.ts — Phase 2: translated per
// docs/i18n-plan.md; downsides[0] === realityCheck is enforced by
// scripts/qc-profile-sections.mjs --locale vi.

export const VI_CARIBBEAN: Record<string, CountryDossierProse> = {
  "Antigua and Barbuda": {
    "tagline": "Đất nước song đảo mưu sinh bằng buồm, nổi tiếng với 365 bãi biển và lịch sử của English Harbour.",
    "realityCheck": "Hứng chịu bão, chi phí hàng nhập khẩu và những đợt hạn chế nước vào mùa khô trên các đảo nhỏ.",
    "culture": "Ở đây lời chào luôn đến trước mọi giao dịch — một 'chào buổi sáng' đàng hoàng mở đầu mỗi lượt đứng quầy, xếp hàng ngân hàng hay chuyến xe buýt; bỏ qua nó bị xem là lạnh nhạt. Nhà thờ chi phối nhịp tuần, với dàn hợp xướng Anh giáo và Giám lý tạo dấu ấn Chúa nhật, còn mùa Carnival hè gắn với lễ kỷ niệm giải phóng nô lệ qua các lều calypso và dàn nhạc hóa trang ngoài phố. Còn lại, mọi thứ trôi theo nhịp thời gian kiểu đảo nhỏ — tốc độ mà dân bản địa coi là đặc sản chứ không phải khuyết điểm.",
    "people": "Đảo nhỏ đến mức một người mới đến vài tuần đã thành gương mặt quen — tiếng lành tiếng dữ đi nhanh hơn cả chân bạn. Dân đảo lịch sự và rất thích trêu chọc một khi lời chào đầu đã có, còn lời mời thường đến từ nhà thờ, chỗ làm hay chiếc thuyền của ông hàng xóm. Người ngoài được tiếp đón nồng hậu, nhất là khi họ chịu chậm lại theo nhịp đảo.",
    "costOfLiving": "Rau quả bản địa và cá tươi vừa đánh bắt giúp hóa đơn ăn uống dễ chịu, còn bất cứ thứ gì đóng gói, đóng chai hay máy móc đều đi theo container nên giá cũng theo kiểu đó. Tiền nhà là biến số dao động: căn hộ giản dị xa bờ biển chạm mức sàn của dải giá, trong khi nhà quanh marina và dải resort chạy sát trần. Điện nước và xăng dầu nằm ở nửa đắt của nền kinh tế nhập khẩu.",
    "workday": "Đa số paycheck đến từ du lịch và chính quyền: các ca resort gần Dickenson Bay và Jolly Harbour bắt đầu 7:00 sáng, trong khi văn phòng ở St John's chạy 8:00–4:30 rồi tan rất nhanh. Từ tháng 12 sang mùa xuân, mùa buồm ở English Harbour — đỉnh điểm là Antigua Sailing Week cuối tháng 4 — lấp đầy việc làm quanh Nelson's Dockyard tại marina, thuyền charter và nhà hàng bằng những ngày dài và nhộn nhịp hơn.",
    "evening": "Quán rượu rum là điểm dừng mặc định sau giờ làm — một Wadadli lạnh, ván domino trên bàn sờn cùng trận cricket trên radio. Chiều Chúa nhật thuộc về bữa tiệc tại điểm ngắm Shirley Heights trên English Harbour: barbecue, trống thép, rum punch và cả sườn đồi nhìn mặt trời lặn sau những chiếc thuyền.",
    "upsides": [
      "Các đường bay thẳng từ London, New York và Toronto giữ Bắc Mỹ và châu Âu chỉ cách một chặng.",
      "Chương trình đầu tư lấy quốc tịch là một trong những lộ lấy hộ chiếu thứ hai hợp túi tiền nhất khu vực.",
      "Truyền thống cricket rất sâu — hòn đảo sản xuất ra Sir Vivian Richards, còn sân vận động mang tên ông vẫn tổ chức các trận quốc tế."
    ],
    "downsides": [
      "Hứng chịu bão, chi phí hàng nhập khẩu và những đợt hạn chế nước vào mùa khô trên các đảo nhỏ.",
      "Xe hơi gần như bắt buộc — tuyến xe buýt hầu như không có ngoài thủ phủ, còn tiền bảo hiểm cùng sửa chữa cộng dồn nhanh.",
      "Khung giờ chạy việc hẹp: ngân hàng đóng cửa giữa buổi chiều, nhiều cửa hàng chốt sớm, còn thương mại Chúa nhật gần như biến mất."
    ]
  },
  "Bahamas": {
    "tagline": "Hàng trăm đảo san hô nhỏ, bãi cát hồng cùng nhịp sống tài chính ngoài khơi với tiện nghi kiểu Mỹ.",
    "realityCheck": "Mùa bão, giá nhập khẩu cao và khâu chuyển hàng giữa các Family Islands.",
    "culture": "Nhà thờ neo giữ mọi Chúa nhật — Baptist, Anh giáo và một truyền thống gospel sâu — nên phần lớn thương mại rỉ tai dừng theo nhịp đó. Junkanoo là mỏ neo còn lại của năm: nhiều tháng chuẩn bị trong xưởng hóa trang dồn về cơn ùa ra sáng Boxing Day và mùng 1 tháng 1, rung chuyển trung tâm Nassau khi trời còn mờ sáng. Ngoài các Family Islands, nhịp sống tụt xuống kiểu thời gian làng quê, nơi hội chợ nhà thờ tính là sự kiện xã hội của cả mùa.",
    "people": "Khách du lịch ở đây đã thành chuyện cũ — một nửa nền kinh tế tồn tại để phục vụ họ, nên chuyện phiếm rất tự nhiên, còn người ngoài trượt vào đời sống xã hội mà không cần nghi thức. Mạng lưới nhà thờ đảm nhận vai mai mối, còn lời mời dự lễ Chúa nhật là dấu hiệu được chấp nhận thật sự. Ở Family Islands, sự hiếu khách lặng hơn nhưng cá nhân hơn.",
    "costOfLiving": "Đi chợ bắt đầu từ Florida — phần lớn kệ siêu thị được chở từ Miami, nên giá bám theo mức Mỹ cộng thêm cước vận chuyển. Cá tươi từ bến cá và rau củ ven đường làm dịu hóa đơn. Tiền nhà chia dải giá: căn hộ Nassau giản dị nằm mức giữa, nhà ở Family Islands có thể thấp hơn, còn bất cứ thứ gì cạnh nước đều leo nhanh.",
    "workday": "Bàn giấy chính quyền ở Nassau chạy giờ hành chính tuần năm ngày, nhưng trụ cột kinh tế còn lại bắt đầu sớm hơn nhiều — ca khách sạn và resort đã có mặt từ 6:00 hoặc 7:00 sáng để kịp đông khách ăn sáng. Ở Family Islands, tuần vẫn quanh theo ngày tàu thư và phà.",
    "evening": "Dãy Fish Fry ở Arawak Cay — hàng chuỗi lều gỗ phía tây trung tâm Nassau — kéo khách sau giờ làm về với conch chiên giòn, gỏi conch và sky juice (gin, nước dừa, sữa đặc). Từ cuối tháng 12, các buổi tập Junkanoo biến đêm thường thành buổi tập trống kèn ngoài phố trước thềm Boxing Day.",
    "upsides": [
      "Không có thuế thu nhập cá nhân — thu nhập bị đánh thuế gián tiếp qua VAT và thuế nhập khẩu.",
      "Miami cách dưới một giờ bay, khiến cuối tuần bên Mỹ thực sự thành chuyện thường ngày.",
      "Bất động sản Family Islands cho kiểu sống ven nước quy mô làng với mức giá Nassau và các đảo resort hiếm khi sánh được."
    ],
    "downsides": [
      "Mùa bão, giá nhập khẩu cao và khâu chuyển hàng giữa các Family Islands.",
      "Điện thuộc hàng đắt nhất khu vực — làm mát một ngôi nhà suốt mùa hè là chuyện ngân sách, nên nhiều gia đình chia nhau hạn chế điều hòa.",
      "Chúa nhật đóng cửa dứt khoát: ngoài nhà thờ, gần như không gì mở, nên buổi đi chợ thứ bảy lỡ hẹn phải chịu đến thứ hai."
    ]
  },
  "Barbados": {
    "tagline": "Buổi chiều quán rum, văn hóa cricket và hạ tầng Caribbean được chăm chút.",
    "realityCheck": "Chi phí nhập khẩu, nguy cơ bão và nhịp du lịch theo mùa định hình cả giá cả lẫn dòng người.",
    "culture": "Bản sắc Bajan là một chuyện riêng — sự lịch sự kiểu Anh bao quanh một lõi Caribbean không thể lẫn, từ lái xe bên trái đến những danh xưng tôn kính còn sống trong lời ăn tiếng nói hằng ngày. Crop Over chạy suốt mỗi mùa hè, hàng tuần lễ lều calypso và chợ thủ công dồn về cuộc diễu Grand Kadooment thứ hai đầu tháng 8. Giữa các lễ hội, nhóm Landship — hội nhảy lấy hình mẫu hải quân Hoàng gia xưa — vẫn luyện tập theo nhịp trống tuk-band.",
    "people": "Lịch sự trước, hài hước sau: người Bajan tử tế không gỡ nổi cho đến khi lớp vở rơi, lúc đó sự dí dỏm đến khô và lẹ. Hòn đảo tiếp đón người ngoài đủ lâu nên chẳng bị ấn tượng bởi họ — điều đó đọc ra là sự thong thả chứ không phải lạnh nhạt. Tình bạn nảy nở qua công việc, nhà thờ, thể thao cuối tuần, còn lời mời bữa trưa Chúa nhật gia đình là cái gật đầu chào đón thật.",
    "costOfLiving": "Giá nằm trên kệ cao của khu vực: tiền nhà hay được báo bằng USD, còn hóa đơn đi chợ mang cùng phần markup vận chuyển như mọi đảo nhập khẩu. Có điểm bù trừ — rau củ chợ và cá tươi giữ tuần nấu ăn ở nhà dễ chịu. Xe, điện nước và tiện nghi nhập khẩu đẩy lối sống đầy đủ tiện nghi chạm trần của dải giá.",
    "workday": "Các văn phòng Bridgetown nghiêng về phong cách Anh trang trọng — khoảng 8:30–4:30, danh xưng đầy đủ, cùng một chiếc cutter cá bay (bánh mì kẹp cá muối) cho bữa trưa. Chính quyền, du lịch và tài chính ngoài khơi đặt nhịp cho tuần Mon–Fri chuẩn.",
    "evening": "Thứ sáu đêm là Oistins Fish Fry — cả duyên hải nam đổ về các bếp nướng cạnh vịnh của thị trấn chài với cá mahi, bánh nui nướng, rum punch và nhảy múa giữa các quầy. Các tối còn lại là chiếc ghế trong quán rum, ván domino cùng lon Banks lạnh trên tay.",
    "upsides": [
      "Xe buýt công cộng đồng giá phủ hết đảo — điều hiếm thật sự ở Caribbean.",
      "Chuyến bay thẳng tới London, Toronto và bờ Đông Mỹ giữ hòn đảo kết nối tốt bất thường so với cỡ của nó.",
      "Y tế thường ngày khả tín so với khu vực — một bệnh viện công chính ở Bridgetown cộng dàn phòng khám tư trải rộng."
    ],
    "downsides": [
      "Chi phí nhập khẩu, nguy cơ bão và nhịp du lịch theo mùa định hình cả giá cả lẫn dòng người.",
      "Nhà thuê dài hạn phải thi nhau với du lịch biệt thự: những căn nhà ven biển kiếm được nhiều hơn khi cho khách theo tuần, nên thị trường quanh năm bị bóp nghẹt.",
      "Giờ cao điểm trên cao tốc ABC và các tuyến ven biển biến những quãng đi ngắn thành hành trình dài ở cả hai đỉnh giờ."
    ]
  },
  "Cuba": {
    "tagline": "Những con phố lịch sử, âm nhạc và nhịp sống hằng ngày lấy cộng đồng làm trọng tâm rất riêng.",
    "realityCheck": "Nguồn hàng hóa cùng khả năng tiếp cận thanh toán và dịch vụ có thể bị giới hạn.",
    "culture": "Khan hiếm là chuyện thường nhật — xếp hàng, kệ trống, bữa ăn chắp vá — nhưng các khu dân cư vận hành trên một mật độ xã hội phi thường: cửa để mở, người già được chào trước, còn ly cà phê sữa tại quầy cửa sổ vẫn là nghi thức nhỏ của đời thường. Âm nhạc vận hành như hạ tầng công dân, từ đào tạo miễn phí tại nhạc viện tới nhóm bốn người tập nhạc ba căn nhà kế bên, còn domino phân xử hầu hết các cuộc tranh luận hiên nhà.",
    "people": "Gian khó được gặp bằng sự dí dỏm gần như một môn nghệ thuật biểu diễn — câu chuyện nhanh, ấm và rộng lượng với những gì ít ỏi. 'Resolver' (xoay sở, tự tìm lối) vừa là động từ vừa là triết lý quốc gia, còn khách được cho ăn trước khi bị hỏi chuyện. Người ngoài chịu khó nói tiếng Tây Ban Nha sẽ được tiếp đón bằng sự tò mò và kiên nhẫn.",
    "costOfLiving": "Hai thế giới giá tồn tại song song: chợ peso và dịch vụ nhà nước vẫn rẻ, còn cửa hàng tư nhân tính bằng dollar và mọi thứ hướng về du lịch sánh với các đảo đắt nhất khu vực. Người mới đến sống phần lớn trong làn dollar, nên ngân sách của cư dân nước ngoài thường nghiêng về nửa trên của dải giá — du lịch chạy bằng giá ngoại tệ, còn nền kinh tế peso chạy bằng sự kiên nhẫn.",
    "workday": "Việc làm nhà nước vẫn chống lưng phần lớn paycheck trên tuần 44 giờ luật định — ca 8:00–5:00, một số nơi làm thêm sáng thứ bảy cách tuần. Lương peso thì bé, nên ngày làm đan vào các xếp hàng ở bodega, xoay xứng quyển libreta (sổ tem) và tiền gia đình gửi về, trong khi các giấy phép tư nhân cho quán cà phê, sửa chữa, phòng trọ không ngừng mở rộng.",
    "evening": "Dạo bức tường malecón là nghi thức buổi tối — các gia đình, các cặp đôi, tiếng guitar cùng kem giá rẻ lúc hoàng hôn. Từ đó buổi tối trôi về một quảng trường hay casa de la música nghe son và trova sống, một hiên nhà chia nhau chai rum, hoặc hàng xếp ngoài lò mì khi tin bánh về lan khắp xóm.",
    "upsides": [
      "Chăm sóc ban đầu dựa trên khu phố ngay từ thiết kế — phòng bác sĩ gia đình trong tầm đi bộ — dù thiếu hụt vẫn đè nặng hệ thống.",
      "Tỷ lệ biết chữ gần tuyệt đối và văn hóa sách là thật: hội chợ sách đường phố, thư viện khu phố, cùng một công chúng đọc.",
      "Lõi thuộc địa của Old Havana và Camagüey được UNESCO công nhận và sinh ra để đi bộ — khu dân cư đang sống, không phải khu bán vé."
    ],
    "downsides": [
      "Nguồn hàng hóa cùng khả năng tiếp cận thanh toán và dịch vụ có thể bị giới hạn.",
      "Cắt điện kéo dài và đến không báo trước; vì bơm nước cần điện, lịch mất điện lặng lẽ thành luôn lịch nước.",
      "Internet tại nhà khan hiếm, chậm và đắt; đời sống online vẫn dồn về các điểm Wi-Fi công cộng và gói nạp data điện thoại."
    ]
  },
  "Dominica": {
    "tagline": "'Hòn đảo thiên nhiên': hồ sôi, lối mòn rừng mưa và một cộng đồng nhỏ giàu sáng tạo.",
    "realityCheck": "Tái thiết sau bão vẫn tiếp diễn, y tế chỉ ở mức sơ bộ và lịch phà phụ thuộc thời tiết.",
    "culture": "Đời làng nông thôn là trọng tâm — nhiều thế hệ chung một sân, vườn tược nuôi luôn cả hàng xóm, còn một lời chào đàng hoàng mua được nhiều hơn tiền. Vùng Kalinago trên bờ đông vẫn là mảnh đất do bản địa cai quản duy nhất ở Caribbean, với tù trưởng và hội đồng riêng vẫn ngồi phiên. Y học cây cỏ — bách dược từ lá, vỏ cây và rễ — là một môn còn sống, truyền tại nhà chứ không phải trường lớp.",
    "people": "Sự thẳng của người nông dân chi phối cách nói chuyện ở đây — thời tiết, tình trạng đường và ai trồng gì chính là tin tức thật. Dân đảo lịch sự nhưng không vội, còn người mới đến đủ hiếm để trở nên thú vị thật sự. Lời mời đến qua nhà thờ, hội nhóm làng, hoặc đơn giản là việc bạn đứng gần khi nồi gì đó đang nấu ngon.",
    "costOfLiving": "Chi phí nằm gần đáy của Caribbean: nông sản ngay cổng nông trại và quầy ven đường khiến ăn uống rẻ, tiền nhà ngoài Roseau khiêm tốn, còn điện nước vẫn kiểm soát được. Đổi lại là bán lẻ — tạp hóa nhập khẩu, đồ kim khí và xe ô tô mang markup vận chuyển nặng, còn quỹ nhà ở ít đến mức những chỗ tốt chỉ được truyền bằng miệng.",
    "workday": "Nông nghiệp và du lịch sinh thái đặt đồng hồ: ngày ngoài đồn điền trong đồi bắt đầu trước bình minh, hướng dẫn viên và nhân viên khách sạn ở Roseau và Portsmouth chạy theo lịch của khách, còn các bàn chính quyền giữ ghế đều 8:00–4:00. Các bà chợ đã có mặt ở Roseau từ tờ mờ sáng, bày dasheen, lá nguyệt quế và thanh cacao.",
    "evening": "Cuối tuần thuộc về các dòng sông — gia đình gánh nồi và lò than lên thung lũng để nấu chung (cơm một nồi với đậu và thịt muối) trên lửa trần và ngâm mình trong hồ sông. Các tối trong tuần lặng hơn: domino quán rum, hiên nhà và nhà thờ chiều Chúa nhật.",
    "upsides": [
      "Đường mòn quốc gia Waitukubuli nối bờ biển với đỉnh núi chạy suốt chiều dài đảo, một chuyến nhiều ngày chạm tới từ con đường làng.",
      "Cá nhà táng trú cư săn mồi ngoài khơi quanh năm; hòn đảo đã biến việc bảo vệ chúng thành cam kết quốc gia.",
      "Tuyến phà nối hai đảo Pháp Guadeloupe và Martinique, đặt một Caribbean Pháp-Creole khác biệt trong tầm một ngày chạy thuyền."
    ],
    "downsides": [
      "Tái thiết sau bão vẫn tiếp diễn, y tế chỉ ở mức sơ bộ và lịch phà phụ thuộc thời tiết.",
      "Mưa lớn có thể khóa con đường thung lũng hàng giờ — địa hình làm nên vẻ đẹp của đảo cũng khiến giao thông mong manh.",
      "Bán lẻ mỏng: một vài nhà nhập khẩu nắm trọn cả ngành hàng, nên mua sắm đòi hỏi kiên nhẫn và phương án dự phòng."
    ]
  },
  "Dominican Republic": {
    "tagline": "Sống ven biển ấm áp, âm nhạc rộn rã và văn hóa xã giao dày dặn.",
    "realityCheck": "Nắng nóng, mùa bão và mức tiếp cận dịch vụ khác nhau theo vùng.",
    "culture": "Gia đình neo giữ tuần lễ — bữa trưa Chúa nhật dài, mạng lưới cha mẹ đỡ đầu vận hành thật, còn lịch nhà thờ Công giáo cộng thêm Tin Lành trao cho mỗi tháng một ngày lễ. Santiago giữ bản sắc cao nguyên riêng, khép kín và tự hào vì thế, trong khi Santo Domingo chạy đúng tốc độ thủ đô. Mangú (chuối luộc nghiền) với trứng và xúc xích salami là bữa sáng của cả nước, còn carnival tháng 2 lấp đầy phố bằng những con quỷ diablo cojuelo đeo mặt nạ (quỷ què).",
    "people": "Lời chào ở đây bằng cơ thể và lập tức — cái bắt tay hay hôn má đến trước mọi thứ, còn người lạ thành 'mi hermano' (anh em) trong vòng năm phút. Sự ấm áp Dominican mang tính khẳng định: bạn sẽ được mời ăn hai lần và người ta chờ bạn nhận một lần. Giọng Cibao cùng lòng tự trọng của vùng này là một câu đùa quốc gia mà chính người Cibaeño thưởng thức trọn vẹn.",
    "costOfLiving": "Thuộc nhóm đáng tiền hơn cả khu vực: ngoài các dải resort all-inclusive, tiền nhà tính bằng peso vẫn hiền và bữa trưa khu phố tốn một phần tư của bất kỳ khu khách sạn nào. Xe nhập khẩu, đồ điện tử và tạp hiệu mang markup đảo, còn tiền nhà Santo Domingo tách theo khu rất gắt — những quận dễ chịu của thủ đô định giá vượt xa các tỉnh thành như Santiago.",
    "workday": "Giờ hành chính Mon–Fri chạy 8:00–5:00 với một tiếng trưa thật — đĩa la bandera (cơm, đậu, thịt kho) tại quán comedor khu phố hoặc giao tận bàn. Colmado chống lưng mọi khu barrio: cửa hàng góc phố bán ly cà phê sáng nợ sổ, giữ lạnh chai Presidente, kiêm luôn bàn tin tức của khu.",
    "evening": "Ghế nhựa tại colmado kín từ 19:00 — chai Presidente ướp lạnh trong thùng đá, tiếng domino dội trên mặt bê tông cùng bachata trên loa. Cuối tuần kéo dài sang bóng chày, merengue và đồ ăn đường đêm như yaniqueque hay chimi.",
    "upsides": [
      "Zona Colonial của Santo Domingo là khu phố được người châu Âu xây cổ nhất châu Mỹ; nó vẫn là khu dân cư sống chứ không phải hiện vật bảo tàng.",
      "Hòn đảo thuộc nhóm kết nối tốt nhất Caribbean — New York, Miami và Madrid chỉ là những chặng ngắn, tần suất dày.",
      "Bóng chày giải mùa đông biến cả sân vận động thị trấn nhỏ thành nghi lễ cộng đồng tuần nào cũng có suốt mùa."
    ],
    "downsides": [
      "Nắng nóng, mùa bão và mức tiếp cận dịch vụ khác nhau theo vùng.",
      "Lưới điện trũng đủ thường xuyên để biến bộ biến tần và máy phát thành thiết bị gia dụng chuẩn — cứ tính một chiếc vào ngân sách nhà.",
      "Giao thông bãi biển thứ sáu và Chúa nhật làm nghẹt các cao tốc ra khỏi thủ đô, nên kế hoạch cuối tuần bắt đầu bằng giờ xuất phát."
    ]
  },
  "Grenada": {
    "tagline": "Hòn đảo gia vị: đồi thoảng hương nhục đậu khấu, công viên điêu khắc dưới nước và nhịp phố êm.",
    "realityCheck": "Cô lập, chi phí nhập khẩu và logistics mùa bão; nhịp học kỳ đại học định hình St George's.",
    "culture": "Nhục đậu khấu lọt vào mọi thứ — kem, punch, trà chiều — một di sản gia vị từ sườn đồi len vào bếp ăn thường ngày. Cacao của đảo nuôi nên nền sô-cô-la từ hạt đến thanh làm trong nước, các xưởng ủ nhỏ ra lò những thanh bạn mua tại quầy thứ bảy. Nhà thờ giáo xứ tổ chức phần lớn lịch xã hội, mục sư gọi tên từng tín đồ, còn đời phố giữ đúng quy mô nhỏ.",
    "people": "Nhẹ lời theo tiêu chuẩn Caribbean nhưng ấm không kém — lịch sự là điều được chờ đợi, còn kiên nhẫn được coi như mặc định. Ai cũng quen người quen của bạn, nên uy tín là tài sản chung và tử tế là một chiến lược. Người mới được 'nhận nuôi' qua nhà thờ, chuyến đưa đón học sinh, hoặc người hàng xóm ép bạn mang thêm chục quả xoài.",
    "costOfLiving": "Gia vị, nông sản và cá tươi rẻ thật sự tại nguồn, còn vé minibus vòng quanh đảo chỉ bằng tiền lẻ. Bất cứ thứ gì đóng gói hay máy móc đều mang cước vận chuyển hai lần — một lần ra đảo, một lần thành phần lời của quán; điện nước cũng thiên về đắt. Tiền nhà trải từ ngôi nhà làng giản dị tới những mảnh đắt hơn quanh bến cảng và các vịnh duyên hải nam.",
    "workday": "Nhịp việc ở St George's dồn quanh Carenage và chợ — bàn giấy chính quyền, du lịch và thương mại, phần lớn 8:00–4:30. Các buổi sáng quê vẫn đi theo nhịp nhục đậu khấu: đồn điền gia vị và nông trại nhỏ trong đồi, hạt cacao phơi trên khay gỗ, còn một quả nhục đậu khấu trên quốc kỳ không phải vì ngẫu nhiên.",
    "evening": "Vào thứ sáu, Gouyave thành một vỉa nướng dài cả phố — cá lionfish, lambi (conch), bánh mì quả và ban nhạc địa phương giữa các quầy kéo cả duyên hải tây vào thị trấn cho Fish Friday. Chúa nhật là giờ oil-down: nồi hầm bánh mì quả, thịt muối và nước cốt dừa sôi liu riu trên lửa sân trong khi hàng xóm lục tục kéo đến.",
    "upsides": [
      "Vòng cát trắng dài của Grand Anse trao cho thủ phủ một ngoại ô biển — êm, tắm được, trải quán ăn giá nhẹ nhàng.",
      "Hồ miệng núi lửa Grand Etang cùng đàn khỉ mona cách thị trấn nửa giờ lái xe, kèm cả rừng mưa.",
      "Carnival Spicemas tháng 8 giữ sống truyền thống jab-jab (hóa trang quỷ) trong một lễ hội đường phố đặc trưng nhất khu vực."
    ],
    "downsides": [
      "Cô lập, chi phí nhập khẩu và logistics mùa bão; nhịp học kỳ đại học định hình St George's.",
      "Nhiều cửa hàng giữ giờ đảo nhỏ — đóng sớm, thứ bảy chạy nửa tốc độ — nên việc lỡ hẹn nghĩa là chờ khung sau.",
      "Ca y tế nghiêm trọng thường đồng nghĩa một chuyến bay — sang Trinidad, Barbados hay Miami — nên tính toán điều đó là một phần của cư trú."
    ]
  },
  "Haiti": {
    "tagline": "Một di sản nghệ thuật và văn hóa đầy tự hào, được nuôi bằng đời sống cộng đồng bền bỉ.",
    "realityCheck": "An ninh, hạ tầng và khả năng tiếp cận y tế biến động rất lớn; hãy tra cứu hướng dẫn chính thức hiện hành.",
    "culture": "Giữa những áp lực gay gắt, một nền văn hóa phi thường vẫn giữ: tiếng Kreyòl (ngôn ngữ Creole) gánh cả đường phố trong khi tiếng Pháp giữ phần giấy tờ, còn đời gia đình xoay quanh lakou — khoảng sân chung của cả dòng họ. Vodou tồn tại như một tôn giáo sống bằng trống, hát và bổn phận, được tôn trọng công khai bên cạnh các thánh Công giáo. Các nghề thủ công — điêu khắc thùng phuy đập dập, cờ đính sequin — vẫn được làm tay cho một nghề tồn tại lâu hơn bất kỳ khủng hoảng nào.",
    "people": "Người Haiti thẳng, dí dỏm và bám rất chặt vào phẩm giá — lòng hiếu khách trụ qua thời khó vì việc cho khách ăn là điều không thể thảo luận. Sự ấm áp đi kèm thẳng thắn; bạn sẽ được nghe chính xác điều người ta nghĩ. Một nỗ lực nói Kreyòl mở những cánh cửa mà sự lịch sự đơn thuần không bao giờ chạm tới.",
    "costOfLiving": "Ở các thị trấn tỉnh lẻ, sinh hoạt có thể rẻ đến khó tin — nông sản chợ, đồ ăn đường và tiền nhà nằm gần đáy khu vực — nhưng giá hiện nay dao động rất mạnh theo điều kiện nguồn hàng. Mọi thứ nhập khẩu — xăng dầu, gas nấu ăn, thuốc, hàng đóng gói — có thể khan hiếm hoặc giá nhảy vọt, nên lập ngân sách là việc mỗi tuần một lần.",
    "workday": "Bất ổn ở Port-au-Prince hiện định hình ngày làm nhiều hơn cả đồng hồ: các chuyến đi được sắp trong lúc ban ngày, tap-tap (xe taxi ghép sơn rực rỡ) chạy các tuyến chính, còn những khu chợ như Croix-des-Bossales tập trung mua bán sớm nhất. Giờ hành chính Mon–Fri vẫn có, nhưng phần lớn sinh kế là sạp chợ, xe moto taxi và mặt tiền bán lẻ.",
    "evening": "Ở thủ đô, việc riêng và những chuyến viếng thăm gói lại trước khi trời tối, còn đời xã giao rút vào trong nhà hoặc các khu phố quen thuộc. Ở xa hơn, domino quán rum gánh các tối thường; vào mùa Chay, các nhóm rara — kèn, trống cùng kèn tre — làm chủ đường đêm.",
    "upsides": [
      "Citadelle Laferrière, pháo đài núi khổng lồ do nước cộng hòa da đen tự do đầu tiên dựng lên, vẫn trấn giữ đỉnh phía bắc như một di tích quốc gia.",
      "Châu Mỹ không nơi nào khác giữ ngôn ngữ, tôn giáo và nghệ thuật thị giác gốc châu Phi nguyên vẹn và trung tâm đến thế trong đời thường.",
      "Nhịp thường ngày ở tỉnh vẫn trôi — ngày chợ, Chúa nhật nhà thờ, bóng đá trên bất kỳ mảng đất bằng nào — và đó là nhịp mà phần lớn người dân nắm giữ."
    ],
    "downsides": [
      "An ninh, hạ tầng và khả năng tiếp cận y tế biến động rất lớn; hãy tra cứu hướng dẫn chính thức hiện hành.",
      "Dòng điện nhà nước chập chờn ngay cả nơi có điện, nên máy phát rền vang qua mọi khu compound và cơ sở nào nổi tiền mua xăng.",
      "Hàng xăng và gas nấu ăn tái diễn không báo trước; những gia đình xoay được vẫn giữ bồn chứa cùng nguồn dự phòng."
    ]
  },
  "Jamaica": {
    "tagline": "Quê nhà của reggae: cà phê Blue Mountain, văn hóa đồ ăn đường và nguồn năng lượng sáng tạo khó lẫn.",
    "realityCheck": "Tình hình an ninh khác nhau rất gắt theo khu phố; an toàn chỗ ở và hướng dẫn bản địa hiện hành có tầm trọng.",
    "culture": "Âm nhạc vận hành như hạ tầng thường ngày — ska và rocksteady đặt nền groove cả thế giới mượn, còn hòn đảo chưa từng ngừng chơi nó. Rastafari đậm vào đời thường vượt xa biểu tượng, từ bếp ital (thuần tự nhiên, không chế biến sẵn) đến nhịp giữ Sabbat có chủ ý của một số gia đình. Văn hóa nhà thờ sâu không kém: đồ Chúa nhật nghĩa là đúng nghĩa đen, còn các đêm tập gospel gánh giữa tuần.",
    "people": "Tán thưởng là nhạc cụ quốc dân — khơi ngôn lẹ, trêu chọc là sự thương, còn im lặng giữa nhóm bị đọc là có chuyện chẳng lành. Sự ấm áp đến ngay; niềm tin phải kiếm bằng sự đều đặn. 'Irie' (mọi thứ ổn, trong lành) là lời chúc tiêu chuẩn, còn sống cho xứng lời đó là một kỳ vọng xã hội thật.",
    "costOfLiving": "Ngoài các enclave resort, sinh hoạt dễ chịu: nông sản chợ rẻ, đồ ăn đường là nguyên bữa chỉ vài USD, còn đi lại địa phương tốn vài đồng xu. Tạp hóa nhập khẩu, hàng hiệu và xăng mang markup container, còn một căn hộ Kingston tạm được với an ninh thật chạy nửa trên của dải giá.",
    "workday": "Văn phòng Kingston chạy khoảng 8:30–4:30 với bữa trưa từ quán cơm — gà kho nâu, cơm đậu — cùng một quầy patty trong tầm bước chân. Một phần khối lượng việc làm phi chính thức và chạy theo đồng hồ riêng: sạp chợ, taxi tuyến, chảo jerk, cửa hàng, nơi 'soon come' ít là cái cớ hơn là một lịch trình.",
    "evening": "Các quầy rượu ven đường kín chỗ bằng domino — tiếng dội của quân thắng gần như là một nhịp trống — trên nền Red Stripe, Dragon Stout, hay một 'nip' rượu trắng. Cuối tuần dành cho các phiên dancehall phố và sound system trên bãi trống, chảo jerk nướng đến khi đám đông thưa.",
    "upsides": [
      "Reggae có hạng mục di sản UNESCO, còn Kingston vẫn vận hành những phòng thu, bảo tàng và tiệm đĩa đã dựng nên nó.",
      "Kho tàng món ăn là một riêng — bữa sáng ackee với cá muối, nước soursop từ quầy trái cây, một nền ẩm thực đầy bản lĩnh quốc gia.",
      "Mỗi ngày có chuyến không nghỉ tới New York, Toronto và London, giữ các tuyến kiều hối luôn đầy và vé cạnh tranh."
    ],
    "downsides": [
      "Tình hình an ninh khác nhau rất gắt theo khu phố; an toàn chỗ ở và hướng dẫn bản địa hiện hành có tầm trọng.",
      "Hàng nhập siêu thị đắt đỏ — hàng đóng gói, thực phẩm hiệu và xăng dầu đều mang giá cước container.",
      "Tháng 6 tới tháng 11, cả đảo đều chớp mắt canh hướng bão, với tấm bạt che và bồn nước là việc thường niên."
    ]
  },
  "Saint Kitts and Nevis": {
    "tagline": "Liên bang hai đảo gọn: lịch sử pháo đài, leo đỉnh và một cộng đồng expat nhỏ.",
    "realityCheck": "Logistics đảo nhỏ, mùa bão và y tế chuyên sâu giới hạn.",
    "culture": "Hai đảo, hai tính cách: St. Kitts sống bằng paycheck chính quyền và du lịch trong khi Nevis canh giữ một bản sắc chậm, tự túc mà họ tự hào lộ liễu. Lễ hội Culturama mùa hè của Nevis giữ sống lễ hóa trang gốc châu Phi quanh mùa giải phóng nô lệ. Nhà thờ vẫn dựng khung tuần trên cả hai đảo, còn lời mời Chúa nhật là sự kiện xã hội neo của cả tuần.",
    "people": "Mạng lưới nhà thờ đảm nhiệm phần giới thiệu — liên bang nhỏ đến mức một người mới đến trong tháng đã thành gương mặt quen. Dân lịch sự, lẹ tay trêu, rộng lượng với chỉ đường, tán chuyện và xoài từ vườn. Người Nevis và người Kitts sẵn sàng giải thích vì sao đảo của họ tốt hơn.",
    "costOfLiving": "Nông sản và cá tươi vẫn dễ chịu, trong khi mọi thứ đóng gói hay máy móc đi container về và được định giá như thế. Căn hộ Basseterre nằm giữa dải, Nevis giảm nhẹ chút tiền nhà, còn nhà ở khu biệt thự chạy sát trần. Điện nước và xăng nhập khẩu thiên đắt.",
    "workday": "Đường mía khép năm 2005, nên nhịp đồn điền xưa nhường chỗ cho ngày làm gọn quanh chính quyền và bán lẻ ở Basseterre — bàn giấy và cửa hàng khoảng 8:00–4:00, kèm việc du lịch dọc các resort bán đảo đông nam. Tuyến đường sắt mía cũ nay chạy tour ngắm cảnh trên chính ray đó.",
    "evening": "Đêm thứ sáu chạy từ Basseterre ra dải Strip tại Frigate Bay — hàng chuỗi quầy bãi biển, tôm hùm nướng, soca cùng ly 'Ting with a Sting' (rum địa phương pha soda bưởi). Chúa nhật lặng hơn: nồi goat-water sau lễ, cricket trên TV cùng những sân nhà.",
    "upsides": [
      "Pháo đài Brimstone Hill, 'Gibraltar Tây Ấn' thế kỷ 18, là thành lũy UNESCO có tầm nhìn cảng, đủ cho một chiều thong thả.",
      "Liên bang vận hành chương trình đầu tư lấy quốc tịch đầu tiên của khu vực, từ năm 1984.",
      "Suối nước nóng Bath của Nevis đã hút người tắm từ thế kỷ 18; chuyến ngâm vẫn là nghi thường nhật của khu."
    ],
    "downsides": [
      "Logistics đảo nhỏ, mùa bão và y tế chuyên sâu giới hạn.",
      "Lộ nghề hẹp — chính quyền, du lịch, ngân hàng và y tế chi phối, còn các lộ tham vọng thường dẫn ra khỏi đảo.",
      "Đoạn vượt biển giữa St. Kitts và Nevis hủy khi sóng lớn, nên kế hoạch liên đảo luôn kèm một điều khoản thời tiết."
    ]
  },
  "Saint Lucia": {
    "tagline": "Cặp đỉnh Piton, thung lũng núi lửa chạy xe lên được và nhịp sống bám chặt du lịch.",
    "realityCheck": "Giá nhập khẩu, nguy cơ bão và đường đảo quanh co làm chậm mọi chuỗi việc thường ngày.",
    "culture": "Được Anh và Pháp qua tay nhau đủ nhiều để cả hai để lại dấu sâu, hòn đảo giữ một văn hóa kép thật: tiếng Anh chạy văn phòng trong khi tiếng Kwéyòl (Creole gốc Pháp) gánh tiếng chợ và câu ngạn ngữ. Tháng 10 với Tháng Di sản Creole khép lại bằng Jounen Kwéyòl Chúa nhật cuối tháng, một ngày vải madras, trống và bàn ăn dài. Hai hội hoa La Rose và La Marguerite già hơn vẫn giữ riêng các ngày lễ nhạc và lụa satin của mình.",
    "people": "Bắt chuyện song ngữ là mặt bằng — người Lucian đổi giữa tiếng Anh và Kwéyòl ngay giữa câu và trông chờ sự ấm áp ở cả hai. Làng quê đón người mở nổi tiếng; thủ phủ lẹ hơn nhưng vẫn dễ. Lời mời đến một bữa nấu ven sông hay một đêm gây quỹ nhà thờ tới với bất kỳ ai xuất hiện lần thứ hai.",
    "costOfLiving": "Chợ nông sản giữ tuần nấu ở nhà dễ chịu, trong khi hàng nhập — xăng, hàng đóng gói, xe — mang markup nặng. Tiền nhà tách giữa các dãy Castries giá lao động và dải biệt thự-marina phía bắc chạm trần. Minibus dệt các tuyến chính bằng vài đồng xu lẻ.",
    "workday": "Du lịch đặt nhịp — các ca khách sạn và thuyền tour quanh Castries, Rodney Bay và Soufrière bắt đầu sớm, trong khi bàn chính quyền giữ giờ tuần chuẩn. Xe chở chuối vẫn dệt các đường quanh co từ thung lũng trồng, nên buổi sáng nông trại mở trước cả chuyến xe buýt.",
    "evening": "Jump-up chiếm đêm thứ sáu: Gros Islet chặn phố với xe, lấp bằng cá nướng, quán rum, DJ và trống thép tới khuya, trong khi Anse La Raye chạy bữa fish fry êm hơn cùng đêm. Các tối thường nghĩa là một buổi lime quán rum — bia Piton, domino cùng câu chuyện kéo dài.",
    "upsides": [
      "Marigot Bay vẫn là một trong những chỗ neo tránh bão kinh điển của Caribbean, vịnh rìa rừng ngập mặn kiêm luôn khung xã giao cuối tuần của giới thuyền.",
      "Bể bùn Soufrière mở cho dân cư vào các chiều thường — một spa vận hành thật nhờ chính ngọn núi lửa.",
      "Chim vẹt St Lucia đặc hữu hồi sinh từ bên bờ tuyệt chủng và nay là chim quốc gia — một thắng lợi bảo tồn bạn có thể phát hiện trên tán rừng mưa."
    ],
    "downsides": [
      "Giá nhập khẩu, nguy cơ bão và đường đảo quanh co làm chậm mọi chuỗi việc thường ngày.",
      "Dịch vụ dồn về Castries và miền bắc — từ Soufrière hay Vieux Fort, một hẹn chuyên khoa hay việc lớn nghĩa là đi trọn ngày.",
      "Sargassum mùa hè trôi dạt có thể vùi các bãi gió trong nhiều tuần, khiến cả bờ đông mùi theo."
    ]
  },
  "Saint Vincent and the Grenadines": {
    "tagline": "Đảo chính là một tảng núi lửa, rải rác qua ba mươi hai đảo nhỏ dành cho thuyền buồm.",
    "realityCheck": "Phun trào núi lửa đã buộc các cộng đồng phía bắc rời nơi ở, còn logistics phà định hình mọi thứ.",
    "culture": "Di sản Garifuna là xương sống quốc gia — đây là quê của người Black Carib; con cháu họ vẫn giữ ngôn ngữ, trống cùng nếp ăn uống trong các làng phía bắc. Cây bánh mì che nửa số sân, còn bánh mì nướng với cá chiên jack là đĩa Chúa nhật. Kingstown giữ chất cảng làm việc, chân thực và nhộn nhịp, trong khi các Grenadines phía nam gánh đời sống buồm của quần đảo.",
    "people": "Cộng đồng đứng trước mọi thứ ở đây — đỡ xách thùng, một chỗ mát, một bài giảng lịch sử không xin trên chuyến thuyền. Nhà thờ và mạng thuyền đánh cá tổ chức thế giới xã giao, còn người mới được kéo vào cả hai trong vòng một mùa. Niềm tự hào về sự tồn tại của hòn đảo — bão, phun trào, đủ thứ — bật ra rất sớm trong câu chuyện.",
    "costOfLiving": "Mảnh vườn và cây ăn trái giữ hóa đơn ăn nhẹ — bánh mì từ sân hàng xóm chỉ tốn một ân huệ — trong khi hàng nhập và xăng mang cước vận chuyển. Tiền nhà Kingstown khiêm tốn trong dải; các đảo Grenadine phía nam đắt hơn, phần lớn tiếp tế bằng thuyền.",
    "workday": "Kingstown nhỏ đến mức các việc chính quyền, ngân hàng và chợ chỉ cách một quãng đi bộ hay chuyến minibus — bàn giấy khoảng 8:00–4:00 với bữa trưa nấu thật. Buổi sáng nông trại trong các thung lũng Mesopotamia trồng chuối mở sớm hơn, còn mậu dịch phà-buồm của Bequia tự giữ lịch riêng.",
    "evening": "Tối quán rum — khói nướng, bia Hairoun cùng domino — gắn các ngày trong tuần về phía thứ sáu. Đến giữa tháng 12, lịch xoay cho Nine Mornings: từ mùng 16, dân Vincent dậy khoảng 4:00 sáng cho tắm biển, hòa nhạc phố và nước sorrel cùng gừng, rồi vẫn đi làm.",
    "upsides": [
      "Công viên biển Tobago Cays bảo vệ năm đảo nhỏ không người và các cạn cỏ rùa mà dân bản coi như quần đảo cuối tuần của chính họ.",
      "Lối mòn La Soufrière leo từ đồng qua rừng mây tới miệng crater còn hút khói — một trong những chặng nửa ngày sống động nhất vùng.",
      "Bờ biển Grenadines nuôi văn hóa bến cảng làm việc của thợ đóng thuyền, thuê thuyền và phà, thay vì bờ biển chỉ có resort."
    ],
    "downsides": [
      "Phun trào núi lửa đã buộc các cộng đồng phía bắc rời nơi ở, còn logistics phà định hình mọi thứ.",
      "Chiều sâu bán lẻ mỏng — một hoặc hai nhà nhập khẩu thường nắm trọn cả ngành hàng; 'hết hàng' có thể nghĩa là nhiều tuần.",
      "Nghề tư nhân khan hiếm; nền kinh tế làm việc chạy bằng chính quyền, nông trại, đánh cá và thương mại cảng."
    ]
  },
  "Trinidad and Tobago": {
    "tagline": "Đời sống đảo Caribbean, lễ hội rộn ràng và nền ẩm thực đa dạng.",
    "realityCheck": "Mức sống và an ninh khác nhau theo đảo và khu phố; hãy tra hướng dẫn bản địa.",
    "culture": "Carnival neo cả năm, nhưng tấm thảm sâu hơn là di sản kép: truyền thống Indo-Trinidadian chia lịch quốc gia — Divali là ngày nghỉ chính thức, còn các cuộc rước dẫn trống của Hosay lấp St. James mỗi Muharram — bên cạnh ngày giải phóng nô lệ. Pelau (gà và đậu trong một nồi caramel hóa) là tiêu chuẩn ngày biển, còn Tobago, hòn đảo chị chậm rãi, giữ 'Sunday School' phố Buccoo kéo tới sáng thứ hai.",
    "people": "Hội thoại với người Trini là một nghề — buổi tụ không có giờ kết, còn giữ chuyện trò qua nửa đêm là một niềm tự hào. Hài lẹ và đa tầng dẫn chiếu, nhảy giữa tiếng Anh và Creole Trinbagonian, còn người ngoài được đón qua món ăn trước tiên. Tình bạn Indo và Afro-Trinidadian đan nhịp nhàng nơi làm việc, trường học và nhà biển.",
    "costOfLiving": "Kệ cao nhất khu vực trong số các đảo này, được làm dịu bằng đồ ăn bản địa rẻ và chợ nông sản. Tạp nhập khẩu và hàng hiệu đắt, còn ngoại ô tây Port of Spain định giá sát trần, trong khi phía đông đổi tiền nhà rẻ hơn cho quãng đi làm dài hơn.",
    "workday": "Port of Spain chạy giờ cao điểm hành chính Mon–Fri — bàn giấy khoảng 8:00–4:30, xe dồn dọc Hành lang Đông–Tây, cùng một điểm dừng doubles (đậu gà cà ri trong bara chiên) cho bữa sáng trên đường đi. Việc năng lượng và chính quyền chi phối paycheck; quanh Carnival — thứ hai thứ ba trước Ash Wednesday — năng suất được biết là nghiêng về fete và chuẩn bị trang phục.",
    "evening": "Liming — nghệ thuật quốc dân của việc tụ nhàn rỗi không giờ kết — diễn ra tại quán rum, dải Ariapita Avenue, hay trên hiên ai đó với lon Carib. Các xe doubles làm mậu dịch sau giờ làm đều đặn; vào mùa Carnival, buổi lime hiếm khi bắt đầu trước nửa đêm.",
    "upsides": [
      "Nền kinh tế dầu khí chống lưng thị trường việc làm công nghiệp hóa nhất Caribbean — năng lượng, tài chính, chế tạo cùng một khu vực tư thật.",
      "Ẩm thực dệt các mối chỉ Ấn, châu Phi, Hoa và Syria-Lebanon trong một hệ sinh thái đồ ăn đường không lặp lại đâu khác trong vùng.",
      "Cơ sở St. Augustine của Đại học Tây Ấn neo một đời học thuật và văn hóa thật trên đảo."
    ],
    "downsides": [
      "Mức sống và an ninh khác nhau theo đảo và khu phố; hãy tra hướng dẫn bản địa.",
      "Mùa mưa làm ngập các phố thấp Port of Spain với độ đều khiến dân bản coi như thường.",
      "Nước máy đến theo lịch thất thường ở nhiều khu, nên bồn chứa trên mái là thiết bị gia đình tiêu chuẩn."
    ]
  },
  "Puerto Rico": {
    "tagline": "Phố pháo đài năm thế kỷ, salsa và reggaetón, rừng mưa trên bãi biển và thư Mỹ đến tận cửa.",
    "realityCheck": "Mất điện lặp lại, mùa bão mỗi thu và tội phạm vùng đô thị cao hơn hẳn mức đất liền Mỹ.",
    "culture": "Old San Juan là thành phố thuộc địa dễ đi bộ nhất Caribbean — tường pháo đài pastel, đá cuội xanh, một pháo đài bạn có thể dạo lúc hoàng hôn — nhưng dòng sâu hơn là âm nhạc: salsa được nuôi tại đây trước khi New York hoàn thiện nó, reggaeton sinh ra tại đây trọn vẹn, còn lễ thánh bảo hộ mỗi thị trấn chặn phố cả cuối tuần với quầy hàng, nhạc và thịt heo quay. Giáng sinh kéo dài từ tháng 11 đến Ngày Ba Vua trong tháng 1.",
    "people": "Nhiệt tình kiểu Boricua đến lẹ — bạn được cho ăn trước khi bị hỏi bất cứ điều gì, được rót về bàn domino trong vòng vài phút và được chỉnh tiếng Tây Ban Nha trong lúc đi. Gia đình là hạ tầng: Chúa nhật nghĩa là lechón trên núi hay một ngày biển ba thế hệ, còn ai cũng sẽ kể quán kiosk ưng nhất của họ. Bản sắc được bênh cả tự hào lẫn chính trị, người Mỹ và người Puerto Rico cùng một lúc.",
    "costOfLiving": "Mức giá bám sát đất liền Mỹ — dollar là tiền nội địa, các kho hàng và app giao hàng đều chạy, nhưng điện và tạp hóa nhập cao. Tiền nhà nhảy gắt theo khu: Condado và Ocean Park định giá như một thành phố Mỹ trong khi Caguas và Bayamón giữ mức dễ chịu thật, còn làn sóng dân đất liền gần đây đẩy những dãy ưng nhất lên thêm một bậc.",
    "workday": "Tuần chạy theo giờ kiểu Mỹ — bàn giấy và cơ quan từ 8:00 đến 5:00, với giờ cao điểm dồn trên cao tốc vào San Juan. Thị trường việc làm bám vào chức chính quyền, nhà máy dược và du lịch; bữa trưa nghĩa là một vòng cà phê sữa đàng hoàng với pan sobao, còn các buổi họp trôi giữa tiếng Tây Ban Nha và Anh không ai cần điểm chuyển.",
    "evening": "Từ thứ năm đến Chúa nhật, La Placita ở Santurce đổi từ chợ nông sản thành sàn salsa ngoài trời, còn các quầy Old San Juan đi xa hơn cả nếp đất liền. Các tối thường giản hơn — domino tại một chinchorro, cây piragua với bọn trẻ, bãi biển lúc vàng gọi; trong mọi sân, ếch coquí khởi dàn hợp xướng đêm đúng giờ.",
    "upsides": [
      "Với công dân Mỹ, đây là một chuyến dời nội địa — không visa, không hải quan, cùng dollar, ngân hàng và gói điện thoại tiếp tục như cũ.",
      "El Yunque là rừng mưa nhiệt đới duy nhất trong hệ lâm nghiệp Mỹ; nó cách các thị trấn biển chưa tới một giờ lái.",
      "Ba trong số những vịnh phát quang sáng nhất thế giới tỏa quanh hòn đảo, dẫn dắt bởi Mosquito Bay ở Vieques."
    ],
    "downsides": [
      "Mất điện lặp lại, mùa bão mỗi thu và tội phạm vùng đô thị cao hơn hẳn mức đất liền Mỹ.",
      "Hệ lưới còn mong manh đến mức máy phát và bộ ổn áp là thiết bị gia đình tiêu chuẩn; một cơn bão ngang qua vẫn có thể làm tối cả ngoại ô.",
      "Các dải ven biển ưa chuộng bởi dân mới đã thấy tiền nhà vượt xa lương bản địa, một căng thẳng mà mọi người đến đều thừa kế."
    ]
  }
};
