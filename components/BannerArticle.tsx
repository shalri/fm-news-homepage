import Image from "next/image";
import { bannerArticle } from "./data";

export default function Main() {
  const { articleTitle, articleIntro, bannerMobileImg, bannerDesktopImg } =
    bannerArticle;
  return (
    <section className="grid grid-cols-1">
      <div className="mb-6 h-full w-full">
        <Image
          src={bannerMobileImg}
          alt="banner img"
          className="object-contain"
        />
      </div>
      <h1 className="text-[2.608rem] font-bold leading-[1.0] text-nh-very-dark-blue">
        {articleTitle}
      </h1>
      <p className="mt-4 text-body leading-relaxed text-nh-dark-grayish-blue">
        {articleIntro}
      </p>
      <button className="leading-1 mt-6 w-[185px] bg-nh-soft-red pb-3 pt-4 text-[0.90rem] font-semibold uppercase tracking-[0.2rem]">
        Read More
      </button>
    </section>
  );
}
