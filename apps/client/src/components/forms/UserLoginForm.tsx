import ButtonIndex from "../buttons/ButtonIndex";
import FormInput from "./inputs/FormInput";
import FormLink from "./links/FormLink";

const UserLoginForm = () => {
  // COMPLETAR EL PROCESO DE LOGIN Y LUEGO VER SI SE MANTIENE EL REGISTRO Y LA RECUPERACIÓN DE CONTRASEÑA
  // AGREGAR COMPONENTES LINKS (QUE ALTERAN EL LOGIN STATUS?)
  const API_URL: string = "http://localhost:8080/api";

  return (
    <div className='min-w-[500px]'>
      <form action={`${API_URL}/auth/login`} method='post'>
        <div className='flex flex-col gap-2'>
          <FormInput
            label={"Correo electrónico:"}
            input={"email"}
            text={"Ingresa tu correo electrónico..."}
            isRequired={true}
          />
          <FormInput
            label={"Contraseña:"}
            input={"password"}
            text={"Ingresa tu contraseña..."}
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
