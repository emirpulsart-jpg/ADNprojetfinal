'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Gem,
  Award,
  KeyRound,
  Layers,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export default function GestionPriveePage() {
  const pillars = [
    {
      title: "Conseils et Allocations de Fortune",
      desc: "Optimisez la répartition de vos avoirs grâce à l'expertise reconnue de nos analystes. Conservez la pleine maîtrise légale mais bénéficiez de grilles quantitatives et de choix d'expertises indiscutables.",
      icon: Gem
    },
    {
      title: "Intégrité Globale d&apos;Intérêts",
      desc: "Aucun rétropaiement sur les émoluments des tiers. Nos tarifs fixes ou proportionnels assurent une intégrité d&apos;arbitrage irréprochable et totale.",
      icon: Award
    },
    {
      title: "Organisation du Patrimoine Successeur",
      desc: "Structuration fiduciaire (trusts et fondations de droit suisse) pour immuniser à très long terme la transmission de vos capitaux familiaux.",
      icon: KeyRound
    },
    {
      title: "Secrétariat Privé & Consolidation",
      desc: "Nous unifions le suivi de tous vos avoirs et de votre immobilier mondial au travers d'un tableau d'ensemble limpide, libéré de l'encombrement fiscal.",
      icon: Layers
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in" id="gestion-privee-page">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-slate-300 animate-pulse" />
          <Link href="/expertises" className="hover:text-swiss-blue transition-colors">Nos Expertises</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <span className="text-swiss-navy font-semibold">Compte personnel/privé</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 lg:mb-32">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.20em] text-swiss-blue block animate-fade-in">
              Compte Personnel / Privé
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
              Un compte à votre propre nom, <br />
              <span className="font-serif italic font-medium text-swiss-blue">pour valoriser vos actifs</span>
            </h1>
            <p className="font-sans text-base text-slate-500 leading-relaxed max-w-xl">
              Le compte personnel/privé proposé par ADN FINANCE SA est un compte ouvert à votre nom propre. Tout comme un compte de dépôt classique mais spécialement optimisé pour générer des rendements, il vous offre une totale liberté, notamment avec des retraits libres.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?type=prive"
                className="inline-flex h-12 items-center justify-center bg-swiss-navy px-8 font-sans text-xs font-bold uppercase tracking-widest text-white hover:bg-swiss-blue transition-all"
              >
                Être contacté par un expert financier
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/20 rounded-full filter blur-xl pointer-events-none"></div>
            
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-swiss-navy text-white font-sans text-lg font-bold">
                P
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold text-swiss-navy uppercase tracking-wider">Le Profil Privé</h3>
                <p className="font-sans text-[10px] text-slate-400">Pour particuliers et familles</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Accompagnement et placements flexibles dès <strong>50K CHF</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Avoirs logés à votre propre nom, entièrement disponibles pour des retraits à tout moment.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Exonération fiscale suisse intégrale sur les plus-values (gains de capital).
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Pillars Cards */}
        <div className="mb-20 lg:mb-32">
          <div className="mb-12 md:max-w-3xl">
            <span className="font-sans text-[10px] uppercase tracking-wider text-swiss-blue font-bold block mb-2">
              L&apos;Ingénierie Fiduciaire
            </span>
            <h2 className="font-display text-2.5xl sm:text-3xl font-light tracking-tight text-swiss-navy">
              Quatre engagements majeurs de conseils neutres
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="bg-slate-50/50 border border-slate-100 p-8 space-y-4 hover:border-swiss-blue/30 hover:bg-white transition-all duration-300">
                <div className="h-10 w-10 flex items-center justify-center bg-white border border-slate-200 text-swiss-blue">
                  <p.icon className="h-5 w-5 stroke-[1.2]" />
                </div>
                <h3 className="font-sans text-base font-bold text-swiss-navy">{p.title}</h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Linking Maillage Box */}
        <div className="bg-swiss-navy text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,64,175,0.15),transparent)] pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.20em] text-[#10b981] mb-3 block">
                Expertise Complémentaire
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-white mb-4">
                Trésorerie de holding & pro
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Vous pilotez une holding patrimoniale ou des excédents de trésorerie commerciale ? Découvrez notre cadre de conseils corporatifs dédiés.
              </p>
            </div>
            
            <div className="lg:text-right space-y-4">
              <p className="font-sans text-[11px] text-slate-400">
                ADN FINANCE SA • Cabinet indépendant de conseils financiers.
              </p>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <Link
                  href="/expertises/gestion-corporate"
                  className="inline-flex h-11 items-center justify-center bg-white text-swiss-navy px-6 font-sans text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all text-center"
                >
                  Compte professionnel
                </Link>
                <Link
                  href="/simulateur"
                  className="inline-flex h-11 items-center justify-center border border-white/20 bg-white/5 text-white px-6 font-sans text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
                >
                  Simuler un Rendement
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
