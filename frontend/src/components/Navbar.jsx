import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UtensilsCrossed, Menu, X, FileText, Phone, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isMenuPage = location.pathname === '/generate-menu';

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-amber-900/30 text-stone-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-stone-900 rounded-[10px] flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading text-xl font-bold tracking-wider text-white group-hover:text-amber-300 transition-colors">
                GOBIND CATERING
              </span>
              <span className="text-[11px] tracking-widest text-amber-400/90 font-medium uppercase">
                Caters of Distinction
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                !isMenuPage ? 'text-amber-400 font-semibold' : 'text-stone-300'
              }`}
            >
              Home
            </Link>
            <a
              href="/#about"
              className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="/#services"
              className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors"
            >
              Services
            </a>
            <a
              href="/#contact"
              className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors"
            >
              Contact
            </a>

            <Link
              to="/generate-menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-semibold text-sm shadow-md hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4" />
              <span>Generate Menu</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              to="/generate-menu"
              className="px-3.5 py-1.5 rounded-md bg-amber-500 text-stone-950 font-semibold text-xs flex items-center gap-1.5 shadow"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Menu</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-900 px-4 pt-3 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-stone-200 hover:text-amber-400"
          >
            Home
          </Link>
          <a
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-stone-200 hover:text-amber-400"
          >
            About Us
          </a>
          <a
            href="/#services"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-stone-200 hover:text-amber-400"
          >
            Services
          </a>
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-stone-200 hover:text-amber-400"
          >
            Contact
          </a>
          <div className="pt-2">
            <Link
              to="/generate-menu"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm shadow"
            >
              <FileText className="w-4 h-4" />
              <span>Digital Menu Requisition</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
