import { Social } from "../../../interfaces/interface.index";

type SocialsCol = {
  h3: string;
  socials: Social[];
};

const SocialsCol = ({ h3, socials }: SocialsCol) => {
  return (
    <div>
      <div className='flex-col sm:text-center text-white'>
        <h3 className='text-2xl mb-2'>{h3}</h3>
        <div className='flex gap-x-4'>
          {socials.map((social) => {
            return (
              <a key={social.id} href={social.link}>
                <button className='w-12 h-12 flex justify-center items-center border-none rounded bg-rose-600'>
                  <img src={social.src} alt={social.title} />
                </button>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialsCol;
