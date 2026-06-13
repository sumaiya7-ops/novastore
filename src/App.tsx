import { useState } from 'react';
import { Navbar } from './layouts/Navbar';
import { Sidebar } from './layouts/Sidebar';

function App() {
  const [currentTab, setCurrentTab] = useState<'Apps' | 'Games'>('Apps');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 antialiased flex flex-col">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-col md:flex-row flex-1">
        <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

        {/* pb-24 দেওয়া হয়েছে যাতে মোবাইলে বটম ন্যাভবারের নিচে কন্টেন্ট না ঢেকে যায় */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto h-[calc(100vh-64px)] pb-24 md:pb-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1 sm:mb-2">
              Explore {currentTab}
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm">
              Discover the best {currentTab.toLowerCase()} curated just for you.
            </p>
            
            <div className="mt-6 sm:mt-8 p-8 sm:p-12 border border-dashed border-gray-800 rounded-2xl flex flex-col items-center justify-center text-center bg-gray-900/30">
              <p className="text-gray-500 font-mono text-xs sm:text-sm mb-2">
                Active Tab: <span className="text-blue-400">{currentTab}</span>
              </p>
              <p className="text-gray-500 font-mono text-xs sm:text-sm">
                Search Query: <span className="text-blue-400">"{searchQuery || 'none'}"</span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
