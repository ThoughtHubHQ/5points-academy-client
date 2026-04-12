import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export default function OurTeachersCTA() {
  return (
    <div className="mt-10 bg-[#0f1614] border-[#1f2937] border rounded-2xl p-12 text-center lg:max-w-5xl lg:mx-auto">
      <h1 className="text-[36px] text-white font-bold">
        Want to learn from the best?
      </h1>
      <p className="text-[#9ca3af] p-4 max-w-2xl mx-auto">
        Join our upcoming batches and start your journey towards academic
        excellence under the guidance of our world-class mentors.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 pt-5">
        <Button className="w-full md:w-auto h-12 text-primary bg-[#00dcb4] hover:bg-[#00c4a0] rounded-full py-3 px-8">
          <CalendarDays /> View Course Schedule
        </Button>
        <Button className="w-full md:w-auto h-12 border border-[#374151] text-white bg-[#0f1614] hover:bg-[#1b2220] py-3 px-8 rounded-full">
          Talk to an Advisor
        </Button>
      </div>
    </div>
  );
}
