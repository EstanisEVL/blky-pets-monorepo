import bigBannerImg from "../../../assets/big-banner.jpg";

// SIMPLIFICAR CANTIDAD DE COMPONENTES DE PRESENTACIÓN Y HACERLO REUTILIZABLE

const BigImgBanner = () => {
  return (
    <div className='py-10 flex-col justify-center relative'>
      <img src={bigBannerImg} alt='' />
      <div className='absolute bottom-16 left-1/2'>
        <div className='text-center font-kanit mb-6'>
          <h3 className='uppercase text-3xl'>{"blu lagoon"}</h3>
          <p className='uppercase text-lg'>{"new print"}</p>
        </div>
        <div className='flex justify-center'>
          <button className='w-32 h-9 uppercase text-base font-kanit bg-zinc-900 text-white'>
            {"shop now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BigImgBanner;
