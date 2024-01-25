import { useEffect, useState } from "react";
import Banner from "../Banner";
import Navbar from "./navbar/Navbar";

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
          height={"h-16"}
          fsize={"text-lg"}
          text={
            "Envío gratis a todo el país en compras mayores a $6.000 | Hasta 3 cuotas sin interés con todos los bancos | Retiros gratis por Saavedra, CABA"
          }
          color={"text-black-500"}
          bgColor={"bg-yellow-300"}
        />
      )}

      <Navbar />
    </header>
  );
};

export default Header;
