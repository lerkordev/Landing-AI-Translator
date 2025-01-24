import FAQimg from '@/assets/svg/FAQ_img.webp'
import Menu, { type FAQcontentItem } from './FAQmenu'

const FAQ = ({ FAQcontent }: { FAQcontent: FAQcontentItem[] }) => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[1100px] py-10 px-[15px] gap-5">
        <div className="w-[30%] flex flex-col justify-between">
          <div className="my-5 text-2xl font-bold">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="w-full ml-20">
            <img src={FAQimg} alt="FAQimg" className="w-[120px] h-[135]" />
          </div>
        </div>
        <div className="w-[70%]">
          <Menu
            topics={FAQcontent}
            // title={{ sm: 'AUTHENTICATION', xs: 'AUTH' }}
          />
        </div>
      </div>
    </div>
  )
}

export default FAQ
