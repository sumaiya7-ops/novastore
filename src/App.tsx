import { useState } from 'react';
import { Navbar } from './layouts/Navbar';
import { Sidebar } from './layouts/Sidebar';

function App() {
  const [currentTab, setCurrentTab] = useState<'Apps' | 'Games'>('Apps');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen bg-brand-bg text-gray-800 antialiased flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-col md:flex-row flex-1">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto h-[calc(100vh-64px)] pb-24 md:pb-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1 sm:mb-2 text-gray-900">
              Explore <span className="text-brand">{currentTab}</span>
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm">
              Discover the best {currentTab.toLowerCase()} curated just for you.
            </p>
            
            {/* লাইট মোড ড্যাশবোর্ড বক্স */}
            <div className="mt-6 sm:mt-8 p-8 sm:p-12 border border-dashed border-brand/30 rounded-2xl flex flex-col items-center justify-center text-center bg-white/80 backdrop-blur-sm shadow-sm">
              <p className="text-gray-600 font-mono text-xs sm:text-sm mb-2">
                Active Tab: <span className="text-brand font-bold">{currentTab}</span>
              </p>
              <p className="text-gray-600 font-mono text-xs sm:text-sm">
                Search Query: <span className="text-brand font-bold">"{searchQuery || 'none'}"</span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
