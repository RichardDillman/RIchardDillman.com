import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Richard Dillman",
  description: "Engineering leadership, performance, and mentorship."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"}>
        <Header />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
