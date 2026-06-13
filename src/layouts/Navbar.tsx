import React from 'react';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="h-16 bg-brand-card border-b border-brand-border/60 flex items-center justify-between px-6 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-2xl text-brand">✨</span>
        <span className="text-xl font-bold text-gray-900 tracking-wide">
          Nova<span className="text-brand">Store</span>
        </span>
      </div>

      <div className="w-full max-w-md mx-4">
        <input
          type="text"
          placeholder="Search apps or games..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-blue-50/50 text-gray-800 placeholder-gray-400 pl-4 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand border border-brand-border transition-all"
        />
      </div>

      <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white font-semibold shadow-md cursor-pointer hover:bg-brand-hover transition-colors">
        S
      </div>
    </nav>
  );
};
