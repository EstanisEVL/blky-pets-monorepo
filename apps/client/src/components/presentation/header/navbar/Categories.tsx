import { categoryBanners } from "../../../../utils/CategoryList";
import CategoryBanner from "./CategoryBanner";

const Categories = () => {
  return (
    <div className='py-10 flex justify-center gap-x-6'>
      {categoryBanners.map((category) => {
        return (
          <CategoryBanner
            key={category.id}
            title={category.title}
            img={category.src}
            h2Text={category.h2Text}
            pText={category.pText}
            btnText={category.btnText}
          />
        );
      })}
    </div>
  );
};

export default Categories;
