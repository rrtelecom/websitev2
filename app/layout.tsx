import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "./spinner.css";
import Chatbot from "./components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "R.R. Telecommunication — Telecom & Security Solutions, Mumbai",
  description:
    "Mumbai's trusted wholesale supplier and installer of EPABX systems, CCTV cameras, telephone systems, and networking equipment since 2012. NEC, Panasonic, Hikvision, CP Plus and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
