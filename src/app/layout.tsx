import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wicked Kid Kennels — Premium Cane Corso Breeder | Show, Working & Companion Dogs",
  description: "Wicked Kid Kennels breeds world-class Cane Corsos with decades of championship titles. AKC Breeder of Merit. Puppies available nationwide.",
  keywords: "Wicked Kid Kennels, Cane Corso, Cane Corso Italiano, Italian Mastiff, AKC, Breeder, Puppies, Working Dogs, Show Dogs",
  icons: {
    icon: "/seo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
