import { ReactElement, useEffect, useState } from "react";
import { fetchData } from "../../helpers/fetchData";
import Contexts from "../../contexts/Contexts";
import { Product } from "../../interfaces/product.interface";

const URL: string = String(import.meta.env.VITE_API_URL);
const apiData = fetchData(`${URL}/products`);

export type UseProductsContextType = {
  products: Product[];
};

const ProductsContext = Contexts.StoreContext;

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<Promise<any> | Product[]>([]);
  const data = apiData.read();

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <ProductsContext.Provider value={{ products } as { products: Product[] }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext };

export default ProductsContext;
