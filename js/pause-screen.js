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
    document.getElementById('pauseScreen').classList.add('d-none');
    document.getElementById('pause').classList.remove('d-none');
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
    document.getElementById('pause').classList.add('d-none');
    document.getElementById('pauseScreen').classList.remove('d-none');
    document.getElementById('responsiveButtons').classList.add('d-none');
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
    document.getElementById('pause').classList.remove('d-none');
    document.getElementById('pauseScreen').classList.add('d-none');
    document.getElementById('htpOnPause').classList.add('d-none');
}


function openPauseScreen() {
    document.getElementById('pauseScreen').classList.remove('d-none');
}

function showConsoleOnPauseScreen() {
    document.getElementById('htpOnPause').classList.remove('d-none');
    document.getElementById('pauseScreen').classList.add('d-none');
}


function exitConsoleOnPauseScreen() {
    document.getElementById('consoleScreen').classList.add('d-none');
    document.getElementById('pauseScreen').classList.remove('d-none');
}