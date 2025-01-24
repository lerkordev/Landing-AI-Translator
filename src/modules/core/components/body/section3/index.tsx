export interface Step {
  id: number
  step: string
  description: string
}

const HowTo = ({ title, steps }: { title: string; steps: Step[] }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-[60px]">
      <h1 className="mb-10 text-[28px] font-black text-[#31343E] font-title">HOW TO {title}</h1>
      <iframe
        className="w-[800px] h-[450px] rounded-md"
        src="https://www.youtube.com/embed/0Gst33fLbCA"
        allowFullScreen
        title="YouTube video"
        loading="lazy"
      />
      <ol className="flex mt-5">
        {steps.map((step) => {
          return (
            <li key={step.id} className="p-5 w-[33%]">
              <div className="flex gap-2 font-black font-title">
                <p className={`before-number-${step.id}`}>
                  <span className="pl-2.5">{step.step}</span>
                </p>
              </div>
              <div className="my-5 text-[#31343e] leading-7 text-sm">
                <p>
                  <span>{step.description}</span>
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default HowTo
