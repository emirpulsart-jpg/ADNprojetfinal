'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const scrollToPhilosophy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      document.getElementById('transparence-totale')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-swiss-navy text-white/90 border-t border-slate-800" id="app-footer animate-fade-in">
      {/* Upper Footer section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand block (Span 5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/ADN.png" alt="ADN Logo" className="h-10 w-auto object-contain bg-transparent brightness-0 invert" />
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.25em] font-extrabold text-white leading-none mb-0.5">
                  ADN
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#10b981] font-bold leading-none">
                  FINANCE SA
                </span>
              </div>
            </div>
            
            <p className="text-sm text-slate-300 font-sans leading-relaxed max-w-md">
              Depuis Genève, nous concevons des stratégies patrimoniales discrètes, souveraines et résilientes. Notre dévouement total et notre indépendance absolue garantissent la pérennité de votre capital à travers les générations.
            </p>

            {/* Swiss Trust Seals */}
            <div className="flex items-center gap-4 pt-2 flex-wrap">
              <div className="rounded-none border border-white/10 bg-white/5 py-1.5 px-3">
                <span className="font-sans text-[9px] uppercase tracking-wider font-bold text-slate-300">Conformité FINMA / LEFin</span>
              </div>
              <div className="rounded-none border border-white/10 bg-white/5 py-1.5 px-3">
                <span className="font-sans text-[9px] uppercase tracking-wider font-bold text-slate-300">Place Financière Suisse</span>
              </div>
            </div>
          </div>

          {/* Links block (Span 3) */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#10b981]">
              Expertises
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link href="/expertises/gestion-privee" className="text-slate-300 hover:text-white transition-colors">
                  Compte personnel/privé
                </Link>
              </li>
              <li>
                <Link href="/expertises/gestion-corporate" className="text-slate-300 hover:text-white transition-colors">
                  Compte professionnel
                </Link>
              </li>
              <li>
                <Link href="/#transparence-totale" onClick={scrollToPhilosophy} className="text-slate-300 hover:text-white transition-colors">
                  Notre Philosophie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact block (Span 4) */}
          <div className="md:col-span-4 space-y-5">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#10b981]">
              Nous contacter
            </h3>
            <ul className="space-y-4 font-sans text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#10b981] shrink-0 mt-0.5" />
                <span>
                  Quai Gustave-Ador, 62<br />
                  1207, Genève, Suisse
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#10b981] shrink-0" />
                <a href="tel:+41225758747" className="hover:text-white transition-colors">00 41 22 575 87 47</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#10b981] shrink-0" />
                <a href="mailto:info@adnfinance.ch" className="hover:text-white transition-colors">info@adnfinance.ch</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclosure warning */}
        <div className="mt-16 pt-8 border-t border-white/10 font-sans text-[11px] text-slate-400 leading-relaxed text-justify space-y-3">
          <p>
            <strong>Mentions Légales & Réglementation :</strong> ADN FINANCE SA est un cabinet de conseil financier et gérant de fortune indépendant enregistré en Suisse. Nos opérations et mandats s’effectuent en conformité avec la Loi fédérale sur les établissements financiers (LEFin). La surveillance prudentielle est assurée par un organisme de surveillance agréé par l&apos;Autorité fédérale de surveillance des marchés financiers (FINMA).
          </p>
          <p>
            Les rendements et performances passées ne préjugent en rien des performances d&apos;avenir. Les simulations interactives formulées sur ce site sont transmises à but exclusivement d&apos;illustration didactique des forces d&apos;inflation et ne matérialisent en aucun cas une recommandation contractuelle d&apos;arbitrage d&apos;actifs ni de prestations bancaires formelles. L&apos;allocation sur actifs réels comporte un risque de dévalorisation partielle ou totale de capitaux.
          </p>
        </div>

        {/* Lower footer copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-slate-400">
          <div>
            &copy; {currentYear} ADN FINANCE SA, Genève. Tous droits réservés.
          </div>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">Protection des Données</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Politique de Secret</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
