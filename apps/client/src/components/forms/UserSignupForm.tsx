import { ReactEventHandler, useState } from "react";
import FormLink from "./links/FormLink";
import FormInput from "./inputs/FormInput";
import ButtonIndex from "../buttons/ButtonIndex";
import Title from "../Title";

type UserSignupFormPropsType = {
  handleUserLogin: ReactEventHandler;
};

const UserSignupForm = ({ handleUserLogin }: UserSignupFormPropsType) => {
  const API_URL: string = "http://localhost:8080/api";
  const INITIAL_USER_STATE = {
    first_name: "",
    last_name: "",
    email: "",
    age: "",
    password: "",
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState(INITIAL_USER_STATE);
  // SEGUIR ACÁ: CORREGIR ERRORES Y MEJORAR FUNCIONAMIENTO:
  // AGREGAR ESTADO SUCCESS Y HACER QUE RENDERICE EL LOGIN UNA VEZ QUE EL USUARIO SE REGISTRA

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // Pasar la petición a un contexto e importarla acá o que eso se haga desde el login
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
      .then((data) => {
        if (data.statusCode === 400) {
          setError(data.message);
        } else {
          // Limpiar formulario y objeto userInfo
          // Ir al login tras avisarle al usuario que el registro fue exitoso y ahora debe iniciar sesión

          setError("");
          console.log(data);
        }
      })
      .catch((err) => setError(`Error: ${err}`))
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = e.target.id;

    switch (property) {
      case "first_name":
        setUserInfo({ ...userInfo, first_name: e.target.value });
        break;
      case "last_name":
        setUserInfo({ ...userInfo, last_name: e.target.value });
        break;
      case "email":
        setUserInfo({ ...userInfo, email: e.target.value });
        break;
      case "age":
        setUserInfo({ ...userInfo, age: e.target.value });
        break;
      case "password":
        setUserInfo({ ...userInfo, password: e.target.value });
        break;
    }
  };

  return (
    <div className='min-w-[500px] max-w-md'>
      <Title text={"Registro"} />
      {loading ? (
        // CAMBIAR A COMPONENTE LOADING REUTILIZABLE:
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4 min-w-sm'>
            <FormInput
              label={"Nombre"}
              input={"text"}
              id={"first_name"}
              text={"Ingresa tu nombre..."}
              isRequired={true}
              onChange={handleChange}
            />

            <FormInput
              label={"Apellido"}
              input={"text"}
              id={"last_name"}
              text={"Ingresa tu apellido..."}
              isRequired={true}
              onChange={handleChange}
            />

            <FormInput
              label={"Correo electrónico"}
              input={"email"}
              id={"email"}
              text={"Ingresa tu correo electrónico..."}
              isRequired={true}
              onChange={handleChange}
            />

            <FormInput
              label={"Edad"}
              input={"number"}
              id={"age"}
              text={"Ingresa tu edad..."}
              isRequired={true}
              onChange={handleChange}
            />

            <FormInput
              label={"Contraseña"}
              input={"password"}
              id={"password"}
              text={"Ingresa tu contraseña..."}
              isRequired={true}
              onChange={handleChange}
              message={
                "La contraseña debe tener al menos 8 caracteres, y contener por lo menos una minúscula, una mayúscula, un número y un caracter especial (@$!%*?&)."
              }
            />

            {/* REVISAR ESTADO ERROR, SI SE PUEDE CAMBIAR POR UN BOOLEANO Y ENVIAR UN MENSAJE ACORDE A CADA ERROR DE OTRA FORMA */}
            {/* CAMBIAR ERROR A COMPONENTE ERROR REUTILIZABLE */}
            {error && (
              <div className='flex justify-center my-4'>
                <p className='text-red-500'>{error}</p>
              </div>
            )}
            <div className='flex justify-center'>
              <ButtonIndex.EnterBtn text={"Enviar"} />
            </div>
          </div>
        </form>
      )}

      <div className='text-end mt-6'>
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
