import React from "react";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

function Logo({ className }: { className: string }) {
  return (
    <div className={`${kanit.className} text-3xl font-black ${className}`}>
      <span className="text-indigo-500">5</span>
      <span className="text-sky-500 mx-1">0</span>
      <span className="text-blue-500">4</span>
    </div>
  );
}

export default Logo;
