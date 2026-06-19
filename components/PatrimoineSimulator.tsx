'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Info, TrendingDown } from 'lucide-react';

// Historic multipliers (2020-2025) — rendements cumulés sur la période
const DATA_MULTIPLIERS = {
  nvidia: [1.0, 1.97, 3.9, 7.7, 15.19, 31.4],       // +3 040 %
  apple: [1.0, 1.3, 1.7, 2.22, 2.89, 3.8],          // +280 %
  microsoft: [1.0, 1.27, 1.62, 2.06, 2.62, 3.4],   // +240 %
  epargne: [1.0, 0.99, 0.98, 0.96, 0.95, 0.939],    // Inflation suisse +6,5 % (pouvoir d'achat)
};

const COMPANY_META = {
  nvidia: { name: 'Nvidia Corp (NVDA)', color: '#10b981', label: 'Tech & Intelligence Artificielle' },
  apple: { name: 'Apple Inc (AAPL)', color: '#3b82f6', label: 'Écosystème Global & Services Mobile' },
  microsoft: { name: 'Microsoft Corp (MSFT)', color: '#6366f1', label: 'Infrastructure Cloud & IA' },
  epargne: { name: 'Inflation suisse', color: '#f97316', label: 'Indice des prix à la consommation (+6,5 %)' },
};

export default function PatrimoineSimulator() {
  const [amount, setAmount] = React.useState<number>(100000);
  const [selectedStock, setSelectedStock] = React.useState<'nvidia' | 'apple' | 'microsoft'>('nvidia');
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

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

  // Dynamic visual scale factor — légèrement accentué pour la lisibilité des pentes
  const visualScaleFactor = (0.15 + 0.85 * (amount / 2000000)) * 1.25;

  const getPoints = (multipliers: number[]) => {
    return multipliers.map((val, idx) => {
      const x = pad + (idx / 5) * graphWidth;

      const yStart = pad + graphHeight * 0.75;

      let y = yStart;
      if (val >= 1.0) {
        const normalizedGrowth = (val - 1.0) / Math.max(0.1, maxValOfStock - 1.0);
        const growthHeight = yStart - pad;
        y = yStart - normalizedGrowth * growthHeight * visualScaleFactor;
      } else {
        const normalizedLoss = (1.0 - val) / 0.30;
        const lossHeight = (pad + graphHeight) - yStart;
        y = yStart + normalizedLoss * lossHeight * visualScaleFactor;
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
              <span className="text-slate-600 font-bold uppercase">Inflation suisse</span>
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
            + {Math.round((stockData[5] - 1) * 100)}% de plus-value
          </span>
        </div>

        <div className="p-4 bg-slate-50">
          <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-1">
            Pouvoir d&apos;achat ({years[5]})
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

  return (
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
              onChange={(e) => setSelectedStock(e.target.value as 'nvidia' | 'apple' | 'microsoft')}
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
  );
}
