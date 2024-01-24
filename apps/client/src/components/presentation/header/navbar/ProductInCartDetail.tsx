import ButtonIndex from "../../../buttons/ButtonIndex";
import { Product } from "../../../../interfaces/product.interface";

type ProductInCartDetailPropsType = {
  product: Product;
  handleAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ProductInCartDetail = ({
  product,
  handleAdd,
  handleRemove,
  handleDelete,
}: ProductInCartDetailPropsType) => {
  return (
    <div key={product._id} className='flex justify-between items-center gap-4'>
      <div className='w-1/6'>
        <img className='w-full' src={product.img} />
      </div>
      <div className='w-1/6'>
        <h3 className='font-kanit'>{product.title}</h3>
      </div>
      <div className='w-2/6 flex justify-between items-center'>
        <div>
          <ButtonIndex.RemoveBtn
            icon={"-"}
            pid={product._id}
            handleClick={handleRemove}
          />
        </div>

        <div>
          <p className='font-kanit'>{product.quantity}</p>
        </div>

        <div>
          <ButtonIndex.AddBtn
            icon={"+"}
            pid={product._id}
            handleClick={handleAdd}
          />
        </div>
      </div>

      <div className='w-1/6'>
        <p className='font-kanit text-center'>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price * product.quantity)}
        </p>
      </div>

      <div className='w-1/6'>
        <ButtonIndex.DeleteBtn
          icon={"x"}
          pid={product._id}
          handleClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default ProductInCartDetail;
