import { ReactElement } from "react";
import ButtonIndex from "../buttons/ButtonIndex";

type CarouselArrowPropType = {
  direction: string;
  handleClick: () => void;
};

const CarouselArrow = ({
  direction,
  handleClick,
}: CarouselArrowPropType): ReactElement => {
  return (
    <ButtonIndex.CarouselBtn
      direction={direction}
      handleClick={handleClick}
      icon={direction && direction === "left" ? "<" : ">"}
    />
  );
};

export default CarouselArrow;
