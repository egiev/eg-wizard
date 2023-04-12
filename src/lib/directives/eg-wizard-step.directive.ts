import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[egWizardStep]',
})
export class EgWizardStepDirective {
  constructor(public template: TemplateRef<unknown>) {}
}
