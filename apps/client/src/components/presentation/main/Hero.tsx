type HeroProps = {
  img: string;
  h1Text: string;
  pText: string;
  btnText: string;
};

const Hero = ({ img, h1Text, pText, btnText }: HeroProps) => {
  return (
    <div className='w-full min-h-max relative font-kanit'>
      <img src={img} alt={"two dogs looking at BLKY PETS collar collection"} />
      <div className='w-full absolute bottom-8 flex justify-center'>
        <div className='flex-col text-center uppercase'>
          <h1 className='text-3xl text-black '>{h1Text}</h1>
          <p className='text-lg mb-6'>{pText}</p>
          <button className='w-28 h-9 border border-gray-500 text-base uppercase'>
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
