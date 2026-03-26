import { useState, useEffect, useRef } from 'react';
import { useROICalculator } from '@shared/hooks/useROICalculator';
import { TrendingUp, Clock, DollarSign, Zap } from 'lucide-react';

function AnimatedCounter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const prevTarget = useRef(target);

  useEffect(() => {
    const start = prevTarget.current !== target ? current : 0;
    prevTarget.current = target;
    const duration = 800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(start + (target - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{current.toLocaleString()}{suffix}
    </span>
  );
}

function CircularProgress({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = Math.min((value / max) * 100, 100);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (pct / 100) * circumference;

  return (
    <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
      <circle cx="48" cy="48" r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
      <circle
        cx="48"
        cy="48"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        className="transition-all duration-700 ease-out"
      />
    </svg>
  );
}

export default function ROICalculator() {
  const { inputs, results, updateInput } = useROICalculator();

  const resultCards = [
    {
      icon: Clock,
      label: 'Time Saved',
      value: results.timeSavedHours,
      suffix: ' hrs/yr',
      prefix: '',
      color: '#0ea5e9',
      max: 100000,
    },
    {
      icon: TrendingUp,
      label: 'Cost Reduction',
      value: results.costReduction,
      suffix: '%',
      prefix: '',
      color: '#14b8a6',
      max: 100,
    },
    {
      icon: Zap,
      label: 'Efficiency Gain',
      value: results.efficiencyGain,
      suffix: '%',
      prefix: '',
      color: '#38bdf8',
      max: 100,
    },
    {
      icon: DollarSign,
      label: 'Annual Savings',
      value: results.annualSavings,
      suffix: '',
      prefix: '$',
      color: '#2dd4bf',
      max: 10000000,
    },
  ];

  return (
    <div className="rounded-2xl bg-navy-800/80 border border-white/5 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative z-10">
        <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-2">
          ROI <span className="gradient-text">Calculator</span>
        </h3>
        <p className="text-slate-400 text-sm mb-8 max-w-lg">
          See the impact of SYSCOM's automation solutions on your operations. Adjust the sliders to match your environment.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Inputs */}
          <div className="space-y-6">
            {/* Document Volume */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-300">Document Volume (daily)</label>
                <span className="text-sm font-semibold text-electric-400">
                  {inputs.documentVolume.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={inputs.documentVolume}
                onChange={(e) => updateInput('documentVolume', Number(e.target.value))}
                className="w-full h-2 bg-navy-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-electric-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-electric-500/40 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-electric-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1,000</span>
                <span>100,000</span>
              </div>
            </div>

            {/* Number of Users */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-300">Number of Users</label>
                <span className="text-sm font-semibold text-electric-400">{inputs.numberOfUsers}</span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                value={inputs.numberOfUsers}
                onChange={(e) => updateInput('numberOfUsers', Number(e.target.value))}
                className="w-full h-2 bg-navy-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-electric-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-electric-500/40 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-electric-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            {/* Processing Time */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-slate-300">Avg. Processing Time (min/doc)</label>
                <span className="text-sm font-semibold text-electric-400">
                  {inputs.processingTimeMinutes} min
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={inputs.processingTimeMinutes}
                onChange={(e) => updateInput('processingTimeMinutes', Number(e.target.value))}
                className="w-full h-2 bg-navy-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-electric-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-electric-500/40 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:bg-electric-500 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1 min</span>
                <span>30 min</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-2 gap-4">
            {resultCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.label}
                  className="relative rounded-xl bg-navy-900/60 border border-white/5 p-4 flex flex-col items-center text-center group"
                >
                  <div className="relative mb-2">
                    <CircularProgress value={card.value} max={card.max} color={card.color} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-5 h-5" style={{ color: card.color }} />
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl font-heading font-bold text-white">
                    <AnimatedCounter target={card.value} prefix={card.prefix} suffix={card.suffix} />
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">{card.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
