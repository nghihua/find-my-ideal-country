import type { UIStrings } from './en';

// Vietnamese UI dictionary — Phase 1 complete: every key translated.
// Key set and order must stay identical to en.ts (enforced by
// scripts/qc-i18n.mjs, since Vite strips types without checking them at
// build time).

export const vi: UIStrings = {
  'layout.title':
    'Tìm quốc gia lý tưởng của bạn — Bản đồ tương tác về lối sống & định cư toàn cầu',
  'layout.description':
    'So sánh 200 quốc gia trước khi bạn chuyển đến nơi mới: bản đồ thế giới tương tác, trắc nghiệm lối sống và hồ sơ định cư chân thực cho từng điểm đến.',
  'header.brand.title': 'Tìm quốc gia lý tưởng của bạn',
  'header.brand.subtitle': 'Sổ tay sống & định cư khắp thế giới',
  'header.resetZoom': 'Đặt lại mức thu phóng',
  'header.searchLabel': 'Tìm kiếm điểm đến',
  'header.searchPlaceholder': 'Tìm điểm đến...',
  'header.langSwitch': 'Đổi ngôn ngữ',
  'panel.regionFallback': 'Khu vực',
  'panel.titleFallback': 'Tên quốc gia',
  'panel.taglineFallback': 'Tóm tắt ngắn về chất riêng của nơi này.',
  'panel.closeTitle': 'Đóng bảng thông tin',
  'panel.metricCost': 'Chi phí mỗi tháng',
  'panel.metricWorkLife': 'Cân bằng công việc–cuộc sống',
  'panel.metricSafety': 'An toàn',
  'quiz.fab': 'Tìm quốc gia lý tưởng của bạn',
  'quiz.modalTitle': 'Trắc nghiệm lối sống & định cư',
  'quiz.modalSubtitle': 'Tìm mái nhà lý tưởng của bạn giữa hơn 170 điểm đến',
  'quiz.closeTitle': 'Đóng',
  'quiz.subtitleStage':
    'Giai đoạn {stage}: {stageName} • Câu hỏi {n} trên {total}',
  'quiz.skipFilter': 'Bỏ qua yếu tố này',
  'quiz.prevQuestion': 'Câu hỏi trước',
  'quiz.continueSelections': 'Tiếp tục',
  'quiz.skipPractical': 'Bỏ qua',
  'quiz.resultSubtitle': 'Điểm đến định cư phù hợp với bạn',
  'quiz.emptyFilters':
    'Không có điểm nào khớp với các bộ lọc này. Hãy làm lại trắc nghiệm và nới lỏng một hoặc vài tiêu chí loại.',
  'quiz.matchPercent': '{percent}% phù hợp định cư',
  'quiz.youShouldLiveIn': 'Bạn nên sống ở {name}!',
  'quiz.monthlyBudget': 'Ngân sách mỗi tháng',
  'quiz.workLife': 'Cân bằng công việc–cuộc sống',
  'quiz.safetyScore': 'Điểm an toàn',
  'quiz.weatherIn': 'Thời tiết điển hình ở {name}',
  'quiz.weatherNote':
    'Dải nhiệt theo mùa chỉ mang tính gần đúng; điều kiện thực tế thay đổi theo vùng, độ cao và mùa.',
  'quiz.whyFits': 'Vì sao {name} hợp với lối sống của bạn:',
  'quiz.balancedFallback':
    'Chất lượng sống cân bằng, tương xứng với ưu tiên lối sống của bạn',
  'quiz.fromProfile': 'Từ hồ sơ {name}:',
  'quiz.profileHighlights': 'Điểm nổi bật của hồ sơ',
  'quiz.realityCheckTitle': 'Đánh giá thực tế và các đánh đổi:',
  'quiz.realityCheckFallback':
    'Nên chuẩn bị sẵn vốn ngoại ngữ và kiên nhẫn với giấy tờ hành chính.',
  'quiz.exploreOnMap': 'Khám phá {name} trên bản đồ',
  'quiz.runnerUp': 'Á quân: {name} ({percent}%)',
  'quiz.wildcard': 'Quân bài bất ngờ: {name} ({percent}%)',
  'quiz.compareTopTwo': 'So sánh hai điểm dẫn đầu',
  'quiz.downloadCard': 'Tải thẻ chân dung cá nhân',
  'quiz.exploreAllMatches': 'Xem tất cả kết quả khớp trên bản đồ',
  'quiz.comparisonTitle': '{a} so với {b}',
  'quiz.comparisonFactor': 'Tiêu chí',
  'quiz.rowMonthlyCost': 'Chi phí mỗi tháng',
  'quiz.rowTransit': 'Di chuyển',
  'quiz.rowSundayRhythm': 'Nhịp ngày Chủ nhật',
  'quiz.rowTypicalWeather': 'Thời tiết điển hình',
  'quiz.rowHealthcare': 'Y tế',
  'quiz.rowVisaRoute': 'Tuyến visa',
  'quiz.rowTaxProfile': 'Chế độ thuế',
  'quiz.rowTapWater': 'Nước máy',
  'quiz.rowAirQuality': 'Chất lượng không khí',
  'quiz.rowNaturalHazards': 'Thiên tai',
  'quiz.rowTradeOff': 'Đánh đổi',
  'quiz.rowRealityCheck': 'Đánh giá thực tế',
  'quiz.comparisonNote':
    'Chỉ mang tính sàng lọc ở cấp quốc gia: điều kiện visa, chế độ thuế, khả năng tiếp cận y tế và điều kiện môi trường thay đổi theo từng người, từng nơi. Hãy xác minh thông tin mới nhất cho hoàn cảnh và điểm đến của bạn.',
  'quiz.sourceN': 'Nguồn {n}',
  'quiz.visaResidency': 'Đã có quyền cư trú (không tính điểm)',
  'quiz.visaNotAnswered': 'Chưa trả lời',
  'quiz.shareHeading': 'ĐỐI KHỚP TOÀN CẦU CỦA TÔI',
  'quiz.shareMyTitle': 'Kết quả toàn cầu của tôi: {name}',
  'quiz.shareText': '{percent}% khớp — {name}',
  'quiz.sharePersonaLine': 'Chân dung {persona}',
  'quiz.persona.carFree': 'Dân thành thị không ô tô',
  'quiz.persona.streetLife': 'Nghiện phố',
  'quiz.persona.globalCitizen': 'Công dân toàn cầu',
  'quiz.retake': 'Làm lại trắc nghiệm với lựa chọn khác',
  'reason.budget.lean':
    'Chi phí cực kỳ hợp lý (<$1,400/tháng), đủ để sống thoải mái',
  'reason.budget.moderate': 'Chi phí sinh hoạt tầm trung, dễ chịu ({cost})',
  'reason.budget.premium':
    'Dịch vụ công đẳng cấp thế giới và hạ tầng đạt chuẩn cao',
  'reason.lgbtq.leader':
    'Dẫn đầu thế giới về bình đẳng, với đầy đủ quyền kết hôn và bảo vệ dân sự',
  'reason.lgbtq.protected': 'Môi trường được pháp luật bảo vệ và thân thiện',
  'reason.transit.walkableRail':
    'Thành phố đặt người đi bộ lên hàng đầu cùng mạng lưới đường sắt dày đặc',
  'reason.transit.motorbike':
    'Di chuyển bằng xe máy linh hoạt, kết nối đường phố nhanh gọn',
  'reason.transit.car':
    'Đường cao tốc thoáng đãng để ngắm cảnh và đi xe riêng dễ dàng',
  'reason.convenience.high':
    'Cửa hàng tiện lợi mở 24/7, ứng dụng giao hàng tốc độ và dịch vụ giá phải chăng',
  'reason.convenience.diy':
    'Văn hóa tự lực mạnh mẽ, tôn trọng quỹ thời gian riêng của người làm dịch vụ',
  'reason.weekend.vibrant':
    'Buôn bán sôi động cả 7 ngày trong tuần, chợ đêm nhộn nhịp và điểm vui chơi thâu đêm',
  'reason.weekend.quiet':
    'Ngày Chủ nhật yên bình và những buổi tối khu dân cư tĩnh lặng',
  'reason.climate.tropical': 'Nắng nhiệt đới quanh năm và lối sống ngoài trời',
  'reason.climate.fourSeasons':
    'Bốn mùa đậm nét với mùa thu se lạnh và mùa đông có tuyết',
  'reason.climate.mildCoastal':
    'Khí hậu ôn hòa ven biển với làn gió biển mát lành',
  'reason.religion.secular': 'Xã hội thế tục, không áp lực tôn giáo',
  'reason.religion.tradition':
    'Truyền thống văn hóa phong phú và lễ hội đa dạng, không ràng buộc tôn giáo gắt gao',
  'reason.religion.prominent':
    'Cộng đồng tâm linh năng động với các cơ sở tôn giáo dễ tiếp cận',
  'reason.openness.cosmopolitan':
    'Xã hội đa văn hóa, tiếng Anh thông dụng và dễ dàng hòa nhập',
  'reason.openness.reserved':
    'Trải nghiệm bản địa chân thực, ưu tiên sống như người dân hơn là hạ tầng dành cho expat',
  'reason.fabric.woven5':
    'Cộng đồng gắn kết chặt chẽ, hiếu khách một cách tự nhiên',
  'reason.fabric.woven4':
    'Môi trường xã hội ấm áp, dễ gần, kết nối hàng xóm nhẹ nhàng',
  'reason.fabric.balanced3':
    'Xã hội cân bằng: lịch sự, thân tình đúng lúc và tôn trọng ranh giới riêng tư',
  'reason.fabric.private1':
    'Văn hóa đề cao riêng tư: không gian cá nhân và ranh giới lặng lẽ luôn được tôn trọng',
  'reason.fabric.private2':
    'Xã hội lễ phép, giữ khoảng cách, không hỏi han đời tư',
  'reason.density.bustling':
    'Đô thị nhộn nhịp, mật độ cao với nhịp sống đường phố trẻ trung',
  'reason.density.spacious':
    'Cảnh quan yên bình, thưa thớt người, nhiều khoảng thở',
  'reason.career.nomadRemote':
    'Có tuyến visa làm việc từ xa chính thức; điều kiện vẫn phụ thuộc hoàn cảnh của bạn',
  'reason.career.nomadLimited':
    'Có đường làm việc từ xa nhưng giới hạn thật sự; hãy kiểm tra yêu cầu thu nhập và thời gian lưu trú',
  'reason.career.corporate':
    'Trung tâm tập đoàn quốc tế với triển vọng mức lương cao',
  'reason.priority.safety':
    'An toàn cá nhân dẫn đầu thế giới (An toàn: {value})',
  'reason.priority.foodie':
    'Truyền thống ẩm thực được tôn vinh và nền văn hóa ăn uống nổi tiếng',
  'reason.priority.wlb':
    'Cân bằng công việc–cuộc sống xuất sắc, giờ riêng của người lao động được bảo vệ ({value})',
  'reason.priority.nature':
    'Từ ngay nơi ở đã chạm tới núi non, đường bờ biển và vườn quốc gia ngoạn mục',
  'reason.priority.warmth': 'Cộng đồng gắn kết, hàng xóm hóa bạn bè',
  'reason.visa.available':
    'Có lộ trình chính thức cho con đường định cư này; điều kiện vẫn phụ thuộc hoàn cảnh của bạn',
  'reason.visa.limited':
    'Có lộ trình giới hạn cho một số đối tượng; hãy kiểm tra yêu cầu về hộ chiếu, độ tuổi, thu nhập và người bảo trợ',
  'evidence.costOfLiving': 'Chi phí sinh hoạt',
  'evidence.eveningRhythm': 'Nhịp buổi tối',
  'evidence.people': 'Con người',
  'evidence.workday': 'Ngày làm việc',
  'tradeoff.similarCost': 'Tầm chi phí tương đương',
  'tradeoff.costTier': '{low} thuộc tầm chi phí thấp hơn; {high} đắt hơn',
  'tradeoff.bothTransit': 'Cả hai đều có {transit}',
  'tradeoff.transitPair': '{a}: {transitA}; {b}: {transitB}',
  'badge.transit.walkableRail': 'Đi bộ thuận tiện & đường sắt',
  'badge.transit.motorbikeActive': 'Xe máy & phố sôi động',
  'badge.transit.carDependent': 'Phụ thuộc ô tô & đường cao tốc',
  'badge.transit.default': 'Giao thông đô thị hỗn hợp',
  'badge.convenience.max': 'Giao hàng & tiện lợi 24/7',
  'badge.convenience.high': 'Dịch vụ tiện lợi cao',
  'badge.convenience.standard': 'Dịch vụ cân bằng tiêu chuẩn',
  'badge.convenience.low': 'Lương cao, tự lực trong sinh hoạt',
  'badge.lgbtq.tier5': 'Bình đẳng dẫn đầu thế giới',
  'badge.lgbtq.tier4': 'Được pháp luật bảo vệ & an toàn',
  'badge.lgbtq.tier3': 'Xã hội khoan dung & an toàn',
  'badge.lgbtq.tier2': 'Pháp luật bảo thủ',
  'badge.lgbtq.tier1': 'Quyền hạn chế theo pháp luật',
  'badge.climate.tropical': 'Nắng ấm nhiệt đới',
  'badge.climate.warmSun': 'Khí hậu ấm, nhiều nắng',
  'badge.climate.fourSeasons': 'Bốn mùa phân biệt rõ',
  'badge.climate.coldWinter': 'Mùa đông giá lạnh có tuyết',
  'badge.climate.mildCoastal': 'Không khí ôn hòa ven biển',
  'badge.climate.default': 'Khí hậu ôn hòa',
  'badge.weekend.vibrant': 'Sôi động 7 ngày / Chủ nhật vẫn mở cửa',
  'badge.weekend.quiet': 'Chủ nhật yên nghỉ (cửa hàng đóng cửa)',
  'badge.weekend.default': 'Nhịp cuối tuần chuẩn mực',
  'dossier.notSourced': 'Chưa có nguồn dữ liệu',
  'dossier.scorecardTitle': 'Bảng điểm các yếu tố lối sống & sinh hoạt',
  'dossier.scorecardNote': 'Nhịp sống thực tế',
  'dossier.mobility': 'Di chuyển',
  'dossier.dailyConvenience': 'Tiện lợi hàng ngày',
  'dossier.climateReality': 'Thực tế khí hậu',
  'dossier.weekendSunday': 'Cuối tuần & Chủ nhật',
  'dossier.socialRights': 'Quyền lợi xã hội & an toàn',
  'dossier.practicalTitle': 'Yếu tố định cư thực tế',
  'dossier.checked': 'Đã kiểm tra {date}',
  'dossier.dataNeedsSourcing': 'Dữ liệu cần kiểm chứng nguồn',
  'dossier.practicalDisclaimer':
    'Chỉ mang tính sàng lọc ở cấp quốc gia. Điều kiện đủ, chi phí, dịch vụ và môi trường có thể khác nhau theo từng người, từng nơi; hãy xác minh thông tin cho hoàn cảnh và điểm đến của bạn.',
  'dossier.visaRoutes': 'Tuyến visa',
  'dossier.healthcare': 'Y tế',
  'dossier.englishIndependence': 'Tự túc bằng tiếng Anh',
  'dossier.tapWater': 'Nước máy',
  'dossier.airQuality': 'Chất lượng không khí',
  'dossier.naturalHazards': 'Thiên tai',
  'dossier.taxProfile': 'Chế độ thuế',
  'dossier.sourceN': 'Nguồn {n}',
  'dossier.realityCheckTitle': 'Đánh giá thực tế và các đánh đổi:',
  'dossier.realityCheckFallback':
    'Giấy tờ hành chính, việc làm quen ngôn ngữ và phong tục vùng miền đòi hỏi sự kiên nhẫn và tinh thần học hỏi nơi bản địa.',
  'dossier.upsidesTitle': 'Điểm cộng',
  'dossier.downsidesTitle': 'Điểm trừ',
  'dossier.workdayTitle': 'Một ngày làm việc điển hình',
  'dossier.eveningTitle': 'Một buổi tối điển hình',
  'dossier.cultureTitle': 'Văn hóa',
  'dossier.peopleTitle': 'Con người & không khí xã hội',
  'dossier.socialFabricLabel': 'Liên kết cộng đồng:',
  'dossier.costOfLivingTitle': 'Chi tiết chi phí sinh hoạt',
  'dossier.learnMore': 'Tìm hiểu thêm về {name}',
  'dossier.onWikipedia': '{name} trên Wikipedia',
  'search.noResults': 'Không tìm thấy quốc gia phù hợp',
  'map.loading': 'Đang tải bản đồ thế giới...',
  'map.loadError':
    'Không tải được dữ liệu bản đồ. Vui lòng kiểm tra kết nối mạng.',
  'map.legendAriaLabel': 'Chú giải bản đồ kết quả trắc nghiệm',
  'map.legendTitle': 'Các quốc gia khớp với bạn',
  'map.legendTop5': 'Top 5 khớp nhất',
  'map.legend80': 'Khớp trên 80%',
  'map.legendNeutral': 'Trung lập / bị lọc',
  'map.tooltipFallback': 'Tên quốc gia',
  'app.unknownTerritory': 'Khu vực không xác định',
  'app.toast.zooming': 'Đang phóng to tới {name}...',
  'app.toast.showingProfile': 'Đang mở hồ sơ {name}',
  'author.activeProjectTitle': 'Dự án đang triển khai',
  'author.byPrefix': 'Bởi',
  'author.viewProfileTitle': 'Xem hồ sơ tác giả',
  'author.website': 'Trang web',
  'author.websiteTitle': 'Mở trang web cá nhân (nghihua.io.vn)',
  'author.contact': 'Liên hệ',
  'author.emailTitle': 'Gửi email (huanhatgianghi@gmail.com)',
  'author.modalTitle': 'Về người sáng tạo',
  'author.modalSubtitle': 'Thông tin tác giả & dự án',
  'author.closeTitle': 'Đóng',
  'author.close': 'Đóng',
  'author.role': 'Người tạo ra Find My Ideal Country',
  'author.bio':
    'Đam mê xây dựng các ứng dụng web dễ dùng, bản đồ tương tác và công cụ khám phá lối sống.',
  'author.emailLabel': 'Email',
  'author.copyEmailTitle': 'Sao chép địa chỉ email',
  'author.copy': 'Sao chép',
  'author.openMailTitle': 'Mở ứng dụng thư',
  'author.feedbackHeading': 'Bạn có góp ý hoặc đề xuất?',
  'author.feedbackBody':
    'Dù bạn muốn gợi ý điểm đến mới, cập nhật số liệu chi phí sinh hoạt hay kể lại hành trình định cư của chính mình, mọi chia sẻ đều luôn được chào đón!',
  'author.copiedToast': 'Đã sao chép địa chỉ email vào clipboard!',
  'author.emailFallbackToast': 'Email: {email}',
  'toast.default': 'Thông báo',
};
