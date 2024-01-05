import { useContext } from "react";
import ProductsContext, {
  UseProductsContextType,
} from "../components/providers/ProductsProvider";

const useProducts = (): UseProductsContextType => {
  return useContext(ProductsContext);
};

export default useProducts;
