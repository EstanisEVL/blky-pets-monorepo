import { socialsContact, socialsFollow } from "../../../utils/CategoryList";
import SocialsCol from "./SocialsCol";

const Socials = () => {
  return (
    <div className='flex gap-x-10 mb-8'>
      <SocialsCol h3={"SEGUINOS"} socials={socialsFollow} />
      <SocialsCol h3={"CONTACTATE"} socials={socialsContact} />
    </div>
  );
};

export default Socials;
