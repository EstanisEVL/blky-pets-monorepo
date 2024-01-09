import bigBannerImg from "../../../assets/big-banner.jpg";
import ButtonIndex from "../../buttons/ButtonIndex";

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
          <ButtonIndex.BigBannerBtn text={"shop now"} />
        </div>
      </div>
    </div>
  );
};

export default BigImgBanner;
