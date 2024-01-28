import MediaQuery from "react-responsive";
import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";

const ResponsiveCarousel = () => {
  return (
    <MediaQuery minWidth={640}>
      {(matches) => (matches ? <DesktopCarousel /> : <MobileCarousel />)}
    </MediaQuery>
  );
};

export default ResponsiveCarousel;
