import DealCard from "./DealCard"

const deals = [{
    image:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/shoe/f/r/x/9-mkb-sh-wh-9-9-maker-boy-white-original-imah39ezxqhekzmv.jpeg?q=90",
    discount:"10",
},
{
    image:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/shoe/f/r/x/9-mkb-sh-wh-9-9-maker-boy-white-original-imah39ezxqhekzmv.jpeg?q=90",
    discount:"10",
},
{
    image:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/shoe/f/r/x/9-mkb-sh-wh-9-9-maker-boy-white-original-imah39ezxqhekzmv.jpeg?q=90",
    discount:"10",
},
{
    image:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/shoe/f/r/x/9-mkb-sh-wh-9-9-maker-boy-white-original-imah39ezxqhekzmv.jpeg?q=90",
    discount:"10",
},
{
    image:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/shoe/f/r/x/9-mkb-sh-wh-9-9-maker-boy-white-original-imah39ezxqhekzmv.jpeg?q=90",
    discount:"10",
},
{
    image:"https://rukminim1.flixcart.com/image/1536/1536/xif0q/shoe/f/r/x/9-mkb-sh-wh-9-9-maker-boy-white-original-imah39ezxqhekzmv.jpeg?q=90",
    discount:"10",
}
]

const Deal = () => {
  return (
    <div className='py-5 px-4 sm:px-8 md:px-12 lg:px-20 mt-10 md:mt-16'>
        <h2 className='text-center text-2xl md:text-4xl font-bold text-teal-600 mb-6 md:mb-10' >Today's Deal</h2>
      <DealCard deals={deals}/>
    </div>
  )
}

export default Deal