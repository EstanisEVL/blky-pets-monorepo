import { ReactElement } from "react";

type FormInputPropsType = {
  label: string;
  input: string;
  text: string;
  isRequired: boolean;
};

const FormInput = ({
  label,
  input,
  text,
  isRequired,
}: FormInputPropsType): ReactElement => {
  return (
    <div className='flex items-center gap-2 my-2 font-kanit'>
      <label className='uppercase text-xl'>{label}</label>
      <input
        type={input}
        name={input}
        id={input}
        placeholder={text}
        required={isRequired}
        className='h-12 outline-none grow ps-2 bg-gray-200 rounded'
      />
    </div>
  );
};

export default FormInput;
