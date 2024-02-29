import { ReactElement } from "react";
import { Product } from "../../../../interfaces/interface.index";
import SearchResultItem from "./SearchResultItem";
import ErrorBar from "../../error/ErrorBar";
import SpinnerLoader from "../../loaders/SpinnerLoader";

type SearchResultsProp = {
  results: Product[];
  loading: boolean;
  error: string;
};

const SearchResults = ({
  results,
  loading,
  error,
}: SearchResultsProp): ReactElement => {
  return (
    <div className='mt-2 w-72 px-5 rounded border-none outline-none bg-white flex-col absolute z-10'>
      <div className='flex-col'>
        {error && <ErrorBar error={error} />}
        {loading ? (
          <div className='min-h-[100px] flex justify-center items-center'>
            <SpinnerLoader />
          </div>
        ) : (
          results?.map((result) => {
            return <SearchResultItem key={result._id} result={result} />;
          })
        )}
      </div>
    </div>
  );
};

export default SearchResults;
