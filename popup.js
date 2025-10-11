// Refresh button logic
const refreshBtn = document.getElementById('refresh-btn');
if (refreshBtn) {
  refreshBtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0] && tabs[0].id) {
        chrome.tabs.reload(tabs[0].id);
      }
    });
  });
}
// Save and restore feature preferences
const form = document.getElementById('features-form');
const status = document.getElementById('status');

const featureIds = [
  'feature-miniplayer',
  'feature-pip',
  'feature-gesture',
  'feature-speed',
  'feature-lens'
];
const SENSITIVITY_KEY = 'gesture-sensitivity';
const OVERLAY_KEY = 'show-gesture-overlay';
const BTN_LABELS_KEY = 'show-btn-labels';



// Load saved settings
chrome.storage.sync.get([...featureIds, SENSITIVITY_KEY, OVERLAY_KEY, BTN_LABELS_KEY], (result) => {
  featureIds.forEach(id => {
    document.getElementById(id).checked = result[id] !== false; // default ON
  });
  const slider = document.getElementById('gesture-sensitivity');
  const value = result[SENSITIVITY_KEY] || 5;
  slider.value = value;
  document.getElementById('gesture-sensitivity-value').textContent = value;
  const overlayBox = document.getElementById('show-gesture-overlay');
  overlayBox.checked = !!result[OVERLAY_KEY];
  const btnLabelsBox = document.getElementById('show-btn-labels');
  if (btnLabelsBox) btnLabelsBox.checked = !!result[BTN_LABELS_KEY];
});
// Save button labels toggle
const btnLabelsBox = document.getElementById('show-btn-labels');
if (btnLabelsBox) {
  btnLabelsBox.addEventListener('change', () => {
    chrome.storage.sync.set({ [BTN_LABELS_KEY]: btnLabelsBox.checked });
  });
}

// Save overlay toggle
const overlayBox = document.getElementById('show-gesture-overlay');
overlayBox.addEventListener('change', () => {
  chrome.storage.sync.set({ [OVERLAY_KEY]: overlayBox.checked });
});

// Save sensitivity on change
const slider = document.getElementById('gesture-sensitivity');
slider.addEventListener('input', () => {
  document.getElementById('gesture-sensitivity-value').textContent = slider.value;
  chrome.storage.sync.set({ [SENSITIVITY_KEY]: slider.value });
});

// Toggle All button logic
const toggleAllBtn = document.getElementById('toggle-all');
toggleAllBtn.addEventListener('click', () => {
  // If any are off, turn all on. If all on, turn all off.
  const allOn = featureIds.every(id => document.getElementById(id).checked);
  featureIds.forEach(id => {
    document.getElementById(id).checked = !allOn;
  });
  // Trigger save
  const settings = {};
  featureIds.forEach(id => {
    settings[id] = document.getElementById(id).checked;
  });
  chrome.storage.sync.set(settings, () => {
    status.textContent = allOn ? 'All features disabled' : 'All features enabled';
    setTimeout(() => status.textContent = '', 1000);
  });
});

// Save on change
form.addEventListener('change', (e) => {
  const settings = {};
  featureIds.forEach(id => {
    settings[id] = document.getElementById(id).checked;
  });
  chrome.storage.sync.set(settings, () => {
    status.textContent = 'Options saved!';
    setTimeout(() => status.textContent = '', 1000);
  });
});
