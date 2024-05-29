import Image from "next/image";
import { popularArticles } from "./data";

export default function PopularArticles() {
  return (
    <section className="mb-[50px] mt-[70px] sm:col-span-3 sm:grid sm:grid-cols-3 sm:gap-x-8">
      {popularArticles.map((article) => (
        <article className="mb-7 flex items-start gap-6" key={article.rank}>
          <div className="h-[130px] max-w-[100px]">
            <Image
              src={article.image}
              alt="article image"
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-[2.175rem] font-semibold text-nh-soft-red">
              {article.rank}
            </h3>
            <h2 className="text-lg font-bold text-nh-very-dark-blue">
              <a
                href="#"
                className="transition-colors duration-300 hover:text-nh-soft-red"
              >
                {article.title}
              </a>
            </h2>
            <p className="text-[0.95rem] text-nh-dark-grayish-blue">
              {article.subhead}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}
