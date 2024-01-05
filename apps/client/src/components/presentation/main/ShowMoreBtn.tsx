// MOVER A UN COMPONENTE LIBRERÍA DE BOTONES
import { ReactElement } from "react";

type ShowMoreBtnProps = {
  text: string;
};

const ShowMoreBtn = ({ text }: ShowMoreBtnProps): ReactElement => {
  return (
    <button className='w-36 h-9 border border-gray-500 text-base uppercase'>
      {text}
    </button>
  );
};

export default ShowMoreBtn;
