import TestimonialPhoto2 from '@/assets/svg/testimonial_photo_2.webp'
import { customClass } from '../../utils/customClass'

const Testimonial2 = () => {
  return (
    <div className="my-16 bg-[#202020] flex justify-center items-center px-12 py-24 text-white font-bold gap-x-12 text-xl">
      <div>
        <img src={TestimonialPhoto2} alt="TestimonialPhoto2" className="w-[120px] h-[120px] rounded-[50%]" />
      </div>
      <div>
        <div className="max-w-[800px] mb-5 leading-7">
          <h3>
            <span>
              "Kapwing helps you spend less time learning complex video editing platforms and more time crafting stories that{' '}
            </span>
            <i className={customClass}>
              <em className="not-italic">will connect with your audience and customers</em>
            </i>
            <span>. If you've learned graphic design with Canva, you can learn video editing with Kapwing."</span>
          </h3>
        </div>
        <div className="font-light text-xs">
          <p>Grant Taleck</p>
          <p>Co-Founder at AuthentIQMarketing</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial2
