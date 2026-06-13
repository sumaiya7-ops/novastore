import React from 'react';

interface SidebarProps {
  currentTab: 'Apps' | 'Games';
  setCurrentTab: (tab: 'Apps' | 'Games') => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentTab, setCurrentTab }) => {
  return (
    <aside className="fixed bottom-0 left-0 right-0 h-16 bg-brand-card border-t border-brand-border/60 flex justify-around items-center px-4 z-50 md:sticky md:top-16 md:w-64 md:h-[calc(100vh-64px)] md:flex-col md:justify-start md:gap-2 md:p-4 md:border-t-0 md:border-r md:border-brand-border/60 shadow-lg md:shadow-none">
      <button
        onClick={() => setCurrentTab('Apps')}
        className={`flex items-center gap-2 px-6 py-2 md:w-full md:text-left md:px-4 md:py-3 rounded-xl font-medium transition-all ${
          currentTab === 'Apps'
            ? 'bg-brand/10 text-brand font-bold shadow-sm'
            : 'text-gray-500 hover:text-gray-900 md:hover:bg-blue-50'
        }`}
      >
        <span className="text-xl">📱</span>
        <span className="text-sm md:text-base">Apps</span>
      </button>
      <button
        onClick={() => setCurrentTab('Games')}
        className={`flex items-center gap-2 px-6 py-2 md:w-full md:text-left md:px-4 md:py-3 rounded-xl font-medium transition-all ${
          currentTab === 'Games'
            ? 'bg-brand/10 text-brand font-bold shadow-sm'
            : 'text-gray-500 hover:text-gray-900 md:hover:bg-blue-50'
        }`}
      >
        <span className="text-xl">🎮</span>
        <span className="text-sm md:text-base">Games</span>
      </button>
    </aside>
  );
};
