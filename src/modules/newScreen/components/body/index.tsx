import Section1 from './section1'
import { subtitlesSteps } from './section2/subtitlesSteps'
import HowTo from '@/modules/core/components/body/section3'
import Section3 from './section3'
import Carousel from './section4'
import FAQ from '@/modules/core/components/body/section4'
import Advantages from '@/modules/core/components/body/section5'
import Slider from '@/modules/core/components/slider'
import SliderTestimonials from '@/modules/core/components/body/section6'
import AdditionalResources from '@/modules/core/components/body/section7'
import MoreTools from '@/modules/core/components/body/section8'
import CTA from '@/modules/core/components/body/section9'
import { FAQcontent } from './section5/FAQcontent'
import { resources } from './section6/additionalResources'

const body = () => {
  return (
    <div>
      <Section1 />
      <HowTo title={'AUTO GENERATE SUBTITLES WITH AI'} steps={subtitlesSteps} />
      <Section3 />
      <Carousel />
      <FAQ FAQcontent={FAQcontent} />
      <Advantages />
      <Slider />
      <SliderTestimonials />
      <AdditionalResources resources={resources} />
      <MoreTools />
      <CTA text={'Generate subtitles'} />
    </div>
  )
}

export default body
