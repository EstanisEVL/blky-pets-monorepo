// Revisar si se puede incluir dos tipos en uno o renombrar de forma reutilizable:

import { ReactElement } from "react";

// Resumir tipados
type LoginBtnPropsType = {
  handleClick: () => void;
  icon: string;
};

type CartWidgetBtnPropsType = {
  handleClick: () => void;
  icon: string;
  disabled: boolean;
};

type LoginModalBtnPropsType = {
  handleClick: () => void;
  text: string;
  active: boolean;
};

type CloseBtnPropsType = {
  handleClick: () => void;
  icon: string;
};

type BigBannerBtnPropsType = {
  // handleClick: () => void;
  text: string;
};

type ShowMoreBtnPropsType = {
  // handleClick: () => void;
  text: string;
};

type HeroBtnPropsType = {
  // handleClick: () => void;
  text: string;
};

type CategoryBtnPropsType = {
  // handleClick: () => void;
  text: string;
};

type EnterBtnPropsType = {
  // handleClick: () => void;
  text: string;
};

// Pasar cada botón a su propio componente y llamarlos desde este índice

const ButtonIndex = {
  LoginBtn: ({ handleClick, icon }: LoginBtnPropsType): ReactElement => {
    return (
      // Acá se retorna el componente
      <button onClick={handleClick}>
        <img src={icon} alt='Login icon' />
      </button>
    );
  },
  LoginModalBtn: ({
    handleClick,
    text,
    active,
  }: LoginModalBtnPropsType): ReactElement => {
    return (
      // Acá se retorna el componente
      <button
        className={`font-kanit uppercase w-full h-12 rounded hover:border-b-black hover:text-black transition duration-500 ${
          active
            ? "bg-white text-black"
            : "bg-gray-200 text-gray-500 border-b-4"
        }`}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  },
  CloseBtn: ({ handleClick, icon }: CloseBtnPropsType): ReactElement => {
    return (
      <button
        className='bg-black text-white min-h-12 min-w-12 rounded-full hover:bg-gray-500 hover:text-black transition duration-500 flex justify-center items-center'
        onClick={handleClick}
      >
        {icon}
      </button>
    );
  },
  CartWidgetBtn: ({
    handleClick,
    icon,
    disabled,
  }: CartWidgetBtnPropsType): ReactElement => {
    return (
      <button onClick={handleClick} disabled={disabled}>
        <img
          src={icon}
          alt={"Cart icon"}
          title={disabled ? "Inicia sesión para ver tu carrito" : "Ver carrito"}
        />
      </button>
    );
  },
  // Falta el onClick:
  BigBannerBtn: ({ text }: BigBannerBtnPropsType): ReactElement => {
    return (
      <button className='w-32 h-9 uppercase text-base font-kanit bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 transition duration-500'>
        {text}
      </button>
    );
  },
  // Falta el onClick:
  ShowMoreBtn: ({ text }: ShowMoreBtnPropsType): ReactElement => {
    return (
      <button className='w-36 h-9 border border-gray-500 text-base uppercase hover:text-white hover:bg-gray-500 transition duration-500'>
        {text}
      </button>
    );
  },
  // Falta el onClick:
  HeroBtn: ({ text }: HeroBtnPropsType): ReactElement => {
    return (
      <button className='w-28 h-9 border border-gray-500 text-base uppercase hover:text-white hover:bg-gray-500 transition duration-500'>
        {text}
      </button>
    );
  },
  // Falta el onClick:
  CategoryBtn: ({ text }: CategoryBtnPropsType): ReactElement => {
    return (
      <button className='w-32 h-9 uppercase text-base border border-gray-900 hover:text-white hover:bg-gray-900 transition duration-500'>
        {text}
      </button>
    );
  },
  // El onClick tiene que activar el submit:
  EnterBtn: ({ text }: EnterBtnPropsType) => {
    return (
      <button
        type='submit'
        className='w-full h-12 border border-black text-base uppercase font-bold hover:text-green-600 hover:bg-black transition duration-500'
      >
        {text}
      </button>
    );
  },
};

export default ButtonIndex;
