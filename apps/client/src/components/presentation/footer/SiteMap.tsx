import {
  sitemapAboutCategories,
  sitemapHelpCategories,
  sitemapProductCategories,
} from "../../../utils/CategoryList";
import SiteMapCol from "./SiteMapCol";

const SiteMap = () => {
  return (
    <div className='flex gap-x-10'>
      <SiteMapCol h3={"Productos"} categories={sitemapProductCategories} />
      <SiteMapCol h3={"Ayuda"} categories={sitemapHelpCategories} />
      <SiteMapCol h3={"Nosotros"} categories={sitemapAboutCategories} />
    </div>
  );
};

export default SiteMap;
