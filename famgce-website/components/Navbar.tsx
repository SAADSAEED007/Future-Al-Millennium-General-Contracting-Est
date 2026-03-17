'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-dark border-b border-green-brand/40 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-[60]">
          <Image
            src="/images/logo.png"
            alt="FAMGCE Logo"
            width={180}
            height={55}
            priority
            className="w-auto h-10 md:h-12"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-heading text-lg tracking-wide transition-colors duration-300 relative group py-2 ${
                pathname === link.href ? 'text-green-brand' : 'text-white'
              } hover:text-green-brand`}
            >
              {link.name}
              {/* Underline logic */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-green-brand transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none relative z-[60]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-0 bg-dark z-50 flex flex-col items-center justify-center gap-8 pt-20"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-heading text-3xl uppercase tracking-widest ${
                    pathname === link.href ? 'text-green-brand underline underline-offset-8' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
