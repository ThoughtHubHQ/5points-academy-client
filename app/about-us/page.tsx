import { Metadata } from "next";
import AboutUsHero from "./_section/AboutUsHero";
import AboutUsStat from "./_section/AboutUsStat";
import AboutUsMentoring from "./_section/AboutUsMentoring";
import WhyChooseUs from "../_sections/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us - 5points Academy",
  description: "Learn more about 5points Academy, our mission, and our team.",
};

export default function AboutUsPage() {
  return (
    <div className="max-w-360 mx-auto lg:py-10 py-8 px-6 md:px-12 lg:px-20 2xl:px-24">
      <AboutUsHero />
      <AboutUsMentoring />
      <WhyChooseUs/>
      <AboutUsStat />
    </div>
  );
}
