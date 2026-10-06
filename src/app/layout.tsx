import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Cinzel, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Silver Stone Infra - Premium Real Estate & Luxury Plots",
  description: "Find the Right Plot. Build the Right Future. Discover carefully selected properties in prime locations across Hyderabad.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jakarta.variable} ${cormorant.variable} ${cinzel.variable} ${bodoni.variable} font-sans antialiased bg-[#0a0a0f] text-white selection:bg-[#c5a880] selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}

