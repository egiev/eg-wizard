import { NgModule } from '@angular/core';

import { EgWizardComponent } from './components/eg-wizard/eg-wizard.component';
import { EgWizardStepDirective } from './directives/eg-wizard-step.directive';
import { EgWizardStepComponent } from './components/eg-wizard/eg-wizard-step/eg-wizard-step.component';
import { EgWizardProgressBarComponent } from './components/eg-wizard/eg-wizard-progress-bar/eg-wizard-progress-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EgWizardComponent,
    EgWizardStepComponent,
    EgWizardProgressBarComponent,
    EgWizardStepDirective,
  ],
  imports: [CommonModule],
  exports: [EgWizardComponent, EgWizardStepComponent, EgWizardStepDirective],
})
export class EgWizardModule {}
