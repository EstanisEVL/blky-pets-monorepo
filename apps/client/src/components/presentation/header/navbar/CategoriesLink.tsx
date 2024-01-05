// AGREGAR REACT-ROUTER-DOM LINK O NAVLINK

type CategoryLink = {
  category: string;
};

const CategoriesLink = ({ category }: CategoryLink) => {
  return (
    <li className='text-xl'>
      <a href='#'>{category}</a>
    </li>
  );
};

export default CategoriesLink;
