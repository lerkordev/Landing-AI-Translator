import CTA from '../../../ui/CTA'

const CTAsection = ({ text }: { text: string }) => {
  return (
    <div className="bg-[#31343e] py-[120px] text-sm w-full">
      <div className="max-w-[1200px] px-[15px] text-center text-white m-auto">
        <div className="text-4xl font-[1000] font-title">READY? LET'S DO THIS</div>
        <div className="max-w-[500px] m-auto mt-5 leading-[1.8rem]">
          <p className="text-center">
            Kapwing is free to use for teams of any size. We also offer paid plans with additional features, storage, and support.{' '}
          </p>
        </div>
        <CTA variant={3} bgColor="#18e1d6" text={text} />
      </div>
    </div>
  )
}

export default CTAsection
