import { navbarCategories } from "../../../../utils/CategoryList";
import CartWidget from "../../../containers/header/navbar/CartWidget";
import Login from "../../../containers/header/navbar/Login";
import SearchBar from "../../../containers/header/navbar/SearchBar";
import Categories from "../../../containers/main/Categories";

const MobileMenu = () => {
  return (
    <div className='h-screen px-16 flex flex-col gap-y-10 items-center bg-neutral-900 transiton duration-500'>
      <div className='w-full'>
        <Categories categories={navbarCategories} textColor={"text-slate-50"} />
      </div>

      <div className='w-full'>
        <SearchBar />
      </div>

      <div className='w-full mt-10 flex justify-between gap-10'>
        <Login />
        <CartWidget />
      </div>
    </div>
  );
};

export default MobileMenu;