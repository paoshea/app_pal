import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinksProps {
  className?: string;
}

function NavLinks({ className = '' }: NavLinksProps) {
  return (
    <nav className={className}>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/projects" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/projectideas" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            Project Ideas
          </Link>
        </li>
        <li>
          <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;