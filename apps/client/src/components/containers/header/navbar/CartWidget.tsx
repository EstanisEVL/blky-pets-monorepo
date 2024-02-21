import { useState } from "react";
import cartIcon from "../../../../assets/cart/cart.svg";
import useUserData from "../../../../hooks/useUserData";
import ButtonIndex from "../../../buttons/ButtonIndex";
import BaseCartModalWrapper from "../../../modal/cart/BaseCartModalWrapper";
import Cart from "./Cart";

const CartWidget = () => {
  const { loggedIn } = useUserData();
  const [open, setOpen] = useState(false);
  const [hasProducts, setHasProducts] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ButtonIndex.CartWidgetBtn
        handleClick={toggleModal}
        icon={cartIcon}
        disabled={!loggedIn ? true : false}
        hasProducts={hasProducts}
      />
      {
        <BaseCartModalWrapper
          isVisible={open}
          onBackdropClick={toggleModal}
          content={<Cart />}
        />
      }
    </div>
  );
};

export default CartWidget;
