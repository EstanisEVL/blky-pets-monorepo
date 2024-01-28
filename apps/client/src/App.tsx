import { Toaster } from "react-hot-toast";
import Footer from "./components/presentation/footer/Footer";
import Header from "./components/containers/header/Header";
import Main from "./components/presentation/main/Main";

// SEGUIR ACÁ: HACER RESPONSIVE

// PASAR TODOS LOS TO-DOS A UN ARCHIVO ANTES DE SUBIR EL PROYECTO

// SI ES ADMIN, MOSTRAR TODOS LOS USUARIOS EXISTENTES EN LA BASE DE DATOS

// RECORDAR: INICIALIZAR LA API

// AGREGAR ENRUTAMIENTO CON REACT-ROUTER-DOM

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Toaster position='bottom-right' />
    </>
  );
}

export default App;
