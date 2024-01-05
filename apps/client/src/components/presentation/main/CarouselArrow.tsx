import { ReactElement } from "react";
import leftArrowIcon from "../../../assets/left-arrow.svg";
import rightArrowIcon from "../../../assets/right-arrow.svg";

type CarouselArrowPropType = {
  direction: string;
  handleClick: () => void;
};

const CarouselArrow = ({
  direction,
  handleClick,
}: CarouselArrowPropType): ReactElement => {
  return (
    <button
      onClick={handleClick}
      className={`w-12 h-12 bg-white/80 hover:bg-white rounded-full flex justify-center items-center absolute ${
        direction && direction === "left" ? "left-0" : "right-0"
      } z-10`}
    >
      <img
        src={direction && direction === "left" ? leftArrowIcon : rightArrowIcon}
        alt=''
      />
    </button>
  );
};

export default CarouselArrow;
