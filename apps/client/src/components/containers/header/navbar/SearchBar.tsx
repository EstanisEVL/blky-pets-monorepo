import { useState } from "react";

import SearchInput from "../../../presentation/header/navbar/SearchInput";
import SearchResults from "../../../presentation/header/navbar/SearchResults";
import useProducts from "../../../../hooks/useProducts";
import { Product } from "../../../../interfaces/interface.index";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const { products } = useProducts();

  const handleChange = (value: string) => {
    setInput(value);
    const result = products.filter((product: Product) => {
      return (
        value &&
        product &&
        product.title &&
        product.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(result);
  };

  return (
    <div className='flex-col relative'>
      <form>
        <SearchInput input={input} handleChange={handleChange} />
      </form>
      <SearchResults results={results} />
    </div>
  );
};

export default SearchBar;
