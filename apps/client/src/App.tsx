import { Toaster } from "react-hot-toast";
import Footer from "./components/presentation/footer/Footer";
import Header from "./components/containers/header/Header";
import Main from "./components/presentation/main/Main";

// SEGUIR ACÁ: PASAR TODOS LOS TO-DOS A UN ARCHIVO ANTES DE SUBIR EL PROYECTO (TAMBIÉN EN RAMA BACKEND)

// SI ES ADMIN, MOSTRAR TODOS LOS USUARIOS EXISTENTES EN LA BASE DE DATOS

// RECORDAR: INICIALIZAR LA API

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
