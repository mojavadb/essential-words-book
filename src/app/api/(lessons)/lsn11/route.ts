export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    words: [
      {
        id: 121,
        pronunciation: "/ˈevɪdəns/",
        imageUrl: "",
        word: "evidence",
        definition:
          "the available body of facts or information indicating whether a belief or proposition is true or valid",
        synonyms: ["proof", "testimony", "confirmation"],
        examples: [
          "There is no evidence to support his claim.",
          "The police collected evidence at the crime scene.",
          "Her smile was evidence of her happiness.",
        ],
        wordPr: "شواهد",
        definitionPr:
          "مجموعه‌ای از حقایق یا اطلاعات موجود که نشان می‌دهد یک باور یا گزاره درست یا معتبر است",
        synonymsPr: ["مدرک", "گواهی"],
        examplesPr: [
          "هیچ شاهدی برای حمایت از ادعای او وجود ندارد.",
          "پلیس در صحنه جرم شواهد جمع‌آوری کرد.",
          "لبخند او نشانه‌ای از خوشحالی‌اش بود.",
        ],
      },
      {
        id: 122,
        pronunciation: "/ˈsɑːləteri/",
        imageUrl: "",
        word: "solitary",
        definition: "done or existing alone",
        synonyms: ["alone", "isolated", "lonely"],
        examples: [
          "He led a solitary life in the mountains.",
          "The prisoner was kept in solitary confinement.",
          "A solitary tree stood in the field.",
        ],
        wordPr: "تنها",
        definitionPr: "تنها انجام شده یا موجود",
        synonymsPr: ["منزوی", "یکتا"],
        examplesPr: [
          "او زندگی تنهايی در کوهستان داشت.",
          "زندانی در سلول انفرادی نگهداری می‌شد.",
          "درخت تنهايی در مزرعه ایستاده بود.",
        ],
      },
      {
        id: 123,
        pronunciation: "/ˈvɪʒn/",
        imageUrl: "",
        word: "vision",
        definition: "the faculty or state of being able to see",
        synonyms: ["eyesight", "sight", "perception"],
        examples: [
          "Her vision began to fail as she grew older.",
          "The company needs a clear vision for the future.",
          "He had a vision of a better world.",
        ],
        wordPr: "بینایی",
        definitionPr: "قدرت یا حالت دیدن",
        synonymsPr: ["دید", "تصور"],
        examplesPr: [
          "با بالا رفتن سن، بینایی‌اش شروع به ضعیف شدن کرد.",
          "شرکت به یک چشمانداز روشن برای آینده نیاز دارد.",
          "او تصویری از یک دنیای بهتر داشت.",
        ],
      },
      {
        id: 124,
        pronunciation: "/ˈfriːkwənt/",
        imageUrl: "",
        word: "frequent",
        definition:
          "occurring or done on many occasions, in many cases, or in quick succession",
        synonyms: ["regular", "repeated", "common"],
        examples: [
          "He makes frequent trips to New York.",
          "Frequent headaches may be a sign of stress.",
          "This is a frequent problem in old houses.",
        ],
        wordPr: "مکرر",
        definitionPr: "در موارد یا موقعیت‌های زیادی رخ دادن یا انجام شدن",
        synonymsPr: ["پی در پی", "معمول"],
        examplesPr: [
          "او سفرهای مکرری به نیویورک دارد.",
          "سردردهای مکرر ممکن است نشانه استرس باشد.",
          "این مشکل در خانه‌های قدیمی مکرر است.",
        ],
      },
      {
        id: 125,
        pronunciation: "/ɡlɪmps/",
        imageUrl: "",
        word: "glimpse",
        definition: "a momentary or partial view",
        synonyms: ["glance", "peek", "sight"],
        examples: [
          "I caught a glimpse of her in the crowd.",
          "The book offers a glimpse into ancient history.",
          "We got a brief glimpse of the mountain before the fog rolled in.",
        ],
        wordPr: "نگاه اجمالی",
        definitionPr: "دید لحظه‌ای یا جزئی",
        synonymsPr: ["نگاه کوتاه", "نمای گذرا"],
        examplesPr: [
          "نگاه کوتاهی به او در میان جمعیت انداختم.",
          "کتاب نگاهی اجمالی به تاریخ باستان ارائه می‌دهد.",
          "قبل از آمدن مه، نگاه کوتاهی به کوه انداختیم.",
        ],
      },
      {
        id: 126,
        pronunciation: "/ˈriːsnt/",
        imageUrl: "",
        word: "recent",
        definition:
          "having happened, begun, or been done not long ago or not long before",
        synonyms: ["new", "fresh", "late"],
        examples: [
          "Her most recent book was published last month.",
          "Recent studies show a change in climate patterns.",
          "In recent years, technology has advanced rapidly.",
        ],
        wordPr: "اخیر",
        definitionPr: "اتفاق افتاده، شروع شده، یا انجام شده در زمان‌های نزدیک",
        synonymsPr: ["تازه", "جدید"],
        examplesPr: [
          "جدیدترین کتاب او ماه گذشته منتشر شد.",
          "مطالعات اخیر تغییر در الگوهای آب و هوایی را نشان می‌دهد.",
          "در سال‌های اخیر، فناوری به سرعت پیشرفت کرده است.",
        ],
      },
      {
        id: 127,
        pronunciation: "/ˈdekeɪd/",
        imageUrl: "",
        word: "decade",
        definition: "a period of ten years",
        synonyms: ["ten years", "ten-year period"],
        examples: [
          "The city has changed a lot in the past decade.",
          "She's been working here for over a decade.",
          "The 1990s was an important decade for technology.",
        ],
        wordPr: "دهه",
        definitionPr: "دوره ده ساله",
        synonymsPr: ["ده سال"],
        examplesPr: [
          "شهر در دهه گذشته بسیار تغییر کرده است.",
          "او بیش از یک دهه است که اینجا کار می‌کند.",
          "دهه 1990 دهه مهمی برای فناوری بود.",
        ],
      },
      {
        id: 128,
        pronunciation: "/ˈhezɪteɪt/",
        imageUrl: "",
        word: "hesitate",
        definition:
          "pause before saying or doing something, especially through uncertainty",
        synonyms: ["pause", "waver", "delay"],
        examples: [
          "She hesitated before answering the question.",
          "Don't hesitate to call if you need help.",
          "He hesitated at the door, unsure whether to enter.",
        ],
        wordPr: "تردید کردن",
        definitionPr:
          "قبل از گفتن یا انجام چیزی مکث کردن، مخصوصاً به دلیل عدم اطمینان",
        synonymsPr: ["درنگ کردن", "دو دل بودن"],
        examplesPr: [
          "او قبل از پاسخ به سوال تردید کرد.",
          "اگر به کمک نیاز داری، بدون تردید تماس بگیر.",
          "او پشت در تردید کرد، مطمئن نبود که وارد شود یا نه.",
        ],
      },
      {
        id: 129,
        pronunciation: "/əbˈsɜːrd/",
        imageUrl: "",
        word: "absurd",
        definition: "wildly unreasonable, illogical, or inappropriate",
        synonyms: ["ridiculous", "preposterous", "nonsensical"],
        examples: [
          "It's absurd to expect a child to understand such complex issues.",
          "The idea seemed absurd at first, but it actually worked.",
          "He was wearing an absurd hat that made everyone laugh.",
        ],
        wordPr: "پوچ",
        definitionPr: "به شدت غیرمنطقی، نامعقول یا نامناسب",
        synonymsPr: ["مسخره", "بی‌معنی"],
        examplesPr: [
          "انتظار اینکه یک کودک چنین مسائل پیچیده‌ای را بفهمد، پوچ است.",
          "این ایده در ابتدا پوچ به نظر می‌رسید، اما در واقع جواب داد.",
          "او کلاه مسخره‌ای پوشیده بود که همه را به خنده انداخت.",
        ],
      },
      {
        id: 130,
        pronunciation: "/ˈkɑːnflɪkt/",
        imageUrl: "",
        word: "conflict",
        definition:
          "a serious disagreement or argument, typically a protracted one",
        synonyms: ["dispute", "clash", "disagreement"],
        examples: [
          "There is a conflict between the two groups.",
          "She tries to avoid conflict at work.",
          "The story centers on the conflict between good and evil.",
        ],
        wordPr: "تعارض",
        definitionPr: "اختلاف نظر یا بحث جدی، معمولاً طولانی مدت",
        synonymsPr: ["نزاع", "برخورد"],
        examplesPr: [
          "بین دو گروه تعارض وجود دارد.",
          "او سعی می‌کند از تعارض در محل کار اجتناب کند.",
          "داستان بر تعارض بین خوبی و بدی متمرکز است.",
        ],
      },
      {
        id: 131,
        pronunciation: "/maɪˈnɔːrəti/",
        imageUrl: "",
        word: "minority",
        definition:
          "the smaller number or part, especially a number that is less than half the whole number",
        synonyms: ["smaller part", "lesser number", "few"],
        examples: [
          "Only a minority of people voted against the proposal.",
          "Minority groups often face discrimination.",
          "Women were in the minority at the conference.",
        ],
        wordPr: "اقلیت",
        definitionPr: "تعداد یا بخش کوچکتر، مخصوصاً عددی که کمتر از نصف کل است",
        synonymsPr: ["بخش کوچک", "عده کمتر"],
        examplesPr: [
          "فقط اقلیتی از مردم علیه این پیشنهاد رأی دادند.",
          "گروه‌های اقلیت اغلب با تبعیض روبرو می‌شوند.",
          "زنان در کنفرانس در اقلیت بودند.",
        ],
      },
      {
        id: 132,
        pronunciation: "/ˈfɪkʃn/",
        imageUrl: "",
        word: "fiction",
        definition:
          "literature in the form of prose, especially novels, that describes imaginary events and people",
        synonyms: ["novel", "story", "literature"],
        examples: [
          "She enjoys reading science fiction.",
          "The story is a work of fiction, not based on real events.",
          "He writes both fiction and non-fiction.",
        ],
        wordPr: "داستان",
        definitionPr:
          "ادبیات به شکل نثر، مخصوصاً رمان‌ها، که رویدادها و افراد خیالی را توصیف می‌کند",
        synonymsPr: ["رمان", "قصه"],
        examplesPr: [
          "او از خواندن داستان‌های علمی تخیلی لذت می‌برد.",
          "این داستان یک اثر تخیلی است، بر اساس رویدادهای واقعی نیست.",
          "او هم داستان و هم غیرداستان می‌نویسد.",
        ],
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
