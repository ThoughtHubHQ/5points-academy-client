import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="w-full mt-3 lg:mt-10">
      <Image
        src="/herobg.jpg"
        alt="Hero Image"
        width={1536}
        height={672}
        className="w-full max-w-360 mx-auto rounded-lg shadow-lg"
      />
    </div>
  );
}
