import { ArrowUpTrayIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const CTA = () => {
  return (
    <div className="bg-[#31343e] py-[120px] text-sm w-full">
      <div className="max-w-[1200px] px-[15px] text-center text-white m-auto">
        <div className="text-4xl font-[1000] font-title">READY? LET'S DO THIS</div>
        <div className="max-w-[500px] m-auto mt-5 leading-[1.8rem]">
          <p className="text-center">
            Kapwing is free to use for teams of any size. We also offer paid plans with additional features, storage, and support.{' '}
          </p>
        </div>
        <div className="flex justify-center items-center bg-[#18e1d6] m-auto mt-[30px] text-[#31343e] max-w-[320px] rounded-[5px] text-center py-5 px-[50px] text-base shadow-custom font-bold">
          <button type="button" className="flex items-center justify-center">
            <ArrowUpTrayIcon className="h-6 w-6 mr-[15px]" />
            <p>Upload my video</p>
            <ChevronRightIcon className="h-6 w-6 ml-[5px]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA
