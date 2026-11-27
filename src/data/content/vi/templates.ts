// Vietnamese mirror of REGIONAL_TEMPLATES (src/data/countries.ts) — Phase 2.
// Machine fields (cost, wlb, safety, dimensions) are copied verbatim from the
// English templates; only the prose fields are translated. Loaded lazily by
// loadContentLocale('vi') so English users never download this chunk. Any
// region missing here falls back to the English template per string.
//
// FALLBACK_PROSE_VI holds the interpolated scaffold sentences the assembler
// (globalCountries.ts, fallback path 3) wraps around template prose for
// map-only territories that have no dossier record in either locale.

import type { RegionalTemplate } from '../../countries';

export const REGIONAL_TEMPLATES_VI: Record<string, RegionalTemplate> = {
  "Europe": {
    cost: "$1,900 – $2,900/mo",
    wlb: "8.5 / 10",
    safety: "8.7 / 10",
    culture: "Nét lịch sử bản địa hiện rõ trong những quảng trường phố cổ chỉ đi bộ, văn hoá cà phê và tấm lưới an sinh xã hội dày dặn. Mỗi vùng một bản sắc, và niềm tự hào về ẩm thực cùng di sản địa phương ăn sâu đến mức khó nói gộp chung.",
    people: "Người ta coi trọng ranh giới giữa công việc và đời sống, phép lịch sự nơi công cộng, và những cuộc trò chuyện thật thay cho vài câu xã giao hời hợt. Thế hệ trẻ nói được vài ngoại ngữ là chuyện bình thường.",
    costOfLiving: "Từ vừa phải đến cao, tuỳ khoảng cách tới các thủ đô lớn. Y tế công và mạng lưới đường sắt giảm bớt sự phụ thuộc ô tô, dù nhà ở các trung tâm phố cổ vẫn đắt đỏ.",
    workday: "Chuẩn mực là tuần làm 37–40 giờ cân bằng, kỳ nghỉ năm hào phóng 25–30 ngày, và bữa trưa ngồi ăn đúng bữa thay vì ăn vội bên bàn làm việc.",
    evening: "Tối về, phố cổ đi bộ, quán bistro ven ngõ, công viên và các không gian văn hoá vẫn nhộn nhịp đến tận đêm khuya.",
    upsides: [
      "Thành phố đi bộ thuận tiện cùng kiến trúc cổ giàu lịch sử.",
      "Quyền lao động, y tế và giao thông công cộng đều chắc chắn.",
      "Cuối tuần tiện đường sang cả nước láng giềng.",
    ],
    downsides: [
      "Thủ tục hành chính và ngân hàng chậm rãi, nhiều vòng.",
      "Thuế thu nhập và thuế VAT cao.",
      "Mùa đông ở vĩ độ phương Bắc âm u kéo dài.",
    ],
    dimensions: {
      costIndex: 3,
      climate: 'four-seasons',
      transit: 'walkable-rail',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 4,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Thủ tục hành chính thường rất chậm, nhà cũ thường thiếu máy lạnh hiện đại, và ban ngày vào mùa đông ngắn dần một cách đáng kể."
  },
  "Asia": {
    cost: "$1,100 – $2,000/mo",
    wlb: "7.4 / 10",
    safety: "8.6 / 10",
    culture: "Xã hội thay đổi từng ngày, nơi chùa cổ và nếp gia đình nhiều đời đứng cạnh những đường chân trời thành phố tương lai. Ẩm thực chính là thứ ngôn ngữ yêu thương phổ cập nhất.",
    people: "Ấm áp, hiếu khách và nặng nghĩa cộng đồng, tôn trọng người lớn tuổi, và mang theo một khí thế khởi nghiệp rất trẻ trung.",
    costOfLiving: "Đáng tiền nổi tiếng — đồ ăn đường phố tươi, dịch vụ trong nước và phương tiện công cộng đều dễ chịu, trong khi hàng xa xỉ nhập khẩu thì đắt hơn.",
    workday: "Nhịp làm việc nhanh và tràn đầy năng lượng, thường bắt đầu sớm, có bữa trưa cùng đồng nghiệp và kết nối số mạnh mẽ.",
    evening: "Chợ đêm tấp nập, quán cà phê mở khuya, cả gia đình dạo công viên, và các khu ẩm thực đường phố sôi động.",
    upsides: [
      "Ẩm thực đa dạng và dễ tiếp cận đến khó tin.",
      "Hạ tầng hiện đại hoá nhanh cùng lòng hiếu khách nồng hậu.",
      "Đường phố buổi tối an toàn và nhộn nhịp.",
    ],
    downsides: [
      "Nắng nóng nhiệt đới, mùa mưa gió mùa, hay chất lượng không khí đô thị.",
      "Rào cản tiếng nói ngoài các trung tâm thương mại lớn.",
      "Kẹt xe dày đặc ở các siêu đô thị.",
    ],
    dimensions: {
      costIndex: 2,
      climate: 'tropical',
      transit: 'mixed-transit',
      convenienceScore: 5,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 4,
      lgbtqTier: 3,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 4,
      paceScore: 4,
    },
    realityCheck: "Độ ẩm nhiệt đới hay mùa mưa gió mùa cần thời gian làm quen, và ngoài hành lang du lịch thì thường phải biết tiếng địa phương."
  },
  "Americas": {
    cost: "$1,400 – $2,600/mo",
    wlb: "7.8 / 10",
    safety: "7.2 / 10",
    culture: "Rực rỡ và đa dạng, in hằn dấu ảnh bản địa, châu Âu và các luồng nhập cư. Âm nhạc, tiệc nướng ngoài trời và những buổi quây quần gia đình là mấu chốt của đời sống cộng đồng.",
    people: "Cởi mở, hay trò chuyện và dễ mến — quen bạn mới đến rất tự nhiên.",
    costOfLiving: "Từ rất dễ chịu ở các đô thị Mỹ Latinh đến đắt đỏ ở các trung tâm đô thị Bắc Mỹ. Mua ô tô là chuyện thường thấy ngoài các lõi đô thị lớn.",
    workday: "Giờ hành chính chuẩn 9–5 hay 9–6, xu hướng làm từ xa/kết hợp ngày càng phổ biến, và các quán ăn trưa luôn sôi động.",
    evening: "Gặp gỡ bên món ăn địa phương, nhạc sống, công viên khu phố, và những chuyến road trip cuối tuần vào các vùng đất ngoạn mục.",
    upsides: [
      "Nền tảng xã hội ấm áp, dễ gần.",
      "Địa hình phong phú từ núi non đến bờ biển.",
      "Múi giờ gần nhau, thuận lợi cho làm việc từ xa trên toàn châu lục.",
    ],
    downsides: [
      "Giao thông công cộng thường hạn chế ngoài các đô thị lớn.",
      "An ninh và hạ tầng chênh nhau rất nhiều giữa từng khu phố.",
      "Nhiều nơi vẫn dựa nhiều vào y tế tư nhân hay ô tô.",
    ],
    dimensions: {
      costIndex: 2,
      climate: 'warm-sun',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 4,
      religionRole: 'cultural-tradition',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Giao thông công cộng hạn chế ngoài vùng đô thị trung tâm nên bắt buộc phải lái xe, và mức độ an toàn chênh nhau rõ rệt giữa các khu phố."
  },
  "Africa": {
    cost: "$950 – $1,800/mo",
    wlb: "8.0 / 10",
    safety: "6.8 / 10",
    culture: "Cộng đồng gắn bó sâu nặng, giàu chất kể chuyện, âm nhạc và lòng hiếu khách. Tinh thần Ubuntu — ta có vì ta là — là hiện thân của sự nâng đỡ lẫn nhau.",
    people: "Ấm áp, bộc trực và niềm nở thật lòng với vị khách biết tôn trọng, giữa những cộng đồng đa ngôn ngữ rực rỡ.",
    costOfLiving: "Sống hằng ngày dễ chịu, rau củ tươi và người giúp việc trong tầm tay, dù đồ điện tử nhập khẩu và vé máy bay quốc tế có thể đắt.",
    workday: "Bắt đầu sớm, khởi động bằng trà hay cà phê địa phương, và ưu tiên xây dựng quan hệ trước khi vào chuyện công việc.",
    evening: "Những buổi họp mặt cộng đồng, ăn tối ngoài trời, nhạc sống, và hoàng hôn về sớm gần xích đạo.",
    upsides: [
      "Thiên nhiên hoang dã và phong cảnh ngoạn mục bậc nhất thế giới.",
      "Chi phí sinh hoạt dễ chịu cùng các trung tâm công nghệ đang lớn dần.",
      "Truyền thống âm nhạc và nghệ thuật giàu bản sắc.",
    ],
    downsides: [
      "Hạ tầng (điện và giao thông) chênh nhau theo từng thành phố.",
      "An ninh đòi hỏi nhạy bén địa phương và chọn khu đúng.",
      "Thủ tục hành chính thường không vội vàng.",
    ],
    dimensions: {
      costIndex: 1,
      climate: 'warm-sun',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'vibrant-24-7',
      natureScore: 5,
      lgbtqTier: 2,
      religionRole: 'prominent',
      foreignerOpenness: 4,
      paceScore: 3,
    },
    realityCheck: "Hạ tầng công cộng (giao thông và lưới điện) có thể gián đoạn định kỳ, và lời dẫn đường của người địa phương là thứ không thể thiếu."
  },
  "Oceania": {
    cost: "$2,300 – $3,400/mo",
    wlb: "9.0 / 10",
    safety: "9.0 / 10",
    culture: "Sống ngoài trời là cốt lõi, bình đẳng và thong dong. Bãi biển, thể thao và văn hoá cà phê chi phối nhịp sống hằng ngày.",
    people: "Thân thiện, thẳng thắn và dễ chịu, kèm khiếu hài hước đáng nể.",
    costOfLiving: "Giá nhà và giá thực phẩm cao, bù lại mức lương mạnh và lối sống ngoài trời sôi động.",
    workday: "Bắt đầu bằng ly specialty coffee và khép lại đúng giờ để kịp ra biển, công viên hay sân thể thao.",
    evening: "Hoàng hôn ven biển, tiệc nướng sân sau, và những bữa tối thong dong ở quán quen khu phố.",
    upsides: [
      "Bãi biển, thiên nhiên và không khí trong lành thuộc nhóm tuyệt hảo thế giới.",
      "Chất lượng sống cao cùng nếp sống thảnh thơi.",
      "Cân bằng công việc — cuộc sống rất chắc tay.",
    ],
    downsides: [
      "Đường bay sang châu Âu, châu Á hay châu Mỹ xa và đắt.",
      "Giá nhà ở đô thị cao ngất ngưởng.",
      "Tiếp xúc tia UV rất mạnh.",
    ],
    dimensions: {
      costIndex: 4,
      climate: 'mild-coastal',
      transit: 'mixed-transit',
      convenienceScore: 3,
      weekendRhythm: 'standard',
      natureScore: 5,
      lgbtqTier: 5,
      religionRole: 'secular',
      foreignerOpenness: 5,
      paceScore: 2,
    },
    realityCheck: "Vé máy bay sang các châu lục khác đắt, hàng hoá tiêu dùng đắt đỏ, và chỉ số UV rất mạnh nên phải luôn phòng nắng."
  }
};

/** Vietnamese region names for the assembler's fallback sentences. */
const REGION_VI: Record<string, string> = {
  Europe: 'châu Âu',
  Asia: 'châu Á',
  Americas: 'châu Mỹ',
  Africa: 'châu Phi',
  Oceania: 'châu Đại Dương',
};

/**
 * Scaffold sentences the assembler wraps around template prose for map-only
 * territories (no dossier record in either locale). English scaffolds stay
 * inline in globalCountries.ts; these mirror them for locale 'vi'.
 */
export const FALLBACK_SENTENCES_VI = {
  tagline: (name: string) =>
    `Nhịp sống thường ngày, nếp văn hoá bản địa và những góc nhìn thực tế về cuộc sống ở ${name}.`,
  culture: (name: string, regionEn: string, tplCulture: string) =>
    `Sống ở ${name} là cách hoà thẳng vào nếp văn hoá của ${REGION_VI[regionEn] ?? regionEn}. ${tplCulture}`,
  people: (name: string, tplPeople: string) =>
    `Người ở ${name} rất tự hào về cội nguồn và lòng hiếu khách nơi đây. ${tplPeople}`,
  costOfLiving: (name: string, tplCost: string, tplCostOfLiving: string) =>
    `Ở ${name}, mức chi phí hằng ngày dao động quanh ${tplCost}. ${tplCostOfLiving}`,
  workday: (name: string, tplWorkday: string) =>
    `Một ngày làm việc điển hình ở ${name} pha trộn tập quán làm ăn bản địa với nhịp sống hiện đại. ${tplWorkday}`,
  evening: (name: string, tplEvening: string) =>
    `Khi giờ làm khép lại ở ${name}, dân bản xứ tụ về những điểm hẹn quen thuộc trong khu phố. ${tplEvening}`,
};
