import { useState } from "react";
import cartIcon from "../../../../assets/cart.svg";
import useUserData from "../../../../hooks/useUserData";
import ButtonIndex from "../../../buttons/ButtonIndex";
import BaseCartModalWrapper from "../../../modal/cart/BaseCartModalWrapper";
import Cart from "../../../presentation/header/navbar/Cart";

const CartWidget = () => {
  const { loggedIn } = useUserData();
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ButtonIndex.CartWidgetBtn
        handleClick={toggleModal}
        icon={cartIcon}
        disabled={!loggedIn ? true : false}
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
