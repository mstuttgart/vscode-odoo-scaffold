'use strict';

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.generateOdooModule', (fileObj) => {

        // Get base path
        let basePath = fileObj.path;

        const paths = [];

        const moduleFolder = path.join(basePath, 'new_module');
        const modelsFolder = path.join(moduleFolder, 'models');
        const testsFolder = path.join(moduleFolder, 'tests');
        const viewsFolder = path.join(moduleFolder, 'views');
        const staticFolder = path.join(moduleFolder, 'static');

        paths.push(moduleFolder);
        paths.push(modelsFolder);
        paths.push(testsFolder);
        paths.push(viewsFolder);
        paths.push(staticFolder);

        for (const p of paths) {
            fs.mkdirSync(p);
        }

        const files = [];

        const module_manifest_file = path.join(moduleFolder, '__manifest__.py');
        const module_init_file = path.join(moduleFolder, '__init__.py');

        const models_init_file = path.join(modelsFolder, '__init__.py');
        const models_model_file = path.join(modelsFolder, 'model.py');

        const tests_init_file = path.join(testsFolder, '__init__.py');
        const tests_model_file = path.join(testsFolder, 'test_model.py');

        const views_model_file = path.join(viewsFolder, 'model.xml');
        const static_index_file = path.join(staticFolder, 'index.html');

        files.push(module_manifest_file);
        files.push(module_init_file);

        files.push(models_init_file);
        files.push(models_model_file);

        files.push(tests_init_file);
        files.push(tests_model_file);

        files.push(views_model_file);
        files.push(static_index_file);

        for (const f of files) {    
            if (!fs.existsSync(f)) {
                fs.closeSync(fs.openSync(f, 'w'));
            }
        }

        vscode.window.showInformationMessage('New Odoo module create successfully!');
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}