import ButtonIndex from "../../presentation/buttons/ButtonIndex";
import StoreFilters from "../../presentation/main/StoreFilters";
import StoreTitle from "../../presentation/main/StoreTitle";
import ProductContainer from "./ProductContainer";

const Store = () => {
  return (
    <section id='store'>
      <div className='flex flex-col items-center sm:items-stretch sm:flex-row justify-between sm:mx-10 mt-16 font-kanit'>
        <StoreTitle title={"Our products"} text={"/ All products"} />
        <StoreFilters title={"filter"} text={"sort by"} />
      </div>

      <ProductContainer />

      <div className='text-center my-8'>
        <ButtonIndex.ShowMoreBtn text={"show more"} />
      </div>
    </section>
  );
};

export default Store;
