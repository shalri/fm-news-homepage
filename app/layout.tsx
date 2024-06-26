import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | FScode Shalri",
  description: "Solution for a Frontend Mentor News Homepage Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto flex min-h-screen max-w-[1166px] flex-col bg-nh-off-white sm:px-3`}
      >
        {children}
      </body>
    </html>
  );
}
