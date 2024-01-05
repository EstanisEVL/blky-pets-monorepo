import { paymentMethods } from "../../../utils/CategoryList";
import Copyright from "./Copyright";
import PayMethods from "./PayMethods";
import SiteMap from "./SiteMap";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className='w-full min-h-80 px-20 pt-16 flex justify-between font-kanit bg-neutral-900'>
      <SiteMap />
      <div className='h-full flex-col'>
        <Socials />
        <Copyright />
      </div>
      <PayMethods h3={"Medios de pago"} payments={paymentMethods} />
    </footer>
  );
};

export default Footer;
