import useProducts from "../../../hooks/useProducts";
import { Product } from "../../../interfaces/product.interface";
import ProductCard from "../../presentation/main/ProductCard";
import ShowMoreBtn from "../../presentation/main/ShowMoreBtn";
import StoreFilters from "../../presentation/main/StoreFilters";
import StoreTitle from "../../presentation/main/StoreTitle";

const Store = () => {
  const { products } = useProducts();

  return (
    <section>
      <div className='flex justify-between mx-10 mt-16 font-kanit'>
        <StoreTitle title={"productos"} text={"/ Todos los productos"} />
        <StoreFilters />
      </div>

      <div className='flex justify-center flex-wrap gap-6'>
        {products?.map((product: Product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>

      <div className='text-center my-8'>
        <ShowMoreBtn text={"show more"} />
      </div>
    </section>
  );
};

export default Store;
