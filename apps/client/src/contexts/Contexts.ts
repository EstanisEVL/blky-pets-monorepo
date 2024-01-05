import React from "react";
import { UseProductsContextType } from "../components/providers/ProductsProvider";

const initContextState: UseProductsContextType = { products: [] };
// REVISAR SI SE UNEN LOS CONTEXTOS DEL CARRUSEL Y LA TIENDA:

const Contexts = {
  CarouselContext: React.createContext([]),
  CartContext: React.createContext([]),
  StoreContext: React.createContext<UseProductsContextType>(initContextState),
  UserContext: React.createContext([]),
};

export default Contexts;
