import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgWizardComponent } from './eg-wizard.component';
import { EgWizardProgressBarComponent } from './eg-wizard-progress-bar/eg-wizard-progress-bar.component';
import { EgWizardStorageService } from '../../services/eg-wizard-storage.service';

describe('EgWizardComponent', () => {
  let component: EgWizardComponent;
  let fixture: ComponentFixture<EgWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EgWizardComponent, EgWizardProgressBarComponent],
      providers: [EgWizardStorageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
