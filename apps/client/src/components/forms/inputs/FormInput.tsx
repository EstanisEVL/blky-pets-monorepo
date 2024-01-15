import { ReactElement } from "react";

type FormInputPropsType = {
  label: string;
  input: string;
  id: string;
  text: string;
  isRequired: boolean;
  message?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
  label,
  input,
  id,
  text,
  isRequired,
  message,
  onChange,
}: FormInputPropsType): ReactElement => {
  return (
    <>
      <div className='flex flex-col font-kanit'>
        <label className='uppercase text-xl' htmlFor={id}>
          {label}
        </label>
        <input
          type={input}
          name={input}
          id={id}
          placeholder={text}
          required={isRequired}
          onChange={onChange}
          className='h-12 outline-none grow ps-2 bg-gray-200 rounded'
        />
      </div>
      {message && (
        <div className='mb-6'>
          <p className='text-sm text-gray-500'>{message}</p>
        </div>
      )}
    </>
  );
};

export default FormInput;
