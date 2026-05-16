// قم بتغيير ytId بمعرف الفيديو من YouTube
// مثال: https://youtube.com/watch?v=ABC123 → ytId: 'ABC123'

const YOUTUBE_VIDEOS = [
  {
    id: 'yv1',
    title: 'البيت المهجور الذي يرفض أصحابه',
    ytId: 'dQw4w9WgXcQ', // ← غيّر هذا بمعرف الفيديو الحقيقي
    duration: '8:24',
    cat: 'رعب',
    source: 'القصص الأسطورية',
    desc: 'قصة رجل استأجر منزلاً قديماً واكتشف أن ساكنه السابق لم يغادره أبداً.'
  },
  {
    id: 'yv2',
    title: 'الطريق الذي يبتلع السيارات',
    ytId: 'dQw4w9WgXcQ',
    duration: '6:15',
    cat: 'غموض',
    source: 'القصص الأسطورية',
    desc: 'شهادة سائق عاش ليلة على طريق غير موجود على أي خريطة.'
  },
  {
    id: 'yv3',
    title: 'اتصال من رقم غير موجود',
    ytId: 'dQw4w9WgXcQ',
    duration: '9:42',
    cat: 'رعب نفسي',
    source: 'القصص الأسطورية',
    desc: 'ماذا يحدث حين يتصل بك شخص توفي قبل أشهر؟ قصة حقيقية.'
  },
  {
    id: 'yv4',
    title: 'الطفل الذي يرى ما لا نراه',
    ytId: 'dQw4w9WgXcQ',
    duration: '7:03',
    cat: 'إثارة',
    source: 'القصص الأسطورية',
    desc: 'طفل في الخامسة يتحدث كل ليلة مع شخص غير مرئي في زاوية الغرفة.'
  },
  {
    id: 'yv5',
    title: 'الغرفة التي لا تريدك أن تخرج',
    ytId: 'dQw4w9WgXcQ',
    duration: '10:18',
    cat: 'رعب',
    source: 'القصص الأسطورية',
    desc: 'قصة رجل دخل منزل عمه المتوفى ووجد أن الأبواب لا تؤدي إلى الخارج.'
  },
  {
    id: 'yv6',
    title: 'الصورة التي تغيرت في الليل',
    ytId: 'dQw4w9WgXcQ',
    duration: '5:57',
    cat: 'غموض',
    source: 'القصص الأسطورية',
    desc: 'صورة عائلية قديمة وُجدت في منزل مستأجر... تتغير كل يوم.'
  }
];

const AI_VIDEOS = [
  {
    id: 'ai1',
    title: 'البيت الذي عاد إليه صاحبه بعد موته',
    ytId: '', // سيُضاف حين يصبح الفيديو جاهزاً
    duration: '8:00',
    cat: 'رعب نفسي',
    status: 'coming', // 'ready' أو 'coming'
    desc: 'نسخة فيديو بالذكاء الاصطناعي — شخصية تروي القصة بصوت مرعب مع مشاهد متحركة.',
    thumb: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80&auto=format'
  },
  {
    id: 'ai2',
    title: 'الطريق الذي لا يظهر على الخريطة',
    ytId: '',
    duration: '7:00',
    cat: 'غموض',
    status: 'coming',
    desc: 'نسخة فيديو بالذكاء الاصطناعي — ريان يروي قصته بصوته مع تأثيرات الطريق الليلي.',
    thumb: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=600&q=80&auto=format'
  },
  {
    id: 'ai3',
    title: 'صوت أمي في الهاتف',
    ytId: '',
    duration: '6:00',
    cat: 'رعب',
    status: 'coming',
    desc: 'نسخة فيديو بالذكاء الاصطناعي — صوت الأم الحقيقي مُولَّد بالذكاء الاصطناعي.',
    thumb: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80&auto=format'
  },
  {
    id: 'ai4',
    title: 'الغرفة 207',
    ytId: '',
    duration: '7:30',
    cat: 'غموض',
    status: 'coming',
    desc: 'نسخة فيديو بالذكاء الاصطناعي — شخصية تروي الليلة الغامضة في الفندق.',
    thumb: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80&auto=format'
  },
  {
    id: 'ai5',
    title: 'آخر تسجيل',
    ytId: '',
    duration: '6:30',
    cat: 'رعب',
    status: 'coming',
    desc: 'نسخة فيديو بالذكاء الاصطناعي — يسمعون التسجيل الأصلي مع مشاهد متحركة.',
    thumb: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80&auto=format'
  },
  {
    id: 'ai6',
    title: 'رسالة كتبتها قبل أن أموت',
    ytId: '',
    duration: '8:00',
    cat: 'رعب نفسي',
    status: 'coming',
    desc: 'نسخة فيديو بالذكاء الاصطناعي — الرسائل تُقرأ بصوت مخيف مع تأثيرات بصرية.',
    thumb: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=600&q=80&auto=format'
  }
];
