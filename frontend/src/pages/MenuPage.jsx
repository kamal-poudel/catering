import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  Loader2,
  RefreshCw,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Trash2,
  Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EventInfoBar from '../components/EventInfoBar';
import CategoryNav from '../components/CategoryNav';
import MenuTable from '../components/MenuTable';
import PdfPreviewModal from '../components/PdfPreviewModal';
import { fetchMenuItems, generateMenuPdf } from '../services/api';

export default function MenuPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Temporary state for quantities: { [itemId]: { quantity: string, unit: string } }
  const [quantities, setQuantities] = useState({});

  // Optional Customer & Event Information
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    date: '',
    persons: '',
    orderNo: '',
  });

  // UI Filters
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // PDF Generation state
  const [generating, setGenerating] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [generationError, setGenerationError] = useState(null);

  // Load items from API on mount
  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchMenuItems();
      setItems(data);

      // Initialize default units without filling quantities (quantities remain empty)
      const initialQuantities = {};
      data.forEach((item) => {
        initialQuantities[item._id] = {
          quantity: '',
          unit: item.defaultUnit || 'Kg',
        };
      });
      setQuantities(initialQuantities);
    } catch (err) {
      console.error('Failed to load menu items:', err);
      setError('Failed to connect to backend or load menu items. Please ensure backend server and MongoDB are running.');
    } finally {
      setLoading(false);
    }
  };

  // Quantity change handler
  const handleQuantityChange = (itemId, val) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: val,
      },
    }));
  };

  // Unit change handler
  const handleUnitChange = (itemId, unit) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        unit: unit,
      },
    }));
  };

  // Reset all entered quantities
  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all entered quantities?')) {
      const resetQuantities = {};
      items.forEach((item) => {
        resetQuantities[item._id] = {
          quantity: '',
          unit: item.defaultUnit || 'Kg',
        };
      });
      setQuantities(resetQuantities);
    }
  };

  // Categories list with item counts
  const categories = useMemo(() => {
    const map = new Map();
    items.forEach((item) => {
      const cat = item.category || 'OTHER';
      map.set(cat, (map.get(cat) || 0) + 1);
    });

    return Array.from(map.entries()).map(([name, count]) => ({
      id: name,
      name,
      count,
    }));
  }, [items]);

  // Filtered items based on Category and Search Query
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === 'ALL' || item.category === selectedCategory;

      const matchesSearch =
        !searchQuery.trim() ||
        item.nameHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  // Count how many items currently have quantities entered
  const filledCount = useMemo(() => {
    return Object.values(quantities).filter(
      (entry) => entry.quantity && String(entry.quantity).trim() !== ''
    ).length;
  }, [quantities]);

  // Generate PDF handler
  const handleGeneratePdf = async () => {
    try {
      setGenerating(true);
      setGenerationError(null);

      // Prepare payload: only send items structure
      const payloadItems = items.map((item) => {
        const entry = quantities[item._id];
        return {
          menuItemId: item._id,
          quantity: entry && entry.quantity ? String(entry.quantity).trim() : '',
          unit: entry && entry.unit ? entry.unit : item.defaultUnit,
        };
      });

      const blob = await generateMenuPdf(payloadItems, customerInfo);
      setPdfBlob(blob);
    } catch (err) {
      console.error('PDF Generation Error:', err);
      setGenerationError(err.message || 'Failed to generate PDF. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-100">
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pb-28">
        {/* Page Title & Breadcrumb */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
              <Link to="/" className="hover:underline flex items-center gap-1 text-stone-500 hover:text-stone-800">
                <ArrowLeft className="w-3.5 h-3.5" /> Home
              </Link>
              <span>/</span>
              <span>Digital Requisition</span>
            </div>
            <h1 className="font-serif-heading text-2xl sm:text-3xl font-bold text-stone-900">
              Gobind Catering Digital Menu
            </h1>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Enter quantities for needed items. Unneeded items left blank will not show in the original menu design.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            {filledCount > 0 && (
              <button
                onClick={handleClearAll}
                className="px-3.5 py-2 text-xs font-semibold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg flex items-center gap-1.5 transition-all"
                title="Reset all entered quantities"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All ({filledCount})</span>
              </button>
            )}

            <button
              onClick={handleGeneratePdf}
              disabled={generating || loading}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm rounded-lg shadow-md hover:shadow-amber-500/20 flex items-center gap-2 transition-all disabled:opacity-50"
            >
              {generating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  <span>Generate PDF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Error notification if API failed */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-sm font-bold">Failed to load menu data</h4>
              <p className="text-xs text-red-700 mt-0.5">{error}</p>
              <button
                onClick={loadMenu}
                className="mt-2 text-xs font-bold underline hover:text-red-950 flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" /> Retry Connection
              </button>
            </div>
          </div>
        )}

        {generationError && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold">PDF Generation Failed</h4>
              <p className="text-xs text-red-700 mt-0.5">{generationError}</p>
            </div>
          </div>
        )}

        {/* Event & Customer Info Bar */}
        <EventInfoBar
          customerInfo={customerInfo}
          setCustomerInfo={setCustomerInfo}
        />

        {/* Category Navigation & Search */}
        <CategoryNav
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          itemsCount={items.length}
          filledCount={filledCount}
        />

        {/* Loading Spinner */}
        {loading ? (
          <div className="bg-white rounded-xl p-16 text-center border border-stone-200 shadow-sm flex flex-col items-center justify-center space-y-4">
            <Loader2 className="w-8 h-8 text-amber-600 animate-spin" />
            <div>
              <h3 className="font-semibold text-stone-800 text-base">Loading Predefined Menu Items...</h3>
              <p className="text-xs text-stone-400 mt-1">Retrieving 255 Hindi menu items and original coordinates from database</p>
            </div>
          </div>
        ) : (
          /* Predefined Menu Items Table */
          <MenuTable
            items={filteredItems}
            quantities={quantities}
            onQuantityChange={handleQuantityChange}
            onUnitChange={handleUnitChange}
          />
        )}
      </main>

      {/* Sticky Bottom Action Bar for Mobile & Desktop */}
      <aside aria-label="Order summary and actions" className="fixed bottom-0 inset-x-0 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 text-white py-3.5 px-4 sm:px-8 z-40 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">
                  {filledCount} {filledCount === 1 ? 'item' : 'items'} selected
                </span>
                {filledCount > 0 && (
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded-full border border-amber-500/30">
                    Ready to export
                  </span>
                )}
              </div>
              <p className="text-[11px] text-stone-400 hidden sm:block">
                Empty items will stay blank on the original Gobind Catering PDF template
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {filledCount > 0 && (
              <button
                onClick={handleClearAll}
                className="hidden sm:inline-flex px-3 py-2 text-xs font-semibold text-stone-400 hover:text-white transition-colors"
              >
                Clear
              </button>
            )}
            <button
              onClick={handleGeneratePdf}
              disabled={generating || loading}
              className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-sm rounded-lg shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 transition-all disabled:opacity-50"
            >
              {generating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  <span>Generate Menu PDF</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* PDF Preview, Download, Print & Share Modal */}
      {pdfBlob && (
        <PdfPreviewModal
          pdfBlob={pdfBlob}
          onClose={() => setPdfBlob(null)}
        />
      )}

      <Footer />
    </div>
  );
}
