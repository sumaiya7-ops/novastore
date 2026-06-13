import { useState } from 'react';
import { Navbar } from './layouts/Navbar';
import { Sidebar } from './layouts/Sidebar';
import { AppCard } from './components/AppCard';
import { mockApps } from './data'; // ডেটা ফাইল ইম্পোর্ট করা হলো

function App() {
  const [currentTab, setCurrentTab] = useState<'Apps' | 'Games'>('Apps');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // ১. সাব-ক্যাটাগরি ট্র্যাক করার জন্য নতুন স্টেট
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('All');

  // ট্যাব পরিবর্তন হলে সাব-ক্যাটাগরি রিসেট করার ফাংশন
  const handleTabChange = (tab: 'Apps' | 'Games') => {
    setCurrentTab(tab);
    setSelectedSubCategory('All'); // ট্যাব বদলালে ফিল্টার 'All' হয়ে যাবে
  };

  // ২. বর্তমান ট্যাবের ওপর ভিত্তি করে সাব-ক্যাটাগরির লিস্ট ডাইনামিকালি তৈরি করা
  const availableSubCategories = [
    'All',
    ...Array.from(
      new Set(
        mockApps
          .filter((app) => app.category === currentTab)
          .map((app) => app.subCategory)
      )
    ),
  ];

  // ৩. ফিল্টারিং লজিক (ট্যাব + সাব-ক্যাটাগরি + সার্চ কুয়েরি)
  const filteredApps = mockApps.filter((app) => {
    const matchesTab = app.category === currentTab;
    const matchesSubCategory = selectedSubCategory === 'All' || app.subCategory === selectedSubCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          app.developer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesTab && matchesSubCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white antialiased flex flex-col">
      {/* নেভবার */}
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="flex flex-col md:flex-row flex-1">
        {/* সাইডবার */}
        <Sidebar currentTab={currentTab} setCurrentTab={handleTabChange} />

        {/* মেইন কন্টেন্ট */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto h-[calc(100vh-64px)] pb-24 md:pb-8">
          <div className="max-w-7xl mx-auto">
            
            {/* হেডার সেকশন */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1 sm:mb-2 text-white">
                Explore <span className="text-emerald-400">{currentTab}</span>
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm">
                Discover the best {currentTab.toLowerCase()} curated just for you.
              </p>
            </div>

            {/* ৪. সাব-ক্যাটাগরি ফিল্টার বাটন রো (Pill Buttons) */}
            <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none snap-x">
              {availableSubCategories.map((subCat) => (
                <button
                  key={subCat}
                  onClick={() => setSelectedSubCategory(subCat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 snap-start border ${
                    selectedSubCategory === subCat
                      ? 'bg-emerald-500 text-slate-950 border-emerald-500 font-bold shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-800 text-gray-400 border-slate-700/50 hover:text-white hover:bg-slate-700/60'
                  }`}
                >
                  {subCat}
                </button>
              ))}
            </div>
            
            {/* অ্যাপ কার্ড গ্রিড */}
            {filteredApps.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredApps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            ) : (
              <div className="mt-12 text-center py-12 border border-dashed border-slate-800 rounded-2xl bg-slate-900/50">
                <span className="text-4xl mb-3 block">🔍</span>
                <p className="text-gray-400 font-medium">No {currentTab.toLowerCase()} found matching your criteria.</p>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
