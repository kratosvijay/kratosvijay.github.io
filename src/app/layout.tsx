import React from "react";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Dilli Vijay | Mobile App Developer & Real-Time Systems Expert",
  description: "Specializing in high-performance mobile apps, real-time booking engines, and secure payment integrations. 2+ Apps Live on Play Store.",
  keywords: ["Mobile App Developer", "Freelance Developer", "Ride Booking App", "Payment Integration", "Cashfree", "Firebase", "Real-time Systems"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}
