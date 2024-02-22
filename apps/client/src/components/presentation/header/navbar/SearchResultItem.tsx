import { ReactElement } from "react";
import { Product } from "../../../../interfaces/interface.index";
import ProductResult from "../../main/ProductResult";

type SearchResultItemProp = {
  result: Product;
};

const SearchResultItem = ({ result }: SearchResultItemProp): ReactElement => {
  return <ProductResult key={result._id} product={result} />;
};

export default SearchResultItem;
