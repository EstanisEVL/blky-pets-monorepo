import { ReactElement } from "react";

type FormLinkPropsType = {
  pText: string;
  aText: string;
  href: string;
};

const FormLink = ({ pText, aText, href }: FormLinkPropsType): ReactElement => {
  return (
    <div>
      <p>
        {pText}
        <a href={href}>
          <span className='font-bold underline hover:text-green-600 hover:decoration-green-600 transition duration-500'>
            {aText}
          </span>
        </a>
        .
      </p>
    </div>
  );
};

export default FormLink;
