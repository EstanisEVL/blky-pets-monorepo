import ButtonIndex from "../buttons/ButtonIndex";
import FormInput from "./inputs/FormInput";

const AdminLoginForm = () => {
  const API_URL: string = "http://localhost:8080/api";

  return (
    <div className='min-w-[500px]'>
      <form action={`${API_URL}/auth/admin-login`} method='post'>
        <div className='flex flex-col gap-2'>
          <FormInput
            label={"Correo electrónico:"}
            input={"email"}
            text={"Ingresa tu correo electrónico"}
            isRequired={true}
          />
          <FormInput
            label={"Contraseña:"}
            input={"password"}
            text={"Ingresa tu contraseña"}
            isRequired={true}
          />
        </div>

        <div className='flex justify-center mt-10'>
          <ButtonIndex.EnterBtn text={"Ingresar"} />
        </div>
      </form>
    </div>
  );
};

export default AdminLoginForm;
