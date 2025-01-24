import Chevron from '../icons/chevron.svg'
import ArrowUpTrayIcon from '../icons/arrowUpTray.svg'

const CTA = ({ variant, text, bgColor }: { variant: number; text: string; bgColor: string }) => {
  return (
    <div
      className={`flex items-center text-center font-bold ${
        variant === 1
          ? 'text-white py-6 px-32 rounded-lg bg-heroCTA animate-heroCTA p-4 saturate-150 font-sans font-[20px]'
          : variant === 2
            ? `text-white py-4 px-8 mt-6 rounded-lg w-fit bg-[${bgColor}]`
            : variant === 3
              ? `text-[#31343e] py-5 px-[50px] m-auto justify-center mt-[30px] bg-[${bgColor}] shadow-custom max-w-[320px] rounded-[5px]`
              : variant === 4
                ? `text-[#31343e] mt-2.5 mb-5 bg-[${bgColor}] justify-center shadow-custom rounded-[5px]`
                : `text-[#31343e] py-[15px] w-auto px-10 text-sm rounded-[10px] object-fill mt-[10px] bg-[${bgColor}]`
      }`}
    >
      <button
        type="button"
        className={`flex items-center justify-center text-[#31343e] ${
          variant === 1 ? 'gap-2' : variant === 4 ? 'py-5 px-[50px] min-w-[280px] max-w-[380px]' : ''
        }`}
      >
        {(variant === 3 || variant === 4) && (
          <img src={ArrowUpTrayIcon} alt="ArrowUpTrayIcon" className="h-6 w-6 mr-[15px] fill-[#31343e]" />
        )}
        <p>{text}</p>
        {variant !== 5 && <img src={Chevron} alt="Chevron" className="h-6 w-6 ml-[5px]" />}
      </button>
    </div>
  )
}

export default CTA
