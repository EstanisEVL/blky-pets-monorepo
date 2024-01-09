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
    <div className='flex gap-2 my-2'>
      <label className='uppercase'>{label}</label>
      <input
        type={input}
        name={input}
        id={input}
        placeholder={text}
        required={isRequired}
        className='outline-none'
      />
    </div>
  );
};

export default FormInput;
