import MediaQuery from "react-responsive";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

type ResponsiveNavbarPropsType = {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
};

const ResponsiveNavbar = ({
  isVisible,
  setVisible,
  handleClick,
}: ResponsiveNavbarPropsType) => {
  return (
    <MediaQuery minWidth={640}>
      {(matches) =>
        matches ? (
          <DesktopNavbar setVisible={setVisible} />
        ) : (
          <MobileNavbar
            isVisible={isVisible}
            setVisible={setVisible}
            handleClick={handleClick}
          />
        )
      }
    </MediaQuery>
  );
};

export default ResponsiveNavbar;
