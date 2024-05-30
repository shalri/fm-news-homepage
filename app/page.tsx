import Header from "../components/Header";
import BannerArticle from "../components/BannerArticle";
import Footer from "../components/Footer";
import NewArticles from "@/components/NewArticles";
import PopularArticles from "@/components/PopularArticles";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid gap-x-8 px-4 sm:grid-cols-3 sm:self-center">
        <BannerArticle />
        <NewArticles />
        <PopularArticles />
      </main>
      <Footer />
    </>
  );
}
