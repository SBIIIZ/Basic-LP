import React from 'react';
import { Menu, X, Aperture } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Aperture className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Logo</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#progetti" className="text-gray-600 hover:text-blue-600">Progetti</a>
            <a href="#contatti" className="text-gray-600 hover:text-blue-600">Contatti</a>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#progetti" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={toggleMenu}>Progetti</a>
          <a href="#contatti" className="block py-2 px-4 text-sm hover:bg-gray-200" onClick={toggleMenu}>Contatti</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;