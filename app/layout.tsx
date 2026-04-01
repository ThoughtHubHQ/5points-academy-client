import "./globals.css";
import type { Metadata } from "next";
import { inter } from "@/lib/font";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/custom/Header/Header";
import Footer from "@/components/custom/Footer/Footer";

export const metadata: Metadata = {
  title: "5points Academy - Your Education Partner in Bangladesh",
  description: "The Best Coaching Center in Mohammadpur, Dhaka, Bangladesh",
  manifest: "/manifest.json",
  openGraph: {
    title: "5points Academy - Your Education Partner in Bangladesh",
    description: "The Best Coaching Center in Mohammadpur, Dhaka, Bangladesh",
    type: "website",
    url: "https://5points-academy.com",
    siteName: "5points Academy",
    images: [
      {
        url: "/sociamediapreview.jpg",
        width: 1200,
        height: 630,
        alt: "5points Academy – The Best Coaching Center in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5points Academy - Your Education Partner in Bangladesh",
    description: "The Best Coaching Center in Mohammadpur, Dhaka, Bangladesh",
    images: ["/sociamediapreview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="font-sans antialiased">
        <Toaster position="bottom-right" swipeDirections={["right"]} />
        <main className="grow bg-[#070a0a]">
          <TooltipProvider>
            <Header />
            {children}
            <Footer/>
          </TooltipProvider>
        </main>
      </body>
    </html>
  );
}
