import type { Metadata } from "next";
import "../globals.scss";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Script from "next/script";
import HomePageBackground from "@/components/HomePageBackground";

const cnB = localFont({
  src: "../../public/fonts/OPPOSans-B.ttf",
  variable: "--font-cn-B",
});
const cnH = localFont({
  src: "../../public/fonts/OPPOSans-H.ttf",
  variable: "--font-cn-H",
});
const cnL = localFont({
  src: "../../public/fonts/OPPOSans-L.ttf",
  variable: "--font-cn-L",
});
const cnM = localFont({
  src: "../../public/fonts/OPPOSans-M.ttf",
  variable: "--font-cn-M",
});
const cnR = localFont({
  src: "../../public/fonts/OPPOSans-R.ttf",
  variable: "--font-cn-R",
});

export const metadata: Metadata = {
  title: "Distance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hans"
      className={cn(
        `${cnB.variable} ${cnH.variable} ${cnL.variable} ${cnM.variable} ${cnR.variable}`,
        "w-full"
      )}
      suppressHydrationWarning
    >
      <head></head>

      <body className="w-full relative ">
        <div id="home-page-container">
          <HomePageBackground />
          {children}
        </div>
      </body>
    </html>
  );
}
