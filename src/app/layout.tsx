import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Loader from "@/app/loader";
import {Toaster} from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Created By NextJS, showcasing my Skill and Experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <Providers>
        <Loader />
        {children}
        <Toaster />
      </Providers>
      </body>
      </html>
  );
}
