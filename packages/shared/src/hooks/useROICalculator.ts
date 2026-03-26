import { useState, useMemo } from 'react';

export interface ROIInputs {
  documents: number;
  repositories: number;
  manualHoursPerWeek: number;
  hourlyRate: number;
}

export interface ROIResults {
  annualManualCost: number;
  asmSavings: number;
  ibigSavings: number;
  captureSavings: number;
  totalSavings: number;
  roiPercent: number;
}

export function useROICalculator() {
  const [inputs, setInputs] = useState<ROIInputs>({
    documents: 500000,
    repositories: 3,
    manualHoursPerWeek: 40,
    hourlyRate: 85,
  });

  const results = useMemo<ROIResults>(() => {
    const { documents, manualHoursPerWeek, hourlyRate } = inputs;

    const annualManualCost = manualHoursPerWeek * 52 * hourlyRate;
    const asmSavings = Math.round(annualManualCost * 0.65);
    const ibigSavings = Math.round(documents * 0.02);
    const captureSavings = Math.round(annualManualCost * 0.45);
    const totalSavings = asmSavings + ibigSavings + captureSavings;
    const roiPercent = Math.round((totalSavings / annualManualCost) * 100);

    return {
      annualManualCost,
      asmSavings,
      ibigSavings,
      captureSavings,
      totalSavings,
      roiPercent,
    };
  }, [inputs]);

  const updateInput = (field: keyof ROIInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  return { inputs, results, updateInput };
}
