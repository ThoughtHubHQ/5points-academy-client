"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useMemo } from "react";
import { Search, Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const teachersData = [
  {
    id: 1,
    name: "John Doe",
    slug: "john-doe",
    subject: "Mathematics",
    department: "Science",
    experience: "10 years",
    rating: 4.5,
    avatar: "/teacher.jpg",
    description:
      "PhD in Theoretical Physics from BUET. 12+ years experience in admission coaching.",
  },
  {
    id: 2,
    name: "Jane Smith",
    slug: "jane-smith",
    subject: "English",
    department: "Arts",
    experience: "8 years",
    rating: 4.7,
    avatar: "/teacher.jpg",
    description:
      "MA in English Literature from Dhaka University. 8+ years experience in admission coaching.",
  },
  {
    id: 3,
    name: "Michael Brown",
    slug: "michael-brown",
    subject: "Physics",
    department: "Science",
    experience: "12 years",
    rating: 4.8,
    avatar: "/teacher.jpg",
    description:
      "PhD in Applied Physics from BUET. 15+ years experience in admission coaching.",
  },
  {
    id: 4,
    name: "Emily Davis",
    slug: "emily-davis",
    subject: "Chemistry",
    department: "Science",
    experience: "9 years",
    rating: 4.6,
    avatar: "/teacher.jpg",
    description:
      "MSc in Chemistry from Dhaka University. 9+ years experience in admission coaching.",
  },
  {
    id: 5,
    name: "David Wilson",
    slug: "david-wilson",
    subject: "Biology",
    department: "Science",
    experience: "11 years",
    rating: 4.7,
    avatar: "/teacher.jpg",
    description:
      "PhD in Molecular Biology from BUET. 11+ years experience in admission coaching.",
  },
  {
    id: 6,
    name: "Sarah Johnson",
    slug: "sarah-johnson",
    subject: "History",
    department: "Arts",
    experience: "7 years",
    rating: 4.5,
    avatar: "/teacher.jpg",
    description:
      "MA in History from Dhaka University. 7+ years experience in admission coaching.",
  },
  {
    id: 7,
    name: "Robert Lee",
    slug: "robert-lee",
    subject: "Computer Science",
    department: "Science",
    experience: "10 years",
    rating: 4.9,
    avatar: "/teacher.jpg",
    description:
      "PhD in Computer Science from BUET. 10+ years experience in admission coaching.",
  },
];

export default function OurTeachersTabs() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All Teachers");

  const categories = useMemo(() => {
    const uniqueDeps = Array.from(
      new Set(teachersData.map((t) => t.department)),
    );
    return [
      "All Teachers",
      ...uniqueDeps,
      "Commerce",
      "Admission Care",
      "English Language",
      "Job Prep",
      "Other Subjects",
      "Online Courses",
      "Test Series",
    ];
  }, []);

  const filteredTeachers = teachersData.filter((teacher) => {
    const isAll = activeTab.toLowerCase() === "all teachers";
    const matchesTab =
      isAll || teacher.department.toLowerCase() === activeTab.toLowerCase();

    const matchesSearch =
      teacher.name.toLowerCase().includes(query.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(query.toLowerCase());

    return matchesTab && matchesSearch;
  });

  return (
    <section className="py-10">
      <Tabs
        defaultValue="All Teachers"
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-25">
          {/* Tabs */}
          <TabsList className="flex flex-wrap flex-1 gap-3 bg-transparent h-auto p-0 border-none :max-w-3xl">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="h-11 px-5 py-2 rounded-full whitespace-nowrap border border-[#1f2937] text-xs md:text-sm font-medium
          data-[state=active]:bg-[#00DCB4] data-[state=active]:text-black data-[state=active]:border-[#00DCB4]
          text-[#9ca3af] hover:bg-[#9ca3af] cursor-pointer"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Search */}
          <div className="relative w-full lg:w-70 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or subject..."
              className="h-11 pl-11 py-2.5 rounded-full border-[#1f2937] focus-visible:ring-[#1f2937] bg-[#1e2825]
               text-white placeholder:text-[#6b7280]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map((teacher) => (
              <Link href={`/our-teachers/${teacher.slug}`} key={teacher.id}>
                <Card
                  key={teacher.id}
                  className="bg-[#101817] border border-[#1c2422] p-0"
                >
                  <div className="relative h-90 overflow-hidden group">
                    <Image
                      src={teacher.avatar}
                      alt={teacher.name}
                      width={300}
                      height={150}
                      className="h-90 w-full object-cover grayscale backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.80)] to-transparent"></div>
                  </div>

                  <CardContent className="pb-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <h2 className="text-white text-xl font-bold">
                        {teacher.name}
                      </h2>
                      <p className="text-[#00dcb4] font-bold flex items-center gap-1">
                        <Star size={15} /> {teacher.rating}
                      </p>
                    </div>
                    <h2 className="text-[#00dcb4] text-xs font-bold uppercase">
                      {teacher.subject}
                    </h2>
                    <p className="text-[#9ca3af] leading-snug">
                      {teacher.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              No teachers found in this category.
            </div>
          )}
        </div>
      </Tabs>
    </section>
  );
}
