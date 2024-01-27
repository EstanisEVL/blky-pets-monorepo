import ButtonIndex from "../../buttons/ButtonIndex";

type BigImgBannerPropsType = {
  image: string;
  height: string;
  title: string;
  text: string;
  btnText: string;
};

const BigImgBanner = ({
  image,
  height,
  title,
  text,
  btnText,
}: BigImgBannerPropsType) => {
  return (
    <div
      className={`my-10 h-[${height}] flex flex-col justify-center items-center bg-[url('../..${image}')] bg-cover bg-no-repeat`}
    >
      <div className='w-full sm:top-2/3 flex flex-col items-center'>
        <div className='text-center font-kanit mt-40 mb-6'>
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
