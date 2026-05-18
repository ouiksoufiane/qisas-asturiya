// videos-data.js — v19
// Tous les ytId vérifiés via YouTube oEmbed (200 ✓)
// langs: ar=العربية، darija=الدارجة، tr=التركية، fr=الفرنسية

const SERIES_INFO = {

  ertugrul: {
    id: 'ertugrul', cat: 'تاريخي',
    title: 'قيامة أرطغرل', titleOrig: 'Diriliş: Ertuğrul',
    poster: 'https://i.ytimg.com/vi/J6I2-0tWMzA/hqdefault.jpg',
    desc: 'ملحمة تاريخية إسلامية تروي قصة أرطغرل غازي، والد مؤسس الدولة العثمانية. يقود قبيلة قايي في مواجهة القوى الظالمة ويرسم بسيفه ودمه ملامح أعظم دولة في التاريخ الإسلامي.',
    genre: ['تاريخي', 'ملحمي', 'إثارة'],
    seasons: 5, totalEps: 150, year: 2014, rating: 9.2,
    badge: 'الأكثر مشاهدة', mood: 'ملحمي ⚔️', moodColor: '#c8a84b',
    status: 'near_complete'
  },

  osman: {
    id: 'osman', cat: 'تاريخي',
    title: 'المؤسس عثمان', titleOrig: 'Kuruluş: Osman',
    poster: 'https://i.ytimg.com/vi/Wx3ul4fqaYg/hqdefault.jpg',
    desc: 'الاستمرار الرسمي لقيامة أرطغرل — ابنه عثمان يحمل الراية ويؤسس أعظم إمبراطورية في التاريخ. إنتاج TRT ضخم بإثارة متصاعدة وقصة مشوّقة جداً.',
    genre: ['تاريخي', 'ملحمي', 'مغامرة'],
    seasons: 6, totalEps: 337, year: 2019, rating: 9.0,
    badge: 'الأحدث', mood: 'ملحمي ⚔️', moodColor: '#22A896',
    status: 'partial'
  },

  harim: {
    id: 'harim', cat: 'دراما',
    title: 'حريم السلطان', titleOrig: 'Muhteşem Yüzyıl',
    poster: 'https://i.ytimg.com/vi/0CP_4Tg78co/hqdefault.jpg',
    desc: 'دراما تاريخية فاخرة في قصر السلطان سليمان القانوني. مؤامرات، حب، وصراع على السلطة خلف أروقة أكبر قصور العالم. الأكثر مشاهدةً في التاريخ العربي.',
    genre: ['دراما تاريخية', 'رومانسي', 'مؤامرات'],
    seasons: 4, totalEps: 139, year: 2011, rating: 8.7,
    badge: 'كلاسيك', mood: 'درامي 💎', moodColor: '#8b6fc0',
    status: 'hidden'
  },

  wadi: {
    id: 'wadi', cat: 'إثارة',
    title: 'وادي الذئاب', titleOrig: 'Kurtlar Vadisi',
    poster: 'https://i.ytimg.com/vi/g7IaxwvB4CI/hqdefault.jpg',
    desc: 'أسطورة التلفزيون التركي. العميل السري بولنت يلماز في مواجهة مباشرة مع المافيا والفساد. أحد أكثر المسلسلات جرأةً وإثارةً على الإطلاق.',
    genre: ['إثارة', 'جريمة', 'أكشن'],
    seasons: 11, totalEps: 250, year: 2003, rating: 8.9,
    badge: 'إثارة قاتلة', mood: 'داكن 🌑', moodColor: '#cc2222',
    status: 'partial'
  },

  hufra: {
    id: 'hufra', cat: 'إثارة',
    title: 'الحفرة', titleOrig: 'Çukur',
    poster: 'https://i.ytimg.com/vi/IJlaUCi7DIs/hqdefault.jpg',
    desc: 'حي "الحفرة" في إسطنبول تسيطر عليه عائلة كوجوفالي. عالم مظلم من الصراعات والولاء والثأر. دراما جريمة من الأقوى على الإطلاق.',
    genre: ['جريمة', 'دراما', 'إثارة'],
    seasons: 4, totalEps: 100, year: 2017, rating: 8.8,
    badge: 'إثارة داكنة', mood: 'داكن 🌑', moodColor: '#cc2222',
    status: 'partial'
  },

  eskiya: {
    id: 'eskiya', cat: 'إثارة',
    title: 'قطاع الطرق لن يحكموا العالم', titleOrig: 'Eşkıya Dünyaya Hükümdar Olmaz',
    poster: 'https://i.ytimg.com/vi/V0lTA7Cd7bs/hqdefault.jpg',
    desc: 'لص محترف يخرج من السجن ويحاول الابتعاد عن عالم الجريمة — لكن الماضي يطارده. مزيج مذهل من الأكشن المحموم والدراما الإنسانية.',
    genre: ['أكشن', 'جريمة', 'دراما'],
    seasons: 8, totalEps: 249, year: 2015, rating: 8.6,
    badge: 'أكشن بلا توقف', mood: 'إثارة 🔥', moodColor: '#e67e22',
    status: 'partial'
  },

  yunusemre: {
    id: 'yunusemre', cat: 'تاريخي',
    title: 'يونس إيمره', titleOrig: 'Yunus Emre: Aşkın Sesi',
    poster: 'https://i.ytimg.com/vi/HOdC76YSrok/hqdefault.jpg',
    desc: 'رحلة روحية مؤثرة مع شاعر الأناضول الكبير يونس إيمره في عهد السلاجقة. إنتاج TRT يحكي قصة أحد أعظم شعراء الإسلام وتأثيره الذي خلّد اسمه في التاريخ.',
    genre: ['تاريخي', 'روحاني', 'دراما'],
    seasons: 2, totalEps: 60, year: 2015, rating: 8.5,
    badge: 'إنتاج TRT', mood: 'روحاني ✨', moodColor: '#22A896',
    status: 'complete'
  },

  omar: {
    id: 'omar', cat: 'تاريخي',
    title: 'عمر', titleOrig: 'Omar',
    poster: 'https://i.ytimg.com/vi/cu68afTJVlk/hqdefault.jpg',
    desc: 'الملحمة التاريخية الكبرى عن الصحابي الجليل عمر بن الخطاب رضي الله عنه. من أضخم الإنتاجات العربية على الإطلاق، إنتاج قطري ضخم يُعيد رسم التاريخ الإسلامي.',
    genre: ['تاريخي', 'إسلامي', 'ملحمي'],
    seasons: 1, totalEps: 31, year: 2012, rating: 9.0,
    badge: 'ملحمة إسلامية', mood: 'ملحمي ⚔️', moodColor: '#c8a84b',
    status: 'partial'
  },

  taer: {
    id: 'taer', cat: 'رومانسي',
    title: 'الطائر المبكر', titleOrig: 'Erkenci Kuş',
    poster: 'https://i.ytimg.com/vi/I-T39mnsD2U/hqdefault.jpg',
    desc: 'جان محبوبة مصورة موهوبة تقع في حب سانان الروائي الغامض الكسول. رومانسية تركية خفيفة دافئة ومضحكة في نفس الوقت. من أجمل الدراما الرومانسية التركية.',
    genre: ['رومانسي', 'كوميدي', 'دراما'],
    seasons: 2, totalEps: 161, year: 2018, rating: 8.4,
    badge: 'رومانسي خفيف', mood: 'رومانسي 💕', moodColor: '#e91e8c',
    status: 'selected'
  },

  fazilet: {
    id: 'fazilet', cat: 'دراما',
    title: 'فضيلة هانم وبناتها', titleOrig: 'Fazilet Hanım ve Kızları',
    poster: 'https://i.ytimg.com/vi/X3zHNh97EnM/hqdefault.jpg',
    desc: 'أم طموحة ترى في جمال بناتها مفتاحاً للثروة والنجاح. دراما اجتماعية ساخرة تناقش قضايا المرأة والطموح والأمومة في المجتمع التركي.',
    genre: ['دراما', 'اجتماعي', 'رومانسي'],
    seasons: 2, totalEps: 80, year: 2017, rating: 8.1,
    badge: 'دراما اجتماعية', mood: 'درامي 💎', moodColor: '#8b6fc0',
    status: 'selected'
  },

  ask: {
    id: 'ask', cat: 'دراما',
    title: 'العشق الممنوع', titleOrig: 'Aşk-ı Memnu',
    poster: 'https://i.ytimg.com/vi/OdENOuh-L04/hqdefault.jpg',
    desc: 'رائعة الدراما التركية الكلاسيكية — فيهان وبيهلول وقصة عشق ممنوع داخل القصر الفاخر. من أشهر المسلسلات التركية التي غزت الوطن العربي.',
    genre: ['دراما', 'رومانسي', 'مؤامرات'],
    seasons: 2, totalEps: 79, year: 2008, rating: 8.9,
    badge: 'كلاسيك ذهبي', mood: 'درامي 💎', moodColor: '#8b6fc0',
    status: 'selected'
  }

};

// ════════════════════════════════
// أفلام تركية — ytId مُتحقَّق
// ════════════════════════════════
const TURKISH_FILMS = [
  {
    id: 'f1', title: 'القرار الصعب', titleOrig: 'Zor Karar',
    ytId: 'uFlzNiyWnZg', langs: { ar: 'uFlzNiyWnZg' },
    genre: ['دراما', 'عائلي'], year: 2017, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/uFlzNiyWnZg/hqdefault.jpg',
    desc: 'قرار واحد يغير مسار عائلة بأكملها إلى الأبد. دراما إنسانية مؤثرة.'
  },
  {
    id: 'f2', title: 'الخائنة', titleOrig: 'Sadakatsiz',
    ytId: 'BJzpaiWWMcE', langs: { ar: 'BJzpaiWWMcE' },
    genre: ['دراما', 'رومانسي'], year: 2019, duration: '1:52',
    poster: 'https://i.ytimg.com/vi/BJzpaiWWMcE/hqdefault.jpg',
    desc: 'زوجة تكتشف خيانة زوجها فتنهار حياتها بين ليلة وضحاها. دراما مؤثرة.'
  },
  {
    id: 'f3', title: 'الصفعة القاسية', titleOrig: 'Ağır Tokat',
    ytId: 'XRgtteNKyXg', langs: { ar: 'XRgtteNKyXg' },
    genre: ['دراما', 'أكشن'], year: 2018, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/XRgtteNKyXg/hqdefault.jpg',
    desc: 'شاب في مواجهة المظلومية والقسوة في مجتمع لا يرحم. إنتاج قوي جداً.'
  },
  {
    id: 'f4', title: 'الحياة معجزة', titleOrig: 'Hayat Bir Mucizedir',
    ytId: 'cyuZPnPTqOo', langs: { ar: 'cyuZPnPTqOo' },
    genre: ['دراما', 'ملهم'], year: 2020, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/cyuZPnPTqOo/hqdefault.jpg',
    desc: 'رحلة ملهمة عن الإرادة والبقاء في وجه المستحيل. فيلم يغير طريقة تفكيرك.'
  },
  {
    id: 'f5', title: 'بيتي لكَ', titleOrig: 'Evim Senindir',
    ytId: 'bXNqdJooO-0', langs: { ar: 'bXNqdJooO-0' },
    genre: ['رومانسي', 'عائلي'], year: 2016, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/bXNqdJooO-0/hqdefault.jpg',
    desc: 'قصة حب هادئة تنشأ في أحضان الطبيعة بعيداً عن ضجيج المدينة.'
  },
  {
    id: 'f6', title: 'شاهد', titleOrig: 'Tanık',
    ytId: 'nLyETzXj22k', langs: { ar: 'nLyETzXj22k' },
    genre: ['إثارة', 'جريمة'], year: 2019, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/nLyETzXj22k/hqdefault.jpg',
    desc: 'شاهد على جريمة يجد نفسه وجهاً لوجه أمام خطر لم يتوقعه. إثارة من أول لحظة.'
  },
  {
    id: 'f7', title: 'الدليل الوحيد', titleOrig: 'Tek Küpe',
    ytId: 'T7S_EVBa7KM', langs: { ar: 'T7S_EVBa7KM' },
    genre: ['دراما', 'غموض'], year: 2018, duration: '1:30',
    poster: 'https://i.ytimg.com/vi/T7S_EVBa7KM/hqdefault.jpg',
    desc: 'امرأة تكتشف حقيقة صادمة عن ماضيها تقلب حياتها رأساً على عقب.'
  },

  // ══════ أكشن / إثارة ══════
  {
    id: 'f8', title: 'وادي الذئاب: العراق', titleOrig: 'Kurtlar Vadisi Irak',
    ytId: '3JUHmIFLWy8', langs: { ar: '3JUHmIFLWy8' },
    genre: ['أكشن', 'إثارة'], year: 2006, duration: '1:58',
    poster: 'https://i.ytimg.com/vi/3JUHmIFLWy8/hqdefault.jpg',
    desc: 'العميل السري بولنت يلماز يتوغل في قلب العراق في مهمة لا رجعة منها. أضخم إنتاج تركي في تاريخه.'
  },
  {
    id: 'f9', title: 'وادي الذئاب: فلسطين', titleOrig: 'Kurtlar Vadisi Filistin',
    ytId: 'L8yPCqsIzxY', langs: { ar: 'L8yPCqsIzxY' },
    genre: ['أكشن', 'إثارة'], year: 2011, duration: '2:00',
    poster: 'https://i.ytimg.com/vi/L8yPCqsIzxY/hqdefault.jpg',
    desc: 'بولنت يلماز في الأراضي الفلسطينية — مهمة تحرير أسرى وكسر الحصار. فيلم مثير للجدل وللإثارة.'
  },
  {
    id: 'f10', title: 'وادي الذئاب: الوطن', titleOrig: 'Kurtlar Vadisi Vatan',
    ytId: 'QKYRyEWfqAM', langs: { ar: 'QKYRyEWfqAM' },
    genre: ['أكشن', 'إثارة'], year: 2017, duration: '2:05',
    poster: 'https://i.ytimg.com/vi/QKYRyEWfqAM/hqdefault.jpg',
    desc: 'العودة الأقوى لسلسلة وادي الذئاب — الدفاع عن الوطن بكل ما أوتي من قوة.'
  },
  {
    id: 'f11', title: 'الصقر', titleOrig: 'SHAIN',
    ytId: 'KHi6JnD57s4', langs: { ar: 'KHi6JnD57s4' },
    genre: ['أكشن', 'إثارة'], year: 2023, duration: '1:50',
    poster: 'https://i.ytimg.com/vi/KHi6JnD57s4/hqdefault.jpg',
    desc: 'بطولة بوراك أوزجيفيت — عميل سري في مهمة شبه مستحيلة وسط عمليات من أعلى مستوى.'
  },
  {
    id: 'f12', title: 'القناع', titleOrig: 'MASKE',
    ytId: '2kfk-JUJDOg', langs: { ar: '2kfk-JUJDOg' },
    genre: ['أكشن', 'إثارة'], year: 2024, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/2kfk-JUJDOg/hqdefault.jpg',
    desc: 'أراس بولوت إينان يرتدي القناع في مواجهة تنظيم إجرامي يهدد الأمن الوطني. أكشن متواصل.'
  },
  {
    id: 'f13', title: 'فتح القسطنطينية', titleOrig: 'Fetih 1453',
    ytId: '7mZfoh1TQuk', langs: { ar: '7mZfoh1TQuk' },
    genre: ['تاريخي', 'ملحمي', 'أكشن'], year: 2012, duration: '2:15',
    poster: 'https://i.ytimg.com/vi/7mZfoh1TQuk/hqdefault.jpg',
    desc: 'الملحمة التاريخية الكبرى — السلطان محمد الفاتح يفتح القسطنطينية في 1453 م. إنتاج ضخم لا مثيل له.'
  },
  {
    id: 'f14', title: 'ساعة', titleOrig: 'Saat',
    ytId: 'IUhxWRr8ivo', langs: { ar: 'IUhxWRr8ivo' },
    genre: ['إثارة', 'غموض'], year: 2020, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/IUhxWRr8ivo/hqdefault.jpg',
    desc: 'ساعة واحدة تفصل بين الحياة والموت — إثارة نفسية محكمة ومفاجآت لا تتوقع.'
  },
  {
    id: 'f15', title: 'المسجون الأول', titleOrig: 'İlk Mahkum',
    ytId: 'csYoipB5OS0', langs: { ar: 'csYoipB5OS0' },
    genre: ['إثارة', 'دراما'], year: 2019, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/csYoipB5OS0/hqdefault.jpg',
    desc: 'رجل بريء يجد نفسه خلف القضبان — قصة إثارة ودراما قانونية مشوّقة.'
  },
  {
    id: 'f16', title: 'الهارب', titleOrig: 'Kaçak',
    ytId: 'HUf18KSRdp4', langs: { ar: 'HUf18KSRdp4' },
    genre: ['أكشن', 'إثارة'], year: 2022, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/HUf18KSRdp4/hqdefault.jpg',
    desc: 'رجل يهرب من قوى تطارده بلا هوادة — أكشن متواصل وإثارة عالية الجودة.'
  },
  {
    id: 'f17', title: 'رجل القناع', titleOrig: 'Maskeli Adam',
    ytId: 'WMknNPxMSo0', langs: { ar: 'WMknNPxMSo0' },
    genre: ['أكشن', 'إثارة'], year: 2023, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/WMknNPxMSo0/hqdefault.jpg',
    desc: 'بطولة أراس بولوت — عميل سري يعمل من الظل لحماية الدولة من تهديدات داخلية.'
  },
  {
    id: 'f18', title: 'الرجل الأخير', titleOrig: 'Son Adam',
    ytId: '9r_NnmtQnxE', langs: { ar: '9r_NnmtQnxE' },
    genre: ['أكشن', 'إثارة'], year: 2023, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/9r_NnmtQnxE/hqdefault.jpg',
    desc: 'آخر رجل يقف في وجه الفساد — مواجهة وحيدة ضد منظومة بأكملها. قوة إخراجية مذهلة.'
  },
  {
    id: 'f19', title: 'المنظومة', titleOrig: 'Sistem',
    ytId: 'yHT44Fd4Y7k', langs: { ar: 'yHT44Fd4Y7k' },
    genre: ['أكشن', 'إثارة'], year: 2024, duration: '1:50',
    poster: 'https://i.ytimg.com/vi/yHT44Fd4Y7k/hqdefault.jpg',
    desc: 'رجل يقرر تفكيك منظومة الفساد من الداخل — إثارة ذكية ومشوّقة طوال الفيلم.'
  },
  {
    id: 'f20', title: 'الانتقام', titleOrig: 'İntikam',
    ytId: 'rl3HGDWalKY', langs: { ar: 'rl3HGDWalKY' },
    genre: ['أكشن', 'إثارة'], year: 2022, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/rl3HGDWalKY/hqdefault.jpg',
    desc: 'رحلة انتقام حارقة بعد ظلم لا يُغتفر — أراس بولوت في واحد من أقوى أدواره.'
  },
  {
    id: 'f21', title: 'الذئب', titleOrig: 'Kurt',
    ytId: 'bVNABVC-zYo', langs: { ar: 'bVNABVC-zYo' },
    genre: ['أكشن', 'إثارة'], year: 2023, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/bVNABVC-zYo/hqdefault.jpg',
    desc: 'عميل وحيد يعمل مثل الذئب — هجوم مباغت وتكتيكات لا تُتوقع. أكشن نقي.'
  },

  // ══════ دراما / رومانسي ══════
  {
    id: 'f22', title: 'الحب يعشق الصدف', titleOrig: 'Aşk Tesadüfleri Sever',
    ytId: 'BCb7YogA0eM', langs: { ar: 'BCb7YogA0eM' },
    genre: ['رومانسي', 'كوميدي'], year: 2011, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/BCb7YogA0eM/hqdefault.jpg',
    desc: 'الحب يأتي في أغرب الأوقات — رومانسية تركية خفيفة ومضحكة تذوب فيها من الحنان.'
  },
  {
    id: 'f23', title: 'زمن السعادة', titleOrig: 'Mutluluk Zamanı',
    ytId: 'kP2XebqzFyA', langs: { ar: 'kP2XebqzFyA' },
    genre: ['دراما', 'رومانسي'], year: 2018, duration: '1:48',
    poster: 'https://i.ytimg.com/vi/kP2XebqzFyA/hqdefault.jpg',
    desc: 'دراما إنسانية عميقة عن البحث عن السعادة وسط مصاعب الحياة. جودة 4K مدبلج.'
  },
  {
    id: 'f24', title: 'معجزة', titleOrig: 'Mucize',
    ytId: 'mZspjqRGJg4', langs: { ar: 'mZspjqRGJg4' },
    genre: ['دراما', 'ملهم'], year: 2015, duration: '1:50',
    poster: 'https://i.ytimg.com/vi/mZspjqRGJg4/hqdefault.jpg',
    desc: 'قصة معلم يصل إلى قرية نائية ويصنع المعجزات بتفانيه وحبه. فيلم يلمس القلوب.'
  },
  {
    id: 'f25', title: 'طريق الحب', titleOrig: 'Aşk Yolu',
    ytId: 'sNrn0WX2-rM', langs: { ar: 'sNrn0WX2-rM' },
    genre: ['رومانسي', 'دراما'], year: 2017, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/sNrn0WX2-rM/hqdefault.jpg',
    desc: 'رحلة حب طويلة على طريق مليء بالعقبات — دراما رومانسية مدبلجة من قناة ATV.'
  },
  {
    id: 'f26', title: 'كذبة الحب', titleOrig: 'Can Kırığı',
    ytId: 'tzM4Q3MniNs', langs: { ar: 'tzM4Q3MniNs' },
    genre: ['دراما', 'رومانسي'], year: 2020, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/tzM4Q3MniNs/hqdefault.jpg',
    desc: 'حب بُني على كذبة — الكشف عن الحقيقة يهدم كل شيء. دراما رومانسية مؤثرة.'
  },
  {
    id: 'f27', title: 'حياة مسروقة', titleOrig: 'Çalıntı Hayat',
    ytId: 'j5FHqe0RAq0', langs: { ar: 'j5FHqe0RAq0' },
    genre: ['دراما', 'إثارة'], year: 2019, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/j5FHqe0RAq0/hqdefault.jpg',
    desc: 'امرأة تكتشف أن حياتها كلها مبنية على خداع — درامية نفسية مشوّقة ومؤثرة.'
  },
  {
    id: 'f28', title: 'اسطنبول الحمراء', titleOrig: 'İstanbul Kırmızısı',
    ytId: 'uTIm3p5KOJI', langs: { ar: 'uTIm3p5KOJI' },
    genre: ['رومانسي', 'دراما'], year: 2017, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/uTIm3p5KOJI/hqdefault.jpg',
    desc: 'قصة حب في اسطنبول بين شاعر وامرأة غامضة — رومانسية راقية بصور ساحرة.'
  },
  {
    id: 'f29', title: 'كل شيء بسبب الحب', titleOrig: 'Her Şey Aşktan',
    ytId: 'qWWlKI1fD0I', langs: { ar: 'qWWlKI1fD0I' },
    genre: ['رومانسي', 'كوميدي'], year: 2022, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/qWWlKI1fD0I/hqdefault.jpg',
    desc: 'كوميديا رومانسية عصرية تثبت أن الحب يجعلنا نفعل أجمل وأغرب الأشياء.'
  },
  {
    id: 'f30', title: 'رحلة حب', titleOrig: 'Aşk Yolculuğu',
    ytId: 'kxt85EYw3MU', langs: { ar: 'kxt85EYw3MU' },
    genre: ['رومانسي', 'دراما'], year: 2019, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/kxt85EYw3MU/hqdefault.jpg',
    desc: 'رحلة حب تأخذ بطليها من روسيا إلى تركيا عبر أجمل المناظر. رومانسية دافئة مدبلجة.'
  },
  {
    id: 'f31', title: 'نجمة الربيع', titleOrig: 'Bahar Yıldızı',
    ytId: '405XheB4Rcw', langs: { ar: '405XheB4Rcw' },
    genre: ['رومانسي', 'دراما'], year: 2020, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/405XheB4Rcw/hqdefault.jpg',
    desc: 'فتاة حالمة تجد الحب في أقل الأوقات توقعاً — رومانسية تركية ناعمة ومؤثرة.'
  },
  {
    id: 'f32', title: 'خريف العمر', titleOrig: 'Güz Sancısı',
    ytId: 'Cq5qZwFOEKI', langs: { ar: 'Cq5qZwFOEKI' },
    genre: ['دراما', 'سياسي'], year: 2009, duration: '2:00',
    poster: 'https://i.ytimg.com/vi/Cq5qZwFOEKI/hqdefault.jpg',
    desc: 'دراما سياسية عميقة تصور تركيا في السبعينيات — صراع أيديولوجي وإنساني مؤثر.'
  },
  {
    id: 'f33', title: 'النفس الأخير', titleOrig: 'Son Nefes',
    ytId: 'KFbPOo-kOAo', langs: { ar: 'KFbPOo-kOAo' },
    genre: ['دراما', 'مؤثر'], year: 2015, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/KFbPOo-kOAo/hqdefault.jpg',
    desc: 'قصة إنسانية مؤثرة عن الوداع والحب في اللحظات الأخيرة — فيلم يبكي القلوب.'
  },

  // ══════ رعب / غموض ══════
  {
    id: 'f34', title: 'سر-آية: الميت المولود', titleOrig: 'Sir-Ayet: Ölü Doğan',
    ytId: 'Emq4EBAd57c', langs: { ar: 'Emq4EBAd57c' },
    genre: ['رعب', 'غموض'], year: 2023, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/Emq4EBAd57c/hqdefault.jpg',
    desc: 'رعب تركي من أرقى المستويات — أسرار مجهولة تتكشف في أجواء داكنة ومرعبة.'
  },
  {
    id: 'f35', title: 'المسكون 3: القادم من القبر', titleOrig: 'Musallat 3',
    ytId: 'd9TYOBpB_Y8', langs: { ar: 'd9TYOBpB_Y8' },
    genre: ['رعب', 'غموض'], year: 2023, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/d9TYOBpB_Y8/hqdefault.jpg',
    desc: 'الجزء الثالث من سلسلة المسكون — قوى من الماوراء تستيقظ وتمزق حجاب الأمان.'
  },
  {
    id: 'f36', title: 'المسكون: الطقوس', titleOrig: 'Musallat Ritüel',
    ytId: 'akc2I68pGcE', langs: { ar: 'akc2I68pGcE' },
    genre: ['رعب', 'غموض'], year: 2024, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/akc2I68pGcE/hqdefault.jpg',
    desc: 'طقوس سرية تفتح بواباً لا يجب فتحها — رعب نفسي مع مشاهد تصل إلى الأعماق.'
  },
  {
    id: 'f37', title: 'سر-آية 4', titleOrig: 'Sir-Ayet 4',
    ytId: 'kJceAhRf8uU', langs: { ar: 'kJceAhRf8uU' },
    genre: ['رعب', 'غموض'], year: 2025, duration: '1:30',
    poster: 'https://i.ytimg.com/vi/kJceAhRf8uU/hqdefault.jpg',
    desc: 'أحدث إصدارات سلسلة سر-آية — رعب 2025 بأسلوب عصري ومخوف.'
  },
  {
    id: 'f38', title: 'سر-آية 2', titleOrig: 'Sir-Ayet 2',
    ytId: 'ml4IUR3lTzk', langs: { ar: 'ml4IUR3lTzk' },
    genre: ['رعب', 'غموض'], year: 2022, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/ml4IUR3lTzk/hqdefault.jpg',
    desc: 'الجزء الثاني من سلسلة سر-آية — أعمق وأشد إرعاباً من سابقه.'
  },
  {
    id: 'f39', title: 'خنجر', titleOrig: 'Habeş-i Cin',
    ytId: 'wjk9S-aXkHo', langs: { ar: 'wjk9S-aXkHo' },
    genre: ['رعب', 'إثارة'], year: 2023, duration: '1:28',
    poster: 'https://i.ytimg.com/vi/wjk9S-aXkHo/hqdefault.jpg',
    desc: 'خنجر قديم يحمل لعنة — رعب تركي يمزج بين الأساطير والواقع بإتقان.'
  },
  {
    id: 'f40', title: 'قبر العذاب', titleOrig: 'Kabir Azabı',
    ytId: 'zJjuofo_w5A', langs: { ar: 'zJjuofo_w5A' },
    genre: ['رعب', 'ديني'], year: 2018, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/zJjuofo_w5A/hqdefault.jpg',
    desc: 'رحلة في عالم الغيب — فيلم ديني يرعب ويذكّر في آن واحد. من أكثر الأفلام التركية تأثيراً.'
  },
  {
    id: 'f41', title: 'فأل', titleOrig: 'Üç Harfliler: Fal',
    ytId: 'Rm_HEgPX95E', langs: { ar: 'Rm_HEgPX95E' },
    genre: ['رعب', 'غموض'], year: 2025, duration: '1:30',
    poster: 'https://i.ytimg.com/vi/Rm_HEgPX95E/hqdefault.jpg',
    desc: 'من سلسلة الثلاثة أحرف — فأل يفتح باب الظلام. أحدث رعب تركي 2025.'
  },

  // ══════ تاريخي / ملحمي ══════
  {
    id: 'f42', title: 'أيلا', titleOrig: 'Ayla',
    ytId: 'RIi9461Jr1w', langs: { ar: 'RIi9461Jr1w' },
    genre: ['تاريخي', 'دراما', 'مؤثر'], year: 2017, duration: '2:05',
    poster: 'https://i.ytimg.com/vi/RIi9461Jr1w/hqdefault.jpg',
    desc: 'قصة حقيقية مؤثرة جداً — جندي تركي يتبنى طفلة كورية في الحرب. فيلم يكسر القلوب.'
  },
  {
    id: 'f43', title: 'نهاية الطريق', titleOrig: 'Yolun Sonu',
    ytId: 'lXPwzICmwq8', langs: { ar: 'lXPwzICmwq8' },
    genre: ['دراما', 'إثارة'], year: 2020, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/lXPwzICmwq8/hqdefault.jpg',
    desc: 'رجل يصل إلى نهاية الطريق ويجب أن يختار — قرار واحد يغيّر كل شيء. جودة 4K مدبلج.'
  },
  {
    id: 'f44', title: 'بلال الحبشي', titleOrig: 'Bilal: A New Breed of Hero',
    ytId: 'VcSXFArFVWs', langs: { ar: 'VcSXFArFVWs' },
    genre: ['تاريخي', 'ديني', 'ملهم'], year: 2015, duration: '1:48',
    poster: 'https://i.ytimg.com/vi/VcSXFArFVWs/hqdefault.jpg',
    desc: 'قصة بلال بن رباح — الصحابي الجليل الذي رفع صوته وكسر أغلاله. إنتاج عالمي مدبلج 4K.'
  },
  {
    id: 'f45', title: 'سيف النبي', titleOrig: 'Peygamberlerin Kılıçları',
    ytId: '03v4I_4mtpA', langs: { ar: '03v4I_4mtpA' },
    genre: ['تاريخي', 'ديني'], year: 2019, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/03v4I_4mtpA/hqdefault.jpg',
    desc: 'ملحمة إيمانية عن الأنبياء وسيوفهم — تاريخ إسلامي عميق بأسلوب سينمائي رائع.'
  },
  {
    id: 'f46', title: 'الشهيد كامل', titleOrig: 'Şehit Kamil',
    ytId: 'Z3PuzkLYmA0', langs: { ar: 'Z3PuzkLYmA0' },
    genre: ['تاريخي', 'حرب'], year: 2020, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/Z3PuzkLYmA0/hqdefault.jpg',
    desc: 'قصة شهيد حقيقي دافع عن أرضه بكل ما يملك — فيلم وطني تركي مؤثر ومشرّف.'
  },
  {
    id: 'f47', title: 'مقاومة كاراتاي', titleOrig: 'Direniş Karatay',
    ytId: '6ZdozPEhXAM', langs: { ar: '6ZdozPEhXAM' },
    genre: ['تاريخي', 'ملحمي'], year: 2018, duration: '2:00',
    poster: 'https://i.ytimg.com/vi/6ZdozPEhXAM/hqdefault.jpg',
    desc: 'أسطورة المقاومة التاريخية في الأناضول — قائد يرفض الاستسلام أمام الغزاة.'
  },
  {
    id: 'f48', title: 'جناق قلعة 1915', titleOrig: 'Çanakkale 1915',
    ytId: 'zohWEV-NYuU', langs: { ar: 'zohWEV-NYuU' },
    genre: ['تاريخي', 'حرب', 'ملحمي'], year: 2012, duration: '1:58',
    poster: 'https://i.ytimg.com/vi/zohWEV-NYuU/hqdefault.jpg',
    desc: 'معركة جناق قلعة — أشرس معارك الحرب العالمية الأولى على الأراضي التركية. ملحمة وطنية.'
  },
  {
    id: 'f49', title: 'النبي يوسف', titleOrig: 'Hz. Yusuf',
    ytId: 'my9PZ28VfNg', langs: { ar: 'my9PZ28VfNg' },
    genre: ['ديني', 'تاريخي'], year: 2021, duration: '2:10',
    poster: 'https://i.ytimg.com/vi/my9PZ28VfNg/hqdefault.jpg',
    desc: 'قصة النبي يوسف عليه السلام — إنتاج تركي بجودة 4K مدبلج بالعربية. رائع ومؤثر.'
  },
  {
    id: 'f50', title: 'الجبل', titleOrig: 'Dağ',
    ytId: 'kpZ5cbp1oaw', langs: { ar: 'kpZ5cbp1oaw' },
    genre: ['أكشن', 'حرب'], year: 2012, duration: '1:50',
    poster: 'https://i.ytimg.com/vi/kpZ5cbp1oaw/hqdefault.jpg',
    desc: 'جنود أتراك محاصرون في قمة الجبل — بقاء بأقل الإمكانيات ضد أعداء محيطين بهم.'
  },
  {
    id: 'f51', title: 'سيف العدالة', titleOrig: 'Türkler Geliyor: Kılıç',
    ytId: 'DpMyHq3K_Q4', langs: { ar: 'DpMyHq3K_Q4' },
    genre: ['تاريخي', 'ملحمي', 'أكشن'], year: 2019, duration: '2:05',
    poster: 'https://i.ytimg.com/vi/DpMyHq3K_Q4/hqdefault.jpg',
    desc: 'الأتراك يأتون بسيوفهم لرسم حدود العدالة — ملحمة تاريخية ضخمة الإنتاج.'
  },

  // ══════ كلاسيكيات تركية ══════
  {
    id: 'f52', title: 'أبي وابني', titleOrig: 'Babam ve Oğlum',
    ytId: '-mCYKjHnmdI', langs: { ar: '-mCYKjHnmdI' },
    genre: ['دراما', 'عائلي', 'مؤثر'], year: 2005, duration: '1:47',
    poster: 'https://i.ytimg.com/vi/-mCYKjHnmdI/hqdefault.jpg',
    desc: 'من أعظم الأفلام التركية على الإطلاق — رحلة إنسانية مؤثرة بين أب وابنه. جودة 4K.'
  },
  {
    id: 'f53', title: 'دنياي', titleOrig: 'Benim Dünyam',
    ytId: 'PQ1lA-VBJf0', langs: { ar: 'PQ1lA-VBJf0' },
    genre: ['دراما', 'عائلي'], year: 2013, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/PQ1lA-VBJf0/hqdefault.jpg',
    desc: 'طفلة ضريرة تحوّل حياة كل من حولها بطريقتها الخاصة. فيلم يكسر الحواجز ويشعل المشاعر.'
  },
  {
    id: 'f54', title: 'نسور الأناضول', titleOrig: 'Anadolu Kartalları',
    ytId: '7WcX1q5oYzQ', langs: { ar: '7WcX1q5oYzQ' },
    genre: ['حرب', 'أكشن'], year: 2011, duration: '1:55',
    poster: 'https://i.ytimg.com/vi/7WcX1q5oYzQ/hqdefault.jpg',
    desc: 'سلاح الجو التركي في مهمة دفاعية شرسة — إثارة جوية ومشاهد قتالية مذهلة.'
  },
  {
    id: 'f55', title: 'كارا أوغلان', titleOrig: 'Kara Oğlan',
    ytId: 'Cu1sdFaUchM', langs: { ar: 'Cu1sdFaUchM' },
    genre: ['مغامرة', 'تاريخي'], year: 2025, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/Cu1sdFaUchM/hqdefault.jpg',
    desc: 'مغامرة تاريخية بأسلوب 2025 — بطل شعبي تركي يخوض مغامرات لا تُنسى.'
  },

  // ══════ كوميدي / عائلي ══════
  {
    id: 'f56', title: 'الأشقاء', titleOrig: 'Süper Kardeşler',
    ytId: 'Md_Vr6ojp2o', langs: { ar: 'Md_Vr6ojp2o' },
    genre: ['كوميدي', 'عائلي'], year: 2023, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/Md_Vr6ojp2o/hqdefault.jpg',
    desc: 'كوميديا عائلية خفيفة عن الأشقاء وتحدياتهم — ضحك وحنان وموقف بكل حلقة.'
  },
  {
    id: 'f57', title: 'عائلة كبيرة', titleOrig: 'Büyük Aile',
    ytId: 'bG_GUnZpyKA', langs: { ar: 'bG_GUnZpyKA' },
    genre: ['كوميدي', 'عائلي'], year: 2019, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/bG_GUnZpyKA/hqdefault.jpg',
    desc: 'عائلة مليئة بالشخصيات المضحكة والمواقف العائلية — كوميدي تركي دافئ.'
  },
  {
    id: 'f58', title: 'عائلة كبيرة 2', titleOrig: 'Büyük Aile 2',
    ytId: 'sZYzSk75g94', langs: { ar: 'sZYzSk75g94' },
    genre: ['كوميدي', 'عائلي'], year: 2023, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/sZYzSk75g94/hqdefault.jpg',
    desc: 'عودة العائلة الكبيرة بمزيد من الضحك — الجزء الثاني أكثر كوميدية ودفئاً.'
  },
  {
    id: 'f59', title: 'لدينا أم', titleOrig: 'Bizim Anne',
    ytId: '2dUOfRfUVvQ', langs: { ar: '2dUOfRfUVvQ' },
    genre: ['كوميدي', 'عائلي'], year: 2020, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/2dUOfRfUVvQ/hqdefault.jpg',
    desc: 'الأم التركية — شخصية مضحكة وحنونة في آن واحد. كوميدي عائلي من القلب.'
  },
  {
    id: 'f60', title: 'مخالفات البناء', titleOrig: 'Kaçak Yapı',
    ytId: 'frjB8gXMciQ', langs: { ar: 'frjB8gXMciQ' },
    genre: ['كوميدي', 'اجتماعي'], year: 2021, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/frjB8gXMciQ/hqdefault.jpg',
    desc: 'كوميديا اجتماعية ساخرة عن أزمة السكن وصعوبات البناء في المدينة.'
  },
  {
    id: 'f61', title: 'ما بين اثنين', titleOrig: 'İkisi Arasında',
    ytId: 'jhW_h-6rApA', langs: { ar: 'jhW_h-6rApA' },
    genre: ['رومانسي', 'كوميدي'], year: 2022, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/jhW_h-6rApA/hqdefault.jpg',
    desc: 'كوميديا رومانسية طريفة بين شخصيتين متناقضتين — الكيمياء المضحكة تصنع المعجزات.'
  },
  {
    id: 'f62', title: 'فيلكن حباً', titleOrig: 'Filcik Abi',
    ytId: 'uAtb_aQD98w', langs: { ar: 'uAtb_aQD98w' },
    genre: ['كوميدي', 'رومانسي'], year: 2023, duration: '1:30',
    poster: 'https://i.ytimg.com/vi/uAtb_aQD98w/hqdefault.jpg',
    desc: 'رجل بسيط يقع في الحب بطريقة كوميدية — خفيف ومضحك ولطيف من أوله لآخره.'
  },
  {
    id: 'f63', title: 'أنا في ورطة', titleOrig: 'Başım Belada',
    ytId: 'B5H4nIULZfA', langs: { ar: 'B5H4nIULZfA' },
    genre: ['كوميدي', 'مغامرة'], year: 2021, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/B5H4nIULZfA/hqdefault.jpg',
    desc: 'شاب يجد نفسه في ورطة جديدة كل خمس دقائق — كوميديا مغامرات لا تتوقف.'
  },
  {
    id: 'f64', title: 'الشاب الكذاب', titleOrig: 'Yalancı Oğlan',
    ytId: 'cnLNHlriZ6M', langs: { ar: 'cnLNHlriZ6M' },
    genre: ['كوميدي', 'رومانسي'], year: 2022, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/cnLNHlriZ6M/hqdefault.jpg',
    desc: 'شاب يكذب لكسب قلب الفتاة ثم تنقلب الأمور عليه — كوميديا رومانسية طريفة.'
  },
  {
    id: 'f65', title: 'فريق العاطلين', titleOrig: 'İşsizler Birliği',
    ytId: '-Fmikw3QXT8', langs: { ar: '-Fmikw3QXT8' },
    genre: ['كوميدي', 'رعب'], year: 2021, duration: '1:28',
    poster: 'https://i.ytimg.com/vi/-Fmikw3QXT8/hqdefault.jpg',
    desc: 'خلطة غريبة بين الكوميديا والرعب — مجموعة من العاطلين في مغامرة لم يتوقعوها.'
  },

  // ══════ أكشن / إثارة — دفعة ثانية ══════
  {
    id: 'f66', title: 'نيران القدر', titleOrig: 'Kader Ateşi',
    ytId: '0slhKnfoLxM', langs: { ar: '0slhKnfoLxM' },
    genre: ['إثارة', 'دراما'], year: 2013, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/0slhKnfoLxM/hqdefault.jpg',
    desc: 'كيفانش تاتلي توغ في دور مثير — قدر لا يرحم يلقي بظلاله على حياة شاب في أكثر لحظاته قسوة.'
  },
  {
    id: 'f67', title: 'ابن الشهيد', titleOrig: 'Şehidin Oğlu',
    ytId: '4w85r3dt7Ac', langs: { ar: '4w85r3dt7Ac' },
    genre: ['أكشن', 'دراما'], year: 2012, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/4w85r3dt7Ac/hqdefault.jpg',
    desc: 'ابن الشهيد يحمل إرث والده على كتفيه — دراما وطنية مؤثرة تمزج الحزن بالفخر.'
  },
  {
    id: 'f68', title: 'الهارب من الجبل', titleOrig: 'Eşkiya Dünyaya Hükümdar Olmaz',
    ytId: 'i6ipZrAXtrQ', langs: { ar: 'i6ipZrAXtrQ' },
    genre: ['أكشن', 'إثارة'], year: 2017, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/i6ipZrAXtrQ/hqdefault.jpg',
    desc: 'فيلم مشتق من أسطورة "العصيان" — بطل يرفض القانون ويضع قانونه الخاص بالسيف والدم.'
  },
  {
    id: 'f69', title: 'فدية', titleOrig: 'Fidye',
    ytId: 'aKhuWTpe0ME', langs: { ar: 'aKhuWTpe0ME' },
    genre: ['إثارة', 'جريمة'], year: 2015, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/aKhuWTpe0ME/hqdefault.jpg',
    desc: 'اختطاف وفدية — ثلاث وعشرون ساعة لإنقاذ حياة ثمينة. إثارة لا تهدأ من الدقيقة الأولى.'
  },
  {
    id: 'f70', title: 'عصابة', titleOrig: 'Çete',
    ytId: 'hCbRD_XZV-4', langs: { ar: 'hCbRD_XZV-4' },
    genre: ['جريمة', 'أكشن'], year: 2016, duration: '1:30',
    poster: 'https://i.ytimg.com/vi/hCbRD_XZV-4/hqdefault.jpg',
    desc: 'عالم الجريمة المنظمة يبتلع شاباً ساذجاً — تصاعد درامي محكم وأكشن لا يهدأ.'
  },
  {
    id: 'f71', title: 'البديل', titleOrig: 'Bedel',
    ytId: 'r0lQXLGrbnY', langs: { ar: 'r0lQXLGrbnY' },
    genre: ['إثارة', 'دراما'], year: 2014, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/r0lQXLGrbnY/hqdefault.jpg',
    desc: 'بديل يدفع ثمن جريمة لم يرتكبها — قصة ظلم قاسية تنتهي بمواجهة لا مفر منها.'
  },
  {
    id: 'f72', title: 'العدالة', titleOrig: 'Neylerse Güzel Eyler',
    ytId: 'jzI_jvRM67k', langs: { ar: 'jzI_jvRM67k' },
    genre: ['إثارة', 'قانوني'], year: 2014, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/jzI_jvRM67k/hqdefault.jpg',
    desc: 'محامٍ يكتشف أن العدالة أحياناً تكون خارج القانون — دراما قانونية مشوّقة بجودة 4K.'
  },
  {
    id: 'f73', title: 'مضحٍّ', titleOrig: 'Fedakar',
    ytId: 'XHuXuMSjQfw', langs: { ar: 'XHuXuMSjQfw' },
    genre: ['دراما', 'أكشن'], year: 2014, duration: '1:33',
    poster: 'https://i.ytimg.com/vi/XHuXuMSjQfw/hqdefault.jpg',
    desc: 'رجل يضحي بكل شيء حباً في من يحب — قصة تفانٍ حقيقي في مواجهة قوى أكبر منه.'
  },
  {
    id: 'f74', title: 'القدر', titleOrig: 'Kader',
    ytId: 'G7N8kLzfjzM', langs: { ar: 'G7N8kLzfjzM' },
    genre: ['إثارة', 'رومانسي'], year: 2006, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/G7N8kLzfjzM/hqdefault.jpg',
    desc: 'كيفانش تاتلي توغ في فيلمه الكلاسيكي الأشهر — حب محاط بالخطر والقدر الجارف.'
  },
  {
    id: 'f75', title: 'الطرف الآخر', titleOrig: 'Öteki Taraf',
    ytId: 'Pv6uZBPwq-s', langs: { ar: 'Pv6uZBPwq-s' },
    genre: ['دراما', 'إثارة'], year: 2017, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/Pv6uZBPwq-s/hqdefault.jpg',
    desc: 'بطولة أوزجان دنيز وميريم أوزيرلي — حياة رجل ناجح تنهار حين تظهر حقيقة من الطرف الآخر.'
  },
  {
    id: 'f76', title: 'العقدة المتشابكة', titleOrig: 'Kördüğüm',
    ytId: 'UB06H3pjh3o', langs: { ar: 'UB06H3pjh3o' },
    genre: ['دراما', 'إثارة'], year: 2016, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/UB06H3pjh3o/hqdefault.jpg',
    desc: 'عقدة من الأسرار والخيانات تتشابك حتى يصير الخروج منها شبه مستحيل.'
  },

  // ══════ دراما / رومانسي — دفعة ثانية ══════
  {
    id: 'f77', title: 'سوار', titleOrig: 'Bilezik',
    ytId: 'dPWZfCxdwC4', langs: { ar: 'dPWZfCxdwC4' },
    genre: ['دراما', 'رومانسي'], year: 2015, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/dPWZfCxdwC4/hqdefault.jpg',
    desc: 'سوار ذهبي يربط مصائر عائلتين — دراما عاطفية تمزج بين الماضي والحاضر بإتقان.'
  },
  {
    id: 'f78', title: 'قلب غني', titleOrig: 'Zengin Gönüllü',
    ytId: 'Mb3fMaPkshs', langs: { ar: 'Mb3fMaPkshs' },
    genre: ['دراما', 'عائلي'], year: 2016, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/Mb3fMaPkshs/hqdefault.jpg',
    desc: 'قلب غني لا يحتاج مالاً — قصة إنسانية دافئة عن الكرم والوفاء في زمن الأنانية.'
  },
  {
    id: 'f79', title: 'الحب الطبيعي', titleOrig: 'Doğal Aşk',
    ytId: 'f98E1fFI5HY', langs: { ar: 'f98E1fFI5HY' },
    genre: ['رومانسي', 'كوميدي'], year: 2024, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/f98E1fFI5HY/hqdefault.jpg',
    desc: 'الحب بشكله الطبيعي — بعيداً عن التصنع والمبالغة. رومانسية 2024 خفيفة ومضحكة.'
  },
  {
    id: 'f80', title: 'الحب المظلم', titleOrig: 'Karanlık Aşk',
    ytId: '_UlusDHAovA', langs: { ar: '_UlusDHAovA' },
    genre: ['دراما', 'إثارة'], year: 2024, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/_UlusDHAovA/hqdefault.jpg',
    desc: 'حب يختبئ في الظلام — خيانة ومؤامرة تحت ستار العاطفة. دراما 2024 مشوّقة ومدبلجة.'
  },
  {
    id: 'f81', title: 'الحب يعشق الصدفة', titleOrig: 'Aşk Tesadüfleri Sever 2',
    ytId: 'pAD5vVfE_G0', langs: { ar: 'pAD5vVfE_G0' },
    genre: ['رومانسي', 'كوميدي'], year: 2022, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/pAD5vVfE_G0/hqdefault.jpg',
    desc: 'الصدفة تجمعهما مرة أخرى — كوميديا رومانسية بطولة محمد جونسور وبيلشيم بيلجين.'
  },
  {
    id: 'f82', title: 'لا تتركني', titleOrig: 'Bırakma Beni',
    ytId: 'WkyHyFN3yAw', langs: { ar: 'WkyHyFN3yAw' },
    genre: ['رومانسي', 'دراما'], year: 2019, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/WkyHyFN3yAw/hqdefault.jpg',
    desc: 'نداء قلب لن يتوقف — رومانسية مؤلمة عن حب يواجه امتحان الفراق والفقد.'
  },
  {
    id: 'f83', title: 'شقيقان في اسطنبول', titleOrig: 'İstanbul\'da İki Kardeş',
    ytId: '9iV_y_bpZuY', langs: { ar: '9iV_y_bpZuY' },
    genre: ['عائلي', 'دراما'], year: 2015, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/9iV_y_bpZuY/hqdefault.jpg',
    desc: 'أخوان يكتشفان اسطنبول بطريقتهما الخاصة — دراما عائلية دافئة ومؤثرة.'
  },
  {
    id: 'f84', title: 'ثلاثة أبناء', titleOrig: 'Üç Oğul',
    ytId: 'imUDiP6102c', langs: { ar: 'imUDiP6102c' },
    genre: ['عائلي', 'دراما'], year: 2016, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/imUDiP6102c/hqdefault.jpg',
    desc: 'ثلاثة أبناء بثلاثة مصائر مختلفة — أب يسعى لجمع شمل أسرته قبل فوات الأوان.'
  },
  {
    id: 'f85', title: 'الأيتام', titleOrig: 'Yetimler',
    ytId: 'KWEE_AzxAao', langs: { ar: 'KWEE_AzxAao' },
    genre: ['عائلي', 'دراما'], year: 2017, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/KWEE_AzxAao/hqdefault.jpg',
    desc: 'أطفال فقدوا أهلهم يجدون في الحب البديل ما لا يُعوَّض — دراما عائلية مؤثرة جداً.'
  },
  {
    id: 'f86', title: 'رحمة لا نهاية لها', titleOrig: 'Sonsuz Rahmet',
    ytId: 'qcSEKulva6s', langs: { ar: 'qcSEKulva6s' },
    genre: ['عائلي', 'ديني'], year: 2018, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/qcSEKulva6s/hqdefault.jpg',
    desc: 'رحمة الله لا حدود لها — قصة توبة وإيمان تحرك القلوب وتغسل النفوس.'
  },
  {
    id: 'f87', title: 'الجدة', titleOrig: 'Nene',
    ytId: 'aUxyuvdRGsw', langs: { ar: 'aUxyuvdRGsw' },
    genre: ['عائلي', 'مؤثر'], year: 2018, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/aUxyuvdRGsw/hqdefault.jpg',
    desc: 'الجدة التركية — رمز الحنان والعطاء. فيلم عائلي 4K مدبلج يلمس أعمق ما في القلب.'
  },
  {
    id: 'f88', title: 'المدرسة', titleOrig: 'Okul',
    ytId: '9taXOCskpgo', langs: { ar: '9taXOCskpgo' },
    genre: ['دراما', 'اجتماعي'], year: 2014, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/9taXOCskpgo/hqdefault.jpg',
    desc: 'داخل جدران المدرسة أسرار لا تُروى — دراما اجتماعية عن التعليم والمجتمع بعمق نادر.'
  },
  {
    id: 'f89', title: 'أختي مومو', titleOrig: 'Kız Kardeşim Momo',
    ytId: 'pORwoiLg1kI', langs: { ar: 'pORwoiLg1kI' },
    genre: ['عائلي', 'مؤثر'], year: 2016, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/pORwoiLg1kI/hqdefault.jpg',
    desc: 'أخت صغيرة تقلب حياة أخيها رأساً على عقب — دراما حزينة ودافئة في آن واحد.'
  },
  {
    id: 'f90', title: 'جنون الحب', titleOrig: 'Aşk Delisi',
    ytId: 'zZpggbGqq5M', langs: { ar: 'zZpggbGqq5M' },
    genre: ['رومانسي', 'دراما'], year: 2015, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/zZpggbGqq5M/hqdefault.jpg',
    desc: 'الحب قادر على الجنون — رومانسية تركية حزينة HD تأخذك في رحلة عاطفية لا تُنسى.'
  },
  {
    id: 'f91', title: 'أحبك يا رجل', titleOrig: 'Seni Seviyorum Adam',
    ytId: 'OzuCa2coiOI', langs: { ar: 'OzuCa2coiOI' },
    genre: ['رومانسي', 'كوميدي'], year: 2013, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/OzuCa2coiOI/hqdefault.jpg',
    desc: 'اعتراف حب في أغرب الظروف — كوميديا رومانسية خفيفة تملأ القلب بالفرح.'
  },
  {
    id: 'f92', title: 'الواجب المنزلي', titleOrig: 'Ödev',
    ytId: 'Yn1hxNFr9Js', langs: { ar: 'Yn1hxNFr9Js' },
    genre: ['دراما', 'اجتماعي'], year: 2023, duration: '1:30',
    poster: 'https://i.ytimg.com/vi/Yn1hxNFr9Js/hqdefault.jpg',
    desc: 'واجب منزلي يكشف أسراراً دفينة — دراما اجتماعية نفسية مؤثرة من إنتاج 2023.'
  },
  {
    id: 'f93', title: 'قصة مدينة الحزن', titleOrig: 'Hüzün Şehri',
    ytId: 'wXMygcPD3VU', langs: { ar: 'wXMygcPD3VU' },
    genre: ['دراما', 'رومانسي'], year: 2014, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/wXMygcPD3VU/hqdefault.jpg',
    desc: 'مدينة تحمل أحزان أهلها — قصة حب نشأت في أعمق لحظات الألم والوحدة.'
  },
  {
    id: 'f94', title: 'زواج سرين', titleOrig: 'Sirin\'in Düğünü',
    ytId: '6xBa7JSe-zM', langs: { ar: '6xBa7JSe-zM' },
    genre: ['رومانسي', 'كوميدي'], year: 2016, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/6xBa7JSe-zM/hqdefault.jpg',
    desc: 'حفل زواج يتحول إلى سلسلة من المفاجآت — كوميديا رومانسية مدبلجة مضحكة وخفيفة.'
  },
  {
    id: 'f95', title: 'المخرب', titleOrig: 'Bozguncu',
    ytId: 'uRMOp4kqKUk', langs: { ar: 'uRMOp4kqKUk' },
    genre: ['دراما', 'اجتماعي'], year: 2015, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/uRMOp4kqKUk/hqdefault.jpg',
    desc: 'شاب بلا أسرة يعيش على السرقة — يجد نفسه في مفترق طرق بين الظلام والنور.'
  },
  {
    id: 'f96', title: 'لغة القلب', titleOrig: 'Kalbin Dili',
    ytId: 'DCoU_kpV0Yk', langs: { ar: 'DCoU_kpV0Yk' },
    genre: ['عائلي', 'مؤثر'], year: 2017, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/DCoU_kpV0Yk/hqdefault.jpg',
    desc: 'طفل ينتظر عودة أبيه من ألمانيا — دراما عائلية 4K مدبلج تكسر الحواجز وتلمس الأرواح.'
  },
  {
    id: 'f97', title: 'جميل', titleOrig: 'Cemil',
    ytId: 'eBa6plPgxdg', langs: { ar: 'eBa6plPgxdg' },
    genre: ['رومانسي', 'دراما'], year: 2016, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/eBa6plPgxdg/hqdefault.jpg',
    desc: 'ابن الآغا يقع في حب بنت الفلاح — دراما رومانسية 4K بلمسة تراثية أصيلة.'
  },
  {
    id: 'f98', title: 'تذكر الحب', titleOrig: 'Aşkı Hatırla',
    ytId: '5TtfcItZ2cM', langs: { ar: '5TtfcItZ2cM' },
    genre: ['رومانسي', 'دراما'], year: 2025, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/5TtfcItZ2cM/hqdefault.jpg',
    desc: 'هاندا أرتشيل في أحدث أعمالها 2025 — حب يُفقد ويُسترجع بجودة 4K مدبلجة.'
  },
  {
    id: 'f99', title: 'فاطمة', titleOrig: 'Fadimem',
    ytId: 'G9deqHJsGpY', langs: { ar: 'G9deqHJsGpY' },
    genre: ['دراما', 'عائلي'], year: 2015, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/G9deqHJsGpY/hqdefault.jpg',
    desc: 'فاطمة — امرأة تحمل قدرها بكل عزة وصبر. دراما تركية 4K مدبلج تصل إلى الأعماق.'
  },
  {
    id: 'f100', title: 'أخي العزيز', titleOrig: 'Canım Kardeşim',
    ytId: 'qJyr9w7cPHg', langs: { ar: 'qJyr9w7cPHg' },
    genre: ['عائلي', 'مؤثر'], year: 2017, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/qJyr9w7cPHg/hqdefault.jpg',
    desc: 'رابطة الأخوة لا يقطعها الزمن — دراما عائلية 4K مدبلج تحتفي بمعنى الأخوة الحقيقية.'
  },
  {
    id: 'f101', title: 'الحب الصعب', titleOrig: 'Zor Sevda',
    ytId: '2sV5UbIL5P4', langs: { ar: '2sV5UbIL5P4' },
    genre: ['رومانسي', 'دراما'], year: 2013, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/2sV5UbIL5P4/hqdefault.jpg',
    desc: 'حب صعب لا يهون — رومانسية تركية مؤثرة تثبت أن الحب الحقيقي يستحق كل ثمن.'
  },
  {
    id: 'f102', title: 'نظيف تماماً', titleOrig: 'Tertemiz',
    ytId: 'C-yxXnLakXw', langs: { ar: 'C-yxXnLakXw' },
    genre: ['دراما', 'اجتماعي'], year: 2024, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/C-yxXnLakXw/hqdefault.jpg',
    desc: 'إنسان نظيف القلب في عالم ملوث — دراما اجتماعية 2024 مدبلجة تحمل رسالة عميقة.'
  },
  {
    id: 'f103', title: 'القصر', titleOrig: 'Konak',
    ytId: 'S0W7c7NyCcY', langs: { ar: 'S0W7c7NyCcY' },
    genre: ['دراما', 'عائلي'], year: 2015, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/S0W7c7NyCcY/hqdefault.jpg',
    desc: 'قصر يحمل أسرار عائلة بأكملها — دراما تركية كلاسيكية بأجواء فاخرة وصراعات داخلية.'
  },
  {
    id: 'f104', title: 'السبيل', titleOrig: 'Çeşme',
    ytId: 'MwUcBtBCdjg', langs: { ar: 'MwUcBtBCdjg' },
    genre: ['دراما', 'ريفي'], year: 2014, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/MwUcBtBCdjg/hqdefault.jpg',
    desc: 'سبيل قروي يحمل أرواح أجيال — دراما تركية عميقة عن الجذور والانتماء والتضحية.'
  },
  {
    id: 'f105', title: 'لا تحزن', titleOrig: 'Sen Üzülme',
    ytId: 'D9JQ6UDlZ6Q', langs: { ar: 'D9JQ6UDlZ6Q' },
    genre: ['دراما', 'مؤثر'], year: 2016, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/D9JQ6UDlZ6Q/hqdefault.jpg',
    desc: 'كلمتان تكفيان لإنقاذ قلب مكسور — دراما تركية مؤثرة مدبلجة بالعربية.'
  },
  {
    id: 'f106', title: 'الشريك الثالث', titleOrig: 'Üçüncü Ortak',
    ytId: 'ZQ8sUakosbk', langs: { ar: 'ZQ8sUakosbk' },
    genre: ['إثارة', 'دراما'], year: 2017, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/ZQ8sUakosbk/hqdefault.jpg',
    desc: 'شريك ثالث يدخل المعادلة ويقلب التوازن — إثارة مشوّقة عن الثقة والخيانة في عالم الأعمال.'
  },
  {
    id: 'f107', title: 'النذر', titleOrig: 'Adak',
    ytId: 'd6ToteTgP8M', langs: { ar: 'd6ToteTgP8M' },
    genre: ['دراما', 'ديني'], year: 2015, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/d6ToteTgP8M/hqdefault.jpg',
    desc: 'نذر قُطع في لحظة يأس — الوفاء به يغير مسار حياة عائلة بأكملها. دراما ديني مؤثرة.'
  },
  {
    id: 'f108', title: 'متاع الدنيا', titleOrig: 'Dünya Malı',
    ytId: 'Ob12EaH7M9I', langs: { ar: 'Ob12EaH7M9I' },
    genre: ['دراما', 'اجتماعي'], year: 2016, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/Ob12EaH7M9I/hqdefault.jpg',
    desc: 'متاع الدنيا زائل — دراما عن الجشع والمال والثمن الحقيقي للسعادة.'
  },
  {
    id: 'f109', title: 'كالحلم', titleOrig: 'Rüya Gibi',
    ytId: 'P6cT1taWPwU', langs: { ar: 'P6cT1taWPwU' },
    genre: ['رومانسي', 'دراما'], year: 2017, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/P6cT1taWPwU/hqdefault.jpg',
    desc: 'حياة كالحلم يصحو منها بطل الفيلم على حقيقة مؤلمة — رومانسية بلمسة إثارة.'
  },
  {
    id: 'f110', title: 'أنا قوية', titleOrig: 'Ben Güçlüyüm',
    ytId: 'lfLpr-9VzDI', langs: { ar: 'lfLpr-9VzDI' },
    genre: ['دراما', 'ملهم'], year: 2015, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/lfLpr-9VzDI/hqdefault.jpg',
    desc: 'بطولة إنجين ألتان — امرأة تثبت قوتها في مواجهة العالم كله. ملهم ومؤثر.'
  },
  {
    id: 'f111', title: 'بدلاً عنّا', titleOrig: 'İkimizin Yerine',
    ytId: '5QV0HaS-eFo', langs: { ar: '5QV0HaS-eFo' },
    genre: ['رومانسي', 'دراما'], year: 2013, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/5QV0HaS-eFo/hqdefault.jpg',
    desc: 'بطولة سيرناي صاريكايا — حب يُعاش بدلاً من الآخرين في رومانسية حزينة لا تُنسى.'
  },
  {
    id: 'f112', title: 'الماء والنار', titleOrig: 'Su ve Ateş',
    ytId: 'vAFwvUVlolM', langs: { ar: 'vAFwvUVlolM' },
    genre: ['أكشن', 'دراما'], year: 2016, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/vAFwvUVlolM/hqdefault.jpg',
    desc: 'بين الماء والنار — تقاطع قدرَين لا يمكن الجمع بينهما. أكشن ودراما في فيلم واحد.'
  },

  // ══════ عائلي / اجتماعي ══════
  {
    id: 'f113', title: 'أبي', titleOrig: 'Baba',
    ytId: 'Qb6AwOMCXis', langs: { ar: 'Qb6AwOMCXis' },
    genre: ['عائلي', 'مؤثر'], year: 2015, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/Qb6AwOMCXis/hqdefault.jpg',
    desc: 'أب وحيد يربي ابنه ذا الاحتياجات الخاصة بكل ما أوتي من حب — من أكثر الأفلام التركية تأثيراً.'
  },
  {
    id: 'f114', title: 'الأب الحقيقي', titleOrig: 'Bir Eski Hesap',
    ytId: 'nzSx79M9hbk', langs: { ar: 'nzSx79M9hbk' },
    genre: ['عائلي', 'دراما'], year: 2016, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/nzSx79M9hbk/hqdefault.jpg',
    desc: 'من هو الأب الحقيقي؟ — سؤال يزلزل عائلة ويضع الجميع أمام امتحان الضمير والدم.'
  },
  {
    id: 'f115', title: 'قلوب دافئة', titleOrig: 'Sıcak Yürekler',
    ytId: 'wL48Z637UQ8', langs: { ar: 'wL48Z637UQ8' },
    genre: ['عائلي', 'مؤثر'], year: 2014, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/wL48Z637UQ8/hqdefault.jpg',
    desc: 'قلبان مكسوران يجدان بعضهما في انتظار من يحبونهما — دراما عائلية دافئة ومؤثرة.'
  },
  {
    id: 'f116', title: 'جوليزار', titleOrig: 'Gülizar',
    ytId: '9WaFMk9y_2k', langs: { ar: '9WaFMk9y_2k' },
    genre: ['رومانسي', 'دراما'], year: 2014, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/9WaFMk9y_2k/hqdefault.jpg',
    desc: 'جوليزار — فتاة الريف الجميلة التي تقع في قلب مدينة مليئة بالمتناقضات. رومانسية كلاسيكية.'
  },
  {
    id: 'f117', title: 'لطيف خطير', titleOrig: 'Tehlikeli Tatlı',
    ytId: '0ZZX7YF--ms', langs: { ar: '0ZZX7YF--ms' },
    genre: ['كوميدي', 'رومانسي'], year: 2019, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/0ZZX7YF--ms/hqdefault.jpg',
    desc: 'رجل لطيف جداً لدرجة الخطورة — كوميديا رومانسية مضحكة بدبلجة عربية رائعة.'
  },
  {
    id: 'f118', title: 'رحلة أمل', titleOrig: 'Ak Kırlangıç',
    ytId: '98Y-aglh0NA', langs: { ar: '98Y-aglh0NA' },
    genre: ['عائلي', 'ملهم'], year: 2024, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/98Y-aglh0NA/hqdefault.jpg',
    desc: 'رحلة الأمل في وجه اليأس — فيلم 2024 ملهم عن إرادة الإنسان في أصعب الأوقات.'
  },
  {
    id: 'f119', title: 'منزل الأب', titleOrig: 'Babam Evi',
    ytId: 'iVMYVxXagck', langs: { ar: 'iVMYVxXagck' },
    genre: ['عائلي', 'مؤثر'], year: 2015, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/iVMYVxXagck/hqdefault.jpg',
    desc: 'بيت الأب يظل مأوى الأبدية — دراما عائلية عن الجذور والعودة إلى الأصل.'
  },
  {
    id: 'f120', title: 'يجب أن تفوز', titleOrig: 'Kazanmak Zorundasın',
    ytId: 'RwcObD6NpeQ', langs: { ar: 'RwcObD6NpeQ' },
    genre: ['ملهم', 'رياضي'], year: 2016, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/RwcObD6NpeQ/hqdefault.jpg',
    desc: 'الفوز ليس خياراً بل ضرورة — فيلم ملهم عن إرادة الفوز والإصرار رغم كل العقبات.'
  },
  {
    id: 'f121', title: 'جار', titleOrig: 'Komşu',
    ytId: 'SZe8RL34ej8', langs: { ar: 'SZe8RL34ej8' },
    genre: ['دراما', 'اجتماعي'], year: 2017, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/SZe8RL34ej8/hqdefault.jpg',
    desc: 'جار يحمل أسراراً — دراما اجتماعية هادئة تكشف ما يختبئ خلف جدران البيوت المتجاورة.'
  },
  {
    id: 'f122', title: 'خطوات سريعة', titleOrig: 'Hızlı Adımlar',
    ytId: 'iwsVI5Ba2k8', langs: { ar: 'iwsVI5Ba2k8' },
    genre: ['كوميدي', 'رياضي'], year: 2016, duration: '1:30',
    poster: 'https://i.ytimg.com/vi/iwsVI5Ba2k8/hqdefault.jpg',
    desc: 'مدرب يتحول إلى نجم — كوميديا خفيفة عن الرياضة والطموح في قالب ترفيهي مضحك.'
  },
  {
    id: 'f123', title: 'الدنيا الفانية', titleOrig: 'Ölümlü Dünya',
    ytId: 'LX_cQXEXYwo', langs: { ar: 'LX_cQXEXYwo' },
    genre: ['كوميدي', 'فلسفي'], year: 2018, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/LX_cQXEXYwo/hqdefault.jpg',
    desc: 'كوميديا سوداء فلسفية عن معنى الحياة والموت — من أكثر الأفلام التركية ذكاءً وإضحاكاً.'
  },

  // ══════ رعب — سلسلة سجين (Siccin) ══════
  {
    id: 'f124', title: 'سموم', titleOrig: 'Semum',
    ytId: 'tnJAqGhhSM0', langs: { ar: 'tnJAqGhhSM0' },
    genre: ['رعب', 'ديني'], year: 2008, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/tnJAqGhhSM0/hqdefault.jpg',
    desc: 'الشيطان الأصغر — رعب إسلامي يستلهم من التراث الديني. من أوائل أفلام الرعب التركية الجريئة.'
  },
  {
    id: 'f125', title: 'سجين 1', titleOrig: 'Siccin',
    ytId: 'thqwzwm-z14', langs: { ar: 'thqwzwm-z14' },
    genre: ['رعب', 'جن'], year: 2014, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/thqwzwm-z14/hqdefault.jpg',
    desc: 'الجزء الأول من أشهر سلسلة رعب تركية — سجين في أسفل جهنم. رعب لا يُحتمل.'
  },
  {
    id: 'f126', title: 'سجين 2', titleOrig: 'Siccin 2',
    ytId: 'ueC6hDgMJXs', langs: { ar: 'ueC6hDgMJXs' },
    genre: ['رعب', 'جن'], year: 2015, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/ueC6hDgMJXs/hqdefault.jpg',
    desc: 'سجين يعود أشد قسوة — الجزء الثاني يرفع سقف الرعب إلى مستوى لم تتوقعه.'
  },
  {
    id: 'f127', title: 'سجين 3', titleOrig: 'Siccin 3',
    ytId: 'weoYQeJqe6c', langs: { ar: 'weoYQeJqe6c' },
    genre: ['رعب', 'جن'], year: 2016, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/weoYQeJqe6c/hqdefault.jpg',
    desc: 'الثلاثية الكاملة من سجين — الرعب يصل ذروته في الجزء الثالث. مشاهد لا تُنسى.'
  },
  {
    id: 'f128', title: 'سجين 4', titleOrig: 'Siccin 4',
    ytId: '122ItcpcIrk', langs: { ar: '122ItcpcIrk' },
    genre: ['رعب', 'جن'], year: 2017, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/122ItcpcIrk/hqdefault.jpg',
    desc: 'سجين 4 يغوص أعمق في عالم السحر الأسود — الجزء الأكثر إثارة وجرأة في السلسلة.'
  },
  {
    id: 'f129', title: 'سجين 5', titleOrig: 'Siccin 5',
    ytId: 'nyLpXW1tZ40', langs: { ar: 'nyLpXW1tZ40' },
    genre: ['رعب', 'جن'], year: 2018, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/nyLpXW1tZ40/hqdefault.jpg',
    desc: 'الجزء الخامس من الأسطورة المرعبة — سجين لا يتوقف عن إرعابك مهما اعتقدت أنك تعوّدت.'
  },
  {
    id: 'f130', title: 'سجين 6', titleOrig: 'Siccin 6',
    ytId: '1ZNkq9RQy_s', langs: { ar: '1ZNkq9RQy_s' },
    genre: ['رعب', 'جن'], year: 2019, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/1ZNkq9RQy_s/hqdefault.jpg',
    desc: 'الختام الأسود لسلسلة سجين — الجزء السادس يجمع كل خيوط الرعب في نهاية صادمة.'
  },
  {
    id: 'f131', title: 'سجين 7', titleOrig: 'Siccin 7',
    ytId: 'Qhs2uhmDdy0', langs: { ar: 'Qhs2uhmDdy0' },
    genre: ['رعب', 'جن'], year: 2024, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/Qhs2uhmDdy0/hqdefault.jpg',
    desc: 'أحدث جزء في سلسلة سجين 2024 — الرعب التركي يعود أشد وأعمق من أي وقت مضى.'
  },

  // ══════ رعب — سلسلة دابة (Dabbe) ══════
  {
    id: 'f132', title: 'دابة 1', titleOrig: 'Dabbe',
    ytId: '9G_7pE-v1Ds', langs: { ar: '9G_7pE-v1Ds' },
    genre: ['رعب', 'جن'], year: 2006, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/9G_7pE-v1Ds/hqdefault.jpg',
    desc: 'بداية الرعب التركي الكبير — الجزء الأول من سلسلة دابة الأسطورية يُرسي قواعد الخوف الحقيقي.'
  },
  {
    id: 'f133', title: 'دابة 2', titleOrig: 'Dabbe 2',
    ytId: '-A9FEs4VlrU', langs: { ar: '-A9FEs4VlrU' },
    genre: ['رعب', 'جن'], year: 2009, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/-A9FEs4VlrU/hqdefault.jpg',
    desc: 'دابة تعود بقوة مضاعفة — الجزء الثاني يأخذك إلى أعماق مظلمة لم تزرها من قبل.'
  },
  {
    id: 'f134', title: 'دابة 3: الجن المسيطر', titleOrig: 'Dabbe: Cin Çarpması',
    ytId: 'qTpAcXI10m8', langs: { ar: 'qTpAcXI10m8' },
    genre: ['رعب', 'جن'], year: 2012, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/qTpAcXI10m8/hqdefault.jpg',
    desc: 'الجن يسيطر على الإنسان — الجزء الثالث الأكثر رعباً في السلسلة بأجواء نفسية خانقة.'
  },
  {
    id: 'f135', title: 'دابة 5: زهر الجن', titleOrig: 'Dabbe 5: Zehr-i Cin',
    ytId: '1UQdMnQUky0', langs: { ar: '1UQdMnQUky0' },
    genre: ['رعب', 'جن'], year: 2014, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/1UQdMnQUky0/hqdefault.jpg',
    desc: 'زهر الجن — سُمّ لا دواء له. الجزء الخامس يرقى بالرعب إلى مستوى الفن الحقيقي.'
  },
  {
    id: 'f136', title: 'دابة 6', titleOrig: 'Dabbe 6',
    ytId: 'j5Dy8_4A0Rw', langs: { ar: 'j5Dy8_4A0Rw' },
    genre: ['رعب', 'جن'], year: 2015, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/j5Dy8_4A0Rw/hqdefault.jpg',
    desc: 'الختام الأسود لدابة — الجزء السادس يكشف الحقيقة الكاملة بأكثر المشاهد إرعاباً في السلسلة.'
  },

  // ══════ رعب — سلسلة مسلط (Musallat) ══════
  {
    id: 'f137', title: 'مسلط 1', titleOrig: 'Musallat',
    ytId: 'MTwucy6kZOo', langs: { ar: 'MTwucy6kZOo' },
    genre: ['رعب', 'جن'], year: 2007, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/MTwucy6kZOo/hqdefault.jpg',
    desc: 'الكلاسيكي المرعب — المسلط الأول رسم قواعد الرعب التركي وأصبح أسطورة في عالم الجن.'
  },
  {
    id: 'f138', title: 'مسلط 2: اللعنة', titleOrig: 'Musallat 2: Lanet',
    ytId: 'u6fNdTVKD9s', langs: { ar: 'u6fNdTVKD9s' },
    genre: ['رعب', 'جن'], year: 2011, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/u6fNdTVKD9s/hqdefault.jpg',
    desc: 'اللعنة تتواصل — الجزء الثاني يوسع الكون المرعب للمسلط ويضيف طبقات جديدة من الخوف.'
  },

  // ══════ رعب — ثلاثة أحرف (Üç Harfliler) + أخرى ══════
  {
    id: 'f139', title: 'ثلاثة أحرف 1', titleOrig: 'Üç Harfliler',
    ytId: 'rjjuseUHeoQ', langs: { ar: 'rjjuseUHeoQ' },
    genre: ['رعب', 'جن'], year: 2013, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/rjjuseUHeoQ/hqdefault.jpg',
    desc: 'ثلاثة أحرف لا يُجرأ على نطقها — السلسلة التي أثارت جدلاً واسعاً وأرعبت الملايين.'
  },
  {
    id: 'f140', title: 'ثلاثة أحرف 4', titleOrig: 'Üç Harfliler 4',
    ytId: '5bsT2YrSIpc', langs: { ar: '5bsT2YrSIpc' },
    genre: ['رعب', 'جن'], year: 2019, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/5bsT2YrSIpc/hqdefault.jpg',
    desc: 'الجزء الرابع يُعيد الرعب بقوة مضاعفة — ثلاثة أحرف لا تنتهي ولا تنسى.'
  },
  {
    id: 'f141', title: 'عين الشيطان', titleOrig: 'Şeytanın Gözü',
    ytId: 'p4sXwQtZc0g', langs: { ar: 'p4sXwQtZc0g' },
    genre: ['رعب', 'جن'], year: 2021, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/p4sXwQtZc0g/hqdefault.jpg',
    desc: 'عين الشيطان ترى كل شيء — رعب مدبلج 2021 بأجواء نفسية مخيفة ومشاهد صادمة.'
  },
  {
    id: 'f142', title: 'عين الشيطان 2', titleOrig: 'Şeytanın Gözü 2',
    ytId: 'jQgUoyVETTw', langs: { ar: 'jQgUoyVETTw' },
    genre: ['رعب', 'جن'], year: 2022, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/jQgUoyVETTw/hqdefault.jpg',
    desc: 'العين تعود — الجزء الثاني يعمّق الظلام ويضاعف الخوف في متابعة لمن أحب الجزء الأول.'
  },
  {
    id: 'f143', title: 'الخناس', titleOrig: 'Hannâs',
    ytId: 'YgRuGDEvjy4', langs: { ar: 'YgRuGDEvjy4' },
    genre: ['رعب', 'ديني'], year: 2015, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/YgRuGDEvjy4/hqdefault.jpg',
    desc: 'الخناس يوسوس في صدور الناس — رعب ديني مستلهم من القرآن الكريم. مرعب ومؤثر.'
  },
  {
    id: 'f144', title: 'الخناس 2', titleOrig: 'Hannâs 2',
    ytId: 'LP_2H9QuTIk', langs: { ar: 'LP_2H9QuTIk' },
    genre: ['رعب', 'ديني'], year: 2022, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/LP_2H9QuTIk/hqdefault.jpg',
    desc: 'الخناس يعود أقوى — الجزء الثاني يستكمل الرحلة المرعبة في عالم الوسواس والجن.'
  },
  {
    id: 'f145', title: 'التميمة', titleOrig: 'Muska',
    ytId: 'LXwJoA0_8qI', langs: { ar: 'LXwJoA0_8qI' },
    genre: ['رعب', 'جن'], year: 2022, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/LXwJoA0_8qI/hqdefault.jpg',
    desc: 'تميمة قديمة تفتح بواباً لا يُغلق — رعب تركي 2022 بأجواء داكنة وأسرار مدفونة.'
  },
  {
    id: 'f146', title: 'الأعراف 2', titleOrig: 'Araf 2',
    ytId: 'oFron8twzgw', langs: { ar: 'oFron8twzgw' },
    genre: ['رعب', 'غموض'], year: 2019, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/oFron8twzgw/hqdefault.jpg',
    desc: 'بين الحياة والموت عالم لا أحد يعرف أسراره — الجزء الثاني يعمّق الغموض والرعب.'
  },
  {
    id: 'f147', title: 'الأعراف 3', titleOrig: 'Araf 3',
    ytId: '6VIfhzi6hpI', langs: { ar: '6VIfhzi6hpI' },
    genre: ['رعب', 'غموض'], year: 2022, duration: '1:30',
    poster: 'https://i.ytimg.com/vi/6VIfhzi6hpI/hqdefault.jpg',
    desc: 'الحدود بين عالمين تتلاشى — الجزء الثالث من سلسلة الأعراف أكثر إثارة ورعباً.'
  },
  {
    id: 'f148', title: 'الأعراف 4', titleOrig: 'Araf 4',
    ytId: 'vTksGtDNy7c', langs: { ar: 'vTksGtDNy7c' },
    genre: ['رعب', 'غموض'], year: 2024, duration: '1:30',
    poster: 'https://i.ytimg.com/vi/vTksGtDNy7c/hqdefault.jpg',
    desc: 'أحدث إصدار من سلسلة الأعراف 2024 — الرعب يبلغ ذروته في هذا الجزء الأكثر نضجاً.'
  },
  {
    id: 'f149', title: 'هلك: قرية ضائعة', titleOrig: 'Helak: Kayıp Köy',
    ytId: 'teQMpi6Ol6o', langs: { ar: 'teQMpi6Ol6o' },
    genre: ['رعب', 'غموض'], year: 2019, duration: '1:35',
    poster: 'https://i.ytimg.com/vi/teQMpi6Ol6o/hqdefault.jpg',
    desc: 'قرية تختفي بسكانها من على وجه الأرض — غموض ورعب في أعماق الأناضول لا تفسير له.'
  },
  {
    id: 'f150', title: 'محطة', titleOrig: 'İstasyon',
    ytId: 'S2xQNPAiU64', langs: { ar: 'S2xQNPAiU64' },
    genre: ['رعب', 'نفسي'], year: 2020, duration: '1:32',
    poster: 'https://i.ytimg.com/vi/S2xQNPAiU64/hqdefault.jpg',
    desc: 'محطة قطار مهجورة — أشباح الماضي تحاصر من تجرّأ على دخولها. رعب نفسي من الدرجة الأولى.'
  },

  // ══════ تاريخي / حرب ══════
  {
    id: 'f151', title: 'ملاذكرد 1071', titleOrig: 'Malazgirt 1071',
    ytId: 'bzoHW4qT1uQ', langs: { ar: 'bzoHW4qT1uQ' },
    genre: ['تاريخي', 'حرب', 'ملحمي'], year: 2020, duration: '1:50',
    poster: 'https://i.ytimg.com/vi/bzoHW4qT1uQ/hqdefault.jpg',
    desc: 'معركة ملاذكرد 1071 — انتصار السلاجقة الأتراك الذي غيّر تاريخ العالم الإسلامي إلى الأبد.'
  },
  {
    id: 'f152', title: 'العثماني الأخير', titleOrig: 'Son Osmanlı: Yandım Ali',
    ytId: 'Fkf0w__JvaY', langs: { ar: 'Fkf0w__JvaY' },
    genre: ['تاريخي', 'دراما'], year: 2007, duration: '1:45',
    poster: 'https://i.ytimg.com/vi/Fkf0w__JvaY/hqdefault.jpg',
    desc: 'آخر الرجال العثمانيين — قصة حارس أمانة الإمبراطورية في لحظة الانهيار الكبير.'
  },
  {
    id: 'f153', title: 'عروس الحرب', titleOrig: 'Gelinin Binbaşıya Ağıdı',
    ytId: '-DdNJJNxOmA', langs: { ar: '-DdNJJNxOmA' },
    genre: ['حرب', 'دراما'], year: 2015, duration: '1:38',
    poster: 'https://i.ytimg.com/vi/-DdNJJNxOmA/hqdefault.jpg',
    desc: 'مرثية العروس للضابط — قصة حب تُقطع بالحرب ودموع لا تنضب على أرواح الشهداء.'
  },
  {
    id: 'f154', title: 'رفيق الحرب', titleOrig: 'Savaş Arkadaşı',
    ytId: 'oHQyNp5y3To', langs: { ar: 'oHQyNp5y3To' },
    genre: ['حرب', 'أكشن'], year: 2020, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/oHQyNp5y3To/hqdefault.jpg',
    desc: 'الرفيق في الميدان هو الأخ الحقيقي — أكشن حربي تركي مدبلج بقصة تُحرّك المشاعر.'
  },
  {
    id: 'f155', title: 'طريق شاناكالي', titleOrig: 'Çanakkale\'nin Yolu',
    ytId: 'KMHuHm5SobA', langs: { ar: 'KMHuHm5SobA' },
    genre: ['تاريخي', 'حرب'], year: 2012, duration: '1:48',
    poster: 'https://i.ytimg.com/vi/KMHuHm5SobA/hqdefault.jpg',
    desc: 'الطريق إلى شاناكالي — رحلة الجنود نحو أشرس معارك الحرب العالمية الأولى على الأراضي التركية.'
  },
  {
    id: 'f156', title: 'حرب القرم', titleOrig: 'Kırım',
    ytId: 'qihAnPvumjE', langs: { ar: 'qihAnPvumjE' },
    genre: ['تاريخي', 'حرب'], year: 2012, duration: '1:42',
    poster: 'https://i.ytimg.com/vi/qihAnPvumjE/hqdefault.jpg',
    desc: 'صفحة حزينة من تاريخ القرم — فيلم حربي تركي مدبلج يروي قصة مقاومة نسيها التاريخ.'
  },
  {
    id: 'f157', title: 'سيدة الحرب', titleOrig: 'Savaşın Kadını',
    ytId: '3CedwFw8G2k', langs: { ar: '3CedwFw8G2k' },
    genre: ['حرب', 'دراما'], year: 2018, duration: '1:40',
    poster: 'https://i.ytimg.com/vi/3CedwFw8G2k/hqdefault.jpg',
    desc: 'امرأة في قلب الحرب — قوة لا تُكسر وشجاعة لا تُوصف في زمن السيوف والدماء.'
  },
  {
    id: 'f158', title: 'صلاح الدين الأيوبي', titleOrig: 'Selahaddin Eyyubi',
    ytId: 'K0vpg461TEg', langs: { ar: 'K0vpg461TEg' },
    genre: ['تاريخي', 'ديني', 'ملحمي'], year: 2016, duration: '1:48',
    poster: 'https://i.ytimg.com/vi/K0vpg461TEg/hqdefault.jpg',
    desc: 'سلطان القدس — صلاح الدين الأيوبي في رواية تركية ملحمية تُحيي ذكرى أعظم القادة المسلمين.'
  }
// END_TURKISH_FILMS
];

// ════════════════════════════════
// حلقات المسلسلات — ytId مُتحقَّق ✓
// ════════════════════════════════
const VIDEO_LIBRARY = [

  // ══════════════ قيامة أرطغرل — 112 حلقة ══════════════

  { id:'ert_s1e1', series:'ertugrul', season:'1', episode:'1',
    title:'الحلقة ١ — الجزء الأول', ytId:'J6I2-0tWMzA', langs:{ ar:'J6I2-0tWMzA' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أرطغرل يواجه المغول لأول مرة ويحمي قبيلته من الخطر القادم.' },

  { id:'ert_s1e2', series:'ertugrul', season:'1', episode:'2',
    title:'الحلقة ٢ — الجزء الأول', ytId:'SAh12QUJYXc', langs:{ ar:'SAh12QUJYXc' },
    duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أسرار الماضي تكشف مؤامرة أكبر مما توقع أرطغرل.' },

  { id:'ert_s1e3', series:'ertugrul', season:'1', episode:'3',
    title:'الحلقة ٣ — الجزء الأول', ytId:'4E_UkCHGTBI', langs:{ ar:'4E_UkCHGTBI' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أرطغرل يضع خطته لمواجهة القوى التي تهدد قبيلته.' },

  { id:'ert_s1e4', series:'ertugrul', season:'1', episode:'4',
    title:'الحلقة ٤ — الجزء الأول', ytId:'RYwQRcFYrP4', langs:{ ar:'RYwQRcFYrP4' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أرطغرل يصطدم بقوى خفية — الخيانة تقترب من قلب القبيلة.' },

  { id:'ert_s1e5', series:'ertugrul', season:'1', episode:'5',
    title:'الحلقة ٥ — الجزء الأول', ytId:'jw-4DXrhtEw', langs:{ ar:'jw-4DXrhtEw' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'التوتر يتصاعد مع اقتراب المعركة الحاسمة.' },

  { id:'ert_s1e6', series:'ertugrul', season:'1', episode:'6',
    title:'الحلقة ٦ — الجزء الأول', ytId:'aZAB3SHmdq4', langs:{ ar:'aZAB3SHmdq4' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أرطغرل يكشف خيانة من أقرب المقربين إليه.' },

  { id:'ert_s1e7', series:'ertugrul', season:'1', episode:'7',
    title:'الحلقة ٧ — الجزء الأول', ytId:'mASCSWBKRzU', langs:{ ar:'mASCSWBKRzU' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'قبيلة قايي في خطر حقيقي — أرطغرل يتخذ قراراً مصيرياً.' },

  { id:'ert_s1e8', series:'ertugrul', season:'1', episode:'8',
    title:'الحلقة ٨ — الجزء الأول', ytId:'81o4guOcqCg', langs:{ ar:'81o4guOcqCg' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أرطغرل يلاحق أعداءه في قلب الخطر — مواجهة لا رجعة منها.' },

  { id:'ert_s1e9', series:'ertugrul', season:'1', episode:'9',
    title:'الحلقة ٩ — الجزء الأول', ytId:'cV5aYJVMGvM', langs:{ ar:'cV5aYJVMGvM' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'الجزء الأول يبلغ ذروته — أرطغرل أمام أصعب لحظاته.' },

  { id:'ert_s1e10', series:'ertugrul', season:'1', episode:'10',
    title:'الحلقة ١٠ — الجزء الأول', ytId:'M6O4iW_0h10', langs:{ ar:'M6O4iW_0h10' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'نقطة تحول كبرى — القرارات المصيرية تتشكّل في الجزء الأول.' },

  { id:'ert_s2e1', series:'ertugrul', season:'2', episode:'1',
    title:'الحلقة ١ — الجزء الثاني', ytId:'VQzcdorrhHY', langs:{ ar:'VQzcdorrhHY' },
    duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'الجزء الثاني — تحديات جديدة وأعداء أشد خطورة.' },

  { id:'ert_s2e2', series:'ertugrul', season:'2', episode:'2',
    title:'الحلقة ٢ — الجزء الثاني', ytId:'M65G6yoAGVE', langs:{ ar:'M65G6yoAGVE' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أرطغرل يواجه خيانة من داخل قبيلته في أصعب اللحظات.' },

  { id:'ert_s2e10', series:'ertugrul', season:'2', episode:'10',
    title:'الحلقة ١٠ — الجزء الثاني', ytId:'TFYy4Cc_WWA', langs:{ ar:'TFYy4Cc_WWA' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'نقطة تحول كبرى في مسيرة أرطغرل وقبيلته.' },

  { id:'ert_s2e46', series:'ertugrul', season:'2', episode:'46',
    title:'الحلقة ٤٦ — الجزء الثاني', ytId:'H6RYlxaivg4', langs:{ ar:'H6RYlxaivg4' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'حلقة مشحونة بالتوتر والمواجهات في الجزء الثاني.' },

  { id:'ert_s2e72', series:'ertugrul', season:'2', episode:'72',
    title:'الحلقة ٧٢ — الجزء الثاني', ytId:'hyvXtHe-0ZQ', langs:{ ar:'hyvXtHe-0ZQ' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أرطغرل في أوج انتصاراته — الجزء الثاني يبلغ ذروته.' },

  { id:'ert_s2e82', series:'ertugrul', season:'2', episode:'82',
    title:'الحلقة ٨٢ — الجزء الثاني', ytId:'ZnmNbCzmHeI', langs:{ ar:'ZnmNbCzmHeI' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'نهاية الجزء الثاني الكبرى — ضربة مدوّية تفتح الباب للجزء الثالث.' },

  { id:'ert_s3e1', series:'ertugrul', season:'3', episode:'1',
    title:'الحلقة ١ — الجزء الثالث', ytId:'feL2_sA75cY', langs:{ ar:'feL2_sA75cY' },
    duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'الجزء الثالث يفتح باباً جديداً من المواجهات الكبرى.' },

  { id:'ert_s4e1', series:'ertugrul', season:'4', episode:'1',
    title:'الحلقة ١ — الجزء الرابع', ytId:'7worQds1Qc0', langs:{ ar:'7worQds1Qc0' },
    duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'الجزء الرابع — أرطغرل في مواجهة التحدي الأكبر في تاريخ القبيلة.' },

  { id:'ert_s4e9', series:'ertugrul', season:'4', episode:'9',
    title:'الحلقة ٩ — الجزء الرابع', ytId:'lvlB9VuV0ow', langs:{ ar:'lvlB9VuV0ow' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أحداث متسارعة تقود إلى نهاية مذهلة في الجزء الرابع.' },

  { id:'ert_s2e3', series:'ertugrul', season:'2', episode:'3',
    title:'الحلقة ٣ — الجزء الثاني', ytId:'csU1itM0YfE', langs:{ ar:'csU1itM0YfE' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أرطغرل يُؤسر من قِبل المغول — عودته تشعل خلافاً داخل القبيلة.' },

  { id:'ert_s2e4', series:'ertugrul', season:'2', episode:'4',
    title:'الحلقة ٤ — الجزء الثاني', ytId:'AL4LDMxmxR8', langs:{ ar:'AL4LDMxmxR8' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'أرطغرل يرسّخ مكانته — الجزء الثاني يكشف أبعاداً جديدة من الصراع.' },

  { id:'ert_s2e5', series:'ertugrul', season:'2', episode:'5',
    title:'الحلقة ٥ — الجزء الثاني', ytId:'b7qeEnt7R2k', langs:{ ar:'b7qeEnt7R2k' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'المكائد تتشعب — أرطغرل يسير على حافة الخطر.' },

  { id:'ert_s2e8', series:'ertugrul', season:'2', episode:'8',
    title:'الحلقة ٨ — الجزء الثاني', ytId:'65pRa-h4sW0', langs:{ ar:'65pRa-h4sW0' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'توتر متصاعد — التحالفات تتشكل من جديد في الجزء الثاني.' },

  { id:'ert_s2e20', series:'ertugrul', season:'2', episode:'20',
    title:'الحلقة ٢٠ — الجزء الثاني', ytId:'vDYbjAVp1bM', langs:{ ar:'vDYbjAVp1bM' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'منتصف الجزء الثاني — التحالفات تتبدل والخطر يتضاعف.' },

  { id:'ert_s3e2', series:'ertugrul', season:'3', episode:'2',
    title:'الحلقة ٢ — الجزء الثالث', ytId:'jmigN66i4MA', langs:{ ar:'jmigN66i4MA' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'الجزء الثالث يزداد إثارة — أرطغرل في مهمة جديدة مصيرية.' },

  { id:'ert_s3e4', series:'ertugrul', season:'3', episode:'4',
    title:'الحلقة ٤ — الجزء الثالث', ytId:'4VtC5G10rrE', langs:{ ar:'4VtC5G10rrE' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'الجزء الثالث يتسارع — أرطغرل يواجه أعداء من كل اتجاه.' },

  { id:'ert_s3e6', series:'ertugrul', season:'3', episode:'6',
    title:'الحلقة ٦ — الجزء الثالث', ytId:'iv6lnE41MbQ', langs:{ ar:'iv6lnE41MbQ' },
    duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic',
    desc:'مشهد حاسم يغير مجرى الجزء الثالث — الفارس التركي لا يستسلم.' },

  // ══════════════ المؤسس عثمان — 12 حلقة ══════════════

  { id:'osm_s1e1', series:'osman', season:'1', episode:'1',
    title:'الحلقة ١ — الجزء الأول', ytId:'Wx3ul4fqaYg', langs:{ ar:'Wx3ul4fqaYg' },
    duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'عثمان بن أرطغرل يبدأ مسيرته نحو تأسيس الدولة العثمانية العظيمة.' },

  { id:'osm_s1e2', series:'osman', season:'1', episode:'2',
    title:'الحلقة ٢ — الجزء الأول', ytId:'pXQqwCZ_7qM', langs:{ ar:'pXQqwCZ_7qM' },
    duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Arabic',
    desc:'عثمان يعمّق صراعه ضد أعداء دولته الناشئة.' },

  { id:'osm_s1e3', series:'osman', season:'1', episode:'3',
    title:'الحلقة ٣ — الجزء الأول', ytId:'GUyNVe_qpzo', langs:{ ar:'GUyNVe_qpzo' },
    duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Arabic',
    desc:'مؤامرة جديدة تهدد مسيرة عثمان وتضع قبيلته في خطر.' },

  { id:'osm_s1e5', series:'osman', season:'1', episode:'5',
    title:'الحلقة ٥ — الجزء الأول', ytId:'M_03EtNpGHc', langs:{ ar:'M_03EtNpGHc' },
    duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'عثمان يواجه تحالفاً خطيراً يهدد مستقبل الدولة الناشئة.' },

  { id:'osm_s1e6', series:'osman', season:'1', episode:'6',
    title:'الحلقة ٦ — الجزء الأول', ytId:'v4zW9CWQKy8', langs:{ ar:'v4zW9CWQKy8' },
    duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'الحلقة السادسة تكشف عن تحالفات جديدة تغير مجرى الأحداث.' },

  { id:'osm_s1e7', series:'osman', season:'1', episode:'7',
    title:'الحلقة ٧ — الجزء الأول', ytId:'K9w6bKHN8uU', langs:{ ar:'K9w6bKHN8uU' },
    duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'عثمان يتخذ قراراً جريئاً يحدد مستقبل قبيلته للأبد.' },

  { id:'osm_s2e1', series:'osman', season:'2', episode:'1',
    title:'الحلقة ١ — الجزء الثاني', ytId:'icpGGiGaqPA', langs:{ ar:'icpGGiGaqPA' },
    duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'الجزء الثاني — عثمان يوسع رقعة دولته في مواجهة البيزنطيين.' },

  { id:'osm_s2e123', series:'osman', season:'2', episode:'123',
    title:'الحلقة ١٢٣ — الجزء الثاني', ytId:'TrX81HWxtLA', langs:{ ar:'TrX81HWxtLA' },
    duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'لحظة حاسمة في الجزء الثاني — خطة عثمان تُنفَّذ بإتقان.' },

  { id:'osm_s2e173', series:'osman', season:'2', episode:'173',
    title:'الحلقة ١٧٣ — الجزء الثاني', ytId:'A0bmDEIlls4', langs:{ ar:'A0bmDEIlls4' },
    duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'نهاية الجزء الثاني الكبرى — أحداث تغير مسار القصة.' },

  { id:'osm_s3e287', series:'osman', season:'3', episode:'287',
    title:'الحلقة ٢٨٧ — الجزء الثالث', ytId:'V3NtydUb1ew', langs:{ ar:'V3NtydUb1ew' },
    duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'الجزء الثالث في أوج قوته — عثمان أمام أكبر اختبار.' },

  { id:'osm_s3e336', series:'osman', season:'3', episode:'336',
    title:'الحلقة ٣٣٦ — الجزء الثالث', ytId:'rfkKYov_TUY', langs:{ ar:'rfkKYov_TUY' },
    duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'ذروة الجزء الثالث — قرارات مصيرية ترسم ملامح المستقبل.' },

  { id:'osm_s6e189', series:'osman', season:'6', episode:'189',
    title:'الحلقة ١٨٩ — الجزء السادس', ytId:'4bnnBr6x2p0', langs:{ ar:'4bnnBr6x2p0' },
    duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان',
    desc:'لنلم الشمل من جديد — الجزء السادس في أشد لحظاته دراماتيكية.' },

  // ══════════════ وادي الذئاب — 13 حلقة ══════════════

  { id:'wad_s1e1', series:'wadi', season:'1', episode:'1',
    title:'الحلقة ١ — الجزء الأول', ytId:'g7IaxwvB4CI', langs:{ ar:'g7IaxwvB4CI' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب',
    desc:'البداية — العميل بولنت يلماز يدخل عالم الجريمة والمافيا.' },

  { id:'wad_s1e2', series:'wadi', season:'1', episode:'2',
    title:'الحلقة ٢ — الجزء الأول', ytId:'15jC2lr0k9s', langs:{ ar:'15jC2lr0k9s' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب',
    desc:'بولنت يعمّق تغلغله في شبكة الجريمة المنظمة.' },

  { id:'wad_s1e4', series:'wadi', season:'1', episode:'4',
    title:'الحلقة ٤ — الجزء الأول', ytId:'gONRxu5O0lI', langs:{ ar:'gONRxu5O0lI' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب',
    desc:'اكتشافات صادمة تقلب موازين القوى في وادي الذئاب.' },

  { id:'wad_s1e5', series:'wadi', season:'1', episode:'5',
    title:'الحلقة ٥ — الجزء الأول', ytId:'eb4CwkogIUU', langs:{ ar:'eb4CwkogIUU' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب',
    desc:'مواجهة مباشرة بين بولنت وأخطر أعدائه.' },

  { id:'wad_s1e6', series:'wadi', season:'1', episode:'6',
    title:'الحلقة ٦ — الجزء الأول', ytId:'MtUN4XAcKX8', langs:{ ar:'MtUN4XAcKX8' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب',
    desc:'الخطة تتكشف — أسرار كبيرة تظهر للعيان.' },

  { id:'wad_s1e7', series:'wadi', season:'1', episode:'7',
    title:'الحلقة ٧ — الجزء الأول', ytId:'Z3Wz3ebp0iA', langs:{ ar:'Z3Wz3ebp0iA' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب',
    desc:'بولنت في خطر حقيقي — أعداؤه يحاصرونه من كل جانب.' },

  { id:'wad_s1e9', series:'wadi', season:'1', episode:'9',
    title:'الحلقة ٩ — الجزء الأول', ytId:'K-Dedl6SpEU', langs:{ ar:'K-Dedl6SpEU' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب',
    desc:'حلقة مليئة بالتوتر تقود إلى نهاية مذهلة للجزء الأول.' },

  { id:'wad_s1e10', series:'wadi', season:'1', episode:'10',
    title:'الحلقة ١٠ — الجزء الأول', ytId:'831JB0I4Txw', langs:{ ar:'831JB0I4Txw' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب',
    desc:'نهاية الجزء الأول — ضربة مدوّية تغير كل شيء.' },

  { id:'wad_s2e1', series:'wadi', season:'2', episode:'1',
    title:'الحلقة ١ — الجزء الثاني', ytId:'Ohnvkzjfj70', langs:{ ar:'Ohnvkzjfj70' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب HD',
    desc:'الجزء الثاني — بولنت يعود من جديد بمهمة أكثر خطورة وتعقيداً.' },

  { id:'wad_s2e3', series:'wadi', season:'2', episode:'3',
    title:'الحلقة ٣ — الجزء الثاني', ytId:'XCsS4s-0hbg', langs:{ ar:'XCsS4s-0hbg' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب',
    desc:'الجزء الثاني يكشف عن وجه جديد للصراع — خيوط المؤامرة تتكشف.' },

  { id:'wad_s11e1', series:'wadi', season:'11', episode:'1',
    title:'الحلقة ١ — الجزء الحادي عشر', ytId:'oLL2veykGfE', langs:{ ar:'oLL2veykGfE' },
    duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب HD',
    desc:'الجزء الحادي عشر — الفوضى تعود بقوة مضاعفة. Full HD 1080P.' },

  // ══════════════ الحفرة — 9 حلقات ══════════════

  { id:'huf_s1e2', series:'hufra', season:'1', episode:'2',
    title:'الحلقة ٢ — الجزء الأول', ytId:'IJlaUCi7DIs', langs:{ ar:'IJlaUCi7DIs' },
    duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'Al Haram Production',
    desc:'تتعمق الصراعات وتتكشف الأسرار في الحلقة الثانية.' },

  { id:'huf_s1e3', series:'hufra', season:'1', episode:'3',
    title:'الحلقة ٣ — الجزء الأول', ytId:'oR46tA9Jdrw', langs:{ ar:'oR46tA9Jdrw' },
    duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Al Haram Production',
    desc:'الحفرة تضيق على أبطالها — قرارات صعبة تُغيّر مسار الأحداث.' },

  { id:'huf_s1e5', series:'hufra', season:'1', episode:'5',
    title:'الحلقة ٥ — الجزء الأول', ytId:'qPha5_LWoG4', langs:{ ar:'qPha5_LWoG4' },
    duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'مسلسلات تركيه',
    desc:'الحفرة تكشف عن وجهها الأشد ظلاماً — مواجهة حتمية.' },

  { id:'huf_s3e1', series:'hufra', season:'3', episode:'1',
    title:'الحلقة ١ — الجزء الثالث', ytId:'3Mj17x8syQQ', langs:{ ar:'3Mj17x8syQQ' },
    duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Al Haram Production',
    desc:'الجزء الثالث يبدأ بانفجار درامي — الحفرة تتسع أكثر من أي وقت مضى.' },

  { id:'huf_s3e5', series:'hufra', season:'3', episode:'5',
    title:'الحلقة ٥ — الجزء الثالث', ytId:'DD6HNhBjWCY', langs:{ ar:'DD6HNhBjWCY' },
    duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Al Haram Production',
    desc:'ذروة الجزء الثالث — مواجهات لا هوادة فيها تحدد مصير الجميع.' },

  // ══════════════ قطاع الطرق — 11 حلقة ══════════════

  { id:'esk_s1e1', series:'eskiya', season:'1', episode:'1',
    title:'الحلقة ١ — الجزء الأول', ytId:'V0lTA7Cd7bs', langs:{ ar:'V0lTA7Cd7bs' },
    duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن',
    desc:'الخروج من السجن بعد سنوات — الحرية لها ثمن باهظ.' },

  { id:'esk_s1e2', series:'eskiya', season:'1', episode:'2',
    title:'الحلقة ٢ — الجزء الأول', ytId:'_rU40BiwkrA', langs:{ ar:'_rU40BiwkrA' },
    duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن',
    desc:'قطاع الطرق يكشف أسراره — الصراع على الشارع يشتعل من جديد.' },

  { id:'esk_s1e4', series:'eskiya', season:'1', episode:'4',
    title:'الحلقة ٤ — الجزء الأول', ytId:'YpNpGbs9XOs', langs:{ ar:'YpNpGbs9XOs' },
    duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن',
    desc:'التحالفات الجديدة تشكل معادلة قوة مختلفة — والبطل يختار طريقه.' },

  { id:'esk_s1e110', series:'eskiya', season:'1', episode:'110',
    title:'الحلقة ١١٠ — نهاية الجزء الأول', ytId:'bZ8w7XTU2LA', langs:{ ar:'bZ8w7XTU2LA' },
    duration:'1:18', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن',
    desc:'نهاية الجزء الأول — ذروة درامية تفتح الباب لموسم جديد.' },

  { id:'esk_s3e249', series:'eskiya', season:'3', episode:'249',
    title:'الحلقة ٢٤٩ — الجزء الثالث', ytId:'2enOibcxUn0', langs:{ ar:'2enOibcxUn0' },
    duration:'1:15', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن',
    desc:'الجزء الثالث — أكشن بلا توقف وتطورات مذهلة في قصة قطاع الطرق.' },

  // ══════════════ دارجة مغربية ══════════════

  { id:'darija_1', series:'', season:'', episode:'',
    title:'مسلسل الانتقام — دوبلاج دارجة (2M)',
    ytId:'39io_6--8TI', langs:{ darija:'39io_6--8TI' },
    duration:'45:00', cat:'دارجة مغربية', type:'حلقة', source:'القناة الثانية 2M',
    desc:'مسلسل تركي مدبلج بالدارجة المغربية على القناة الثانية.' },

  // ══════════════ قيامة أرطغرل — حلقات جديدة S1 (E11–E69) ══════════════

  { id:'ert_s1e11', series:'ertugrul', season:'1', episode:'11', title:'الحلقة ١١ — الجزء الأول', ytId:'rLoQCkjiH0c', langs:{ ar:'rLoQCkjiH0c' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يشتعل — أرطغرل يكشف مؤامرة جديدة تهدد قبيلته.' },
  { id:'ert_s1e12', series:'ertugrul', season:'1', episode:'12', title:'الحلقة ١٢ — الجزء الأول', ytId:'Jc2dnSC0_eY', langs:{ ar:'Jc2dnSC0_eY' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'التحالفات تتشكل من جديد في الجزء الأول — الأعداء أصبحوا أكثر خطورة.' },
  { id:'ert_s1e13', series:'ertugrul', season:'1', episode:'13', title:'الحلقة ١٣ — الجزء الأول', ytId:'Ygx5YH7S1q8', langs:{ ar:'Ygx5YH7S1q8' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يتخذ قراراً جريئاً يغير مجرى الأحداث في الجزء الأول.' },
  { id:'ert_s1e14', series:'ertugrul', season:'1', episode:'14', title:'الحلقة ١٤ — الجزء الأول', ytId:'ZKcIv5ishco', langs:{ ar:'ZKcIv5ishco' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'خيانة من الداخل تهز قبيلة قايي — أرطغرل يواجه أقسى الاختبارات.' },
  { id:'ert_s1e15', series:'ertugrul', season:'1', episode:'15', title:'الحلقة ١٥ — الجزء الأول', ytId:'z_8BSyGjHbM', langs:{ ar:'z_8BSyGjHbM' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يبلغ منتصف طريقه — والمعارك تزداد ضراوة وتعقيداً.' },
  { id:'ert_s1e16', series:'ertugrul', season:'1', episode:'16', title:'الحلقة ١٦ — الجزء الأول', ytId:'Es_Zuki0PO8', langs:{ ar:'Es_Zuki0PO8' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أسرار تُكشف وحسابات تتغير — أرطغرل في مواجهة مع القدر.' },
  { id:'ert_s1e17', series:'ertugrul', season:'1', episode:'17', title:'الحلقة ١٧ — الجزء الأول', ytId:'2mYSUqIWSxU', langs:{ ar:'2mYSUqIWSxU' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'مناورات خطرة في الجزء الأول — كل خطوة قد تكون الأخيرة.' },
  { id:'ert_s1e18', series:'ertugrul', season:'1', episode:'18', title:'الحلقة ١٨ — الجزء الأول', ytId:'fpLUrH4I1MI', langs:{ ar:'fpLUrH4I1MI' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الإيمان والشجاعة يقودان أرطغرل في منتصف الجزء الأول.' },
  { id:'ert_s1e19', series:'ertugrul', season:'1', episode:'19', title:'الحلقة ١٩ — الجزء الأول', ytId:'8DyygsTEQ9c', langs:{ ar:'8DyygsTEQ9c' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'ليلة مشحونة بالتوتر — أرطغرل على مفترق الطرق.' },
  { id:'ert_s1e20', series:'ertugrul', season:'1', episode:'20', title:'الحلقة ٢٠ — الجزء الأول', ytId:'gXSh2pNwbWk', langs:{ ar:'gXSh2pNwbWk' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الحلقة العشرون — منعطف كبير في مسيرة أرطغرل الأولى.' },
  { id:'ert_s1e21', series:'ertugrul', season:'1', episode:'21', title:'الحلقة ٢١ — الجزء الأول', ytId:'MaclU1a0aSw', langs:{ ar:'MaclU1a0aSw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول ينفجر بأحداث لم يتوقعها أحد — القبيلة تتحد.' },
  { id:'ert_s1e22', series:'ertugrul', season:'1', episode:'22', title:'الحلقة ٢٢ — الجزء الأول', ytId:'zciZoQ1lNpI', langs:{ ar:'zciZoQ1lNpI' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'معركة الإرادات تشتعل — أرطغرل يحمل راية الحق في الجزء الأول.' },
  { id:'ert_s1e23', series:'ertugrul', season:'1', episode:'23', title:'الحلقة ٢٣ — الجزء الأول', ytId:'gNecK4p7ojo', langs:{ ar:'gNecK4p7ojo' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'تضحيات جسيمة ووفاء عميق — الجزء الأول يكشف معادن الرجال.' },
  { id:'ert_s1e24', series:'ertugrul', season:'1', episode:'24', title:'الحلقة ٢٤ — الجزء الأول', ytId:'0kdAm7YS2Is', langs:{ ar:'0kdAm7YS2Is' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يقترب من ذروته — كل حلقة أشد إثارة من سابقتها.' },
  { id:'ert_s1e25', series:'ertugrul', season:'1', episode:'25', title:'الحلقة ٢٥ — الجزء الأول', ytId:'z6967URZzrg', langs:{ ar:'z6967URZzrg' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الحلقة الخامسة والعشرون تفتح أبواباً جديدة من الأحداث.' },
  { id:'ert_s1e26', series:'ertugrul', season:'1', episode:'26', title:'الحلقة ٢٦ — الجزء الأول', ytId:'mBjgu-iM-sE', langs:{ ar:'mBjgu-iM-sE' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يواصل مسيرته بإصرار لا ينكسر في الجزء الأول.' },
  { id:'ert_s1e27', series:'ertugrul', season:'1', episode:'27', title:'الحلقة ٢٧ — الجزء الأول', ytId:'ECWpJlp8QaA', langs:{ ar:'ECWpJlp8QaA' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'التوتر يبلغ ذروته في الجزء الأول — المعركة القادمة ستحدد كل شيء.' },
  { id:'ert_s1e28', series:'ertugrul', season:'1', episode:'28', title:'الحلقة ٢٨ — الجزء الأول', ytId:'eRvwVp7GAI8', langs:{ ar:'eRvwVp7GAI8' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'لحظات مصيرية في الجزء الأول — الإيمان يتغلب على الخوف.' },
  { id:'ert_s1e29', series:'ertugrul', season:'1', episode:'29', title:'الحلقة ٢٩ — الجزء الأول', ytId:'5EAo8JR5if0', langs:{ ar:'5EAo8JR5if0' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يقترب من خاتمته المذهلة — أرطغرل يضع خطته الكبرى.' },
  { id:'ert_s1e30', series:'ertugrul', season:'1', episode:'30', title:'الحلقة ٣٠ — الجزء الأول', ytId:'UeCD1OvIKlM', langs:{ ar:'UeCD1OvIKlM' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الحلقة الثلاثون — نصف طريق نحو الانتصار الكبير في الجزء الأول.' },
  { id:'ert_s1e31', series:'ertugrul', season:'1', episode:'31', title:'الحلقة ٣١ — الجزء الأول', ytId:'6_e8YwG6hfw', langs:{ ar:'6_e8YwG6hfw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يبلغ ذروته — تحالفات جديدة وخيانات مفاجئة تغير الحسابات.' },
  { id:'ert_s1e32', series:'ertugrul', season:'1', episode:'32', title:'الحلقة ٣٢ — الجزء الأول', ytId:'eNoIy4FWJoU', langs:{ ar:'eNoIy4FWJoU' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل في قلب العاصفة — الجزء الأول لا يترك مجالاً للراحة.' },
  { id:'ert_s1e33', series:'ertugrul', season:'1', episode:'33', title:'الحلقة ٣٣ — الجزء الأول', ytId:'X3znos66rz0', langs:{ ar:'X3znos66rz0' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الطريق نحو الانتصار مليء بالتضحيات — أرطغرل يعلم ذلك جيداً.' },
  { id:'ert_s1e34', series:'ertugrul', season:'1', episode:'34', title:'الحلقة ٣٤ — الجزء الأول', ytId:'Vmgl5oILf0w', langs:{ ar:'Vmgl5oILf0w' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الإستراتيجية والشجاعة يتحدان في شخص أرطغرل — الجزء الأول في أوجه.' },
  { id:'ert_s1e35', series:'ertugrul', season:'1', episode:'35', title:'الحلقة ٣٥ — الجزء الأول', ytId:'CVPA2lw-EQc', langs:{ ar:'CVPA2lw-EQc' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'المعارك تتصاعد والأحداث تتسارع في النصف الثاني من الجزء الأول.' },
  { id:'ert_s1e36', series:'ertugrul', season:'1', episode:'36', title:'الحلقة ٣٦ — الجزء الأول', ytId:'PZvGacpQux8', langs:{ ar:'PZvGacpQux8' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'قبيلة قايي تتماسك في وجه العواصف — أرطغرل يقود من الأمام.' },
  { id:'ert_s1e37', series:'ertugrul', season:'1', episode:'37', title:'الحلقة ٣٧ — الجزء الأول', ytId:'ENk7_I6j1qg', langs:{ ar:'ENk7_I6j1qg' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يكشف طبقات جديدة من الإثارة والدراما الإنسانية.' },
  { id:'ert_s1e38', series:'ertugrul', season:'1', episode:'38', title:'الحلقة ٣٨ — الجزء الأول', ytId:'oWQ3Xpq_8B4', langs:{ ar:'oWQ3Xpq_8B4' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يحمي أحبته بكل ما أوتي من قوة في الجزء الأول.' },
  { id:'ert_s1e39', series:'ertugrul', season:'1', episode:'39', title:'الحلقة ٣٩ — الجزء الأول', ytId:'nbw9CJKhNRE', langs:{ ar:'nbw9CJKhNRE' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'ليلة الحقيقة في الجزء الأول — الكشف عن وجوه لم تتوقعها.' },
  { id:'ert_s1e40', series:'ertugrul', season:'1', episode:'40', title:'الحلقة ٤٠ — الجزء الأول', ytId:'pfCLeh6vyZY', langs:{ ar:'pfCLeh6vyZY' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الحلقة الأربعون — نقطة لا عودة في مسيرة الجزء الأول.' },
  { id:'ert_s1e41', series:'ertugrul', season:'1', episode:'41', title:'الحلقة ٤١ — الجزء الأول', ytId:'OuQfbsQCsJg', langs:{ ar:'OuQfbsQCsJg' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل في قلب العاصفة — الجزء الأول لا يترك مجالاً للتنفس.' },
  { id:'ert_s1e42', series:'ertugrul', season:'1', episode:'42', title:'الحلقة ٤٢ — الجزء الأول', ytId:'AffrPWzbni0', langs:{ ar:'AffrPWzbni0' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'المعارك الكبرى تتشكّل في الجزء الأول — القيامة حقيقية.' },
  { id:'ert_s1e43', series:'ertugrul', season:'1', episode:'43', title:'الحلقة ٤٣ — الجزء الأول', ytId:'ism_JVsqbzk', langs:{ ar:'ism_JVsqbzk' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'شجاعة نادرة في لحظات الخطر — أرطغرل يُلهم من حوله في الجزء الأول.' },
  { id:'ert_s1e44', series:'ertugrul', season:'1', episode:'44', title:'الحلقة ٤٤ — الجزء الأول', ytId:'WlmI0oCq1CU', langs:{ ar:'WlmI0oCq1CU' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يقترب من نهايته الكبرى — كل قرار له ثمنه.' },
  { id:'ert_s1e45', series:'ertugrul', season:'1', episode:'45', title:'الحلقة ٤٥ — الجزء الأول', ytId:'RhNcrmP_cwA', langs:{ ar:'RhNcrmP_cwA' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الساعة الأخيرة في الجزء الأول تقترب — المصائر تتحدد.' },
  { id:'ert_s1e46', series:'ertugrul', season:'1', episode:'46', title:'الحلقة ٤٦ — الجزء الأول', ytId:'l1B2YH9cecE', langs:{ ar:'l1B2YH9cecE' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يضرب ضربته الكبرى في الجزء الأول — لا رجعة بعد الآن.' },
  { id:'ert_s1e47', series:'ertugrul', season:'1', episode:'47', title:'الحلقة ٤٧ — الجزء الأول', ytId:'uD6gQbVhND0', langs:{ ar:'uD6gQbVhND0' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يُسدل ستاره على أحداث غيّرت مسار القصة كلياً.' },
  { id:'ert_s1e48', series:'ertugrul', season:'1', episode:'48', title:'الحلقة ٤٨ — الجزء الأول', ytId:'kFBczETovTw', langs:{ ar:'kFBczETovTw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'النهاية تقترب — أرطغرل يجمع كل قواه لمعركة الحسم في الجزء الأول.' },
  { id:'ert_s1e49', series:'ertugrul', season:'1', episode:'49', title:'الحلقة ٤٩ — الجزء الأول', ytId:'s2EC7k7IVs4', langs:{ ar:'s2EC7k7IVs4' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'ما قبل الختام — الجزء الأول يضع اللبنة الأخيرة قبل المعركة الكبرى.' },
  { id:'ert_s1e50', series:'ertugrul', season:'1', episode:'50', title:'الحلقة ٥٠ — الجزء الأول', ytId:'VzXB0heqfJI', langs:{ ar:'VzXB0heqfJI' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الحلقة الخمسون من الجزء الأول — إثارة لا تنتهي مع أرطغرل.' },
  { id:'ert_s1e51', series:'ertugrul', season:'1', episode:'51', title:'الحلقة ٥١ — الجزء الأول', ytId:'Dkj9do-nOX0', langs:{ ar:'Dkj9do-nOX0' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'المعارك الكبرى تتشكّل في الجزء الأول — القيامة حقيقية لا تتوقف.' },
  { id:'ert_s1e52', series:'ertugrul', season:'1', episode:'52', title:'الحلقة ٥٢ — الجزء الأول', ytId:'zh9Pl3U7udM', langs:{ ar:'zh9Pl3U7udM' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يسير في الجزء الأول نحو الحرية والكرامة بخطى ثابتة.' },
  { id:'ert_s1e53', series:'ertugrul', season:'1', episode:'53', title:'الحلقة ٥٣ — الجزء الأول', ytId:'CHUp3g_yd8w', langs:{ ar:'CHUp3g_yd8w' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول في مرحلته الأخيرة — كل حلقة أقوى من السابقة.' },
  { id:'ert_s1e54', series:'ertugrul', season:'1', episode:'54', title:'الحلقة ٥٤ — الجزء الأول', ytId:'bItyqtrUCtw', langs:{ ar:'bItyqtrUCtw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الوفاء والشرف قيم أرطغرل في الجزء الأول — لا تهز إرادته أي قوة.' },
  { id:'ert_s1e55', series:'ertugrul', season:'1', episode:'55', title:'الحلقة ٥٥ — الجزء الأول', ytId:'NR1WiuiyfMk', langs:{ ar:'NR1WiuiyfMk' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يكشف أسراره الكبرى — مفاجآت لم يتوقعها المشاهد.' },
  { id:'ert_s1e56', series:'ertugrul', season:'1', episode:'56', title:'الحلقة ٥٦ — الجزء الأول', ytId:'i8jCXe3tHaA', langs:{ ar:'i8jCXe3tHaA' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الضربة الكبرى تقترب — أرطغرل يضع خطته النهائية في الجزء الأول.' },
  { id:'ert_s1e57', series:'ertugrul', season:'1', episode:'57', title:'الحلقة ٥٧ — الجزء الأول', ytId:'zKX8cdqEuFw', langs:{ ar:'zKX8cdqEuFw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يواجه أشد لحظاته صعوبة في ختام الجزء الأول.' },
  { id:'ert_s1e58', series:'ertugrul', season:'1', episode:'58', title:'الحلقة ٥٨ — الجزء الأول', ytId:'jAO0fFG1OXU', langs:{ ar:'jAO0fFG1OXU' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'ما قبل نهاية الجزء الأول — الدراما تبلغ أقصى نقاط الاشتعال.' },
  { id:'ert_s1e59', series:'ertugrul', season:'1', episode:'59', title:'الحلقة ٥٩ — الجزء الأول', ytId:'_saRH0ezTG4', langs:{ ar:'_saRH0ezTG4' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول يُسدل ستاره — أرطغرل يقف على مشارف نصره الكبير.' },
  { id:'ert_s1e60', series:'ertugrul', season:'1', episode:'60', title:'الحلقة ٦٠ — الجزء الأول', ytId:'QIGUYk2Jszw', langs:{ ar:'QIGUYk2Jszw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الحلقة الستون في الجزء الأول — مشهد تاريخي يُخلّد أرطغرل.' },
  { id:'ert_s1e61', series:'ertugrul', season:'1', episode:'61', title:'الحلقة ٦١ — الجزء الأول', ytId:'yyz6Cku9yb4', langs:{ ar:'yyz6Cku9yb4' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'نهاية الجزء الأول تقترب — الختام سيكون ملحمياً بكل المقاييس.' },
  { id:'ert_s1e62', series:'ertugrul', season:'1', episode:'62', title:'الحلقة ٦٢ — الجزء الأول', ytId:'KYrLsMUTaOI', langs:{ ar:'KYrLsMUTaOI' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول في مرحلته الختامية — كل حلقة تاريخ.' },
  { id:'ert_s1e63', series:'ertugrul', season:'1', episode:'63', title:'الحلقة ٦٣ — الجزء الأول', ytId:'0gmD3sm219M', langs:{ ar:'0gmD3sm219M' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يكتب آخر فصول الجزء الأول بسيفه وإيمانه.' },
  { id:'ert_s1e64', series:'ertugrul', season:'1', episode:'64', title:'الحلقة ٦٤ — الجزء الأول', ytId:'q3vYsrMCk9o', langs:{ ar:'q3vYsrMCk9o' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الوقت يضغط والمعركة الحاسمة في الجزء الأول لا تنتظر.' },
  { id:'ert_s1e65', series:'ertugrul', season:'1', episode:'65', title:'الحلقة ٦٥ — الجزء الأول', ytId:'_Y7eJp6_GrQ', langs:{ ar:'_Y7eJp6_GrQ' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الأول ينتهي بضربة مدوّية — المستقبل يبدأ من هنا.' },
  { id:'ert_s1e66', series:'ertugrul', season:'1', episode:'66', title:'الحلقة ٦٦ — الجزء الأول', ytId:'TmmPCfghwgo', langs:{ ar:'TmmPCfghwgo' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'ما قبل الختام الكبير — الجزء الأول في أشد لحظاته درامية.' },
  { id:'ert_s1e67', series:'ertugrul', season:'1', episode:'67', title:'الحلقة ٦٧ — الجزء الأول', ytId:'h3L1p9r031s', langs:{ ar:'h3L1p9r031s' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يخوض معركة الحسم الأخيرة في الجزء الأول بكل ما أوتي.' },
  { id:'ert_s1e68', series:'ertugrul', season:'1', episode:'68', title:'الحلقة ٦٨ — الجزء الأول', ytId:'rda3Az5DsEI', langs:{ ar:'rda3Az5DsEI' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الختام يقترب — الجزء الأول كان رحلة لا تُنسى مع أرطغرل.' },
  { id:'ert_s1e69', series:'ertugrul', season:'1', episode:'69', title:'الحلقة ٦٩ — الجزء الأول', ytId:'2wX6aonIW2o', langs:{ ar:'2wX6aonIW2o' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'آخر حلقة في الجزء الأول — نهاية فصل وبداية ملحمة أكبر.' },

  // ══════════════ قيامة أرطغرل — حلقات جديدة S2 ══════════════

  { id:'ert_s2e6', series:'ertugrul', season:'2', episode:'6', title:'الحلقة ٦ — الجزء الثاني', ytId:'ritJIz8N0f4', langs:{ ar:'ritJIz8N0f4' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثاني يكشف وجهاً جديداً للصراع — أرطغرل أقوى وأكثر حكمة.' },
  { id:'ert_s2e7', series:'ertugrul', season:'2', episode:'7', title:'الحلقة ٧ — الجزء الثاني', ytId:'BtdiifNbhCM', langs:{ ar:'BtdiifNbhCM' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثاني يتصاعد — المكائد تتعمق والمواجهات تشتد.' },
  { id:'ert_s2e9', series:'ertugrul', season:'2', episode:'9', title:'الحلقة ٩ — الجزء الثاني', ytId:'cg2q5RoIOl0', langs:{ ar:'cg2q5RoIOl0' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يعود بقوة في الجزء الثاني — لا شيء يوقف مسيرة القايي.' },
  { id:'ert_s2e11', series:'ertugrul', season:'2', episode:'11', title:'الحلقة ١١ — الجزء الثاني', ytId:'NRLZ0vNNFqw', langs:{ ar:'NRLZ0vNNFqw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثاني في منتصف طريقه — التوتر يصل أقصى مستوياته.' },
  { id:'ert_s2e12', series:'ertugrul', season:'2', episode:'12', title:'الحلقة ١٢ — الجزء الثاني', ytId:'Zela6FSyJxs', langs:{ ar:'Zela6FSyJxs' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أسرار الجزء الثاني تتكشف — كل حقيقة تفتح باباً لمفاجأة أخرى.' },
  { id:'ert_s2e13', series:'ertugrul', season:'2', episode:'13', title:'الحلقة ١٣ — الجزء الثاني', ytId:'kWqAO6tj5Q0', langs:{ ar:'kWqAO6tj5Q0' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثاني يكشف طبقات جديدة من الدراما والإثارة الإنسانية.' },
  { id:'ert_s2e14', series:'ertugrul', season:'2', episode:'14', title:'الحلقة ١٤ — الجزء الثاني', ytId:'O1yJG7GcmWw', langs:{ ar:'O1yJG7GcmWw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'خطط محكمة وتضحيات كبرى — الجزء الثاني يصنع أبطاله.' },
  { id:'ert_s2e15', series:'ertugrul', season:'2', episode:'15', title:'الحلقة ١٥ — الجزء الثاني', ytId:'VKSLi5MpBmo', langs:{ ar:'VKSLi5MpBmo' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الإيمان والإرادة يقودان أرطغرل في منتصف الجزء الثاني.' },
  { id:'ert_s2e16', series:'ertugrul', season:'2', episode:'16', title:'الحلقة ١٦ — الجزء الثاني', ytId:'JFfVV1-Pidg', langs:{ ar:'JFfVV1-Pidg' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'مشهد لا يُنسى في الجزء الثاني — أرطغرل يُثبت قيمته مرة أخرى.' },
  { id:'ert_s2e17', series:'ertugrul', season:'2', episode:'17', title:'الحلقة ١٧ — الجزء الثاني', ytId:'hPKutM5DSpU', langs:{ ar:'hPKutM5DSpU' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثاني يبلغ نقطة تحول كبرى — لا شيء سيعود كما كان.' },
  { id:'ert_s2e30', series:'ertugrul', season:'2', episode:'30', title:'الحلقة ٣٠ — الجزء الثاني', ytId:'K4w-vGRZnbw', langs:{ ar:'K4w-vGRZnbw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'منتصف الجزء الثاني — الخيوط تتشابك والحسابات تتعقد أكثر.' },
  { id:'ert_s2e40', series:'ertugrul', season:'2', episode:'40', title:'الحلقة ٤٠ — الجزء الثاني', ytId:'RJ9trzLxK8w', langs:{ ar:'RJ9trzLxK8w' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثاني يقترب من نهايته الكبرى — المعركة الحاسمة تلوح.' },

  // ══════════════ قيامة أرطغرل — حلقات جديدة S3 ══════════════

  { id:'ert_s3e3', series:'ertugrul', season:'3', episode:'3', title:'الحلقة ٣ — الجزء الثالث', ytId:'1g2G0PdXl6c', langs:{ ar:'1g2G0PdXl6c' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثالث يضرب بقوة — أرطغرل في مهمة المصير الكبرى.' },
  { id:'ert_s3e5', series:'ertugrul', season:'3', episode:'5', title:'الحلقة ٥ — الجزء الثالث', ytId:'F0PACuC7ntk', langs:{ ar:'F0PACuC7ntk' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثالث يتسارع — لحظات حاسمة تصنع تاريخ القبيلة.' },
  { id:'ert_s3e7', series:'ertugrul', season:'3', episode:'7', title:'الحلقة ٧ — الجزء الثالث', ytId:'Wri-zOxpEFo', langs:{ ar:'Wri-zOxpEFo' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثالث يكشف أسراره العميقة — الصراع يصل مستوى جديداً.' },
  { id:'ert_s3e8', series:'ertugrul', season:'3', episode:'8', title:'الحلقة ٨ — الجزء الثالث', ytId:'b1UIGB5nmXs', langs:{ ar:'b1UIGB5nmXs' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل في أوج إصراره — الجزء الثالث لا يرحم ضعيفاً.' },
  { id:'ert_s3e9', series:'ertugrul', season:'3', episode:'9', title:'الحلقة ٩ — الجزء الثالث', ytId:'Cw7pGOAVDTg', langs:{ ar:'Cw7pGOAVDTg' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثالث يبلغ ذروته — كل حلقة تبدو وكأنها نهاية وبداية في آن.' },
  { id:'ert_s3e10', series:'ertugrul', season:'3', episode:'10', title:'الحلقة ١٠ — الجزء الثالث', ytId:'DZuTMnhIjvY', langs:{ ar:'DZuTMnhIjvY' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثالث يُسلّط الضوء على قيم أرطغرل الأعمق.' },
  { id:'ert_s3e11', series:'ertugrul', season:'3', episode:'11', title:'الحلقة ١١ — الجزء الثالث', ytId:'_Y_Uu24qmTw', langs:{ ar:'_Y_Uu24qmTw' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'المعارك الكبرى في الجزء الثالث — الفارق بين الإرادات واضح.' },
  { id:'ert_s3e12', series:'ertugrul', season:'3', episode:'12', title:'الحلقة ١٢ — الجزء الثالث', ytId:'_jaYf0RdTbE', langs:{ ar:'_jaYf0RdTbE' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الثالث يمضي بثبات نحو نهايته الملحمية.' },

  // ══════════════ قيامة أرطغرل — حلقات جديدة S4 ══════════════

  { id:'ert_s4e2', series:'ertugrul', season:'4', episode:'2', title:'الحلقة ٢ — الجزء الرابع', ytId:'7F-eSw0Bw7w', langs:{ ar:'7F-eSw0Bw7w' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الرابع يبدأ بقوة — أرطغرل أمام أكبر تحديات مسيرته.' },
  { id:'ert_s4e3', series:'ertugrul', season:'4', episode:'3', title:'الحلقة ٣ — الجزء الرابع', ytId:'8CKmmP_D5T4', langs:{ ar:'8CKmmP_D5T4' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الرابع يكشف أبعاداً جديدة للصراع — الإمبراطورية تتشكل.' },
  { id:'ert_s4e10', series:'ertugrul', season:'4', episode:'10', title:'الحلقة ١٠ — الجزء الرابع', ytId:'FTS1YYQpqDE', langs:{ ar:'FTS1YYQpqDE' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'نقطة تحول كبرى في الجزء الرابع — الحسابات تتغير جذرياً.' },

  // ══════════════ قيامة أرطغرل — الجزء الخامس (جديد) ══════════════

  { id:'ert_s5e1', series:'ertugrul', season:'5', episode:'1', title:'الحلقة ١ — الجزء الخامس', ytId:'J5J4pCMzYIE', langs:{ ar:'J5J4pCMzYIE' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الخامس والأخير — أرطغرل يواجه مصيره الأعظم في ختام الملحمة.' },
  { id:'ert_s5e2', series:'ertugrul', season:'5', episode:'2', title:'الحلقة ٢ — الجزء الخامس', ytId:'5jR0wuDYstQ', langs:{ ar:'5jR0wuDYstQ' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الجزء الخامس يتصاعد — الأحداث تسير نحو الخاتمة التاريخية.' },
  { id:'ert_s5e3', series:'ertugrul', season:'5', episode:'3', title:'الحلقة ٣ — الجزء الخامس', ytId:'UuqNZeykeXA', langs:{ ar:'UuqNZeykeXA' }, duration:'1:28', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أرطغرل يرسم في الجزء الخامس ملامح الدولة التي ستغير التاريخ.' },

  // ══════════════ المؤسس عثمان — حلقات جديدة ══════════════

  { id:'osm_s1e4', series:'osman', season:'1', episode:'4', title:'الحلقة ٤ — الجزء الأول', ytId:'DzG8q1MQr6Y', langs:{ ar:'DzG8q1MQr6Y' }, duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'عثمان يثبت مكانته في الجزء الأول — خطوة بخطوة نحو تأسيس الدولة.' },
  { id:'osm_s1e8', series:'osman', season:'1', episode:'8', title:'الحلقة ٨ — الجزء الأول', ytId:'NufkP49E1SE', langs:{ ar:'NufkP49E1SE' }, duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول من المؤسس عثمان يشتعل — مواجهة لا هوادة فيها.' },
  { id:'osm_s1e10', series:'osman', season:'1', episode:'10', title:'الحلقة ١٠ — الجزء الأول', ytId:'ziiIYDwfwIE', langs:{ ar:'ziiIYDwfwIE' }, duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'عثمان يقترب من نقطة التحول الكبرى في الجزء الأول.' },
  { id:'osm_s1e11', series:'osman', season:'1', episode:'11', title:'الحلقة ١١ — الجزء الأول', ytId:'QuomXQEJ6wE', langs:{ ar:'QuomXQEJ6wE' }, duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول يكشف عزيمة عثمان — لا قوة تثنيه عن مسيرته.' },
  { id:'osm_s1e15', series:'osman', season:'1', episode:'15', title:'الحلقة ١٥ — الجزء الأول', ytId:'z8iez221zkQ', langs:{ ar:'z8iez221zkQ' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'ختام الجزء الأول يقترب — عثمان يضع اللبنة الأولى للدولة الكبرى.' },
  { id:'osm_s2e29', series:'osman', season:'2', episode:'29', title:'الحلقة ٢٩ — الجزء الثاني', ytId:'HVNlN7TIyQA', langs:{ ar:'HVNlN7TIyQA' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني في أوجه — عثمان يسقط في الفخ ثم يعود أقوى.' },
  { id:'osm_s2e31', series:'osman', season:'2', episode:'31', title:'الحلقة ٣١ — الجزء الثاني', ytId:'BSZlaXxgIoI', langs:{ ar:'BSZlaXxgIoI' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يبلغ ذروته — المعركة الكبرى تقترب من عثمان.' },
  { id:'osm_s2e36', series:'osman', season:'2', episode:'36', title:'الحلقة ٣٦ — الجزء الثاني', ytId:'k8Q6GNWxgGk', langs:{ ar:'k8Q6GNWxgGk' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'نقطة تحول كبرى في الجزء الثاني — الخريطة الجغرافية تتغير.' },
  { id:'osm_s2e39', series:'osman', season:'2', episode:'39', title:'الحلقة ٣٩ — الجزء الثاني', ytId:'1oDB6hDh9A4', langs:{ ar:'1oDB6hDh9A4' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'المؤسس عثمان في الجزء الثاني يواجه أشد أعدائه شراسة.' },
  { id:'osm_s2e55', series:'osman', season:'2', episode:'55', title:'الحلقة ٥٥ — الجزء الثاني', ytId:'tbVrRkPjPv4', langs:{ ar:'tbVrRkPjPv4' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يتجه نحو خاتمته المذهلة — عثمان لا يهدأ.' },
  { id:'osm_s2e202', series:'osman', season:'2', episode:'202', title:'الحلقة ٢٠٢ — الجزء الثاني', ytId:'AP40ZYgRsqw', langs:{ ar:'AP40ZYgRsqw' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني في ذروته — عثمان يتخذ قرار المصير الأكبر.' },

  // ══════════════ وادي الذئاب — حلقات جديدة ══════════════

  { id:'wad_s1e3', series:'wadi', season:'1', episode:'3', title:'الحلقة ٣ — الجزء الأول', ytId:'i6pdAeXv6E0', langs:{ ar:'i6pdAeXv6E0' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'بولنت يعمّق تغلغله في شبكة الجريمة — الحقيقة أكثر إيلاماً مما توقع.' },
  { id:'wad_s2e5', series:'wadi', season:'2', episode:'5', title:'الحلقة ٥ — الجزء الثاني', ytId:'kJYVO8HLZaM', langs:{ ar:'kJYVO8HLZaM' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثاني يتصاعد — بولنت في مواجهة خطر لم يُحسب حسابه.' },

  // ══════════════ وادي الذئاب — موسم ٢ (حلقات إضافية) ══════════════
  { id:'wad_s2e2',  series:'wadi', season:'2', episode:'2',  title:'الحلقة ٢ — الجزء الثاني',  ytId:'vsSYyhopi6c', langs:{ ar:'vsSYyhopi6c' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثاني — بولنت يعمّق تغلغله في أعماق المافيا.' },
  { id:'wad_s2e4',  series:'wadi', season:'2', episode:'4',  title:'الحلقة ٤ — الجزء الثاني',  ytId:'9zqB1vt0RJM', langs:{ ar:'9zqB1vt0RJM' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثاني يكشف أسرار المنظومة الإجرامية.' },
  { id:'wad_s2e7',  series:'wadi', season:'2', episode:'7',  title:'الحلقة ٧ — الجزء الثاني',  ytId:'OzqgVtUKHK8', langs:{ ar:'OzqgVtUKHK8' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'وادي الذئاب في أوج إثارته — الخطر يحدق بالعميل.' },
  { id:'wad_s2e8',  series:'wadi', season:'2', episode:'8',  title:'الحلقة ٨ — الجزء الثاني',  ytId:'qCAVlE9Xl0I', langs:{ ar:'qCAVlE9Xl0I' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'بولنت أمام مواجهة مباشرة لا مفر منها.' },
  { id:'wad_s2e9',  series:'wadi', season:'2', episode:'9',  title:'الحلقة ٩ — الجزء الثاني',  ytId:'twpPKxScuGM', langs:{ ar:'twpPKxScuGM' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثاني يصل ذروته — الجريمة لا تعرف الرحمة.' },
  { id:'wad_s2e11', series:'wadi', season:'2', episode:'11', title:'الحلقة ١١ — الجزء الثاني', ytId:'oqSg-1VUpis', langs:{ ar:'oqSg-1VUpis' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'وادي الذئاب لا يهدأ — العميل السري في أشد اختباراته.' },
  { id:'wad_s2e12', series:'wadi', season:'2', episode:'12', title:'الحلقة ١٢ — الجزء الثاني', ytId:'PxeiNGJP6ug', langs:{ ar:'PxeiNGJP6ug' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'المافيا تكشف وجهها الأكثر خطورة.' },
  { id:'wad_s2e13', series:'wadi', season:'2', episode:'13', title:'الحلقة ١٣ — الجزء الثاني', ytId:'E9WHASj9Mgg', langs:{ ar:'E9WHASj9Mgg' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثاني في منعطف حاسم — المصائر تتشابك.' },
  { id:'wad_s2e14', series:'wadi', season:'2', episode:'14', title:'الحلقة ١٤ — الجزء الثاني', ytId:'2Yury1keE3A', langs:{ ar:'2Yury1keE3A' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'بولنت يواجه أكثر لحظاته خطورة في التاريخ.' },
  { id:'wad_s2e16', series:'wadi', season:'2', episode:'16', title:'الحلقة ١٦ — الجزء الثاني', ytId:'qBxpinkw72o', langs:{ ar:'qBxpinkw72o' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثاني يكتب إحدى أشد فصوله.' },
  { id:'wad_s2e19', series:'wadi', season:'2', episode:'19', title:'الحلقة ١٩ — الجزء الثاني', ytId:'-p84HK1g9E8', langs:{ ar:'-p84HK1g9E8' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'وادي الذئاب يمد مخالبه — لا أحد في أمان.' },
  { id:'wad_s2e20', series:'wadi', season:'2', episode:'20', title:'الحلقة ٢٠ — الجزء الثاني', ytId:'jp_uQsmSFdU', langs:{ ar:'jp_uQsmSFdU' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'عشرون حلقة من الإثارة المحمومة في الجزء الثاني.' },
  { id:'wad_s2e23', series:'wadi', season:'2', episode:'23', title:'الحلقة ٢٣ — الجزء الثاني', ytId:'lVam08zzbEM', langs:{ ar:'lVam08zzbEM' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثاني يقترب من الختام — والمواجهة الكبرى تنتظر.' },
  { id:'wad_s2e24', series:'wadi', season:'2', episode:'24', title:'الحلقة ٢٤ — الجزء الثاني', ytId:'j5KDRE0GofM', langs:{ ar:'j5KDRE0GofM' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'ما قبل خاتمة الجزء الثاني — التوتر لا يُحتمل.' },
  { id:'wad_s2e25', series:'wadi', season:'2', episode:'25', title:'الحلقة ٢٥ — الجزء الثاني', ytId:'GAByTbkMfpE', langs:{ ar:'GAByTbkMfpE' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثاني ينهي فصله الأعنف في التاريخ.' },
  { id:'wad_s2e29', series:'wadi', season:'2', episode:'29', title:'الحلقة ٢٩ — الجزء الثاني', ytId:'A-z4mjgCITw', langs:{ ar:'A-z4mjgCITw' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'المواجهة الكبرى — بولنت يضع كل أوراقه على الطاولة.' },
  { id:'wad_s2e32', series:'wadi', season:'2', episode:'32', title:'الحلقة ٣٢ — الجزء الثاني', ytId:'eAniuCIqfiU', langs:{ ar:'eAniuCIqfiU' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثاني يُسدل ستاره على حقبة جريمة لا تُنسى.' },
  { id:'wad_s2e41', series:'wadi', season:'2', episode:'41', title:'الحلقة ٤١ — الجزء الثاني', ytId:'oayZeLwjIFc', langs:{ ar:'oayZeLwjIFc' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'خاتمة الجزء الثاني — بولنت يكتب آخر صفحاته في الوادي.' },

  // ══════════════ وادي الذئاب — مواسم ٣-١١ ══════════════
  { id:'wad_s3e1',  series:'wadi', season:'3',  episode:'1', title:'الحلقة ١ — الجزء الثالث',   ytId:'M3NXFr6FvuU', langs:{ ar:'M3NXFr6FvuU' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثالث يبدأ — فصل جديد من الإثارة والجريمة.' },
  { id:'wad_s5e1',  series:'wadi', season:'5',  episode:'1', title:'الحلقة ١ — الجزء الخامس',  ytId:'AWiJ7hku6Xg', langs:{ ar:'AWiJ7hku6Xg' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الخامس — وادي الذئاب يتوسع ويتعمق.' },
  { id:'wad_s6e1',  series:'wadi', season:'6',  episode:'1', title:'الحلقة ١ — الجزء السادس',  ytId:'iotSBhGPQmY', langs:{ ar:'iotSBhGPQmY' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء السادس — مرحلة جديدة من مواجهة الجريمة المنظمة.' },
  { id:'wad_s7e1',  series:'wadi', season:'7',  episode:'1', title:'الحلقة ١ — الجزء السابع',  ytId:'jrn92Q1NHqQ', langs:{ ar:'jrn92Q1NHqQ' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء السابع — وادي الذئاب لا يتوقف عن المفاجآت.' },
  { id:'wad_s8e1',  series:'wadi', season:'8',  episode:'1', title:'الحلقة ١ — الجزء الثامن',  ytId:'N49_EaE80tI', langs:{ ar:'N49_EaE80tI' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الثامن — ملحمة الإثارة تتواصل بلا هوادة.' },
  { id:'wad_s9e1',  series:'wadi', season:'9',  episode:'1', title:'الحلقة ١ — الجزء التاسع',  ytId:'5ZR_dkQih_M', langs:{ ar:'5ZR_dkQih_M' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء التاسع — وادي الذئاب يفتح فصلاً جديداً من الأسرار.' },
  { id:'wad_s10e1', series:'wadi', season:'10', episode:'1', title:'الحلقة ١ — الجزء العاشر',  ytId:'x2m8jOlYfJ8', langs:{ ar:'x2m8jOlYfJ8' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء العاشر — عقد من الإثارة لم يُضاهَ في تاريخ التلفزيون.' },
  { id:'wad_s11e2', series:'wadi', season:'11', episode:'2', title:'الحلقة ٢ — الجزء الحادي عشر', ytId:'l_AH5vG3chU', langs:{ ar:'l_AH5vG3chU' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الحادي عشر يتعمق — الخاتمة الكبرى تقترب.' },
  { id:'wad_s11e3', series:'wadi', season:'11', episode:'3', title:'الحلقة ٣ — الجزء الحادي عشر', ytId:'bDtBU2ctID4', langs:{ ar:'bDtBU2ctID4' }, duration:'45:00', cat:'مسلسلات تركية', type:'حلقة', source:'وادي الذئاب', desc:'الجزء الأخير يكتب فصله الأعظم — وادي الذئاب يودّع.' },

  // ══════════════ الحفرة — حلقات جديدة ══════════════

  { id:'huf_s1e1', series:'hufra', season:'1', episode:'1', title:'الحلقة ١ — الجزء الأول', ytId:'Emi1MWsR29M', langs:{ ar:'Emi1MWsR29M' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Al Haram Production', desc:'البداية الكبرى لمسلسل الحفرة — حي الحفرة يفتح أسراره المظلمة.' },
  { id:'huf_s1e4', series:'hufra', season:'1', episode:'4', title:'الحلقة ٤ — الجزء الأول', ytId:'hLMrklgEJ1o', langs:{ ar:'hLMrklgEJ1o' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Al Haram Production', desc:'الجزء الأول يكشف عمق المأساة في الحفرة — الخروج مستحيل.' },
  { id:'huf_s1e7', series:'hufra', season:'1', episode:'7', title:'الحلقة ٧ — الجزء الأول', ytId:'ldgkII48cfg', langs:{ ar:'ldgkII48cfg' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Al Haram Production', desc:'الجزء الأول يبلغ أقصى نقاط التوتر — الحفرة تبتلع من يدخلها.' },
  { id:'huf_s2e8', series:'hufra', season:'2', episode:'8', title:'الحلقة ٨ — الجزء الثاني', ytId:'P6zOHUOyfcU', langs:{ ar:'P6zOHUOyfcU' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الثاني من الحفرة — الحقد يتراكم والانتقام يقترب.' },

  // ══════════════ قطاع الطرق — حلقات جديدة ══════════════

  { id:'esk_s1e3', series:'eskiya', season:'1', episode:'3', title:'الحلقة ٣ — الجزء الأول', ytId:'4tH_udRmdC8', langs:{ ar:'4tH_udRmdC8' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'قطاع الطرق يكشف أسراره — الشارع لا يرحم الضعيف.' },
  { id:'esk_s1e5', series:'eskiya', season:'1', episode:'5', title:'الحلقة ٥ — الجزء الأول', ytId:'BHVh_YOw3_A', langs:{ ar:'BHVh_YOw3_A' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'الجزء الأول يتصاعد — الأكشن لا يتوقف لحظة واحدة.' },
  { id:'esk_s1e6', series:'eskiya', season:'1', episode:'6', title:'الحلقة ٦ — الجزء الأول', ytId:'BTd87lyTZIg', langs:{ ar:'BTd87lyTZIg' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'الجزء الأول يكشف وجهاً جديداً من شخصية البطل — عمق إنساني نادر.' },
  { id:'esk_s1e7', series:'eskiya', season:'1', episode:'7', title:'الحلقة ٧ — الجزء الأول', ytId:'EMZD4OLA1MQ', langs:{ ar:'EMZD4OLA1MQ' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'أكشن محموم في الجزء الأول — المطاردة لا تتوقف.' },
  { id:'esk_s5e5', series:'eskiya', season:'5', episode:'5', title:'الحلقة ٥ — الجزء الخامس', ytId:'peQkJhGlF9c', langs:{ ar:'peQkJhGlF9c' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'الجزء الخامس من قطاع الطرق — البطل أمام أخطر مواجهاته.' },
  { id:'esk_s5e10', series:'eskiya', season:'5', episode:'10', title:'الحلقة ١٠ — الجزء الخامس', ytId:'dSq_0NJVBTg', langs:{ ar:'dSq_0NJVBTg' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'الجزء الخامس في أوجه — الأكشن والدراما يصلان ذروتهما.' },

  // ══════════════ يونس إيمره — 52 حلقة (موسمان) ══════════════

  { id:'yun_s1e1', series:'yunusemre', season:'1', episode:'1', title:'الحلقة ١ — الموسم الأول', ytId:'HOdC76YSrok', langs:{ ar:'HOdC76YSrok' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'البداية — رحلة روحية مع يونس إيمره في أروقة الأناضول.' },
  { id:'yun_s1e2', series:'yunusemre', season:'1', episode:'2', title:'الحلقة ٢ — الموسم الأول', ytId:'r_5Kor84LQE', langs:{ ar:'r_5Kor84LQE' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يبدأ رحلته نحو الحكمة والمعرفة في عهد السلاجقة.' },
  { id:'yun_s1e3', series:'yunusemre', season:'1', episode:'3', title:'الحلقة ٣ — الموسم الأول', ytId:'qgg_UKzEiHc', langs:{ ar:'qgg_UKzEiHc' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الشاعر الصوفي يواجه تحديات الروح والمجتمع في الجزء الأول.' },
  { id:'yun_s1e5', series:'yunusemre', season:'1', episode:'5', title:'الحلقة ٥ — الموسم الأول', ytId:'E9hnzkCFJSU', langs:{ ar:'E9hnzkCFJSU' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يجد طريقه نحو الحق — دراما إنسانية مؤثرة من TRT.' },
  { id:'yun_s1e10', series:'yunusemre', season:'1', episode:'10', title:'الحلقة ١٠ — الموسم الأول', ytId:'Mv-k2QkD3UQ', langs:{ ar:'Mv-k2QkD3UQ' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الأول في منتصف رحلته — يونس إيمره يكشف حكمة الأجيال.' },
  { id:'yun_s1e11', series:'yunusemre', season:'1', episode:'11', title:'الحلقة ١١ — الموسم الأول', ytId:'l6EMFMBMWAE', langs:{ ar:'l6EMFMBMWAE' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره في رحلته الروحية — كلماته تبقى أبد الدهر.' },
  { id:'yun_s1e15', series:'yunusemre', season:'1', episode:'15', title:'الحلقة ١٥ — الموسم الأول', ytId:'wbeW5rYUM6o', langs:{ ar:'wbeW5rYUM6o' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الأول يبلغ ذروته — يونس إيمره أمام أصعب لحظات مسيرته.' },
  { id:'yun_s1e21', series:'yunusemre', season:'1', episode:'21', title:'الحلقة ٢١ — الموسم الأول', ytId:'OGOZBOcueWc', langs:{ ar:'OGOZBOcueWc' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'ختام الموسم الأول — يونس إيمره يترك بصمته التي لا تُمحى.' },
  { id:'yun_s2e1', series:'yunusemre', season:'2', episode:'1', title:'الحلقة ١ — الموسم الثاني', ytId:'8bXE2Cc1m2A', langs:{ ar:'8bXE2Cc1m2A' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الثاني من يونس إيمره — رحلة جديدة وأسرار لم تُكشف.' },

  // ══════════════ يونس إيمره — موسم ١ (حلقات إضافية) ══════════════
  { id:'yun_s1e4',  series:'yunusemre', season:'1', episode:'4',  title:'الحلقة ٤ — الموسم الأول',  ytId:'jGMCQ724xVc', langs:{ ar:'jGMCQ724xVc' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يواصل رحلته الروحية في الأناضول.' },
  { id:'yun_s1e6',  series:'yunusemre', season:'1', episode:'6',  title:'الحلقة ٦ — الموسم الأول',  ytId:'KZQuDi35RO4', langs:{ ar:'KZQuDi35RO4' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يعمّق صلته بالحكمة والمعرفة.' },
  { id:'yun_s1e7',  series:'yunusemre', season:'1', episode:'7',  title:'الحلقة ٧ — الموسم الأول',  ytId:'t209Y0C-gro', langs:{ ar:'t209Y0C-gro' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'تحديات جديدة في طريق الشاعر الصوفي.' },
  { id:'yun_s1e8',  series:'yunusemre', season:'1', episode:'8',  title:'الحلقة ٨ — الموسم الأول',  ytId:'oXwIl_3SoR4', langs:{ ar:'oXwIl_3SoR4' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يواجه اختباراً صعباً للإيمان.' },
  { id:'yun_s1e9',  series:'yunusemre', season:'1', episode:'9',  title:'الحلقة ٩ — الموسم الأول',  ytId:'UYz3b2OjxwQ', langs:{ ar:'UYz3b2OjxwQ' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'رحلة الشاعر في عالم السلاجقة تتعمق.' },
  { id:'yun_s1e12', series:'yunusemre', season:'1', episode:'12', title:'الحلقة ١٢ — الموسم الأول', ytId:'6zDLqA6WPkw', langs:{ ar:'6zDLqA6WPkw' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يكشف حكمة تتجاوز الزمان والمكان.' },
  { id:'yun_s1e13', series:'yunusemre', season:'1', episode:'13', title:'الحلقة ١٣ — الموسم الأول', ytId:'u8EqAGeipPI', langs:{ ar:'u8EqAGeipPI' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الشاعر الصوفي أمام منعطف مصيري.' },
  { id:'yun_s1e14', series:'yunusemre', season:'1', episode:'14', title:'الحلقة ١٤ — الموسم الأول', ytId:'3aCX-2hfzs0', langs:{ ar:'3aCX-2hfzs0' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يستلهم شعره من آلام الروح.' },
  { id:'yun_s1e16', series:'yunusemre', season:'1', episode:'16', title:'الحلقة ١٦ — الموسم الأول', ytId:'Yt0L5H4frnk', langs:{ ar:'Yt0L5H4frnk' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الرحلة الروحية تصل مرحلة جديدة عميقة.' },
  { id:'yun_s1e17', series:'yunusemre', season:'1', episode:'17', title:'الحلقة ١٧ — الموسم الأول', ytId:'kqexR-307Wg', langs:{ ar:'kqexR-307Wg' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يجد الطريق في أعماق الصحراء الروحية.' },
  { id:'yun_s1e18', series:'yunusemre', season:'1', episode:'18', title:'الحلقة ١٨ — الموسم الأول', ytId:'PscJhmuRd_Y', langs:{ ar:'PscJhmuRd_Y' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الأول يتصاعد نحو ذروته الروحانية.' },
  { id:'yun_s1e19', series:'yunusemre', season:'1', episode:'19', title:'الحلقة ١٩ — الموسم الأول', ytId:'EB6gQP5cWco', langs:{ ar:'EB6gQP5cWco' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يرى الحق في كل مكان.' },
  { id:'yun_s1e20', series:'yunusemre', season:'1', episode:'20', title:'الحلقة ٢٠ — الموسم الأول', ytId:'2xKw_Upnt2A', langs:{ ar:'2xKw_Upnt2A' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'عشرون حلقة من الجمال الروحاني — يونس إيمره في أبهى تجلياته.' },
  { id:'yun_s1e22', series:'yunusemre', season:'1', episode:'22', title:'الحلقة ٢٢ — الموسم الأول', ytId:'qb2ANC6d0ys', langs:{ ar:'qb2ANC6d0ys' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'ما قبل الختام — يونس إيمره يودّع الموسم الأول بكلمات خالدة.' },
  { id:'yun_s1e23', series:'yunusemre', season:'1', episode:'23', title:'الحلقة ٢٣ — الموسم الأول', ytId:'5Cegh8nSZsQ', langs:{ ar:'5Cegh8nSZsQ' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'خاتمة الموسم الأول — رحلة روحية لن تُنسى.' },

  // ══════════════ يونس إيمره — موسم ٢ (حلقات إضافية) ══════════════
  { id:'yun_s2e2',  series:'yunusemre', season:'2', episode:'2',  title:'الحلقة ٢ — الموسم الثاني',  ytId:'rgG8FCV2IGw', langs:{ ar:'rgG8FCV2IGw' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الثاني يتعمق — يونس إيمره يواصل مسيرته الروحية.' },
  { id:'yun_s2e3',  series:'yunusemre', season:'2', episode:'3',  title:'الحلقة ٣ — الموسم الثاني',  ytId:'LvFV_PC6D3I', langs:{ ar:'LvFV_PC6D3I' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'أسرار جديدة تنكشف في رحلة الشاعر الصوفي.' },
  { id:'yun_s2e4',  series:'yunusemre', season:'2', episode:'4',  title:'الحلقة ٤ — الموسم الثاني',  ytId:'gWV2yYsfZbQ', langs:{ ar:'gWV2yYsfZbQ' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يغوص في أعماق الحكمة الإسلامية.' },
  { id:'yun_s2e5',  series:'yunusemre', season:'2', episode:'5',  title:'الحلقة ٥ — الموسم الثاني',  ytId:'7ypw3En-77Q', langs:{ ar:'7ypw3En-77Q' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الثاني يكشف وجهاً جديداً من شعر يونس إيمره.' },
  { id:'yun_s2e6',  series:'yunusemre', season:'2', episode:'6',  title:'الحلقة ٦ — الموسم الثاني',  ytId:'0tHkqMMeAVA', langs:{ ar:'0tHkqMMeAVA' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يواجه تحديات الإيمان بعزيمة فولاذية.' },
  { id:'yun_s2e7',  series:'yunusemre', season:'2', episode:'7',  title:'الحلقة ٧ — الموسم الثاني',  ytId:'PcmSrh2fBzc', langs:{ ar:'PcmSrh2fBzc' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'رحلة الشاعر تتجاوز الجسد لتبلغ أعماق الروح.' },
  { id:'yun_s2e8',  series:'yunusemre', season:'2', episode:'8',  title:'الحلقة ٨ — الموسم الثاني',  ytId:'Efr8x1ieuhg', langs:{ ar:'Efr8x1ieuhg' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يلتقي بأرواح تُشابه روحه في الحكمة.' },
  { id:'yun_s2e9',  series:'yunusemre', season:'2', episode:'9',  title:'الحلقة ٩ — الموسم الثاني',  ytId:'-LwUoQ6_flQ', langs:{ ar:'-LwUoQ6_flQ' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الثاني في منتصف رحلته الروحية المؤثرة.' },
  { id:'yun_s2e10', series:'yunusemre', season:'2', episode:'10', title:'الحلقة ١٠ — الموسم الثاني', ytId:'Qb8T-172pxs', langs:{ ar:'Qb8T-172pxs' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'عشر حلقات من الموسم الثاني — حكمة يونس إيمره تتجلى أكثر.' },
  { id:'yun_s2e11', series:'yunusemre', season:'2', episode:'11', title:'الحلقة ١١ — الموسم الثاني', ytId:'7tt2E4pBMzw', langs:{ ar:'7tt2E4pBMzw' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يرسم ملامح الحكيم الحقيقي.' },
  { id:'yun_s2e12', series:'yunusemre', season:'2', episode:'12', title:'الحلقة ١٢ — الموسم الثاني', ytId:'BTX_PejIqc0', langs:{ ar:'BTX_PejIqc0' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الثاني يتصاعد — الشاعر أمام اختبار روحي عميق.' },
  { id:'yun_s2e13', series:'yunusemre', season:'2', episode:'13', title:'الحلقة ١٣ — الموسم الثاني', ytId:'u5tLJNXuOPg', langs:{ ar:'u5tLJNXuOPg' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يكتب شعره بدم القلب ونور الروح.' },
  { id:'yun_s2e14', series:'yunusemre', season:'2', episode:'14', title:'الحلقة ١٤ — الموسم الثاني', ytId:'Hrz1H_FYYBA', langs:{ ar:'Hrz1H_FYYBA' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'رحلة الشاعر الصوفي تقترب من ذروتها الكبرى.' },
  { id:'yun_s2e16', series:'yunusemre', season:'2', episode:'16', title:'الحلقة ١٦ — الموسم الثاني', ytId:'F5v_1Z_Nzas', langs:{ ar:'F5v_1Z_Nzas' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يجد في الألم مفتاحاً للحكمة.' },
  { id:'yun_s2e17', series:'yunusemre', season:'2', episode:'17', title:'الحلقة ١٧ — الموسم الثاني', ytId:'0h9TojkK2VA', langs:{ ar:'0h9TojkK2VA' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الثاني يبلغ ذروته — يونس إيمره في أعلى مراتب الحكمة.' },
  { id:'yun_s2e18', series:'yunusemre', season:'2', episode:'18', title:'الحلقة ١٨ — الموسم الثاني', ytId:'VB5K-ya4DCU', langs:{ ar:'VB5K-ya4DCU' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يعيش أجمل وأعمق لحظات رحلته.' },
  { id:'yun_s2e19', series:'yunusemre', season:'2', episode:'19', title:'الحلقة ١٩ — الموسم الثاني', ytId:'3nWF9dq9K0E', langs:{ ar:'3nWF9dq9K0E' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الشاعر يتأمل في عبور الروح من الدنيا إلى الأبدية.' },
  { id:'yun_s2e20', series:'yunusemre', season:'2', episode:'20', title:'الحلقة ٢٠ — الموسم الثاني', ytId:'pqzcT_s4epw', langs:{ ar:'pqzcT_s4epw' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'عشرون حلقة من الموسم الثاني — يونس إيمره لا يزال يُذهل.' },
  { id:'yun_s2e21', series:'yunusemre', season:'2', episode:'21', title:'الحلقة ٢١ — الموسم الثاني', ytId:'Ph2jAJCTVpc', langs:{ ar:'Ph2jAJCTVpc' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يقترب من لحظة الرحيل الأبدي.' },
  { id:'yun_s2e22', series:'yunusemre', season:'2', episode:'22', title:'الحلقة ٢٢ — الموسم الثاني', ytId:'AihL0A7sSwI', langs:{ ar:'AihL0A7sSwI' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الثاني يسدل ستاره تدريجياً على رحلة فريدة.' },
  { id:'yun_s2e23', series:'yunusemre', season:'2', episode:'23', title:'الحلقة ٢٣ — الموسم الثاني', ytId:'nWnQ87Ql_pw', langs:{ ar:'nWnQ87Ql_pw' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يودّع بكلمات خالدة في قلوب المستمعين.' },
  { id:'yun_s2e24', series:'yunusemre', season:'2', episode:'24', title:'الحلقة ٢٤ — الموسم الثاني', ytId:'ZZVATlY7-dk', langs:{ ar:'ZZVATlY7-dk' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الرحلة الروحية تقترب من خاتمتها الكبرى.' },
  { id:'yun_s2e25', series:'yunusemre', season:'2', episode:'25', title:'الحلقة ٢٥ — الموسم الثاني', ytId:'RMpUJ5g8Hw8', langs:{ ar:'RMpUJ5g8Hw8' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'خمس وعشرون حلقة من الإبداع الروحاني — الذروة اقتربت.' },
  { id:'yun_s2e26', series:'yunusemre', season:'2', episode:'26', title:'الحلقة ٢٦ — الموسم الثاني', ytId:'EZr5PpPnuyg', langs:{ ar:'EZr5PpPnuyg' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يتهيأ لأجمل كلمات وداعه.' },
  { id:'yun_s2e27', series:'yunusemre', season:'2', episode:'27', title:'الحلقة ٢٧ — الموسم الثاني', ytId:'VfCfQAYnbQ0', langs:{ ar:'VfCfQAYnbQ0' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الثاني في لحظاته الأخيرة — الشعر والروح يلتقيان.' },
  { id:'yun_s2e28', series:'yunusemre', season:'2', episode:'28', title:'الحلقة ٢٨ — الموسم الثاني', ytId:'0P2Bj9jSd60', langs:{ ar:'0P2Bj9jSd60' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'يونس إيمره يختم مسيرته بأجمل ما قاله.' },
  { id:'yun_s2e30', series:'yunusemre', season:'2', episode:'30', title:'الحلقة ٣٠ — الموسم الثاني', ytId:'k5w_APq0gHo', langs:{ ar:'k5w_APq0gHo' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'ثلاثون حلقة في الموسم الثاني — يونس إيمره يبقى حياً بشعره.' },
  { id:'yun_s2e32', series:'yunusemre', season:'2', episode:'32', title:'الحلقة ٣٢ — الموسم الثاني', ytId:'QaDPiQTzu3Y', langs:{ ar:'QaDPiQTzu3Y' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الموسم الثاني يصل خاتمته — حكيم الأناضول يودّع.' },
  { id:'yun_s2e33', series:'yunusemre', season:'2', episode:'33', title:'الحلقة ٣٣ — الموسم الثاني', ytId:'XztzgbpNj_c', langs:{ ar:'XztzgbpNj_c' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'ما قبل الختام الأخير — يونس إيمره يُسطّر آخر كلماته.' },
  { id:'yun_s2e34', series:'yunusemre', season:'2', episode:'34', title:'الحلقة ٣٤ — خاتمة الموسم الثاني', ytId:'yKwijao72N0', langs:{ ar:'yKwijao72N0' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'TRT Drama Arabic', desc:'الحلقة الأخيرة — يونس إيمره يصمد في الذاكرة إلى الأبد.' },

  // ══════════════ عمر — 6 حلقات (سلسلة جديدة) ══════════════

  { id:'omar_e1', series:'omar', season:'1', episode:'1', title:'الحلقة ١ — مسلسل عمر', ytId:'cu68afTJVlk', langs:{ ar:'cu68afTJVlk' }, duration:'1:30', cat:'مسلسلات تاريخية', type:'حلقة', source:'Qatar Television', desc:'البداية الكبرى لملحمة عمر بن الخطاب — من أضخم الإنتاجات العربية.' },
  { id:'omar_e2', series:'omar', season:'1', episode:'2', title:'الحلقة ٢ — مسلسل عمر', ytId:'UO-mGxqGhUc', langs:{ ar:'UO-mGxqGhUc' }, duration:'1:28', cat:'مسلسلات تاريخية', type:'حلقة', source:'Qatar Television', desc:'عمر بن الخطاب في مرحلة الشباب — شخصية استثنائية تتشكّل.' },
  { id:'omar_e3', series:'omar', season:'1', episode:'3', title:'الحلقة ٣ — مسلسل عمر', ytId:'HxaeRdytSx8', langs:{ ar:'HxaeRdytSx8' }, duration:'1:28', cat:'مسلسلات تاريخية', type:'حلقة', source:'Qatar Television', desc:'الملحمة تتصاعد — عمر يتخذ قراراً سيغير مسار التاريخ.' },
  { id:'omar_e5', series:'omar', season:'1', episode:'5', title:'الحلقة ٥ — مسلسل عمر', ytId:'cyKI6nZVGQQ', langs:{ ar:'cyKI6nZVGQQ' }, duration:'1:28', cat:'مسلسلات تاريخية', type:'حلقة', source:'Qatar Television', desc:'عمر في أحداث مصيرية — الملحمة الإسلامية في أوجها.' },
  { id:'omar_e10', series:'omar', season:'1', episode:'10', title:'الحلقة ١٠ — مسلسل عمر', ytId:'Jr5dMumcKaU', langs:{ ar:'Jr5dMumcKaU' }, duration:'1:28', cat:'مسلسلات تاريخية', type:'حلقة', source:'Qatar Television', desc:'عشر حلقات من الملحمة — عمر يكتب التاريخ بكل حرف.' },
  { id:'omar_e30', series:'omar', season:'1', episode:'30', title:'الحلقة ٣٠ — مسلسل عمر', ytId:'GumhWIuNP6k', langs:{ ar:'GumhWIuNP6k' }, duration:'1:28', cat:'مسلسلات تاريخية', type:'حلقة', source:'Qatar Television', desc:'ختام الملحمة يقترب — مسلسل عمر يُسدل ستاره بعظمة استثنائية.' },

  // ══════════════ الحفرة — حلقات جديدة ══════════════

  { id:'huf_s1e8',  series:'hufra', season:'1', episode:'8',  title:'الحلقة ٨ — الجزء الأول',  ytId:'FsNdrfgvKSc', langs:{ ar:'FsNdrfgvKSc' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الحفرة تكشف وجهها الأكثر قسوة في الحلقة الثامنة.' },
  { id:'huf_s1e9',  series:'hufra', season:'1', episode:'9',  title:'الحلقة ٩ — الجزء الأول',  ytId:'5Sp3MYiE2MA', langs:{ ar:'5Sp3MYiE2MA' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'التوتر يبلغ ذروته في الجزء الأول — المواجهة لا مفر منها.' },
  { id:'huf_s1e10', series:'hufra', season:'1', episode:'10', title:'الحلقة ١٠ — الجزء الأول', ytId:'f1owyeFuENs', langs:{ ar:'f1owyeFuENs' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'عشر حلقات من الإثارة الداكنة — الحفرة تبتلع من يدخلها.' },
  { id:'huf_s1e12', series:'hufra', season:'1', episode:'12', title:'الحلقة ١٢ — الجزء الأول', ytId:'8kOkqgnDcn4', langs:{ ar:'8kOkqgnDcn4' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الأول يكشف أعماق شخصياته — لا أحد بريء في الحفرة.' },
  { id:'huf_s1e16', series:'hufra', season:'1', episode:'16', title:'الحلقة ١٦ — الجزء الأول', ytId:'z-AE-eb4NxE', langs:{ ar:'z-AE-eb4NxE' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الأول يشتعل — الحفرة أضيق مما كانت عليه دائماً.' },
  { id:'huf_s1e18', series:'hufra', season:'1', episode:'18', title:'الحلقة ١٨ — الجزء الأول', ytId:'9pb0mwry2RI', langs:{ ar:'9pb0mwry2RI' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'المصائر تتشابك في الجزء الأول — الخروج أصعب من أي وقت مضى.' },
  { id:'huf_s1e19', series:'hufra', season:'1', episode:'19', title:'الحلقة ١٩ — الجزء الأول', ytId:'pjsvVyoIONw', langs:{ ar:'pjsvVyoIONw' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الحفرة في منتصف الجزء الأول — الجميع يدفع ثمن اختياراته.' },
  { id:'huf_s1e20', series:'hufra', season:'1', episode:'20', title:'الحلقة ٢٠ — الجزء الأول', ytId:'K6K8kFKPWfI', langs:{ ar:'K6K8kFKPWfI' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'عشرون حلقة من الدراما الداكنة — الحفرة لا ترحم.' },
  { id:'huf_s1e21', series:'hufra', season:'1', episode:'21', title:'الحلقة ٢١ — الجزء الأول', ytId:'vaJlohqfdCQ', langs:{ ar:'vaJlohqfdCQ' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الأول يقترب من ذروته — كل خطوة قد تكون الأخيرة.' },
  { id:'huf_s1e45', series:'hufra', season:'1', episode:'45', title:'الحلقة ٤٥ — الجزء الأول', ytId:'DV9T4gJTGNA', langs:{ ar:'DV9T4gJTGNA' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الأول يبلغ ذروته القصوى — لحظة الحسم لا تُنسى.' },
  { id:'huf_s1e50', series:'hufra', season:'1', episode:'50', title:'الحلقة ٥٠ — الجزء الأول', ytId:'GSjm7les71w', langs:{ ar:'GSjm7les71w' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الحلقة الخمسون — نهاية فصل وبداية حقبة أشد ظلاماً في الحفرة.' },
  { id:'huf_s2e1',  series:'hufra', season:'2', episode:'1',  title:'الحلقة ١ — الجزء الثاني', ytId:'688VPp_UCv8', langs:{ ar:'688VPp_UCv8' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الثاني من الحفرة — صفحة جديدة أكثر قتامة وأشد إيلاماً.' },
  { id:'huf_s2e2',  series:'hufra', season:'2', episode:'2',  title:'الحلقة ٢ — الجزء الثاني', ytId:'G5FOVsQFKMk', langs:{ ar:'G5FOVsQFKMk' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الثاني يواصل حفر الجراح الأعمق في الحفرة.' },
  { id:'huf_s2e3',  series:'hufra', season:'2', episode:'3',  title:'الحلقة ٣ — الجزء الثاني', ytId:'KKatQx1GW-8', langs:{ ar:'KKatQx1GW-8' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الثاني يكشف عن حجم الثمن المدفوع في حي الحفرة.' },
  { id:'huf_s2e5',  series:'hufra', season:'2', episode:'5',  title:'الحلقة ٥ — الجزء الثاني', ytId:'vXKqGruDQXQ', langs:{ ar:'vXKqGruDQXQ' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الثاني في منتصف طريقه — الجميع يبحث عن نجاته.' },
  { id:'huf_s2e6',  series:'hufra', season:'2', episode:'6',  title:'الحلقة ٦ — الجزء الثاني', ytId:'J4AjV45cixI', langs:{ ar:'J4AjV45cixI' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'دراما إنسانية عميقة في الجزء الثاني — الحفرة تُربك كل الحسابات.' },
  { id:'huf_s2e7',  series:'hufra', season:'2', episode:'7',  title:'الحلقة ٧ — الجزء الثاني', ytId:'telERNesjV0', langs:{ ar:'telERNesjV0' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الثاني يبلغ ذروته — الحفرة تضيق ولا مخرج في الأفق.' },
  { id:'huf_s3e6',  series:'hufra', season:'3', episode:'6',  title:'الحلقة ٦ — الجزء الثالث', ytId:'Ssk1oo09b0s', langs:{ ar:'Ssk1oo09b0s' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Çukur Arabic', desc:'الجزء الثالث يفجّر كل التوقعات — الحفرة في أشد لحظاتها ظلاماً.' },

  // ══════════════ قطاع الطرق — حلقات جديدة ══════════════

  { id:'esk_s1e9',   series:'eskiya', season:'1', episode:'9',   title:'الحلقة ٩ — الجزء الأول',   ytId:'RZohgExt_KM', langs:{ ar:'RZohgExt_KM' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'مسلسل قطاع الطرق مدبلج', desc:'الجزء الأول يتسارع — أكشن بلا توقف مع قطاع الطرق.' },
  { id:'esk_s1e10',  series:'eskiya', season:'1', episode:'10',  title:'الحلقة ١٠ — الجزء الأول',  ytId:'5-5F15Zx7u0', langs:{ ar:'5-5F15Zx7u0' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'مسلسل قطاع الطرق مدبلج', desc:'الجزء الأول يبلغ منتصفه — الشارع لا ينتظر أحداً.' },
  { id:'esk_s1e11',  series:'eskiya', season:'1', episode:'11',  title:'الحلقة ١١ — الجزء الأول',  ytId:'IfSkQuzldII', langs:{ ar:'IfSkQuzldII' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'التوترات تتصاعد في الجزء الأول — كل شيء على المحك.' },
  { id:'esk_s1e12',  series:'eskiya', season:'1', episode:'12',  title:'الحلقة ١٢ — الجزء الأول',  ytId:'n-TzR0D4G6I', langs:{ ar:'n-TzR0D4G6I' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'الجزء الأول يكشف عمق شخصية البطل — أكثر من مجرد قطاع طرق.' },
  { id:'esk_s1e13',  series:'eskiya', season:'1', episode:'13',  title:'الحلقة ١٣ — الجزء الأول',  ytId:'SAMwvz9v7Gk', langs:{ ar:'SAMwvz9v7Gk' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'الجزء الأول يبلغ ذروته — المواجهة الكبرى لا تنتظر.' },
  { id:'esk_s1e14',  series:'eskiya', season:'1', episode:'14',  title:'الحلقة ١٤ — الجزء الأول',  ytId:'EUM_Va7616A', langs:{ ar:'EUM_Va7616A' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'مبدعو دوبلاج سوريا', desc:'أكشن محموم في الجزء الأول — لا وقت للتفكير في قطاع الطرق.' },
  { id:'esk_s1e30',  series:'eskiya', season:'1', episode:'30',  title:'الحلقة ٣٠ — الجزء الأول',  ytId:'qFE_x4ajNOc', langs:{ ar:'qFE_x4ajNOc' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'ثلاثون حلقة من الإثارة — قطاع الطرق لا يهدأ لحظة.' },
  { id:'esk_s1e120', series:'eskiya', season:'1', episode:'120', title:'الحلقة ١٢٠ — الجزء الأول', ytId:'vtA2bmX5fxE', langs:{ ar:'vtA2bmX5fxE' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'مسلسل قطاع الطرق مدبلج', desc:'الجزء الأول في مراحله الأخيرة — الختام الكبير يقترب.' },
  { id:'esk_s2e1',   series:'eskiya', season:'2', episode:'1',   title:'الحلقة ١ — الجزء الثاني',   ytId:'LyeNd4qTjN8', langs:{ ar:'LyeNd4qTjN8' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'تكليش', desc:'الجزء الثاني من قطاع الطرق — بداية فصل أكثر خطورة وإثارة.' },
  { id:'esk_s2e2',   series:'eskiya', season:'2', episode:'2',   title:'الحلقة ٢ — الجزء الثاني',   ytId:'D6pka_eB6Js', langs:{ ar:'D6pka_eB6Js' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Nameh Alhumsi', desc:'الجزء الثاني يكشف تحالفات جديدة — المعادلة تتغير.' },
  { id:'esk_s2e4',   series:'eskiya', season:'2', episode:'4',   title:'الحلقة ٤ — الجزء الثاني',   ytId:'nz_40sSj7Q0', langs:{ ar:'nz_40sSj7Q0' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Nameh Alhumsi', desc:'الجزء الثاني يتصاعد — قطاع الطرق في مواجهة أشد خصومه.' },
  { id:'esk_s2e9',   series:'eskiya', season:'2', episode:'9',   title:'الحلقة ٩ — الجزء الثاني',   ytId:'ivj8mOb3pKc', langs:{ ar:'ivj8mOb3pKc' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Ali Mohsen', desc:'الجزء الثاني في أوجه — الضربات تتبادل ولا هدنة في الأفق.' },
  { id:'esk_s2e134', series:'eskiya', season:'2', episode:'134', title:'الحلقة ١٣٤ — الجزء الثاني', ytId:'hr86TflgYNU', langs:{ ar:'hr86TflgYNU' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'atv أكشن', desc:'الجزء الثاني في ذروته — نهاية فصل طويل من الصراع بلا هوادة.' },
  { id:'esk_s3e1',   series:'eskiya', season:'3', episode:'1',   title:'الحلقة ١ — الجزء الثالث',   ytId:'c0fRZFMJ5Ks', langs:{ ar:'c0fRZFMJ5Ks' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'A H', desc:'الجزء الثالث من قطاع الطرق — صفحة جديدة من الأكشن المتواصل.' },
  { id:'esk_s3e12',  series:'eskiya', season:'3', episode:'12',  title:'الحلقة ١٢ — الجزء الثالث',  ytId:'xHy20BC7umg', langs:{ ar:'xHy20BC7umg' }, duration:'1:20', cat:'مسلسلات تركية', type:'حلقة', source:'Ali Mohsen', desc:'الجزء الثالث في منتصف طريقه — المعارك لا تهدأ مع قطاع الطرق.' },

  // ══════════════ المؤسس عثمان — حلقات جديدة S1 ══════════════

  { id:'osm_s1e12', series:'osman', season:'1', episode:'12', title:'الحلقة ١٢ — الجزء الأول', ytId:'yq6RoxV_wHU', langs:{ ar:'yq6RoxV_wHU' }, duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'عثمان يواصل تأسيس دولته في الجزء الأول — كل حلقة تاريخ.' },
  { id:'osm_s1e13', series:'osman', season:'1', episode:'13', title:'الحلقة ١٣ — الجزء الأول', ytId:'s9FyGPlZ5c0', langs:{ ar:'s9FyGPlZ5c0' }, duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول يكشف تعقيدات الصراع — عثمان في قلب العاصفة.' },
  { id:'osm_s1e14', series:'osman', season:'1', episode:'14', title:'الحلقة ١٤ — الجزء الأول', ytId:'lmQkLYQ1X7U', langs:{ ar:'lmQkLYQ1X7U' }, duration:'1:22', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'عثمان يضع لبنة جديدة — الدولة الناشئة تكبر رغم الأعداء.' },
  { id:'osm_s1e16', series:'osman', season:'1', episode:'16', title:'الحلقة ١٦ — الجزء الأول', ytId:'H_W9BhnaR_8', langs:{ ar:'H_W9BhnaR_8' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول يشتعل — عثمان في مواجهة لا هوادة فيها.' },
  { id:'osm_s1e17', series:'osman', season:'1', episode:'17', title:'الحلقة ١٧ — الجزء الأول', ytId:'-qltBS9bxlg', langs:{ ar:'-qltBS9bxlg' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول يكشف قوة إرادة عثمان في أصعب الأوقات.' },
  { id:'osm_s1e18', series:'osman', season:'1', episode:'18', title:'الحلقة ١٨ — الجزء الأول', ytId:'zs0j8SnQveo', langs:{ ar:'zs0j8SnQveo' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'منعطف كبير في الجزء الأول — القرارات المصيرية لا تنتظر.' },
  { id:'osm_s1e19', series:'osman', season:'1', episode:'19', title:'الحلقة ١٩ — الجزء الأول', ytId:'zO4yBric9iQ', langs:{ ar:'zO4yBric9iQ' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول يبلغ ذروته — عثمان لا يتراجع أمام أي عدو.' },
  { id:'osm_s1e20', series:'osman', season:'1', episode:'20', title:'الحلقة ٢٠ — الجزء الأول', ytId:'yVdJTBfZM68', langs:{ ar:'yVdJTBfZM68' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'عشرون حلقة من الملحمة — عثمان يثبت جدارته بالنصر.' },
  { id:'osm_s1e22', series:'osman', season:'1', episode:'22', title:'الحلقة ٢٢ — الجزء الأول', ytId:'X2QDPNcFd_w', langs:{ ar:'X2QDPNcFd_w' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول يتجه نحو خاتمته — عثمان يُحكم قبضته.' },
  { id:'osm_s1e23', series:'osman', season:'1', episode:'23', title:'الحلقة ٢٣ — الجزء الأول', ytId:'HZiulsP5yc4', langs:{ ar:'HZiulsP5yc4' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الأعداء يتحدون — عثمان يواجههم بحنكة وشجاعة نادرتين.' },
  { id:'osm_s1e24', series:'osman', season:'1', episode:'24', title:'الحلقة ٢٤ — الجزء الأول', ytId:'k_P7Uv3n9a8', langs:{ ar:'k_P7Uv3n9a8' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول يقترب من نهايته — والأحداث لا تُصدَّق.' },
  { id:'osm_s1e26', series:'osman', season:'1', episode:'26', title:'الحلقة ٢٦ — الجزء الأول', ytId:'JOi_9ul0kiI', langs:{ ar:'JOi_9ul0kiI' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'ما قبل النهاية — عثمان يُعِد ضربته الأخيرة في الجزء الأول.' },
  { id:'osm_s1e27', series:'osman', season:'1', episode:'27', title:'الحلقة ٢٧ — الجزء الأول', ytId:'aEX7JhhnFIs', langs:{ ar:'aEX7JhhnFIs' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول يُسدل ستاره — عثمان يكتب تاريخه بدمائه وإيمانه.' },
  { id:'osm_s1e28', series:'osman', season:'1', episode:'28', title:'الحلقة ٢٨ — الجزء الأول', ytId:'fLnEs2EcGzI', langs:{ ar:'fLnEs2EcGzI' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الختام يقترب — عثمان أمام أكبر تحدياته في الجزء الأول.' },
  { id:'osm_s1e29', series:'osman', season:'1', episode:'29', title:'الحلقة ٢٩ — الجزء الأول', ytId:'bTDjbuRdGKM', langs:{ ar:'bTDjbuRdGKM' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الأول يختتم بضربة مدوّية — عثمان في أوج انتصاراته.' },
  { id:'osm_s1e90', series:'osman', season:'1', episode:'90', title:'الحلقة ٩٠ — نهاية الجزء الأول', ytId:'BZtJAN7KLbk', langs:{ ar:'BZtJAN7KLbk' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'نهاية الجزء الأول — لحظة تاريخية تُغلق فصلاً وتفتح ملحمة جديدة.' },

  // ══════════════ المؤسس عثمان — حلقات جديدة S2 ══════════════

  { id:'osm_s2e33',  series:'osman', season:'2', episode:'33',  title:'الحلقة ٣٣ — الجزء الثاني',  ytId:'xSAidUrlXxo', langs:{ ar:'xSAidUrlXxo' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يتصاعد — عثمان يرسم حدود إمبراطوريته القادمة.' },
  { id:'osm_s2e34',  series:'osman', season:'2', episode:'34',  title:'الحلقة ٣٤ — الجزء الثاني',  ytId:'MuTmR_5Uc6k', langs:{ ar:'MuTmR_5Uc6k' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني لا يهدأ — كل حلقة تحمل مفاجأة لا يتوقعها أحد.' },
  { id:'osm_s2e37',  series:'osman', season:'2', episode:'37',  title:'الحلقة ٣٧ — الجزء الثاني',  ytId:'WQ5g9Ts7POc', langs:{ ar:'WQ5g9Ts7POc' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'عثمان يضيق الخناق على أعدائه في الجزء الثاني بمهارة استثنائية.' },
  { id:'osm_s2e40',  series:'osman', season:'2', episode:'40',  title:'الحلقة ٤٠ — الجزء الثاني',  ytId:'k5z5iL8OU18', langs:{ ar:'k5z5iL8OU18' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'أربعون حلقة في الجزء الثاني — الملحمة تتعمق وتتشعب.' },
  { id:'osm_s2e42',  series:'osman', season:'2', episode:'42',  title:'الحلقة ٤٢ — الجزء الثاني',  ytId:'ZXnHDhXKHtc', langs:{ ar:'ZXnHDhXKHtc' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني في أوجه — عثمان يُدير المعارك بعقل استراتيجي.' },
  { id:'osm_s2e43',  series:'osman', season:'2', episode:'43',  title:'الحلقة ٤٣ — الجزء الثاني',  ytId:'IVWqGvkKnSc', langs:{ ar:'IVWqGvkKnSc' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'التحالفات تتشكل والخطط تُحكم — الجزء الثاني يفتح أبواباً جديدة.' },
  { id:'osm_s2e44',  series:'osman', season:'2', episode:'44',  title:'الحلقة ٤٤ — الجزء الثاني',  ytId:'4l_sujbFU3c', langs:{ ar:'4l_sujbFU3c' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يشتعل — لحظة مصيرية في مسيرة الدولة الناشئة.' },
  { id:'osm_s2e51',  series:'osman', season:'2', episode:'51',  title:'الحلقة ٥١ — الجزء الثاني',  ytId:'fxAy0fXWXuE', langs:{ ar:'fxAy0fXWXuE' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'عثمان في منتصف الجزء الثاني — الانتصارات تتراكم والتحديات تكبر.' },
  { id:'osm_s2e54',  series:'osman', season:'2', episode:'54',  title:'الحلقة ٥٤ — الجزء الثاني',  ytId:'y-nUY_Mzed0', langs:{ ar:'y-nUY_Mzed0' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يكشف خططاً جديدة — عثمان أبعد نظراً من أعدائه.' },
  { id:'osm_s2e56',  series:'osman', season:'2', episode:'56',  title:'الحلقة ٥٦ — الجزء الثاني',  ytId:'6jYK2rPtZpE', langs:{ ar:'6jYK2rPtZpE' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يتجاوز منتصفه — الدولة تترسّخ وتكبر.' },
  { id:'osm_s2e58',  series:'osman', season:'2', episode:'58',  title:'الحلقة ٥٨ — الجزء الثاني',  ytId:'XWTr2Hos51w', langs:{ ar:'XWTr2Hos51w' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يصنع لحظات خالدة — عثمان في الذاكرة للأبد.' },
  { id:'osm_s2e59',  series:'osman', season:'2', episode:'59',  title:'الحلقة ٥٩ — الجزء الثاني',  ytId:'N1mchegheCM', langs:{ ar:'N1mchegheCM' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يقترب من نقطة تحول كبرى — المصائر تتحدد.' },
  { id:'osm_s2e61',  series:'osman', season:'2', episode:'61',  title:'الحلقة ٦١ — الجزء الثاني',  ytId:'EDgAogkjEHQ', langs:{ ar:'EDgAogkjEHQ' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني في أشد لحظاته توتراً — عثمان يختار طريق التضحية.' },
  { id:'osm_s2e62',  series:'osman', season:'2', episode:'62',  title:'الحلقة ٦٢ — الجزء الثاني',  ytId:'nDAc1WREOio', langs:{ ar:'nDAc1WREOio' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يكشف أن كل انتصار له ثمنه الخاص.' },
  { id:'osm_s2e65',  series:'osman', season:'2', episode:'65',  title:'الحلقة ٦٥ — الجزء الثاني',  ytId:'MJSQ8LXBwH4', langs:{ ar:'MJSQ8LXBwH4' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يفتح باباً جديداً — الملحمة العثمانية لا تتوقف.' },
  { id:'osm_s2e67',  series:'osman', season:'2', episode:'67',  title:'الحلقة ٦٧ — الجزء الثاني',  ytId:'RI-KqUzuMMs', langs:{ ar:'RI-KqUzuMMs' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يُظهر عثمان في أجمل صورة — القائد والإنسان.' },
  { id:'osm_s2e75',  series:'osman', season:'2', episode:'75',  title:'الحلقة ٧٥ — الجزء الثاني',  ytId:'Ayj2bg4a6Yw', langs:{ ar:'Ayj2bg4a6Yw' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني في مرحلته المتقدمة — عثمان يمشي نحو القسطنطينية.' },
  { id:'osm_s2e85',  series:'osman', season:'2', episode:'85',  title:'الحلقة ٨٥ — الجزء الثاني',  ytId:'PlYt1gAaeQY', langs:{ ar:'PlYt1gAaeQY' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يبلغ ذروته — لحظة من أعظم لحظات الملحمة العثمانية.' },
  { id:'osm_s2e94',  series:'osman', season:'2', episode:'94',  title:'الحلقة ٩٤ — الجزء الثاني',  ytId:'09DA2dZBJWE', langs:{ ar:'09DA2dZBJWE' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يمضي بثبات — عثمان يُوحّد القبائل تحت راية واحدة.' },
  { id:'osm_s2e100', series:'osman', season:'2', episode:'100', title:'الحلقة ١٠٠ — الجزء الثاني', ytId:'VizSDchXwKU', langs:{ ar:'VizSDchXwKU' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'مئة حلقة في ملحمة عثمان — كل حلقة صفحة من تاريخ الإسلام.' },
  { id:'osm_s2e110', series:'osman', season:'2', episode:'110', title:'الحلقة ١١٠ — الجزء الثاني', ytId:'_BMu-5HL5tg', langs:{ ar:'_BMu-5HL5tg' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يقترب من ختامه — الدولة تُبنى على عرق ودم وإيمان.' },
  { id:'osm_s2e115', series:'osman', season:'2', episode:'115', title:'الحلقة ١١٥ — الجزء الثاني', ytId:'b1S_hXx1a5c', langs:{ ar:'b1S_hXx1a5c' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني في مراحله الأخيرة — عثمان يُحكم بناء إمبراطوريته.' },
  { id:'osm_s2e120', series:'osman', season:'2', episode:'120', title:'الحلقة ١٢٠ — الجزء الثاني', ytId:'nSvDFIrs-yA', langs:{ ar:'nSvDFIrs-yA' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يتجه نحو نهايته الكبرى — الملحمة لا تتوقف.' },
  { id:'osm_s2e122', series:'osman', season:'2', episode:'122', title:'الحلقة ١٢٢ — الجزء الثاني', ytId:'cNoOetgCe68', langs:{ ar:'cNoOetgCe68' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'ما قبل الختام في الجزء الثاني — لحظة ستبقى في الذاكرة.' },
  { id:'osm_s2e125', series:'osman', season:'2', episode:'125', title:'الحلقة ١٢٥ — الجزء الثاني', ytId:'-bUerHM4xRo', langs:{ ar:'-bUerHM4xRo' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يكتب آخر فصوله — عثمان على أعتاب انتصاره الأكبر.' },
  { id:'osm_s2e129', series:'osman', season:'2', episode:'129', title:'الحلقة ١٢٩ — الجزء الثاني', ytId:'EGJIrfSxkH0', langs:{ ar:'EGJIrfSxkH0' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يتجه للختام — كل الخيوط تتجمع نحو اللحظة الكبرى.' },
  { id:'osm_s2e130', series:'osman', season:'2', episode:'130', title:'الحلقة ١٣٠ — الجزء الثاني', ytId:'GFWP19cPDj8', langs:{ ar:'GFWP19cPDj8' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'مئة وثلاثون حلقة من الملحمة — عثمان لا يتعب ولا يستسلم.' },
  { id:'osm_s2e142', series:'osman', season:'2', episode:'142', title:'الحلقة ١٤٢ — الجزء الثاني', ytId:'XM8bohmApQI', langs:{ ar:'XM8bohmApQI' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يُسدل ستاره بأحداث غير متوقعة تفتح الجزء الثالث.' },
  { id:'osm_s2e150', series:'osman', season:'2', episode:'150', title:'الحلقة ١٥٠ — الجزء الثاني', ytId:'8lt9PhYuJt0', langs:{ ar:'8lt9PhYuJt0' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'مئة وخمسون حلقة من الإبداع — الجزء الثاني يُختم بعظمة.' },
  { id:'osm_s2e155', series:'osman', season:'2', episode:'155', title:'الحلقة ١٥٥ — الجزء الثاني', ytId:'ToKmN24tI-Q', langs:{ ar:'ToKmN24tI-Q' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني في ذروته الأخيرة — عثمان يكتب صفحات من ذهب.' },
  { id:'osm_s2e164', series:'osman', season:'2', episode:'164', title:'الحلقة ١٦٤ — الجزء الثاني', ytId:'NC45crYG-W4', langs:{ ar:'NC45crYG-W4' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يلفّ الأحداث نحو نقطة واحدة — اللحظة الكبرى.' },
  { id:'osm_s2e171', series:'osman', season:'2', episode:'171', title:'الحلقة ١٧١ — الجزء الثاني', ytId:'IIQX9vgzd_0', langs:{ ar:'IIQX9vgzd_0' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يقترب من خاتمته — عثمان يُعلن انتصاره الأكبر.' },
  { id:'osm_s2e176', series:'osman', season:'2', episode:'176', title:'الحلقة ١٧٦ — الجزء الثاني', ytId:'Fz40UkzLZcg', langs:{ ar:'Fz40UkzLZcg' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يسجّل لحظة تاريخية — الملحمة العثمانية تكتمل.' },
  { id:'osm_s2e178', series:'osman', season:'2', episode:'178', title:'الحلقة ١٧٨ — الجزء الثاني', ytId:'_nwgeFZANoY', langs:{ ar:'_nwgeFZANoY' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني في آخر فصوله — عثمان يُغلق دفتر التحديات.' },
  { id:'osm_s2e179', series:'osman', season:'2', episode:'179', title:'الحلقة ١٧٩ — الجزء الثاني', ytId:'-j6KMYkulUs', langs:{ ar:'-j6KMYkulUs' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'ما قبل نهاية الجزء الثاني — اللحظات الأخيرة من الملحمة.' },
  { id:'osm_s2e180', series:'osman', season:'2', episode:'180', title:'الحلقة ١٨٠ — الجزء الثاني', ytId:'W2Chir5RfLQ', langs:{ ar:'W2Chir5RfLQ' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يُكمل مسيرته — عثمان مؤسس الإمبراطورية العظيمة.' },
  { id:'osm_s2e182', series:'osman', season:'2', episode:'182', title:'الحلقة ١٨٢ — الجزء الثاني', ytId:'5oh0GIPUecs', langs:{ ar:'5oh0GIPUecs' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يختتم ملحمته — عثمان في أكمل صورة للقائد.' },
  { id:'osm_s2e190', series:'osman', season:'2', episode:'190', title:'الحلقة ١٩٠ — الجزء الثاني', ytId:'EUk3ZW1imwM', langs:{ ar:'EUk3ZW1imwM' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني في خاتمته الكبرى — كل الوعود تتحقق.' },
  { id:'osm_s2e191', series:'osman', season:'2', episode:'191', title:'الحلقة ١٩١ — الجزء الثاني', ytId:'YIEW1c92oP0', langs:{ ar:'YIEW1c92oP0' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يُسدل ستاره — عثمان يُعلن دولته للعالم.' },
  { id:'osm_s2e201', series:'osman', season:'2', episode:'201', title:'الحلقة ٢٠١ — الجزء الثاني', ytId:'B7LYDrVCo9I', langs:{ ar:'B7LYDrVCo9I' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'عثمان يكتب آخر فصول الجزء الثاني — الدولة العثمانية تبدأ.' },
  { id:'osm_s2e209', series:'osman', season:'2', episode:'209', title:'الحلقة ٢٠٩ — الجزء الثاني', ytId:'wqzBBr6WF7c', langs:{ ar:'wqzBBr6WF7c' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثاني يختتم رحلته — ملحمة عثمان لا تُوصف بكلمات.' },
  { id:'osm_s2e215', series:'osman', season:'2', episode:'215', title:'الحلقة ٢١٥ — الجزء الثاني', ytId:'a0K6FbkCQXo', langs:{ ar:'a0K6FbkCQXo' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'نهاية الجزء الثاني الكبرى — عثمان يُغلق باباً ويفتح حضارة.' },

  // ══════════════ المؤسس عثمان — حلقات جديدة S3 ══════════════

  { id:'osm_s3e1',   series:'osman', season:'3', episode:'1',   title:'الحلقة ١ — الجزء الثالث',   ytId:'vApuKdt8DCI', langs:{ ar:'vApuKdt8DCI' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يفتح أبوابه — عثمان في مرحلة جديدة من الملحمة.' },
  { id:'osm_s3e2',   series:'osman', season:'3', episode:'2',   title:'الحلقة ٢ — الجزء الثالث',   ytId:'h2EZZaxbiRs', langs:{ ar:'h2EZZaxbiRs' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يتصاعد — تحديات جديدة لم تشهدها الملحمة من قبل.' },
  { id:'osm_s3e3',   series:'osman', season:'3', episode:'3',   title:'الحلقة ٣ — الجزء الثالث',   ytId:'7JuHWjIvzFA', langs:{ ar:'7JuHWjIvzFA' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يكشف أعداء جدداً — عثمان لا ينام على الانتصارات.' },
  { id:'osm_s3e4',   series:'osman', season:'3', episode:'4',   title:'الحلقة ٤ — الجزء الثالث',   ytId:'7-RbRzbueLA', langs:{ ar:'7-RbRzbueLA' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يبني على إرث ضخم — عثمان يواصل تشييد الحضارة.' },
  { id:'osm_s3e90',  series:'osman', season:'3', episode:'90',  title:'الحلقة ٩٠ — الجزء الثالث',  ytId:'3pT9pQ2K2cQ', langs:{ ar:'3pT9pQ2K2cQ' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث في منتصف طريقه — الحضارة العثمانية تترسّخ.' },
  { id:'osm_s3e220', series:'osman', season:'3', episode:'220', title:'الحلقة ٢٢٠ — الجزء الثالث', ytId:'y0qe4TaU-c4', langs:{ ar:'y0qe4TaU-c4' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يكتب فصوله الأخيرة — عثمان في ذروة مجده.' },
  { id:'osm_s3e226', series:'osman', season:'3', episode:'226', title:'الحلقة ٢٢٦ — الجزء الثالث', ytId:'g9c3UbBMGg8', langs:{ ar:'g9c3UbBMGg8' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يبلغ ذروته — لحظات ستُكتب في سجلات التاريخ.' },
  { id:'osm_s3e235', series:'osman', season:'3', episode:'235', title:'الحلقة ٢٣٥ — الجزء الثالث', ytId:'Wm8iPPpQhbQ', langs:{ ar:'Wm8iPPpQhbQ' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يختتم رحلته — عثمان المؤسس الأعظم في التاريخ.' },
  { id:'osm_s3e249', series:'osman', season:'3', episode:'249', title:'الحلقة ٢٤٩ — الجزء الثالث', ytId:'Voq6kS5nIM4', langs:{ ar:'Voq6kS5nIM4' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث في لحظاته الأكثر إثارة — الملحمة العثمانية تتواصل.' },
  { id:'osm_s3e250', series:'osman', season:'3', episode:'250', title:'الحلقة ٢٥٠ — الجزء الثالث', ytId:'-008OQ2F0Rw', langs:{ ar:'-008OQ2F0Rw' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'مئتان وخمسون حلقة من الملحمة — عثمان يصنع التاريخ.' },
  { id:'osm_s3e263', series:'osman', season:'3', episode:'263', title:'الحلقة ٢٦٣ — الجزء الثالث', ytId:'o0o_nrvUlSQ', langs:{ ar:'o0o_nrvUlSQ' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يكتب صفحاته الختامية — التاريخ لا يُعاد.' },
  { id:'osm_s3e289', series:'osman', season:'3', episode:'289', title:'الحلقة ٢٨٩ — الجزء الثالث', ytId:'-ux6dV-jDAE', langs:{ ar:'-ux6dV-jDAE' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث في لحظته الأخيرة — عثمان يختم مسيرته بانتصار.' },
  { id:'osm_s3e290', series:'osman', season:'3', episode:'290', title:'الحلقة ٢٩٠ — الجزء الثالث', ytId:'VySVymhGX9Q', langs:{ ar:'VySVymhGX9Q' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يختتم — الإرث العثماني يبدأ هنا.' },
  { id:'osm_s3e292', series:'osman', season:'3', episode:'292', title:'الحلقة ٢٩٢ — الجزء الثالث', ytId:'y1wjA8fCgUc', langs:{ ar:'y1wjA8fCgUc' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يُسدل ستاره — عثمان يترك إرثاً لا يُضاهى.' },
  { id:'osm_s3e297', series:'osman', season:'3', episode:'297', title:'الحلقة ٢٩٧ — الجزء الثالث', ytId:'ZjfYKpfZrmU', langs:{ ar:'ZjfYKpfZrmU' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث في ختامه الملحمي — كل حلقة كانت تاريخاً.' },
  { id:'osm_s3e299', series:'osman', season:'3', episode:'299', title:'الحلقة ٢٩٩ — الجزء الثالث', ytId:'kRWqL0lpr2w', langs:{ ar:'kRWqL0lpr2w' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يصل لنهايته — عثمان يختم عهداً ويبدأ حضارة.' },
  { id:'osm_s3e304', series:'osman', season:'3', episode:'304', title:'الحلقة ٣٠٤ — الجزء الثالث', ytId:'aRNmiCEqy_g', langs:{ ar:'aRNmiCEqy_g' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يكتب آخر كلماته — عثمان باقٍ في الذاكرة إلى الأبد.' },
  { id:'osm_s3e305', series:'osman', season:'3', episode:'305', title:'الحلقة ٣٠٥ — الجزء الثالث', ytId:'mXNYghMxzxc', langs:{ ar:'mXNYghMxzxc' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'ثلاثمئة وخمس حلقات من الملحمة — الجزء الثالث في ذروته.' },
  { id:'osm_s3e306', series:'osman', season:'3', episode:'306', title:'الحلقة ٣٠٦ — الجزء الثالث', ytId:'BQW6WmBRsqU', langs:{ ar:'BQW6WmBRsqU' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يختتم صفحاته — عثمان المؤسس الأبدي.' },
  { id:'osm_s3e309', series:'osman', season:'3', episode:'309', title:'الحلقة ٣٠٩ — الجزء الثالث', ytId:'TJVRvVk8cKA', langs:{ ar:'TJVRvVk8cKA' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث في لحظته الأخيرة — عثمان يترك الدولة صامدة راسخة.' },
  { id:'osm_s3e310', series:'osman', season:'3', episode:'310', title:'الحلقة ٣١٠ — الجزء الثالث', ytId:'o0GL3xUkvMM', langs:{ ar:'o0GL3xUkvMM' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'ثلاثمئة وعشر حلقات — الجزء الثالث يُحكم إغلاق ملفاته الكبيرة.' },
  { id:'osm_s3e312', series:'osman', season:'3', episode:'312', title:'الحلقة ٣١٢ — الجزء الثالث', ytId:'Y3RJFVMpNWU', langs:{ ar:'Y3RJFVMpNWU' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يصل للقاع — كل ما سبق كان تحضيراً لهذه اللحظة.' },
  { id:'osm_s3e322', series:'osman', season:'3', episode:'322', title:'الحلقة ٣٢٢ — الجزء الثالث', ytId:'NIk5gDIYZe0', langs:{ ar:'NIk5gDIYZe0' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يكتب ختامه الملحمي — عثمان في أحلى صوره.' },
  { id:'osm_s3e328', series:'osman', season:'3', episode:'328', title:'الحلقة ٣٢٨ — الجزء الثالث', ytId:'g21qFAuenS8', langs:{ ar:'g21qFAuenS8' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث يُسدل ستاره الكبير — ملحمة عثمان لا تنتهي.' },
  { id:'osm_s3e331', series:'osman', season:'3', episode:'331', title:'الحلقة ٣٣١ — الجزء الثالث', ytId:'AUOZY7YB7qs', langs:{ ar:'AUOZY7YB7qs' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الجزء الثالث في خاتمته — عثمان يُعلن انتصاره الأخير.' },
  { id:'osm_s3e333', series:'osman', season:'3', episode:'333', title:'الحلقة ٣٣٣ — الجزء الثالث', ytId:'yDDRTafQCPg', langs:{ ar:'yDDRTafQCPg' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'ثلاثة وثلاثون وثلاثمئة حلقة — والملحمة لا تزال تُدهش.' },
  { id:'osm_s3e334', series:'osman', season:'3', episode:'334', title:'الحلقة ٣٣٤ — الجزء الثالث', ytId:'5y8aiG6NAMY', langs:{ ar:'5y8aiG6NAMY' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'ما قبل الختام الأخير — الجزء الثالث يُودّع بكل الجلال والعظمة.' },
  { id:'osm_s3e337', series:'osman', season:'3', episode:'337', title:'الحلقة ٣٣٧ — خاتمة الجزء الثالث', ytId:'Y0eQzspFQ9U', langs:{ ar:'Y0eQzspFQ9U' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'المؤسس عثمان', desc:'الحلقة الأخيرة في الجزء الثالث — عثمان يُختم ملحمته بأعظم إنجازاته.' },

  // ══════════════ الطائر المبكر — 9 حلقات (سلسلة جديدة) ══════════════
  { id:'taer_e1',  series:'taer', season:'1', episode:'1',  title:'الحلقة ١ — الطائر المبكر',  ytId:'I-T39mnsD2U', langs:{ ar:'I-T39mnsD2U' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'البداية الرومانسية الساحرة — جان ومقابلتها الأولى مع سانان الغامض.' },
  { id:'taer_e2',  series:'taer', season:'1', episode:'2',  title:'الحلقة ٢ — الطائر المبكر',  ytId:'bhA7i_ADOj8', langs:{ ar:'bhA7i_ADOj8' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'جان وسانان يبدآن رحلة عاطفية مدهشة بين الإنكار والجذب.' },
  { id:'taer_e3',  series:'taer', season:'1', episode:'3',  title:'الحلقة ٣ — الطائر المبكر',  ytId:'BVbzJITjt1k', langs:{ ar:'BVbzJITjt1k' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'الرومانسية تتصاعد — سانان لا يستطيع إخفاء مشاعره.' },
  { id:'taer_e4',  series:'taer', season:'1', episode:'4',  title:'الحلقة ٤ — الطائر المبكر',  ytId:'DKLyxuuSL5Q', langs:{ ar:'DKLyxuuSL5Q' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'جان تكتشف سر سانان الكبير — العلاقة في منعطف.' },
  { id:'taer_e5',  series:'taer', season:'1', episode:'5',  title:'الحلقة ٥ — الطائر المبكر',  ytId:'OoG9ZMWhCjE', langs:{ ar:'OoG9ZMWhCjE' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'الطائر المبكر يحلق عالياً — الحب ينمو رغم العقبات.' },
  { id:'taer_e7',  series:'taer', season:'1', episode:'7',  title:'الحلقة ٧ — الطائر المبكر',  ytId:'qtQkLb5geoY', langs:{ ar:'qtQkLb5geoY' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'سانان وجان في مواجهة أهم لحظة في قصتهما.' },
  { id:'taer_e8',  series:'taer', season:'1', episode:'8',  title:'الحلقة ٨ — الطائر المبكر',  ytId:'6W6VWL4GuIA', langs:{ ar:'6W6VWL4GuIA' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'الرومانسية في أجمل صورها — الطائر المبكر يُذهل المشاهد.' },
  { id:'taer_e9',  series:'taer', season:'1', episode:'9',  title:'الحلقة ٩ — الطائر المبكر',  ytId:'awxke3-fBcs', langs:{ ar:'awxke3-fBcs' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'جان وسانان يتجاوزان العقبات نحو لحظة الحق.' },
  { id:'taer_e10', series:'taer', season:'1', episode:'10', title:'الحلقة ١٠ — الطائر المبكر', ytId:'5Mmbx7nSejQ', langs:{ ar:'5Mmbx7nSejQ' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'عشر حلقات من الرومانسية الخفيفة — الطائر المبكر لا يتوقف عن الإدهاش.' },

  // ══════════════ فضيلة هانم وبناتها — 5 حلقات (سلسلة جديدة) ══════════════
  { id:'faz_e1', series:'fazilet', season:'1', episode:'1', title:'الحلقة ١ — فضيلة هانم وبناتها', ytId:'X3zHNh97EnM', langs:{ ar:'X3zHNh97EnM' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'البداية — فضيلة هانم وطموحاتها اللامحدودة من أجل بناتها.' },
  { id:'faz_e2', series:'fazilet', season:'1', episode:'2', title:'الحلقة ٢ — فضيلة هانم وبناتها', ytId:'qhvoNr5pxWQ', langs:{ ar:'qhvoNr5pxWQ' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'فضيلة هانم تمضي في مخططاتها — الأم الطموحة لا تتوقف.' },
  { id:'faz_e3', series:'fazilet', season:'1', episode:'3', title:'الحلقة ٣ — فضيلة هانم وبناتها', ytId:'gopoujbgSpk', langs:{ ar:'gopoujbgSpk' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'المؤامرات تتصاعد — فضيلة هانم تواجه نتائج طموحها.' },
  { id:'faz_e4', series:'fazilet', season:'1', episode:'4', title:'الحلقة ٤ — فضيلة هانم وبناتها', ytId:'Yiw8YQQICoA', langs:{ ar:'Yiw8YQQICoA' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'الدراما الاجتماعية في أوج عطائها — الحياة لا تسير كما خُطِّط.' },
  { id:'faz_e5', series:'fazilet', season:'1', episode:'5', title:'الحلقة ٥ — فضيلة هانم وبناتها', ytId:'8LOX8PNODjs', langs:{ ar:'8LOX8PNODjs' }, duration:'1:25', cat:'مسلسلات تركية', type:'حلقة', source:'Star TV Arabic', desc:'فضيلة هانم وبناتها في مفترق طرق — القرارات الصعبة تنتظر.' },

  // ══════════════ العشق الممنوع — 6 حلقات (سلسلة جديدة) ══════════════
  { id:'ask_e1', series:'ask', season:'1', episode:'1', title:'الحلقة ١ — العشق الممنوع', ytId:'OdENOuh-L04', langs:{ ar:'OdENOuh-L04' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Kanal D Arabic', desc:'البداية الكلاسيكية — فيهان وبيهلول، قصة عشق ممنوع تبدأ هنا.' },
  { id:'ask_e2', series:'ask', season:'1', episode:'2', title:'الحلقة ٢ — العشق الممنوع', ytId:'RHyRmV3HgIg', langs:{ ar:'RHyRmV3HgIg' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Kanal D Arabic', desc:'المشاعر المكبوتة تبدأ بالظهور — العشق الممنوع يشعل قصته.' },
  { id:'ask_e3', series:'ask', season:'1', episode:'3', title:'الحلقة ٣ — العشق الممنوع', ytId:'7FIH-nTdT9c', langs:{ ar:'7FIH-nTdT9c' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Kanal D Arabic', desc:'فيهان وبيهلول في مواجهة ما لا يمكن إنكاره.' },
  { id:'ask_e4', series:'ask', season:'1', episode:'4', title:'الحلقة ٤ — العشق الممنوع', ytId:'TKpYFtJFKVA', langs:{ ar:'TKpYFtJFKVA' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Kanal D Arabic', desc:'الدراما تتصاعد — العشق الممنوع يُحكم أسره على القلبين.' },
  { id:'ask_e5', series:'ask', season:'1', episode:'5', title:'الحلقة ٥ — العشق الممنوع', ytId:'93KfBztVd7I', langs:{ ar:'93KfBztVd7I' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Kanal D Arabic', desc:'خمس حلقات من الدراما الكلاسيكية — العشق الممنوع يُذهل المشاهد.' },
  { id:'ask_e6', series:'ask', season:'1', episode:'6', title:'الحلقة ٦ — العشق الممنوع', ytId:'QtIF2QQTUFI', langs:{ ar:'QtIF2QQTUFI' }, duration:'1:30', cat:'مسلسلات تركية', type:'حلقة', source:'Kanal D Arabic', desc:'بيهلول وفيهان — قصة عشق لا يمكن إخماؤها مهما حاولوا.' }
// END_VIDEO_LIBRARY
];

const AI_VIDEOS = [
  { id:'ai1', title:'الوجه الذي خرج من الشاشة', ytId:'', duration:'8:00', langs:{},
    cat:'رعب نفسي', status:'coming',
    desc:'شاب يستخدم أداة ذكاء اصطناعي لتوليد وجه خيالي... لكن الوجه يبدأ في التحدث معه ليلاً.',
    thumb:'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80&auto=format' },
  { id:'ai2', title:'الفتاة التي لا تظهر في الصور', ytId:'', duration:'7:00', langs:{},
    cat:'غموض', status:'coming',
    desc:'في كل صورة جماعية تختفي فتاة واحدة، لكن الجميع يتذكر أنها كانت بينهم.',
    thumb:'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&q=80&auto=format' },
  { id:'ai3', title:'الرجل المصنوع من الذاكرة', ytId:'', duration:'6:30', langs:{},
    cat:'رعب نفسي', status:'coming',
    desc:'رجل لا يراه إلا من يتذكر ماضياً يريد نسيانه.',
    thumb:'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80&auto=format' },
  { id:'ai4', title:'الصوت القادم من المستقبل', ytId:'', duration:'7:30', langs:{},
    cat:'إثارة', status:'coming',
    desc:'كل ليلة رسالة صوتية من نفسه بعد سنة — وفي كل رسالة تحذير أقرب من الموت.',
    thumb:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80&auto=format' },
  { id:'ai5', title:'المدينة التي لا ينام سكانها', ytId:'', duration:'8:00', langs:{},
    cat:'غموض', status:'coming',
    desc:'السكان لا ينامون لأنهم يخافون من نفس الحلم.',
    thumb:'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&q=80&auto=format' },
  { id:'ai6', title:'الطفل الذي صنعه الذكاء الاصطناعي', ytId:'', duration:'6:45', langs:{},
    cat:'رعب', status:'coming',
    desc:'يطلب برنامج ذكاء اصطناعي أن يصنع طفلاً... الطفل يطلب اسماً حقيقياً.',
    thumb:'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&auto=format' }
];
