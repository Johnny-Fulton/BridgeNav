import { Link } from 'react-router-dom'
import bridgeNavLogo from '../assets/BridgeNav_Logo.png'
import bridgeNavBanner from '../assets/BridgeNav_Banner.png'

function Footer() {
  return (
    <footer className="bg-maritime-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img src={bridgeNavBanner} alt="BridgeNav Banner" className="h-16 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional maritime training, tools, and safety systems for workboats and merchant vessels. 
              Built by experienced marine pilots for the maritime industry.
            </p>
            <p className="text-sm text-gray-400">
              Founded by Johnny, UK Marine Pilot with Master Unlimited CoC and 7 years pilotage experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/quicklog" className="text-gray-300 hover:text-white transition-colors">
                  QuickLog Pro
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>SMS for Workboats</li>
              <li>Maritime Training</li>
              <li>BRM Courses</li>
              <li>Compliance Tools</li>
              <li>Safety Systems</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BridgeNav. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer