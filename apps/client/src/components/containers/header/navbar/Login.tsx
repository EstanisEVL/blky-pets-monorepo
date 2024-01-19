import { ReactElement, useEffect, useState } from "react";
import loginIcon from "../../../../assets/login.svg";
import logoutIcon from "../../../../assets/logout.svg";
import BaseModalWrapper from "../../../modal/base/BaseModalWrapper";
import ButtonIndex from "../../../buttons/ButtonIndex";
import LoginMode from "../../../presentation/header/navbar/LoginMode";
import useUserData from "../../../../hooks/useUserData";

const Login = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const { loggedIn, setLoggedIn } = useUserData();

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const userLogout = () => {
    if (loggedIn) {
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    if (!loggedIn) {
      localStorage.clear();
    }
    if (loggedIn) {
      setOpen(false);
    }
  }, [loggedIn]);

  return (
    <div>
      <ButtonIndex.LoginBtn
        handleClick={!loggedIn ? openModal : userLogout}
        icon={!loggedIn ? loginIcon : logoutIcon}
      />
      <BaseModalWrapper
        isVisible={open}
        onBackdropClick={closeModal}
        content={<LoginMode />}
      />
    </div>
  );
};

export default Login;
