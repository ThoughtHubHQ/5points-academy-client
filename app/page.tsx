import Hero from "./_sections/Hero";
import HeroImage from "./_sections/HeroImage";

export default function Home() {
  return (
    <div className="max-w-360 mx-auto lg:py-15 py-8 px-6">
      <Hero />
      <HeroImage />
    </div>
  );
}
