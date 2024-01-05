import { ReactElement } from "react";
import { Product } from "../../../interfaces/product.interface";
import CarouselSlide from "./CarouselSlide";

type CarouselBodyPropsType = {
  slides: Product[];
};

const CarouselBody = ({ slides }: CarouselBodyPropsType): ReactElement => {
  return (
    <div className='flex justify-center items-center gap-6 mb-10 mx-9'>
      {slides?.map((slide: any) => {
        return <CarouselSlide key={slide._id} product={slide} />;
      })}
    </div>
  );
};

export default CarouselBody;
