import { DotFilledIcon, DotIcon } from '@radix-ui/react-icons'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import type { featuresCarouselProps, carouselItem } from '../../../types'
// import CarouselButtons from './carouselButtons'
import CTA from '@/modules/core/ui/CTA'
import { CustomDot } from './customDot'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1900 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1900, min: 1400 },
    items: 1,
  },
  laptop: {
    breakpoint: { max: 1480, min: 1100 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1100, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
}

// const CustomDot = ({ onClick, ...rest }: any) => {
//   const {
//     active,
//     // carouselState: { currentSlide, deviceType },
//   } = rest

//   return (
//     <div className=" relative justify-center items-center pt-2">
//       {active ? (
//         <DotFilledIcon className="h-8 w-8" onClick={onClick} />
//       ) : (
//         <DotIcon className="h-8 w-8" onClick={onClick} />
//       )}
//     </div>
//   )
// }

// const customAnimation = {
//   // Define your custom animation styles here
//   transform: 'translateX(860%)',
//   transition: 'transform .5s ease-in-out',
// };

const FeaturesCarousel = ({
  // ypeContent,
  carouselItems,
}: featuresCarouselProps) => {
  return (
    <div className="w-full bg-[#31343e] ">
      <h1 className="text-center text-sm text-white font-extrabold pt-10 pb-5">Discover even more features on Kapwing</h1>
      <Carousel
        // renderButtonGroupOutside={true}
        arrows={true}
        customTransition=""
        responsive={responsive}
        // customButtonGroup={<CarouselButtons />}
        showDots={true}
        // customDot={<CustomDot />}
        draggable
        infinite
        // containerClass="flex items-stretch justify-center"
        dotListClass="!p-5"
        itemClass="carousel-item flex"
        autoPlay={true}
        autoPlaySpeed={1000}
      >
        {carouselItems?.map((item: carouselItem) => {
          return (
            <div
              key={item.id}
              className="flex p-10 max-w-[1100px] w-full m-auto text-white pb-20"
              // style={customAnimation}
            >
              <div className="pr-[60px] w-[40%]">
                <div className="text-2xl font-black font-title">{item.name}</div>
                <div className="mt-5 mb-5 leading-7 text-sm">{item.description}</div>
                <div className="flex justify-left">
                  <CTA variant={5} bgColor="#18e1d6" text={item.CTA} />
                </div>
              </div>
              <div className="w-[60%]">
                <span className="block relative overflow-hidden">
                  <span className="block w-initial h-initial m-0 p-0 pt-[67%]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 min-w-full min-h-full max-w-full max-h-full"
                    />
                  </span>
                </span>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default FeaturesCarousel
