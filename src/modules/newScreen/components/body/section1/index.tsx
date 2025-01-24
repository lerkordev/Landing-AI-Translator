import { steps } from './steps'

const index = () => {
  return (
    <div className="bg-[#fffdf5] py-[60px]">
      <div className="p-[15px] max-w-[1200px] m-auto flex items-center">
        <div className="w-[45%] pb-[30px]">
          <h2 className="text-2xl font-black p-0 mb-2.5 font-title">Auto subtitle generator powered by AI</h2>
          <div className="text-sm font-normal mx-auto text-[#333]">
            {steps.map((step) => {
              return (
                <div key={step.id}>
                  <h2 className="text-[1.5em] font-bold my-6">{step.title}</h2>
                  <p className="mb-[14px] leading-6">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex justify-center w-[55%] p-0 text-center rounded-[5px]">
          <img
            src="https://cdn-useast1.kapwing.com/static/0dZ-subtitles-secondaryTopContext.gif"
            alt="Auto subtitle generator powered by AI Screenshot"
            className="w-full max-w-[800px] rounded-[5px]"
          />
        </div>
      </div>
    </div>
  )
}

export default index
