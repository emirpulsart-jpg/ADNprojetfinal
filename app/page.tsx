'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  Landmark,
  ArrowRight,
  ChevronDown,
  Coins,
  Gem,
  CheckCircle,
  TrendingDown,
  TrendingUp,
  User,
  ArrowUpRight,
  Info
} from 'lucide-react';

// Historic multipliers (2020-2025)
const DATA_MULTIPLIERS = {
  nvidia: [1.0, 1.6, 2.4, 3.8, 6.2, 9.5],      // ~ +850%
  apple: [1.0, 1.25, 1.5, 1.75, 2.1, 3.2],    // ~ +220%
  microsoft: [1.0, 1.2, 1.45, 1.7, 2.2, 2.9],  // ~ +190%
  epargne: [1.0, 0.94, 0.89, 0.84, 0.79, 0.74], // Devaluation by inflation (~ -26% real purchasing power loss)
};

const COMPANY_META = {
  nvidia: { name: 'Nvidia Corp (NVDA)', color: '#10b981', label: 'Tech & Intelligence Artificielle' },
  apple: { name: 'Apple Inc (AAPL)', color: '#3b82f6', label: 'Écosystème Global & Services Mobile' },
  microsoft: { name: 'Microsoft Corp (MSFT)', color: '#6366f1', label: 'Infrastructure Cloud & IA' },
  epargne: { name: 'Épargne Classique', color: '#f97316', label: 'Taux passifs suisses bas' },
};

// Simple Count-Up Component
function CountingStat({ targetValue, duration = 1500, suffix = "" }: { targetValue: number; duration?: number; suffix?: string }) {
  const [count, setCount] = React.useState(0);
  const elementRef = React.useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad formula
            const currentCount = Math.floor(progress * (targetValue - start) + start);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [targetValue, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="font-display font-light text-5xl sm:text-6xl text-swiss-navy">
      {count}{suffix}
    </span>
  );
}

// Single Question/Answer Accordion
function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100 py-4 font-sans">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 group focus:outline-none"
      >
        <span className="font-display text-xs sm:text-sm font-semibold tracking-wider text-swiss-navy uppercase group-hover:text-swiss-blue transition-colors leading-relaxed">
          {question}
        </span>
        <span className="ml-4 shrink-0 p-1 rounded-full bg-slate-50 text-swiss-navy group-hover:bg-swiss-blue/10 group-hover:text-swiss-blue transition-all">
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-2 pb-4 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomePage() {
  // Simulator State
  const [amount, setAmount] = React.useState<number>(100000);
  const [selectedStock, setSelectedStock] = React.useState<'nvidia' | 'apple' | 'microsoft'>('nvidia');
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  // FAQ state - only one open at a time
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const years = ['2020', '2021', '2022', '2023', '2024', '2025'];

  const stockData = DATA_MULTIPLIERS[selectedStock];
  const epargneData = DATA_MULTIPLIERS.epargne;

  const finalStockVal = amount * stockData[5];
  const finalEpargneVal = amount * epargneData[5];

  // SVG parameters
  const pad = 40;
  const graphWidth = 520;
  const graphHeight = 220;

  // Multiplier peak reference
  const maxValOfStock = stockData[5]; // Dynamically scale based on selected stock peak

  // Dynamic visual scale factor that makes the curves stretch/condense vertically based on 'amount'.
  // This will make the graph lines move and grow in real-time as the slider is dragged.
  const visualScaleFactor = 0.15 + 0.85 * (amount / 2000000);

  const getPoints = (multipliers: number[]) => {
    return multipliers.map((val, idx) => {
      const x = pad + (idx / 5) * graphWidth;
      
      // Position the y starting point of 1.0 at 75% height of the graph.
      // This leaves 75% of the graph height for growth and 25% for devaluation.
      const yStart = pad + graphHeight * 0.75;
      
      let y = yStart;
      if (val >= 1.0) {
        // Linear mapping for values >= 1.0 up to maxValOfStock
        const normalizedGrowth = (val - 1.0) / Math.max(0.1, maxValOfStock - 1.0);
        // Map to range [pad, yStart]
        const growthHeight = yStart - pad;
        y = yStart - (normalizedGrowth * growthHeight * visualScaleFactor);
      } else {
        // Linear mapping for values < 1.0 down to 0.70
        // e.g. if val goes from 1.0 to 0.70, map it to descend from yStart towards pad + graphHeight
        const normalizedLoss = (1.0 - val) / 0.30; // 0.30 covers decrease from 1.0 down to 0.70
        const lossHeight = (pad + graphHeight) - yStart;
        y = yStart + (normalizedLoss * lossHeight * visualScaleFactor);
      }
      
      return { x, y, value: val };
    });
  };

  const stockPoints = getPoints(stockData);
  const epargnePoints = getPoints(epargneData);

  const getSvgPath = (points: { x: number; y: number }[]) => {
    return points.reduce((path, pt, i) => {
      return i === 0 ? `M ${pt.x} ${pt.y}` : `${path} L ${pt.x} ${pt.y}`;
    }, '');
  };

  const getAreaSvgPath = (points: { x: number; y: number }[]) => {
    const linePath = getSvgPath(points);
    if (!linePath) return '';
    return `${linePath} L ${points[points.length - 1].x} ${pad + graphHeight} L ${points[0].x} ${pad + graphHeight} Z`;
  };

  const formatCHF = (val: number) => {
    return new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF', maximumFractionDigits: 0 }).format(val);
  };

  const renderGraph = (isMobile: boolean = false) => {
    return (
      <div className={`space-y-4 ${isMobile ? 'block lg:hidden' : 'hidden lg:block'}`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-swiss-navy">
              Évolution comparative (2020 - 2025)
            </h3>
            <p className="font-sans text-[11px] text-slate-400">
              Déformation positive de la valorisation basée sur le montant de départ.
            </p>
          </div>

          {/* Legends */}
          <div className="flex items-center gap-3 font-sans text-[10px] flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-4 bg-swiss-blue inline-block"></span>
              <span className="text-slate-600 font-bold uppercase">{COMPANY_META[selectedStock].name.split(' ')[0]}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-4 bg-[#ef4444] inline-block"></span>
              <span className="text-slate-600 font-bold uppercase">Épargne Standard</span>
            </div>
          </div>
        </div>

        {/* Dynamic Scaling SVG with motion.path */}
        <div className="relative overflow-visible">
          <svg
            viewBox="0 0 600 300"
            className="w-full h-auto overflow-visible"
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1.0].map((ratio, i) => {
              const y = pad + ratio * graphHeight;
              return (
                <g key={i}>
                  <line
                    x1={pad}
                    y1={y}
                    x2={pad + graphWidth}
                    y2={y}
                    stroke="#f1f5f9"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </g>
              );
            })}

            {/* Verticals Axes */}
            {years.map((year, i) => {
              const x = pad + (i / 5) * graphWidth;
              return (
                <g key={i}>
                  <line
                    x1={x}
                    y1={pad}
                    x2={x}
                    y2={pad + graphHeight}
                    stroke="#f8fafc"
                    strokeWidth="1.5"
                  />
                  <text
                    x={x}
                    y={pad + graphHeight + 20}
                    textAnchor="middle"
                    className="font-mono text-[9px] fill-slate-400 font-bold"
                  >
                    {year}
                  </text>
                </g>
              );
            })}

            {/* Smooth transitions areas */}
            <defs>
              <linearGradient id={`${isMobile ? 'm-' : ''}selectedGradient`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e40af" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.00" />
              </linearGradient>
              <linearGradient id={`${isMobile ? 'm-' : ''}epargneGradient`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.00" />
              </linearGradient>
            </defs>

            {/* Standard area paths */}
            <motion.path 
              animate={{ d: getAreaSvgPath(stockPoints) }} 
              transition={{ type: "spring", stiffness: 85, damping: 16 }}
              fill={`url(#${isMobile ? 'm-' : ''}selectedGradient)`} 
            />
            <motion.path 
              animate={{ d: getAreaSvgPath(epargnePoints) }} 
              transition={{ type: "spring", stiffness: 85, damping: 16 }}
              fill={`url(#${isMobile ? 'm-' : ''}epargneGradient)`} 
            />

            {/* Main Lines */}
            <motion.path
              animate={{ d: getSvgPath(stockPoints) }}
              transition={{ type: "spring", stiffness: 85, damping: 16 }}
              fill="none"
              stroke={COMPANY_META[selectedStock].color}
              strokeWidth="3"
            />
            <motion.path
              animate={{ d: getSvgPath(epargnePoints) }}
              transition={{ type: "spring", stiffness: 85, damping: 16 }}
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />

            {/* Interactive Triggers */}
            {stockPoints.map((pt, i) => {
              const isHovered = hoverIndex === i;
              const epStatePt = epargnePoints[i];
              return (
                <g key={i}>
                  <rect
                    x={pt.x - 25}
                    y={pad}
                    width="50"
                    height={graphHeight}
                    className="fill-transparent cursor-pointer"
                    onMouseEnter={() => setHoverIndex(i)}
                  />
                  {isHovered && (
                    <g>
                      <line
                        x1={pt.x}
                        y1={pad}
                        x2={pt.x}
                        y2={pad + graphHeight}
                        stroke="#e2e8f0"
                        strokeWidth="1.5"
                      />
                      <circle cx={pt.x} cy={pt.y} r="6" fill={COMPANY_META[selectedStock].color} />
                      <circle cx={epStatePt.x} cy={epStatePt.y} r="5" fill="#ef4444" />
                    </g>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Micro tooltip card floating */}
          {hoverIndex !== null && (
            <div
              className="absolute bg-swiss-navy text-white text-xs p-3 shadow-lg pointer-events-none font-sans space-y-1 z-30"
              style={{
                left: `${Math.min((hoverIndex / 5) * 85 + 5, 65)}%`,
                top: '-15px',
              }}
            >
              <p className="font-bold border-b border-white/10 pb-1 text-[10px]">Position en {years[hoverIndex]}</p>
              <div className="space-y-0.5 pt-1">
                <p className="flex justify-between gap-6">
                  <span>{COMPANY_META[selectedStock].name.split(' ')[0]}:</span>
                  <strong className="text-[#10b981] font-mono">{formatCHF(amount * stockData[hoverIndex])}</strong>
                </p>
                <p className="flex justify-between gap-6">
                  <span className="text-slate-300">Épargne:</span>
                  <strong className="text-[#ff2222] font-mono font-bold">{formatCHF(amount * epargneData[hoverIndex])}</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderSummary = (isMobile: boolean = false) => {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 font-sans ${isMobile ? 'block lg:hidden' : 'hidden lg:block'}`}>
        <div className="p-4 bg-slate-50">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
            Valeur cumulée ({years[5]})
          </span>
          <p className="text-xl font-bold text-swiss-navy">
            {formatCHF(finalStockVal)}
          </p>
          <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 mt-1 inline-block">
            + {Math.round((stockData[5] - 1) * 100)}% de plus-value brute
          </span>
        </div>

        <div className="p-4 bg-slate-50">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
            Épargne de dépôt ({years[5]})
          </span>
          <p className="text-xl font-bold text-swiss-navy">
            {formatCHF(finalEpargneVal)}
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-[#ff2222] font-black bg-red-50 border border-red-200/50 px-2.5 py-0.75 w-fit mt-1">
            <TrendingDown className="h-3 w-3 shrink-0 text-[#ff2222]" />
            <span className="uppercase tracking-wider">Dévalué par l&apos;inflation</span>
          </div>
        </div>
      </div>
    );
  };

  const faqItems = [
    {
      q: "QUELLE EST NOTRE EXPERTISE ?",
      a: "Chez ADN Finance SA, nous élaborons des stratégies financières selon une approche rigoureuse et transparente. Notre but est d'accompagner nos clients avec une indépendance totale et d'agir à titre de fiduciaire exclusif pour les aider à valoriser leur patrimoine de manière pérenne sous la stricte réglementation helvétique."
    },
    {
      q: "COMMENT PROTÉGEONS-NOUS VOS ACTIFS ?",
      a: "Nous protégeons vos actifs par une gestion rigoureuse des risques, fondée sur un money management précis avec des seuils de sécurité clairs (« stop loss »). Chaque stratégie d'investissement est conçue pour limiter la volatilité tout en optimisant durablement la valorisation à long terme du capital confié."
    },
    {
      q: "QUELS CLIENTS ACCOMPAGNONS-NOUS ?",
      a: "Nous accompagnons une clientèle privée haut de gamme et exigeante, composée d'entrepreneurs, de dirigeants et de familles recherchant un cabinet d'affaires de type Multi-Family Office. Nos services s'adaptent aux attentes fiscales et organisationnelles de portefeuilles suisses et internationaux."
    },
    {
      q: "COMMENT SÉLECTIONNONS-NOUS LES INVESTISSEMENTS ?",
      a: "Nous sélectionnons les investissements sur la base de critères de recherche et d'analyse technique, fondamentale et quantitative. Nos choix s'orientent vers des entreprises haut de gamme, solides et leaders dans leur secteur, capables d'assurer une performance durable au sein d'un marché mondialisé."
    },
    {
      q: "QUELLE EST NOTRE PHILOSOPHIE D'INVESTISSEMENT ?",
      a: "Notre philosophie d'investissement combine des stratégies analytiques, innovantes et rigoureuses. Nous privilégions une approche proactive basée sur la diversification internationale des classes d'actifs et la gestion active du risque pour optimiser durablement le rendement réel de chaque portefeuille."
    },
    {
      q: "UN SUIVI PERSONNALISÉ EST-IL PROPOSÉ ?",
      a: "Absolument, chaque client bénéficie d'un suivi sur mesure et mené en toute confidentialité. Notre équipe à Genève assure une disponibilité permanente et des rapports réguliers pour aligner nos décisions sur les événements marquants de votre parcours."
    },
    {
      q: "CE QUI NOUS DISTINGUE ?",
      a: "Notre indépendance totale garantit l'absence absolue de conflits d'intérêts et de liens capitalistiques avec les partenaires financiers d'exécution. Nous conjuguons rituels d'excellence, souveraineté suisse, réactivité opérationnelle et neutralité absolue dans la répartition des frais."
    },
    {
      q: "QUELLE MÉTHODOLOGIE EST UTILISÉE POUR STRUCTURER LA STRATÉGIE ?",
      a: "Nous appliquons une méthodologie dynamique reposant sur l'analyse continue des grands cycles macroéconomiques combinée à un money management réactif en temps réel. Cette rigueur permet d'ajuster l'orientation de vos actifs selon les objectifs de vie déterminés et le profil de risques assigné."
    }
  ];

  return (
    <div className="flex flex-col bg-white" id="adn-homepage">
      
      {/* 0. IMMERSIVE VIDEO BUCKET SECTION - ALWAYS FIRST, NO TEXT, FULLSCREEN COVERAGE */}
      <section className="relative w-full h-[75vh] sm:h-screen overflow-hidden bg-swiss-navy" id="top-immersive-video">
        {/* Vidéo pour ordinateurs et tablettes */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0 pointer-events-none hidden sm:block"
        >
          <source src="/Video_1.mp4" type="video/mp4" />
        </video>

        {/* Vidéo pour smartphones (mobile) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none block sm:hidden"
        >
          <source src="/video_2.mp4" type="video/mp4" />
        </video>
      </section>

      {/* 1. SOBER, ELITE HERO SECTION IN SWISS BLUE & DEEP NAVY */}
      <section className="relative overflow-hidden py-24 sm:py-32 border-b border-gray-100 bg-gradient-to-b from-slate-50 via-white to-white" id="hero-adn">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e40af05_1px,transparent_1px),linear-gradient(to_bottom,#1e40af05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="mx-auto max-w-5xl px-6 lg:px-8 relative z-10 text-center animate-fade-in">
          <div className="space-y-6 max-w-3xl mx-auto">
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-swiss-navy leading-[1.08]">
              Gestion de fortune indépendante
            </h1>
            
            <div className="h-0.5 w-16 bg-[#10b981] mx-auto my-6"></div>
            
            <p className="font-sans text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Un accompagnement indépendant et personnalisé pour structurer votre patrimoine et prendre des décisions éclairées à chaque étape de votre vie.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center bg-swiss-navy text-white px-8 font-sans text-xs font-bold uppercase tracking-widest hover:bg-swiss-blue transition-all"
                id="hero-cta-contact"
              >
                Être contacté par un expert financier
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. UNE TRANSPARENCE TOTALE SECTION & INTERACTIVE SCHEMA */}
      <section className="bg-white py-24 border-b border-gray-100" id="transparence-totale">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Text description */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#10b981] block">
                L&apos;indépendance comme principe fondateur
              </span>
              <h2 className="font-display text-3xl font-light text-swiss-navy tracking-tight leading-tight">
                UNE TRANSPARENCE TOTALE
              </h2>
              <div className="h-0.5 w-12 bg-swiss-blue"></div>
              
              <div className="space-y-4 font-sans text-sm text-slate-500 leading-relaxed">
                <p>
                  Chez <strong>ADN Finance SA</strong>, nous croyons qu&apos;une gestion de fortune performante repose avant tout sur l&apos;objectivité, la confiance et la vision à long terme.
                </p>
                <p>
                  Les avoirs de nos clients demeurent déposés auprès de banques dépositaires reconnues, tandis que nous nous consacrons exclusivement à l&apos;élaboration et au suivi de stratégies d&apos;investissement personnalisées.
                </p>
                <p>
                  Cette indépendance nous permet de sélectionner les opportunités les plus d&apos;avenir sans contrainte commerciale ni préférence institutionnelle, dans le respect d&apos;un seul engagement : défendre les intérêts patrimoniaux de nos clients avec rigueur et transparence.
                </p>
              </div>
            </div>

            {/* Premium Animated SVG Flowchart */}
            <div className="lg:col-span-7 bg-slate-50/50 border border-slate-100/80 p-6 sm:p-8 rounded-none relative">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-swiss-navy border-b border-slate-100 pb-3 mb-6 text-center">
                Modèle d&apos;architecture ouverte ADN
              </h3>
              
              {/* Triangular layout with relations */}
              <div className="grid grid-cols-1 gap-8 md:gap-4 relative pt-4 pb-4">
                
                {/* 1. NODE: CLIENT */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col items-center justify-center text-center z-10"
                >
                  <div className="bg-white border-2 border-swiss-navy min-w-[200px] hover:border-swiss-blue transition-colors px-6 py-4 rounded-xl shadow-sm text-center">
                    <User className="h-6 w-6 text-swiss-navy mx-auto mb-1.5" />
                    <h4 className="font-sans font-extrabold text-xs uppercase tracking-widest text-swiss-navy">Client</h4>
                    <p className="font-sans text-[10px] text-slate-400 mt-1">Titulaire exclusif de son compte</p>
                  </div>
                </motion.div>

                {/* SVG Connecting Flow lines (Desktop view and Mobile view) */}
                <div className="hidden md:block absolute inset-0 pointer-events-none z-0" style={{ minHeight: '340px' }}>
                  <svg className="w-full h-full" viewBox="0 0 500 340">
                    <defs>
                      <linearGradient id="glow-line-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0c1b33" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                      <linearGradient id="glow-line-2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0c1b33" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>

                    {/* Left path (Client to ADN Finance) */}
                    <motion.path 
                      className="stroke-slate-200" 
                      strokeWidth="2" 
                      fill="none" 
                      d="M 215,65 Q 110,65 110,185"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    />
                    
                    {/* Right path (Client to Banque Dépositaire) */}
                    <motion.path 
                      className="stroke-slate-200" 
                      strokeWidth="2" 
                      fill="none" 
                      d="M 285,65 Q 390,65 390,185"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
                    />

                    {/* Bottom connecting path (ADN Finance and Banque) */}
                    <motion.path 
                      className="stroke-slate-205" 
                      strokeWidth="2" 
                      strokeDasharray="4 4"
                      fill="none" 
                      d="M 160,215 L 340,215"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
                    />

                    {/* Direction arrows or indicator sparks on routes */}
                    <circle r="4" fill="#1e40af">
                      <animateMotion dur="4s" repeatCount="indefinite" path="M 215,65 Q 110,65 110,185" />
                    </circle>
                    <circle r="4" fill="#10b981">
                      <animateMotion dur="4.2s" repeatCount="indefinite" path="M 285,65 Q 390,65 390,185" />
                    </circle>
                  </svg>
                </div>

                {/* Left/Right visual cards on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-0 md:pt-12 relative z-10">
                  
                  {/* 2. NODE: ADN FINANCE (Bottom Left) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <div className="bg-white border border-slate-200 min-w-[190px] px-5 py-4 rounded-xl shadow-xs text-center">
                      <Coins className="h-5 w-5 text-swiss-blue mx-auto mb-1" />
                      <h4 className="font-sans font-extrabold text-xs uppercase tracking-wider text-swiss-navy">ADN FINANCE</h4>
                      <p className="font-sans text-[8px] uppercase tracking-widest text-[#10b981] font-bold mt-1">Gestionnaire d&apos;actifs</p>
                      <p className="font-sans text-[10px] text-slate-400 mt-1 leading-normal">Stratégies &amp; Arbitrage fiduciaire</p>
                    </div>
                  </motion.div>

                  {/* 3. NODE: BANQUE DÉPOSITAIRE (Bottom Right) */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <div className="bg-white border border-slate-205 min-w-[190px] px-5 py-4 rounded-xl shadow-xs text-center">
                      <Landmark className="h-5 w-5 text-slate-500 mx-auto mb-1" />
                      <h4 className="font-sans font-extrabold text-xs uppercase tracking-wider text-swiss-navy">BANQUE DÉPOSITAIRE</h4>
                      <p className="font-sans text-[8px] uppercase tracking-widest text-slate-400 font-bold mt-1">Conservation sûre</p>
                      <p className="font-sans text-[10px] text-slate-400 mt-1 leading-normal">Liquidités &amp; Dépôt physique (FINMA)</p>
                    </div>
                  </motion.div>

                </div>

                {/* Subtext descriptions on Desktop lines */}
                <div className="hidden md:block text-slate-500 font-sans text-[10px] leading-relaxed relative pt-6 text-center space-y-2 mt-4">
                  <p className="max-w-md mx-auto py-1 px-3 bg-white border border-slate-100 italic">
                    <strong>Relation sans conflit d&apos;intérêts :</strong> Le Client délègue uniquement un mandat de gestion de fortune à ADN Finance sans jamais lui conférer de pouvoir de détention. Vos fonds restent en sécurité intégrale au sein de votre banque dépositaire.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. À PROPOS DE NOUS STATS COUNTER SECTION */}
      <section className="bg-slate-50 py-20 border-b border-gray-100" id="a-propos">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-swiss-blue block mb-2">
              Chiffres clés de notre engagement
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light text-swiss-navy tracking-tight">
              À PROPOS DE NOUS
            </h2>
            <div className="h-px w-12 bg-swiss-blue mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-4">
            
            {/* Stat 1 */}
            <div className="bg-white border border-slate-100 p-8 flex flex-col items-center justify-center">
              <div className="flex items-baseline justify-center">
                <CountingStat targetValue={100} suffix="%" />
              </div>
              <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-swiss-blue mt-4">
                Indépendant
              </p>
              <p className="font-sans text-xs text-slate-400 mt-2 max-w-[200px]">
                Zéro commissions bancaires cachées de tiers.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-slate-100 p-8 flex flex-col items-center justify-center">
              <div className="flex items-baseline justify-center">
                <CountingStat targetValue={650} />
              </div>
              <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-swiss-blue mt-4">
                Clients nous font confiance
              </p>
              <p className="font-sans text-xs text-slate-400 mt-2 max-w-[200px]">
                Des relations basées sur la discrétion absolue.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-slate-100 p-8 flex flex-col items-center justify-center">
              <div className="flex items-baseline justify-center">
                <CountingStat targetValue={25} suffix=" ans" />
              </div>
              <p className="font-sans text-xs sm:text-sm font-bold uppercase tracking-widest text-swiss-blue mt-4">
                D&apos;expérience
              </p>
              <p className="font-sans text-xs text-slate-400 mt-2 max-w-[200px]">
                Rigueur de conduite helvétique éprouvée.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. NOS SERVICES DE GESTION S&apos;ADAPTENT AUX CLIENTS */}
      <section className="bg-white py-24 border-b border-gray-100" id="nos-services">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#10b981] block mb-2">
              Solutions d&apos;Allocation Rigoireuse
            </span>
            <h2 className="font-display text-2.5xl sm:text-3.5xl font-light text-swiss-navy tracking-tight">
              Nos services de gestion s’adaptent aux clients
            </h2>
            <div className="h-0.5 w-16 bg-[#10b981] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Préservation */}
            <div className="bg-slate-50 border border-slate-100 hover:border-swiss-blue/15 transition-all duration-300 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-swiss-navy/5 text-swiss-navy flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wide">
                  Préservation du capital
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Dans un contexte économique incertain, protéger le patrimoine contre les risques financiers et économiques est primordial.
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Cela implique une gestion prudente, axée sur la stabilité et la sécurité des actifs. Nos stratégies visent à s&apos;adapter à l&apos;horizon d’investissement et à la tolérance au risque propre à chacun.
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Dans le but de limiter l’exposition aux marchés volatils, ou de privilégier des instruments à faible risque, tout en garantissant une liquidité suffisante pour faire face aux imprévus.
                </p>
              </div>
            </div>

            {/* Card 2: Optimisation */}
            <div className="bg-slate-50 border border-slate-100 hover:border-swiss-blue/15 transition-all duration-300 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-[#1e40af]/5 text-[#1e40af] flex items-center justify-center">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wide">
                  Optimisation des rendements
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Chaque client a des objectifs uniques, qu’il s’agisse de croissance, de revenus stables ou de diversification.
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Il est possible d&apos;élaborer des stratégies d’investissement sur mesure, combinant des actifs variés pour maximiser les rendements tout en maintenant un équilibre adapté au niveau de risque souhaité.
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Cette approche permet de préserver la valeur réelle du capital sur le long terme, tout en assurant une certaine flexibilité dans les choix d’allocation.
                </p>
              </div>
            </div>

            {/* Card 3: Diversification */}
            <div className="bg-slate-50 border border-slate-100 hover:border-swiss-blue/15 transition-all duration-300 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-emerald-50 text-[#10b981] flex items-center justify-center">
                  <Coins className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wide">
                  Diversification des investissements
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Notre équipe de gestion assure une diversification équilibrée qui se veut adaptée aux tendances actuelles.
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  L&apos;objectif est de répartir les risques sans se priver de saisir les meilleures opportunités de croissance. Nous construisons des portefeuilles robustes, ayant pour ambition de résister aux cycles économiques.
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Cette approche permet de réduire l’impact des fluctuations d’un seul marché, tout en positionnant nos clients sur des secteurs porteurs et innovants.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SIMULATOR INTEGRATED COMPONENT */}
      <section className="bg-slate-50 py-24 border-b border-gray-100" id="simulateur-integre">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          
          <div className="max-w-3xl mb-12 sm:mb-16 text-center sm:text-left">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#10b981] block mb-2">
              Analyse Comparative Réelle (2020 - 2025)
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-light tracking-tight text-swiss-navy leading-tight">
              L&apos;investissement comme levier de création patrimoniale
            </h2>
            <p className="font-serif italic font-medium text-swiss-blue text-lg mt-2">
              Épargne passive vs Actifs majeurs
            </p>
            <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-2xl mt-4">
              Comparez le rendement historique d’un placement sur les géants mondiaux face à la thésaurisation bancaire en francs suisses. Ce simulateur démontre l&apos;importance cruciale de l&apos;arbitrage d&apos;actifs réels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left controls panel */}
            <div className="lg:col-span-5 bg-white border border-slate-150 p-6 sm:p-8 space-y-8 shadow-xs">
              
              {/* iOS style select dropdown */}
              <div className="space-y-4">
                <label className="font-sans text-xs font-bold uppercase tracking-wider text-swiss-navy block">
                  Sélectionner l&apos;actif de comparaison
                </label>
                
                <div className="relative">
                  <select
                    value={selectedStock}
                    onChange={(e) => setSelectedStock(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 text-swiss-navy py-3 px-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-swiss-blue font-sans text-xs font-bold uppercase tracking-wide appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%230c1b33' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 1rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.25rem'
                    }}
                  >
                    <option value="nvidia">Nvidia Corp (NVDA) - Tech &amp; IA</option>
                    <option value="apple">Apple Inc (AAPL) - Écosystème</option>
                    <option value="microsoft">Microsoft Corp (MSFT) - Cloud</option>
                  </select>
                </div>
              </div>

              {/* Slider Starting Amount */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-sans text-xs font-bold uppercase tracking-wider text-swiss-navy block">
                    Somme de départ simulée
                  </label>
                  <span className="font-mono text-xs font-bold text-swiss-blue bg-swiss-blue/5 px-2.5 py-1">
                    {amount.toLocaleString('fr-CH')} CHF
                  </span>
                </div>

                <input
                  type="range"
                  min={5000}
                  max={2000000}
                  step={5000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-swiss-blue h-1.5 bg-slate-200 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between font-sans text-[10px] text-slate-400">
                  <span>5&apos;000 CHF</span>
                  <span>1&apos;000&apos;000 CHF</span>
                  <span>2&apos;000&apos;000 CHF</span>
                </div>
              </div>

              {/* On mobile: Nest graph and summary inside this exact same cards panel to be perfectly visible when modifying slider */}
              {renderGraph(true)}
              {renderSummary(true)}

              {/* Informative alert rule - Hidden on mobile to free up space, shown on desktop */}
              <div className="hidden lg:flex p-4 bg-emerald-50/20 border border-emerald-100 gap-3 text-xs text-slate-600">
                <Info className="h-5 w-5 text-[#10b981] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong>Arbitrage fiduciaire :</strong> Plus la somme investie est équilibrée, plus l&apos;impact de l&apos;inflation sur les comptes d&apos;épargne classiques est accentué.
                </p>
              </div>

            </div>

            {/* Right graphical visualization scale panel - Hidden on mobile, shown on desktop */}
            <div className="lg:col-span-7 bg-white border border-slate-150 p-6 sm:p-8 shadow-xs space-y-8 hidden lg:block">
              {renderGraph(false)}
              {renderSummary(false)}
            </div>

          </div>
        </div>
      </section>

      {/* 6. QUESTIONS FRÉQUENTES (FAQ ACCORDION) */}
      <section className="bg-white py-24 border-b border-gray-100" id="foire-aux-questions">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#10b981] block mb-2">
              Des réponses à vos interrogations
            </span>
            <h2 className="font-display text-2.5xl sm:text-3.5xl font-light text-swiss-navy tracking-tight">
              Questions Fréquentes
            </h2>
            <div className="h-px w-12 bg-swiss-blue mx-auto mt-4"></div>
          </div>

          <div className="bg-slate-50/20 border border-slate-100 p-6 sm:p-10 rounded-none space-y-1">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.q}
                answer={item.a}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 7. PRESTIGIOUS HIGH-CONVERSION CTA SECTION */}
      <section className="bg-white py-20" id="final-call-to-action">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 animate-fade-in">
          <div className="bg-swiss-navy text-white p-8 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,64,175,0.18),transparent)] pointer-events-none"></div>
            
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#10b981] font-bold mb-3 block">
              Orientation &amp; Analyse Confidentielle
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-light text-white mb-6 tracking-tight">
              Prêt à structurer votre capital avec un conseiller indépendant ?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-10 leading-relaxed">
              Planifiez une consultation privée en toute confidentialité à Genève. Nos experts financier analysent vos actifs et vous guident vers une allocation saine et performante.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center bg-[#10b981] text-white hover:bg-emerald-600 px-8 font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
              >
                Être contacté par un expert financier
              </Link>
              <Link
                href="/#a-propos"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center border border-white/20 bg-white/5 text-white px-8 font-sans text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                Découvrir notre philosophie
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
