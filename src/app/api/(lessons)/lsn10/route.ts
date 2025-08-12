export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    words: [
      {
        id: 109,
        pronunciation: "/ɪkˈsel/",
        imageUrl: "",
        word: "excel",
        definition:
          "to be exceptionally good at or proficient in an activity or subject",
        synonyms: ["shine", "outperform", "surpass"],
        examples: [
          "She excels in mathematics.",
          "He excelled at sports in school.",
          "The team excelled in the competition.",
        ],
        wordPr: "برتری داشتن",
        definitionPr: "در یک فعالیت یا موضوع بسیار خوب یا ماهر بودن",
        synonymsPr: ["درخشیدن", "پیشی گرفتن"],
        examplesPr: [
          "او در ریاضیات برتری دارد.",
          "او در مدرسه در ورزش‌ها عالی بود.",
          "تیم در رقابت عالی عمل کرد.",
        ],
      },
      {
        id: 110,
        pronunciation: "/ˈfemənɪn/",
        imageUrl: "",
        word: "feminine",
        definition:
          "having qualities or appearance traditionally associated with women",
        synonyms: ["womanly", "female", "delicate"],
        examples: [
          "She has a very feminine voice.",
          "The room was decorated in a feminine style.",
          "Some cultures associate pink with feminine traits.",
        ],
        wordPr: "زنانه",
        definitionPr:
          "دارای کیفیت‌ها یا ظاهری که به طور سنتی با زنان مرتبط است",
        synonymsPr: ["مونث", "ظریف"],
        examplesPr: [
          "او صدایی بسیار زنانه دارد.",
          "اتاق به سبک زنانه تزیین شده بود.",
          "برخی فرهنگ‌ها رنگ صورتی را با ویژگی‌های زنانه مرتبط می‌دانند.",
        ],
      },
      {
        id: 111,
        pronunciation: "/maʊnt/",
        imageUrl: "",
        word: "mount",
        definition: "to climb up or ascend; to organize and implement",
        synonyms: ["climb", "ascend", "scale"],
        examples: [
          "They mounted the hill before sunrise.",
          "The museum mounted an exhibition of ancient art.",
          "He mounted his bicycle and rode away.",
        ],
        wordPr: "بالا رفتن",
        definitionPr: "از چیزی بالا رفتن یا صعود کردن؛ سازماندهی و اجرا کردن",
        synonymsPr: ["صعود کردن", "سوار شدن"],
        examplesPr: [
          "آن‌ها قبل از طلوع آفتاب از تپه بالا رفتند.",
          "موزه نمایشگاهی از هنر باستانی برپا کرد.",
          "او سوار دوچرخه شد و دور شد.",
        ],
      },
      {
        id: 112,
        pronunciation: "/kəmˈpiːt/",
        imageUrl: "",
        word: "compete",
        definition:
          "to strive to gain or win something by defeating or establishing superiority over others",
        synonyms: ["contend", "vie", "rival"],
        examples: [
          "Athletes from many countries will compete in the Olympics.",
          "Our company competes with larger corporations.",
          "She's competing for the top prize.",
        ],
        wordPr: "رقابت کردن",
        definitionPr:
          "برای به دست آوردن یا بردن چیزی با شکست دادن یا برتری یافتن بر دیگران تلاش کردن",
        synonymsPr: ["همچشمی کردن", "مبارزه کردن"],
        examplesPr: [
          "ورزشکاران از بسیاری کشورها در المپیک رقابت خواهند کرد.",
          "شرکت ما با شرکت‌های بزرگتر رقابت می‌کند.",
          "او برای جایزه اول رقابت می‌کند.",
        ],
      },
      {
        id: 113,
        pronunciation: "/dred/",
        imageUrl: "",
        word: "dread",
        definition: "to anticipate with great apprehension or fear",
        synonyms: ["fear", "apprehend", "fright"],
        examples: [
          "I dread going to the dentist.",
          "She dreaded the thought of public speaking.",
          "He was filled with dread before the exam.",
        ],
        wordPr: "ترسیدن",
        definitionPr: "با نگرانی یا ترس زیاد انتظار چیزی را داشتن",
        synonymsPr: ["وحشت داشتن", "هراسیدن"],
        examplesPr: [
          "من از رفتن به دندانپزشکی می‌ترسم.",
          "او از فکر سخنرانی در جمع وحشت داشت.",
          "او قبل از امتحان پر از ترس بود.",
        ],
      },
      {
        id: 114,
        pronunciation: "/ˈmæskjəlɪn/",
        imageUrl: "",
        word: "masculine",
        definition:
          "having qualities or appearance traditionally associated with men",
        synonyms: ["manly", "male", "virile"],
        examples: [
          "He has a very masculine voice.",
          "The design was bold and masculine.",
          "Some societies value masculine traits more than feminine ones.",
        ],
        wordPr: "مردانه",
        definitionPr:
          "دارای کیفیت‌ها یا ظاهری که به طور سنتی با مردان مرتبط است",
        synonymsPr: ["مذکر", "قوی"],
        examplesPr: [
          "او صدایی بسیار مردانه دارد.",
          "طراحی جسورانه و مردانه بود.",
          "برخی جوامع ویژگی‌های مردانه را بیش از زنانه ارزش می‌گذارند.",
        ],
      },
      {
        id: 115,
        pronunciation: "/ˈmenəs/",
        imageUrl: "",
        word: "menace",
        definition:
          "a person or thing that is likely to cause harm; a threat or danger",
        synonyms: ["threat", "danger", "hazard"],
        examples: [
          "Pollution is a menace to public health.",
          "The escaped prisoner was considered a menace to society.",
          "His reckless driving is a menace on the roads.",
        ],
        wordPr: "تهدید",
        definitionPr:
          "شخص یا چیزی که احتمالاً باعث آسیب می‌شود؛ یک خطر یا تهدید",
        synonymsPr: ["خطر", "آسیب"],
        examplesPr: [
          "آلودگی تهدیدی برای سلامت عمومی است.",
          "زندانی فراری تهدیدی برای جامعه محسوب می‌شد.",
          "رانندگی بی‌پروای او در جاده‌ها خطرناک است.",
        ],
      },
      {
        id: 116,
        pronunciation: "/ˈtendənsi/",
        imageUrl: "",
        word: "tendency",
        definition:
          "an inclination toward a particular characteristic or type of behavior",
        synonyms: ["inclination", "propensity", "trend"],
        examples: [
          "She has a tendency to exaggerate.",
          "There's a growing tendency to work from home.",
          "His tendency to procrastinate causes problems.",
        ],
        wordPr: "تمایل",
        definitionPr: "گرایش به یک ویژگی خاص یا نوعی از رفتار",
        synonymsPr: ["گرایش", "میل"],
        examplesPr: [
          "او تمایل به اغراق دارد.",
          "تمایل به کار از خانه در حال افزایش است.",
          "تمایل او به تعویق انداختن کارها باعث مشکلاتی می‌شود.",
        ],
      },
      {
        id: 117,
        pronunciation: "/ˌʌndərˈestɪmeɪt/",
        imageUrl: "",
        word: "underestimate",
        definition:
          "to estimate something as being smaller or less important than it actually is",
        synonyms: ["undervalue", "underrate", "minimize"],
        examples: [
          "Never underestimate your opponent.",
          "We underestimated the difficulty of the task.",
          "The damage was underestimated at first.",
        ],
        wordPr: "دست کم گرفتن",
        definitionPr: "چیزی را کوچکتر یا کم‌اهمیت‌تر از آنچه هست برآورد کردن",
        synonymsPr: ["کوچک شمردن", "نادیده گرفتن"],
        examplesPr: [
          "هرگز حریف خود را دست کم نگیر.",
          "ما دشواری کار را دست کم گرفتیم.",
          "در ابتدا خسارت دست کم گرفته شد.",
        ],
      },
      {
        id: 118,
        pronunciation: "/vɪkˈtɔːriəs/",
        imageUrl: "",
        word: "victorious",
        definition: "having won a victory; triumphant",
        synonyms: ["triumphant", "successful", "winning"],
        examples: [
          "The victorious team celebrated their win.",
          "She felt victorious after completing the marathon.",
          "The victorious general returned home to a hero's welcome.",
        ],
        wordPr: "پیروزمند",
        definitionPr: "پیروز شده؛ فاتح",
        synonymsPr: ["پیروز", "موفق"],
        examplesPr: [
          "تیم پیروزمند پیروزی خود را جشن گرفت.",
          "او پس از اتمام ماراتن احساس پیروزی کرد.",
          "ژنرال پیروزمند با استقبال قهرمانانه به خانه بازگشت.",
        ],
      },
      {
        id: 119,
        pronunciation: "/ˈnuːmərəs/",
        imageUrl: "",
        word: "numerous",
        definition: "great in number; many",
        synonyms: ["many", "countless", "multiple"],
        examples: [
          "She has numerous friends in the city.",
          "Numerous studies support this theory.",
          "We've encountered numerous problems.",
        ],
        wordPr: "متعدد",
        definitionPr: "بسیار در تعداد؛ زیاد",
        synonymsPr: ["زیاد", "بی‌شمار"],
        examplesPr: [
          "او دوستان متعددی در شهر دارد.",
          "مطالعات متعددی از این نظریه حمایت می‌کنند.",
          "ما با مشکلات متعددی روبرو شده‌ایم.",
        ],
      },
      {
        id: 120,
        pronunciation: "/ˈfleksəbl/",
        imageUrl: "",
        word: "flexible",
        definition:
          "capable of bending easily without breaking; able to be easily modified",
        synonyms: ["pliable", "adaptable", "adjustable"],
        examples: [
          "Yoga makes your body more flexible.",
          "We need a more flexible approach to this problem.",
          "The schedule is flexible and can be changed.",
        ],
        wordPr: "انعطاف‌پذیر",
        definitionPr: "قادر به خم شدن آسان بدون شکستن؛ قابل تغییر آسان",
        synonymsPr: ["نرم", "قابل انعطاف"],
        examplesPr: [
          "یوگا بدن شما را انعطاف‌پذیرتر می‌کند.",
          "ما به رویکرد انعطاف‌پذیرتری برای این مشکل نیاز داریم.",
          "برنامه انعطاف‌پذیر است و می‌تواند تغییر کند.",
        ],
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
