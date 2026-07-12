import Slider from './slider'


const images = [
    'https://rukminim1.flixcart.com/fk-p-flap/3200/700/image/55c8824a2b1e5ad4.png?q=60',
    'https://rukminim1.flixcart.com/fk-p-flap/3200/700/image/784e3193f452414d.png?q=60',
    'https://rukminim1.flixcart.com/fk-p-flap/3200/700/image/4e7ed7e0ba846b4c.png?q=60',
    'https://rukminim1.flixcart.com/fk-p-flap/3200/700/image/97ceba021b5fa305.png?q=60',
    'https://rukminim1.flixcart.com/fk-p-flap/3200/700/image/ac589de201bdbacb.png?q=60'
]

const Grid = () => {


  return (
    <div className='mt-2 md:mt-4 px-4 sm:px-6 md:px-12 lg:px-20'>
      
        <Slider images={images}/>
    </div>
  )
}

export default Grid