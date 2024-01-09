import ResponsiveModal from "./ResponsiveModal";

type BaseModalWrapperPropsType = {
  isVisible: boolean;
  onBackdropClick: () => void;
};

const BaseModalWrapper = ({
  isVisible,
  onBackdropClick,
}: BaseModalWrapperPropsType) => {
  return isVisible ? (
    <ResponsiveModal onBackdropClick={onBackdropClick} />
  ) : null;
};

export default BaseModalWrapper;
