import Header from "../components/Header";
import BannerArticle from "../components/BannerArticle";
import Footer from "../components/Footer";
import NewArticles from "@/components/NewArticles";
import PopularArticles from "@/components/PopularArticles";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid px-4">
        <BannerArticle />
        <NewArticles />
        <PopularArticles />
      </main>
      <Footer />
    </>
  );
}
