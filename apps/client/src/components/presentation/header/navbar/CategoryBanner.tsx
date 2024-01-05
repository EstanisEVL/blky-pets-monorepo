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
        <div className='absolute bottom-8 left-8'>
          <h2 className='text-3xl'>{h2Text}</h2>
          <p className='text-lg mb-6'>{pText}</p>
          <button className='w-32 h-9 uppercase text-base border border-gray-900 '>
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
