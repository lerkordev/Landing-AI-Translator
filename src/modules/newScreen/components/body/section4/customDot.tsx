import { CircleIcon } from '@radix-ui/react-icons'

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const CustomDot = ({ onClick, ...rest }: any) => {
  const {
    active,
    // carouselState: { currentSlide, deviceType },
  } = rest

  const myColor = active ? '#fff' : '#31343e'

  return (
    <div className={`!p-2 relative justify-center items-center !bg-[${myColor}]`}>
      <CircleIcon className={`!fill-[${myColor}] text-[${myColor}]`} onClick={onClick} />
    </div>
  )
}
