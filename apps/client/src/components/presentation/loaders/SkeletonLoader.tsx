import { ReactElement } from "react";

const SkeletonLoader = (): ReactElement => {
  return (
    <div className='flex flex-col gap-2 sm:gap-4 relative overflow-hidden bg-neutral-100 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/40 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]'>
      <div className='h-36 sm:h-96 w-36 sm:w-96 bg-neutral-300'></div>
      <div className='flex flex-row sm:flex-col justify-between sm:gap-6'>
        <div className='w-full flex flex-col gap-2 sm:gap-4'>
          <div className='h-4 sm:h-5 w-1/3 rounded-full bg-neutral-300'></div>
          <div className='h-5 sm:h-6 w-4/5 rounded-full bg-neutral-300 shadow'></div>
          <div className='h-4 sm:h-4 w-1/5 mt-2 sm:mt-0 rounded-full bg-neutral-300 shadow'></div>
        </div>

        <div>
          <div className='h-12 w-12 rounded bg-neutral-300'></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
