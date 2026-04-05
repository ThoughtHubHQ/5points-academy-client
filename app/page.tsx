import Hero from "./_sections/Hero";
import HeroImage from "./_sections/HeroImage";
import MentoringStudents from "./_sections/MentoringStudents";
import OurCourses from "./_sections/OurCourses";
import TopCourses from "./_sections/TopCourses";

export default function Home() {
  return (
    <div className="max-w-360 mx-auto lg:py-10 py-8 px-6 md:px-12 lg:px-20 2xl:px-24">
      <Hero />
      <HeroImage />
      <MentoringStudents />
      <OurCourses />
      <TopCourses/>
    </div>
  );
}
