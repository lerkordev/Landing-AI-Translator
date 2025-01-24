import { advantages } from './advantages'

const Section4 = () => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-black pt-10 pb-5 text-[#31343e] font-title">WATH'S DIFFERENT ABOUT KAPWING?</h3>
      <div className="flex flex-wrap">
        {advantages.map((advantage) => {
          return (
            <div key={advantage.id} className="px-10 pb-10 pt-5 w-[33%] text-center flex flex-col items-center justify-center">
              <div>
                <img src={advantage.image} alt={advantage.alt} className="object-contain w-[250px] h-[120px]" />
              </div>
              <div className="font-black my-5 text-2xl text-[#31343e] font-title">{advantage.title}</div>
              <div className="text-sm text-[#31343e] leading-6  ">{advantage.description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Section4
