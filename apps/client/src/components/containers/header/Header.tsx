import { useEffect, useState } from "react";
import Banner from "../../presentation/Banner";
import ResponsiveNavbar from "../../presentation/header/navbar/ResponsiveNavbar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 64) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={"w-full fixed top-0 z-20"}>
      {scrolled ? null : (
        <Banner
          height={"h-20 sm:h-16"}
          fsize={"text-sm sm:text-lg"}
          text={
            "Free shipping nationwide on purchases over $60 | Up to 3 interest-free fees with all banks | Free pick-up in Saavedra, CABA"
          }
          color={"text-black-500"}
          bgColor={"bg-yellow-300"}
        />
      )}

      <ResponsiveNavbar />
    </header>
  );
};

export default Header;