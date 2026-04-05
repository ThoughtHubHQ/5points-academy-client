import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const stories = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/review.jpg",
    acheivement: "GPA 5.00 (SSC)",
    story:
      "The exam strategies taught here were a game changer. I felt so confident during my board exams. The teachers are incredible",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "/review.jpg",
    acheivement: "Medical (DMC)",
    story:
      "Dreaming of DMC was easy, but getting there required guidance. The biology notes were exceptional and very detailed",
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: "/review.jpg",
    acheivement: "CSE (BUET)",
    story:
      "After failing twice, I joined the Job Prep course. The math shortcuts helped me crack the exam in record time",
  },
];

export default function SuccessStory() {
  return (
    <div className="lg:mt-20 mt-10 px-3 lg:px-8 pb-15 pt-10 border border-[#161c1b] rounded-3xl">
      <h1 className="text-white text-2xl md:text-4xl font-bold pb-10 pt-5 md:py-15 text-center">
        Success Story from Our Students
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <Card
            key={story.id}
            className="bg-[#101817] hover:bg-[#151d1a] border border-[#124842] rounded-xl px-6 py-8 flex flex-col gap-5"
          >
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={story.avatar}
                  alt={`${story.name}'s avatar`}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-white text-lg font-semibold mb-1">
                  {story.name}
                </h2>
                <Badge className="bg-[#282017] text-[#fb923c] font-bold text-center px-3">
                  {story.acheivement}
                </Badge>
              </div>
            </div>
            <p className="text-[#94a3b8] mt-2 leading-relaxed">{story.story}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
