type ErrorBoxPropsType = {
  error: string | null;
};

const ErrorBox = ({ error }: ErrorBoxPropsType) => {
  // Estilizar

  return (
    <div className='min-h-[300px] flex flex-col justify-center items-center'>
      <p>Something went wrong: {error}</p>
    </div>
  );
};

export default ErrorBox;
