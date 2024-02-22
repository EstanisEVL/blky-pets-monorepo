import { Category } from "../../../../interfaces/interface.index";

type CategoryLinkPropsType = {
  category: Category;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const CategoriesLink = ({ category, setVisible }: CategoryLinkPropsType) => {
  const handleClick = () => {
    setVisible(false);
  };

  return (
    <li className='text-xl'>
      <a onClick={handleClick} href={category.href}>
        {category.title}
      </a>
    </li>
  );
};

export default CategoriesLink;
