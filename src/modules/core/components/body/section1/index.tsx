import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { customClass } from '../../../utils/customClass'
import { content } from './content'
import CTA from '../../../ui/CTA'
import Header from '../../../ui/header'

const section1 = () => {
  const title = {
    plainText: 'Completely translate videos with both ',
    styledText: 'subtitles',
    styledText2: 'audio translation',
  }
  const subtitle =
    "Translate subtitles or audio in a video. Kapwing's video translator uses top-tier translation providers to give you video translations are accurate to its original meaning."

  return (
    <>
      <div className="flex flex-col justify-center items-center my-16 gap-12">
        <Header title={title} subtitle={subtitle} />
        <div className="flex flex-col justify-center items-center gap-16 px-12 max-w-[1200px]">
          {content.map((item, i) => {
            return (
              <div key={item.id} className="grid grid-cols-2 gap-x-12">
                {i === 1 && <video src={item.video} className="rounded-2xl" autoPlay muted loop />}
                <div className="flex flex-col justify-center items-left">
                  <h3 className="font-bold text-[1.17em]">
                    <span className="text-2xl leading-[32px]">{item.title}</span>
                  </h3>
                  <div className="mt-3">
                    <p className="text-sm leading-[28px]">
                      <span>{item.description}</span>
                    </p>
                  </div>
                  <CTA variant={2} text={'Upload my video'} bgColor={'#202020'} />
                </div>
                {i === 0 && <img src={item.image} alt={item.alt} className="h-full object-cover rounded-2xl" />}
                {i === 2 && <video src={item.video} className="rounded-2xl" autoPlay muted loop />}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default section1
