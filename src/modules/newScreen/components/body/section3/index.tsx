import { features } from './features'

const index = () => {
  return (
    <div className="py-[60px] bg-[#fffdf5] w-full">
      <div className="w-full max-w-[1000px] m-auto">
        <div className="w-full mt-0 mb-10">
          <h2 className="text-2xl font-black mb-[30px] px-[15px] font-title">Magic Subtitles: automatic captions in one click</h2>
          <div className="text-sm font-normal text-[#333] gap-[60px] columns-2 w-full px-[15px] mx-auto ">
            {features.map((feature) => {
              return (
                <div key={feature.id}>
                  <h1 className="my-[18px] text-lg font-bold">{feature.title}</h1>
                  <div>{feature.paragraph1}</div>
                  <div>{feature.paragraph2}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
