import { useEffect, useState } from "react";
import useUserData from "../../../../hooks/useUserData";
import Title from "../../../Title";
import { Cart as CartInterface } from "../../../../interfaces/cart.interface";
import ProductInCartDetail from "./ProductInCartDetail";
import ButtonIndex from "../../../buttons/ButtonIndex";

const API_URL: string = "http://localhost:8080/api";

const Cart = () => {
  const { userData } = useUserData();
  const info = userData;
  const [cart, setCart] = useState<CartInterface | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cid = info?.carts[0]._id;

    if (cid) {
      setLoading(true);

      fetch(`${API_URL}/carts/${cid}`)
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  const addProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cid = info?.carts[0]._id;
    const pid = e.currentTarget.getAttribute("data-product-id");

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

  const removeProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cid = info?.carts[0]._id;
    const pid = e.currentTarget.getAttribute("data-product-id");

    fetch(`${API_URL}/carts/${cid}/products/${pid}`, {
      method: "DELETE",
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
      .finally(() => console.log("Producto quitado."));
  };

  const deleteProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cid = info?.carts[0]._id;
    const pid = e.currentTarget.getAttribute("data-product-id");

    console.log(cid, pid);
  };

  // Que no se borre todo el carrito cuando sólo se remueve un producto

  return (
    // MEJORAR DISEÑO DE COMPONENTE CART:

    <div className='h-full w-4/6 py-8 flex flex-col'>
      <div className='flex justify-between'>
        <p className='font-kanit'>{info?.name}</p>
        <p className='font-kanit'>{info?.email}</p>
      </div>

      <div className='mt-10'>
        <div className='mb-10'>
          <Title text={"Carrito"} />
        </div>

        <div className='flex flex-col gap-6 overflow-y-scroll'>
          {/* AGREGAR EL LOADER PARA QUE NO MUESTRE QUE EL CARRITO ESTÁ VACÍO SI NO CARGÓ */}
          {!loading && cart && cart?.products ? (
            cart.products.map((product) => {
              return (
                <ProductInCartDetail
                  key={product._id}
                  product={product}
                  handleAdd={addProduct}
                  handleRemove={removeProduct}
                  handleDelete={deleteProduct}
                />
              );
            })
          ) : (
            <h3>El carrito está vacío.</h3>
          )}
        </div>
      </div>

      <div className='mt-20 text-center'>
        <ButtonIndex.PurchaseBtn text={"Comprar"} />
      </div>
    </div>
  );
};

export default Cart;
