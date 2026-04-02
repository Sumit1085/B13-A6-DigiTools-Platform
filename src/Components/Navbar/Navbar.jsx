import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import "./Navbar.css"



const Navbar = () => {
    return (
        <div className=' stickyNavbar'>
            <div className='container mx-auto'>
                <div className="navbar bg-base-100 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                               <li className='text-base font-semibold'><a>Products</a></li>
                                <li className='text-base font-semibold'><a>Features</a></li>
                                <li className='text-base font-semibold'><a>Pricing</a></li>
                                <li className='text-base font-semibold'><a>Testimonials</a></li>
                                <li className='text-base font-semibold'><a>FAQ</a></li>
                            </ul>
                        </div>
                        <a className="btn text-[#4f39f6] font-extrabold btn-ghost text-2xl">DigiTools</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li className='text-base font-semibold'><a>Products</a></li>
                            <li className='text-base font-semibold'><a>Features</a></li>
                            <li className='text-base font-semibold'><a>Pricing</a></li>
                            <li className='text-base font-semibold'><a>Testimonials</a></li>
                            <li className='text-base font-semibold'><a>FAQ</a></li>

                        </ul>
                    </div>
                    <div className="navbar-end space-x-4">
                        <IoCartOutline className='text-3xl' />

                        <a className=' text-base font-semibold cursor-pointer'>Login</a>
                        <a className="btn text-white rounded-4xl bg-linear-to-r from-[#4f39f6] to-[#9514fa]">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;