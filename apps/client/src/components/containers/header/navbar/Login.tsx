import { ReactElement, useState } from "react";
import loginIcon from "../../../../assets/login.svg";
import BaseModalWrapper from "../../../modal/BaseModalWrapper";
import ButtonIndex from "../../../buttons/ButtonIndex";

// AGREGAR LINK O NAVLINK DE REACT ROUTER DOM

// Esto debe llevar a un componente que maneje la lógica de abrir un modal para realizar el proceso de incio de sesión.

// Diferenciará entre login de usuario y de admin, y mostrará el contenido acorde a cada uno
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
