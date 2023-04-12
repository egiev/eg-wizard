import * as CSS from 'csstype';

export enum THEME {
  default = '',
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export interface EgWizardConfig {
  theme?: THEME;
  progressBar?: {
    title?: {
      styles?: CSS.PropertiesHyphen;
      activeStyles?: CSS.PropertiesHyphen;
      hidden?: boolean;
    };
    description?: {
      styles?: CSS.PropertiesHyphen;
      activeStyles?: CSS.PropertiesHyphen;
      hidden?: boolean;
    };
    line?: {
      color?: RGB | RGBA | HEX;
      activeColor?: RGB | RGBA | HEX;
    };
    circle?: {
      color?: RGB | RGBA | HEX;
      activeColor?: RGB | RGBA | HEX;
    };
  };
}

export interface EgWizardStep {
  key: string;
  data?: any;
  options?: {
    progressBar?: {
      title?: string;
      description?: string;
      hidden?: boolean;
    };
  };
}

export interface EgWizardStepChanges {
  current: EgWizardStep;
  previous: EgWizardStep | null;
}

const CSSStyleObject: CSS.Properties = {
  display: 'flex',
  alignItems: '',
  color: '#fff',
};
