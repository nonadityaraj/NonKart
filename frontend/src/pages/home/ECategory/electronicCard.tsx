
const ElectronicCard = ({item}:any) => {
  return (
    <div className='w-20 flex-shrink-0 flex flex-col items-center gap-3 cursor-pointer group'>
        <img className= "object-contain h-10 transition-transform duration-300 group-hover:scale-110" src={item.image} alt={item.name} />
        <h2 className='font-semibold text-sm text-gray-700 group-hover:text-teal-600 transition-colors'>{item.name}</h2>
    </div>
  )
}

export default ElectronicCard;