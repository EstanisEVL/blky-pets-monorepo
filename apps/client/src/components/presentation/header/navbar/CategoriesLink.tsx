// AGREGAR REACT-ROUTER-DOM LINK O NAVLINK

import { Category } from "../../../../interfaces/category.interface";

type CategoryLinkPropsType = {
  category: Category;
};

const CategoriesLink = ({ category }: CategoryLinkPropsType) => {
  return (
    <li className='text-xl'>
      <a href={category.href}>{category.title}</a>
    </li>
  );
};

export default CategoriesLink;
