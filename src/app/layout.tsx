import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeObuddy — Smart Logistics Security & IoT",
  description:
    "GPS smart padlocks, AIS-140 VLTD, ADAS cameras and AI fleet software for India's most demanding fleets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
