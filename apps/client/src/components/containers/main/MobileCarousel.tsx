import { Suspense, useState } from "react";
import CarouselArrow from "../../presentation/main/CarouselArrow";
import CarouselBody from "../../presentation/main/CarouselBody";
import useProducts from "../../../hooks/useProducts";
import Loader from "../../presentation/loader/Loader";

const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(1);
  const { products } = useProducts();

  const slides = products.slice(currentIndex, lastIndex);

  const selectNewSlides = (
    startIndex: number,
    endIndex: number,
    next = true
  ) => {
    const condition = next ? lastIndex < products.length : currentIndex > 0;

    const nextCurrentIndex = next
      ? condition
        ? startIndex + 1
        : 0
      : condition
        ? startIndex - 1
        : products.length - 4;

    const nextLastIndex = next
      ? condition
        ? endIndex + 1
        : 4
      : condition
        ? endIndex - 1
        : products.length;

    setCurrentIndex(nextCurrentIndex);
    setLastIndex(nextLastIndex);
  };

  const handlePrevSlide = () => {
    selectNewSlides(currentIndex, lastIndex, false);
  };

  const handleNextSlide = () => {
    selectNewSlides(currentIndex, lastIndex);
  };

  return (
    <div>
      <div className='flex justify-center items-center relative'>
        <CarouselArrow direction={"left"} handleClick={handlePrevSlide} />

        <Suspense fallback={<Loader />}>
          <CarouselBody slides={slides} />
        </Suspense>

        <CarouselArrow direction={"right"} handleClick={handleNextSlide} />
      </div>
    </div>
  );
};

export default MobileCarousel;
