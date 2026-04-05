import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Book, Clock, FilePlay, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const courseData = [
  {
    id: 1,
    title: "SSC Preparation",
    tag: "Board Exam",
    description:
      "Complete guideline for Science, Commerce & Arts groups with special model tests",
    duration: "6 Months",
    subjectCount: 10,
    classMode: "Online",
    classRecording: true,
    image: "/courseimg.jpg",
    basePrice: 5000,
    discountPrice: 3500,
    url: "/ssc-preparation",
    bgClass: "bg-[#453454]/50",
  },
  {
    id: 2,
    title: "HSC Preparation",
    tag: "Board Exam",
    description:
      "Complete guideline for Science, Commerce & Arts groups with special model tests",
    duration: "3 Months",
    subjectCount: 12,
    classMode: "Offline",
    classRecording: false,
    image: "/courseimg.jpg",
    basePrice: 8000,
    discountPrice: 6500,
    url: "/hsc-preparation",
    bgClass: "bg-[#523142]/50",
  },
];
export default function TopCourses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      {courseData.map((course) => (
        <Card
          key={course.id}
          className={` border-2 border-[#27272a] ${course.bgClass}`}
        >
          <Badge
            className={`relative -right-4 uppercase font-semibold border border-orange-500 text-xs px-3 py-3 rounded-md 
            text-[${course.bgClass}] text-orange-500 bg-${course.bgClass}`}
          >
            {course.tag}
          </Badge>
          <div className="px-5">
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={200}
              className="rounded-lg object-cover w-full border-2 border-[#27272a]"
            />
          </div>
          <CardContent>
            <h1 className="text-2xl font-bold text-white">{course.title}</h1>
            <p className="text-[#a1a1aa] py-2">{course.description}</p>
            <div className="flex justify-between items-center py-3">
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="12" size={15} />{" "}
                  <span className="text-[#a1a1aa]">
                    {course.duration} Duration
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Video className="12" size={15} />{" "}
                  <span className="text-[#a1a1aa]">
                    {course.classRecording ? "Live Class" : "Offline Class"}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Book className="12" size={15} />{" "}
                  <span className="text-[#a1a1aa]">
                    {course.subjectCount} Subjects
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <FilePlay className="12" size={15} />{" "}
                  <span className="text-[#a1a1aa]">
                    {course.classRecording ? "Class Recording Provided" : "--"}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full flex justify-between items-center gap-2 border-t-2 border-[#27272a] pt-4">
              <div>
                <p className="text-[#a1a1aa]">Course fee</p>
                <h1 className="text-2xl text-white font-bold">
                  ৳{course.discountPrice.toLocaleString()}
                </h1>
              </div>
              <div>
                <Button variant="outline" className="text-sm px-7">
                  <Link href={course.url}>Enroll Now</Link>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
