/**
 * This Function is used to check the Device Orientation when initializing the Website
 */
function handleOrientation() {
    handleOrientationPortrait();
    handleOrientationLandscape();
    checkOrientation();
}


/**
 * This Function is used to handle the Portrait Orientation when initializing the Website
 */
function handleOrientationPortrait() {
    if (window.orientation !== undefined && window.orientation === 0) {
        addClassList('content', 'd-none');
        removeClassList('rotateDevice', 'd-none');
        removeClassList('responsiveButtons', 'd-none');
    }
}


/**
 * This Function is used to handle the Landscape Orientation when initializing the Website
 */
function handleOrientationLandscape() {
    if (window.orientation !== undefined && window.orientation === 90 || window.orientation !== undefined && window.orientation === -90) {
        addClassList('rotateDevice', 'd-none');
        removeClassList('content', 'd-none');
        removeClassList('responsiveButtons', 'd-none');
    }
}


/**
 * This function is used to handle the Device Orientation when you change it
 */
function checkOrientation() {
    window.addEventListener("orientationchange", function () {
        if (window.orientation === 0) {
            showOrientationHint();
        }

        if ((window.orientation === 90 || window.orientation === -90) && gamesstarted) {
            showGameCanvas();
        }

        if ((window.orientation === 90 || window.orientation === -90) && !gamesstarted) {
            showGameContent();
        }
    });
}


function showOrientationHint() {
    addClassList('content', 'd-none');
    addClassList('canvasDiv', 'd-none');
    removeClassList('rotateDevice', 'd-none');
}


function showGameCanvas() {
    addClassList('rotateDevice', 'd-none');
    removeClassList('canvasDiv', 'd-none');
}


function showGameContent() {
    addClassList('rotateDevice', 'd-none');
    removeClassList('content', 'd-none');
}