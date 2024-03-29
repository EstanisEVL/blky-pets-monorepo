import { Category } from "../../../interfaces/interface.index";

type SiteMapCol = {
  h3: string;
  categories: Category[];
};

const SiteMapCol = ({ h3, categories }: SiteMapCol) => {
  return (
    <div className='font-kanit text-white uppercase'>
      <h3 className='text-2xl font-medium sm:font-normal mb-4'>{h3}</h3>
      {categories.map((category) => {
        return (
          <a href={category.href} key={category.id}>
            <p className='text-lg mb-2'>{category.title}</p>
          </a>
        );
      })}
    </div>
  );
};

export default SiteMapCol;
