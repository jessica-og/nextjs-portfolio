import type { Metadata } from "next";
import {  Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ww.com"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "jd",
    "john",
    "doe",
    "Jd",
    "D",
    "JOHN",
    "John",
    "DOE",
    "Doe",
    "Jd John Doe",
    "jd john doe",
    "jd john",
    "jdjohndoe",
    "john doe",
    "John Doe",
    "Johndoe",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "JD JOHN DOE ",
    "website",
    "@Johndoe",
    "JohnDoe",
    "jphn developer",
  ],
  authors: [
    {
      name: "John Doe",
      url: "https://github.com",
    },
  ],
  creator: "John doe",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@Johndoe",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable}`}>
    <main
  className={cn(
    "flex relative break-words min-h-screen items-center justify-between pt-14 pb-4 px-40 max-md:p-4 bg-transparent max-sm:pt-20 bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px] overflow-auto mb-[50px]",
    { "bg-white": "#E6E7EB" }
  )}
>
  <Navbar />
  {children}
</main>

      </body>
    </html>
  );
}
