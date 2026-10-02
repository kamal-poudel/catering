import React from 'react';
import { Search, X, Filter } from 'lucide-react';

export default function CategoryNav({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  itemsCount,
  filledCount,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-4 mb-6 sticky top-20 z-30 backdrop-blur-md bg-white/95">
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search Hindi items (e.g. पनीर, दाल, आलू, चाट)..."
            className="w-full pl-10 pr-9 py-2.5 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-stone-400 font-hindi"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Stats Pill */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            {filledCount} of {itemsCount} items filled
          </span>
        </div>
      </div>

      {/* Category Horizontal Filter Buttons */}
      <div className="mt-3.5 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
        <button
          onClick={() => onSelectCategory('ALL')}
          className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg font-medium transition-all ${
            selectedCategory === 'ALL'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          All Items ({itemsCount})
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
              selectedCategory === cat.id
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            <span>{cat.name}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCategory === cat.id
                  ? 'bg-amber-700 text-white'
                  : 'bg-stone-200 text-stone-600'
              }`}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
