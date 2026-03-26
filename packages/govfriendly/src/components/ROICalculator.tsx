import { useROICalculator } from '@shared/hooks/useROICalculator';
import { CheckCircle } from 'lucide-react';

export default function ROICalculator() {
  const { inputs, results, updateInput } = useROICalculator();

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-gov-navy px-6 py-4">
        <h3 className="font-heading font-bold text-xl text-white">
          Automation ROI Calculator
        </h3>
        <p className="text-gray-300 text-sm mt-1">
          Estimate the impact of automating your document processes.
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-gov-navy text-lg">
              Your Current Operations
            </h4>

            {/* Document Volume */}
            <div>
              <label
                htmlFor="roi-doc-volume"
                className="block text-sm font-medium text-gov-gray-dark mb-1"
              >
                Daily Document Volume
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="roi-doc-volume"
                  type="range"
                  min={500}
                  max={50000}
                  step={500}
                  value={inputs.documentVolume}
                  onChange={(e) => updateInput('documentVolume', Number(e.target.value))}
                  className="flex-1 h-2 bg-gov-gray rounded-lg appearance-none cursor-pointer accent-gov-navy"
                  aria-valuemin={500}
                  aria-valuemax={50000}
                  aria-valuenow={inputs.documentVolume}
                  aria-valuetext={`${inputs.documentVolume.toLocaleString()} documents per day`}
                />
                <output
                  htmlFor="roi-doc-volume"
                  className="w-20 text-right font-semibold text-gov-navy text-sm"
                >
                  {inputs.documentVolume.toLocaleString()}
                </output>
              </div>
              <p className="text-xs text-gray-500 mt-1">documents per day</p>
            </div>

            {/* Number of Users */}
            <div>
              <label
                htmlFor="roi-users"
                className="block text-sm font-medium text-gov-gray-dark mb-1"
              >
                Number of Users
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="roi-users"
                  type="range"
                  min={1}
                  max={100}
                  step={1}
                  value={inputs.numberOfUsers}
                  onChange={(e) => updateInput('numberOfUsers', Number(e.target.value))}
                  className="flex-1 h-2 bg-gov-gray rounded-lg appearance-none cursor-pointer accent-gov-navy"
                  aria-valuemin={1}
                  aria-valuemax={100}
                  aria-valuenow={inputs.numberOfUsers}
                  aria-valuetext={`${inputs.numberOfUsers} users`}
                />
                <output
                  htmlFor="roi-users"
                  className="w-20 text-right font-semibold text-gov-navy text-sm"
                >
                  {inputs.numberOfUsers}
                </output>
              </div>
              <p className="text-xs text-gray-500 mt-1">team members</p>
            </div>

            {/* Processing Time */}
            <div>
              <label
                htmlFor="roi-processing-time"
                className="block text-sm font-medium text-gov-gray-dark mb-1"
              >
                Avg. Processing Time per Document
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="roi-processing-time"
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={inputs.processingTimeMinutes}
                  onChange={(e) => updateInput('processingTimeMinutes', Number(e.target.value))}
                  className="flex-1 h-2 bg-gov-gray rounded-lg appearance-none cursor-pointer accent-gov-navy"
                  aria-valuemin={1}
                  aria-valuemax={30}
                  aria-valuenow={inputs.processingTimeMinutes}
                  aria-valuetext={`${inputs.processingTimeMinutes} minutes per document`}
                />
                <output
                  htmlFor="roi-processing-time"
                  className="w-20 text-right font-semibold text-gov-navy text-sm"
                >
                  {inputs.processingTimeMinutes} min
                </output>
              </div>
              <p className="text-xs text-gray-500 mt-1">minutes per document</p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-gov-navy text-lg">
              Projected Annual Impact
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gov-gray rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-700" aria-hidden="true" />
                  <span className="text-sm font-medium text-gov-gray-dark">Time Saved</span>
                </div>
                <p className="text-2xl font-bold text-gov-navy" aria-live="polite">
                  {results.timeSavedHours.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">hours per year</p>
              </div>

              <div className="bg-gov-gray rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-700" aria-hidden="true" />
                  <span className="text-sm font-medium text-gov-gray-dark">Annual Savings</span>
                </div>
                <p className="text-2xl font-bold text-gov-navy" aria-live="polite">
                  {formatCurrency(results.annualSavings)}
                </p>
                <p className="text-xs text-gray-500">estimated cost reduction</p>
              </div>

              <div className="bg-gov-gray rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-700" aria-hidden="true" />
                  <span className="text-sm font-medium text-gov-gray-dark">Cost Reduction</span>
                </div>
                <p className="text-2xl font-bold text-gov-navy" aria-live="polite">
                  {results.costReduction}%
                </p>
                <p className="text-xs text-gray-500">in processing costs</p>
              </div>

              <div className="bg-gov-gray rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-700" aria-hidden="true" />
                  <span className="text-sm font-medium text-gov-gray-dark">Efficiency Gain</span>
                </div>
                <p className="text-2xl font-bold text-gov-navy" aria-live="polite">
                  {results.efficiencyGain}%
                </p>
                <p className="text-xs text-gray-500">workflow improvement</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              Estimates based on industry averages for enterprise document processing automation.
              Actual results vary based on document complexity, integration requirements, and
              organizational factors. Contact us for a detailed assessment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
