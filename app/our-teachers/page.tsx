import { Metadata } from "next";
import OurTeachersHero from "./_sections/OurTeachersHero";
import OurTeachersTabs from "./_sections/OurTeachersTabs";
import AboutUsStat from "../about-us/_section/AboutUsStat";
import OurTeachersCTA from "./_sections/OurTeachersCTA";

export const metadata: Metadata = {
  title: "Our Teachers",
  description:
    "Meet our experienced and passionate teachers who are dedicated to providing quality education and fostering a love for learning in our students.",
};

export default function OurTeachersPage() {
  return (
    <div className="max-w-360 mx-auto lg:py-10 py-8 px-6 md:px-12 lg:px-20 2xl:px-24">
      <OurTeachersHero />
      <OurTeachersTabs />
      <AboutUsStat/>
      <OurTeachersCTA/>
    </div>
  );
}
