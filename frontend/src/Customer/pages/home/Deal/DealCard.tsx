import SlickSlider from 'react-slick';

const Slider = ((SlickSlider as unknown) as { default?: typeof SlickSlider })
  .default ?? SlickSlider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DealCard = ({deals}:any) => {
    const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div className='w-full cursor-pointer relative'>

      <Slider {...settings}>

        {deals.map((deal:any, index:number)=>(
        <div key={index} className="px-2 outline-none">
          <div>
            <img className = "border-x-[7px] border-t-[7px] border-pink-600 w-full h-[12rem] object-cover object-top" src={deal.image} alt="" />
            <div className=' border-4 border-black bg-black text-white p-2 text-center' >
                <p className='text-2xl font-bold'>{deal.discount}%</p>
                <p className='font-bold'>shop now</p>
            </div>
          </div>
        </div>
        ))}
      </Slider>

    </div>
  )
}

export default DealCard