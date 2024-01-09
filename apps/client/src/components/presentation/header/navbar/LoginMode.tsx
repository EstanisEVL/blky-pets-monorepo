import { useState } from "react";
import ButtonIndex from "../../../buttons/ButtonIndex";
import AdminLoginForm from "../../../forms/AdminLoginForm";
import UserLoginForm from "../../../forms/UserLoginForm";

const LoginMode = () => {
  const INIT_STATE = "user";
  const [loginMode, setLoginMode] = useState(INIT_STATE);
  const handleAdminLogin = () => {
    setLoginMode("admin");
  };

  const handleUserLogin = () => {
    setLoginMode("user");
  };
  return (
    <div className='w-full h-full p-4 flex flex-col'>
      <div className='flex gap-10 mb-6'>
        <ButtonIndex.LoginModalBtn
          handleClick={handleAdminLogin}
          text={"admin login"}
        />
        <ButtonIndex.LoginModalBtn
          handleClick={handleUserLogin}
          text={"user login"}
        />
      </div>

      {/* pasarle el loginMode al userloginform o cambiar a componente register al hacer click en el link? */}
      <div className='flex flex-col justify-center items-center grow'>
        {loginMode === "admin" ? <AdminLoginForm /> : <UserLoginForm />}
      </div>
    </div>
  );
};

export default LoginMode;
