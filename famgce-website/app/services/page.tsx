import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { RiTeamLine, RiToolsLine, RiTruckLine, RiBox3Line, RiCheckLine } from 'react-icons/ri'
import CallbackForm from '@/components/CallbackForm'

export const metadata: Metadata = {
  title: 'Our Services | Manpower, Equipment & Supply – FAMGCE Saudi Arabia',
  description: 'Premium industrial services by FAMGCE: certified manpower, heavy equipment rental, vehicle services, diesel & material supply in Saudi Arabia.',
}

const serviceDetails = [
  {
    id: 'manpower',
    icon: RiTeamLine,
    title: 'Manpower Services',
    desc: 'At FAMGCE, we provide highly skilled and Aramco-approved professionals for any critical industrial project. Our manpower solutions range from certified riggers and engineers to specialized technical teams, all trained to meet international standards of safety and technical excellence.',
    bullets: [
      'Aramco-Approved Certified Riggers',
      'Civil & Mechanical Engineers',
      'Safety Officers & Supervisors',
      'Technical Support Personnel',
      'Quick Mobilization Across Saudi Arabia'
    ],
    image: '/images/single_service_01.jpg',
    isDark: false,
    imageLeft: false,
  },
  {
    id: 'equipment',
    icon: RiToolsLine,
    title: 'Equipment Services',
    desc: 'Our modern fleet of high-performance heavy machinery ensure that your project stays on schedule with maximum efficiency and reliability. We provide short and long-term rental solutions with full maintenance support for all types of industrial and infrastructure projects.',
    bullets: [
      'Excavators & Heavy Machinery',
      'Cranes & Lifting Equipment',
      'Forklifts & Material Handling',
      'Power Generators & Air Compressors',
      '24/7 Technical Maintenance Support'
    ],
    image: '/images/single_service_02.jpg',
    isDark: true,
    imageLeft: true,
  },
  {
    id: 'vehicles',
    icon: RiTruckLine,
    title: 'Vehicle Services',
    desc: 'Providing a comprehensive fleet of professional transportation solutions including buses, light vehicles, and high-capacity industrial trucks. Our vehicles are maintained to the highest safety standards and provided with experienced, certified drivers.',
    bullets: [
      'Personnel Transport Buses (55/30 Seaters)',
      'Light Vehicles (SUV / Double Cab)',
      'Hiace Vans & Minicoaches',
      'Industrial Pickups & Flatbed Trucks',
      'Certified Professional Drivers'
    ],
    image: '/images/single_service_03.jpg',
    isDark: false,
    imageLeft: false,
  },
  {
    id: 'supply',
    icon: RiBox3Line,
    title: 'Material & Supply',
    desc: 'Reliable supply solutions for critical industrial operations. We ensure that your project site remains operational 24/7 with the continuous provision of essential materials and liquids.',
    bullets: [
      'Diesel Supply (24/7 Delivery)',
      'Sweet Water Supply',
      'Salt Water Supply',
      'Industrial Consumables',
      'Bolt Torquing Specialized Services'
    ],
    image: '/images/single_service_04.jpg',
    isDark: true,
    imageLeft: true,
    specialties: [
      { name: 'Diesel Supply', icon: RiTruckLine },
      { name: 'Sweet Water Supply', icon: RiBox3Line },
      { name: 'Bolt Torquing', icon: RiToolsLine }
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="bg-dark py-24 md:py-32 border-l-[12px] border-green-brand">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="font-heading text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
            Our <span className="text-green-brand">Services</span>
          </h1>
          <div className="flex items-center gap-3 mt-8 font-heading text-lg font-bold tracking-widest uppercase">
            <Link href="/" className="text-gray-500 hover:text-white transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <span className="text-green-brand">Our Services</span>
          </div>
        </div>
      </section>

      {/* Services List */}
      {serviceDetails.map((service, idx) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`${service.isDark ? 'bg-light' : 'bg-white'} section-pad overflow-hidden`}
        >
          <div className="container mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center ${service.imageLeft ? 'md:flex-row-reverse' : ''}`}>
              
              <div className={`${service.imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="text-5xl text-green-brand" />
                  <div className="w-12 h-[2px] bg-green-brand" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-dark mb-6 tracking-tight">
                  {service.title}
                </h2>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-3 font-body text-gray-500 font-medium whitespace-nowrap lg:whitespace-normal">
                      <div className="bg-green-brand/10 p-1">
                        <RiCheckLine className="text-green-brand text-xl" />
                      </div>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {service.specialties && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                    {service.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="bg-dark-3 p-6 text-center border-t-2 border-green-brand shadow-lg">
                        <spec.icon className="text-3xl text-green-brand mx-auto mb-3" />
                        <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">{spec.name}</h4>
                      </div>
                    ))}
                  </div>
                )}

                <Link href="/contact" className="btn-green inline-block">
                  Request This Service
                </Link>
              </div>

              <div className={`relative h-[400px] md:h-[600px] w-full shadow-2xl ${service.imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Callback Form at bottom */}
      <div className="bg-dark text-white pt-20">
        <div className="text-center mb-10 px-4">
          <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase">
             Request a <span className="text-green-brand">Service Quote</span>
          </h2>
          <p className="font-body text-gray-400 mt-4 uppercase tracking-[0.2em] text-sm">Fill the form below and our experts will contact you</p>
        </div>
        <CallbackForm />
      </div>
    </div>
  )
}
