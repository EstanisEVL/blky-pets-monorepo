// Revisar si se puede incluir dos tipos en uno o renombrar de forma reutilizable:

import { ReactElement } from "react";

// Resumir tipados
type HamburguerBtnPropsType = {
  handleClick: () => void;
  icon: string;
};

type LoginBtnPropsType = {
  handleClick: () => void;
  icon: string;
};

type CartWidgetBtnPropsType = {
  handleClick: () => void;
  icon: string;
  disabled: boolean;
  hasProducts: boolean;
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

type PurchaseBtnPropsType = {
  handleClick: () => void;
  text: string;
};

type AddBtnPropsType = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pid: string;
  icon: string;
  inProductCard: boolean;
};

type RemoveBtnPropsType = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pid: string;
  icon: string;
};

type DeleteBtnPropsType = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pid: string;
  icon: string;
};

// Pasar cada botón a su propio componente y llamarlos desde este índice

const ButtonIndex = {
  HamburguerBtn: ({ icon, handleClick }: HamburguerBtnPropsType) => {
    return (
      <button
        className='w-12 h-12 rounded border border-white text-white hover:bg-white hover:text-neutral-900 transition duration-500'
        onClick={handleClick}
      >
        {icon}
      </button>
    );
  },

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
        className='border border-black text-black min-h-12 min-w-12 rounded-full hover:bg-black hover:text-white transition duration-500 flex justify-center items-center'
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
    hasProducts,
  }: CartWidgetBtnPropsType): ReactElement => {
    return (
      <button onClick={handleClick} disabled={disabled} className='relative'>
        {hasProducts ? (
          <div className='rounded rounded-1/2 w-2 h-2 bg-red-500 absolute right-0'></div>
        ) : null}
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
      <button className='w-32 h-9 uppercase text-base font-kanit text-zinc-900 bg-white border border-zinc-900 hover:text-white hover:bg-zinc-900  transition duration-500'>
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

  PurchaseBtn: ({ text, handleClick }: PurchaseBtnPropsType) => {
    return (
      <button
        className='w-full h-12 rounded border border-green-600 text-base bg-white text-green-600 uppercase font-bold hover:text-white hover:bg-green-600  transition duration-500'
        onClick={handleClick}
      >
        {text}
      </button>
    );
  },

  AddBtn: ({ icon, pid, handleClick, inProductCard }: AddBtnPropsType) => {
    return (
      <button
        className={`${
          inProductCard ? "w-12 h-12" : "w-6 h-6"
        }  sm:w-12 sm:h-12 flex justify-center items-center font-extrabold rounded border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-500`}
        data-product-id={pid}
        onClick={handleClick}
      >
        {icon}
      </button>
    );
  },

  RemoveBtn: ({ icon, pid, handleClick }: RemoveBtnPropsType) => {
    return (
      <button
        className='w-6 sm:w-12 h-6 sm:h-12 flex justify-center items-center font-extrabold rounded border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-500'
        data-product-id={pid}
        onClick={handleClick}
      >
        {icon}
      </button>
    );
  },

  DeleteBtn: ({ icon, pid, handleClick }: DeleteBtnPropsType) => {
    return (
      <button
        className='w-6 sm:w-12 h-6 sm:h-12 flex justify-center items-center font-extrabold rounded border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition duration-500'
        data-product-id={pid}
        onClick={handleClick}
      >
        {icon}
      </button>
    );
  },
};

export default ButtonIndex;
