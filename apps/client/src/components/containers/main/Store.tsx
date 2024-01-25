import { useState } from "react";
import useProducts from "../../../hooks/useProducts";
import useUserData from "../../../hooks/useUserData";
import { Cart } from "../../../interfaces/cart.interface";
import { Product } from "../../../interfaces/product.interface";
import ButtonIndex from "../../buttons/ButtonIndex";
import ProductCard from "../../presentation/main/ProductCard";
import StoreFilters from "../../presentation/main/StoreFilters";
import StoreTitle from "../../presentation/main/StoreTitle";

const API_URL: string = "http://localhost:8080/api";

const Store = () => {
  const { products } = useProducts();
  const { userData } = useUserData();
  const info = userData;
  // Corregir: pasar cart a un contexto y usarlo desde ahí
  const [cart, setCart] = useState<Cart | undefined>();

  const addProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cid = info?.carts[0]._id;
    const pid = e.currentTarget.getAttribute("data-product-id");

    // SEGUIR ACÁ: Que deshabilite al botón de agregar si no hay cid:
    // O agregar alertas elegantes para cuando se agrega o no hay cid:
    // Ver librería Toast
    if (!cid) return;

    fetch(`${API_URL}/carts/${cid}/products/${pid}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setCart(data.updatedCart))
      // Agregar estado de error y un loading para el finally()
      .catch((err) => console.log(err))
      .finally(() => console.log("Producto agregado."));
  };

  return (
    <section>
      <div className='flex justify-between mx-10 mt-16 font-kanit'>
        <StoreTitle title={"productos"} text={"/ Todos los productos"} />
        <StoreFilters />
      </div>

      <div className='flex justify-center flex-wrap gap-6'>
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
