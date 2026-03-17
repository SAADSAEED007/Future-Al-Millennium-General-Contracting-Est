import Link from 'next/link'
import Image from 'next/image'
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri'

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t border-green-brand/20">
      <div className="section-pad">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-24">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="FAMGCE Logo"
                width={180}
                height={55}
                className="w-auto h-12"
              />
            </Link>
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-green-brand">
                Future Al Millennium General Contracting Est.
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Your trusted partner in industrial support and general contracting services with over 5 years of certified excellence in Saudi Arabia.
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-none border border-gray-700 flex items-center justify-center text-gray-400 hover:text-green-brand hover:border-green-brand transition-all duration-300"
                aria-label="Facebook"
              >
                <RiFacebookFill size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-none border border-gray-700 flex items-center justify-center text-gray-400 hover:text-green-brand hover:border-green-brand transition-all duration-300"
                aria-label="LinkedIn"
              >
                <RiLinkedinFill size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-8">
            <h4 className="font-heading text-xl font-bold uppercase tracking-widest relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-green-brand">
              Additional Pages
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Why Choose Us', href: '/#why-choose-us' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-brand transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-green-brand transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Mini Form */}
          <div className="flex flex-col gap-8">
            <h4 className="font-heading text-xl font-bold uppercase tracking-widest relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-green-brand">
              Contact Us
            </h4>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border border-gray-700 text-white font-body text-sm px-4 py-3 w-full focus:border-green-brand outline-none placeholder-gray-600 transition-colors"
                required
              />
              <input
                type="email"
                placeholder="E-Mail Address"
                className="bg-transparent border border-gray-700 text-white font-body text-sm px-4 py-3 w-full focus:border-green-brand outline-none placeholder-gray-600 transition-colors"
                required
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="bg-transparent border border-gray-700 text-white font-body text-sm px-4 py-3 w-full focus:border-green-brand outline-none placeholder-gray-600 transition-colors resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-brand hover:bg-green-dark text-white font-heading font-bold uppercase tracking-widest py-3 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-xs tracking-wider">
            Copyright &copy; 2024 Future Al Millennium General Contracting Est. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
