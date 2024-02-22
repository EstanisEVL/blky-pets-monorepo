import ButtonIndex from "../buttons/ButtonIndex";

const Newsletter = () => {
  return (
    <div className='flex justify-center font-kanit mb-12'>
      <div className='w-full flex-col text-center'>
        <h2 className='text-lg sm:text-4xl font-medium mt-12 mb-6 sm:mb-9'>
          {"Sign up for exclusive offers"}
        </h2>
        <form action='POST' className='flex-col'>
          <div className='p-4 sm:p-0 flex flex-col sm:flex-row justify-center gap-y-6 sm:gap-x-6'>
            <input
              type='email'
              placeholder='Email adress'
              className='pl-4 w-full sm:w-96 border border-gray-500 rounded min-h-14 outline-none text-base'
            />
            <input
              type='text'
              placeholder='Your pet’s name'
              className='pl-4 w-full sm:w-96 border border-gray-500 rounded min-h-14 outline-none text-base'
            />
          </div>
          <div className='flex justify-center mt-6 sm:mt-12'>
            <ButtonIndex.ShowMoreBtn text={"sign up"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
