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
            <div className="flex flex-col items-center gap-1 w-fit">
              <img
                src="/ADN.png"
                alt="ADN"
                className="h-9 w-auto object-contain bg-transparent brightness-0 invert"
              />
              <span className="font-sans text-[9px] uppercase tracking-[0.18em] font-medium leading-none text-white">
                ADN FINANCE SA
              </span>
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
                <Link href="/propos" className="text-slate-300 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/gestion-de-fortune" className="text-slate-300 hover:text-white transition-colors">
                  Compte personnel/privé
                </Link>
              </li>
              <li>
                <Link href="/gestion-corporate" className="text-slate-300 hover:text-white transition-colors">
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
                <a href="tel:+41225758747" className="hover:text-white transition-colors">+41 22 575 87 47</a>
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
          <div className="flex flex-wrap gap-6 justify-center sm:justify-end">
            <Link href="/planificateur-dinterets-composes" className="hover:text-white transition-colors">Planificateur d&apos;intérêts composés</Link>
            <Link href="/protection-des-donnees" className="hover:text-white transition-colors">Protection des Données</Link>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <a
              href="https://www.swissbanking.ch/_Resources/Persistent/c/6/c/8/c6c8088972fdd9f624e8e877dfa28424d8b8d887/ASB_Risques_inherents_au_commerce_instruments_financiers_2023_FR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Risques particuliers dans le négoce des titres
            </a>
          </div>
        </div>

        <div className="mt-4 text-center font-sans text-[10px] text-slate-500 tracking-wide">
          Développé par{' '}
          <a
            href="https://novaris-studio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-[#10b981] transition-colors"
          >
            Novaris Studio
          </a>
        </div>

      </div>
    </footer>
  );
}
