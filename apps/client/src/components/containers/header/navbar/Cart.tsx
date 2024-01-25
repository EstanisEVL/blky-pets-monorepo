import { useEffect, useState } from "react";
import useUserData from "../../../../hooks/useUserData";
import Title from "../../../Title";
import { Cart as CartInterface } from "../../../../interfaces/cart.interface";
import ProductInCartDetail from "../../../presentation/header/navbar/ProductInCartDetail";
import ButtonIndex from "../../../buttons/ButtonIndex";

const API_URL: string = "http://localhost:8080/api";

const Cart = () => {
  const { userData } = useUserData();
  const info = userData;
  // Corregir: pasar cart a un contexto y usarlo desde ahí
  const [cart, setCart] = useState<CartInterface | undefined>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const fullPrice = cart?.products.reduce(
    (acc, product) => acc + product.quantity * product.price,
    0
  );

  useEffect(() => {
    const cid = info?.carts[0]._id;

    if (cid) {
      setLoading(true);

      fetch(`${API_URL}/carts/${cid}`)
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, []);

  // Pasar todos los métodos a un archivo separado (al contexto?):
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
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
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
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const deleteProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cid = info?.carts[0]._id;
    const pid = e.currentTarget.getAttribute("data-product-id");

    fetch(`${API_URL}/carts/${cid}/products/${pid}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => setCart(data.updatedCart))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const confirmPurchase = () => {
    const cid = info?.carts[0]._id;

    if (cart?.products.length === 0) {
      setError("Error - Cart is empty");

      return;
    }

    fetch(`${API_URL}/carts/${cid}/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

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
          {!loading && cart && cart.products.length ? (
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
            // QUE SÓLO AVISE QUE ESTÁ VACÍO CUANDO NO HAY PRODUCTOS EN EL CARRITO
            <div className='flex justify-center'>
              <h3 className='text-lg font-kanit'>El carrito está vacío.</h3>
            </div>
          )}
        </div>
      </div>

      {/* CAMBIAR ERROR A COMPONENTE ERROR REUTILIZABLE */}
      {error && (
        <div className='flex justify-center my-4'>
          <p className='text-red-500'>{error}</p>
        </div>
      )}

      {/* CAMBIAR A COMPONENTE DETALLE DE COMPRA */}
      {cart?.products.length !== 0 && (
        <div className='w-full flex justify-end mt-10'>
          <p className='font-kanit'>
            Total de tu compra:{" "}
            <span className='font-bold'>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(Number(fullPrice))}
            </span>
          </p>
        </div>
      )}

      <div className='mt-20 text-center'>
        <ButtonIndex.PurchaseBtn
          text={"Comprar"}
          handleClick={confirmPurchase}
        />
      </div>
    </div>
  );
};

export default Cart;
