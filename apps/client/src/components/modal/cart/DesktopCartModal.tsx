import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ButtonIndex from "../../buttons/ButtonIndex";

type DesktopCartModalPropsType = {
  content?: ReactNode;
  onBackdropClick: () => void;
};

const DesktopCartModal = ({
  content,
  onBackdropClick,
}: DesktopCartModalPropsType) => {
  return createPortal(
    <div
      onClick={onBackdropClick}
      className='bg-black/[.8] fixed flex justify-end h-full w-full top-0 left-0 z-20'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white rounded-tl rounded-bl select-none w-1/2 flex flex-col items-center justify-center relative'
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

export default DesktopCartModal;
