type CopyrightPropsType = {
  brand: string;
  disclaimer: string;
};

const Copyright = ({ brand, disclaimer }: CopyrightPropsType) => {
  return (
    <div className='my-20 text-white text-md uppercase'>
      <p className='text-sm sm:text-base'>
        {brand} &copy; {new Date().getFullYear()} {disclaimer}
      </p>
    </div>
  );
};

export default Copyright;
