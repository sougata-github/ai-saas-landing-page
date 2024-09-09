import ShinyButton from "./ShinyButton";
import stars from "@/assets/images/stars.png";

const Hero = () => {
  return (
    <section
      className="text-center h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,black_74%,transparent)] md:[mask-image:linear-gradient(to_bottom,black_65%,transparent)]"
      style={{
        backgroundImage: `url(${stars.src})`,
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,0.5)_15%,rgb(14,0,36,0.5)_78%,transparent)]" />

      {/*Planet */}
      <div className="absolute size-64 md:size-96 bg-purple-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-10px_-5px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0_0_50px_rgb(140,69,255)]" />

      {/* Rings */}
      <div className="absolute size-[344px] md:size-[580px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="absolute h-4 w-4 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full max-sm:hidden" />
        <div className="absolute h-6 w-6 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 border border-white rounded-full inline-flex items-center justify-center max-sm:hidden">
          <div className="absolute h-3 w-3 bg-white rounded-full" />
        </div>
      </div>

      <div className="absolute size-[444px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute size-[544px] md:size-[980px] rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="absolute h-2 w-2 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full max-sm:hidden" />
        <div className="absolute h-2 w-2 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-full max-sm:hidden" />
      </div>

      {/* Content */}
      <div className="section-container relative mt-16">
        <h1 className="text-7xl sm:text-8xl md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,0.5))] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-6 max-w-lg mx-auto">
          Elevate your site&apos;s visibility with AI, where smart technology
          meets user-friendly SEO tools.
        </p>

        <div className="flex justify-center mt-5">
          <ShinyButton>Join waitlist</ShinyButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
