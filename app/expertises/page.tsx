'use client';

import * as React from 'react';
import Link from 'next/link';
import { User, Building2, ChevronRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ExpertisesPage() {
  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in" id="expertises-hub">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-gray-300" />
          <span className="text-swiss-navy font-semibold">Nos Expertises</span>
        </div>

        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-swiss-blue block animate-fade-in">
            Nos Métiers de Conseils Financiers
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
            Une architecture de services <br />
            <span className="font-serif italic font-medium text-swiss-blue">adaptée à vos exigences</span>
          </h1>
          <p className="font-sans text-base text-gray-500 leading-relaxed max-w-2xl">
            Que vous souhaitiez préserver votre patrimoine intergénérationnel ou optimiser l&apos;allocation de la trésorerie de votre entreprise, nos experts conçoivent une structure adaptée sous la juridiction helvétique.
          </p>
        </div>

        {/* Binary Choice Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 lg:mb-32">
          
          {/* Private Wealth card */}
          <div className="group border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-swiss-blue/30 transition-all duration-300 p-8 sm:p-12 relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-none bg-white border border-slate-200 text-swiss-blue flex items-center justify-center">
                <User className="h-6 w-6 stroke-[1.2]" />
              </div>
              
              <div className="space-y-2">
                <h2 className="font-sans text-2xl font-bold text-swiss-navy group-hover:text-swiss-blue transition-colors">
                  Compte personnel/privé
                </h2>
                <p className="text-xs font-bold uppercase tracking-widest text-[#10b981]">Individuel & Personnel</p>
              </div>

              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Un compte personnel ouvert à votre nom propre, disponible pour des retraits libres.
              </p>

              <ul className="space-y-2.5 pt-4 text-xs font-medium text-gray-600 font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
                  <span>Placements souples dès 50K CHF</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
                  <span>Retraits libres à tout moment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10b981]" />
                  <span>Exonération totale sur les plus-values</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/gestion-de-fortune"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-swiss-navy group border-b border-swiss-navy/20 pb-1 hover:text-swiss-blue hover:border-swiss-blue transition-all"
              >
                <span>Voir le compte personnel/privé</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Corporate / Pro Wealth card */}
          <div className="group border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-swiss-blue/30 transition-all duration-300 p-8 sm:p-12 relative flex flex-col justify-between">
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-none bg-white border border-slate-200 text-swiss-blue flex items-center justify-center">
                <Building2 className="h-6 w-6 stroke-[1.2]" />
              </div>
              
              <div className="space-y-2">
                <h2 className="font-sans text-2xl font-bold text-swiss-navy group-hover:text-swiss-blue transition-colors">
                  Compte professionnel
                </h2>
                <p className="text-xs font-bold uppercase tracking-widest text-swiss-blue">Société & Trésorerie Pro</p>
              </div>

              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Optimisez l&apos;allocation des excédents de trésorerie de votre société.
              </p>

              <ul className="space-y-2.5 pt-4 text-xs font-medium text-gray-600 font-sans">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-swiss-blue" />
                  <span>Placements de trésorerie dès 50K CHF</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-swiss-blue" />
                  <span>Souscriptions d&apos;obligations de premier ordre</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-swiss-blue" />
                  <span>Totalement en accord avec le droit des obligations</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/gestion-corporate"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-swiss-navy group border-b border-swiss-navy/20 pb-1 hover:text-swiss-blue hover:border-swiss-blue transition-all"
              >
                <span>Voir le compte professionnel</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Global reassurance block linking back to Simulator */}
        <div className="bg-swiss-navy text-white p-8 sm:p-14 relative overflow-hidden text-center max-w-4xl mx-auto mb-12">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,64,175,0.15),transparent)] pointer-events-none"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-light text-white tracking-tight">
              Comparez les stratégies actuelles
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto">
              Visualisez instantanément la plus-value de l&apos;investissement de premier plan face à la thésaurisation ou aux dévalorisations constantes de l&apos;inflation.
            </p>
            <div className="pt-2">
              <Link
                href="/simulateur"
                className="inline-flex h-12 bg-white text-swiss-navy px-8 font-sans text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all"
              >
                Lancer le Simulateur Interactif
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
