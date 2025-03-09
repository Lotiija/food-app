import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    // State to manage the visibility of the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);

    // Toggle the mobile menu visibility
    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };
  
    // Collapse the mobile menu when a link is clicked
    const collapseMenu = () => {
      setIsMobileMenuOpen(false);
    };
  
  return (
    <header class="bg-gray-800 text-white p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        {/* <!-- Logo Section --> */}
        <div class="flex items-center space-x-4">
          <img src="/Images/logo1.jpg" alt="Logo" class="h-12"/>
          <span class="text-xl font-semibold">Loti's Delight</span>
        </div>

        {/* Navbar (Desktop version) */}
        <div className="hidden md:flex space-x-6">
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>
          {/* <!-- Cart Icon Section --> */}
          <div className='flex justify-between'>
            <div className="ms-auto">
              <FaShoppingCart />
            </div>
            <div class="absolute">
              <button class="text-white text-2xl focus:outline-none">
                <i class="fas fa-shopping-cart"></i>
                {/* <!-- Cart item count --> */}
                <span class="absolute bottom-3 left-3 rounded-full bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center">3</span>
              </button>
            </div>
          </div>
        </div>


        {/* Mobile Menu (Hidden by default) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
          <a href="#home" className="block hover:text-yellow-400" onClick={collapseMenu}>Home</a>
          <a href="#about" className="block hover:text-yellow-400" onClick={collapseMenu}>About</a>
          <a href="#services" className="block hover:text-yellow-400" onClick={collapseMenu}>Services</a>
          <a href="#contact" className="block hover:text-yellow-400" onClick={collapseMenu}>Contact</a>
        </div>
      )}

           {/* Hamburger Menu (Mobile version) */}
           <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

  )
}

export default Header