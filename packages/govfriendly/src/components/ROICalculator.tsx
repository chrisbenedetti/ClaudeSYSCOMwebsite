import { Link } from 'react-router-dom';
import { useROICalculator } from '@shared/hooks/useROICalculator';

export default function ROICalculator() {
  const { inputs, results, updateInput } = useROICalculator();

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <div id="roi" className="bg-white rounded-warm border border-warm-border shadow-sm overflow-hidden">
      <div className="px-8 py-6 border-b border-warm-border">
        <h3 className="font-heading text-2xl font-bold text-navy">
          Automation ROI Calculator
        </h3>
        <p className="text-muted text-sm mt-1">
          Estimate the impact of automating your document workflows.
        </p>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Inputs */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-navy text-lg">
              Your Current Operations
            </h4>

            {/* Documents */}
            <div>
              <label
                htmlFor="roi-documents"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Document Volume
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="roi-documents"
                  type="range"
                  min={50000}
                  max={5000000}
                  step={50000}
                  value={inputs.documents}
                  onChange={(e) => updateInput('documents', Number(e.target.value))}
                  className="flex-1 h-2 bg-warm-cream rounded-lg appearance-none cursor-pointer accent-navy"
                  aria-valuemin={50000}
                  aria-valuemax={5000000}
                  aria-valuenow={inputs.documents}
                  aria-valuetext={`${inputs.documents.toLocaleString()} documents`}
                />
                <output
                  htmlFor="roi-documents"
                  className="w-24 text-right font-semibold text-navy text-sm"
                >
                  {inputs.documents.toLocaleString()}
                </output>
              </div>
              <p className="text-xs text-muted mt-1">total documents managed</p>
            </div>

            {/* Weekly Hours */}
            <div>
              <label
                htmlFor="roi-hours"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Weekly Manual Hours
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="roi-hours"
                  type="range"
                  min={5}
                  max={200}
                  step={5}
                  value={inputs.manualHoursPerWeek}
                  onChange={(e) => updateInput('manualHoursPerWeek', Number(e.target.value))}
                  className="flex-1 h-2 bg-warm-cream rounded-lg appearance-none cursor-pointer accent-navy"
                  aria-valuemin={5}
                  aria-valuemax={200}
                  aria-valuenow={inputs.manualHoursPerWeek}
                  aria-valuetext={`${inputs.manualHoursPerWeek} hours per week`}
                />
                <output
                  htmlFor="roi-hours"
                  className="w-24 text-right font-semibold text-navy text-sm"
                >
                  {inputs.manualHoursPerWeek} hrs
                </output>
              </div>
              <p className="text-xs text-muted mt-1">hours spent on manual processing</p>
            </div>

            {/* Hourly Rate */}
            <div>
              <label
                htmlFor="roi-rate"
                className="block text-sm font-medium text-text mb-1.5"
              >
                Average Hourly Rate
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="roi-rate"
                  type="range"
                  min={30}
                  max={200}
                  step={5}
                  value={inputs.hourlyRate}
                  onChange={(e) => updateInput('hourlyRate', Number(e.target.value))}
                  className="flex-1 h-2 bg-warm-cream rounded-lg appearance-none cursor-pointer accent-navy"
                  aria-valuemin={30}
                  aria-valuemax={200}
                  aria-valuenow={inputs.hourlyRate}
                  aria-valuetext={`$${inputs.hourlyRate} per hour`}
                />
                <output
                  htmlFor="roi-rate"
                  className="w-24 text-right font-semibold text-navy text-sm"
                >
                  ${inputs.hourlyRate}/hr
                </output>
              </div>
              <p className="text-xs text-muted mt-1">fully loaded cost per hour</p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-5">
            <h4 className="font-heading font-semibold text-navy text-lg">
              Projected Annual Savings
            </h4>

            <div className="bg-warm-cream rounded-warm p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-text">Migration Automation (ASM)</span>
                <span className="font-semibold text-navy">{formatCurrency(results.asmSavings)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text">Content Intelligence (IBIG)</span>
                <span className="font-semibold text-navy">{formatCurrency(results.ibigSavings)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-text">Capture Automation</span>
                <span className="font-semibold text-navy">{formatCurrency(results.captureSavings)}</span>
              </div>
              <div className="border-t border-warm-border pt-4 flex justify-between items-center">
                <span className="font-heading font-bold text-navy">Total Annual Savings</span>
                <span className="font-heading text-2xl font-bold text-teal" aria-live="polite">
                  {formatCurrency(results.totalSavings)}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted">Estimated ROI</span>
                <span className="font-semibold text-teal">{results.roiPercent}%</span>
              </div>
            </div>

            <Link to="/contact" className="btn-primary w-full text-center">
              Schedule a Consultation
            </Link>

            <p className="text-xs text-muted leading-relaxed">
              Estimates based on industry averages for enterprise document processing.
              Actual results vary based on complexity and organizational factors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
