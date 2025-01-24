import Title from './title'

export interface title {
  plainText: string
  styledText?: string
  styledText2?: string
}

const header = ({ title, subtitle }: { title: title; subtitle: string }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${title.styledText && 'max-w-[800px]'} px-12 gap-2 text-center`}>
      <Title title={title} />
      <p className={`${title.styledText === undefined && 'max-w-[800px]'} text-lg`}>{subtitle}</p>
    </div>
  )
}

export default header
