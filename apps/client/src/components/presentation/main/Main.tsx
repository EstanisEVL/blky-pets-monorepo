import Store from "../../containers/main/Store";
import Banner from "../Banner";
import Hero from "./Hero";

import Categories from "../header/navbar/Categories";
import bigBannerImg from "../../../assets/big-banner.jpg";
import BigImgBanner from "./BigImgBanner";
import Carousel from "../../containers/main/Carousel";
import Newsletter from "./Newsletter";

const Main = () => {
  return (
    <main>
      <Hero
        height={"578px"}
        h1Text={"New collar prints"}
        pText={"For full color dogs"}
        btnText={"View all"}
      />
      <Categories />
      <Banner
        height={"h-20 sm:h-36"}
        fsize={"text-sm sm:text-4xl"}
        text={"Don´t be the last to know - Shop our new collection!"}
        color={"text-white"}
        bgColor={"bg-cyan-500"}
      />

      <BigImgBanner
        image={bigBannerImg}
        height={"578px"}
        title={"blu lagoon"}
        text={"new print"}
        btnText={"shop now"}
      />
      <Carousel />
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
