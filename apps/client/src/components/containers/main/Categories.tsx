import { Category } from "../../../interfaces/category.interface";
import CategoriesLink from "../../presentation/header/navbar/CategoriesLink";

type Categories = {
  categories: Category[];
  textColor: string;
};

const Categories = ({ categories, textColor }: Categories) => {
  return (
    <ul className={`flex items-center gap-x-10 ${textColor}`}>
      {categories.map((category) => {
        return <CategoriesLink key={category.id} category={category.title} />;
      })}
    </ul>
  );
};

export default Categories;
