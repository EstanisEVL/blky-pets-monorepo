// Revisar si se puede incluir dos tipos en uno o renombrar de forma reutilizable:
type LoginBtnPropsType = {
  handleClick: () => void;
  icon: string;
};

type CartWidgetBtnPropsType = {
  handleClick: () => void;
  icon: string;
};

type LoginModalBtnPropsType = {
  handleClick: () => void;
  text: string;
};

type CloseBtnPropsType = {
  handleClick: () => void;
  icon: string;
};

// Pasar cada botón a su propio componente y llamarlos desde este índice

const ButtonIndex = {
  LoginBtn: ({ handleClick, icon }: LoginBtnPropsType) => {
    return (
      // Acá se retorna el componente
      <button onClick={handleClick}>
        <img src={icon} alt='Login icon' />
      </button>
    );
  },
  LoginModalBtn: ({ handleClick, text }: LoginModalBtnPropsType) => {
    return (
      // Acá se retorna el componente
      <button className='uppercase' onClick={handleClick}>
        {text}
      </button>
    );
  },
  CloseBtn: ({ handleClick, icon }: CloseBtnPropsType) => {
    return (
      <button
        className='bg-black text-white min-h-12 min-w-12 rounded-full hover:bg-gray-500 hover:text-black transition duration-50 flex justify-center items-center'
        onClick={handleClick}
      >
        {icon}
      </button>
    );
  },
  CartWidgetBtn: ({ handleClick, icon }: CartWidgetBtnPropsType) => {
    return (
      <button onClick={handleClick}>
        <img src={icon} alt='Cart icon' />
      </button>
    );
  },
};

export default ButtonIndex;
