import React from 'react';
import { Link } from 'react-router-dom';
import { Box, X } from 'lucide-react';
import NavLinks from '../navigation/NavLinks';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 w-64 bg-white transform transition-transform duration-200 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:hidden
      `}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link to="/" className="flex items-center" onClick={onClose}>
            <Box className="w-6 h-6 text-blue-600" />
            <span className="ml-3 text-xl font-semibold">App_Pal</span>
          </Link>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <NavLinks className="p-4" />
      </div>
    </>
  );
}