import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { EgWizardStepDirective } from './eg-wizard-step.directive';

@Component({
  template: ` <ng-template egWizardStep></ng-template> `,
})
class TestComponent {
  @ViewChild(EgWizardStepDirective, { static: true })
  directive!: EgWizardStepDirective;
}

describe('EgWizardStepDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      declarations: [EgWizardStepDirective, TestComponent],
    });
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const directive = fixture.componentInstance.directive;
    expect(directive).toBeDefined();
    expect(directive.template).toBeDefined();
    expect(directive.template instanceof TemplateRef).toBeTrue();
  });
});
