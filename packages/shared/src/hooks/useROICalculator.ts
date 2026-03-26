import { useState, useMemo } from 'react';
import type { ROIInputs, ROIResults } from '../types';

const AVERAGE_HOURLY_RATE = 45;
const AUTOMATION_TIME_REDUCTION = 0.42;
const COST_REDUCTION_FACTOR = 0.35;
const WORKING_DAYS_PER_YEAR = 250;

export function useROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    documentVolume: 5000,
    numberOfUsers: 10,
    processingTimeMinutes: 5,
  });

  const results = useMemo<ROIResults>(() => {
    const { documentVolume, numberOfUsers, processingTimeMinutes } = inputs;

    const currentDailyHours =
      (documentVolume * processingTimeMinutes) / 60;
    const timeSavedHoursDaily = currentDailyHours * AUTOMATION_TIME_REDUCTION;
    const timeSavedHoursAnnual = timeSavedHoursDaily * WORKING_DAYS_PER_YEAR;

    const currentAnnualCost =
      currentDailyHours * AVERAGE_HOURLY_RATE * WORKING_DAYS_PER_YEAR;
    const annualSavings = currentAnnualCost * COST_REDUCTION_FACTOR;

    const efficiencyGain =
      ((AUTOMATION_TIME_REDUCTION * 100) +
        (numberOfUsers > 20 ? 8 : numberOfUsers > 10 ? 5 : 0));

    return {
      timeSavedHours: Math.round(timeSavedHoursAnnual),
      costReduction: Math.round(COST_REDUCTION_FACTOR * 100),
      efficiencyGain: Math.round(Math.min(efficiencyGain, 65)),
      annualSavings: Math.round(annualSavings),
    };
  }, [inputs]);

  const updateInput = (field: keyof ROIInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return { inputs, results, updateInput };
}
