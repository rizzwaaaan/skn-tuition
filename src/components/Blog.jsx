import Image from "next/image";

const Stats = () => {
  const stats = [
    { label: "Pass Success Rate", percentage: 95 },
    { label: "Student Improvement", percentage: 90 },
    { label: "Concept Clarity", percentage: 100 },
    { label: "Student Satisfaction", percentage: 98 },
  ];

  return (
    <section id="blog" className="w-full bg-white py-12 md:py-32 overflow-hidden">
      {/* CONTAINER */}
      <div
        className="w-[95%] max-w-[1600px] mx-auto 
                   px-6 md:px-16 lg:px-32 
                   grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center"
      >
        {/* === LEFT COLUMN: CONTENT === */}
        <div className="space-y-8 lg:space-y-10 px-0 md:px-8 lg:px-12 xl:px-16 relative">
          
          {/* Header */}
          <div className="relative space-y-2">
            <div className="flex items-center gap-4 text-[#10b981] text-xs md:text-sm tracking-widest mb-4 uppercase">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 border-[2px] border-[#ff5722] rotate-45"></div>
                <div className="absolute inset-0 translate-x-[10px] -translate-y-[0px] border-[2px] border-[#10b981] rotate-45"></div>
              </div>
              <span>Our Status Values</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1e2246] leading-tight relative z-10 font-poppins">
              <span className="lg:whitespace-nowrap block">Our Classroom Coaching</span>{" "}
              <span className="lg:whitespace-nowrap block">
                Style Ensures <span className="text-[#ff5722]">Maximum</span>
              </span>{" "}
              <span className="lg:whitespace-nowrap block">
                Clarity And Proven Results.
              </span>
            </h2>

            {/* --- DOTS DECOR 1 (Under Heading) --- */}
            <div className="absolute bottom-20 left-0 translate-x-[200px] lg:translate-x-[345px] hidden md:block z-0">
              <Image 
                src="/dots-grid.webp"
                alt="Dots Decoration"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed pt-4 relative z-10 lg:whitespace-nowrap">
              Concept-based teaching + daily doubt clearing + weekly tests.
            </p>
          </div>

          {/* Progress Bars */}
          <div className="space-y-6 md:space-y-8 pt-4 md:pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-[#1e2246] text-sm md:text-base">
                    {stat.label} {stat.percentage}%
                  </span>
                  <span className="bg-[#10b981] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm relative -top-1">
                    {stat.percentage}%
                  </span>
                </div>

                {/* BAR CONTAINER:
                    - Mobile: w-full (fits screen)
                    - Desktop: lg:w-[120%] (extends out as per design)
                */}
                <div className="w-full lg:w-[120%] h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#10b981] rounded-full relative"
                    style={{ width: `${stat.percentage}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full mr-1 opacity-50"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* HAT DECOR (BOTTOM LEFT) - Hidden on mobile to save space */}
          <div className="absolute bottom-[72px] -left-30 hidden lg:block">
            <Image
              src="/hat.webp"
              alt="Graduation Hat"
              width={125}
              height={125}
              className="object-contain"
            />
          </div>
        </div>

        {/* === RIGHT COLUMN: IMAGES === */}
        {/* Height: Reduced to 350px on mobile for better fit */}
        <div className="relative h-[350px] md:h-[550px] lg:h-[700px] w-full mt-8 lg:mt-0 order-1 lg:order-2">
          
          {/* 1. ORANGE DECOR */}
          <div className="absolute right-0 top-0 md:top-9 w-[40%] md:w-[30%] h-[90%] z-0 rounded-tr-[60px] overflow-hidden">
            <Image
              src="/stats-decor.webp"
              alt="Orange Decoration"
              fill
              className="object-fill"
            />
          </div>

          {/* 2. Main Image */}
          <div className="absolute left-0 md:left-15 top-[5%] md:top-[12%] w-[90%] md:w-[85%] h-[85%] md:h-[75%] bg-white shadow-2xl z-10 rounded-tr-[60px] overflow-hidden">
            <Image
              src="/classroom-group.webp"
              alt="Classroom Coaching"
              fill
              className="object-cover"
            />
          </div>

          {/* --- DOTS DECOR 2 (Bottom Left) --- */}
          <div className="absolute bottom-5 left-5 md:bottom-10 md:left-20 z-0 hidden md:block">
             <Image 
               src="/dots-grid.webp" 
               alt="Dots Decoration" 
               width={120} 
               height={80} 
               className="object-contain"
             />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Stats;