import Logo from "@/components/common/Logo"
import { Button } from "@/components/ui/button"
import { AboutUsSummaryType } from "@/types/types"

interface AboutUsSummaryProps {
  data: AboutUsSummaryType
}

const AboutUsSummary = ({ data }: AboutUsSummaryProps) => {
  const { ctaParagraph, paragraph } = data
  return (
    <section className="bg-purple-100 lg:bg-inherit text-center lg:text-left space-y-5 p-5 lg:p-0 my-5 lg:my-24 rounded-lg">
      <div className="lg:grid lg:grid-cols-[100px_1fr] lg:gap-5">
        <Logo isTextShow={false} size={100} />
        <div className="space-y-2">
          <h4 className="font-bold lg:text-lg">{paragraph.header}</h4>
          <p className="text-sm lg:text-base text-muted-foreground">{paragraph.desc}</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-purple-200 rounded-lg p-5">
        <h5 className="font-bold lg:text-lg">{ctaParagraph.header}</h5>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center bg-purple-300 rounded-lg gap-5 p-5">
          <p className="text-sm lg:text-base">{ctaParagraph.desc}</p>
          <Button className="h-10 w-full lg:w-fit bg-purple-800">{ctaParagraph.buttonText}</Button>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSummary