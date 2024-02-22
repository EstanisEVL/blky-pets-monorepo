import ButtonIndex from "../../buttons/ButtonIndex";

type CategoryBannerProps = {
  title: string;
  img: string;
  h2Text: string;
  pText: string;
  btnText: string;
};

const CategoryBanner = ({
  title,
  img,
  h2Text,
  pText,
  btnText,
}: CategoryBannerProps) => {
  return (
    <div>
      <div className='uppercase relative font-kanit'>
        <img src={img} alt={title} />
        <div className='absolute max-w-32 sm:max-w-max top-6 left-4 sm:top-auto sm:bottom-8 sm:left-8'>
          <h2 className='font-bold sm:font-normal sm:text-3xl'>{h2Text}</h2>
          <p className='sm:text-lg mb-6'>{pText}</p>
          <ButtonIndex.CategoryBtn text={btnText} />
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
