import { createContext } from "react";
import { UseProductsContextType } from "../components/providers/ProductsProvider";

const initContextState: UseProductsContextType = { products: [] };

const Contexts = {
  CarouselContext: createContext([]),
  CartContext: createContext([]),
  StoreContext: createContext<UseProductsContextType>(initContextState),
  UserContext: createContext({}),
};

export default Contexts;
