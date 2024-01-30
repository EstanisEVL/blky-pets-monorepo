import { ReactElement } from "react";
import { Product } from "../../../interfaces/product.interface";
import ButtonIndex from "../../buttons/ButtonIndex";

type ProductCardProps = {
  product: Product;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ProductCard = ({
  product,
  handleClick,
}: ProductCardProps): ReactElement => {
  return (
    <div className='max-w-36 sm:max-w-sm flex-col font-kanit uppercase'>
      <div>
        <img src={product.img} alt={product.title} />
      </div>
      <div className='flex flex-row sm:flex-col justify-between mt-2'>
        <div className='flex flex-col gap-2'>
          <p className='sm:text-lg font-medium'>{product.category}</p>
          <h3 className='sm:text-2xl'>{product.title}</h3>
          <p className='text-base font-medium'>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </p>
        </div>
        <div className='sm:my-4'>
          <ButtonIndex.AddBtn
            icon={"Add"}
            pid={product._id}
            handleClick={handleClick}
            inProductCard={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
