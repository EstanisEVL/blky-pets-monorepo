import { Payment } from "../../../interfaces/interface.index";

type PayMethodsType = {
  h3: string;
  payments: Payment[];
};

const PayMethods = ({ h3, payments }: PayMethodsType) => {
  return (
    <div className='text-white'>
      <h3 className='uppercase text-2xl mb-2'>{h3}</h3>
      <div className='grid grid-cols-4 grid-row-2 gap-2'>
        {payments.map((payment) => {
          return (
            <div key={payment.id}>
              <img src={payment.src} alt={payment.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PayMethods;
