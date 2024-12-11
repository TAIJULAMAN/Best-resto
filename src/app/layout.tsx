import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "react-pagination-bar/dist/index.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Discount Me",
    template: "%s | Discount Me",
  },
  description:
    "This official website of Discount Me. We provide delicious and healthy food for you. we server at your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <nav className="sticky top-0 z-20 bg-[#FDFDFD]">
          <Navbar></Navbar>
        </nav>

        <Toaster />

        <div className="min-h-[calc(100vh-121px)] pb-24 bg-[#FDFDFD]">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
