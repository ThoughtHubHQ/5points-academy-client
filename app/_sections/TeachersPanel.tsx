import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RotateCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeachersPanel() {
  const teachers = [
    {
      id: 1,
      name: "John Doe",
      course: "Mathematics",
      avatar: "/teacher.jpg",
      subject: "Mathematics",
      institution: "DU",
    },
    {
      id: 2,
      name: "John Sina",
      course: "Physics",
      avatar: "/teacher.jpg",
      subject: "Physics",
      institution: "BUET",
    },
    {
      id: 3,
      name: "Jane Smith",
      course: "Chemistry",
      avatar: "/teacher.jpg",
      subject: "Chemistry",
      institution: "JnU",
    },
    {
      id: 4,
      name: "Alice Johnson",
      course: "Biology",
      avatar: "/teacher.jpg",
      subject: "Biology",
      institution: "DMC",
    },
    {
      id: 5,
      name: "Bob Wilson",
      course: "English",
      avatar: "/teacher.jpg",
      subject: "English",
      institution: "DU",
    },
  ];

  return (
    <div className="mt-15 lg:mt-20 lg:mb-10">
      <h1 className="text-white text-2xl md:text-4xl font-bold pb-10 pt-5 md:py-15 text-center">
        Meet Our <br className="block md:hidden" />{" "}
        <span className="text-[#2dd4bf]">Expert Teachers Panel</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {teachers.map((teacher) => (
          <Card
            key={teacher.id}
            className="bg-[#101817] border border-[#1c2422] p-0"
          >
            <div className="relative h-90">
              <Image
                src={teacher.avatar}
                alt={teacher.name}
                width={300}
                height={150}
                className="h-90 w-full object-cover grayscale backdrop-blur-md"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.80)] to-transparent"></div>
            </div>

            <CardContent className="text-center pb-4 space-y-2">
              <h2 className="text-white text-xl font-bold">{teacher.name}</h2>
              <p className="text-[#2dd4bf] font-bold uppercase">
                {teacher.course}
              </p>
              <p className="text-[#64748b]">
                {teacher.subject} ({teacher.institution})
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-5 md:mt-10">
        <Link href="/our-teachers">
          <Button className="bg-[#09100e] border-[#1f2937] rounded-xl py-6 px-6 text-white font-bold w-full md:w-auto ">
            View More Teacher <RotateCw />
          </Button>
        </Link>
      </div>
    </div>
  );
}
