import { useState } from "react";
import ButtonIndex from "../../../buttons/ButtonIndex";
import Brand from "./Brand";
import BaseMenuWrapper from "./BaseMenuWrapper";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className='w-full h-24 flex justify-around items-center bg-neutral-900 transition duration-500'>
        <div>
          <Brand />
        </div>
        <div>
          <ButtonIndex.HamburguerBtn icon={"≡"} handleClick={handleOpen} />
        </div>
      </nav>
      <BaseMenuWrapper isVisible={open} setVisible={setOpen} />
    </>
  );
};

export default MobileNavbar;
