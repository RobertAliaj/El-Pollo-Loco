/**
 * This function is used to mute/unmute the Volume in game
 */
function changeVolume() {
    let img = document.getElementById('volume');
    if (img.src.includes('img/9_intro_outro_screens/start/volume-up-interface-symbol.png')) {
        img.src = 'img/9_intro_outro_screens/start/mute.png';
        muteSound();
    } else {
        img.src = 'img/9_intro_outro_screens/start/volume-up-interface-symbol.png';
        unmuteSound();
    }
}


function muteSound() {
    theme_song.muted = true;
}


function unmuteSound() {
    theme_song.muted = false;
}


function openFullScreen() {
    addClassList('pauseScreen', 'd-none');
    removeClassList('pause', 'd-none');
    let canvas = document.getElementById('canvas');
    resumeGame();
    enterFullscreen(canvas);
}


function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}


function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}


function pauseGame() {
    addClassList('pause', 'd-none');
    addClassList('responsiveButtons', 'd-none');
    removeClassList('pauseScreen', 'd-none');
    pause();
}


function pause() {
    gameIsPaused = true;
}


function resumeGame() {
    restoreVisibility();
    showMobileControls();
    gameIsPaused = false;
}


function restoreVisibility() {
    addClassList('pauseScreen', 'd-none');
    addClassList('htpOnPause', 'd-none');
    removeClassList('pause', 'd-none');
}


function openPauseScreen() {
    removeClassList('pauseScreen', 'd-none');
}

function showConsoleOnPauseScreen() {
    addClassList('pauseScreen', 'd-none');
    removeClassList('htpOnPause', 'd-none');
}


function exitConsoleOnPauseScreen() {
    addClassList('consoleScreen', 'd-none');
    removeClassList('pauseScreen', 'd-none');
}