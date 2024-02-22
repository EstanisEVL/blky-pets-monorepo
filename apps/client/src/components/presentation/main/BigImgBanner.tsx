import ButtonIndex from "../buttons/ButtonIndex";

type BigImgBannerPropsType = {
  bgImage: string;
  height: string;
  title: string;
  text: string;
  btnText: string;
};

const BigImgBanner = ({
  bgImage,
  height,
  title,
  text,
  btnText,
}: BigImgBannerPropsType) => {
  return (
    <div
      className={`my-10 ${height} flex flex-col justify-center items-center ${bgImage} bg-cover bg-no-repeat`}
    >
      <div className='w-full sm:top-2/3 flex flex-col items-center'>
        <div className='text-center text-white font-kanit mt-40 mb-6'>
          <h3 className='uppercase font-medium text-3xl'>{title}</h3>
          <p className='uppercase text-lg'>{text}</p>
        </div>
        <div className='flex justify-center'>
          <ButtonIndex.BigBannerBtn text={btnText} />
        </div>
      </div>
    </div>
  );
};

export default BigImgBanner;
