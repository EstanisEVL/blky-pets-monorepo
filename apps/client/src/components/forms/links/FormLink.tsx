import { ReactElement, ReactEventHandler } from "react";

type FormLinkPropsType = {
  text: string;
  btnText: string;
  handleClick?: ReactEventHandler;
};

const FormLink = ({
  text,
  btnText,
  handleClick,
}: FormLinkPropsType): ReactElement => {
  return (
    <div>
      <p className='font-kanit text-gray-500'>
        {text}
        <button onClick={handleClick}>
          <span className='font-bold underline hover:text-green-600 hover:decoration-green-600 transition duration-500'>
            {btnText}
          </span>
        </button>
        .
      </p>
    </div>
  );
};

export default FormLink;
