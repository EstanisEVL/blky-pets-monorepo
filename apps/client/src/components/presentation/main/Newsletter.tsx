// AGREGAR FUNCIONAMIENTO Y PASAR LOS COMPONENTES DE PRESENTACIÓN A SUBCOMPONENTES

const Newsletter = () => {
  return (
    <div className='flex justify-center font-kanit mb-12'>
      <div className='w-full flex-col text-center'>
        <h2 className='text-4xl font-medium mt-12 mb-9'>
          {"Sign up for exclusive offers"}
        </h2>
        <form action='POST' className='flex-col'>
          <div className='flex justify-center gap-x-6'>
            <input
              type='email'
              placeholder='Email adress'
              className='pl-4 w-96 border border-gray-500 rounded min-h-14 outline-none text-base'
            />
            <input
              type='text'
              placeholder='Your pet’s name'
              className='pl-4 w-96 border border-gray-500 rounded min-h-14 outline-none text-base'
            />
          </div>
          <div className='flex justify-center'>
            <button
              className='w-36 h-9 mt-12 border border-gray-500 text-base uppercase'
              type='submit'
            >
              {"sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
