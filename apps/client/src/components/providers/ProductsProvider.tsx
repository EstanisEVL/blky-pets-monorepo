import { ReactElement, useEffect, useState } from "react";
import { fetchData } from "../../helpers/fetchData";
import Contexts from "../../contexts/Contexts";
import { Product } from "../../interfaces/product.interface";

const API_URL: string = "http://localhost:8080/api";
const apiData = fetchData(`${API_URL}/products`);

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
