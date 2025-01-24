import { tools } from './tools'

const MoreTools = () => {
  return (
    <div className="max-w-[800px] text-center m-auto">
      <div className="mb-5 font-black capitalize text-[#31343e] text-base">
        <p>MORE TOOLS LIKE THIS:</p>
        {tools.map((tool) => (
          <p
            key={tool.id}
            className="inline-block py-[5px] px-5 border border-solid border-[#31343e] rounded-[5px] ml-[15px] mb-[15px] text-[#31343e]"
          >
            {tool.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default MoreTools
