import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ButtonIndex from "../buttons/ButtonIndex";

type DesktopModalPropsType = {
  content?: ReactNode;
  onBackdropClick: () => void;
};

const DesktopModal = ({ content, onBackdropClick }: DesktopModalPropsType) => {
  // PASAR RENDERS A OTROS COMPONENTES, AGREGAR BOTÓN CERRAR AL ÍNDICE DE BOTONES
  return createPortal(
    <div
      onClick={onBackdropClick}
      className='bg-black/[.8] fixed flex justify-center items-center h-full w-full top-0 left-0 z-20'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white rounded select-none w-1/2 h-1/2 flex flex-col items-center justify-center relative'
      >
        <div className='absolute top-0 right-0 m-4'>
          <ButtonIndex.CloseBtn handleClick={onBackdropClick} icon={"X"} />
        </div>

        <div className='w-full h-full flex justify-center items-center'>
          {content}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default DesktopModal;
