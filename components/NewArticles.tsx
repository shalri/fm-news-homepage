import { newArticles } from "./data";

export default function NewArticles() {
  return (
    <section className=" mt-[70px] bg-nh-very-dark-blue px-5 py-7">
      <h2 className=" text-4xl font-semibold text-nh-soft-orange">New</h2>
      <div className="divide-y divide-nh-grayish-blue/40">
        {newArticles.map((newArticle, i) => (
          <article key={i} className="mb-9 last:mb-0">
            <h3 className="mt-9 text-xl font-bold">
              <a
                href="#"
                className="transition-color  text-nh-off-white duration-300 hover:text-nh-soft-orange"
              >
                {newArticle.articleTitle}
              </a>
            </h3>
            <p className="pt-2 text-[.95rem] leading-relaxed text-nh-grayish-blue">
              {newArticle.articleSubhead}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
