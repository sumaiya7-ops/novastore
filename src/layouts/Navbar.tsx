import React from 'react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">✨</span>
        <span className="text-xl font-bold text-white tracking-wide">
          Nova<span className="text-blue-500">Store</span>
        </span>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-md mx-4">
        <input
          type="text"
          placeholder="Search apps or games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-800 text-gray-200 placeholder-gray-500 pl-4 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition-all"
        />
      </div>

      {/* Profile/Avatar Placeholder */}
      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold shadow-inner cursor-pointer hover:opacity-90">
        S
      </div>
    </nav>
  );
};
