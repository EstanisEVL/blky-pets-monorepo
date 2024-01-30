import { ReactNode } from "react";
import { createPortal } from "react-dom";
import ButtonIndex from "../../buttons/ButtonIndex";

type MobileCartModalPropsType = {
  content?: ReactNode;
  onBackdropClick: () => void;
};

const MobileCartModal = ({
  content,
  onBackdropClick,
}: MobileCartModalPropsType) => {
  return createPortal(
    <div
      onClick={onBackdropClick}
      className='bg-black/[.8] fixed flex justify-center items-end h-full w-full top-0 left-0 z-20'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='bg-white rounded select-none w-full h-5/6 flex flex-col items-center justify-center relative'
      >
        <div className='absolute top-0 mt-4'>
          <ButtonIndex.CloseBtn handleClick={onBackdropClick} icon={"X"} />
        </div>

        <div className='w-full h-full overflow-y-scroll mb-4'>{content}</div>
      </div>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default MobileCartModal;
