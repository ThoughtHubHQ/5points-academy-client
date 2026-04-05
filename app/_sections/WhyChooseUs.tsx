import { Card } from "@/components/ui/card";
import {
  ChartSpline,
  Headset,
  LaptopMinimal,
  NotebookPen,
  User,
  Users,
} from "lucide-react";

const reasons = [
  {
    id: 1,
    icon: User,
    title: "Expert Teachers",
    description: "Highly Qualified Mentor",
    bgColor: "bg-[#112826]",
  },
  {
    id: 2,
    icon: Users,
    title: "Small Batch Size",
    description: "Personal Attention",
    bgColor: "bg-[#282016]",
  },
  {
    id: 3,
    icon: NotebookPen,
    title: "Regular Exams",
    description: "Weekly & Monthly Test",
    bgColor: "bg-[#16222e]",
  },
  {
    id: 4,
    icon: LaptopMinimal,
    title: "Online + Offline",
    description: "Hybrid Learning Model",
    bgColor: "bg-[#1f1e2e]",
  },
  {
    id: 5,
    icon: ChartSpline,
    title: "Proven Results",
    description: "Consistent Track Record",
    bgColor: "bg-[#271b1e]",
  },
  {
    id: 6,
    icon: Headset,
    title: "24/7 Support",
    description: "Solving Doubts Anytime",
    bgColor: "bg-[#122722]",
  },
];

export default function WhyChooseUs() {
  return (
    <div>
      <h1 className="text-white text-2xl md:text-4xl font-bold pb-10 pt-5 md:py-15 text-center">
        Why Choose Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((reason) => (
          <Card
            key={reason.id}
            className="bg-[#101817] hover:bg-[#151d1a] border border-[#1c2423] rounded-xl p-5 flex flex-col items-center gap-3"
          >
            <span
              className={`${reason.bgColor} p-4 rounded-full flex items-center justify-center mb-2`}
            >
              {reason.icon && (
                <reason.icon className="w-7 h-7 text-muted-foreground" />
              )}
            </span>
            <h2 className="text-white text-lg font-semibold">{reason.title}</h2>
            <p className="text-gray-400 text-center">{reason.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
