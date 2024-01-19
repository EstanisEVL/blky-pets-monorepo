import { ReactNode } from "react";
import ResponsiveCartModal from "./ResponsiveCartModal";

type BaseCartModalWrapperPropsType = {
  isVisible: boolean;
  content?: ReactNode;
  onBackdropClick: () => void;
};

const BaseCartModalWrapper = ({
  isVisible,
  content,
  onBackdropClick,
}: BaseCartModalWrapperPropsType) => {
  return isVisible ? (
    <ResponsiveCartModal content={content} onBackdropClick={onBackdropClick} />
  ) : null;
};

export default BaseCartModalWrapper;
