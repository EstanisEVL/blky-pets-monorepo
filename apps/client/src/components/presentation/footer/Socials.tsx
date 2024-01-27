import { socialsContact, socialsFollow } from "../../../utils/CategoryList";
import SocialsCol from "./SocialsCol";

const Socials = () => {
  return (
    <div className='flex flex-col sm:items-center gap-y-10 sm:gap-x-10 mb-8'>
      <SocialsCol h3={"Follow us"} socials={socialsFollow} />
      <SocialsCol h3={"Contact us"} socials={socialsContact} />
    </div>
  );
};

export default Socials;
