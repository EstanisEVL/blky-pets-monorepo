import ButtonIndex from "../buttons/ButtonIndex";

type HeroProps = {
  height: string;
  bgImage: string;
  h1Text: string;
  pText: string;
  btnText: string;
};

const Hero = ({ height, bgImage, h1Text, pText, btnText }: HeroProps) => {
  return (
    <div
      className={`mt-[160px] ${height} ${bgImage} flex flex-col justify-end  bg-cover bg-center bg-no-repeat`}
    >
      <div className='mb-10 w-full flex justify-center'>
        <div className='flex-col text-center uppercase'>
          <h1 className='text-lg sm:text-3xl font-medium sm:font-normal font-kanit text-black '>
            {h1Text}
          </h1>
          <p className='text-sm sm:text-lg font-kanit mb-6'>{pText}</p>
          <ButtonIndex.HeroBtn text={btnText} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
