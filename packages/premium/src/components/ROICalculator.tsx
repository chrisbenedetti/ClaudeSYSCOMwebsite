import { useROICalculator } from '@shared/hooks/useROICalculator';

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

export default function ROICalculator() {
  const { inputs, results, updateInput } = useROICalculator();

  return (
    <div className="bg-dark-800 border border-dark-700/40 p-8 md:p-12">
      <div className="text-center mb-12">
        <h3 className="font-heading text-3xl md:text-4xl text-cream-100 mb-3">
          Return on Investment
        </h3>
        <p className="text-cream-400 text-sm max-w-md mx-auto">
          Estimate the impact of automating your document processes with SYSCOM
          solutions.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300 mb-3">
            Daily Document Volume
          </label>
          <input
            type="range"
            min={500}
            max={50000}
            step={500}
            value={inputs.documentVolume}
            onChange={(e) =>
              updateInput('documentVolume', Number(e.target.value))
            }
            className="w-full accent-copper-500 h-[2px] bg-dark-600 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-copper-500"
          />
          <p className="font-heading text-2xl text-cream-100 mt-3">
            {formatNumber(inputs.documentVolume)}
          </p>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300 mb-3">
            Number of Users
          </label>
          <input
            type="range"
            min={1}
            max={100}
            step={1}
            value={inputs.numberOfUsers}
            onChange={(e) =>
              updateInput('numberOfUsers', Number(e.target.value))
            }
            className="w-full accent-copper-500 h-[2px] bg-dark-600 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-copper-500"
          />
          <p className="font-heading text-2xl text-cream-100 mt-3">
            {inputs.numberOfUsers}
          </p>
        </div>

        <div>
          <label className="block text-[10px] uppercase tracking-[0.2em] text-cream-300 mb-3">
            Avg. Processing Time (min)
          </label>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={inputs.processingTimeMinutes}
            onChange={(e) =>
              updateInput('processingTimeMinutes', Number(e.target.value))
            }
            className="w-full accent-copper-500 h-[2px] bg-dark-600 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-copper-500"
          />
          <p className="font-heading text-2xl text-cream-100 mt-3">
            {inputs.processingTimeMinutes} min
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-copper-500/20 mb-12" />

      {/* Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <p className="font-heading text-4xl md:text-5xl text-copper-500 transition-all duration-500">
            {formatNumber(results.timeSavedHours)}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400 mt-3">
            Hours Saved Annually
          </p>
        </div>

        <div className="text-center">
          <p className="font-heading text-4xl md:text-5xl text-copper-500 transition-all duration-500">
            {results.costReduction}%
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400 mt-3">
            Cost Reduction
          </p>
        </div>

        <div className="text-center">
          <p className="font-heading text-4xl md:text-5xl text-copper-500 transition-all duration-500">
            {results.efficiencyGain}%
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400 mt-3">
            Efficiency Gain
          </p>
        </div>

        <div className="text-center">
          <p className="font-heading text-4xl md:text-5xl text-copper-500 transition-all duration-500">
            {formatCurrency(results.annualSavings)}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-cream-400 mt-3">
            Annual Savings
          </p>
        </div>
      </div>
    </div>
  );
}
