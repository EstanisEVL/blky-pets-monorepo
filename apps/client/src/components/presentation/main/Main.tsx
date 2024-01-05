import Store from "../../containers/main/Store";
import Banner from "../Banner";
import Hero from "./Hero";

import heroImg from "../../../assets/hero-bg.png";
import Categories from "../header/navbar/Categories";
import BigImgBanner from "./BigImgBanner";
import Carousel from "../../containers/main/Carousel";
import Newsletter from "./Newsletter";

const Main = () => {
  return (
    <main>
      <Hero
        img={heroImg}
        h1Text={"New collar prints"}
        pText={"For full color dogs"}
        btnText={"View all"}
      />
      <Categories />
      <Banner
        height={"h-36"}
        fsize={"text-4xl"}
        text={"Don´t be the last to know - Shop our new collection"}
        color={"text-white"}
        bgColor={"bg-cyan-500"}
      />

      <BigImgBanner />
      <Carousel />
      <Banner
        height={"h-36"}
        fsize={"text-4xl"}
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
