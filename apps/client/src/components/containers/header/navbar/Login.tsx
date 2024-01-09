import { ReactElement, useState } from "react";
import loginIcon from "../../../../assets/login.svg";
import BaseModalWrapper from "../../../modal/BaseModalWrapper";
import ButtonIndex from "../../../buttons/ButtonIndex";

const Login = (): ReactElement => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      <ButtonIndex.LoginBtn handleClick={toggleModal} icon={loginIcon} />
      <BaseModalWrapper isVisible={open} onBackdropClick={toggleModal} />
    </div>
  );
};

export default Login;
