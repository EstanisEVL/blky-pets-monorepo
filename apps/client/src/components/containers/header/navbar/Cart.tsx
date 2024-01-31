import { useEffect, useState } from "react";
import useUserData from "../../../../hooks/useUserData";
import Title from "../../../presentation/Title";
import { Cart as CartInterface } from "../../../../interfaces/cart.interface";
import ProductInCartDetail from "../../../presentation/header/cart/ProductInCartDetail";
import ButtonIndex from "../../../buttons/ButtonIndex";
import CartPurchaseTotal from "../../../presentation/header/cart/CartPurchaseTotal";

const URL: string = String(import.meta.env.VITE_API_URL);

const Cart = () => {
  const { userData } = useUserData();
  const info = userData;
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

      fetch(`${URL}/carts/${cid}`)
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  }, []);

  const addProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cid = info?.carts[0]._id;
    const pid = e.currentTarget.getAttribute("data-product-id");

    fetch(`${URL}/carts/${cid}/products/${pid}`, {
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

    fetch(`${URL}/carts/${cid}/products/${pid}`, {
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

    fetch(`${URL}/carts/${cid}/products/${pid}/delete`, {
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
    const email = { email: String(info?.email) };

    if (cart?.products.length === 0) {
      setError("Error - Cart is empty");

      return;
    }

    fetch(`${URL}/carts/${cid}/purchase`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => setCart(data.updatedCart))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return (
    <div className='w-full h-full sm:w-4/6 p-8 sm:p-0 sm:py-8 flex flex-col'>
      <div className='mt-12 sm:ms-0 flex flex-wrap gap-y-4 justify-between'>
        <p className='sm:text-lg font-kanit font-medium'>{info?.name}</p>
        <p className='sm:text-lg font-kanit'>{info?.email}</p>
      </div>

      <div className='h-96 max-h-96 mt-4 sm:mt-10'>
        <div className='mb-4 sm:mb-10'>
          <Title text={"Cart"} />
        </div>

        <div className='max-h-56 sm:max-h-72 flex flex-col gap-6 overflow-y-scroll'>
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
            <div className='flex justify-center'>
              <h3 className='sm:text-lg font-kanit'>Your cart is empty.</h3>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className='flex justify-center my-4'>
          <p className='text-red-500'>{error}</p>
        </div>
      )}

      {cart?.products.length !== 0 && <CartPurchaseTotal amount={fullPrice} />}

      <div className='mt-4 sm:mt-20 text-center'>
        <ButtonIndex.PurchaseBtn text={"Buy"} handleClick={confirmPurchase} />
      </div>
    </div>
  );
};

export default Cart;
