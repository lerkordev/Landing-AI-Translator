import { customClass } from '../../../utils/customClass'
import Header from '../../../ui/header'
import { videoTools } from './videoTools'

const VideoTools = () => {
  const title = {
    plainText: 'Every video creation tool you need,',
    styledText: 'all in one place',
  }
  const subtitle =
    'Get all your editing done in one place. Craft your videos for every platform using powerful features accessible for everyone.'

  return (
    <>
      <div className="flex flex-col items-center gap-12 text-center my-16">
        <Header title={title} subtitle={subtitle} />
        <div className="grid grid-cols-custom-repeat lg:grid-cols-custom-repeat-lg gap-12 px-12 max-w-[1200px]">
          {videoTools.map((tool, i) => {
            return (
              <div key={tool.id} className="grid grid-cols-[64px_1fr] gap-x-6 text-[#31343e]">
                <div className="p-4 bg-[#F5F5F5] flex items-center rounded-tl-2xl rounded-bl-2xl relative">
                  <img src={tool.icon} alt={tool.alt} className="h-8 w-8" />
                  {i === 4 && <img src={tool.icon2} alt={tool.alt2} className="absolute h-8 w-16 left-2 bottom-4" />}
                </div>
                <div className="flex flex-col gap-3 text-left">
                  <div className="text-xl font-bold">{tool.title}</div>
                  <div className="text-sm font-normal leading-7">{tool.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default VideoTools
