/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#101010",
        secondary: "#3B3B3B",
        gzred: "#ff0c3b",
        dred: "#CA2026",
        newred: "#B81D23",
        third: "#1E1E1E",
      },
      backgroundImage: {
        navbar: "url('/src/assets/background/Navbar.svg') ",
        social: "url('/src/assets/background/bg-social.svg') ",
        banner: "url('/src/assets/background/bg-banner.svg')",
        product: "url('/src/assets/background/bg-product.svg')",
        newProduct: "url('/src/assets/background/bg-newProduct.svg')",
        button: "url('/src/assets/background/bg-button.svg')",
        buttonB: "url('/src/assets/background/bg-button-b.svg')",
        buttonC: "url('/src/assets/background/bg-buttonC.svg')",
        builds: "url('/src/assets/background/bg-builds.svg')",
        builtPC: "url('/src/assets/background/bg-builtPC.svg')",
        title: "url('/src/assets/background/bg-title.svg')",
        preBuilt: "url('/src/assets/background/bg-prebuilt.svg')",
        border: "url('/src/assets/background/bg-border.svg')",
        news: "url('/src/assets/background/bg-news.svg')",
        newsComponents: "url('/src/assets/background/bg-news component.svg')",
        contact: "url('/src/assets/background/bg-contact.webp')",
        input: "url('/src/assets/background/bg-input.svg')",
        message: "url('/src/assets/background/bg-message.svg')",
        info: "url('/src/assets/background/bg-info.svg')",
        bar: "url('/src/assets/background/bg-bar.svg')",
        prebuiltpage: "url('/src/assets/background/bg-prebuilt-page.svg')",
        prebuilproduct: "url('/src/assets/background/prebuilproduct.svg')",
        prebuilproduct1: "url('/src/assets/background/prebuilproduct1.svg')",
        prebuilproduct2: "url('/src/assets/background/prebuilproduct2.svg')",
        stores: "url('/src/assets/background/bg-stores.svg')",
        new: "url('/src/assets/background/new-product.svg')",
        search: "url('/src/assets/background/bg-search.svg')",
        faq: "url('/src/assets/background/bg-FAQ.svg')",
        header: "url('/src/assets/background/bg-cart header.svg')",
      },
      backgroundPosition: {
        top4: "center bottom 56rem",
      },
      width: {
        512: "800px",
        500: "650px",
        400: "500px",
        150: "400px",
      },
      height: {
        512: "600px",
        150: "400px",
        340: "343px",
      },
      boxShadow: {
        button: "1px -1px 31px 12px #ff0c3b",
      },
      screens: {
        xs: "320px",
        "3xl": "1800px",
      },
      keyframes: {
        rgbAnimation: {
          "0%": { stroke: "red" },
          "33%": { stroke: "green" },
          "66%": { stroke: "blue" },
          "100%": { stroke: "red" },
        },
      },
      animation: {
        rgbAnimation: "rgbAnimation 3s infinite ease-in-out",
      },
      padding: {
        100: "30rem",
      },
      gap: {
        100: "36rem",
        110: "40rem",
      },
    },
  },

  plugins: [require("tailwindcss-animated")],
};
