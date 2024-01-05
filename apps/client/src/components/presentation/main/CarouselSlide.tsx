import { ReactElement } from "react";
import { Product } from "../../../interfaces/product.interface";

// revisar si sigue lanzando error al recargar el sitio con el índice del carrusel en un valor mayor a 0

// AJUSTAR MAX HEIGHT Y MAX WIDTH SEGÚN MEDIA QUERY

type CarouselSlideProps = {
  product: Product;
};

const CarouselSlide = ({ product }: CarouselSlideProps): ReactElement => {
  return (
    <div
      className={`flex-col font-kanit uppercase transform transition-transform`}
    >
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
    </div>
  );
};

export default CarouselSlide;
