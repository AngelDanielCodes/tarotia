import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-16 bg-black/30 backdrop-blur-sm flex flex-col items-center py-4">
      <button className="text-white hover:text-purple-400 transition-colors">
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;