import React from 'react';
import { FaBeer, FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import logo from '../assets/toyncars-logo.png'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="my-container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div>
                        <img className='w-32' src={logo} alt="" />
                        <h3 className="text-xl font-bold mb-4"><span className='text-blue-700'>Toys</span><span className='pc'>cars</span></h3>
                        <p className="text-sm">123 sirajganj, dhaka, Bangladesh</p>
                        <p className="text-sm">Phone: 452-524-5215</p>
                        <p className="text-sm">Email: info@toyscars.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400">About</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400">Services</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>
                    <div className="flex-grow text-gray-400 text-sm ml-6">
                        <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
                        <ul>
                            <li className="mb-1"><a href="#" className="hover:text-gray-300"> Online sell toy car </a></li>
                            <li className="mb-1"><a href="#" className="hover:text-gray-300">Best quality</a></li>
                            <li className="mb-1"><a href="#" className="hover:text-gray-300">Home delivery</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
                        <p className="text-sm">Follow us on social media:</p>
                        <div className="flex space-x-4 mt-2">
                            <p className="text-sm hover:text-gray-400 cursor-pointer">
                                <FaFacebook size={35} ></FaFacebook>
                            </p>
                            <p className="text-sm hover:text-gray-400 cursor-pointer">
                                <FaTwitter size={35}></FaTwitter>
                            </p>
                            <p className="text-sm hover:text-gray-400 cursor-pointer">
                                <FaInstagramSquare size={35}></FaInstagramSquare>
                            </p>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <div className="flex">
                            <input type="email" className="bg-gray-700 text-gray-200 py-2 px-3 rounded-l-md focus:outline-none" placeholder="Enter your email" />
                            <button type="submit" className="my-btn text-white py-2 px-4 rounded-r-md hover:bg-amber-600 focus:outline-none">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-700" />
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} Toyscars. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;