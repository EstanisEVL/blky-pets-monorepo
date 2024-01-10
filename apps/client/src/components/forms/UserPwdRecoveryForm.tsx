import { ReactEventHandler } from "react";
import FormLink from "./links/FormLink";
import ButtonIndex from "../buttons/ButtonIndex";
import FormInput from "./inputs/FormInput";

type UserPwdRecoveryFormPropsType = {
  handleUserLogin: ReactEventHandler;
  handleUserSignup: ReactEventHandler;
};

const UserPwdRecoveryForm = ({
  handleUserLogin,
  handleUserSignup,
}: UserPwdRecoveryFormPropsType) => {
  const API_URL: string = "http://localhost:8080/api";

  return (
    <div>
      <form action={`${API_URL}/password/new`} method='post'>
        <div>
          <p className='text-sm text-gray-500 mb-6'>
            Ingresa tu correo electrónico y te enviaremos un link para que
            reestablezcas tu contraseña.
          </p>
        </div>

        <FormInput
          label={"Correo electrónico:"}
          input={"email"}
          id={"email"}
          text={"Ingresa tu correo electrónico..."}
          isRequired={true}
        />

        <div className='flex justify-center mt-10'>
          <ButtonIndex.EnterBtn text={"Recibir email"} />
        </div>
      </form>

      <div className='flex flex-col gap-2 mt-6'>
        <FormLink
          text={"¿Ya tienes tu usuario? Inicia sesión haciendo "}
          btnText={"click aquí"}
          handleClick={handleUserLogin}
        />
        <FormLink
          text={"¿No estás registrado? Registrate haciendo "}
          btnText={"click aquí"}
          handleClick={handleUserSignup}
        />
      </div>
    </div>
  );
};

export default UserPwdRecoveryForm;
