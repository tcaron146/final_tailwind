import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-permblack text-white py-4 text-center w-full">
    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">About Us</a></li>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Contact</a></li>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Careers</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Product 1</a></li>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Product 2</a></li>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Product 3</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Documentation</a></li>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Blog</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <ul>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Twitter</a></li>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Facebook</a></li>
            <li><a href="#" className="pb-1.5 transition-all hover:font-bold hover:underline decoration-highlights">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer