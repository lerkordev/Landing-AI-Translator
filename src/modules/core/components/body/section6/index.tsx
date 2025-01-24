import testimonialsSliderBackground from '@/assets/svg/testimonialSlider/testimonials_slider_background.webp'
import { reviews } from './reviews'
import { sliderTestimonials } from './sliderTestimonials'

const testimonialsSlider = () => {
  return (
    <div>
      <div className="pt-[60px] relative">
        <div>
          <span className="absolute inset-0">
            <img src={testimonialsSliderBackground} alt="testimonialsSliderBackground" className="inset-0" />
          </span>
        </div>
        <div className="text-xl font-bold relative mb-10 text-[#31343e] font-extrabold text-center text-2xl font-title">
          Trusted by millions of creators all over the world
        </div>
        <div className="flex justify-center max-w-[800px] gap-[30px] m-auto relative">
          {reviews.map((review) => {
            return (
              <div
                key={review.id}
                className="flex flex-col justify-center items-center bg-white max-w-[300px] rounded-[5px] pb-[15px] px-[10px]"
              >
                <div>
                  <img src={review.src} alt={review.alt} />
                </div>
                <div>{review.description}</div>
              </div>
            )
          })}
        </div>
        <div className="flex overflow-y-hidden overflow-x-scroll">
          <div className="inline-flex pl-[60px] animate-infinite-scroll-2">
            {sliderTestimonials.map((testimonial) => {
              return (
                <div
                  key={testimonial.id}
                  className="before-element flex items-center justify-center w-[500px] rounded-[10px] px-5 my-5 ml-5 mr-16 bg-[#fffdf5]"
                >
                  <div className="absolute w-[100px] ml-[-500px] border-[10px] border-solid border-[#fffdf5] rounded-[50%]">
                    <img src={testimonial.photo} alt={testimonial.alt} className="rounded-[50%]" />
                  </div>
                  <div className="py-[30px] pl-5 text-sm">
                    <div className="mb-5 font-semibold text-base">{testimonial.title}</div>
                    <div>{testimonial.testimony}</div>
                    <div className="mt-5 text-[13px]">{testimonial.author}</div>
                    <div className="text-[13px]">{testimonial.company}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default testimonialsSlider
