import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { Observable } from 'rxjs';
import * as CSS from 'csstype';

import { EgWizardStorageService } from '../../../services/eg-wizard-storage.service';
import {
  EgWizardConfig,
  EgWizardStep,
} from '../../../interfaces/eg-wizard.interface';

@Component({
  selector: 'eg-wizard-progress-bar',
  templateUrl: './eg-wizard-progress-bar.component.html',
  styleUrls: ['./eg-wizard-progress-bar.component.css'],
})
export class EgWizardProgressBarComponent implements OnInit {
  @ViewChildren('item') items!: QueryList<ElementRef<any>>;

  @Input('config') config!: EgWizardConfig;

  steps!: EgWizardStep[];
  currentStepIndex!: Observable<number>;

  constructor(
    private egWizardStorageService: EgWizardStorageService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.currentStepIndex = this.egWizardStorageService.getCurrentStepIndex;
  }

  ngAfterContentInit(): void {
    this.steps = this.egWizardStorageService.getSteps;
  }

  ngAfterViewChecked(): void {
    if (this.config?.progressBar) {
      const {
        title: titleConfig,
        description: descriptionConfig,
        line: lineConfig,
        circle: circleConfig,
      } = this.config.progressBar;

      this.items.forEach((i) => {
        const el = i.nativeElement;
        const active = el.classList.contains('active');
        const title = el.querySelector('.title');
        const description = el.querySelector('.description');
        const circle = el.querySelector('.circle');
        const innerCircle = el.querySelector('.inner-circle');
        const line = el.querySelector('.line');

        const titleStyles = active
          ? titleConfig?.activeStyles
          : titleConfig?.styles;

        if (titleStyles) this.applyStyles(title, titleStyles);

        const descriptionStyles = active
          ? descriptionConfig?.activeStyles
          : descriptionConfig?.styles;

        if (descriptionStyles) this.applyStyles(description, descriptionStyles);

        this.renderer.setStyle(circle, 'background', lineConfig?.color);
        this.renderer.setStyle(
          innerCircle,
          'background',
          active ? circleConfig?.activeColor : circleConfig?.color
        );
        this.renderer.setStyle(
          line,
          'background',
          active ? lineConfig?.activeColor : lineConfig?.color
        );
      });
    }
  }

  private applyStyles(el: ElementRef, styles: CSS.PropertiesHyphen) {
    Object.entries(styles).forEach(([k, v]) => {
      this.renderer.setStyle(el, k, v);
    });
  }
}
