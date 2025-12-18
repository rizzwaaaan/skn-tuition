import Image from "next/image";

const Enroll = () => {
  return (
    <section id="enroll" className="w-full bg-white">
      
      {/* BOXED CONTAINER */}
      <div className="relative w-[95%] max-w-[1600px] mx-auto h-[350px] md:h-[450px]  overflow-hidden shadow-2xl">
        
        {/* 1. BACKGROUND IMAGE + BLUE TINT */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/enroll-bg.webp"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0E2A46] opacity-90"></div>

        </div>

        {/* 2. DECOR: TOP LEFT (Cyan C-Curve) */}
        <div className="absolute top-8 left-8 w-6 h-6 md:w-9 md:h-9 z-10 opacity-80">
          <Image 
            src="/decor-c-cyan.webp" 
            alt="Decor" 
            fill 
            className="object-contain"
          />
        </div>

        {/* 3. DECOR: TOP RIGHT (Scribble) */}
        <div className="absolute top-0 right-5 md:-top-22 md:right-0 w-45 h-75 z-10 hidden md:block">
  <Image
    src="/decor-scribble-white.webp"
    alt="Scribble"
    fill
    className="object-contain"
  />
</div>


        {/* 4. DECOR: BOTTOM RIGHT (Waves) */}
        <div className="absolute bottom-0 right-0 w-30 h-16 z-10 hidden md:block">
           <Image src="/decor-waves.webp" alt="Waves" fill className="object-contain object-bottom-right" />
        </div>

        {/* 5. DECOR: VIDEO PLAY BUTTON (REPLACED WITH IMAGE) */}
        <div className="absolute top-1/2 right-[15%] transform -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 z-20 hidden lg:block cursor-pointer hover:scale-110 transition-transform">
           <div className="relative w-full h-full">
              {/* The Image Component */}
              <Image 
                src="/icon-play.webp" 
                alt="Play Video" 
                fill 
                className="object-contain drop-shadow-lg"
              />
           </div>
        </div>

        {/* === MAIN CONTENT === */}
        <div className="relative z-20 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
           
           <h4 className="text-[#ff5722] font-bold text-lg md:text-xl mb-2 tracking-wide">
             Join Now
           </h4>

           <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
             Call To Enroll
           </h2>

           {/* Phone Numbers + Spark Decor */}
           <div className="relative inline-block mb-8">
             <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide">
               9895641783, 9400278298
             </h3>
             
             {/* 6. DECOR BENEATH NUMBER (Spark/Burst) */}
             <div className="absolute -bottom-8 right-160 w-10 h-10 md:w-12 md:h-12 animate-pulse">
                <Image src="/icon-spark.webp" alt="Spark" fill className="object-contain" />
             </div>
           </div>

           {/* CTA Button */}
           <div>
  <button
    className="
      relative flex items-center
      bg-[#2ecf9f] hover:bg-[#25b98e]
      text-white font-semibold
      pl-8 pr-20 py-4
      rounded-full
      shadow-lg
      transition-all
      hover:-translate-y-1
    "
  >
    <span className="text-lg">Join With Us</span>

    {/* Arrow Circle */}
    <span
      className="
        absolute right-0 top-1/2 -translate-y-1/2
        w-14 h-14
        bg-[#43e0b4]
        rounded-full
        flex items-center justify-center
        text-2xl
      "
    >
      →
    </span>
  </button>
</div>


        </div>

      </div>
    </section>
  );
};

export default Enroll;