import { ProductCardType } from "../types/product.types";


type ProductCardProps ={
  key : string,
  product : ProductCardType
}

const ProductCard = ({product} :ProductCardProps ) => {
  console.log(product)
  return (
    <div
      className=''
    >
      
    </div>
  );
};

export default ProductCard;
