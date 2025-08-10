import Link from "next/link";
import Progress from "./Progress";

function Status() {
  return (
    <section
      id="status"
      className="py-18 mx-auto w-11/12 flex flex-col justify-center items-center gap-6"
    >
      <h1 className="mb-4 text-2xl sm:text-4xl lg:text-[40px] font-bold text-stone-900">
        وضعیت شما
      </h1>

      <div className="grid md:grid-cols-2 gap-8 w-full">
        <div
          className="flex items-center justify-center bg-white p-4 rounded-lg
        hover:shadow-md hover:-translate-y-1 active:shadow-md active:-translate-y-1
      transition-all duration-300 shadow-sm border border-gray-100"
        >
          <Progress completed={0} total={42} height={25} showLabel />
        </div>

        <LessonCard number={1} />
      </div>
    </section>
  );
}

const LessonCard = ({ number }: { number: number }) => {
  return (
    <div
      className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm
      hover:shadow-md hover:-translate-y-1 active:shadow-md active:-translate-y-1
      transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <p className="mb-1 text-base font-semibold">درس {number}</p>
        <p className="mb-3 text-sm">
          <span className="text-neutral-700 font-medium">وضعیت:</span>
          <span className="text-red-500 mr-1">شروع نشده</span>
        </p>
      </div>
      <Link
        href={`/${number}`}
        className="inline-block text-center bg-sky-600 text-white text-sm px-4 py-2 rounded-lg
        hover:bg-sky-700 transition-colors duration-300"
      >
        شروع
      </Link>
    </div>
  );
};

export default Status;
