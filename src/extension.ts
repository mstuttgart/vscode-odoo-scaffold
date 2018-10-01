'use strict';

import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.odooScaffold', (fileObj) => {

        // Get base path
        let basePath = fileObj.path;

        // Paths list
        const folders = [];

        // Odoo module folders
        const moduleFolder = path.join(basePath, 'new_module');
        const modelsFolder = path.join(moduleFolder, 'models');
        const testsFolder = path.join(moduleFolder, 'tests');
        const viewsFolder = path.join(moduleFolder, 'views');
        const staticFolder = path.join(moduleFolder, 'static');

        folders.push(moduleFolder);
        folders.push(modelsFolder);
        folders.push(testsFolder);
        folders.push(viewsFolder);
        folders.push(staticFolder);

        // Create folders
        for (const folder of folders) {
            fs.mkdirSync(folder);
        }

        // Files list
        const files = [];

        // Set the path of files
        const moduleManifestFile = path.join(moduleFolder, '__manifest__.py');
        const moduleInitFile = path.join(moduleFolder, '__init__.py');

        const modelsInitFile = path.join(modelsFolder, '__init__.py');
        const modelsModelFile = path.join(modelsFolder, 'model.py');

        const testsInitFile = path.join(testsFolder, '__init__.py');
        const testsModelFile = path.join(testsFolder, 'test_model.py');

        const viewsModelFile = path.join(viewsFolder, 'model.xml');
        const staticIndexFile = path.join(staticFolder, 'index.html');

        files.push(moduleManifestFile);
        files.push(moduleInitFile);

        files.push(modelsInitFile);
        files.push(modelsModelFile);

        files.push(testsInitFile);
        files.push(testsModelFile);

        files.push(viewsModelFile);
        files.push(staticIndexFile);

        // Create the Odoo module files
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