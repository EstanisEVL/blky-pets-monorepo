import MobileMenu from "./MobileMenu";

type BaseMenuWrapperPropsType = {
  isVisible: boolean;
};

const BaseMenuWrapper = ({ isVisible }: BaseMenuWrapperPropsType) => {
  return isVisible ? <MobileMenu /> : null;
};

export default BaseMenuWrapper;
