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
    document.getElementById('content').classList.remove('d-none');
    document.getElementById('canvasDiv').classList.add('d-none')
    document.getElementById('endScreenLoose').classList.remove('d-none');
}


function showWinnerScreen() {
    document.getElementById('content').classList.remove('d-none');
    document.getElementById('canvasDiv').classList.add('d-none')
    document.getElementById('endScreenWin').classList.remove('d-none');
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
    removePreloader(2000);
}


function hideGameElements() {
    document.getElementById('canvasDiv').classList.add('d-none');
    document.getElementById('endScreenLoose').classList.add('d-none');
    document.getElementById('endScreenWin').classList.add('d-none');
}


function showLoadingElements() {
    document.getElementById('preloader').classList.remove('d-none');
    document.getElementById('pause').classList.remove('d-none');
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
    document.getElementById('content').classList.remove('d-none');
    document.getElementById('endScreenLoose').classList.add('d-none');
    document.getElementById('endScreenWin').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
    document.getElementById('canvasDiv').classList.add('d-none');
    document.getElementById('pauseScreen').classList.add('d-none');
    document.getElementById('pause').classList.remove('d-none');
    clearAllAudios();
    gamesstarted = false;
}
