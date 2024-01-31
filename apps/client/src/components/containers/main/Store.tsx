import { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import useUserData from "../../../hooks/useUserData";
import { Cart } from "../../../interfaces/cart.interface";
import { Product } from "../../../interfaces/product.interface";
import ButtonIndex from "../../buttons/ButtonIndex";
import ProductCard from "../../presentation/main/ProductCard";
import StoreFilters from "../../presentation/main/StoreFilters";
import StoreTitle from "../../presentation/main/StoreTitle";
import toast from "react-hot-toast";

const URL: string = String(import.meta.env.VITE_API_URL);

const Store = () => {
  const { products } = useProducts();
  const { userData } = useUserData();
  const info = userData;
  const [cart, setCart] = useState<Cart | undefined>();
  const [loading, setLoading] = useState(false);

  const addProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cid = info?.carts[0]._id;
    const pid = e.currentTarget.getAttribute("data-product-id");

    if (!cid) {
      toast.error("Log in to add a product to your cart.");
      return;
    }

    setLoading(true);

    fetch(`${URL}/carts/${cid}/products/${pid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data.updatedCart);

        toast.success("Product succesfully added to your cart.");
      })
      .catch((err) => toast.error(err))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id='store'>
      <div className='flex flex-col items-center sm:items-stretch sm:flex-row justify-between sm:mx-10 mt-16 font-kanit'>
        <StoreTitle title={"Our products"} text={"/ All products"} />
        <StoreFilters title={"filter"} text={"dropdown filter"} />
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-6'>
        {products?.map((product: Product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              handleClick={addProduct}
            />
          );
        })}
      </div>

      <div className='text-center my-8'>
        <ButtonIndex.ShowMoreBtn text={"show more"} />
      </div>
    </section>
  );
};

export default Store;
