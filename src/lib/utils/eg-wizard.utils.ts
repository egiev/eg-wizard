import { QueryList } from '@angular/core';

import { EgWizardStepComponent } from '../components/eg-wizard/eg-wizard-step/eg-wizard-step.component';
import {
  EgWizardStep,
  EgWizardStepChanges,
} from '../interfaces/eg-wizard.interface';

export const mergeConfig = <T>(target: T | any, source: T): T => {
  if (source) {
    return Object.entries(source).reduce(
      (acc, [key, value]) => {
        if (Object.keys(acc).includes(key) && typeof value === 'object') {
          acc[key] = mergeConfig(acc[key], value);
        } else {
          acc[key] = value;
        }

        return acc;
      },
      { ...target }
    );
  } else {
    return target;
  }
};

export const generateSteps = (
  steps: QueryList<EgWizardStepComponent>
): EgWizardStep[] => {
  return Array.from(steps).map((element) => ({
    key: element.key,
    options: element.options,
  }));
};

export const generateStepChanges = (
  history: EgWizardStep[]
): EgWizardStepChanges => {
  const lastIndex = history.length - 1;
  const previous = history[lastIndex - 1] || null;
  const current = history[lastIndex];

  return { previous, current };
};
