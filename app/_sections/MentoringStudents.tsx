"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  containerVariants,
  imageVariants,
  itemVariants,
} from "@/lib/framer-animation";

const features = [
  {
    id: 1,
    text: "Proven track record of GPA-5 & Admission success",
  },
  {
    id: 2,
    text: "Experienced faculty from top universities (BUET, DU)",
  },
  {
    id: 3,
    text: "Supportive environment for mental & academic growth",
  },
];

export default function MentoringStudents() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-10 md:mt-15 px-5 md:px-10 lg:px-16 py-8 md:py-11 border border-[#171d1c] rounded-2xl max-w-300 mx-auto"
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          variants={imageVariants}
          className="relative w-full max-w-lg mx-auto md:max-w-none"
        >
          <Image
            src="/classroom.jpg"
            alt="Mentoring Students"
            width={517}
            height={445}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <Badge className="absolute bottom-2 right-3 sm:-bottom-5 sm:-right-4 md:bottom-2 md:right-2 rounded-sm border-2 border-[#232222] bg-[#101111]/95 px-3 md:px-4 py-2 md:py-3 text-xs md:text-sm whitespace-nowrap shadow-xl z-10">
            ⭐ Top Rated Institute
          </Badge>
        </motion.div>

        <div className="relative space-y-4 md:space-y-5 z-10">
          <div className="absolute top-25 -right-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 md:w-87.5 h-62.5 md:h-87.5 rounded-full bg-[rgba(13,148,136,0.15)] blur-[70px] -z-10 pointer-events-none"></div>

          <motion.h1
            variants={itemVariants}
            className="text-white text-2xl md:text-4xl font-bold"
          >
            Mentoring Student for <br />
            <span className="text-[#2dd4bf]">Over 10 Years</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[#2dd4bf] mt-4 text-sm md:text-base leading-relaxed"
          >
            We are a premier coaching institute dedicated to transforming
            academic potential into excellence. Our mission is to provide
            personalized guidance using modern teaching methodologies.
          </motion.p>
          <motion.ul
            variants={containerVariants}
            className="mt-4 space-y-3 md:space-y-4"
          >
            {features.map((feature) => (
              <motion.li
                key={feature.id}
                variants={itemVariants}
                className="text-[#2dd4bf] flex items-start gap-3 text-sm md:text-base"
              >
                <span className="text-[#2dd4bf] rounded-full bg-[#0b322d] p-1 shrink-0 mt-0.5">
                  <CheckCheck size={14} />
                </span>
                <span>{feature.text}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={itemVariants} className="pt-2">
            <Link href="/our-teachers" className="inline-block">
              <Button
                variant="link"
                className="text-white font-bold p-0 h-auto hover:text-[#2dd4bf]"
              >
                Meet our Mentors <ArrowUpRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
