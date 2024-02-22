import { useState } from "react";
import useUserData from "../../../hooks/useUserData";
import { Cart, Product } from "../../../interfaces/interface.index";
import ProductCard from "../../presentation/main/ProductCard";
import toast from "react-hot-toast";
import Loader from "../../presentation/loader/Loader";
import useProducts from "../../../hooks/useProducts";

const URL: string = String(import.meta.env.VITE_API_URL);

const ProductContainer = () => {
  const { userData } = useUserData();
  const info = userData;
  const { loading, products } = useProducts();
  const [cart, setCart] = useState<Cart | undefined>();
  const [loadingCart, setLoadingCart] = useState(false);

  const addProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cid = info?.carts[0]._id;
    const pid = e.currentTarget.getAttribute("data-product-id");

    if (!cid) {
      toast.error("Log in to add a product to your cart.");
      return;
    }

    setLoadingCart(true);

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
        setLoadingCart(false);
      });
  };

  return (
    <div className='min-h-[300px] flex flex-row flex-wrap justify-center gap-6'>
      {!loading ? (
        products?.map((product: Product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              handleClick={addProduct}
            />
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductContainer;
