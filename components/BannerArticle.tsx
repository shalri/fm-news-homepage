import Image from "next/image";
import { bannerArticle } from "./data";

export default function Main() {
  const { articleTitle, articleIntro, bannerMobileImg, bannerDesktopImg } =
    bannerArticle;
  return (
    <section className="grid grid-cols-1 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8 sm:self-start">
      <div className="sm:col-span-2">
        <picture className="mb-6 block h-full w-full sm:mb-10">
          <source media="(min-width: 641px)" srcSet={bannerDesktopImg.src} />
          <Image
            src={bannerMobileImg.src}
            // width={bannerMobileImg.width}
            // height={bannerMobileImg.height}
            width={800} // arbitrary number larger than the container (hacky)
            height={800}
            priority
            alt="banner img"
            className="object-contain sm:object-fill"
          />
        </picture>
      </div>
      <h1 className="text-[2.608rem] font-bold leading-[1.0] text-nh-very-dark-blue sm:col-span-2 sm:text-[3.5rem] lg:col-span-1">
        {articleTitle}
      </h1>
      <div className="sm:col-span-2 lg:col-span-1">
        <p className="mt-4 text-body leading-relaxed text-nh-dark-grayish-blue sm:mt-0">
          {articleIntro}
        </p>
        <a className="transition-color mt-6 block w-[185px] bg-nh-soft-red pb-3 pt-4 text-center text-[0.90rem] font-semibold uppercase tracking-[0.2rem] duration-300 hover:bg-nh-very-dark-blue hover:text-nh-off-white sm:mt-9">
          Read More
        </a>
      </div>
    </section>
  );
}
