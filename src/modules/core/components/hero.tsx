import HeroVideo from '@/assets/video/hero_video.mp4'
import CTA from '../ui/CTA'
import Header from '../ui/header'

const Hero = () => {
  const title = {
    plainText: 'VIDEO TRANSLATOR',
  }
  const subtitle = 'Translate subtitles and dub audio in 75+ languages. Add natural-sounding AI voices or use voice cloning.'

  return (
    <div className="flex flex-col justify-center items-center gap-y-16 my-16 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-y-4 max-w-[1200px] px-12 text-center ">
        <Header title={title} subtitle={subtitle} />
        <CTA variant={1} bgColor={'heroCTA'} text={'Upload my video'} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <video src={HeroVideo} autoPlay muted loop className="w-custom" />
      </div>
    </div>
  )
}

export default Hero
