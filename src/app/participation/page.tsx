import React, { FC } from "react";
import Link from "next/link";

interface SectionProps {
  title: string;
  content: string;
}

interface ListSectionProps {
  title: string;
  items: string[];
}

interface InfoItemProps {
  icon: string;
  label: string;
  href: string;
}

const Participation: FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-600 leading-snug">
        دعوت به همکاری در پروژه‌ی یادگیری زبان انگلیسی
      </h1>

      <p className="mb-6 text-gray-700 text-base sm:text-lg leading-relaxed text-center">
        اگر به{" "}
        <span className="font-semibold">توسعه‌ی نرم‌افزارهای تحت وب</span> یا{" "}
        <span className="font-semibold">آموزش زبان انگلیسی</span> علاقه‌مند
        هستید، خوشحال می‌شوم در توسعه‌ی این پروژه با من همراه شوید!
      </p>

      <Section
        title="درباره‌ی پروژه:"
        content="این برنامه با هدف ساده‌سازی و تسریع یادگیری زبان انگلیسی طراحی شده و می‌کوشد با استفاده از ابزارهای هوشمند و کاربرپسند، تجربه‌ی آموزشی بهتری را برای زبان‌آموزان فراهم کند."
      />

      <ListSection
        title="به چه کسانی نیاز داریم؟"
        items={[
          "توسعه‌دهندگان وب (فرانت‌اند، بک‌اند یا فول‌استک)",
          "طراحان UI/UX",
          "مدرسین و متخصصین زبان انگلیسی",
          "تست‌کنندگان (QA) و علاقه‌مندان به بهبود تجربه کاربری",
        ]}
      />

      <ListSection
        title="چرا همکاری کنید؟"
        items={[
          "مشارکت در یک پروژه‌ی متن‌باز (Open Source) و رایگان برای عموم",
          "امکان توسعه‌ی مهارت‌های فنی و آموزشی در یک پروژه‌ی واقعی",
          "تأثیر مستقیم بر یادگیری هزاران زبان‌آموز",
        ]}
      />

      <ListSection
        title="نحوه‌ی مشارکت:"
        items={[
          "برنامه‌نویسان: همکاری در توسعه‌ی کد، رفع باگ یا افزودن ویژگی‌های جدید",
          "مدرسین و متخصصین زبان: ارائه نظرات برای بهبود محتوا و روش‌های آموزشی",
          "طراحان: کمک در بهبود رابط کاربری و تجربه‌ی تعاملی برنامه",
        ]}
      />

      {/* بخش جدید معرفی تکنولوژی‌ها */}
      <Section
        title="تکنولوژی‌های استفاده‌شده:"
        content="این پروژه با استفاده از تکنولوژی‌های زیر توسعه داده شده است: Next.js (مبتنی بر Node.js و React.js)، Tailwind CSS، TypeScript، SWR، Context API و Local Storage. بخش بک‌اند پروژه هنوز در حال توسعه و بهبود است."
      />

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-500">
          اطلاعات پروژه:
        </h2>
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
          <InfoItem
            icon="🔗"
            label="مخزن گیت‌هاب:"
            href="https://github.com/mojavadb/essential-words-book"
          />
          <InfoItem
            icon="📧"
            label="ارتباط با من:"
            href="mailto:m.j.babaee98@gmail.com"
          />
        </div>
      </div>

      <div className="bg-blue-50 p-5 rounded-xl text-center shadow-sm">
        <p className="text-lg sm:text-xl font-semibold text-blue-700 leading-relaxed">
          بیایید با هم نرم‌افزاری بسازیم که یادگیری زبان انگلیسی را{" "}
          <span className="text-blue-600">لذت‌بخش، سریع و مؤثر</span> کند! 🚀
        </p>
      </div>

      <p className="mt-6 text-xs sm:text-sm text-gray-500 text-center">
        این پروژه به‌صورت کاملاً رایگان و برای عموم منتشر خواهد شد.
      </p>
    </div>
  );
};

const Section: FC<SectionProps> = ({ title, content }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-3 text-blue-500">{title}</h2>
    <p className="text-gray-700 leading-relaxed">{content}</p>
  </div>
);

const ListSection: FC<ListSectionProps> = ({ title, items }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-3 text-blue-500">{title}</h2>
    <ul className="list-disc pr-5 space-y-2 text-gray-700 leading-relaxed">
      {items.map((item, idx) => (
        <li key={idx}>
          <span className="font-medium">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const InfoItem: FC<InfoItemProps> = ({ icon, label, href }) => (
  <div>
    <div className="flex items-center gap-2">
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 mr-4 my-2 hover:underline hover:text-blue-700 transition-colors duration-200 text-sm truncate"
    >
      {href}
    </Link>
  </div>
);

export default Participation;
