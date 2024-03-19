import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Header() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        
        <nav className="flex items-center justify-between flex-wrap bg-white p-6 border-b-4 fixed w-full top-0 left-0">
            <div className="flex items-center flex-shrink-0 text-black mr-6">
                <span className="font-semibold text-xl tracking-tight">Company Logo</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-black-200 border-black-400 hover:text-black hover:border-black">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
                </button>
            </div>
            <div className={`${isOpen ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto relative mr-8`}>
                <div className="text-base lg:flex-grow absolute right-0">
                    <Link to="/" className="cta-nav-titles">
                        Home
                    </Link>
                    <Link to="/" className="cta-nav-titles">
                        About Us
                    </Link>
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-50 hover:-skew-x-12 transition transform">
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header