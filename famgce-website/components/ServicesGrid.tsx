'use client'

import { RiTeamLine, RiToolsLine, RiTruckLine, RiBox3Line } from 'react-icons/ri'
import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'

const servicesData = [
  {
    icon: RiTeamLine,
    title: "Manpower Services",
    desc: "Certified and Aramco-approved personnel for all industrial and construction projects. Riggers, engineers, and specialists ready for immediate mobilization.",
    href: "/services#manpower"
  },
  {
    icon: RiToolsLine,
    title: "Equipment Services",
    desc: "High-performance heavy equipment rental for infrastructure and industrial projects across Saudi Arabia.",
    href: "/services#equipment"
  },
  {
    icon: RiTruckLine,
    title: "Vehicle Services",
    desc: "Comprehensive fleet of industrial vehicles available for short and long-term project requirements.",
    href: "/services#vehicles"
  },
  {
    icon: RiBox3Line,
    title: "Material & Supply",
    desc: "Specialized supply services including diesel, sweet water, and bolt torquing for industrial operations.",
    href: "/services#supply"
  },
]

export default function ServicesGrid() {
  return (
    <section className="bg-light section-pad">
      <div className="container mx-auto">
        <div className="mb-16">
          <SectionHeading
            title="CONSTRUCTION &"
            highlight="INDUSTRIAL SERVICES"
            subtitle="Delivering excellence across Saudi Arabia with a full range of project support solutions."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              icon={service.icon}
              title={service.title}
              desc={service.desc}
              href={service.href}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
