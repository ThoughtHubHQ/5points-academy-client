"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/framer-animation";

const servicesProvided = [
  {
    id: 1,
    title: "Academic Coaching",
    description:
      "Personalized coaching for SSC, HSC, and competitive exams to build a strong academic foundation.",
    coverPhoto: "/coaching.jpg",
    url: "/services/academic-coaching",
    bgClass:
      "rounded-2xl border border-[#27272A] bg-[linear-gradient(135deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.7)_50%,rgba(124,45,18,0.4)_100%)]",
  },
  {
    id: 2,
    title: "Admission Coaching",
    description:
      "Medical, Engineering (BUET), and University (DU, CU, JnU) preparation with intensive care",
    coverPhoto: "/coaching.jpg",
    url: "/services/admission-coaching",
    bgClass:
      "rounded-2xl border border-[#27272A] bg-[linear-gradient(135deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.7)_50%,rgba(19,78,74,0.4)_100%)]",
  },
  {
    id: 3,
    title: "Job Preparation",
    description:
      "BCS, Bank Job, and other Gov. job recruitment exams comprehensive courses with expert mentors.",
    coverPhoto: "/coaching.jpg",
    url: "/services/job-preparation",
    bgClass:
      "rounded-2xl border border-[#27272A] bg-[linear-gradient(135deg,rgba(10,10,10,0.9)_0%,rgba(10,10,10,0.7)_50%,rgba(124,45,18,0.4)_100%)]",
  },
];

export default function ServicesProvided() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:mt-10"
    >
      {servicesProvided.map((service) => (
        <motion.div 
          key={service.id} 
          variants={itemVariants}
          className="h-full"
        >
          <Card className={`bg-[#0a2825] p-5 h-full flex flex-col ${service.bgClass}`}>
            <div className="rounded-xl border-2 border-[#27272a]">
              <Image
                src={service.coverPhoto}
                alt={service.title}
                width={400}
                height={200}
                className="object-cover rounded-xl w-full"
              />
            </div>
            <CardContent className="space-y-3 h-25 p-0 mt-5 grow">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="text-[#a1a1aa]">{service.description}</p>
            </CardContent>
            <CardFooter className="p-0 mt-4">
              <Link href={service.url}>
                <Button variant="link" className="text-white p-0 h-auto">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}