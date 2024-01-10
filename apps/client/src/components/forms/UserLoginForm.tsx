import { ReactEventHandler } from "react";
import ButtonIndex from "../buttons/ButtonIndex";
import FormInput from "./inputs/FormInput";
import FormLink from "./links/FormLink";

type UserLoginFormPropsType = {
  handleUserSignup: ReactEventHandler;
  handleUserPwdRecovery: ReactEventHandler;
};

const UserLoginForm = ({
  handleUserSignup,
  handleUserPwdRecovery,
}: UserLoginFormPropsType) => {
  const API_URL: string = "http://localhost:8080/api";

  return (
    <div className='min-w-[500px]'>
      <form action={`${API_URL}/auth/login`} method='post'>
        <div className='flex flex-col gap-2'>
          <FormInput
            label={"Correo electrónico:"}
            input={"email"}
            id={"email"}
            text={"Ingresa tu correo electrónico..."}
            isRequired={true}
          />
          <FormInput
            label={"Contraseña:"}
            input={"password"}
            id={"password"}
            text={"Ingresa tu contraseña..."}
            isRequired={true}
          />
        </div>

        <div className='flex justify-center mt-10'>
          <ButtonIndex.EnterBtn text={"Ingresar"} />
        </div>
      </form>
      <div className='flex flex-col gap-2 mt-6'>
        <FormLink
          text={"¿No estás registrado? Registrate haciendo "}
          btnText={"click aquí"}
          handleClick={handleUserSignup}
        />
        <FormLink
          text={"¿Olvidaste tu contraseña? Genera una nueva haciendo "}
          btnText={"click aquí"}
          handleClick={handleUserPwdRecovery}
        />
      </div>
    </div>
  );
};

export default UserLoginForm;
