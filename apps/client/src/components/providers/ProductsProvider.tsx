import { ReactElement, useEffect, useState } from "react";
import Contexts from "../../contexts/Contexts";
import { Product } from "../../interfaces/interface.index";
import Loader from "../presentation/loader/Loader";

const URL: string = String(import.meta.env.VITE_API_URL);

export type UseProductsContextType = {
  products: Product[];
  loading: boolean;
};

const ProductsContext = Contexts.StoreContext;

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider
      value={{ loading, products } as { loading: boolean; products: Product[] }}
    >
      {loading ? <Loader /> : children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext };

export default ProductsContext;
