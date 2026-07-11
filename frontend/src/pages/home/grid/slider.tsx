import SlickSlider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = ((SlickSlider as unknown) as { default?: typeof SlickSlider })
  .default ?? SlickSlider;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 z-10 hidden md:flex h-16 w-10 -translate-y-1/2 items-center justify-center rounded-r-md bg-white/90 shadow hover:bg-white cursor-pointer border-none"
    >
      <ChevronLeft size={24} className="text-black" />
    </button>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 z-10 hidden md:flex h-16 w-10 -translate-y-1/2 items-center justify-center rounded-l-md bg-white/90 shadow hover:bg-white cursor-pointer border-none"
    >
      <ChevronRight size={24} className="text-black" />
    </button>
  );
};

const SliderComponent = ({ images, autoPlay = true, interval = 3000 }: ImageSliderProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: interval,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none">
            <img
              src={image}
              alt={`Slide - ${index}`}
              className="w-full aspect-[2/1] md:aspect-[32/7] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;