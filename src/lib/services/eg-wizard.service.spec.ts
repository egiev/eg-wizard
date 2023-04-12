import { TestBed } from '@angular/core/testing';

import { EgWizardService } from './eg-wizard.service';

describe('EgWizardService', () => {
  let service: EgWizardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EgWizardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
