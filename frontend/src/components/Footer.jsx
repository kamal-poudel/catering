import React from 'react';
import { MapPin, Phone, Mail, UtensilsCrossed, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-amber-400" />
              </div>
              <span className="font-serif-heading text-xl font-bold tracking-wider text-white">
                GOBIND CATERING
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Caters of Distinction for All Occasions. Catering to all types of outdoor & indoor parties, grand weddings, corporate events, and religious celebrations with authentic royal flavors.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Premium Food Quality & Hygienic Preparation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif-heading text-base font-semibold text-white tracking-wide uppercase">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/generate-menu" className="hover:text-amber-400 transition-colors text-amber-300 font-medium">
                  Digital Menu Requisition
                </Link>
              </li>
              <li>
                <a href="/#about" className="hover:text-amber-400 transition-colors">
                  About Gobind Catering
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-amber-400 transition-colors">
                  Catering Services
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-amber-400 transition-colors">
                  Contact Information
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details with Placeholders */}
          <div className="space-y-4" id="contact">
            <h3 className="font-serif-heading text-base font-semibold text-white tracking-wide uppercase">
              Contact & Location
            </h3>
            <ul className="space-y-3.5 text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Address:</strong>
                  # 158/1, Balaji Complex, Sector 12-A Rally, Panchkula (Hry.)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Mobile:</strong>
                  <a href="tel:9815483536" className="hover:text-amber-400 transition-colors">9815483536</a>,{' '}
                  <a href="tel:9877717905" className="hover:text-amber-400 transition-colors">9877717905</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Email:</strong>
                  <span className="text-stone-400">[email protected] (Placeholder)</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Gobind Catering. All rights reserved.</p>
          <p className="text-stone-500">
            Caters of Distinction • Sector 12-A Rally, Panchkula
          </p>
        </div>
      </div>
    </footer>
  );
}
