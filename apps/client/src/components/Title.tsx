type TitlePropsType = {
  text: string;
};

const Title = ({ text }: TitlePropsType) => {
  return (
    <div className='flex justify-center my-2'>
      <h2 className='text-3xl uppercase font-kanit font-medium'>{text}</h2>
    </div>
  );
};

export default Title;
