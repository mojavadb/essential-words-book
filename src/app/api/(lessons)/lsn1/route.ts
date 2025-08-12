export const revalidate = 60;

export function GET(request: Request) {
  const data = {
    words: [
      {
        id: 1,
        pronunciation: "əˈbandən",
        imageUrl: "",

        word: "abandon",
        definition: "leave without planning to come back",
        synonyms: ["desert", "quit"],
        examples: [
          "When Roy abandoned his family, the police went looking for him.",
          "The soldier could not abandon his friends who were hurt in battle.",
          "Because Rose was poor, she had to abandon her idea of going to college.",
        ],

        wordPr: "رها کردن",
        definitionPr: "رفتن بدون برنامه ریزی برای بازگشت",
        synonymsPr: ["ول کردن", "ترک کردن"],
        examplesPr: [
          "وقتی روی خانواده اش را رها کرد، پلیس به جست و جوی او رفت.",
          "سرباز نمی توانست دوستانش را که در نبرد زخمی شده بودند، ول کند.",
          "چون رز فقیر بود، مجبور شد ایده رفتن به دانشگاه را رها کند.",
        ],
      },
      {
        id: 2,
        pronunciation: "kēn",
        imageUrl: "",

        word: "keen",
        definition: "having a sharp edge or point; intellectually sharp;",
        synonyms: ["eager", "sensitive"],
        examples: [
          "The butcher's keen knife cut through the meat",
          "My dog has a keen sense of smell.",
          "Bill's keen mind pleased all his teachers",
        ],

        wordPr: "تیز، باهوش",
        definitionPr: "دارای یک لبه یا نوک تیز، از نظر فکری تیز بین",
        synonymsPr: ["تیز", "حساس"],
        examplesPr: [
          "چاقوی تیز قصاب از میان گوشت عبور کرد.",
          "سگ من حس بویایی قوی (تیز) دارد.",
          "ذهن تیز بیل همه معلمانش را خوشحال کرد.",
        ],
      },
      {
        id: 3,
        pronunciation: "ˈjeləs",
        imageUrl: "",

        word: "jealous",
        definition: "wanting what someone else has",
        synonyms: ["envious", "covetous"],
        examples: [
          "A detective was hired by the jealous widow to find the boyfriend who had abandoned her.",
          "Although my neighbor just bought a new car, I am not jealous of him.",
          "Being jealous, Mona would not let her boyfriend dance with any of the cheerleaders.",
        ],

        wordPr: "حسود",
        definitionPr: "خواستن چیزی که دیگری آنرا دارد",
        synonymsPr: ["حسود", "غبطه‌خور"],
        examplesPr: [
          "یک کارآگاه توسط زن بیوه حسود اجیر شد تا دوست پسری را پیدا کند که او را رها کرده بود.",
          "اگرچه همسایه من به تازگی یک ماشین جدید خریده است، من به او حسادت نمی‌کنم.",
          "مونا به خاطر حسادت، به دوست پسرش اجازه نداد با هیچ یک از تشویق‌کنندگان برقصید.",
        ],
      },
      {
        id: 4,
        pronunciation: "tact",
        imageUrl: "",

        word: "tact",
        definition: "ability to do or say the right thing",
        synonyms: ["skill", "-"],
        examples: [
          "My aunt never hurts anyone's feelings because she always uses tact.",
          "By the use of tact, Janet was able to calm her jealous husband.",
          "Your friends will admire you if you use tact and thoughtfulness.",
        ],

        wordPr: "تدبیر و درایت",
        definitionPr: "توانایی گفتن یا انجام دادن کار درست",
        synonymsPr: ["مهارت", "-"],
        examplesPr: [
          "عمه من هرگز احساسات کسی را جریحه‌دار نمی‌کند زیرا همیشه از تدبیر و درایت استفاده می‌کند.",
          "با استفاده از تدبیر و درایت، جانت توانست شوهر حسودش را آرام کند.",
          "دوستانت به تو احترام خواهند گذاشت اگر از تدبیر و درایت استفاده کنی.",
        ],
      },
      {
        id: 5,
        pronunciation: "ōTH",
        imageUrl: "",

        word: "oath",
        definition: "a promise that something is true",
        synonyms: ["pledge", "a curse"],
        examples: [
          "The president will take the oath of office tomorrow.",
          "In court, the witness took an oath that he would tell the whole truth.",
          "When Terry discovered that he had been abandoned, he let out an angry oath.",
        ],

        wordPr: "قسم، سوگند",
        definitionPr: "وعده ای صحیح و درست",
        synonymsPr: ["تعهد", "نفرین"],
        examplesPr: [
          "رئیس‌جمهور فردا سوگند یاد خواهد کرد.",
          "در دادگاه، شاهد سوگند یاد کرد که تمام حقیقت را بگوید.",
          "وقتی تری متوجه شد که او را رها کرده‌اند، یک نفرین خشمگین از خود بیرون داد.",
        ],
      },
      {
        id: 6,
        pronunciation: "ˈvākənt",
        imageUrl: "",

        word: "vacant",
        definition: "not occupied",
        synonyms: ["empty", "not filled"],
        examples: [
          "Someone is planning to build a house on that vacant lot.",
          "I put my coat on that vacant seat.",
          "When the landlord broke in, he found that apartment vacant.",
        ],

        wordPr: "خالی، خلا",
        definitionPr: "اشغال نشده",
        synonymsPr: ["خالی", "پر نشده"],
        examplesPr: [
          "کسی در حال برنامه‌ریزی برای ساخت یک خانه در آن زمین خالی است.",
          "من کت خود را روی آن صندلی خالی گذاشتم.",
          "وقتی صاحب‌خانه وارد شد، متوجه شد که آن آپارتمان خالی است.",
        ],
      },
      {
        id: 7,
        pronunciation: "ˈhärdˌSHip",
        imageUrl: "",

        word: "hardship",
        definition: "something that is hard to bear",
        synonyms: ["difficult", "hardness"],
        examples: [
          "The fighter had to face many hardships before he became champion.",
          "Abe Lincoln was able to overcome one hardship after another.",
          "On account of hardship, Bert was let out of the army to take care of his sick mother.",
        ],

        wordPr: "سختی و مشقت",
        definitionPr: "چیزی که تحملش سخت و دشوار است",
        synonymsPr: ["دشوار", "سختی"],
        examplesPr: [
          "مبارز قبل از این که قهرمان شود باید با سختی های زیادی روبرو شود.",
          "آبراهام لینکلن توانست بر سختی ها یکی بعد از دیگری غلبه کند.",
          "به خاطر سختی، برت از ارتش مرخص شد تا از مادر بیمار خود مراقبت کند.",
        ],
      },
      {
        id: 8,
        pronunciation: "ˈɡælənt",
        imageUrl: "",

        word: "gallant",
        definition: "showing respect for women",
        synonyms: ["brave", "courageous"],
        examples: [
          "The pilot made a gallant attempt to save the passengers.",
          "Many gallant knights entered the tournament.",
          "He was gallant in his efforts to help the injured woman.",
        ],

        wordPr: "دلیر، مودب نسبت به خانم‌ها",
        definitionPr: "شجاع؛ با احترام نسبت به زنان",
        synonymsPr: ["دلیر", "شجاع"],
        examplesPr: [
          "خلبان تلاش دلیرانه‌ای برای نجات مسافران کرد.",
          "شوالیه‌های دلیر زیادی در مسابقه شرکت کردند.",
          "او در تلاش‌هایش برای کمک به زن مجروح، دلیر بود.",
        ],
      },
      {
        id: 9,
        pronunciation: "ˈdeɪtə",
        imageUrl: "",
        word: "data",
        definition: "facts; information",
        synonyms: ["datum", "facts"],
        examples: [
          "The data from the experiment was analyzed carefully.",
          "We need more data before making a decision.",
          "All the data is stored on the computer.",
        ],
        wordPr: "داده‌ها، اطلاعات",
        definitionPr: "حقایق؛ اطلاعات",
        synonymsPr: ["داده", "حقایق"],
        examplesPr: [
          "داده‌های آزمایش با دقت تحلیل شد.",
          "قبل از تصمیم‌گیری به داده‌های بیشتری نیاز داریم.",
          "تمام داده‌ها در رایانه ذخیره شده است.",
        ],
      },
      {
        id: 10,
        pronunciation: "ˌənəˈkəstəmd",
        imageUrl: "",
        word: "unaccustomed",
        definition: "not used to something",
        synonyms: ["unfamiliar", "unused"],
        examples: [
          "He was unaccustomed to such hard work.",
          "She is unaccustomed to living alone.",
          "The students were unaccustomed to the strict rules.",
        ],
        wordPr: "غیر عادی",
        definitionPr: "به چیزی عادت نداشته",
        synonymsPr: ["ناآشنا", "عادت نکرده"],
        examplesPr: [
          "او به چنین کار سختی عادت نداشت.",
          "او به تنها زندگی کردن عادت ندارد.",
          "دانش‌آموزان به قوانین سخت عادت نداشتند.",
        ],
      },
      {
        id: 11,
        pronunciation: "ˈbætʃələr",
        imageUrl: "",
        word: "bachelor",
        definition: "a man who has not married",
        synonyms: ["single man", "unmarried man"],
        examples: [
          "My brother took an oath to remain a bachelor.",
          "He remained a bachelor all his life.",
          "The bachelor invited his friends to his apartment.",
        ],
        wordPr: "مرد مجرد، لیسانسه",
        definitionPr: "مردی که ازدواج نکرده است",
        synonymsPr: ["مرد مجرد", "مرد غیرمتأهل"],
        examplesPr: [
          "برادرم سوگند یاد کرد که همیشه مجرد بماند.",
          "او تمام عمرش مجرد ماند.",
          "مرد مجرد دوستانش را به آپارتمانش دعوت کرد.",
        ],
      },
      {
        id: 12,
        pronunciation: "ˈkwɒlɪfaɪ",
        imageUrl: "",
        word: "qualify",
        definition: "be or become fit; show that you are able",
        synonyms: ["be eligible", "be competent"],
        examples: [
          "I am trying to qualify for the job that is now vacant.",
          "He qualified as a doctor last year.",
          "You have to pass the test to qualify.",
        ],
        wordPr: "واجد شرایط بودن",
        definitionPr: "نمایش توانایی ها برای شایسته بودن",
        synonymsPr: ["واجد شرایط شدن", "صلاحیت داشتن"],
        examplesPr: [
          "من در تلاش هستم که برای شغل خالی مورد نظر واجد شرایط شوم.",
          "او سال گذشته به عنوان پزشک واجد شرایط شد.",
          "برای واجد شرایط شدن باید آزمون را قبول شوی.",
        ],
      },
    ],
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
