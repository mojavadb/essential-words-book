import Link from "next/link";
import Progress from "./Progress";

function Status() {
  return (
    <section
      id="status"
      className="py-18 mx-auto text-center w-11/12 flex flex-col justify-center items-center gap-4"
    >
      <h1 className="flex justify-center items-center text-2xl sm:text-4xl lg:text-[40px] text-stone-900">
        وضعیت شما
      </h1>

      <h3 className="flex justify-center items-center mb-8 text-md md:text-lg text-stone-900">
        تا کجا پیش رفته اید؟
      </h3>

      <div
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full gap-4
        gap-8 overflow-hidden transition-all duration-300"
      >
        <LessonCard number={1} />{" "}
        {/* 1 === local storage memory that saves current status */}
      </div>

      <div className="p-8 max-w-xl mx-auto">
        <Progress completed={37} total={120} />

        <div className="mt-6">
          <Progress completed={75} total={100} height={36} className="w-5" />
        </div>
      </div>
    </section>
  );
}

const LessonCard = ({ number }: { number: number }) => {
  return (
    <div
      className="p-4 rounded-md border-b-3 border-stone-200 bg-white
      cursor-pointer hover:shadow-sm hover:-translate-y-1
      active:shadow-sm active:-translate-y-1 transition-all duration-300"
    >
      <p className="mb-1 text-sm">درس {number}</p>
      <p className="mb-2 text-xs">
        <span className="text-neutral-700">وضعیت:</span>
        <span className="text-red-500 mr-1"> شروع نشده</span>
      </p>
      <Link
        href={`/${number}`}
        className="text-sky-600 text-xs hover:text-sky-600"
      >
        شروع
      </Link>
    </div>
  );
};

export default Status;
