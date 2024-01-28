import MediaQuery from "react-responsive";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = () => {
  return (
    <MediaQuery minWidth={640}>
      {(matches) => (matches ? <DesktopNavbar /> : <MobileNavbar />)}
    </MediaQuery>
  );
};

export default ResponsiveNavbar;
