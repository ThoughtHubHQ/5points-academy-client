"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Teachers", href: "/teachers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
      <div className="mx-auto px-6 md:px-12 lg:px-20 2xl:px-24 py-5.5 sticky top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#070a0a]/75">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative z-10">
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
              className="w-auto h-auto rounded-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav>
              <ul className="flex space-x-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`relative font-medium transition-colors duration-300 py-1 
                        ${isActive ? "text-white" : "text-[#94a3b8] hover:text-white"}
                        after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:transition-transform after:duration-300 after:ease-in-out after:bg-[#139889]
                        ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
                      `}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex space-x-4">
            <Button
              variant="ghost"
              asChild
              className="text-[#94a3b8] hover:text-white font-medium transition-colors duration-300 bg-transparent border-none hover:bg-transparent"
            >
              <Link href="/register">Login</Link>
            </Button>
            <Button
              asChild
              className="text-white bg-[#0A2422] hover:bg-[#139889] font-medium transition-colors duration-300 px-4 shadow-[0_10px_15px_-3px_rgba(255,255,255,0.05),0_4px_6px_-4px_rgba(255,255,255,0.05)]"
            >
              <Link href="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Navigation (Sheet) */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#94a3b8] hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Menu className="h-10 w-10"/>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[85vw] max-w-[320px] bg-[#060e0d]/95 backdrop-blur-xl border-l border-white/5 px-6 py-15 flex flex-col shadow-[-20px_0_40px_-10px_rgba(255,255,255,0.05)] [&>button]:text-[#94a3b8] hover:[&>button]:text-white [&>button]:transition-colors"
              >
                {/* Minimal Mobile Links */}
                <nav className="flex flex-col gap-3 flex-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center text-base font-medium transition-all duration-300 rounded-lg
                        ${
                          isActive
                            ? "text-white border border-[#139889]/50 bg-[#139889]/10 px-4 py-3 shadow-[inset_0_0_20px_rgba(19,152,137,0.05)]"
                            : "text-[#94a3b8] hover:text-white hover:translate-x-1 py-3 px-2"
                        }
                      `}
                      >
                        {/* Show the dot only if active */}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#139889] mr-3 shadow-[0_0_8px_rgba(19,152,137,0.8)]" />
                        )}
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>

                {/* Sleek Mobile Footer Actions */}
                <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/5">
                  <Button
                    variant="ghost"
                    asChild
                    onClick={() => setIsOpen(false)}
                    className="w-full text-[#94a3b8] hover:text-white hover:bg-white/5 font-medium transition-colors duration-300 h-11 text-sm rounded-lg"
                  >
                    <Link href="/register">Login</Link>
                  </Button>
                  <Button
                    asChild
                    onClick={() => setIsOpen(false)}
                    className="w-full text-white bg-[#0A2422] hover:bg-[#139889] font-medium transition-colors duration-300 h-11 text-sm rounded-lg shadow-[0_10px_15px_-3px_rgba(255,255,255,0.05)]"
                  >
                    <Link href="/register">Register</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
  );
}
