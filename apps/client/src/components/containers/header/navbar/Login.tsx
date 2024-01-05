import loginIcon from "../../../../assets/login.svg";

// AGREGAR LINK O NAVLINK DE REACT ROUTER DOM

// Esto debe llevar a un componente que maneje la lógica de abrir un modal para realizar el proceso de incio de sesión.

// Diferenciará entre login de usuario y de admin
const Login = () => {
  return (
    <div>
      <a href='#'>
        <img src={loginIcon} alt='Login icon' />
      </a>
    </div>
  );
};

export default Login;
