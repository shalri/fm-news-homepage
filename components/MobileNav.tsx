import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { navLinks } from "./data";

export default function ModbileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="./assets/images/icon-menu.svg"
          alt="close menu"
          width={40}
          height={40}
          className="sm:hidden"
        />
      </SheetTrigger>
      <SheetContent>
        <nav>
          <ul className="min-h-screen pt-32 text-lg leading-[3rem]">
            {navLinks.map((link) => (
              <ol key={link.page}>
                <a
                  href={link.pageUrl}
                  className="transition-colors duration-300 hover:text-nh-soft-red"
                >
                  {link.page}
                </a>
              </ol>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
