import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import bridgeNavLogo from '../assets/BridgeNav_Logo.png'

function NavBar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={bridgeNavLogo} alt="BridgeNav Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-maritime-blue bg-blue-50' 
                  : 'text-gray-700 hover:text-maritime-blue'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-maritime-blue bg-blue-50' 
                  : 'text-gray-700 hover:text-maritime-blue'
              }`}
            >
              About
            </Link>
            <Link 
              to="/quicklog" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/quicklog') 
                  ? 'text-maritime-blue bg-blue-50' 
                  : 'text-gray-700 hover:text-maritime-blue'
              }`}
            >
              QuickLog Pro
            </Link>
            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-maritime-blue bg-blue-50' 
                  : 'text-gray-700 hover:text-maritime-blue'
              }`}
            >
              Contact
            </Link>
            <button className="bg-maritime-blue text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-maritime-blue focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-md mt-2">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-maritime-blue hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-maritime-blue hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/quicklog" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-maritime-blue hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                QuickLog Pro
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-maritime-blue hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="w-full text-left bg-maritime-blue text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar