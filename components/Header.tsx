import Link from "next/link";
import { links } from "@/lib/data";

import ShinyButton from "./ShinyButton";

import Logo from "@/assets/Logo";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-md py-4 border-b border-white/15 overflow-hidden">
      <div className="section-container">
        <div className="flex justify-between items-center sm:p-2.5 rounded-xl">
          <div>
            <div className="border border-white/15 size-10 rounded-lg inline-flex justify-center items-center">
              <Logo className="size-8" />
            </div>
          </div>
          <div>
            <nav className="flex gap-8 text-white/70 text-sm max-sm:hidden">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="sm:hover:text-white transition duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <ShinyButton />
            <span className="sm:hidden">
              <Menu className="size-[30px]" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
