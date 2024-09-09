import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Product from "@/components/Product";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <LogoTicker />
      <Product />
      <Testimonial />
      <CTA />
    </div>
  );
}
