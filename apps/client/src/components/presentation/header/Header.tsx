import Banner from "../Banner";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return (
    <header>
      <Banner
        height={"h-16"}
        fsize={"text-lg"}
        text={
          "Envío gratis a todo el país en compras mayores a $6.000 | Hasta 3 cuotas sin interés con todos los bancos | Retiros gratis por Saavedra, CABA"
        }
        color={"text-black-500"}
        bgColor={"bg-yellow-300"}
      />

      <Navbar />
    </header>
  );
};

export default Header;
