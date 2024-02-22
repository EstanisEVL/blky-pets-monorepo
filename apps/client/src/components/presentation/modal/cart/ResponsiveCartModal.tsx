import { ReactNode } from "react";
import MediaQuery from "react-responsive";
import DesktopCartModal from "./DesktopCartModal";
import MobileCartModal from "./MobileCartModal";

type ResponsiveCartModalPropsType = {
  content: ReactNode;
  onBackdropClick: () => void;
};

const ResponsiveCartModal = ({
  content,
  onBackdropClick,
}: ResponsiveCartModalPropsType) => {
  return (
    <MediaQuery minWidth={640}>
      {(matches) =>
        matches ? (
          <DesktopCartModal
            content={content}
            onBackdropClick={onBackdropClick}
          />
        ) : (
          <MobileCartModal
            content={content}
            onBackdropClick={onBackdropClick}
          />
        )
      }
    </MediaQuery>
  );
};

export default ResponsiveCartModal;
