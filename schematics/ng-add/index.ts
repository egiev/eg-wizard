import {
  Rule,
  Tree,
  SchematicContext,
  SchematicsException,
} from '@angular-devkit/schematics';
import { applyToUpdateRecorder } from '@schematics/angular/utility/change';
import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import * as ts from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Adding EgWizardModule to the app...');

    const appModulePath = '/src/app/app.module.ts';

    // Check if app.module.ts exist
    if (!tree.exists(appModulePath)) {
      throw new SchematicsException(
        `This module ${appModulePath} doesn't exist.`
      );
    }

    const text = tree.read(appModulePath);

    // Validate if text is valid
    if (text === null) {
      throw new SchematicsException(
        `This module ${appModulePath} doesn't exist.`
      );
    }

    // Create source file
    const source = ts.createSourceFile(
      appModulePath,
      text.toString('utf-8'),
      ts.ScriptTarget.ES2015,
      true
    );

    // Start updating app.module.ts
    const recorder = tree.beginUpdate(appModulePath);

    // Add EgModule to app.module.ts imports
    applyToUpdateRecorder(
      recorder,
      addImportToModule(source, appModulePath, 'EgWizardModule', 'eg-wizard')
    );

    // Save app.module.ts
    tree.commitUpdate(recorder);

    return tree;
  };
}
