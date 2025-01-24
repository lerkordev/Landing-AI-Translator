import Slider from '../slider'
import Section1 from './section1'
import Testimonial1 from './testimonial1'
import VideoTools from './section2'
import Testimonial2 from './testimonial2'
import HowTo from './section3'
import { translateSteps } from './section3/translateSteps'
import FAQ from './section4'
import { FAQcontent } from './section4/FAQcontent'
import Advantages from './section5'
import TestimonialsSlider from './section6'
import AdditionalResources from './section7'
import { resources } from './section7/additionalResources'
import MoreTools from './section8'
import CTA from './section9'

const Body = () => {
  return (
    <div className="flex flex-col">
      <Slider />
      <Section1 />
      <Testimonial1 />
      <VideoTools />
      <div className="flex flex-col w-full my-16 gap-y-12" />
      <Testimonial2 />
      <HowTo title={'TRANSLATE A VIDEO ONLINE'} steps={translateSteps} />
      <FAQ FAQcontent={FAQcontent} />
      <Advantages />
      <TestimonialsSlider />
      <AdditionalResources resources={resources} />
      <MoreTools />
      <CTA text={'Upload my video'} />
    </div>
  )
}

export default Body
