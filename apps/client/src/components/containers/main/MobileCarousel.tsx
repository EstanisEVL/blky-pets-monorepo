import { useEffect, useState } from "react";
import CarouselArrow from "../../presentation/main/CarouselArrow";
import CarouselBody from "../../presentation/main/CarouselBody";
import useProducts from "../../../hooks/useProducts";
import { Product } from "../../../interfaces/interface.index";

const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(1);
  const { products, loading, error } = useProducts();
  const [slides, setSlides] = useState<Product[] | undefined>();

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
        : products.length - 1;

    const nextLastIndex = next
      ? condition
        ? endIndex + 1
        : 1
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

        <CarouselBody slides={slides} loading={loading} error={error} />

        <CarouselArrow direction={"right"} handleClick={handleNextSlide} />
      </div>
    </div>
  );
};

export default MobileCarousel;
