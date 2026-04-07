"use client";
import { AnimatedNumber } from "@/components/custom/animated-number";
import { containerVariants, itemVariants } from "@/lib/framer-animation";
import { motion } from "framer-motion";

const statData = [
  { label: "Success Rate", value: "95%" },
  { label: "Students", value: "5K+" },
  { label: "Expert Mentors", value: "50+" },
];

export default function AboutUsStat() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8 md:mt-20 pt-5 md:py-12 w-full max-w-5xl mx-auto"
    >
      {statData.map((stat, index) => (
        <motion.div
          variants={itemVariants}
          key={index}
          className="flex flex-col items-center"
        >
          <span className="text-2xl md:text-4xl font-bold text-white">
            <AnimatedNumber value={stat.value} />
          </span>
          <span className="text-xs md:text-base text-muted-foreground mt-2 uppercase">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
