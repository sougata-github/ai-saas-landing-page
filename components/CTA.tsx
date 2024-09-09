import ShinyButton from "./ShinyButton";
import stars from "@/assets/images/stars.png";
import gridLines from "@/assets/images/grid-lines.png";

const CTA = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="section-container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${stars.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,38,128)] bg-blend-overlay [mask-image:radial-gradient(50%_60%_at_50%_50%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          />

          <div className="relative">
            <h2 className="max-w-lg mx-auto section-heading">
              AI-Driven SEO for everyone
            </h2>
            <p className="section-paragraph">
              Achieve clear, impactful results without complexity.
            </p>
            <div className="flex justify-center mt-8">
              <ShinyButton>Join waitlist</ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
