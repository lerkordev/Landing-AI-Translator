import type { title } from './header'
import { customClass } from '../utils/customClass'

const Title = ({ title }: { title: title }) => {
  return (
    <div className="text-[38px] font-black font-title text-[#31343e]">
      <h3 className="leading-none">
        <span>{title.plainText} </span>
        {title.styledText && <i className={`${customClass} not-italic`}>{title.styledText}</i>}
        {title.styledText2 && (
          <>
            {' and '}
            <i className={`${customClass} not-italic`}>{title.styledText2}</i>
          </>
        )}
      </h3>
    </div>
  )
}

export default Title
