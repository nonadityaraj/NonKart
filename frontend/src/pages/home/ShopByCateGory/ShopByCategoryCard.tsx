export interface Category {
  id: number;
  image: string;
  title: string;
}

interface ShopByCategoryCardProps {
  category: Category;
}

const ShopByCategoryCard = ({ category }: ShopByCategoryCardProps) => {
  return (
    <div className="group flex flex-col items-center cursor-pointer">
      <div className="
          relative
          w-28
          h-28
          sm:w-36
          sm:h-36
          md:w-40
          md:h-40
          lg:w-44
          lg:h-44
          rounded-full
          p-[3px]
          sm:p-[5px]
          bg-gradient-to-r
          from-pink-500
          via-pink-500
          to-cyan-400
          transition
          duration-300
          group-hover:scale-105
        ">
        <img className="w-full h-full rounded-full object-cover transition duration-300 group-hover:scale-110" src={category.image} alt={category.title} />
      </div>
      <p className="mt-4 font-medium text-gray-700 text-center">{category.title}</p>
    </div>
  )
}

export default ShopByCategoryCard