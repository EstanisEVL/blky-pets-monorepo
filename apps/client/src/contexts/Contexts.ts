import { createContext } from "react";
import { UseProductsContextType } from "../components/providers/ProductsProvider";

const initContextState: UseProductsContextType = { products: [] };
// REVISAR SI SE UNEN LOS CONTEXTOS DEL CARRUSEL Y LA TIENDA:

const Contexts = {
  CarouselContext: createContext([]),
  CartContext: createContext([]),
  StoreContext: createContext<UseProductsContextType>(initContextState),
  UserContext: createContext({}),
};

export default Contexts;
