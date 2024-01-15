import { ReactEventHandler, useState } from "react";
import FormLink from "./links/FormLink";
import ButtonIndex from "../buttons/ButtonIndex";
import FormInput from "./inputs/FormInput";
import Title from "../Title";

type UserPwdRecoveryFormPropsType = {
  handleUserLogin: ReactEventHandler;
  handleUserSignup: ReactEventHandler;
};

const UserPwdRecoveryForm = ({
  handleUserLogin,
  handleUserSignup,
}: UserPwdRecoveryFormPropsType) => {
  const API_URL: string = "http://localhost:8080/api";
  const INITIAL_USER_STATE = {
    email: "",
  };
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState(INITIAL_USER_STATE);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    // Pasar la petición a un contexto e importarla acá o que eso se haga desde el login
    fetch(`${API_URL}/auth/password/new`, {
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
        } else if (data.statusCode === 404) {
          setError(data.message);
        } else {
          // Limpiar formulario y objeto userInfo
          // Enviarle al usuario un mensaje para que revise su correo electrónico para seguir con el proceso
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
      case "email":
        setUserInfo({ ...userInfo, email: e.target.value });
        break;
    }
  };

  return (
    <div className='min-w-[500px] max-w-md'>
      <Title text={"Recuperar contraseña"} />

      {loading ? (
        // CAMBIAR A COMPONENTE LOADING REUTILIZABLE:
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-6 mt-6'>
            <FormInput
              label={"Correo electrónico:"}
              input={"email"}
              id={"email"}
              text={"Ingresa tu correo electrónico..."}
              isRequired={true}
              onChange={handleChange}
              message={
                "Ingresa tu correo electrónico y te enviaremos un link para reestablecer tu contraseña."
              }
            />
          </div>
          {/* REVISAR ESTADO ERROR, SI SE PUEDE CAMBIAR POR UN BOOLEANO Y ENVIAR UN MENSAJE ACORDE A CADA ERROR DE OTRA FORMA */}
          {/* CAMBIAR ERROR A COMPONENTE ERROR REUTILIZABLE */}
          {error && (
            <div className='flex justify-center my-4'>
              <p className='text-red-500'>{error}</p>
            </div>
          )}

          <div className='flex justify-center mt-10'>
            <ButtonIndex.EnterBtn text={"Recibir email"} />
          </div>
        </form>
      )}

      <div className='flex flex-col items-end gap-2 mt-6'>
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
