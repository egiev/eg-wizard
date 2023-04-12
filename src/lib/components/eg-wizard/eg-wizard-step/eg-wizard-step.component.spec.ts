import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgWizardStepComponent } from './eg-wizard-step.component';
import { EgWizardStepDirective } from '../../../directives/eg-wizard-step.directive';

@Component({
  template: `
    <eg-wizard-step [key]="key" [hidden]="hidden" [options]="options">
      <ng-template egWizardStep>Step content</ng-template>
    </eg-wizard-step>
  `,
})
class TestHostComponent {
  key = 'test';
  hidden = false;
  options = {
    progressBar: {
      title: 'Progress',
      description: 'Step 1 of 2',
      hidden: false,
    },
  };
}

describe('EgWizardStepComponent', () => {
  let component: EgWizardStepComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        EgWizardStepComponent,
        EgWizardStepDirective,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct inputs', () => {
    expect(component.key).toEqual('test');
    expect(component.hidden).toBeFalse();
    expect(component.options?.progressBar?.title).toEqual('Progress');
    expect(component.options?.progressBar?.description).toEqual('Step 1 of 2');
    expect(component.options?.progressBar?.hidden).toBeFalse();
  });
});
