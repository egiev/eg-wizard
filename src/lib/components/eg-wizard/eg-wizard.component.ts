import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
  Input,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { EgWizardStepComponent } from './eg-wizard-step/eg-wizard-step.component';
import { EgWizardStorageService } from '../../services/eg-wizard-storage.service';
import { generateSteps, mergeConfig } from '../../utils/eg-wizard.utils';
import { EG_WIZARD_CONFIG } from '../../constants/eg-wizard.constant';
import {
  EgWizardConfig,
  EgWizardStep,
} from '../../interfaces/eg-wizard.interface';

@Component({
  selector: 'eg-wizard',
  templateUrl: './eg-wizard.component.html',
  styleUrls: ['./eg-wizard.component.css'],
})
export class EgWizardComponent implements AfterContentInit {
  @ContentChildren(EgWizardStepComponent)
  steps!: QueryList<EgWizardStepComponent>;

  _egConfig!: EgWizardConfig;
  @Input('config')
  set egConfig(config: EgWizardConfig) {
    this._egConfig = config;
  }

  get egConfig() {
    return this._egConfig || {};
  }

  config!: EgWizardConfig;

  @Input() defaultStep?: string;

  private currentStepSubs!: Subscription;

  constructor(private egWizardStorageService: EgWizardStorageService) {}

  ngAfterContentInit(): void {
    // Set steps on storage=
    const steps: EgWizardStep[] = generateSteps(this.steps);
    this.egWizardStorageService.getSteps = steps;

    // Set default step
    this.setDefaultStep(steps);

    // Set config
    this.config = mergeConfig<EgWizardConfig>(EG_WIZARD_CONFIG, this._egConfig);

    // Initialize steps
    this.initSteps();
  }

  private initSteps() {
    this.currentStepSubs = this.egWizardStorageService.currentStep.subscribe(
      (currentStep) => {
        this.steps.forEach((step) => {
          step.hidden = step.key === currentStep.key ? false : true;
        });
      }
    );
  }

  private setDefaultStep(steps: EgWizardStep[]) {
    const [step] = steps;
    const defaultStep = this.defaultStep ? { key: this.defaultStep } : step;

    if (defaultStep) {
      this.egWizardStorageService.setDefaultStep(defaultStep);
    }
  }

  ngOnDestroy(): void {
    this.currentStepSubs.unsubscribe();
  }
}
