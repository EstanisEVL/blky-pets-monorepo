import { ReactElement, useState } from "react";
import ButtonIndex from "../../../buttons/ButtonIndex";
import AdminLoginForm from "../../../forms/AdminLoginForm";
import UserLoginForm from "../../../forms/UserLoginForm";
import UserSignupForm from "../../../forms/UserSignupForm";
import UserPwdRecoveryForm from "../../../forms/UserPwdRecoveryForm";

const LoginMode = (): ReactElement => {
  const INIT_STATE = "user";
  const [loginMode, setLoginMode] = useState(INIT_STATE);

  const handleAdminLogin = () => {
    setLoginMode("admin");
  };

  const handleUserLogin = () => {
    setLoginMode("user");
  };

  const handleUserSignup = () => {
    setLoginMode("sign-up");
  };

  const handleUserPwdRecovery = () => {
    setLoginMode("pwd-recovery");
  };

  return (
    <div className='w-full h-full p-4 flex flex-col'>
      <div className='flex gap-10 mb-6 max-w-lg'>
        <ButtonIndex.LoginModalBtn
          handleClick={handleAdminLogin}
          text={"admin"}
          active={loginMode === "admin" ? true : false}
        />
        <ButtonIndex.LoginModalBtn
          handleClick={handleUserLogin}
          text={"user"}
          active={loginMode === "user" ? true : false}
        />
      </div>

      <div className='flex flex-col justify-center items-center grow'>
        {loginMode === "admin" && <AdminLoginForm />}
        {loginMode === "user" && (
          <UserLoginForm
            handleUserSignup={handleUserSignup}
            handleUserPwdRecovery={handleUserPwdRecovery}
          />
        )}
        {loginMode === "sign-up" && (
          <UserSignupForm handleUserLogin={handleUserLogin} />
        )}
        {loginMode === "pwd-recovery" && (
          <UserPwdRecoveryForm
            handleUserLogin={handleUserLogin}
            handleUserSignup={handleUserSignup}
          />
        )}
      </div>
    </div>
  );
};

export default LoginMode;
