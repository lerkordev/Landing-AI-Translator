import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export interface FAQcontentItem {
  id: number
  isActive: boolean
  question: string
  answer: string
}

function Menu({ topics }: { topics: FAQcontentItem[] }) {
  const [isActive, setIsActive] = useState(topics.map((topic) => ({ id: topic.id, isActive: topic.isActive })))

  const handleClick = (val: FAQcontentItem) => {
    const id = val.id
    setIsActive((prevState) => {
      return prevState.map((item) => {
        const isActive = item.isActive
        if (item.id === id) {
          return { ...item, isActive: !isActive }
        }
        return item
      })
    })
  }

  return (
    <ul>
      {topics.map((val: FAQcontentItem) => {
        const topicActive = isActive.filter((item) => item.id === val.id)[0].isActive

        return (
          <div
            key={val.id}
            className={`select-none ${val.id === 1 ? '' : 'border-t-[3px]'}  border-t-solid border-t-[#0083e2] p-5 p-[10px]`}
          >
            <li>
              <div onClick={() => handleClick(val)} onKeyDown={() => handleClick(val)} className="flex justify-between">
                <h3 className="hidden sm:block font-bold text-[#31343E]">{val.question}</h3>
                <div>
                  {topicActive ? (
                    <MinusIcon className="h-5 w-5 fill-[#0083e2]" />
                  ) : (
                    <PlusIcon className="h-5 w-5 fill-[#0083e2]" />
                  )}
                </div>
              </div>
              <div>{topicActive && <p className="text-[#31343E] text-sm my-[14px]">{val.answer}</p>}</div>
            </li>
          </div>
        )
      })}
    </ul>
  )
}

export default Menu
