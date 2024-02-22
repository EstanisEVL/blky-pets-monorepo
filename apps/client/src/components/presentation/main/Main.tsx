import Store from "../../containers/main/Store";
import Banner from "../Banner";
import Hero from "./Hero";
import BannerCategories from "../header/navbar/BannerCategories";
import BigImgBanner from "./BigImgBanner";
import Newsletter from "./Newsletter";
import ResponsiveCarousel from "../../containers/main/ResponsiveCarousel";

const Main = () => {
  return (
    <main>
      <Hero
        height={"h-[578px]"}
        bgImage={"bg-[url('https://i.ibb.co/7zJg8KP/hero.jpg')]"}
        h1Text={"New collar prints"}
        pText={"For full color dogs"}
        btnText={"View all"}
      />
      <BannerCategories />
      <Banner
        height={"h-20 sm:h-36"}
        fsize={"text-sm sm:text-4xl"}
        text={"Don´t be the last to know - Shop our new collection!"}
        color={"text-white"}
        bgColor={"bg-cyan-500"}
      />
      <BigImgBanner
        bgImage={`bg-[url('https://i.ibb.co/4jTLtDY/big-banner.jpg')]`}
        height={"h-[578px]"}
        title={"blu lagoon"}
        text={"new print"}
        btnText={"shop now"}
      />
      <ResponsiveCarousel />
      <Banner
        height={"h-20 sm:h-36"}
        fsize={"text-sm sm:text-4xl"}
        text={"We’ve got the best accessories for your pets."}
        color={"text-white"}
        bgColor={"bg-rose-600"}
      />
      <Store />
      <Newsletter />
    </main>
  );
};

export default Main;
