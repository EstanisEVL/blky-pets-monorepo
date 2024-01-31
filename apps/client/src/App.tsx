import { Toaster } from "react-hot-toast";
import Footer from "./components/presentation/footer/Footer";
import Header from "./components/containers/header/Header";
import Main from "./components/presentation/main/Main";

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
