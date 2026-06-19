'use client';

import Link from 'next/link';
import {
  PieChart,
  Award,
  KeyRound,
  Layers,
  ChevronRight,
  CheckCircle,
  Landmark,
  TrendingUp,
  Shield,
  Users
} from 'lucide-react';

export default function GestionPriveePage() {
  const pillars = [
    {
      title: 'Allocation patrimoniale sur mesure',
      desc: "Nous construisons une répartition cohérente avec votre profil, votre horizon et vos objectifs — actions, obligations, liquidités et diversification géographique — tout en conservant la clarté et la maîtrise de votre situation.",
      icon: PieChart
    },
    {
      title: 'Indépendance & transparence totale',
      desc: "Aucun conflit d'intérêts lié à des rétrocommissions. Nos honoraires sont clairs ; chaque recommandation repose sur votre intérêt patrimonial, dans le respect du secret de gérance financière suisse.",
      icon: Award
    },
    {
      title: 'Transmission & structuration familiale',
      desc: "Anticipation des enjeux successoraux, coordination avec vos conseils juridiques et fiscaux, et structuration adaptée pour préserver la continuité de votre patrimoine de génération en génération.",
      icon: KeyRound
    },
    {
      title: 'Consolidation & vision globale',
      desc: "Un reporting unifié de vos avoirs, quelle que soit leur custode, pour piloter votre patrimoine avec une lecture simple, actualisée et actionnable.",
      icon: Layers
    }
  ];

  const benefits = [
    {
      title: 'Titulaire exclusif de vos actifs',
      text: "Vos avoirs restent détenus en votre nom propre auprès d'une banque dépositaire suisse. ADN intervient en mandat de gestion ou de conseil, sans jamais détenir vos fonds."
    },
    {
      title: 'Liquidité préservée',
      text: "Contrairement à une immobilisation, votre patrimoine financier reste disponible selon les conditions de votre mandat — retraits, arbitrages et ajustements possibles à tout moment."
    },
    {
      title: 'Cadre réglementaire suisse',
      text: "Notre activité s'exerce sous la LEFin et la LSFin, avec une supervision FINMA via un organisme de surveillance agréé. Vous bénéficiez d'un environnement reconnu pour sa stabilité."
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in" id="gestion-de-fortune-page">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <Link href="/expertises" className="hover:text-swiss-blue transition-colors">Nos Expertises</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <span className="text-swiss-navy font-semibold">Gestion privée</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.20em] text-swiss-blue block">
              Gestion privée
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
              Investir un patrimoine personnel <br />
              <span className="font-serif italic font-medium text-swiss-blue">détenu en nom propre</span>
            </h1>
            <p className="font-sans text-base text-slate-500 leading-relaxed max-w-xl">
              La gestion privée ADN FINANCE SA s&apos;adresse aux particuliers et aux familles qui souhaitent structurer, diversifier et optimiser l&apos;allocation d&apos;un patrimoine financier personnel — plutôt que de maintenir des liquidités excédentaires sur un compte bancaire sans stratégie d&apos;investissement — en les confiant à une approche réfléchie, prudente et alignée sur leurs objectifs patrimoniaux.
            </p>
            <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-xl">
              Vos actifs demeurent à votre nom. Nous vous accompagnons dans leurs choix d&apos;allocation, leur suivi et leur adaptation dans le temps, avec la discrétion et la rigueur attendues d&apos;un cabinet genevois indépendant.
            </p>
            <div className="pt-2">
              <Link
                href="/contact-us?type=prive"
                className="inline-flex h-12 items-center justify-center bg-swiss-navy px-8 font-sans text-xs font-bold uppercase tracking-widest text-white hover:bg-swiss-blue transition-all"
              >
                Être contacté par un expert financier
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/20 rounded-full filter blur-xl pointer-events-none" />

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-white border border-slate-200 text-swiss-blue">
                <Users className="h-5 w-5 stroke-[1.2]" />
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold text-swiss-navy uppercase tracking-wider">Profil privé</h3>
                <p className="font-sans text-[10px] text-slate-400">Particuliers &amp; familles</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Accompagnement personnalisé dès <strong>50&apos;000 CHF</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Patrimoine détenu en nom propre, avec liquidité et disponibilité préservées.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-[#10b981] shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  En Suisse, les plus-values privées sur valeurs mobilières sont en principe <strong>exonérées d&apos;impôt</strong> — un cadre favorable à la constitution de patrimoine à long terme.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Investir vs compte bancaire */}
        <div className="mb-20 lg:mb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-wider text-swiss-blue font-bold block">
              Enjeu patrimonial
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-swiss-navy leading-snug">
              Des liquidités non investies <br />
              <span className="font-serif italic text-swiss-blue">ne préservent pas forcément leur pouvoir d&apos;achat</span>
            </h2>
            <p className="font-sans text-sm text-slate-500 leading-relaxed">
              Un compte bancaire offre sécurité et disponibilité immédiate — deux qualités essentielles. Lorsque des liquidités importantes y sont maintenues en position cash sur la durée, leur pouvoir d&apos;achat réel peut toutefois s&apos;éroder sous l&apos;effet de l&apos;inflation, des taux bas et de l&apos;absence de diversification.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-slate-100 bg-slate-50/50 p-6 space-y-3">
                <Landmark className="h-5 w-5 text-slate-400" />
                <h3 className="font-sans text-sm font-bold text-swiss-navy">Compte bancaire classique</h3>
                <ul className="font-sans text-xs text-slate-500 space-y-2 leading-relaxed">
                  <li>• Capital nominal stable, mais pouvoir d&apos;achat qui recule si l&apos;inflation dépasse les intérêts crédités</li>
                  <li>• Aucune participation aux marchés financiers ni diversification des risques</li>
                  <li>• Adapté aux besoins de trésorerie court terme, moins aux objectifs patrimoniaux long terme</li>
                </ul>
              </div>
              <div className="border border-swiss-blue/20 bg-white p-6 space-y-3 shadow-xs">
                <TrendingUp className="h-5 w-5 text-swiss-blue" />
                <h3 className="font-sans text-sm font-bold text-swiss-navy">Patrimoine investi &amp; accompagné</h3>
                <ul className="font-sans text-xs text-slate-500 space-y-2 leading-relaxed">
                  <li>• Allocation réfléchie selon votre profil de risque et votre horizon</li>
                  <li>• Diversification géographique et sectorielle pour lisser les cycles</li>
                  <li>• Suivi régulier et ajustements en fonction de votre situation — sans promesse de performance</li>
                </ul>
              </div>
            </div>
            <p className="font-sans text-[11px] text-slate-400 leading-relaxed border-l-2 border-slate-200 pl-4">
              <strong>Exemple illustratif :</strong> 200&apos;000 CHF conservés en compte de dépôt sur plusieurs exercices à faible rémunération peuvent voir leur valeur réelle diminuer si l&apos;inflation cumulée progresse, tandis qu&apos;une allocation prudente et diversifiée vise à préserver et, selon les conditions de marché, à valoriser le capital dans la durée — sous réserve des risques inhérents à tout investissement.
            </p>
          </div>
        </div>

        {/* Cadre fiscal suisse */}
        <div className="mb-20 lg:mb-28 bg-slate-50 border border-slate-100 p-8 sm:p-10">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="h-6 w-6 text-[#10b981] shrink-0 mt-0.5" />
            <div>
              <span className="font-sans text-[10px] uppercase tracking-wider text-swiss-blue font-bold block mb-2">
                Spécificité helvétique
              </span>
              <h2 className="font-display text-2xl font-light text-swiss-navy tracking-tight mb-3">
                L&apos;avantage fiscal des plus-values privées
              </h2>
              <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-3xl">
                En Suisse, les particuliers bénéficient d&apos;un régime particulièrement favorable : les plus-values réalisées sur des valeurs mobilières détenues à titre privé ne sont, en principe, <strong>pas soumises à l&apos;impôt sur le revenu</strong>. Seuls les revenus de capitaux mobiliers (dividendes, intérêts) et la fortune sont imposés selon les barèmes cantonaux en vigueur.
              </p>
              <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-3xl mt-4">
                Ce cadre constitue un levier structurant pour la création de patrimoine à long terme : chaque arbitrage réussi peut, sous réserve des règles applicables, contribuer à l&apos;enrichissement net du patrimoine sans imposition de la plus-value elle-même. La situation fiscale de chaque client restant individuelle, nous travaillons en coordination avec vos conseils fiscaux lorsque nécessaire.
              </p>
              <p className="font-sans text-[10px] text-slate-400 mt-4">
                Informations générales, sans valeur de conseil fiscal personnalisé. Les règles peuvent varier selon le canton, le statut du contribuable et la nature des titres détenus.
              </p>
            </div>
          </div>
        </div>

        {/* Bénéfices clients */}
        <div className="mb-20 lg:mb-28">
          <div className="mb-10 md:max-w-3xl">
            <span className="font-sans text-[10px] uppercase tracking-wider text-swiss-blue font-bold block mb-2">
              Ce que vous gagnez concrètement
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-swiss-navy">
              Un accompagnement pensé pour votre sérénité
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="border border-slate-100 p-6 space-y-3">
                <h3 className="font-sans text-sm font-bold text-swiss-navy">{b.title}</h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="mb-20 lg:mb-28">
          <div className="mb-12 md:max-w-3xl">
            <span className="font-sans text-[10px] uppercase tracking-wider text-swiss-blue font-bold block mb-2">
              Notre approche
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-swiss-navy">
              Quatre piliers de la gestion privée ADN
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

        <div className="bg-swiss-navy text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,64,175,0.15),transparent)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.20em] text-[#10b981] mb-3 block">
                Expertise complémentaire
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-white mb-4">
                Trésorerie d&apos;entreprise &amp; holdings
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Vous dirigez une société ou une holding avec des excédents de trésorerie ? Découvrez notre accompagnement dédié à la gestion professionnelle des liquidités corporatives.
              </p>
            </div>

            <div className="lg:text-right space-y-4">
              <p className="font-sans text-[11px] text-slate-400">
                ADN FINANCE SA • Cabinet indépendant de gestion de fortune, Genève.
              </p>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <Link
                  href="/gestion-corporate"
                  className="inline-flex h-11 items-center justify-center bg-white text-swiss-navy px-6 font-sans text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all text-center"
                >
                  Gestion professionnelle
                </Link>
                <Link
                  href="/#simulateur-integre"
                  className="inline-flex h-11 items-center justify-center border border-white/20 bg-white/5 text-white px-6 font-sans text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
                >
                  Simulateur patrimonial
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
