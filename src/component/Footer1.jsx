import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer1 = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">ShopEase</h1>
          <p className="text-gray-400">
            Your one-stop online store for amazing products and unbeatable deals.
          </p>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Products</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
          <p className="text-gray-400">123 Main Street, City, Country</p>
          <p className="text-gray-400 mt-2">Email: support@shopease.com</p>
          <p className="text-gray-400 mt-2">Phone: +1 234 567 890</p>
        </div>

    
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-sky-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-700 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer1;
