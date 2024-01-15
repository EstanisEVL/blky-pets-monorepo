import { useState } from "react";
import ButtonIndex from "../buttons/ButtonIndex";
import FormInput from "./inputs/FormInput";
import Title from "../Title";

const AdminLoginForm = () => {
  const API_URL: string = "http://localhost:8080/api";
  const INITIAL_ADMIN_STATE = {
    email: "",
    password: "",
  };

  const [adminInfo, setAdminInfo] = useState(INITIAL_ADMIN_STATE);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    fetch(`${API_URL}/auth/admin-login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(adminInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 401) {
          setError(data.message);
        } else if (data.statusCode === 404) {
          setError(data.message);
        } else {
          // Limpiar formulario y objeto userInfo
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
        setAdminInfo({ ...adminInfo, email: e.target.value });
        break;

      case "password":
        setAdminInfo({ ...adminInfo, password: e.target.value });
        break;
    }
  };

  return (
    <div className='min-w-[500px] max-w-md'>
      <Title text={"Iniciar sesión (admin)"} />

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
              text={"Ingresa tu correo electrónico"}
              isRequired={true}
              onChange={handleChange}
            />
            <FormInput
              label={"Contraseña:"}
              input={"password"}
              id={"password"}
              text={"Ingresa tu contraseña"}
              isRequired={true}
              onChange={handleChange}
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
            <ButtonIndex.EnterBtn text={"Ingresar"} />
          </div>
        </form>
      )}
    </div>
  );
};

export default AdminLoginForm;
