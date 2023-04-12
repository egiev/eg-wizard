import { EgWizardConfig, THEME } from '../interfaces/eg-wizard.interface';

export const EG_WIZARD_CONFIG: EgWizardConfig = {
  theme: THEME.default,
  progressBar: {
    title: {
      styles: {
        color: '#cccccc',
      },
      activeStyles: {
        color: '#0000ff',
      },
      hidden: false,
    },
    description: {
      styles: {
        color: '#cccccc',
      },
      activeStyles: {
        color: '#0000ff',
      },
      hidden: false,
    },
    line: {
      color: '#cccccc',
      activeColor: '#0000ff',
    },
    circle: {
      color: '#cccccc',
      activeColor: '#0000ff',
    },
  },
};
