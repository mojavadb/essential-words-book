export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    words: [
      {
        id: 480,
        pronunciation: "kəmˈpleɪsənt",
        imageUrl: "",
        word: "complacent",
        definition:
          "self-satisfied, especially when unaware of actual dangers or deficiencies",
        synonyms: ["smug", "self-satisfied", "unconcerned"],
        examples: [
          "He became complacent after a few small victories.",
          "Don't be complacent about your health.",
          "Complacent workers can harm team progress.",
        ],
        wordPr: "راضی از خود، خودراضی",
        definitionPr:
          "احساس رضایت از خود، مخصوصاً در حالی که از خطرات یا کمبودها آگاه نیست",
        synonymsPr: ["خودراضی", "بی‌خیال", "مغرور"],
        examplesPr: [
          "او بعد از چند پیروزی کوچک، خودراضی شد.",
          "نسبت به سلامتی‌ات بی‌خیال نباش.",
          "کارکنان خودراضی ممکن است به پیشرفت تیم آسیب بزنند.",
        ],
      },
      {
        id: 481,
        pronunciation: "wɒsp",
        imageUrl: "",
        word: "wasp",
        definition: "a winged insect with a slender body and a sting",
        synonyms: ["hornet", "yellow jacket", "insect"],
        examples: [
          "A wasp stung her on the arm.",
          "Wasps are more aggressive than bees.",
          "He ran when he saw the wasp nest.",
        ],
        wordPr: "زنبور (زنبور وحشی)",
        definitionPr: "حشره‌ای بال‌دار با بدنی باریک و نیش‌دار",
        synonymsPr: ["زنبور", "هُورنت", "حشره"],
        examplesPr: [
          "یک زنبور او را در بازو نیش زد.",
          "زنبورها تهاجمی‌تر از زنبور عسل هستند.",
          "وقتی لانه زنبورها را دید، فرار کرد.",
        ],
      },
      {
        id: 482,
        pronunciation: "riːhəˈbɪlɪteɪt",
        imageUrl: "",
        word: "rehabilitate",
        definition:
          "to restore someone to health or normal life through training or therapy",
        synonyms: ["restore", "reintegrate", "recover"],
        examples: [
          "The center helps rehabilitate drug addicts.",
          "He was rehabilitated after the injury.",
          "The program aims to rehabilitate former prisoners.",
        ],
        wordPr: "توان‌بخشی کردن، بازپروری کردن",
        definitionPr:
          "بازگرداندن فردی به سلامت یا زندگی عادی از طریق درمان یا آموزش",
        synonymsPr: ["بازپروری", "احیا کردن", "بازسازی"],
        examplesPr: [
          "این مرکز به معتادان برای بازپروری کمک می‌کند.",
          "او پس از مصدومیت توان‌بخشی شد.",
          "این برنامه برای بازپروری زندانیان سابق طراحی شده است.",
        ],
      },
      {
        id: 483,
        pronunciation: "pəˈrəʊl",
        imageUrl: "",
        word: "parole",
        definition:
          "the release of a prisoner before the end of their sentence, under conditions",
        synonyms: ["conditional release", "probation"],
        examples: [
          "He was released on parole.",
          "Parole allows prisoners a second chance.",
          "Violating parole terms can lead to jail time.",
        ],
        wordPr: "آزادی مشروط",
        definitionPr: "آزادی زندانی قبل از پایان دوره محکومیت، با شرایط خاص",
        synonymsPr: ["آزادی تحت نظارت", "آزادی مشروط"],
        examplesPr: [
          "او با آزادی مشروط آزاد شد.",
          "آزادی مشروط فرصتی دوباره به زندانیان می‌دهد.",
          "نقض شرایط آزادی مشروط می‌تواند منجر به بازداشت شود.",
        ],
      },
      {
        id: 484,
        pronunciation: "ˈvɜːtɪkəl",
        imageUrl: "",
        word: "vertical",
        definition: "standing or pointing straight up and down",
        synonyms: ["upright", "perpendicular", "erect"],
        examples: [
          "Draw a vertical line down the center.",
          "The wall is not perfectly vertical.",
          "Trees grow in a mostly vertical direction.",
        ],
        wordPr: "عمودی",
        definitionPr: "در جهت مستقیم از بالا به پایین",
        synonymsPr: ["ایستاده", "قائم", "عمود"],
        examplesPr: [
          "یک خط عمودی در مرکز بکش.",
          "دیوار کاملاً عمودی نیست.",
          "درختان معمولاً در جهت عمودی رشد می‌کنند.",
        ],
      },
      {
        id: 485,
        pronunciation: "ˈmʌltɪtjuːd",
        imageUrl: "",
        word: "multitude",
        definition: "a large number of people or things",
        synonyms: ["crowd", "throng", "mass"],
        examples: [
          "A multitude gathered in the square.",
          "There are a multitude of reasons to study.",
          "The multitude cheered loudly.",
        ],
        wordPr: "جمعیت زیاد، تعداد زیاد",
        definitionPr: "تعداد بسیار زیاد افراد یا چیزها",
        synonymsPr: ["انبوه", "جمعیت", "تعداد فراوان"],
        examplesPr: [
          "جمعیت زیادی در میدان جمع شده بودند.",
          "دلایل زیادی برای مطالعه وجود دارد.",
          "جمعیت با صدای بلند تشویق کردند.",
        ],
      },
      {
        id: 486,
        pronunciation: "ˈnɒmɪneɪt",
        imageUrl: "",
        word: "nominate",
        definition: "to officially suggest someone for a position or award",
        synonyms: ["propose", "appoint", "recommend"],
        examples: [
          "She was nominated for an award.",
          "They nominated him as team leader.",
          "He was nominated to the committee.",
        ],
        wordPr: "نامزد کردن، منصوب کردن",
        definitionPr: "رسمی پیشنهاد دادن کسی برای یک سمت یا جایزه",
        synonymsPr: ["پیشنهاد دادن", "منصوب کردن", "نامزد کردن"],
        examplesPr: [
          "او برای یک جایزه نامزد شد.",
          "آن‌ها او را به‌عنوان رهبر تیم معرفی کردند.",
          "او به کمیته منصوب شد.",
        ],
      },
      {
        id: 487,
        pronunciation: "pəˈtɛnʃl",
        imageUrl: "",
        word: "potential",
        definition:
          "having or showing the capacity to develop into something in the future",
        synonyms: ["possibility", "capability", "promise"],
        examples: [
          "She has great potential as a writer.",
          "This project has the potential to succeed.",
          "We saw the potential in the young athlete.",
        ],
        wordPr: "پتانسیل، استعداد بالقوه",
        definitionPr: "توانایی یا ظرفیت برای رشد در آینده",
        synonymsPr: ["استعداد", "ظرفیت", "توانایی"],
        examplesPr: [
          "او استعداد زیادی به‌عنوان نویسنده دارد.",
          "این پروژه پتانسیل موفقیت دارد.",
          "ما استعداد این ورزشکار جوان را دیدیم.",
        ],
      },
      {
        id: 488,
        pronunciation: "mɔːɡ",
        imageUrl: "",
        word: "morgue",
        definition:
          "a place where dead bodies are kept before burial or identification",
        synonyms: ["mortuary", "funeral home", "chapel of rest"],
        examples: [
          "The body was taken to the morgue.",
          "She works in a hospital morgue.",
          "The police checked the morgue records.",
        ],
        wordPr: "سردخانه (اجساد)",
        definitionPr: "جایی که اجساد تا زمان دفن یا شناسایی نگهداری می‌شوند",
        synonymsPr: ["مرده‌شوی‌خانه", "سالن نگهداری اجساد", "آرامگاه موقت"],
        examplesPr: [
          "جسد به سردخانه منتقل شد.",
          "او در سردخانه بیمارستان کار می‌کند.",
          "پلیس سوابق سردخانه را بررسی کرد.",
        ],
      },
      {
        id: 489,
        pronunciation: "priːˈɒkjʊpaɪd",
        imageUrl: "",
        word: "preoccupied",
        definition: "thinking about something a lot or too much",
        synonyms: ["distracted", "absorbed", "engrossed"],
        examples: [
          "He seemed preoccupied during the meeting.",
          "She was too preoccupied to notice.",
          "Don't drive while preoccupied.",
        ],
        wordPr: "ذهن مشغول، غرق در فکر",
        definitionPr: "درگیر فکر یا نگرانی زیاد درباره چیزی بودن",
        synonymsPr: ["غرق در فکر", "درگیر ذهنی", "بی‌توجه"],
        examplesPr: [
          "او در جلسه ذهنش مشغول به نظر می‌رسید.",
          "او آنقدر درگیر فکر بود که متوجه نشد.",
          "زمانی که ذهن مشغولی داری رانندگی نکن.",
        ],
      },
      {
        id: 490,
        pronunciation: "ʌpˈhəʊlstəri",
        imageUrl: "",
        word: "upholstery",
        definition: "the materials used to cushion and cover furniture",
        synonyms: ["furniture fabric", "covering", "padding"],
        examples: [
          "The sofa's upholstery is made of leather.",
          "We need to clean the car's upholstery.",
          "The upholstery was torn and worn.",
        ],
        wordPr: "رویه مبلمان، پارچه مبلی",
        definitionPr:
          "پارچه یا موادی که برای پوشاندن و نرم کردن مبلمان استفاده می‌شوند",
        synonymsPr: ["رویه مبلمان", "پوشش", "پارچه"],
        examplesPr: [
          "رویه مبل از چرم ساخته شده است.",
          "باید رویه ماشین را تمیز کنیم.",
          "رویه مبلمان پاره و کهنه شده بود.",
        ],
      },
      {
        id: 491,
        pronunciation: "ɪnˈdɪfrəns",
        imageUrl: "",
        word: "indifference",
        definition: "lack of interest, concern, or sympathy",
        synonyms: ["apathy", "disinterest", "detachment"],
        examples: [
          "His indifference shocked everyone.",
          "Voter indifference is a growing issue.",
          "She reacted with indifference to the news.",
        ],
        wordPr: "بی‌تفاوتی، بی‌علاقگی",
        definitionPr: "عدم علاقه یا نگرانی یا همدردی",
        synonymsPr: ["بی‌تفاوتی", "بی‌علاقگی", "بی‌احساسی"],
        examplesPr: [
          "بی‌تفاوتی او همه را شوکه کرد.",
          "بی‌تفاوتی رأی‌دهندگان یک مشکل فزاینده است.",
          "او با بی‌تفاوتی به خبر واکنش نشان داد.",
        ],
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
