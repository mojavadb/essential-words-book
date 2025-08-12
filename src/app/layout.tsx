import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Nav";
import Footer from "@/components/Footer";
import { LastLessonProvider } from "@/Provider/LatestLesson";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "504 absolutely essential words",
  description:
    "یادگیری کتاب 504 absolutely essential words به صورت مرحله به مرحله",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body
        cz-shortcut-listen="true"
        className={`${vazirmatn.className} antialiased text-base`}
      >
        <LastLessonProvider>
          <Header />
          {children}
          <Footer />
        </LastLessonProvider>
      </body>
    </html>
  );
}
