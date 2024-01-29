import MobileMenu from "./MobileMenu";

type BaseMenuWrapperPropsType = {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const BaseMenuWrapper = ({
  isVisible,
  setVisible,
}: BaseMenuWrapperPropsType) => {
  return isVisible ? <MobileMenu setVisible={setVisible} /> : null;
};

export default BaseMenuWrapper;
