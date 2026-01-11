import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, label, isMobile = false }: { to: string; label: string; isMobile?: boolean }) => {
    const active = isActive(to);
    const baseClasses = "font-medium transition-colors hover:text-primary";
    const activeClasses = "text-primary font-bold";
    const inactiveClasses = "text-slate-700 dark:text-slate-200";
    
    return (
      <Link 
        to={to} 
        className={`${baseClasses} ${active ? activeClasses : inactiveClasses} ${isMobile ? 'block py-2 text-lg' : 'text-sm'}`}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="size-8 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">spa</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Nurture Doula</h2>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-6">
              <NavLink to="/" label="Home" />
              <NavLink to="/services" label="Services" />
              <NavLink to="/about" label="About" />
              <NavLink to="/contact" label="Contact" />
            </nav>
            <Link 
              to="/booking"
              className="bg-primary hover:bg-primary-hover text-white text-sm font-bold h-10 px-6 rounded-full transition-all shadow-lg shadow-blue-200/50 dark:shadow-none flex items-center justify-center transform hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-slate-900 dark:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-dark border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
            <NavLink to="/" label="Home" isMobile />
            <NavLink to="/services" label="Services" isMobile />
            <NavLink to="/about" label="About" isMobile />
            <NavLink to="/contact" label="Contact" isMobile />
            <Link 
              to="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary text-white text-center font-bold py-3 rounded-lg mt-2"
            >
              Book Consultation
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white">
                <span className="material-symbols-outlined text-primary text-2xl">spa</span>
                <span className="font-bold text-lg">Nurture Doula</span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Providing compassionate, non-judgmental support to families in the greater metropolitan area.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Services</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link to="/services" className="hover:text-primary transition-colors">Overnight Care</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Daytime Support</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Lactation Guidance</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Virtual Consults</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Me</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Testimonials</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Contact</h4>
              <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">mail</span> hello@nurturedoula.com</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">call</span> (555) 123-4567</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-base">location_on</span> Portland, OR</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs">© {new Date().getFullYear()} Nurture Doula Services. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.644-.069-4.849 0-3.204.013-3.583.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;