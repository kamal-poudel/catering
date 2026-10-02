import React from 'react';
import { Link } from 'react-router-dom';
import {
  UtensilsCrossed,
  FileText,
  CheckCircle2,
  Sparkles,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  ShieldCheck,
  Flame,
  Award,
  Users,
  ChefHat
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white overflow-hidden py-20 md:py-32">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        {/* Amber Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ॐ नमः शिवाय • Premier Catering Service</span>
            </div>

            {/* Brand Title */}
            <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              GOBIND <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">CATERING</span>
            </h1>

            {/* Tagline */}
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-amber-100/90 font-light italic">
              "Caters of Distinction for All Occasions"
            </p>

            <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Specialized catering for outdoor and in-door parties, grand weddings, corporate celebrations, and festive gatherings. Create your exact raw material and kitchen requisition menu with our automated digital sheet.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/generate-menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-base shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <FileText className="w-5 h-5 text-stone-950" />
                <span>Generate Menu</span>
                <ArrowRight className="w-4 h-4 text-stone-950" />
              </Link>

              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-stone-800/80 hover:bg-stone-800 text-stone-200 font-semibold text-base border border-stone-700 transition-all"
              >
                <span>Learn More</span>
              </a>
            </div>

            {/* Reassurance points */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>255+ Predefined Hindi Items</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Original Printed Design PDF</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Instant Mobile Share & Print</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Gobind Catering Section */}
      <section id="about" className="py-20 md:py-28 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                About Our Heritage
              </div>

              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Authentic Taste, Masterful Preparation, and Flawless Event Logistics
              </h2>

              <p className="text-stone-600 text-base leading-relaxed">
                At <strong>Gobind Cooking & Catering</strong>, we pride ourselves on being a trusted culinary partner for families and institutions across Panchkula, Chandigarh, Mohali, and the wider Haryana-Punjab region.
              </p>

              <p className="text-stone-600 text-base leading-relaxed">
                From traditional Halwai sweets and royal North Indian gravies to crisp live snack counters, fresh dairy, and rich dry fruit delicacies, we manage the entire food requisition lifecycle. We ensure every ingredient is calculated to precision so your guests enjoy unforgettable hospitality.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="font-serif-heading text-2xl font-bold text-amber-600 block">
                    All Occasions
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Indoor & Outdoor Parties
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="font-serif-heading text-2xl font-bold text-amber-600 block">
                    Sector 12-A
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    Balaji Complex, Panchkula
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="relative">
              <div className="bg-gradient-to-tr from-amber-600 to-yellow-500 rounded-3xl p-1 shadow-2xl">
                <div className="bg-stone-900 rounded-[22px] p-8 sm:p-10 text-white space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
                    <ChefHat className="w-7 h-7 text-amber-400" />
                  </div>

                  <h3 className="font-serif-heading text-2xl font-bold text-white">
                    The Original Menu Requisition System
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed">
                    No more confusion with handwritten notes or unreadable handwriting. Gobind Catering provides a standardized, pre-formatted 2-page requisition sheet containing every spice, dal, vegetable, sweet, and equipment needed for your feast.
                  </p>

                  <div className="space-y-3 pt-2 text-sm text-stone-200">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>MDH Masalas, Pure Desi Ghee & Dry Provisions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>Fresh Paneer, Khoya, Cream & Milk Products</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>Vegetables, Fruits, Sweets & Commercial Kitchen Fuel</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      to="/generate-menu"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm shadow transition-all"
                    >
                      <span>Create Menu PDF Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Highlights / Services */}
      <section id="services" className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Our Services
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-stone-900">
              Complete Catering For Every Celebration
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Whatever the scale of your event, Gobind Catering provides end-to-end food management with exquisite flavor and unmatched hygiene.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-400/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-stone-900 mb-2">
                Weddings & Grand Receptions
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Lavish multi-course menus, royal main courses, live chaat counters, and traditional Halwai sweets crafted for hundreds of esteemed guests.
              </p>
              <ul className="text-xs text-stone-500 space-y-1.5">
                <li>• Bespoke Raw Material Lists</li>
                <li>• Live Dessert & Mocktail Counters</li>
                <li>• Experienced Head Chefs</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-400/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-stone-900 mb-2">
                Outdoor & In-Door Gatherings
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Full-service party catering for birthdays, anniversaries, corporate conferences, and religious Jagrans or Pujas.
              </p>
              <ul className="text-xs text-stone-500 space-y-1.5">
                <li>• High-output Tandoor & Bhatti Setup</li>
                <li>• Disposable & Premium Cutlery</li>
                <li>• Clean & Prompt Service</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-stone-200 hover:shadow-md hover:border-amber-400/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-stone-900 mb-2">
                Instant Requisition Sheets
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Use our digital menu to calculate and print the official Gobind Catering raw material requisition form for seamless grocery procurement.
              </p>
              <ul className="text-xs text-stone-500 space-y-1.5">
                <li>• Exact Hindi Item Names</li>
                <li>• Accurate Quantities & Units</li>
                <li>• One-Click PDF Generation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-white">
              Why Gobind Catering?
            </h2>
            <p className="text-stone-400 text-sm sm:text-base">
              Delivering dependable catering excellence with tradition, taste, and transparent requisitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-3 p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <ChefHat className="w-6 h-6" />
              </div>
              <h4 className="font-serif-heading text-lg font-bold text-white">Master Halwais</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Experienced Halwais specializing in authentic North Indian recipes, mithai, and savory delights.
              </p>
            </div>

            <div className="text-center space-y-3 p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-serif-heading text-lg font-bold text-white">Pure & Hygienic</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Uncompromising hygiene standards, sanitization, and clean cooking processes at every station.
              </p>
            </div>

            <div className="text-center space-y-3 p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-serif-heading text-lg font-bold text-white">No Wastage</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Itemized requisitions help you purchase exactly what is required for your specific headcount.
              </p>
            </div>

            <div className="text-center space-y-3 p-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-serif-heading text-lg font-bold text-white">Trusted Distinction</h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Decades of word-of-mouth trust across Panchkula and surrounding regions for prestigious events.
              </p>
            </div>
          </div>

          {/* Quick CTA banner */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-600 text-stone-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="font-serif-heading text-2xl font-bold">
                Planning an Event or Wedding Feast?
              </h3>
              <p className="text-stone-900 text-sm mt-1">
                Select your items, enter quantities, and download the official requisition menu in minutes.
              </p>
            </div>
            <Link
              to="/generate-menu"
              className="px-6 py-3.5 bg-stone-950 hover:bg-stone-900 text-amber-400 font-bold rounded-xl text-sm shadow-lg whitespace-nowrap transition-all"
            >
              Generate Digital Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section with Placeholders */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              Get In Touch
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-stone-900">
              Contact Gobind Catering
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Reach out to us for party bookings, custom menus, or catering inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-serif-heading text-lg font-bold text-stone-900">Address</h4>
              <p className="text-sm text-stone-600 font-medium">
                # 158/1, Balaji Complex, Sector 12-A Rally, Panchkula (Hry.)
              </p>
              <span className="text-[11px] text-amber-700 font-semibold uppercase tracking-wider block pt-1">
                Primary Branch
              </span>
            </div>

            {/* Phone */}
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h4 className="font-serif-heading text-lg font-bold text-stone-900">Phone Numbers</h4>
              <div className="space-y-1">
                <a href="tel:9815483536" className="text-sm text-stone-800 font-semibold block hover:text-amber-600">
                  +91 98154 83536
                </a>
                <a href="tel:9877717905" className="text-sm text-stone-800 font-semibold block hover:text-amber-600">
                  +91 98777 17905
                </a>
              </div>
              <span className="text-[11px] text-stone-400 block pt-1">
                Available 7 Days a Week
              </span>
            </div>

            {/* Email */}
            <div className="p-8 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-serif-heading text-lg font-bold text-stone-900">Email</h4>
              <p className="text-sm text-stone-600">
                [email protected]
              </p>
              <span className="text-[11px] text-stone-400 block pt-1">
                Placeholder - Inquiries
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
