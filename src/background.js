chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'injectContentScript') {
        // Note: if testing, make sure you do not open the popup inspector/console.
        // If so, Chrome will treat the popup console as the "active tab", rather than the Chrome tab
        // You can either open the popup inspector AFTER clicking the button to initiate this code,
        // or, if you open it before, make sure you click back into the active window twice.
        // You will know this is happening if you see nothing in your Chrome console, and get this error
        // in your Popup console: Error handling response: TypeError: Cannot read properties of undefined (reading 'id')
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                files: ['content.js']
            });
        });
    }
});