import { ReactElement } from "react";
import { Product } from "../../../interfaces/product.interface";
import ButtonIndex from "../../buttons/ButtonIndex";

// AJUSTAR MAX HEIGHT Y MAX WIDTH SEGÚN MEDIA QUERY

type ProductCardProps = {
  product: Product;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ProductCard = ({
  product,
  handleClick,
}: ProductCardProps): ReactElement => {
  return (
    <div className='flex-col font-kanit uppercase'>
      <div className='max-h-sm max-w-sm'>
        <img src={product.img} alt={product.title} />
      </div>
      <h3 className='mt-2 text-2xl'>{product.title}</h3>
      <p className='text-lg'>{product.category}</p>
      <p className='mt-2.5 text-base font-medium'>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
      </p>
      <div className='my-2'>
        <ButtonIndex.AddBtn
          icon={"Add"}
          pid={product._id}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProductCard;
