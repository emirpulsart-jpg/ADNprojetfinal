'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  LineChart as ChartIcon,
  TrendingUp,
  Info,
  ChevronRight,
  Shield,
  ArrowRight,
  Sparkles,
  HelpCircle,
  TrendingDown
} from 'lucide-react';

// Historic multipliers over 5 years (2020-2025)
const DATA_MULTIPLIERS = {
  nvidia: [1.0, 1.6, 2.4, 3.8, 6.2, 9.5], // ~ +850% / 9.5x
  apple: [1.0, 1.25, 1.5, 1.75, 2.1, 3.2], // ~ +220% / 3.2x
  microsoft: [1.0, 1.2, 1.45, 1.7, 2.2, 2.9], // ~ +190% / 2.9x
  epargne: [1.0, 1.005, 1.01, 1.015, 1.02, 1.025], // ~ +2.5% / 1.025x
};

const COMPANY_META = {
  nvidia: { name: 'Nvidia Corp (NVDA)', color: '#10b981', label: 'Leader mondial IA' },
  apple: { name: 'Apple Inc (AAPL)', color: '#94a3b8', label: 'Écosystème mondial' },
  microsoft: { name: 'Microsoft Corp (MSFT)', color: '#3b82f6', label: 'Cloud & Logicielles' },
  epargne: { name: 'Épargne Classique Suisse', color: '#f97316', label: 'Intérêts bancaires moyens' },
};

export default function SimulateurPage() {
  const [amount, setAmount] = React.useState<number>(100000);
  const [selectedStock, setSelectedStock] = React.useState<'nvidia' | 'apple' | 'microsoft'>('nvidia');
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  // Years corresponding to data intervals
  const years = ['2020', '2021', '2022', '2023', '2024', '2025'];

  // Current selected stock multipliers
  const stockData = DATA_MULTIPLIERS[selectedStock];
  const epargneData = DATA_MULTIPLIERS.epargne;

  // Final values
  const finalStockVal = amount * stockData[5];
  const finalEpargneVal = amount * epargneData[5];
  const deltaValue = finalStockVal - finalEpargneVal;

  // Grid / graph coordinate generation (SVG viewbox 600x300)
  const pad = 40;
  const graphWidth = 520;
  const graphHeight = 220;

  const getPoints = (multipliers: number[]) => {
    const maxVal = Math.max(...DATA_MULTIPLIERS.nvidia); // Scale everything to Nvidia's peak for accurate comparison
    return multipliers.map((val, idx) => {
      const x = pad + (idx / 5) * graphWidth;
      // Invert Y coordinate since SVG is 0 at top
      const y = (pad + graphHeight) - (val / maxVal) * graphHeight;
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

  // Safe formatting
  const formatCHF = (val: number) => {
    return new Intl.NumberFormat('fr-CH', { style: 'currency', currency: 'CHF', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in" id="simulation-holding-cabinet">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <span className="text-swiss-navy font-semibold">Simulateur de Croissance</span>
        </div>

        {/* Header content */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-swiss-blue block mb-2">
            Outil d&apos;Analyse Comparative (2020 - 2025)
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
            Mesurer la dérive du pouvoir d&apos;achat : <br />
            <span className="font-serif italic font-medium text-swiss-blue">Épargne passive vs Actifs majeurs</span>
          </h1>
          <p className="font-sans text-base text-slate-500 leading-relaxed max-w-2xl mt-4">
            Comparez le rendement historique d’un placement sur les géants mondiaux face à la thésaurisation bancaire en francs suisses. Ce simulateur démontre l&apos;importance cruciale de l&apos;arbitrage d&apos;actifs réels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left panel: sliders & selections (Span 5) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-6 sm:p-8 space-y-8">
            
            {/* Step 1: Stock Auswahl */}
            <div className="space-y-4">
              <label className="font-sans text-xs font-bold uppercase tracking-wider text-swiss-navy block">
                1. Sélectionner l&apos;actif de comparaison
              </label>
              
              <div className="grid grid-cols-1 gap-3">
                {(['nvidia', 'apple', 'microsoft'] as const).map((stock) => {
                  const meta = COMPANY_META[stock];
                  const isSelected = selectedStock === stock;
                  return (
                    <button
                      key={stock}
                      onClick={() => setSelectedStock(stock)}
                      className={`flex items-center justify-between p-4 border text-left transition-all ${
                        isSelected
                          ? 'border-swiss-blue bg-white shadow-sm ring-1 ring-swiss-blue'
                          : 'border-slate-200 hover:border-slate-300 bg-white/50'
                      }`}
                    >
                      <div>
                        <h4 className="font-sans text-sm font-bold text-swiss-navy">{meta.name}</h4>
                        <p className="font-sans text-[11px] text-slate-500">{meta.label}</p>
                      </div>
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: meta.color }}
                      ></span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider Amount */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="font-sans text-xs font-bold uppercase tracking-wider text-swiss-navy block">
                  2. Somme de départ simulée
                </label>
                <span className="font-mono text-xs font-bold text-swiss-blue bg-swiss-blue/5 px-2.5 py-1">
                  CHF {amount.toLocaleString('fr-CH')}
                </span>
              </div>

              <input
                type="range"
                min={20000}
                max={2000000}
                step={20000}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full accent-swiss-blue h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />

              <div className="flex justify-between font-sans text-[10px] text-slate-400">
                <span>20&apos;000 CHF</span>
                <span>1&apos;000&apos;000 CHF</span>
                <span>2&apos;000&apos;000 CHF</span>
              </div>
            </div>

            {/* Simulated Delta summary */}
            <div className="bg-swiss-navy text-white p-6 justify-between flex flex-col space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full pointer-events-none filter blur-lg"></div>
              
              <div className="relative z-10 space-y-1">
                <p className="font-sans text-[10px] uppercase tracking-wider text-[#10b981] font-bold">
                  Écart de croissance constaté
                </p>
                <h3 className="font-display text-2.5xl font-light text-white leading-none">
                  + {formatCHF(deltaValue)}
                </h3>
                <p className="font-sans text-[11px] text-slate-300">
                  Différence accumulée en faveur de <span className="font-semibold text-white">{COMPANY_META[selectedStock].name}</span> par rapport aux livrets d&apos;épargne ordinaires de la banque.
                </p>
              </div>
            </div>

          </div>

          {/* Right panel: SVG interactive graph (Span 7) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-6 sm:p-8 shadow-sm space-y-8">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <h3 className="font-sans text-base font-bold text-swiss-navy">
                  Évolution comparative sur 5 ans
                </h3>
                <p className="font-sans text-xs text-slate-400">
                  Performance basée sur un versement initial unique en 2020.
                </p>
              </div>

              {/* Badges legend */}
              <div className="flex items-center gap-3 font-sans text-xs flex-wrap">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-4 bg-swiss-blue inline-block"></span>
                  <span className="text-slate-600 font-medium">{COMPANY_META[selectedStock].name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-4 bg-[#f97316] inline-block"></span>
                  <span className="text-slate-600 font-medium">Épargne Classique</span>
                </div>
              </div>
            </div>

            {/* Standard SVG Draw */}
            <div className="relative overflow-visible">
              <svg
                viewBox="0 0 600 300"
                className="w-full h-auto overflow-visible"
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Horizontal gridlines */}
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

                {/* X Axis vertical lines corresponding to years */}
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

                {/* Gradient areas */}
                <defs>
                  <linearGradient id="selectedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e40af" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#1e40af" stopOpacity="0.00" />
                  </linearGradient>
                  <linearGradient id="epargneGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.00" />
                  </linearGradient>
                </defs>

                {/* Draw Areas */}
                <path d={getAreaSvgPath(stockPoints)} fill="url(#selectedGradient)" />
                <path d={getAreaSvgPath(epargnePoints)} fill="url(#epargneGradient)" />

                {/* Draw Lines */}
                <path
                  d={getSvgPath(stockPoints)}
                  fill="none"
                  stroke={COMPANY_META[selectedStock].color}
                  strokeWidth="2.5"
                />
                <path
                  d={getSvgPath(epargnePoints)}
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                />

                {/* Interactive Points / Hover columns */}
                {stockPoints.map((pt, i) => {
                  const isHovered = hoverIndex === i;
                  return (
                    <g key={i}>
                      {/* Invisible hover trigger box */}
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
                            strokeWidth="1"
                          />
                          {/* Selected Stock dot */}
                          <circle cx={pt.x} cy={pt.y} r="5" fill={COMPANY_META[selectedStock].color} />
                          {/* Epargne dot */}
                          <circle cx={epargnePoints[i].x} cy={epargnePoints[i].y} r="4" fill="#f97316" />
                        </g>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Absolute interactive floating tooltip card */}
              {hoverIndex !== null && (
                <div
                  className="absolute bg-swiss-navy text-white text-xs p-3 shadow-lg pointer-events-none font-sans space-y-1"
                  style={{
                    left: `${Math.min(
                      (hoverIndex / 5) * 85 + 5,
                      65
                    )}%`,
                    top: '-10px',
                  }}
                >
                  <p className="font-bold border-b border-white/10 pb-1 text-[10px]">Situation en {years[hoverIndex]}</p>
                  <div className="space-y-0.5 pt-1">
                    <p className="flex justify-between gap-6">
                      <span>{COMPANY_META[selectedStock].name}:</span>
                      <strong className="text-[#10b981] font-mono">{formatCHF(amount * stockData[hoverIndex])}</strong>
                    </p>
                    <p className="flex justify-between gap-6 text-slate-300">
                      <span>Épargne standard:</span>
                      <strong className="text-orange-400 font-mono">{formatCHF(amount * epargneData[hoverIndex])}</strong>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Calculated table summary underneath */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 font-sans">
              <div className="p-4 bg-slate-50">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                  Avoirs Pro & Capitalisés ({years[5]})
                </span>
                <p className="text-xl font-bold text-swiss-navy">
                  {formatCHF(finalStockVal)}
                </p>
                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5">
                  + {Math.round((stockData[5] - 1) * 100)}% de plus-value brute
                </span>
              </div>

              <div className="p-4 bg-slate-50">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
                  Épargne passive en banque ({years[5]})
                </span>
                <p className="text-xl font-bold text-slate-500">
                  {formatCHF(finalEpargneVal)}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-amber-600 font-bold bg-amber-50 px-2 py-0.5 w-fit">
                  <TrendingDown className="h-3 w-3 shrink-0" />
                  <span>Subit l&apos;inflation constante</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-slate-100 p-4 bg-blue-50/20 flex gap-3 text-xs sm:text-sm text-slate-600">
              <Info className="h-5 w-5 text-swiss-blue shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Analyse de la Place : </strong> Laisser dormir des capitaux en compte de dépôt ordinaire à taux fixe érode le pouvoir d’achat. À Genève, notre cabinet conseille d&apos;implémenter des sélections de titres souverains et de leaders sectoriels pour immuniser votre capital.
              </p>
            </div>

          </div>

        </div>

        {/* Footer Contact Redirection */}
        <div className="bg-slate-50 border border-slate-100 p-8 sm:p-12 text-center md:max-w-3xl md:mx-auto">
          <h3 className="font-display text-xl sm:text-2xl font-light text-swiss-navy mb-4">
            Demander une étude d&apos;allocation personnalisée
          </h3>
          <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto mb-8">
            Pour structurer un portefeuille résilient d’actifs financiers réglementés conformément à vos objectifs de trésorerie ou de patrimoine familial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex h-11 items-center justify-center bg-swiss-navy text-white px-8 font-sans text-xs font-bold uppercase tracking-widest hover:bg-swiss-blue transition-all"
            >
              Prendre contact en toute discrétion
            </Link>
            <Link
              href="/expertises"
              className="inline-flex h-11 items-center justify-center border border-slate-200 bg-white text-slate-700 px-6 font-sans text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all"
            >
              Voir nos Métiers
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
