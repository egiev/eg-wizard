import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { generateStepChanges } from '../utils/eg-wizard.utils';
import {
  EgWizardStep,
  EgWizardStepChanges,
} from '../interfaces/eg-wizard.interface';

@Injectable({
  providedIn: 'root',
})
export class EgWizardStorageService {
  // Wizard steps
  private steps: EgWizardStep[] = [];

  // Track steps history
  private history: EgWizardStep[] = [];

  // Track current step
  private currentStep$: BehaviorSubject<EgWizardStep> = new BehaviorSubject(
    {} as EgWizardStep
  );

  private currentStepIndex$: BehaviorSubject<number> = new BehaviorSubject(0);

  private stepChanged$: BehaviorSubject<EgWizardStepChanges> =
    new BehaviorSubject({} as EgWizardStepChanges);

  constructor() {}

  next(data?: any): void {
    const currentStep = this.currentStep$.getValue();
    const nextIndex = this.steps.findIndex(
      (step) => step.key === currentStep.key
    );
    const nextStep = this.steps[nextIndex + 1];

    // Add data that will use on the next step
    if (data) {
      nextStep.data = data;
    }

    this.currentStep$.next(nextStep);
    this.currentStepIndex$.next(nextIndex + 1);
    this.history.push(nextStep);

    // Step change
    this.stepChanged$.next(generateStepChanges(this.history));
  }

  to(key: string, data?: any): void {
    const nextIndex = this.steps.findIndex((step) => step.key === key);
    const nextStep = this.steps[nextIndex];

    // Check if step exist
    if (nextIndex < 0) throw new Error(`${key} step doesn't exist.`);

    // Add data that will use on the next step
    if (data) nextStep.data = data;

    this.currentStep$.next(nextStep);
    this.currentStepIndex$.next(nextIndex);
    this.history.push(nextStep);

    // Step change
    this.stepChanged$.next(generateStepChanges(this.history));
  }

  back(): void {
    this.history.pop();

    const nextStep = this.history[this.history.length - 1];
    const nextIndex = this.steps.findIndex((step) => step.key === nextStep.key);

    this.currentStep$.next(nextStep);
    this.currentStepIndex$.next(nextIndex);

    // Step change
    this.stepChanged$.next(generateStepChanges(this.history));
  }

  setDefaultStep(defaultStep: EgWizardStep) {
    const index = this.steps.findIndex((step) => step.key === defaultStep.key);

    // Check if step exist
    if (index < 0) {
      throw new Error(`${defaultStep.key} step doesn't exist.`);
    }

    this.currentStep$.next(defaultStep);
    this.currentStepIndex$.next(index);
    this.history.push(defaultStep);

    // Step change
    this.stepChanged$.next(generateStepChanges(this.history));
  }

  get currentStep(): Observable<EgWizardStep> {
    return this.currentStep$.asObservable();
  }

  get getCurrentStepIndex(): Observable<number> {
    return this.currentStepIndex$.asObservable();
  }

  set getSteps(steps: EgWizardStep[]) {
    this.steps = steps;
  }

  get getSteps() {
    return this.steps;
  }

  get stepChanged(): Observable<EgWizardStepChanges> {
    return this.stepChanged$;
  }
}
