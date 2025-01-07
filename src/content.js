function scanPhotos() {
    const images = document.querySelectorAll("img");
    console.log(images)

    for (let image of images) {
        const imageHasAltTag = image.hasAttribute('alt');
        const imageAltTagIsEmptyString = image.hasAttribute('alt') && image.alt === "";
        const isAriaHidden = image.ariaHidden ?? false;
        if (!imageHasAltTag || !imageAltTagIsEmptyString || !isAriaHidden) {

            image.alt = 'Test Alt Text'
        }
    }
}
scanPhotos()