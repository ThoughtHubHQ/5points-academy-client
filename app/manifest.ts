import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "5points Academy - Your Education Partner in Bangladesh",
    short_name: "5points Academy",
    description: "The Best Coaching Center in Mohammadpur, Dhaka, Bangladesh",
    start_url: "/",
    display: "standalone",
    background_color: "#070a0a",
    theme_color: "#070a0a",
    icons: [
      {
        src: "/logo/logo-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}