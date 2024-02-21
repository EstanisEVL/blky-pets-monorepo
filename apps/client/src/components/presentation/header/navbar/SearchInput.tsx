import searchIcon from "../../../../assets/search/search.svg";

type SearchInputPropsType = {
  input: string;
  handleChange: (value: string) => void;
};

const SearchInput = ({ input, handleChange }: SearchInputPropsType) => {
  return (
    <div className='relative flex items-center'>
      <img
        src={searchIcon}
        alt='Search icon'
        className='ms-2 absolute pointer-events-none'
      />
      <input
        type='text'
        name='search'
        placeholder='What are you looking for?'
        autoComplete='off'
        aria-label='Search'
        className='pr-3 pl-10 h-12 w-full rounded placeholder-gray-500 border-none outline-none'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
