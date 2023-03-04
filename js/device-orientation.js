function handleOrientation() {
    handleOrientationPortrait();
    handleOrientationLandscape();
    checkOrientation();
}


function handleOrientationPortrait() {
    if (window.orientation !== undefined && window.orientation === 0) {
        document.getElementById('rotateDevice').classList.remove('d-none');
        document.getElementById('content').classList.add('d-none');
        document.getElementById('responsiveButtons').classList.remove('d-none');
    }
}


function handleOrientationLandscape() {
    if (window.orientation !== undefined && window.orientation === 90 || window.orientation !== undefined && window.orientation === -90) {
        document.getElementById('rotateDevice').classList.add('d-none');
        document.getElementById('content').classList.remove('d-none');
        document.getElementById('responsiveButtons').classList.remove('d-none');
    }
}


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