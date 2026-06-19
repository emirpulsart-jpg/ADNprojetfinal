'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import PatrimoineSimulator from '@/components/PatrimoineSimulator';

export default function PlanificateurPage() {
  return (
    <div className="bg-white animate-fade-in">
      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-12 sm:py-16">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <span className="text-swiss-navy font-semibold">Planificateur d&apos;intérêts composés</span>
        </div>

        <div className="max-w-3xl mb-12 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-swiss-blue block">
            Outil patrimonial
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
            Planificateur d&apos;intérêts composés
          </h1>
          <p className="font-sans text-sm text-slate-500 leading-relaxed">
            Cet outil vous permet de visualiser, à titre strictement illustratif, l&apos;évolution historique d&apos;un capital investi face à l&apos;inflation suisse sur la période 2020–2025. Il ne constitue ni une projection, ni une recommandation d&apos;investissement.
          </p>
          <p className="font-sans text-xs text-slate-400 leading-relaxed">
            Les performances passées ne préjugent pas des performances futures. Tout investissement comporte un risque de perte en capital.
          </p>
        </div>
      </div>

      <section className="bg-slate-50 py-16 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <PatrimoineSimulator />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-10 text-center">
        <Link
          href="/contact-us"
          className="inline-flex h-11 items-center justify-center bg-swiss-navy px-8 font-sans text-xs font-bold uppercase tracking-widest text-white hover:bg-swiss-blue transition-all"
        >
          Demander un accompagnement personnalisé
        </Link>
      </div>
    </div>
  );
}
