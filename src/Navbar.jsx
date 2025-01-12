// src/Navbar.tsx
import React from "react";
import { Sun } from "lucide-react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="bg-emerald-600 text-white w-full shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <Link to="/">
            <div className="flex items-center space-x-3">
              <Sun className="w-6 h-6 text-white" />
              <span className="text-lg font-semibold hidden sm:block">
                Sunshine Energy Consultants
              </span>
              <span className="text-lg font-semibold sm:hidden text-center whitespace-normal">
                Sunshine Energy <br /> Consultants
              </span>
            </div>
          </Link>
          {/* Call Button */}
          <a
            href="tel:786-651-7108"
            className="inline-flex items-center px-4 py-2 bg-white text-emerald-600 border-2 border-emerald-600 rounded-full font-medium hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors duration-300"
          >
            📞 <span className="hidden sm:block ml-2">Call us today: </span>
            <span className="ml-2">(786) 651-7108</span>
          </a>
        </div>
      </div>
    </nav>
  );
}