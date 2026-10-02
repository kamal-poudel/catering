import React, { useState } from 'react';
import { Calendar, User, Users, Hash, ChevronDown, ChevronUp, FileSpreadsheet } from 'lucide-react';

export default function EventInfoBar({ customerInfo, setCustomerInfo }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleChange = (field, value) => {
    setCustomerInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-6 transition-all">
      {/* Header with collapse toggle */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3.5 bg-gradient-to-r from-stone-50 via-amber-50/40 to-stone-50 border-b border-stone-200/80 flex items-center justify-between text-left hover:bg-amber-50/60 transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <FileSpreadsheet className="w-5 h-5 text-amber-700" />
          <span className="font-semibold text-stone-800 text-sm sm:text-base">
            Event & Customer Details (Printed on Header / Footer)
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
          <span>{isExpanded ? 'Hide' : 'Show Details'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {/* Inputs Form */}
      {isExpanded && (
        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-amber-600" />
              Customer / Party Name & Address
            </label>
            <input
              type="text"
              placeholder="e.g. Sh. Rajesh Sharma, Sec 12 Panchkula"
              value={customerInfo.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-stone-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-600" />
              Date of Event / Order
            </label>
            <input
              type="text"
              placeholder="e.g. 15/10/2026"
              value={customerInfo.date || ''}
              onChange={(e) => handleChange('date', e.target.value)}
              className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-stone-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-600" />
              Total Persons (Guest Count)
            </label>
            <input
              type="text"
              placeholder="e.g. 350"
              value={customerInfo.persons || ''}
              onChange={(e) => handleChange('persons', e.target.value)}
              className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-stone-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-amber-600" />
              Order No.
            </label>
            <input
              type="text"
              placeholder="e.g. 12345"
              value={customerInfo.orderNo || ''}
              onChange={(e) => handleChange('orderNo', e.target.value)}
              className="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-stone-400"
            />
          </div>

        </div>
      )}
    </div>
  );
}
