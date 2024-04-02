import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ weight: ["700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "A Tip Calculator by Jerrod Packard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
