import { ReactElement, useEffect, useState } from "react";
import Contexts from "../../contexts/Contexts";
import { Product } from "../../interfaces/interface.index";
import { useFetch } from "../../helpers/useFetch";

const URL: string = String(import.meta.env.VITE_API_URL);

export type UseProductsContextType = {
  products: Product[];
  loading: boolean;
  error: string;
};

const ProductsContext = Contexts.StoreContext;

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const { data, loading, error } = useFetch(`${URL}/products`);
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <ProductsContext.Provider
      value={
        { loading, products, error } as {
          loading: boolean;
          products: Product[];
          error: string;
        }
      }
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext };

export default ProductsContext;
