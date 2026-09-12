import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Loader from "@/app/loader";
import {Toaster} from "sonner";
import { ErrorBoundary } from "@/components/error-boundary";
import ThemeToggleFixed from "@/components/theme-toggle-fixed";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anh Quan Tran - Software Engineer Intern",
  description: "CS student at Arizona State University. Software Engineer Intern building full-stack web apps, cloud billing systems, and LLM agents.",
  keywords: ["portfolio", "software engineer intern", "full stack", "cloud billing", "web developer"],
  authors: [{ name: "Anh Quan Tran" }],
  creator: "Anh Quan Tran",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <Providers>
            <Loader />
            {children}
            <ThemeToggleFixed />
            <Toaster position="bottom-center" />
          </Providers>
        </ErrorBoundary>
      </body>
      </html>
  );
}
