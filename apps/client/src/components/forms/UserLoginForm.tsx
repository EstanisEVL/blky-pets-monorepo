import ButtonIndex from "../buttons/ButtonIndex";
import FormInput from "./inputs/FormInput";
import FormLink from "./links/FormLink";

const UserLoginForm = () => {
  // AGREGAR COMPONENTES LINKS (QUE ALTERAN EL LOGIN STATUS?)

  return (
    <div>
      <form action='/api/v1/sessions/login' method='post'>
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
        <div className='flex flex-col gap-2 mt-6'>
          <FormLink
            pText={"¿No estás registrado? Registrate haciendo "}
            aText={"click aquí"}
            href={"#"}
          />
          <FormLink
            pText={"¿Olvidaste tu contraseña? Genera una nueva haciendo "}
            aText={"click aquí"}
            href={"#"}
          />
        </div>

        <div className='flex justify-center mt-10'>
          <ButtonIndex.EnterBtn text={"Ingresar"} />
        </div>
      </form>
    </div>
  );
};

export default UserLoginForm;
