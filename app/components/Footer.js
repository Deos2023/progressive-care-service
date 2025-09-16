import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-green-500 mr-2">Progressive </span> Care Service.
            </h3>
            <p className="text-gray-300 mb-4">
              Providing professional pest control services with safe, effective, and eco-friendly solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-green-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/termite" className="text-gray-300 hover:text-green-400 transition-colors">Termite Management</a></li>
              <li><a href="/services/cockroach" className="text-gray-300 hover:text-green-400 transition-colors">Cockroach Management</a></li>
              <li><a href="/services/mosquito" className="text-gray-300 hover:text-green-400 transition-colors">Mosquito Management</a></li>
              <li><a href="/services/rodent" className="text-gray-300 hover:text-green-400 transition-colors">Rodent Management</a></li>
              <li><a href="/services/bedbugs" className="text-gray-300 hover:text-green-400 transition-colors">Bed Bugs Management</a></li>
              <li><a href="/services/bird" className="text-gray-300 hover:text-green-400 transition-colors">Bird Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-green-500 mt-1 mr-3" />
                <span className="text-gray-300">123 Pest Control Ave, City, State 12345</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="text-green-500 mt-1 mr-3" />
                <div>
                  <a href="tel:1355555555" className="text-gray-300 hover:text-green-400 transition-colors block">+1 (355) 555-5555</a>
                  <a href="tel:9804351651" className="text-gray-300 hover:text-green-400 transition-colors block">+1 (980) 435-1651</a>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-green-500 mt-1 mr-3" />
                <a href="mailto:info@condonai.com" className="text-gray-300 hover:text-green-400 transition-colors">info@condonai.com</a>
              </li>
              <li className="flex items-start">
                <FaClock className="text-green-500 mt-1 mr-3" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-300">Sun: Emergency Services Only</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Emergency Service Banner */}
        <div className="bg-green-700 rounded-lg p-6 mt-10 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white rounded-full p-3 mr-4">
              <FaPhone className="text-green-700 text-xl" />
            </div>
            <div>
              <h4 className="text-xl font-bold">24/7 Emergency Pest Control</h4>
              <p className="text-green-100">Immediate response for urgent pest problems</p>
            </div>
          </div>
          <a 
            href="tel:1355555555" 
            className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
          >
            Call Now: 9831679025, 7439839760, 9804046058
          </a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-3 md:mb-0">
              © {new Date().getFullYear()} Progressive Pest Control. All rights reserved.Developed and maintained by Digital Exposure Online Services
            </p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Terms of Service</a>
              <a href="/sitemap" className="text-gray-400 hover:text-green-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;