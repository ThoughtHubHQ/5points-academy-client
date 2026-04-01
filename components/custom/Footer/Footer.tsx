import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaWhatsapp,
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const footerData = {
  quickLinks: [
    { title: "About Us", href: "/about" },
    { title: "Our Teachers", href: "/teachers" },
    { title: "Success Stories", href: "/stories" },
    { title: "Notice Board", href: "/notice" },
  ],
  popularCourses: [
    { title: "SSC Crash Course", href: "/courses/ssc" },
    { title: "HSC Science Bundle", href: "/courses/hsc" },
    { title: "Medical Admission", href: "/courses/medical" },
    { title: "BCS Preparation", href: "/courses/bcs" },
  ],
  contact: {
    address: "Dhaka Uddan, Mohammadpur, Dhaka-1207",
    mapUrl: "https://maps.app.goo.gl/V794D6oxaLkjy4cT8",
    phone: "01794744343",
    whatsapp: "01794744343",
    email: "admin@5points-academy.com",
  },
  socials: [
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/5pointsAcademy",
      color: "#106aff",
    },
      {
      icon: FaFacebookMessenger,
      href: "https://m.me/5pointsAcademy",
      color: "#106bff",
    },
      {
      icon: FaWhatsapp,
      href: "https://wa.me/01794744343",
      color: "#2cd46b",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/5points-academy",
      color: "#136bc5",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@5pointsacademy",
      color: "#ff0839",
    },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0A0A0A] px-6 pt-24 pb-12 text-slate-400 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-16">
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2.5">
              <Image src="/logo/logo.png" alt="Logo" width={150} height={40} />
            </div>
            <p className="text-[14px] leading-[22.75px] text-slate-500">
              The most trusted education platform for
              <br className="hidden md:block" />
              students aiming for excellence in
              <br className="hidden md:block" />
              academic and competitive exams.
            </p>
            <div className="flex gap-4">
              {footerData.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10"
                >
                  <social.icon className="h-4.5 w-4.5" style={{ color: social.color }} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[16px] font-medium leading-6 text-white">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-4">
              {footerData.quickLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-[14px] transition-colors hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[16px] font-medium leading-6 text-white">
              Popular Courses
            </h3>
            <ul className="flex flex-col gap-4">
              {footerData.popularCourses.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-[14px] transition-colors hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-8">
            <h3 className="text-[16px] font-medium leading-6 text-white">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-3 items-start">
                <a
                  href={footerData.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-3"
                >
                  <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-cyan-500" />
                  <span className="text-[14px] leading-5">
                    {footerData.contact.address}
                  </span>
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <a
                  href={`tel:${footerData.contact.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-3"
                >
                  <Phone className="h-4.5 w-4.5 shrink-0 text-cyan-500" />
                  <span className="text-[14px] leading-5">
                    {footerData.contact.phone}
                  </span>
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <a
                  href={`https://wa.me/${footerData.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors flex items-center gap-3"
                >
                  <FaWhatsapp className="h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-[14px] leading-5">
                    {footerData.contact.whatsapp}
                  </span>
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <a
                  href={`mailto:${footerData.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-3"
                >
                  <Mail className="h-4.5 w-4.5 shrink-0 text-cyan-500" />
                  <span className="text-[14px] leading-5">
                    {footerData.contact.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-300 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} - 5points Academy | All rights reserved.
          </p>

          {/* Credit: ThoughtHub */}
          <a
            href="https://thoughthubhq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="group relative flex items-center gap-4 text-xs tracking-tight sm:text-sm cursor-pointer hover:scale-110 transition-transform duration-500 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:bg-[#e7eacd]">
              <div className="shrink-0 pr-4 border-r border-neutral-200 transition-colors duration-300">
                <Image
                  src="/logo/th-logo.png"
                  alt="ThoughtHub HQ Logo"
                  width={36}
                  height={36}
                  priority
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium leading-none mb-1">
                  Engineered by
                </span>
                <span className="flex flex-col text-lg font-bold text-[#e7eacd]">
                  <span>ThoughtHub</span>
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
