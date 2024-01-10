import { ReactElement } from "react";

type FormInputPropsType = {
  label: string;
  input: string;
  id: string;
  text: string;
  isRequired: boolean;
  message?: string;
};

const FormInput = ({
  label,
  input,
  id,
  text,
  isRequired,
  message,
}: FormInputPropsType): ReactElement => {
  return (
    <>
      <div className='flex items-center gap-2 my-2 font-kanit'>
        <label className='uppercase text-xl' htmlFor={id}>
          {label}
        </label>
        <input
          type={input}
          name={input}
          id={id}
          placeholder={text}
          required={isRequired}
          className='h-12 outline-none grow ps-2 bg-gray-200 rounded'
        />
      </div>
      {message && (
        <div>
          <p className='text-sm text-gray-500 mb-6'>{message}</p>
        </div>
      )}
    </>
  );
};

export default FormInput;
