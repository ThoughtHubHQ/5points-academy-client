import { Dancing_Script, Oswald, Irish_Grover, Inter } from "next/font/google";
import localFont from "next/font/local";

export const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
});

export const inter = Inter({
  subsets: ["latin"],
});

export const irishGrover = Irish_Grover({
  subsets: ["latin"],
  weight: ["400"],
});

export const roxboroughCFHeavy = localFont({
  src: "../public/font/Roxborough-CF_Regular.otf",
  display: "swap",
});
