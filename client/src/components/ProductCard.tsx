import useProductStore from "../store/productStore"
import { ProductCardType } from "../types/product.types"


type ProductCardProps = {
  key: string,
  product: ProductCardType
}

const ProductCard = ({ product }: ProductCardProps) => {
  const {setAddCart} = useProductStore()
  return (
    <div
      className='border rounded'
    >
      <div className="flex justify-center">
        <img src={product?.image?.url} className="h-[200px]" />
      </div>
      <div className="p-2 space-y-3 text-center">
        <p>
          {product?.name}
        </p>
        <p className="space-x-2">
          <span className="px-6 py-1 bg-green-200 text-green-900 rounded-full">
            ৳-{product.price}
          </span>
          <span className="px-6 py-1 bg-green-200 text-green-900 rounded-full">
            {product.quantity} {product.sku}
          </span>
        </p>
        <button 
          onClick={()=>setAddCart(product)}
          className="px-4 py-2 bg-green-600 text-white rounded-full"
        >
          Add cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
