import mobileBannerImg from "../public/assets/images/image-web-3-mobile.jpg";
import desktopBannerImg from "../public/assets/images/image-web-3-desktop.jpg";
import retroPCImg from "../public/assets/images/image-retro-pcs.jpg";
import laptopImg from "../public/assets/images/image-top-laptops.jpg";
import gamingImg from "../public/assets/images/image-gaming-growth.jpg";

export const navLinks = [
  {
    page: "Home",
    pageUrl: "#",
  },
  {
    page: "New",
    pageUrl: "#",
  },
  {
    page: "Popular",
    pageUrl: "#",
  },
  {
    page: "Trending",
    pageUrl: "#",
  },
  {
    page: "Categories",
    pageUrl: "#",
  },
];

export const bannerArticle = {
  articleTitle: "The Bright Future of Web 3.0?",
  articleIntro:
    "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
  bannerMobileImg: mobileBannerImg,
  bannerDesktopImg: desktopBannerImg,
};

export const newArticles = [
  {
    articleTitle: "Hydrogen VS Electric Cars",
    articleSubhead: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    articleTitle: "The Downsides of AI Artistry",
    articleSubhead:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    articleTitle: "Is VC Funding Drying Up?",
    articleSubhead:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const popularArticles = [
  {
    rank: "01",
    title: "Reviving Retro PCs",
    subhead: "What happens when old PCs are given modern upgrades?",
    image: retroPCImg,
  },
  {
    rank: "02",
    title: "Top 10 Laptops of 2022",
    subhead: "Our best picks for various needs and budgets.",
    image: laptopImg,
  },
  {
    rank: "03",
    title: "The Growth of Gaming",
    subhead: "How the pandemic has sparked fresh opportunities.",
    image: gamingImg,
  },
];
