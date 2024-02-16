import ButtonIndex from "../../../buttons/ButtonIndex";
import Brand from "./Brand";
import BaseMenuWrapper from "./BaseMenuWrapper";

type MobileNavbarPropsType = {
  isVisible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
};

const MobileNavbar = ({
  isVisible,
  setVisible,
  handleClick,
}: MobileNavbarPropsType) => {
  return (
    <>
      <nav className='w-full h-24 flex justify-around items-center bg-neutral-900 transition duration-500'>
        <div>
          <Brand />
        </div>
        <div>
          <ButtonIndex.HamburguerBtn icon={"≡"} handleClick={handleClick} />
        </div>
      </nav>
      <BaseMenuWrapper isVisible={isVisible} setVisible={setVisible} />
    </>
  );
};

export default MobileNavbar;
