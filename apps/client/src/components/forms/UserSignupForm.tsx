import { ReactEventHandler, useState } from "react";
import FormLink from "./links/FormLink";
import FormInput from "./inputs/FormInput";
import ButtonIndex from "../buttons/ButtonIndex";

type UserSignupFormPropsType = {
  handleUserLogin: ReactEventHandler;
};

const UserSignupForm = ({ handleUserLogin }: UserSignupFormPropsType) => {
  const API_URL: string = "http://localhost:8080/api";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = {
    first_name: firstName,
    last_name: lastName,
    email,
    age,
    password,
  };

  // Corregir tipado de e
  const handleSubmit = (e) => {
    e.preventDefault();

    // Pasar la petición a un contexto e importarla acá

    fetch(`${API_URL}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // Revisar si se puede hacer una función reutilizable para el onChange

  return (
    <div className='min-w-[500px]'>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Nombre:"}
          input={"text"}
          id={"first_name"}
          text={"Ingresa tu nombre..."}
          isRequired={true}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <FormInput
          label={"Apellido:"}
          input={"text"}
          id={"last_name"}
          text={"Ingresa tu apellido..."}
          isRequired={true}
          onChange={(e) => setLastName(e.target.value)}
        />

        <FormInput
          label={"Correo electrónico:"}
          input={"email"}
          id={"email"}
          text={"Ingresa tu correo electrónico..."}
          isRequired={true}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          label={"Edad:"}
          input={"number"}
          id={"age"}
          text={"Ingresa tu edad..."}
          isRequired={true}
          onChange={(e) => setAge(e.target.value)}
        />

        <FormInput
          label={"Contraseña:"}
          input={"password"}
          id={"password"}
          text={"Ingresa tu contraseña..."}
          isRequired={true}
          onChange={(e) => setPassword(e.target.value)}
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
