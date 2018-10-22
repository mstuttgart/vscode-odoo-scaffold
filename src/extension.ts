'use strict';

import * as vscode from 'vscode';
import * as path from 'path';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.odooScaffold', (fileObj) => {

        // Get project path
        const projectRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;

        // Get path where module will be created
        let relativePath = fileObj ? fileObj.path : projectRoot;

        // Get odoo-bin path from configuration
        const odooBinPath = vscode.workspace.getConfiguration('odooScaffold').get('odooBinPath');

        // Get Python enviromnent path
        const pythonPath = vscode.workspace.getConfiguration('python').get('pythonPath');

        // User Input to path of new module
        vscode.window.showInputBox({
            value: relativePath || '',
            prompt: 'Enter path of new Odoo module (/path/subpath/to/module)',
            validateInput: (value) => {
                if (value) {
                    return null;
                }
                return 'Please enter a valid path';
            }
        }).then((fullPath) => {

            if (fullPath === undefined) {
                vscode.window.showInformationMessage('Invalid path!');
                return;
            }

            // User Input to path od new module
            vscode.window.showInputBox({
                prompt: 'Enter name of new Odoo module',
                validateInput: (value) => {
                    if (value) {
                        return null;
                    }
                    return 'Please enter a valid name to module';
                }
            }).then((module_name) => {

                if (module_name === undefined) {
                    vscode.window.showInformationMessage('Invalid module name!');
                    return;
                }

                // Mount odoo-bin path
                var abs_odooBinPath = path.join(projectRoot, odooBinPath);

                // Run odoo scaffold command
                var { spawn } = require('child_process');
                var process = spawn(pythonPath, [abs_odooBinPath, 'scaffold', module_name, fullPath]);

                process.stdout.on('data', (data: string) => {
                    console.log(`stdout: ${data}`);
                    vscode.window.showInformationMessage('Something went wrong! Please report on GitHub');
                });

                process.stderr.on('data', (data: string) => {
                    console.log(`stderr: ${data}`);
                    vscode.window.showInformationMessage('Something went wrong! Please report on GitHub');
                });

                process.on('close', (code: string) => {
                    console.log(`child process exited with code ${code}`);
                    vscode.window.showInformationMessage('New Odoo module create successfully!');
                });

            });

        });

    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}