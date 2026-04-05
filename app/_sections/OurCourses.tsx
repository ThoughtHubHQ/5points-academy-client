import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const gradeCard = [
  {
    id: 1,
    label: "Class 06",
    icon: "৬",
    coverImg: "/classimg.jpg",
    cta: "All Subjects",
    bgClass: "bg-[#453454]/50",
    iconBgClass: "bg-[#453454]/80",
  },
  {
    id: 2,
    label: "Class 07",
    icon: "৭",
    coverImg: "/classimg.jpg",
    cta: "All Subjects",
    bgClass: "bg-[#523142]/50",
    iconBgClass: "bg-[#523142]/80",
  },
  {
    id: 3,
    label: "Class 08",
    icon: "৮",
    coverImg: "/classimg.jpg",
    cta: "JSC Prep",
    bgClass: "bg-[#553a27]/50",
    iconBgClass: "bg-[#553a27]/80",
  },
  {
    id: 4,
    label: "Class 09",
    icon: "৯",
    coverImg: "/classimg.jpg",
    cta: "Sci / Com / Arts",
    bgClass: "bg-[#274844]/50",
    iconBgClass: "bg-[#274844]/80",
  },
  {
    id: 5,
    label: "Class 10",
    icon: "১০",
    coverImg: "/classimg.jpg",
    cta: "Pre Test Prep",
    bgClass: "bg-[#24474d]/50",
    iconBgClass: "bg-[#24474d]/80",
  },
];

export default function OurCourses() {
  return (
    <div className="mt-10 lg:mt-20 py-10">
      <div className="flex flex-col md:flex-row w-full gap-6 justify-between items-center relative">
        {/* Background blob */}
        <div className="absolute right-1/3 w-150 h-150 rounded-full bg-[rgba(13,148,136,0.1)] blur-2xl"></div>

        {/* Text */}
        <div className="text-center md:text-start flex-1">
          <h1 className="text-white font-bold text-4xl">Our Courses</h1>
          <p className="text-[#94a3b8] md:max-w-md mt-4">
            Tailored programs for every stage of your academic journey, designed
            to help you excel
          </p>
        </div>

        {/* Button */}
        <Button
          variant="outline"
          className="hidden w-full md:w-auto border-2 border-[#232727] px-3 py-5 bg-[#0a100f] hover:bg-[#1d302e] hover:text-white rounded-lg text-white lg:flex items-center justify-center gap-2"
        >
          View All Programs <ArrowUpRight />
        </Button>
      </div>
      <div className="flex items-center gap-3 mt-10">
        <hr className="flex-1 border border-[#212a28]" />
        <Badge
          variant="outline"
          className="border-2 border-[#232727] px-4 py-3 bg-[#0a2420] hover:bg-[#1d302e] hover:text-white 
      rounded-2xl text-[#11a595] uppercase"
        >
          School Level
        </Badge>
        <hr className="flex-1 border border-[#212a28]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-10">
        {gradeCard.map((grade) => (
          <Card
            key={grade.id}
            className={`border-2 border-[#252f31] p-0 hover:bg-[#1d302e] ${grade.bgClass}`}
          >
            {/* Image on top */}
            <div className="flex justify-center px-4 pt-4">
              <Image
                src={grade.coverImg}
                alt={grade.label}
                width={414}
                height={302}
                className="rounded-lg border-2 border-[#252f31] object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 px-4 pb-4">
              <span
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg font-bold ${grade.iconBgClass}`}
              >
                {grade.icon}
              </span>
              <h3 className="text-xl font-semibold text-white">
                {grade.label}
              </h3>
              <Link
                href="#"
                className="text-sm text-[#94a3b8] hover:underline mt-auto"
              >
                {grade.cta}
              </Link>
            </div>
          </Card>
        ))}
      </div>
          <Button
          variant="outline"
          className="md:hidden w-full border-2 border-[#232727] my-5 px-3 py-5 bg-[#0a100f] hover:bg-[#1d302e] hover:text-white rounded-lg text-white flex items-center justify-center gap-2"
        >
          View All Programs <ArrowUpRight />
        </Button>
    </div>
  );
}
