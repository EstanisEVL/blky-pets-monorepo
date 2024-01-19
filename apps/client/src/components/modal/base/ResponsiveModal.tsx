import { ReactNode } from "react";
import MediaQuery from "react-responsive";
import DesktopModal from "./DesktopModal";
import MobileModal from "./MobileModal";

type ResponsiveModalPropsType = {
  content?: ReactNode;
  onBackdropClick: () => void;
};

const ResponsiveModal = ({
  content,
  onBackdropClick,
}: ResponsiveModalPropsType) => {
  return (
    <MediaQuery minWidth={580}>
      {(matches) =>
        matches ? (
          <DesktopModal content={content} onBackdropClick={onBackdropClick} />
        ) : (
          <MobileModal content={content} onBackdropClick={onBackdropClick} />
        )
      }
    </MediaQuery>
  );
};

export default ResponsiveModal;
