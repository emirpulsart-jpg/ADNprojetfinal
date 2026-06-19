'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Landmark } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  let timeoutId = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  // Scroll event detector
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on navigate
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const philosophyHref = '/#transparence-totale';

  const scrollToPhilosophy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    setDropdownOpen(false);

    if (pathname === '/') {
      e.preventDefault();
      document.getElementById('transparence-totale')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { label: 'Accueil', href: '/' },
    {
      label: 'Nos Expertises',
      href: '/expertises',
      isDropdown: true,
      subItems: [
        { label: 'Compte personnel/privé', href: '/gestion-de-fortune', desc: 'Gestion de patrimoine en nom propre.' },
        { label: 'Compte professionnel', href: '/gestion-corporate', desc: 'Fructifier la trésorerie de votre société.' },
      ],
    },
    { label: 'Notre Philosophie', href: philosophyHref, onClick: scrollToPhilosophy },
    { label: 'Contact', href: '/contact-us' },
  ];

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled && !isOpen;

  return (
    <nav
      className={cn(
        "z-50 w-full transition-all duration-300 animate-fade-in",
        isHome ? "fixed top-0 left-0" : "sticky top-0",
        isTransparent
          ? "bg-white/15 backdrop-blur-sm border-b border-white/10 shadow-none"
          : "border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm"
      )}
      id="app-navbar"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Brand: ADN */}
          <Link href="/" className="flex items-center gap-3 group animate-fade-in" id="nav-logo">
            <div className="flex items-center gap-3">
              <img
                src="/ADN.png"
                alt="ADN Logo"
                className="h-10 w-auto object-contain bg-transparent transition-all duration-300"
              />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.25em] font-extrabold leading-none mb-0.5 text-swiss-navy">
                  ADN
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] font-bold leading-none text-[#10b981]">
                  FINANCE SA
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" id="desktop-menu">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div
                    key={item.label}
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="relative py-2"
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600 transition-colors hover:text-swiss-blue focus:outline-none",
                        (pathname.startsWith('/expertises') || pathname.startsWith('/gestion-de-fortune') || pathname.startsWith('/gestion-corporate')) && "text-swiss-blue font-bold"
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn("h-3 w-3 transition-transform duration-205", dropdownOpen && "rotate-180")} />
                    </button>

                    {/* dropdown menu */}
                    {dropdownOpen && (
                      <div
                        className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 transform rounded-none border border-slate-100 bg-white p-3 shadow-xl transition-all duration-200"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="space-y-1">
                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className={cn(
                                "block rounded-none p-3 transition-all hover:bg-slate-50 group/item",
                                pathname === sub.href && "bg-slate-50"
                              )}
                            >
                              <div className="font-sans text-xs font-bold text-swiss-navy group-hover/item:text-swiss-blue transition-colors">
                                {sub.label}
                              </div>
                              <p className="mt-1 font-sans text-[11px] text-gray-500 leading-normal">
                                {sub.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={item.onClick}
                  className={cn(
                    "font-sans text-[11px] uppercase tracking-[0.15em] font-bold text-slate-600 transition-colors py-2",
                    isActive && "text-swiss-blue font-extrabold border-b border-swiss-blue"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Call to Action - Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex h-10 items-center justify-center px-5 py-2 text-[11px] uppercase tracking-widest font-bold transition-all duration-300 bg-swiss-navy text-white hover:bg-swiss-blue"
            >
              Prendre rendez-vous
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-none p-2 text-gray-400 hover:bg-slate-50 hover:text-swiss-navy focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isOpen ? (
                <X className="h-6 w-6 text-swiss-navy transition-colors duration-300" />
              ) : (
                <Menu className="h-6 w-6 text-swiss-navy transition-colors duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white" id="mobile-menu">
          <div className="space-y-1.5 px-6 py-6 pb-8">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.label} className="py-2 border-b border-slate-100">
                    <div className="font-sans text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      {item.label}
                    </div>
                    <div className="pl-2 space-y-2">
                      {item.subItems?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className={cn(
                            "block rounded-none py-2 px-3 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-swiss-blue transition-colors",
                            pathname === sub.href && "bg-slate-50 text-swiss-blue font-bold"
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={item.onClick}
                  className={cn(
                    "block rounded-none py-2.5 px-3 text-sm font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:text-swiss-blue transition-colors border-b border-slate-50",
                    isActive && "bg-slate-50 text-swiss-blue font-extrabold"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Mobile Footer Area inside Menu */}
            <div className="pt-6 mt-6 border-t border-gray-100 space-y-4">
              <div className="text-xs text-slate-500 font-sans leading-relaxed">
                <span className="font-extrabold text-swiss-navy block mb-1">ADN FINANCE SA</span>
                Quai Gustave-Ador, 62<br />
                1207, Genève, Suisse
              </div>
              <Link
                href="/contact-us"
                className="flex w-full h-12 items-center justify-center bg-swiss-navy text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-swiss-blue transition-all"
              >
                Être contacté par un expert
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
