import { useState, useEffect } from 'react'

interface ProductItem {
    id: number;
    title: string;
    price: number;
    originalPrice: number;
    discount: number;
    color: string;
    category: string;
    images: string[];
}

interface ProductCardProps {
    item: ProductItem;
}

const ProductCard = ({ item }: ProductCardProps) => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        let intervalId: any;
        if (isHovered && item.images && item.images.length > 1) {
            intervalId = setInterval(() => {
                setCurrentImage((prev) => (prev + 1) % item.images.length);
            }, 1000); 
        } else {
            setCurrentImage(0); 
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isHovered, item.images]);

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            className='group relative flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 w-full cursor-pointer'
        >
            {/* Image Area with hover sliding slideshow */}
            <div className='relative w-full h-[280px] sm:h-[320px] overflow-hidden bg-gray-50'>
                <div 
                    className='flex w-full h-full transition-transform duration-500 ease-out'
                    style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                    {item.images.map((image: string, index: number) => (
                        <img 
                            src={image} 
                            alt={`${item.title} - ${index}`} 
                            key={index} 
                            className='w-full h-full object-cover flex-shrink-0'
                        />
                    ))}
                </div>

                {item.images.length > 1 && (
                    <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-20 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-xs transition-opacity duration-300'>
                        {item.images.map((_, idx) => (
                            <span 
                                key={idx} 
                                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                    idx === currentImage ? 'bg-teal-400 scale-125 w-3.5' : 'bg-white/60'
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className='p-4 flex flex-col flex-grow gap-1'>
                <h3 className='text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-teal-600 transition-colors duration-200'>{item.title}</h3>
                
                <div className="flex items-center gap-1.5 my-1 flex-wrap">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-teal-50 text-teal-700">
                        {item.color}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                        {item.category}
                    </span>
                </div>

                <div className='flex items-center gap-2 mt-auto pt-2 border-t border-gray-50'>
                    <span className='text-base font-extrabold text-gray-900'>₹{item.price}</span>
                    <span className='text-xs text-gray-400 line-through'>₹{item.originalPrice}</span>
                    <span className='text-xs font-bold text-green-600'>{item.discount}% OFF</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
