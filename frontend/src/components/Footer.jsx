import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto flex justify-center items-center">
        {/* Left Section: Logo or Text */}
        <div className="text-sm">
          <p>&copy; Loti's Delight {currentYear}. All rights reserved.</p>
      </div>
    </div>
  </footer>

  )
}

export default Footer;