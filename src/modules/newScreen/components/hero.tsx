import HeroBackground from '@/assets/svg/newScreen/hero_background.webp'
import CTA from '@/modules/core/ui/CTA'
import Header from '../../core/ui/header'

const hero = () => {
  // const title = {
  //   plainText:'AUTO SUBTITLE GENERATOR',
  // }
  // const subtitle = "Our AI-powered subtitle generator instantly creates subtitles and captions for all of your online videos. Get started in just one click."

  return (
    <div
      className="flex w-full pr-[60px] pl-10 mx-auto mx-auto bg-[url('@/assets/svg/newScreen/hero_background.webp')] bg-no-repeat bg-newPage bg-top-10px-right max-w-[1280px]
      max-[1200px]:bg-contain max-[1200px]:bg-right-100px-center max-[1200px]:px-5 max-[1200px]:my-5"
    >
      <div className="flex items-center w-full max-w-[1200px] pl-[15px] my-0 mx-auto pt-10 pb-10">
        <div className="w-[45%] pr-[80px]">
          <div className="flex items-center breadcrumbs text-sm">
            <ul>
              <li>Home</li>
              <li className="font-bold">Subtitles</li>
            </ul>
          </div>
          {/* <Header title={title} subtitle={subtitle}/> */}
          <h1 className="text-[#31343e] font-black text-[48px] mt-[10px] leading-[3rem] font-title">AUTO SUBTITLE GENERATOR</h1>
          <div className="pt-[15px] pb-5">
            <span>
              Our AI-powered subtitle generator instantly creates subtitles and captions for all of your online videos. Get
              started in just one click.
            </span>
          </div>
          <CTA variant={4} bgColor={'#18e1d6'} text="Generate subtitles" />
        </div>
        <div className="w-[55%] min-h-[460px] w-full flex items-center justify-center">
          <div>
            <video
              poster="https://cdn-useast1.kapwing.com/static/AEd-subtitlesposter.webp"
              autoPlay
              muted
              loop
              playsInline
              className="max-h-[500px] rounded-[10px] w-full shadow-custom2"
            >
              <source src="https://cdn-useast1.kapwing.com/static/PD6-subs_onboarding_V2.mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default hero
