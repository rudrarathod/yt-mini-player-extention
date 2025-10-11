# Release Notes - v0.5

## 🎉 YouTube Experience Enhancer v0.5

**Release Date:** October 11, 2024

We're excited to announce the v0.5 release of the YouTube Experience Enhancer extension! This release brings a powerful set of features to enhance your YouTube viewing experience with native-looking controls and advanced gesture interactions.

---

## ✨ Key Features

### 🎯 Core Player Controls
- **One-Click Miniplayer** — Instantly activate YouTube's miniplayer mode with a single click
- **Picture-in-Picture Mode** — Float videos in a dedicated window using the browser's native PiP API
- **Speed Changer** — Quick access button to cycle through playback speeds (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x)

### 🖱️ Advanced Gesture Controls
- **Brightness Control** — Scroll on the left edge (30%) of the video to adjust brightness
- **Volume Control** — Scroll on the right edge (30%) of the video to adjust volume
- **Volume Boost** — Uses Web Audio API for true volume amplification up to 200%
- **Safe Zone** — Center 40% of the video is gesture-free for normal scrolling
- **Visual Feedback** — On-screen overlay displays current brightness and volume percentage

### 🛠️ Settings & Customization
- **Live Popup Settings Panel** — Toggle features on/off without refreshing the page
- **Adjustable Gesture Sensitivity** — Fine-tune sensitivity from 1-20 (default: 5)
- **Gesture Area Overlay** — Optional visual overlay showing gesture zones (left: brightness, center: safe, right: volume)
- **Button Labels Toggle** — Show or hide text labels on custom buttons

### 🔍 Google Lens Integration
- **Frame Search** — Instantly capture the current video frame and search it with Google Lens
- **One-Click Access** — Dedicated button in the player controls for quick access

### 🎨 Design & Performance
- **Native Design** — All buttons styled to match YouTube's native player controls perfectly
- **Auto-Injection** — Automatically maintains buttons and controls across page navigation and DOM changes
- **Lightweight** — Minimal performance impact with efficient code
- **Keyboard Shortcut Compatible** — Works seamlessly with YouTube's native "i" shortcut for miniplayer

---

## 🌐 Browser Compatibility

This extension is built with **Manifest V3** and supports:

| Browser           | Supported       | Version      |
| ----------------- | --------------- | ------------ |
| 🟢 Google Chrome  | ✅ Yes          | v88+         |
| 🔵 Microsoft Edge | ✅ Yes          | v88+         |
| 🟠 Brave Browser  | ✅ Yes          | v1.20+       |
| 🟣 Opera          | ✅ Yes          | v74+         |
| 🔴 Firefox        | ⚠️ Coming Soon  | MV3 pending  |
| 🔵 Safari         | ⚠️ Coming Soon  | MV3 pending  |

> **Note**: All Chromium-based browsers with Manifest V3 support are compatible.

---

## 📦 Installation

### From Release Package
1. Download the release package from the [Releases page](https://github.com/rudrarathod/YT-Experience-Enhancer/releases/tag/v0.5)
2. Extract the ZIP file to a folder on your computer
3. Open your browser's extension page (e.g., `chrome://extensions/`)
4. Enable "Developer mode"
5. Click "Load unpacked"
6. Select the extracted folder

### From Source
1. Clone the repository: `git clone https://github.com/rudrarathod/YT-Experience-Enhancer.git`
2. Checkout the v0.5 tag: `git checkout v0.5`
3. Follow the same steps as above to load the extension

---

## 🔧 Usage

### Accessing Settings
1. Click the extension icon in your browser toolbar
2. The popup panel will open with all available options
3. Toggle features on/off as desired
4. Adjust gesture sensitivity using the slider
5. Changes apply immediately—no page refresh needed!

### Using Gesture Controls
1. Enable "Gesture Controls" in the popup settings
2. While playing a video:
   - **Scroll on the left 30% of the video** to adjust brightness
   - **Scroll on the right 30% of the video** to adjust volume
   - **Center 40% is safe** for normal scrolling
3. Optional: Enable "Show Gesture Area Overlay" to visualize zones

### Using Custom Buttons
- **Miniplayer Button**: Click the miniplayer icon in the player controls
- **Picture-in-Picture Button**: Click the PiP icon to float the video
- **Speed Changer**: Click to cycle through speed options (0.5x → 0.75x → 1x → 1.25x → 1.5x → 2x)
- **Google Lens Button**: Click to capture and search the current frame

---

## 🔐 Permissions

This extension requires the following permissions:
- `scripting` — To inject custom controls into YouTube pages
- `storage` — To save your preferences across sessions
- `host_permissions` for `https://www.youtube.com/*` — To function on YouTube

**Privacy**: No data is collected or transmitted. All settings are stored locally in your browser.

---

## 📁 Project Files

- **`manifest.json`** — Extension metadata and configuration (Manifest V3)
- **`content.js`** — Main content script with all feature logic (689 lines)
- **`popup.html`** — Modern popup UI for settings
- **`popup.js`** — Popup logic and chrome.storage sync
- **`README.md`** — Complete documentation

---

## 🐛 Known Issues

- Some gesture controls may require page refresh on first load
- Gesture overlay positioning may vary slightly across different YouTube layouts
- Volume boost above 100% may cause distortion on some audio tracks

---

## 🚀 What's Next

We're continuously improving the extension. Future versions may include:
- Additional playback speed options
- More gesture controls (seek, skip, etc.)
- Customizable keyboard shortcuts
- Dark/light theme options for the popup
- Firefox and Safari support

---

## 🤝 Contributing

Contributions are welcome! Please feel free to:
- Report bugs by opening an issue
- Suggest new features
- Submit pull requests

---

## 📄 License

This project is licensed under the MIT License. See the repository for details.

---

## 🙏 Acknowledgments

Thank you to all users who have tested and provided feedback on this extension!

---

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on [GitHub Issues](https://github.com/rudrarathod/YT-Experience-Enhancer/issues)
- Check the [README.md](README.md) for troubleshooting tips

---

**Enjoy your enhanced YouTube experience! 🎬✨**
