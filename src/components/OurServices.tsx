import { Brush, Puzzle, SquareChartGantt } from "lucide-react"
import { Button } from "./ui/button"
import ImageBg from "./ImageBg"

const OurServices = () => {
  const data = {
    header: "Our Services",
    desc: "Transform your brand with our innovative digital solutions that captivate and engage your audience.",
    src: "https://res.cloudinary.com/dudwjf2pu/image/upload/v1732822552/45176455_9151730_zok7cd.jpg",
    services: [
      {
        icon: <Brush />,
        header: "Design",
        desc: "At LevelUp, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
        buttonText: "Learn More"
      },
      {
        icon: <Puzzle />,
        header: "Engineering",
        desc: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
        buttonText: "Learn More"
      },
      {
        icon: <SquareChartGantt />,
        header: "Project Management",
        desc: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
        buttonText: "Learn More"
      },
    ]
  }

  return (
    <section>
      <ImageBg desc={data.desc} src={data.src} header={data.header} />

      <ul className="py-5 space-y-5">
        {data.services.map((service, index) => (
          <li key={service.header} className={`p-5 space-y-5 border-2 rounded-lg ${index > 0 && 'border-t-2'}`}>
            <header className="flex items-center gap-2">
              <div className="p-2 border-2 rounded-md text-purple-800">
                {service.icon}
              </div>
              <h4 className="font-bold">{service.header}</h4>
            </header>
            <p className="text-sm text-muted-foreground">{service.desc}</p>
            <Button className="bg-purple-800 w-full h-12">{service.buttonText}</Button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OurServices