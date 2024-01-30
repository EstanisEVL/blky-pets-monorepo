import { ReactElement } from "react";

type CartPurchaseTotalPropsType = {
  amount: number | undefined;
};

const CartPurchaseTotal = ({
  amount,
}: CartPurchaseTotalPropsType): ReactElement => {
  return (
    <div className='w-full flex justify-end sm:mt-10'>
      <p className='sm:text-lg font-kanit'>
        Total amount:{" "}
        <span className='font-bold'>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(Number(amount))}
        </span>
      </p>
    </div>
  );
};

export default CartPurchaseTotal;
