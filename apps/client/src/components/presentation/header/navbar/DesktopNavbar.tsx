import { navbarCategories } from "../../../../utils/CategoryList";
import CartWidget from "../../../containers/header/navbar/CartWidget";
import Categories from "../../../containers/main/Categories";
import Login from "../../../containers/header/navbar/Login";
import SearchBar from "../../../containers/header/navbar/SearchBar";
import Brand from "./Brand";

const DesktopNavbar = () => {
  return (
    <nav
      className={`w-full h-24 flex justify-between items-center bg-neutral-900 transition duration-500`}
    >
      <div className='flex gap-x-24 ms-10 me-0'>
        <Brand />
        <Categories categories={navbarCategories} textColor={"text-slate-50"} />
      </div>

      <div className='flex items-center gap-x-10 ms-0 me-10'>
        <SearchBar />
        <div className='flex items-center gap-x-10'>
          <Login />
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;