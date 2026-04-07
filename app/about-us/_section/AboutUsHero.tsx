export default function AboutUsHero() {
  return (
    <div className="relative z-0 flex justify-center items-center text-center flex-col px-4 md:px-8 py-5 ">
      {/* Fixed Background Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 md:w-100 h-75 md:h-100 rounded-full bg-[rgba(13,148,136,0.4)] blur-[90px] md:blur-[120px] -z-10 pointer-events-none"></div>

      <h1 className="text-4xl md:text-6xl text-white font-bold text-center mt-8 md:mt-10 tracking-tight">
        About  <br className="block md:hidden" />
        <span className="text-[#2dcdab]">5points Academy</span>
      </h1>

      <p className="text-base md:text-lg text-muted-foreground  mt-5 md:mt-6 leading-relaxed">
        Empowering students with quality education and expert guidance for over
        a decade
      </p>
    </div>
  );
}
