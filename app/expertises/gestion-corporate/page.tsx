'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Building,
  Scale,
  LineChart,
  ChevronRight,
  CheckCircle,
  ArrowRight,
  Coins
} from 'lucide-react';

export default function GestionCorporatePage() {
  const assets = [
    {
      title: "Optimisation de Trésorerie Pluri-Monétaire",
      desc: "Concevoir des placements monétaires et obligataires souverains de notation optimale (AAA / AA) en francs suisses, euros et dollars pour préserver le pouvoir d'achat de vos réserves de liquidité face à l'inflation.",
      icon: Coins
    },
    {
      title: "Gestion des Excédents de Holding",
      desc: "Solutions de capitalisation adaptées au cadre fiscal suisse des holdings industrielles et de participations familiales.",
      icon: Building
    },
    {
      title: "Contre-Arbitrage de la Volatilité",
      desc: "Mettre en œuvre des processus de couverture de taux et de change pour neutraliser les bruits financiers et sécuriser vos ratios opérationnels.",
      icon: LineChart
    },
    {
      title: "Sécurité Juridique et Fiscale",
      desc: "Parfaite conformité avec la réglementation FINMA, le Code des obligations suisse (CO) et les directives fiduciaires cantonales genevoises.",
      icon: Scale
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in" id="gestion-corporate-page">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <Link href="/expertises" className="hover:text-swiss-blue transition-colors">Nos Expertises</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <span className="text-swiss-navy font-semibold">Compte professionnel</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 lg:mb-32">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.20em] text-swiss-blue block">
              Compte professionnel
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
              Fructifier les liquidités <br />
              <span className="font-serif italic font-medium text-swiss-blue">et la trésorerie de votre société</span>
            </h1>
            <p className="font-sans text-base text-slate-500 leading-relaxed max-w-xl">
              Le compte professionnel vous permet d&apos;investir et de valoriser de manière performante la trésorerie de votre société.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?type=pro"
                className="inline-flex h-12 items-center justify-center bg-swiss-navy px-8 font-sans text-xs font-bold uppercase tracking-widest text-white hover:bg-swiss-blue transition-all"
              >
                Être contacté par un expert financier
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-swiss-navy text-white font-sans text-lg font-bold">
                C
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold text-swiss-navy uppercase tracking-wider">Le Profil Professionnel</h3>
                <p className="font-sans text-[10px] text-slate-400">Pour holdings & directeurs d&apos;entreprises</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-swiss-blue shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Solutions d&apos;optimisations de trésorerie dès <strong>50K CHF</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-swiss-blue shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Souscription d&apos;options de rendement stables et placements obligataires souverains de premier ordre.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-swiss-blue shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Contrats tripartites hautement sécurisés avec dépositaires suisses agréés.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Pillars Cards */}
        <div className="mb-20 lg:mb-32">
          <div className="mb-12 md:max-w-3xl">
            <span className="font-sans text-[10px] uppercase tracking-wider text-swiss-blue font-bold block mb-2">
              Placements Résilients
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-swiss-navy">
              Quatre axes stratégiques d&apos;ingénierie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assets.map((p, i) => (
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
                Expertise Individuelle
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-white mb-4">
                Patrimoine Privé & Familiale
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Vous souhaitez réorienter l&apos;architecture de vos capitaux familiaux personnels ? Découvrez notre accompagnement dédié aux particuliers.
              </p>
            </div>
            
            <div className="lg:text-right space-y-4">
              <p className="font-sans text-[11px] text-slate-400">
                ADN FINANCE SA • Conseils financiers indépendants agréés FINMA.
              </p>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <Link
                  href="/expertises/gestion-privee"
                  className="inline-flex h-11 items-center justify-center bg-white text-swiss-navy px-6 font-sans text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all text-center"
                >
                  Compte personnel/privé
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
