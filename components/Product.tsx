"use client";

import { tabs } from "@/lib/data";

import productImage from "@/assets/images/product-image.png";

import { DotLottiePlayer } from "@dotlottie/react-player";

const Product = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="section-container">
        <h2 className="section-heading">Elevate your SEO efforts.</h2>
        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-3">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center md:flex-1"
            >
              <div className="size-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer src={tab.icon} className="size-5" autoplay />
              </div>

              <div className="font-medium">{tab.title}</div>
              {tab.isNew && (
                <div className="text-xs rounded-full px-2 py-0.5 bg-[#8C44FF] text-black font-semibold">
                  new
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Product;
