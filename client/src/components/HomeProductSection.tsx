import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { HomeProductType } from '../types/product.types';

type HomeProductSectionProps = {
    key: string
    product: HomeProductType
}

const HomeProductSection = ({ product }: HomeProductSectionProps) => {
    return (
        <div>
            <div
                className="py-2 flex justify-between items-center"
            >
                <h2 className="w-8/12 py-2 text-2xl uppercase font-semibold border-b">{product.name}</h2>
                <Link to={`/category/${product._id}`} className="px-4 py-2 bg-green-500 text-white rounded">See More</Link>
            </div>
            <div
                className="grid grid-cols-5 gap-2"
            >
                {
                    product?.typeItems?.map(product => <ProductCard key={product._id} {...{ product }} />)
                }
            </div>
        </div>
    );
};

export default HomeProductSection;