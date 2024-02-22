import { createContext } from "react";
import { UseProductsContextType } from "../components/providers/ProductsProvider";

const initContextState: UseProductsContextType = {
  loading: true,
  products: [],
};

const Contexts = {
  CartContext: createContext([]),
  StoreContext: createContext<UseProductsContextType>(initContextState),
  UserContext: createContext({}),
};

export default Contexts;
