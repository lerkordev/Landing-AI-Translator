import type { Resource } from './additionalResources'

const AdditionalResources = ({ resources }: { resources: Resource[] }) => {
  return (
    <div className="mt-[100px] mb-10">
      <div className="mb-5 font-black text-[#31343e] text-2xl text-center font-title">DISCOVER RESOURCES</div>
      <div className="flex m-auto w-full max-w-[1024px] text-[#555] px-2.5">
        {resources.map((resource) => {
          return (
            <div key={resource.id} className="h-[210px] flex-1 m-2.5 p-2.5">
              <span className="block relative">
                <span className="block w-initial h-initial pt-[56%]">
                  <img
                    src={resource.image}
                    alt={resource.alt}
                    decoding="async"
                    className="absolute inset-0 min-w-full min-h-full max-w-full max-h-full"
                  />
                </span>
              </span>
              <div className="text-sm mt-2.5 font-semibold">{resource.description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AdditionalResources
