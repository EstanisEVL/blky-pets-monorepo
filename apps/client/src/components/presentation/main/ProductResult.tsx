import { ReactElement } from "react";
import { Product } from "../../../interfaces/product.interface";

type ProductResultProps = {
  product: Product;
};

const ProductResult = ({ product }: ProductResultProps): ReactElement => {
  return (
    <div className='flex justify-between items-center my-5'>
      <div className='max-w-20'>
        <img className='rounded' src={product.img} alt={product.title} />
      </div>
      <div className='flex flex-col text-end'>
        <p className='text-lg mb-2.5'>{product.title}</p>
        <p className='text-base font-medium'>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductResult;
