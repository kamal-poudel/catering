import React from 'react';

export default function MenuTable({
  items,
  quantities,
  onQuantityChange,
  onUnitChange,
}) {
  if (!items || items.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center border border-stone-200 shadow-sm text-stone-500">
        <p className="text-base font-medium">No menu items found matching your filter or search query.</p>
        <p className="text-xs text-stone-400 mt-1">Try selecting "All Items" or clearing the search box.</p>
      </div>
    );
  }

  // Group items by category for clear readability
  const groupedByCategory = items.reduce((acc, item) => {
    const cat = item.category || 'OTHER';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      {Object.entries(groupedByCategory).map(([categoryName, catItems]) => (
        <div
          key={categoryName}
          className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden"
        >
          {/* Category Banner */}
          <div className="px-5 py-3 bg-stone-900 text-stone-100 flex items-center justify-between border-b border-stone-800">
            <h2 className="font-serif-heading text-sm md:text-base font-bold tracking-wider uppercase text-amber-400">
              {categoryName}
            </h2>
            <span className="text-xs text-stone-400 font-medium">
              {catItems.length} items
            </span>
          </div>

          {/* Table Header */}
          <div className="hidden sm:grid sm:grid-cols-12 px-5 py-3 bg-stone-100/80 border-b border-stone-200 text-xs font-bold text-stone-700 uppercase tracking-wider">
            <div className="sm:col-span-6">ITEM NAME (सामग्री का नाम)</div>
            <div className="sm:col-span-3 text-center">QUANTITY (मात्रा)</div>
            <div className="sm:col-span-3 text-center">UNIT (इकाई)</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-stone-150">
            {catItems.map((item, idx) => {
              const currentData = quantities[item._id] || {
                quantity: '',
                unit: item.defaultUnit || 'Kg',
              };
              const isFilled = currentData.quantity && currentData.quantity.trim() !== '';

              return (
                <div
                  key={item._id}
                  className={`flex flex-col sm:grid sm:grid-cols-12 items-stretch sm:items-center px-4 sm:px-5 py-3 transition-colors ${
                    isFilled ? 'bg-amber-50/40' : idx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50'
                  } hover:bg-amber-50/60`}
                >
                  {/* Item Name (Hindi) */}
                  <div className="sm:col-span-6 flex items-center justify-between sm:justify-start gap-3 mb-2 sm:mb-0">
                    <span className="font-hindi text-base md:text-lg font-semibold text-stone-900 leading-snug">
                      {item.nameHindi}
                    </span>
                    {isFilled && (
                      <span className="inline-block sm:hidden text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-800 border border-amber-300">
                        {currentData.quantity} {currentData.unit}
                      </span>
                    )}
                  </div>

                  {/* Quantity Input */}
                  <div className="sm:col-span-3 flex items-center justify-center">
                    <div className="w-full sm:max-w-[140px] relative">
                      <input
                        type="text"
                        inputMode="decimal"
                        pattern="[0-9]*[.]?[0-9]*"
                        placeholder="Leave blank if unneeded"
                        value={currentData.quantity || ''}
                        onChange={(e) => {
                          let val = e.target.value;
                          // Disallow negative numbers
                          if (val.includes('-')) return;
                          // Allow only digits and decimal dot
                          if (val !== '' && !/^\d*\.?\d*$/.test(val)) return;
                          onQuantityChange(item._id, val);
                        }}
                        className={`w-full text-center px-3 py-2 text-base sm:text-sm font-semibold rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-amber-500/30 ${
                          isFilled
                            ? 'border-amber-500 bg-white text-stone-900 shadow-sm font-bold'
                            : 'border-stone-300 bg-white text-stone-700 placeholder:text-stone-300'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Unit Selector */}
                  <div className="sm:col-span-3 flex items-center justify-center mt-2 sm:mt-0">
                    <div className="w-full sm:max-w-[140px]">
                      {item.allowedUnits && item.allowedUnits.length > 1 ? (
                        <select
                          value={currentData.unit || item.defaultUnit}
                          onChange={(e) => onUnitChange(item._id, e.target.value)}
                          className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-lg text-stone-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 cursor-pointer text-center"
                        >
                          {item.allowedUnits.map((u) => (
                            <option key={u} value={u}>
                              {u}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <div className="w-full py-2 px-3 text-center bg-stone-100 text-stone-700 font-semibold text-sm rounded-lg border border-stone-200">
                          {item.defaultUnit || 'Kg'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
