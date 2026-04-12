"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/framer-animation";

export default function NotFound() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative z-0 flex justify-center items-center text-center flex-col px-5 min-h-[80vh] max-w-360 mx-auto"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[rgba(13,148,136,0.25)] blur-[100px] -z-10 pointer-events-none"></div>

      <motion.div variants={itemVariants} className="mb-4">
        <span className="text-[#2dcdab] font-bold text-9xl opacity-20">404</span>
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl text-white font-bold mt-2"
      >
        Page <span className="text-[#2dcdab]">Not Found</span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-muted-foreground max-w-md mx-auto mt-6 leading-relaxed"
      >
        Oops! It seems this lesson hasn&apos;t been prepared yet or the link has moved. 
        Let&apos;s get you back on track to excellence.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <Button 
          asChild
          className="bg-[#01625a] text-white font-bold rounded-xl py-6 px-8 hover:bg-[#2cd0bd]/90 hover:-translate-y-1 transition-all duration-300 border-2 border-[#02625b] shadow-lg shadow-[#01625a]/20"
        >
          <Link href="/">
            <Home className="mr-2 w-5 h-5" /> Back to Home
          </Link>
        </Button>

        <Button 
          variant="outline"
          onClick={() => window.history.back()}
          className="bg-[#0a2825] text-white hover:text-white font-bold rounded-xl py-6 px-8 hover:bg-[#0a2825]/80 hover:-translate-y-1 transition-all duration-300 border-2 border-[#36514f]"
        >
          <ArrowLeft className="mr-2 w-5 h-5" /> Go Back
        </Button>
      </motion.div>
    </motion.div>
  );
}