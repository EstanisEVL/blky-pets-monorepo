import { ReactNode } from "react";
import ResponsiveModal from "./ResponsiveModal";

type BaseModalWrapperPropsType = {
  isVisible: boolean;
  content?: ReactNode;
  onBackdropClick: () => void;
};

const BaseModalWrapper = ({
  isVisible,
  content,
  onBackdropClick,
}: BaseModalWrapperPropsType) => {
  return isVisible ? (
    <ResponsiveModal content={content} onBackdropClick={onBackdropClick} />
  ) : null;
};

export default BaseModalWrapper;
