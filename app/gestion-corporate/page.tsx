'use client';

import Link from 'next/link';
import {
  TrendingDown,
  Building,
  Scale,
  LineChart,
  ChevronRight,
  CheckCircle,
  Coins,
  Shield,
  Clock
} from 'lucide-react';

export default function GestionCorporatePage() {
  const assets = [
    {
      title: 'Trésorerie multi-devises structurée',
      desc: "Conception d'allocations en CHF, EUR et USD adaptées à votre cycle d'exploitation, à vos flux de paiement et à votre tolérance au risque — sans immobiliser inutilement vos liquidités opérationnelles.",
      icon: Coins
    },
    {
      title: 'Excédents de holding & participations',
      desc: "Accompagnement des holdings industrielles et familiales dans la gestion de leurs réserves, en tenant compte des contraintes fiscales, juridiques et de gouvernance propres aux personnes morales suisses.",
      icon: Building
    },
    {
      title: 'Gestion prudente du risque',
      desc: "Diversification, horizons de placement calibrés et processus de suivi régulier pour limiter l'exposition aux variations de taux, de change et de marché — dans un cadre défini et documenté.",
      icon: LineChart
    },
    {
      title: 'Conformité & gouvernance',
      desc: "Respect strict de la LEFin, de la LSFin et des exigences de gouvernance applicables aux sociétés. Coordination avec votre fiduciaire, votre conseil juridique et vos organes de direction.",
      icon: Scale
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Diagnostic de trésorerie',
      text: "Analyse de vos flux, de vos besoins de liquidité à court terme et de la part de trésorerie réellement investissable sans compromettre l'exploitation."
    },
    {
      step: '02',
      title: 'Stratégie sur mesure',
      text: "Définition d'une allocation prudente — liquidités, obligations, placements diversifiés — alignée sur votre profil de risque et vos contraintes de disponibilité."
    },
    {
      step: '03',
      title: 'Mise en œuvre & suivi',
      text: "Exécution via une banque dépositaire suisse agréée, reporting régulier et ajustements en fonction de l'évolution de votre activité et des conditions de marché."
    }
  ];

  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in" id="gestion-corporate-page">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <Link href="/expertises" className="hover:text-swiss-blue transition-colors">Nos Expertises</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <span className="text-swiss-navy font-semibold">Gestion professionnelle</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 lg:mb-28">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.20em] text-swiss-blue block">
              Gestion professionnelle
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
              Optimiser la trésorerie <br />
              <span className="font-serif italic font-medium text-swiss-blue">de votre société</span>
            </h1>
            <p className="font-sans text-base text-slate-500 leading-relaxed max-w-xl">
              La gestion professionnelle ADN FINANCE SA s&apos;adresse aux dirigeants, holdings et entreprises qui disposent de liquidités excédentaires et souhaitent les allouer de manière structurée — plutôt que de les maintenir sur un compte courant sans stratégie d&apos;investissement, exposées à la dépréciation progressive de leur pouvoir d&apos;achat sous l&apos;effet de l&apos;inflation.
            </p>
            <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-xl">
              Nous concevons des stratégies d&apos;investissement adaptées à votre profil de risque, à vos contraintes de liquidité et à votre cadre fiscal, dans le respect des bonnes pratiques de gouvernance d&apos;entreprise suisse.
            </p>
            <div className="pt-2">
              <Link
                href="/contact-us?type=pro"
                className="inline-flex h-12 items-center justify-center bg-swiss-navy px-8 font-sans text-xs font-bold uppercase tracking-widest text-white hover:bg-swiss-blue transition-all"
              >
                Être contacté par un expert financier
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-white border border-slate-200 text-swiss-blue">
                <Building className="h-5 w-5 stroke-[1.2]" />
              </div>
              <div>
                <h3 className="font-sans text-xs font-bold text-swiss-navy uppercase tracking-wider">Profil professionnel</h3>
                <p className="font-sans text-[10px] text-slate-400">PME, holdings &amp; directions générales</p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-swiss-blue shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Accompagnement des trésoreries dès <strong>50&apos;000 CHF</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-swiss-blue shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Stratégies prudentes, diversifiées et calibrées sur vos besoins de disponibilité.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-swiss-blue shrink-0 mt-0.5" />
                <p className="font-sans text-xs sm:text-sm text-slate-600">
                  Actifs conservés auprès de banques dépositaires suisses agréées, en toute transparence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Risque trésorerie non investie */}
        <div className="mb-20 lg:mb-28 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-wider text-swiss-blue font-bold block">
              Enjeu stratégique
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-swiss-navy leading-snug">
              Des excédents de trésorerie non alloués <br />
              <span className="font-serif italic text-swiss-blue">voient leur pouvoir d&apos;achat diminuer</span>
            </h2>
            <p className="font-sans text-sm text-slate-500 leading-relaxed">
              Une trésorerie maintenue en position monétaire sur un compte bancaire à faible rémunération n&apos;est pas neutre sur le plan économique : l&apos;inflation réduit progressivement son pouvoir d&apos;achat. Pour une entreprise, il s&apos;agit d&apos;un coût d&apos;opportunité mesurable — des ressources qui pourraient soutenir la croissance, les investissements ou la résilience financière du groupe.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="border border-red-100 bg-red-50/30 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <TrendingDown className="h-5 w-5 text-red-500 shrink-0" />
                <h3 className="font-sans text-sm font-bold text-swiss-navy">Coût d&apos;opportunité d&apos;une trésorerie non investie</h3>
              </div>
              <ul className="font-sans text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
                <li className="flex gap-2">
                  <span className="text-red-400 shrink-0">—</span>
                  <span><strong>Érosion inflationniste :</strong> même une inflation modérée, cumulée sur plusieurs exercices, diminue la valeur réelle des liquidités non investies.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 shrink-0">—</span>
                  <span><strong>Coût d&apos;opportunité :</strong> des fonds disponibles qui ne participent ni à la croissance de l&apos;entreprise, ni à une allocation financière prudente.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 shrink-0">—</span>
                  <span><strong>Absence de diversification :</strong> une trésorerie 100 % monétaire reste exposée au seul risque de change et de taux, sans compensation possible.</span>
                </li>
              </ul>
            </div>
            <p className="font-sans text-[11px] text-slate-400 leading-relaxed border-l-2 border-slate-200 pl-4">
              <strong>Exemple illustratif :</strong> 500&apos;000 CHF de trésorerie excédentaire maintenus en compte sur plusieurs exercices à rémunération minimale peuvent voir leur pouvoir d&apos;achat réel reculer sensiblement, alors qu&apos;une allocation prudente et structurée vise à préserver la liquidité nécessaire tout en valorisant la part investissable — sous réserve des risques de marché et sans garantie de résultat.
            </p>
          </div>
        </div>

        {/* Approche structurée */}
        <div className="mb-20 lg:mb-28 bg-slate-50 border border-slate-100 p-8 sm:p-10">
          <div className="flex items-start gap-4 mb-8">
            <Shield className="h-6 w-6 text-swiss-blue shrink-0 mt-0.5" />
            <div>
              <span className="font-sans text-[10px] uppercase tracking-wider text-swiss-blue font-bold block mb-2">
                Notre réponse
              </span>
              <h2 className="font-display text-2xl font-light text-swiss-navy tracking-tight mb-3">
                Valoriser la trésorerie sans prendre de risques inappropriés
              </h2>
              <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-3xl">
                Nous ne proposons pas de spéculation. Nous construisons une architecture d&apos;investissement calibrée : une part en liquidités immédiatement disponibles pour vos besoins opérationnels, une part en placements prudents à horizon défini, et un cadre de gouvernance clair pour les organes de direction et les actionnaires.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="bg-white border border-slate-100 p-6 space-y-3">
                <span className="font-mono text-xs font-bold text-swiss-blue">{s.step}</span>
                <h3 className="font-sans text-sm font-bold text-swiss-navy">{s.title}</h3>
                <p className="font-sans text-xs text-slate-500 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bénéfices */}
        <div className="mb-20 lg:mb-28 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-slate-100 p-6 space-y-3">
            <Clock className="h-5 w-5 text-swiss-blue" />
            <h3 className="font-sans text-sm font-bold text-swiss-navy">Liquidité maîtrisée</h3>
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              Distinction claire entre trésorerie opérationnelle et trésorerie investissable. Vos besoins de paiement et de marge de manœuvre restent prioritaires.
            </p>
          </div>
          <div className="border border-slate-100 p-6 space-y-3">
            <LineChart className="h-5 w-5 text-swiss-blue" />
            <h3 className="font-sans text-sm font-bold text-swiss-navy">Allocation disciplinée</h3>
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              Diversification, horizons calibrés et révision périodique. Chaque décision s&apos;inscrit dans un mandat formalisé et documenté.
            </p>
          </div>
          <div className="border border-slate-100 p-6 space-y-3">
            <Building className="h-5 w-5 text-swiss-blue" />
            <h3 className="font-sans text-sm font-bold text-swiss-navy">Vision d&apos;entreprise</h3>
            <p className="font-sans text-xs text-slate-500 leading-relaxed">
              Reporting adapté aux dirigeants et aux organes de gouvernance. Coordination avec votre fiduciaire et vos conseils fiscaux lorsque requis.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="mb-20 lg:mb-28">
          <div className="mb-12 md:max-w-3xl">
            <span className="font-sans text-[10px] uppercase tracking-wider text-swiss-blue font-bold block mb-2">
              Nos domaines d&apos;intervention
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-swiss-navy">
              Quatre axes de la gestion professionnelle
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

        <div className="bg-swiss-navy text-white p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,64,175,0.15),transparent)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="font-sans text-[10px] uppercase tracking-[0.20em] text-[#10b981] mb-3 block">
                Expertise complémentaire
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-white mb-4">
                Patrimoine privé &amp; familial
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Vous souhaitez également structurer votre patrimoine personnel ? Découvrez notre accompagnement dédié aux particuliers et aux familles.
              </p>
            </div>

            <div className="lg:text-right space-y-4">
              <p className="font-sans text-[11px] text-slate-400">
                ADN FINANCE SA • Conseils financiers indépendants, Genève.
              </p>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <Link
                  href="/gestion-de-fortune"
                  className="inline-flex h-11 items-center justify-center bg-white text-swiss-navy px-6 font-sans text-xs font-bold uppercase tracking-widest hover:bg-slate-100 transition-all text-center"
                >
                  Gestion privée
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
