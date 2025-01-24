import TestimonialPhoto1 from '@/assets/svg/testimonial_photo_1.webp'
import { customClass } from '../../utils/customClass'

const Testimonial1 = () => {
  return (
    <div className="flex my-16 bg-[#202020] flex justify-center px-12 py-24 text-white font-bold gap-x-12 text-xl">
      <div>
        <img src={TestimonialPhoto1} alt="TestimonialPhoto1" className="w-[120px] h-[120px] rounded-[50%]" />
      </div>
      <div>
        <div className="max-w-[800px] mb-5 leading-7">
          <h3>
            <span>
              "Kapwing is incredibly intuitive. Many of our marketers were able to get on the platform and use it right away{' '}
            </span>
            <i className={customClass}>
              <em className="not-italic">with little to no instruction.</em>
            </i>
            <span> No need for downloads or installations—</span>
            <i className={customClass}>
              <em className="not-italic">it just works.</em>
            </i>
            "
          </h3>
        </div>
        <div className="font-light text-xs">
          <p>Eunice Park</p>
          <p>Studio Production Manager at Formlabs</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial1
