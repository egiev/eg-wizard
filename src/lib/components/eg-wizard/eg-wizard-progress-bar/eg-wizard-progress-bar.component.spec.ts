import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgWizardProgressBarComponent } from './eg-wizard-progress-bar.component';

describe('EgWizardProgressBarComponent', () => {
  let component: EgWizardProgressBarComponent;
  let fixture: ComponentFixture<EgWizardProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EgWizardProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EgWizardProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
