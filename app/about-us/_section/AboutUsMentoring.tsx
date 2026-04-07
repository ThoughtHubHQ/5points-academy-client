import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    id: 1,
    text: "Expert instruction from BUET, DU, and DMC graduates.",
  },
  {
    id: 2,
    text: "Result-oriented teaching method customized for every student.",
  },
  {
    id: 3,
    text: "Supportive environment for continuous academic growth.",
  },
  {
    id: 4,
    text: "Supportive environment for continuous academic growth.",
  },
];

export default function AboutUsMentoring() {
  return (
    <div className="mt-10 md:mt-15 px-5 md:px-10 lg:px-16 py-8 md:py-11 max-w-300 mx-auto">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full max-w-lg mx-auto md:max-w-none">
          <Image
            src="/classroom.jpg"
            alt="Mentoring Students"
            width={517}
            height={445}
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />

          {/* Bottom Caption */}
          <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-[rgba(0,0,0,0.6)] border border-[rgba(0,220,180,0.2)] p-4 flex flex-col shadow-lg">
            <h1 className="text-[#00dcb4] text-lg font-bold">Since 2012</h1>
            <p className="text-white text-sm">
              Providing excellence in education
            </p>
          </div>
        </div>

        <div className="relative space-y-4 md:space-y-5 z-10">
          <div className="absolute top-25 -right-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 md:w-87.5 h-62.5 md:h-87.5 rounded-full bg-[rgba(13,148,136,0.15)] blur-[70px] -z-10 pointer-events-none"></div>

          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Mentoring Student for <br />
            <span className="text-[#2dd4bf]">Over 10 Years</span>
          </h1>
          <p className="text-[#2dd4bf] mt-4 text-sm md:text-base leading-relaxed">
            We are a trusted learning institute dedicated to academic
            excellence. Our mission is to provide a comprehensive platform where
            learning is engaging, effective, and successful for every student
          </p>
          <ul className="mt-4 space-y-3 md:space-y-4">
            {features.map((feature) => (
              <li
                className="text-[#2dd4bf] flex items-start gap-3 text-sm md:text-base"
                key={feature.id}
              >
                <span className="text-[#2dd4bf] shrink-0 mt-0.5">
                  <CircleCheckBig size={20} />
                </span>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
