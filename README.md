# Visual Code Odoo Scaffold

[![Version](https://vsmarketplacebadge.apphb.com/version-short/mstuttgart.odoo-scaffold.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=mstuttgart.odoo-scaffold)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/mstuttgart.odoo-scaffold.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=mstuttgart.odoo-scaffold)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/mstuttgart.odoo-scaffold.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=mstuttgart.odoo-scaffold)

This extension run Odoo [scaffold](https://www.odoo.com/documentation/11.0/reference/cmdline.html#scaffolding) command 
and generate Odoo modules.

## Features

* Show in file explorer a menu to create Odoo module

![feature X](images/screenshot.png)

* Allow select path of new Odoo module

![feature X](images/screenshot2.png)

and name of new Odoo module

![feature X](images/screenshot_1.png)

## Requirements

This module dependes of [odoo-bin](https://github.com/odoo/odoo/blob/11.0/odoo-bin) executable in odoo core and work 
Odoo 10.0+ and need of Python Path configured.

## Installation

Launch *Quick Open*
  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+P`

Paste the following command and press `Enter`:

```
ext install mstuttgart.odoo-scaffold
```


## Extension Settings

By default the extension uses the configuration from [Python extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python).
To configure Python for your project see [Getting Started with Python in VS Code](https://code.visualstudio.com/docs/python/python-tutorial).

You need to set `odoo-bin` path of you project to made this extension works.

List of currently used properties:

Property                          | Description
----------------------------------|---------------------------------------------------------------
`odooScaffold.odooBinPath`        | Path to `odoo-bin` executable


## Release Notes

See [Changelog.md](CHANGELOG.md)

## Credits

Copyright (C) 2018 by Michell Stuttgart
