import MediaQuery from "react-responsive";
import DesktopModal from "./DesktopModal";
import MobileModal from "./MobileModal";

type ResponsiveModalPropsType = {
  onBackdropClick: () => void;
};

const ResponsiveModal = ({ onBackdropClick }: ResponsiveModalPropsType) => {
  return (
    <MediaQuery minWidth={580}>
      {(matches) =>
        matches ? (
          <DesktopModal onBackdropClick={onBackdropClick} />
        ) : (
          <MobileModal onBackdropClick={onBackdropClick} />
        )
      }
    </MediaQuery>
  );
};

export default ResponsiveModal;
