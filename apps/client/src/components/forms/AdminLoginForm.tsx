import ButtonIndex from "../buttons/ButtonIndex";
import FormInput from "./inputs/FormInput";

const AdminLoginForm = () => {
  return (
    <div>
      <form action='/api/v1/sessions/login' method='post'>
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

        <div>
          <ButtonIndex.EnterBtn text={"Ingresar"} />
        </div>
      </form>
    </div>
  );
};

export default AdminLoginForm;
