# eg-wizard

eg-wizard is a wizard component that can be use in Angular applications.

## Getting Started

To add the eg-wizard in your angular application, run the command:

`ng add eg-wizard`

The command above will add `EgWizardModule` in your `app.module.ts`.

## Usage

Use the eg-wizard component to define your wizard steps:

```
<eg-wizard>
  <eg-wizard-step
    key="step1"
    [options]="{ progressBar: { title: 'Step 1', description: 'Registration' } }"
  >
    <app-step1 *egWizardSection></app-step1>
  </eg-wizard-step>

  <eg-wizard-step
    key="step2"
    [options]="{ progressBar: { title: 'Step 2', description: 'OTP' } }"
  >
    <app-step2 *egWizardSection></app-step2>
  </eg-wizard-step>

  <eg-wizard-step
    key="step3"
    [options]="{
      progressBar: { title: 'Step 3', description: 'Complete' }
    }"
  >
    <app-step3 *egWizardSection></app-step3>
  </eg-wizard-step>
</eg-wizard>
```

> Note: Don't forget to add **\*egWizardSection** directive on your components.

To navigate the steps, use the EgWizardService service:

eg:

```
import { EgWizardService } from 'eg-wizard'

export class Step1Component implements OnInit, OnDestroy {
  constructor(private egWizardService: EgWizardService) {}

  ngOnInit(): void {}

  goNext(): void {
    // This will go to the next step
    this.egWizardService.next()
  }
}
```

```
<div>
  <h2>Step 1</h2>
  <button (click)="goNext()">Next</button>
</div>
```

If you want to override the eg-wizard default configuration, define a `config` object and pass it to the `eg-wizard` component:

```
const config: EgWizardConfig =  {
  progressBar: {
    description: {
      styles: {
        color: 'red',
      },
    },
  },
};
```

```
<eg-wizard [config]="config">
 ...
</eg-wizard>
```

The sample above will override the color of the description. Check [EgWizardConfig](#egwizardconfig-object) properties.

## EgWizard

Inputs

| Name        | Type                                                | Required | Description                                       |
| ----------- | --------------------------------------------------- | -------- | ------------------------------------------------- |
| config      | [EgWizardConfig](#egwizardconfig-object) (`object`) | no       | Allows overriding of the default configuration.   |
| defaultStep | `string`                                            | no       | Allows setting of the initial step of the wizard. |

### EgWizardStep

Inputs

| Name    | Type                                                            | Required | Description                   |
| ------- | --------------------------------------------------------------- | -------- | ----------------------------- |
| key     | `string`                                                        | yes      | Use to navigate in every step |
| options | [`EgWizardStepOptions`](#egwizardstepoptions-object) (`object`) | no       | Allow to configure step       |

### EgWizardService

| Method      | Type                                                   | Description                                                                                                                                                                         |
| ----------- | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| next        | `(data?: any) => void`                                 | go to the next step <br><br> If you pass a `data`, that `data` will be accessible on the `stepChanged` method                                                                       |
| back        | `() => void`                                           | go to the previous step                                                                                                                                                             |
| to          | `(key: string, data?: any) => void`                    | go to the specific step <br><br> `key` is required. `key` is the identifier on every step <br><br> If you pass a `data`, that `data` will be accessible on the `stepChanged` method |
| stepChanged | `() => Observable([StepChanges](#stepchanges-object))` | allow to subscribe on every step changes                                                                                                                                            |

#### `EgWizardConfig` object:

```
{
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
```

#### `EgWizardStepOptions` object:

```
{
  progressBar?: {
    title?: string; // Title of the step
    description?: string; // Description of the step
    hidden?: boolean; // Show/hide step on the progress bar
  };
}
```

#### `EgWizardStep` object:

```
{
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

```

#### `StepChanges` object:

```
{
  previous: EgWizardStep | null,
  current: EgWizardStep
}
```

## License

[MIT](https://github.com/egiev/eg-wizard/blob/main/LICENSE)
