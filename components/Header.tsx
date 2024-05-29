import Image from "next/image";
import { navLinks } from "./data";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-4 py-8">
      <h1 className="relative h-[30px] w-[50px] text-lg font-bold">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          fill
          className="aspect-auto"
        />
      </h1>
      <div>
        <nav className="hidden sm:flex">
          <ul className="flex gap-4 text-lg">
            {navLinks.map((link) => (
              <ol key={link.page}>
                <a href={link.pageUrl}>{link.page}</a>
              </ol>
            ))}
          </ul>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
