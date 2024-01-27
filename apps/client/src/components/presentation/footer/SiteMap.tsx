import {
  sitemapAboutCategories,
  sitemapHelpCategories,
  sitemapProductCategories,
} from "../../../utils/CategoryList";
import SiteMapCol from "./SiteMapCol";

const SiteMap = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-y-10 sm:gap-x-10'>
      <SiteMapCol h3={"Our products"} categories={sitemapProductCategories} />
      <SiteMapCol h3={"Help"} categories={sitemapHelpCategories} />
      <SiteMapCol h3={"About us"} categories={sitemapAboutCategories} />
    </div>
  );
};

export default SiteMap;
