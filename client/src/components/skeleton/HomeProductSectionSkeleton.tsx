import ProductCardSkeleton from './ProductCardSkeleton';

const HomeProductSectionSkeleton = () => {
    return (
        <div className='w-full'>
            <div
                className="py-2 flex justify-between items-center"
            >
                <h2 className="w-8/12 py-4 bg-gray-200 rounded-full"></h2>
                <span className="w-[75px] p-4 bg-gray-200 rounded-full"></span>
            </div>
            <div
                className="w-full grid grid-cols-5 gap-2"
            >
                <ProductCardSkeleton/>
                <ProductCardSkeleton/>
                <ProductCardSkeleton/>
                <ProductCardSkeleton/>
                <ProductCardSkeleton/>
            </div>
        </div>
    );
};

export default HomeProductSectionSkeleton;