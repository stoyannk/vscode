// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-sample" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');

		// Show also the current text editor to test getting a property
		const activeTextEditor = vscode.window.activeTextEditor;
		if (activeTextEditor) {
			const selection = activeTextEditor?.selection;
			if (selection) {
				vscode.window.showInformationMessage(selection.isEmpty ? "selection empty" : "selection not empty");
			}
		}

		vscode.env.openExternal(vscode.Uri.parse("http://google.com"));
	});

	context.subscriptions.push(disposable);
}
