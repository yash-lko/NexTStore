
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/homepage/Header";
import Footer from "@/components/homepage/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Your One-Stop Online Store – NextStore',
  description: 'Best products online',
  icons: {
    icon: 'images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <div className="mt-18"></div>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                pointerEvents: "auto",
              },
            }}
          />
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
