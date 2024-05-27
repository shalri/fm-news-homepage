import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primarty
        "nh-soft-orange": "hsl(35, 77%, 62%)",
        "nh-soft-red": "hsl(5, 85%, 63%)",
        // Neutral
        "nh-off-white": "hsl(36, 100%, 99%)",
        "grayish-blue": "hsl(233, 8%, 79%)",
        "dark.grayish-blue": "hsl(236, 13%, 42%)",
        "very.dark.blue": "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        semibold: "700",
        bold: "800",
      },
      fontSize: {
        body: "15px"
      },
      screen: {
        mobile: "375px",
        desktop: "1440px",
      },
      backgroundImage: {
        // "sample-bg": "/fm-news-homepage"
      },
    },
  },
  plugins: [],
};
export default config;
