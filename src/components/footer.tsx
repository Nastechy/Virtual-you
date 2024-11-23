'use client'

import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; 
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const yearParagraph = document.querySelector('.footer-year');
    if (yearParagraph) {
      yearParagraph.textContent = `VirtualYou Platform © ${currentYear}. All rights reserved.`;
    }
  }, [currentYear]); 

  return (
    <footer className="bg-[#466A5E] p-8 rounded-[20px]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-xl font-semibold mb-4">VirtualYou Platform</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <Input
              type="email"
              placeholder="Enter your email to get the latest from us"
              className="bg-white text-emerald-800 placeholder:text-gray-500 w-full md:w-64"
            />
            <Button className="bg-emerald-700 hover:bg-emerald-600 text-white w-full md:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
        <div className='border-b mb-8 border-white/60'></div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <p className="text-gray-200 text-sm leading-relaxed max-w-lg">
            Our team helps buyers find the perfect 
            home and sellers get the best value for 
            their property. From expert advice to smooth 
            negotiations, we&apos;re with you every step of the way.
          </p>
          <div>
            <h3 className="text-gray-200 text-sm font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">VirtualYou Platform</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Leadership Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Locations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-200 text-sm font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Support</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">In the Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-200 text-sm font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">+234 900 000 0000</li>
              <li className="text-gray-300 text-sm break-all">customerservice@virtualyouplatform.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-200 text-sm font-semibold mb-4">Follow us on Social Media</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaYoutube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebookF className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedinIn className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/60 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            VirtualYou Platform © 2024. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
