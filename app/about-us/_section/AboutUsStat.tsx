const statData = [
  { label: "Success Rate", value: "95%" },
  { label: "Students", value: "5K+" },
  { label: "Expert Mentors", value: "50+" },
];

export default function AboutUsStat() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-8 md:mt-20 pt-5 md:py-12 w-full max-w-5xl mx-auto">
      {statData.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center"
        >
          <span className="text-2xl md:text-4xl font-bold text-white">
            {stat.value}
          </span>
          <span className="text-xs md:text-base text-muted-foreground mt-2 uppercase">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
