import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lenny | Personal Portfolio",
  //SEO 社交媒体分享
  description: "Lenny is a full-stack developer with 3 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 relative pt-28 sm:pt-36`}
      >
        {/* rem 是一种相对单位，代表“根元素 HTML 标签的字体大小 fz = 16px” */}
        {/* blur高斯模糊 */}
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] right-[35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <div></div>
        <ActiveSectionContextProvider>
          {/* server component can be pass through the client component */}
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
