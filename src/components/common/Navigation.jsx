import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const navItems = [
    { name: 'Why Us', action: () => scrollToSection('why-us') },
    { name: 'Portfolio', action: () => scrollToSection('portfolio') },
    { name: 'Stats', action: () => scrollToSection('stats') },
    { name: 'Services', action: () => scrollToSection('services') },
    { name: 'Process', action: () => scrollToSection('process') },
    { name: 'Call-to-Action', action: () => scrollToSection('cta') },
    { name: 'About Us', action: () => scrollToSection('about') },
    { name: 'Contact', link: '/contact' }
  ]

  return (
    <nav className='fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md rounded-full px-8 py-4'>
      <ul className='flex items-center space-x-6'>
        {navItems.map((item, index) => (
          <li key={index}>
            {item.link ? (
              <Link 
                to={item.link}
                className='font-[font1] text-sm lg:text-base text-white hover:text-[#D3FD50] transition-colors duration-300 uppercase tracking-wide'
              >
                {item.name}
              </Link>
            ) : (
              <button 
                onClick={item.action}
                className='font-[font1] text-sm lg:text-base text-white hover:text-[#D3FD50] transition-colors duration-300 uppercase tracking-wide'
              >
                {item.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation