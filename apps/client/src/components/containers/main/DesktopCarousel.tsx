import { useEffect, useState } from "react";
import CarouselArrow from "../../presentation/main/CarouselArrow";
import CarouselBody from "../../presentation/main/CarouselBody";
import useProducts from "../../../hooks/useProducts";
import { Product } from "../../../interfaces/interface.index";

const DesktopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(4);
  const [slides, setSlides] = useState<Product[] | undefined>();
  const { products, loading, error } = useProducts();

  useEffect(() => {
    if (products) {
      setSlides(products.slice(currentIndex, lastIndex));
    }
  }, [products, currentIndex]);

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
    if (slides) {
      selectNewSlides(currentIndex, lastIndex, false);
    }
  };

  const handleNextSlide = () => {
    if (slides) {
      selectNewSlides(currentIndex, lastIndex);
    }
  };

  return (
    <div>
      <div className='flex justify-center items-center relative'>
        <CarouselArrow direction={"left"} handleClick={handlePrevSlide} />

        <CarouselBody slides={slides} loading={loading} error={error} />

        <CarouselArrow direction={"right"} handleClick={handleNextSlide} />
      </div>
    </div>
  );
};

export default DesktopCarousel;
