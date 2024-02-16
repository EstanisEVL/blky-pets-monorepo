import { paymentMethods } from "../../../utils/CategoryList";
import Copyright from "./Copyright";
import PayMethods from "./PayMethods";
import SiteMap from "./SiteMap";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className='w-full min-h-80 px-20 pt-16 flex flex-col gap-y-10 sm:flex-row sm:flex-wrap justify-between font-kanit bg-neutral-900'>
      <div className='order-1'>
        <SiteMap />
      </div>
      <div className='order-3 sm:order-2 h-full flex-col'>
        <Socials />
        <Copyright brand={"BLKY PETS"} disclaimer={"| All rights reserved."} />
      </div>
      <div className='order-2 sm:order-3'>
        <PayMethods h3={"Payment methods"} payments={paymentMethods} />
      </div>
    </footer>
  );
};

export default Footer;
