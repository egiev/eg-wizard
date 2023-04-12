import { Component, ContentChild, Input } from '@angular/core';
import { EgWizardStepDirective } from '../../../directives/eg-wizard-step.directive';

@Component({
  selector: 'eg-wizard-step',
  templateUrl: './eg-wizard-step.component.html',
  styleUrls: ['./eg-wizard-step.component.css'],
})
export class EgWizardStepComponent {
  @ContentChild(EgWizardStepDirective) content!: EgWizardStepDirective;

  @Input() key!: string;

  @Input() hidden!: boolean;

  @Input() options?: {
    progressBar?: {
      title?: string;
      description?: string;
      hidden?: boolean;
    };
  };

  constructor() {}
}
