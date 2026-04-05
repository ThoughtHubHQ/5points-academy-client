import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CirclePlay, Dot } from "lucide-react";

const statData = [
  { label: "Success Rate", value: "95%" },
  { label: "Students", value: "5K+" },
  { label: "Expert Mentors", value: "50+" },
];

export default function Hero() {
  return (
    <div className="relative z-0 flex justify-center items-center text-center flex-col px-4 md:px-8 py-5 ">
      {/* Fixed Background Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-100 h-75 md:h-100 rounded-full bg-[rgba(13,148,136,0.4)] blur-[90px] md:blur-[120px] -z-10 pointer-events-none"></div>

      <Badge className="text-xs md:text-sm text-[#2cd0bd] font-bold rounded-full bg-[#0a2725] px-4 py-2 md:px-5 md:py-3 border-2 md:border-3 border-[#0d514b] uppercase transition-colors hover:bg-[#0d514b]/50">
        <Dot
          strokeWidth={15}
          className="shadow-2xl mr-1 w-4 h-4 md:w-5 md:h-5"
        />{" "}
        Admission Open {new Date().getFullYear()}
      </Badge>

      <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold text-center mt-8 md:mt-10 tracking-tight">
        Achieve Academic <br className="hidden md:block" />
        <span className="text-[#2dcdab]">Excellence</span>
      </h1>

      <p className="text-base md:text-lg text-muted-foreground max-w-[18rem] sm:max-w-md md:max-w-2xl mx-auto mt-5 md:mt-6 leading-relaxed">
        Expert coaching for SSC, HSC, Admission & Job Preparation. We build the
        foundation for your future success with world-class mentors.
      </p>

      <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10">
        <Button className="w-full sm:w-auto bg-[#01625a] text-white font-bold rounded-xl py-6 px-6 md:px-8 text-base md:text-lg hover:bg-[#2cd0bd]/90 hover:-translate-y-1 transition-all duration-300 border-2 border-[#02625b] shadow-lg shadow-[#01625a]/20">
          Enroll Now <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
        </Button>
        <Button className="w-full sm:w-auto bg-[#0a2825] text-white font-bold rounded-xl py-6 px-6 md:px-8 text-base md:text-lg hover:bg-[#0a2825]/80 hover:-translate-y-1 transition-all duration-300 border-2 border-[#36514f]">
          <CirclePlay className="mr-2 w-4 h-4 md:w-5 md:h-5" /> Watch Demo
        </Button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8 md:mt-12 md:border-t border-[#20302e] pt-5 md:pt-12 w-full max-w-5xl mx-auto">
        {statData.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:border-r border-[#20302e] last:border-r-0"
          >
            <span className="text-2xl md:text-4xl font-bold text-white">
              {stat.value}
            </span>
            <span className="text-xs md:text-base text-muted-foreground mt-2 uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
