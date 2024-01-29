import { Category } from "../../../interfaces/category.interface";
import CategoriesLink from "../../presentation/header/navbar/CategoriesLink";

type Categories = {
  categories: Category[];
  textColor: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Categories = ({ categories, textColor, setVisible }: Categories) => {
  return (
    <ul
      className={`flex flex-col sm:flex-row sm:items-center gap-y-10 sm:gap-x-10 ${textColor}`}
    >
      {categories.map((category) => {
        return (
          <CategoriesLink
            key={category.id}
            category={category}
            setVisible={setVisible}
          />
        );
      })}
    </ul>
  );
};

export default Categories;
