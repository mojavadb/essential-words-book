export function GET(request: Request) {
  const paragraphs = {
    paragraph_one: [
      {
        id: 1,
        sentense: "This is a self-help book.",
        translate: "این کتاب، کتابی خودیار است.",
      },
      {
        id: 2,
        sentense:
          "If you use it intelligently, you will help yourself to strengthen and expand your word knowledge.",
        translate:
          "اگر از آن هوشمندانه استفاده کنید، به خودتان کمک خواهید کرد تا دانش واژگان خود را تقویت و گسترش دهید.",
      },
      {
        id: 3,
        sentense:
          "The words you will learn, moreover, are essential in that they are known and used regularly by educated people.",
        translate:
          "به علاوه، کلماتی که یاد خواهید گرفت از این جهت ضروری هستند که افراد تحصیل‌کرده آنها را می‌شناسند و مرتباً استفاده می‌کنند.",
      },
      {
        id: 4,
        sentense:
          " You will find that such words as squander, rehabilitate, blunder, obesity, and five hundred more will turn up in your newspapers, in the magazines you read, in books, on television, in the movies, and in the conversation of the people you meet daily.",
        translate:
          "متوجه خواهید شد که کلماتی مانند ولخرجی، توانبخشی، اشتباه، چاقی و پانصد مورد دیگر در روزنامه‌ها، مجلاتی که می‌خوانید، کتاب‌ها، تلویزیون، فیلم‌ها و مکالمات افرادی که روزانه ملاقات می‌کنید، ظاهر می‌شوند.",
      },
    ],
    paragraph_two: [
      {
        id: 1,
        sentense:
          "504 Absolutely Essential Words is divided into 42 lessons, each containing 12 new words.",
        translate:
          "این کتاب به 42 درس تقسیم می شود، هر کدام از این درس ها شامل 12 کلمه جدید هستند.",
      },
      {
        id: 2,
        sentense:
          "Those words are first presented to you in three sample sentences;",
        translate:
          "این کلمات ابتدا در دو یا سه کلمه نمونه به شما ارائه می‌شوند؛",
      },
      {
        id: 3,
        sentense: "next, the new words appear in a brief passage;",
        translate: "سپس، کلمات جدید در یک متن کوتاه ظاهر می‌شوند؛",
      },
      {
        id: 4,
        sentense:
          "the last part of each lesson is a set of exercises that give you practice using the new words.",
        translate:
          "بخش آخر هر درس مجموعه‌ای از تمرین‌ها است که به شما امکان می‌دهد با کلمات جدید تمرین کنید.",
      },
      {
        id: 5,
        sentense:
          "One of the most important features of 504 ... Words is that each of the new words is repeated over and over again throughout this book so that you will have a greater chance to become familiar with it.",
        translate:
          "یکی از مهم ترین قابلیت های این کتاب این است که هر یک از کلمات جدید بارها و بارها در سراسر این کتاب تکرار می شوند تا شما شانس بیشتری برای آشنا شدن با آن داشته باشید.",
      },
    ],
    paragraph_three: [
      {
        id: 1,
        sentense:
          "Included are seven Word Review sections, each containing challenging exercises that will help you to test your mastery of the new words.",
        translate:
          "این کتاب شامل هفت بخش مرور کلمات است که هر کدام شامل تمرین‌های چالش‌برانگیزی است که به شما کمک می‌کند تا تسلط خود را بر کلمات جدید بسنجید.",
      },
    ],
    paragraph_four: [
      {
        id: 1,
        sentense:
          "Newly added are interesting exercises in letter writing and parts of speech that will familiarize you with our basic 504 essential words.",
        translate:
          "به تازگی تمرین‌های جالبی در نوشتن نامه و اجزای کلام اضافه شده است که شما را با 504 کلمه اساسی ما آشنا می‌کند.",
      },
      {
        id: 2,
        sentense:
          "Finally, this 6th edition features frequently misspelled words, a Bonus Review, a Bonus Lesson with 125 More Difficult (But Essential) Words, and a new section called Panorama of Words.",
        translate:
          "در نهایت، این ویرایش ششم شامل کلماتی است که اغلب اشتباه املایی دارند، یک مرور اضافی، یک درس اضافی با ۱۲۵ کلمه دشوارتر (اما ضروری) و یک بخش جدید به نام پانورامای کلمات.",
      },
    ],
  };

  return new Response(JSON.stringify(paragraphs), {
    headers: { "Content-Type": "application/json" },
  });
}
