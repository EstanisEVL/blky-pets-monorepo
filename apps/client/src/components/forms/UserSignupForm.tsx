import { ReactEventHandler } from "react";
import FormLink from "./links/FormLink";
import FormInput from "./inputs/FormInput";
import ButtonIndex from "../buttons/ButtonIndex";

type UserSignupFormPropsType = {
  handleUserLogin: ReactEventHandler;
};

const UserSignupForm = ({ handleUserLogin }: UserSignupFormPropsType) => {
  const API_URL: string = "http://localhost:8080/api";

  return (
    <div className='min-w-[500px]'>
      <form action={`${API_URL}/auth/sign-up`} method='post'>
        <FormInput
          label={"Nombre:"}
          input={"text"}
          id={"first_name"}
          text={"Ingresa tu nombre..."}
          isRequired={true}
        />

        <FormInput
          label={"Apellido:"}
          input={"text"}
          id={"last_name"}
          text={"Ingresa tu apellido..."}
          isRequired={true}
        />

        <FormInput
          label={"Correo electrónico:"}
          input={"email"}
          id={"email"}
          text={"Ingresa tu correo electrónico..."}
          isRequired={true}
        />

        <FormInput
          label={"Edad:"}
          input={"number"}
          id={"age"}
          text={"Ingresa tu edad..."}
          isRequired={true}
        />

        <FormInput
          label={"Contraseña:"}
          input={"password"}
          id={"password"}
          text={"Ingresa tu contraseña..."}
          isRequired={true}
          message={
            "La contraseña debe tener al menos 8 caracteres, y contener por lo menos una minúscula, una mayúscula, un número y un caracter especial (@$!%*?&)."
          }
        />

        <div className='flex justify-center mt-10'>
          <ButtonIndex.EnterBtn text={"Enviar"} />
        </div>
      </form>

      <div className='mt-6'>
        <FormLink
          text={"¿Ya tienes tu usuario? Inicia sesión haciendo "}
          btnText={"click aquí"}
          handleClick={handleUserLogin}
        />
      </div>
    </div>
  );
};

export default UserSignupForm;
