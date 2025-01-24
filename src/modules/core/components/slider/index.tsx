import { SliderItems } from './items'

const Slider = () => {
  return (
    <div className="flex items-center justify-center animate-infinite-scroll whitespace-nowrap box-border my-5">
      {SliderItems.map((item) => (
        <div key={item.id} className="h-[120px] w-[120px] mx-[30px]">
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  )
}

export default Slider
