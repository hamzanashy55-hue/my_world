/**
 * مصدر بيانات الكليات — نقطة واحدة تتغذى منها كل الصفحات
 * لإضافة كلية جديدة: زوّد عنصر جديد هنا فقط، وكل الصفحات هتتحدث تلقائي.
 */
const COLLEGES = {
  pharmacy: {
    name: "كلية الصيدلة",
    icon: "💊",
    tint: "#2FA98E",
    motif: "molecule",
    tagline: "الأدوية، الكيمياء الدوائية، والرعاية الصيدلانية — مقرراتك ومصادرك في مكان واحد.",
    year: "الفرقة الثالثة",
    major: "الكيمياء الدوائية",
    materials: [
      { title: "الكيمياء الدوائية العامة", explains: [{ type: "link", label: "شرح الفصل الأول (يوتيوب)" }, { type: "video", label: "شرح د. أحمد — مباشر" }] },
      { title: "علم الأدوية التطبيقي", explains: [{ type: "link", label: "ملخص مرئي خارجي" }] },
    ],
  },
  ai: {
    name: "كلية الحاسبات والذكاء الاصطناعي",
    icon: "💻",
    tint: "#5B6EF5",
    motif: "circuit",
    tagline: "برامج الذكاء الاصطناعي، الحوسبة السحابية، والبيانات الضخمة — كل ما يخص كليتك في مكان واحد.",
    year: "الفرقة الثانية",
    major: "الذكاء الاصطناعي والبيانات الضخمة",
    materials: [
      { title: "مقدمة في تعلم الآلة", explains: [{ type: "video", label: "شرح مباشر — المحاضرة 3" }, { type: "link", label: "معمل تطبيقي (Colab)" }] },
      { title: "هياكل البيانات والخوارزميات", explains: [{ type: "link", label: "شرح خارجي (يوتيوب)" }] },
    ],
  },
  vet: {
    name: "كلية الطب البيطري",
    icon: "🐾",
    tint: "#7FAE6B",
    motif: "paw",
    tagline: "رعاية الحيوان، التشريح، والطب الوقائي — موارد ميدانية وعملية.",
    year: "الفرقة الأولى",
    major: "الطب الوقائي",
    materials: [
      { title: "التشريح البيطري المقارن", explains: [{ type: "video", label: "جولة معملية مسجلة" }] },
      { title: "الطب الوقائي والتحصين", explains: [{ type: "link", label: "دليل ميداني خارجي" }, { type: "video", label: "شرح د. منى" }] },
    ],
  },
  science: {
    name: "كلية العلوم",
    icon: "🔬",
    tint: "#7C5CFC",
    motif: "atom",
    tagline: "الفيزياء، الكيمياء، والأحياء — تجارب ومحتوى بصري تفاعلي.",
    year: "الفرقة الثانية",
    major: "الكيمياء التحليلية",
    materials: [
      { title: "الفيزياء الحديثة", explains: [{ type: "link", label: "محاكاة تفاعلية" }] },
      { title: "الأحياء الجزيئية", explains: [{ type: "video", label: "شرح معملي — الجلسة 5" }] },
    ],
  },
  business: {
    name: "كلية الأعمال",
    icon: "📊",
    tint: "#C9A227",
    motif: "chart",
    tagline: "إدارة الأعمال، التمويل، والتسويق — دراسات حالة وتحليلات سوق.",
    year: "الفرقة الرابعة",
    major: "التمويل والاستثمار",
    materials: [
      { title: "أساسيات التمويل", explains: [{ type: "link", label: "دراسة حالة خارجية" }] },
      { title: "التسويق الرقمي", explains: [{ type: "video", label: "ورشة عمل مسجلة" }, { type: "link", label: "تقرير سوق" }] },
    ],
  },
  tourism: {
    name: "كلية السياحة والفنادق",
    icon: "🏨",
    tint: "#E5723F",
    motif: "wave",
    tagline: "الضيافة، إدارة الفنادق، والإرشاد السياحي — تدريب ميداني وموارد عملية.",
    year: "الفرقة الثالثة",
    major: "إدارة الفنادق",
    materials: [
      { title: "إدارة العمليات الفندقية", explains: [{ type: "video", label: "محاكاة استقبال مباشرة" }] },
      { title: "الإرشاد السياحي", explains: [{ type: "link", label: "مسار سياحي تفاعلي" }] },
    ],
  },
  sport: {
    name: "كلية علوم الرياضة",
    icon: "🏅",
    tint: "#2FBE73",
    motif: "pulse",
    tagline: "علوم التدريب، الفسيولوجيا الرياضية، والتغذية — أداء وقياسات حية.",
    year: "الفرقة الأولى",
    major: "فسيولوجيا الرياضة",
    materials: [
      { title: "فسيولوجيا الجهد البدني", explains: [{ type: "link", label: "قياسات أداء تفاعلية" }] },
      { title: "التغذية الرياضية", explains: [{ type: "video", label: "شرح مباشر — الأسبوع 4" }] },
    ],
  },
};

const COLLEGE_ORDER = ["pharmacy", "ai", "vet", "science", "business", "tourism", "sport"];
