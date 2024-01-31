type StoreFiltersPropsType = {
  title: string;
  text: string;
};

const StoreFilters = ({ title, text }: StoreFiltersPropsType) => {
  return (
    <div className='flex gap-x-8 mb-16 sm:mb-0'>
      <p className='capitalize'>{title}</p>
      <p className='capitalize'>{text}</p>
    </div>
  );
};

export default StoreFilters;
