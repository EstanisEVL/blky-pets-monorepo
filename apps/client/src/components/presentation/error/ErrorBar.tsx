type ErrorBarPropsType = {
  error: string;
};

const ErrorBar = ({ error }: ErrorBarPropsType) => {
  // Estilizar

  return (
    <div className='flex flex-col justify-center items-center'>
      <p>Something went wrong: {error}</p>
    </div>
  );
};

export default ErrorBar;
