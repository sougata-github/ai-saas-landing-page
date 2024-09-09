import Link from "next/link";

import Logo from "@/assets/Logo";
import Insta from "@/assets/Insta";
import XSocial from "@/assets/XSocial";
import Youtube from "@/assets/Youtube";

const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row md:justify-center">
          <div className="flex gap-2 items-center lg:flex-1 lg:justify-start">
            <Logo className="size-6" />
            <div className="font-medium">AI Startup Landing Page</div>
          </div>
          <div className="flex gap-2 items-center md:flex-1 md:justify-center">
            <nav className="flex flex-col md:flex-row gap-5 ">
              <Link
                href="#"
                className="text-white/70 text-xs sm:text-sm md:hover:text-white transition duration-300"
              >
                Features
              </Link>
              <Link
                href="#"
                className="text-white/70 text-xs sm:text-sm md:hover:text-white transition duration-300"
              >
                Developers
              </Link>
              <Link
                href="#"
                className="text-white/70 text-xs sm:text-sm md:hover:text-white transition duration-300"
              >
                Company
              </Link>
              <Link
                href="#"
                className="text-white/70 text-xs sm:text-sm md:hover:text-white transition duration-300"
              >
                Changelog
              </Link>
            </nav>
          </div>
          <div className="flex gap-5 md:justify-end md:flex-1">
            <XSocial className="text-white/40 md:hover:text-white transition duration-300 cursor-pointer" />
            <Insta className="text-white/40 md:hover:text-white transition duration-300 cursor-pointer" />
            <Youtube className="text-white/40 md:hover:text-white transition duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
