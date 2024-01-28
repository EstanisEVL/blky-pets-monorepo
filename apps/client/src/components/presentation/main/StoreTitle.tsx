import { ReactElement } from "react";

type StoreTitleProps = {
  title: string;
  text: string;
};

const StoreTitle = ({ title, text }: StoreTitleProps): ReactElement => {
  return (
    <div className='flex gap-x-1 mb-10 sm:mb-16'>
      <h1 className='uppercase sm:text-2xl text-sky-400 font-semibold'>
        {title}
      </h1>
      <p className='sm:text-2xl'>{text}</p>
    </div>
  );
};

export default StoreTitle;
