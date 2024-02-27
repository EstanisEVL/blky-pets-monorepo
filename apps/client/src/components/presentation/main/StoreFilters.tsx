import filterIcon from "../../../assets/filter/filter-icon.svg";
import filterSelectIcon from "../../../assets/filter/filter-select.svg";

type StoreFiltersPropsType = {
  title: string;
  text: string;
};

const StoreFilters = ({ title, text }: StoreFiltersPropsType) => {
  return (
    <div className='flex gap-x-8 mb-16 sm:mb-0'>
      <div className='max-h-9 flex items-center gap-x-2 select-none'>
        <img src={filterIcon} alt='filter icon' />
        <p className='uppercase font-medium'>{title}</p>
      </div>
      <div className='max-h-9 flex items-center relative'>
        <select className='w-36 sm:w-72 h-9 ps-4 capitalize rounded border border-[#212121] bg-white outline-none appearance-none'>
          <option value=''>{text}</option>
        </select>
        <div className='flex absolute right-5'>
          <img src={filterSelectIcon} alt='select arrows icon' />
        </div>
      </div>
    </div>
  );
};

export default StoreFilters;
