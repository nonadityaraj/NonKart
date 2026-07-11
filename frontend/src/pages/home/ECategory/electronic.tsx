import ElectronicCard from './electronicCard'


const electronics = [
    {
        section:"ELECTRIC_CATEGORIES",
        name:"LAPTOP",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/y/s/-original-imahhw5xygnfm36g.jpeg?q=70",
       categoryId:'laptop' 
    },
        {
        section:"ELECTRIC_CATEGORIES",
        name:"Mobile",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/9/4/-original-imahh6yfjvvmjpur.jpeg?q=70",
       categoryId:'mobile' 
    },
        {
        section:"ELECTRIC_CATEGORIES",
        name:"Television",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/9/4/-original-imahh6yfjvvmjpur.jpeg?q=70",
       categoryId:'television' 
    },
        {
        section:"ELECTRIC_CATEGORIES",
        name:"Camera",
        image:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/9/4/-original-imahh6yfjvvmjpur.jpeg?q=70",
       categoryId:'Camera' 
    },
        {
        section:"ELECTRIC_CATEGORIES",
        name:"Smart Watches",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/9/h/m/-enriched-transparent-original-imah4jm9xwddbggr.png?q=70",
       categoryId:'SmartWatches' 
    },
        {
        section:"ELECTRIC_CATEGORIES",
        name:"Speakers",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/mobile-tablet-speaker/5/h/u/zeb-county-pro-11-zeb-pspk55-zebronics-enriched-transparent-original-imahhqb6gxtftkcf.png?q=70",
       categoryId:'speakers' 
    }
]

const Electronic = () => {
  return (
    <div className='flex overflow-x-auto gap-8 py-5 px-4 sm:px-8 md:px-12 lg:px-20 lg:justify-between scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        {electronics.map((a)=><ElectronicCard key={a.categoryId} item={a}/>)}
    </div>
  )
}

export default Electronic