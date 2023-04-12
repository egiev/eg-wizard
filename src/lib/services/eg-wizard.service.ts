import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EgWizardStorageService } from './eg-wizard-storage.service';
import { EgWizardStepChanges } from '../interfaces/eg-wizard.interface';

@Injectable({
  providedIn: 'root',
})
export class EgWizardService {
  constructor(private egWizardStorageService: EgWizardStorageService) {}

  next(data?: any): void {
    this.egWizardStorageService.next(data);
  }

  to(key: string, data?: any): void {
    this.egWizardStorageService.to(key, data);
  }

  back(): void {
    this.egWizardStorageService.back();
  }

  stepChanged(): Observable<EgWizardStepChanges> {
    return this.egWizardStorageService.stepChanged;
  }
}
