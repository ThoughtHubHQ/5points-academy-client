"use client";

import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CirclePlay } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { backImageVariants, frontImageVariants, textContainerVariants, textItemVariants } from "@/lib/framer-animation";

export default function CTA() {
  return (
    <div className="mt-20 border border-[#1e2939] rounded-[2rem] p-10 md:p-13 flex flex-col lg:flex-row items-center justify-between lg:gap-10">
      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full lg:w-1/2 flex flex-col items-start"
      >
        <motion.h1
          variants={textItemVariants}
          className="text-white text-4xl md:text-5xl font-bold leading-[1.1]"
        >
          Start Your Learning <br />
          <span className="bg-linear-to-r from-[#ff473e] to-[#ff7d1f] text-transparent bg-clip-text">
            Journey Today
          </span>
        </motion.h1>

        <motion.p
          variants={textItemVariants}
          className="text-[#7c8b9d] mt-5 text-base md:text-lg max-w-105 leading-relaxed"
        >
          Don&apos;t wait for the exams to get closer. Build your foundation now
          with the best mentors in the country.
        </motion.p>

        <motion.div variants={textItemVariants}>
          <Button className="mt-8 bg-transparent text-white font-medium rounded-2xl py-6 px-7 text-sm md:text-base hover:bg-white/5 transition-all duration-300 border border-[#2a323d] shadow-sm">
            <CirclePlay className="mr-2 w-5 h-5 opacity-80" /> Enroll Now
          </Button>
        </motion.div>

        <motion.div
          variants={textItemVariants}
          className="flex items-center gap-3 mt-8"
        >
          <AvatarGroup className="-space-x-3">
            <Avatar className="w-8 h-8 border-2 border-[#0b1015]">
              <AvatarFallback className="bg-[#2a3644] text-transparent"></AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-[#0b1015]">
              <AvatarFallback className="bg-[#2a3644] text-transparent"></AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-[#0b1015]">
              <AvatarFallback className="bg-[#2a3644] text-transparent"></AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-[#0b1015]">
              <AvatarFallback className="bg-[#2a3644] text-transparent"></AvatarFallback>
            </Avatar>
          </AvatarGroup>
          <div className="text-[#4b586b] font-medium">
            Trusted by 10K+ Students & Guardians
          </div>
        </motion.div>
      </motion.div>

      <div className="relative w-full lg:w-1/2 flex justify-center items-center min-h-87.5 md:min-h-100 mt-10 lg:mt-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={backImageVariants}
          className="absolute z-0 flex justify-center items-center w-full"
        >
          <Image
            src="/ctaimg2.jpg"
            alt="CTA Image Background"
            width={450}
            height={300}
            className="absolute w-[85%] max-w-95 rounded-2xl border-4 border-[#1c222b] rotate-6 translate-y-12 translate-x-8 blur-[6px] opacity-45 z-0 object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={frontImageVariants}
          className="relative z-10 flex justify-center items-center w-full"
        >
          <Image
            src="/ctaimg.jpg"
            alt="CTA Image Foreground"
            width={450}
            height={300}
            className="relative w-[85%] max-w-95 rounded-2xl border-[6px] border-[#151b23] -rotate-[5deg] z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
