/**
 * This function is used to check when you lose/win and play the Endscreens
 */
function checkEndScreen() {
    setInterval(() => {
        showLoserScreenAfterDelay();
        showWinnerScreenAfterDelay();
    }, 100);
}


/**
 * This function is used to show the Loser End Screen
 */
function showLoserScreenAfterDelay() {
    if (youLose) {
        setTimeout(() => {
            clearAllIntervals();
            youLose = false;
            showLoserScreen();
        }, 2000);
    }
}


/**
 * This function is used to show the Winner End Screen
 */
function showWinnerScreenAfterDelay() {
    if (youWin) {
        setTimeout(() => {
            clearAllIntervals();
            youWin = false;
            showWinnerScreen();
        }, 2000);
    }
}


function showLoserScreen() {
    addClassList('canvasDiv', 'd-none');
    removeClassList('content', 'd-none');
    removeClassList('endScreenLoose', 'd-none');
}


function showWinnerScreen() {
    addClassList('canvasDiv', 'd-none');
    removeClassList('content', 'd-none');
    removeClassList('endScreenWin', 'd-none');
}


/**
 * This function is used to restart the game if you click the restart button
 */
function restartGame() {
    clearAllIntervals();
    hideGameElements();
    showLoadingElements();
    showMobileControls();
    clearAllAudios();
    initLevel();
    init();
    checkEndScreen();
    pause();
    theme_song.play();
    removePreloader(5000);
}


function hideGameElements() {
    addClassList('canvasDiv', 'd-none');
    addClassList('endScreenLoose', 'd-none');
    addClassList('endScreenWin', 'd-none');
}


function showLoadingElements() {
    removeClassList('preloader', 'd-none');
    removeClassList('pause', 'd-none');
}


/**
 * This function is used to clear all Intervals
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


/**
 * This function is used to clear all Audios
 */
function clearAllAudios() {
    theme_song.pause();
    theme_song.currentTime = 0;
}


/**
 * This function is used to get you to the homescreen
 */
function showHomeScreen() {
    addClassList('endScreenLoose', 'd-none');
    addClassList('endScreenWin', 'd-none');
    addClassList('canvasDiv', 'd-none');
    addClassList('pauseScreen', 'd-none');

    removeClassList('content', 'd-none');
    removeClassList('startScreen', 'd-none');
    removeClassList('pause', 'd-none');

    clearAllAudios();
    gamesstarted = false;
}
