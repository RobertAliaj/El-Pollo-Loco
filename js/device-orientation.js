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
        document.getElementById('rotateDevice').classList.remove('d-none');
        document.getElementById('content').classList.add('d-none');
        document.getElementById('responsiveButtons').classList.remove('d-none');
    }
}


/**
 * This Function is used to handle the Landscape Orientation when initializing the Website
 */
function handleOrientationLandscape() {
    if (window.orientation !== undefined && window.orientation === 90 || window.orientation !== undefined && window.orientation === -90) {
        document.getElementById('rotateDevice').classList.add('d-none');
        document.getElementById('content').classList.remove('d-none');
        document.getElementById('responsiveButtons').classList.remove('d-none');
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
    document.getElementById("rotateDevice").classList.remove('d-none');
    document.getElementById('content').classList.add('d-none');
    document.getElementById('canvasDiv').classList.add('d-none');
}


function showGameCanvas() {
    document.getElementById("rotateDevice").classList.add('d-none');
    document.getElementById('canvasDiv').classList.remove('d-none');
}


function showGameContent() {
    document.getElementById("rotateDevice").classList.add('d-none');
    document.getElementById('content').classList.remove('d-none');
}