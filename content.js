// Function to simulate "i" keydown
function simulateIKey() {
    const event = new KeyboardEvent('keydown', {
        key: 'i',
        code: 'KeyI',
        keyCode: 73,
        which: 73,
        bubbles: true,
        cancelable: true
    });
    document.dispatchEvent(event);
}

// Function to toggle picture-in-picture mode
function togglePictureInPicture() {
    const video = document.querySelector('video');
    if (!video) return;

    if (document.pictureInPictureElement) {
        document.exitPictureInPicture().catch(console.error);
    } else if (document.pictureInPictureEnabled) {
        video.requestPictureInPicture().catch(console.error);
    }
}

// Function to add click listener to a miniplayer button
function attachMiniplayerListener(button) {
    if (!button.__listenerAttached) { // prevent multiple listeners
        button.addEventListener('click', simulateIKey);
        button.style.display = 'inline-flex'; // ensure visible
        button.__listenerAttached = true;
    }
}

// Function to add click listener to a picture-in-picture button
function attachPipListener(button) {
    if (!button.__pipListenerAttached) { // prevent multiple listeners
        button.addEventListener('click', togglePictureInPicture);
        button.style.display = 'inline-flex'; // ensure visible
        button.__pipListenerAttached = true;
    }
}

// Function to ensure the picture-in-picture button exists and attach listener
function ensurePipButton() {
    let pipButton = document.querySelector('.custom-yt-pip-button');

    if (!pipButton) {
        // Create the PiP button if it doesn't exist
        pipButton = document.createElement('button');
        pipButton.className = 'custom-yt-pip-button ytp-button';
        pipButton.setAttribute('data-priority', '6');
        pipButton.setAttribute('title', 'Picture in Picture');
        pipButton.setAttribute('data-tooltip-title', 'Picture in Picture');
        pipButton.setAttribute('data-title-no-tooltip', 'Picture in Picture');
        pipButton.setAttribute('aria-label', 'Picture in Picture');
        pipButton.innerHTML = `
            <svg class="custom-yt-pip-button-icon" height="100%" version="1.1" viewBox="0 0 36 36" width="100%" fill-opacity="1">
                <use class="ytp-svg-shadow" xlink:href="#custom-pip-id"></use>
                <path d="M23.6897 25.4348V14.4626C23.6897 13.6017 23.0069 12.913 22.1724 12.913H8.51724C7.68276 12.913 7 13.6017 7 14.4626V25.4348C7 26.2957 7.68276 27 8.51724 27H22.1724C23.0069 27 23.6897 26.2957 23.6897 25.4348Z" fill="#fff" id="custom-pip-id"/>
                <path d="M27.4828 9C28.3172 9 29 9.68906 29 10.5499V21.5217C29 22.3826 28.3172 23.087 27.4828 23.087H25V21.3158H27.24V10.8947H13.8276V12H12.3103V10.5499C12.3103 9.68906 12.9931 9 13.8276 9H27.4828Z" fill="#fff"/>
            </svg>
        `;

        // Find the best insertion point for the PiP button
        const rightControls = document.querySelector('.ytp-right-controls');
        const settingsButton = document.querySelector('.ytp-settings-button');
        const fullscreenButton = document.querySelector('.ytp-fullscreen-button');

        if (settingsButton && settingsButton.parentNode) {
            // Insert before the settings button
            settingsButton.parentNode.insertBefore(pipButton, settingsButton);
        } else if (fullscreenButton && fullscreenButton.parentNode) {
            // Insert before the fullscreen button as fallback
            fullscreenButton.parentNode.insertBefore(pipButton, fullscreenButton);
        } else if (rightControls) {
            // Insert at the beginning of right controls as last resort
            rightControls.insertBefore(pipButton, rightControls.firstChild);
        }
    }

    attachPipListener(pipButton);
}

// Function to ensure the button exists and attach listener
function ensureMiniplayerButton() {
    let button = document.querySelector('.ytp-miniplayer-button');

    if (!button) {
        // Create the button if it doesn't exist
        button = document.createElement('button');
        button.className = 'ytp-miniplayer-button ytp-button';
        button.setAttribute('title', 'Miniplayer');
        button.setAttribute('aria-keyshortcuts', 'i');
        button.setAttribute('data-priority', '7');
        button.setAttribute('data-tooltip-target-id', 'ytp-miniplayer-button');
        button.setAttribute('data-title-no-tooltip', 'Miniplayer');
        button.setAttribute('aria-label', 'Miniplayer keyboard shortcut i');
        button.setAttribute('data-tooltip-title', 'Miniplayer (i)');
        button.innerHTML = `
            <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
                <use class="ytp-svg-shadow" xlink:href="#ytp-id-20"></use>
                <path d="M25,17 L17,17 L17,23 L25,23 L25,17 L25,17 Z M29,25 L29,10.98 C29,9.88 28.1,9 27,9 L9,9 C7.9,9 7,9.88 7,10.98 L7,25 C7,26.1 7.9,27 9,27 L27,27 C28.1,27 29,26.1 29,25 L29,25 Z M27,25.02 L9,25.02 L9,10.97 L27,10.97 L27,25.02 L27,25.02 Z" fill="#fff" id="ytp-id-20"></path>
            </svg>
        `;

        const sizeButton = document.querySelector('.ytp-settings-button');
        if (sizeButton && sizeButton.parentNode) {
            sizeButton.parentNode.insertBefore(button, sizeButton.nextSibling);
        } else {
            // fallback: add to right controls if size button not found
            const container = document.querySelector('.ytp-right-controls');
            if (container) container.insertBefore(button, container.firstChild);
        }
    }

    attachMiniplayerListener(button);
}

// Initial check
ensurePipButton();
ensureMiniplayerButton();

function runMiniplayerSetup() {
    ensurePipButton();
    ensureMiniplayerButton();
}

runMiniplayerSetup();

// Listen for YouTube navigation events (single-page navigation)
window.addEventListener('yt-navigate-finish', runMiniplayerSetup);

// Observe DOM changes in case YouTube recreates the buttons
const observer = new MutationObserver(() => {
    const pipButton = document.querySelector('.custom-yt-pip-button');
    const miniButton = document.querySelector('.ytp-miniplayer-button');
    if (pipButton) attachPipListener(pipButton);
    if (miniButton) attachMiniplayerListener(miniButton);
});

// Start observing the whole document body for changes
observer.observe(document.body, { childList: true, subtree: true });
