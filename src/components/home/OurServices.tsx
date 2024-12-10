"use client"

import Image from "next/image"
import { OurServicesType } from "@/types/types"
import useResponsive from "@/hooks/useResponsive"
import ImageSection from "@/components/common/ImageSection"
import { Button } from "@/components/ui/button"

interface OurServicesProps {
  data: OurServicesType
}

const OurServices = ({ data }: OurServicesProps) => {
  const { imageSection, services } = data
  const { isTablet } = useResponsive()
  return (
    <section>
      <ImageSection data={imageSection} />
      <ul className="flex flex-col lg:flex-row gap-5 py-5">
        {services.map((service) => (
          <li key={service.header} className={`flex flex-col flex-1 p-5 space-y-5 border-2 justify-between rounded-lg`}>
            <div className="space-y-2">
              <header className="flex justify-between">
                <div className="flex lg:flex-col items-center lg:items-start gap-2 lg:gap-5">
                  <span className="p-2 border-2 rounded-md text-purple-800">
                    <Image
                      src={service.src}
                      alt={service.alt}
                      width={20}
                      height={20}
                    />
                  </span>
                  <h4 className="font-bold lg:text-lg">{service.header}</h4>
                </div>
                {isTablet && <Button className="bg-purple-800 h-10">{service.buttonText}</Button>}
              </header>
              <p className="text-sm lg:text-base text-muted-foreground">{service.desc}</p>
            </div>
            {!isTablet && <Button className="bg-purple-800 w-full h-10">{service.buttonText}</Button>}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurServices