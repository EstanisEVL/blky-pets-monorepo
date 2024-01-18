import useUserData from "../../../../hooks/useUserData";
import Title from "../../../Title";

const Cart = () => {
  const { userData } = useUserData();
  const info = userData;

  return (
    // MEJORAR DISEÑO DE COMPONENTE CART:
    <div>
      <Title text={"Carrito"} />
      {info?.carts.length && (
        <ul>
          {info?.carts.map((cart) => {
            return <div key={cart._id}>{"Productos en el carrito: "}</div>;
          })}
        </ul>
      )}
      <p>{info?.name}</p>
      <p>{info?.email}</p>
    </div>
  );
};

export default Cart;
