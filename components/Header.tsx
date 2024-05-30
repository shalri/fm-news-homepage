import Image from "next/image";
import { navLinks } from "./data";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-4 py-8 sm:pb-8 sm:pt-16">
      <h1 className="relative h-[30px] w-[50px] text-lg font-bold sm:h-[42px] sm:w-[64px]">
        <Image
          src="./assets/images/logo.svg"
          alt="logo"
          fill
          className="aspect-auto"
        />
      </h1>
      <div className="sm:pt-6">
        <nav className="hidden sm:block">
          <ul className="flex gap-10 text-lg">
            {navLinks.map((link) => (
              <ol key={link.page}>
                <a
                  href={link.pageUrl}
                  className="text-body text-nh-dark-grayish-blue transition-colors duration-300 hover:text-nh-soft-red"
                >
                  {link.page}
                </a>
              </ol>
            ))}
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
