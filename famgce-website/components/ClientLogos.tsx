'use client'

import Image from 'next/image'

const logos = [
  '/images/client-01.jpg',
  '/images/client-02.jpg',
  '/images/client-03.jpg',
  '/images/client-04.jpg',
]

// Double for seamless loop
const allLogos = [...logos, ...logos, ...logos, ...logos]

export default function ClientLogos() {
  return (
    <section className="bg-white py-20 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 mb-12">
        <h4 className="text-center text-xs font-heading font-bold tracking-[0.4em] text-gray-400 uppercase">
          Our Trusted Partners
        </h4>
      </div>

      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max animate-marquee space-x-12 md:space-x-24 items-center px-12 md:px-24">
          {allLogos.map((logo, idx) => (
            <div key={idx} className="relative w-32 md:w-48 h-16 md:h-24 flex-shrink-0">
              <Image
                src={logo}
                alt={`Partner ${idx + 1}`}
                fill
                className="object-contain opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* CSS for marquee is added to globals.css or using a style tag here for portability */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  )
}
