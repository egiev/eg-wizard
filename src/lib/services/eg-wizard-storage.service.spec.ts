import { TestBed } from '@angular/core/testing';

import { EgWizardStorageService } from './eg-wizard-storage.service';

describe('EgWizardStorageService', () => {
  let service: EgWizardStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EgWizardStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
