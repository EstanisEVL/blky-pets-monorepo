import { ReactElement } from "react";
import { Product } from "../../../../interfaces/interface.index";
import SearchResultItem from "./SearchResultItem";

type SearchResultsProp = {
  results: Product[];
};

const SearchResults = ({ results }: SearchResultsProp): ReactElement => {
  return (
    <div className='mt-2 w-72 px-5 rounded border-none outline-none bg-white flex-col absolute z-10'>
      <div className='flex-col'>
        {results.map((result) => {
          return <SearchResultItem key={result._id} result={result} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
