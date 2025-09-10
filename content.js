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

// Function to add click listener to a miniplayer button
function attachMiniplayerListener(button) {
    if (!button.__listenerAttached) { // prevent multiple listeners
        button.addEventListener('click', simulateIKey);
        button.style.display = 'inline-flex'; // ensure visible
        button.__listenerAttached = true;
    }
}

// Function to ensure the button exists and attach listener
function ensureMiniplayerButton() {
    let button = document.querySelector('.ytp-miniplayer-button');

    if (!button) {
        // Create the button if it doesn't exist
        button = document.createElement('button');
        button.className = 'ytp-miniplayer-button ytp-button';
        button.setAttribute('title', '');
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
ensureMiniplayerButton();

function runMiniplayerSetup() {
    ensureMiniplayerButton();
}

runMiniplayerSetup();

// Listen for YouTube navigation events (single-page navigation)
window.addEventListener('yt-navigate-finish', runMiniplayerSetup);

// Observe DOM changes in case YouTube recreates the button
const observer = new MutationObserver(() => {
    const button = document.querySelector('.ytp-miniplayer-button');
    if (button) attachMiniplayerListener(button);
});

// Start observing the whole document body for changes
observer.observe(document.body, { childList: true, subtree: true });
