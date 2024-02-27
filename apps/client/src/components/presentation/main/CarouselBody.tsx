import { ReactElement } from "react";
import { Product } from "../../../interfaces/interface.index";
import CarouselSlide from "./CarouselSlide";
import Loader from "../loader/Loader";
import ErrorBox from "../error/ErrorBox";

type CarouselBodyPropsType = {
  slides: Product[] | undefined;
  loading: boolean;
  error: string;
};

const CarouselBody = ({
  slides,
  loading,
  error,
}: CarouselBodyPropsType): ReactElement => {
  return (
    <div className='min-h-[300px] flex justify-center items-center gap-6 mb-10 mx-9'>
      {error && <ErrorBox error={error} />}
      {loading ? (
        <Loader />
      ) : (
        slides?.map((slide: Product) => {
          return <CarouselSlide key={slide._id} product={slide} />;
        })
      )}
    </div>
  );
};

export default CarouselBody;
