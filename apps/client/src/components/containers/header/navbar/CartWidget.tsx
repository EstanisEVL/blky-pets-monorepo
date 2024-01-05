import cartIcon from "../../../../assets/cart.svg";

// AGREGAR LINK O NAVLINK DE REACT ROUTER DOM

// Agregar componente que maneje la lógica del carrito, abriendo un modal que muestre los productos que tiene el usuario en su carrito (si ya inició sesión)

// Si no inició sesión lo redirige al login
const CartWidget = () => {
  return (
    <div>
      <a href='#'>
        <img src={cartIcon} alt='Cart icon' />
      </a>
    </div>
  );
};

export default CartWidget;
