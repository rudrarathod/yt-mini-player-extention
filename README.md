# YouTube Miniplayer Button Injector

This Chrome extension adds a custom miniplayer button to YouTube, allowing users to quickly activate the miniplayer using a dedicated button or the "i" keyboard shortcut.

## Features
- Injects a miniplayer button into YouTube's video player controls.
- Clicking the button simulates pressing the "i" key, activating YouTube's miniplayer.
- Automatically re-injects the button on navigation or DOM changes.

## How It Works
- The extension uses a content script (`content.js`) to insert a button into the YouTube player controls.
- The button is styled and behaves like a native YouTube control.
- Listens for YouTube navigation events and DOM mutations to ensure the button is always present.

## Installation
1. Download Releases or clone this repository.
2. Go to `chrome://extensions/` in your browser.
3. Enable "Developer mode" (top right).
4. Click "Load unpacked" and select this folder.
5. Visit YouTube and look for the miniplayer button in the video controls.

## Files
- `manifest.json`: Extension manifest (Chrome Extension v3).
- `content.js`: Content script that injects and manages the miniplayer button.
- `README.md`: This documentation file.

## Permissions
- `scripting`: To inject scripts into YouTube pages.
- `host_permissions`: Only runs on YouTube (`https://www.youtube.com/*`).

## License
MIT

