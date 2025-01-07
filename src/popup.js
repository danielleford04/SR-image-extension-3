const generateAltTagButton = document.body.querySelector('#generate-alt-tags-button');

generateAltTagButton.addEventListener('click', async () => {
    chrome.runtime.sendMessage({action: 'injectContentScript'})
});