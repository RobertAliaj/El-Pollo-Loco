/**
 * This function is used to start the Game and initialize all of the function needed to play
 */
function startGame() {
    addClassList('startScreen', 'd-none');
    removeClassList('preloader', 'd-none');
    initLevel();
    init();
    setupControls();
    showMobileControls();
    checkEndScreen();
    pause();
    removePreloader(10000);
    gamesstarted = true;
    theme_song.play();
}


/**
 * This function is used to remove the Loading screen after the given Time
 */
function removePreloader(time) {
    setTimeout(() => {
        addClassList('content', 'd-none');
        addClassList('preloader', 'd-none');
        removeClassList('canvasDiv', 'd-none');
        gameIsPaused = false;
    }, time);
}


function showConsoleOnStartScreen() {
    addClassList('startScreen', 'd-none');
    removeClassList('consoleScreen', 'd-none');
}


function exitConsoleScreen() {
    addClassList('consoleScreen', 'd-none');
    removeClassList('startScreen', 'd-none');
}


function showHistoryScreen() {
    addClassList('startScreen', 'd-none');
    removeClassList('historyScreen', 'd-none');
}


function exitHistoryScreen() {
    addClassList('historyScreen', 'd-none');
    removeClassList('startScreen', 'd-none');
}


function showInfoScreen() {
    addClassList('startScreen', 'd-none');
    removeClassList('infoScreen', 'd-none');
}


function exitInfoScreen() {
    addClassList('infoScreen', 'd-none');
    removeClassList('startScreen', 'd-none');
}

/**
 * This function is used to show the Mobile Control Panel only if you're not on Pc
 */
function showMobileControls() {
    if (window.orientation !== undefined) {
        removeClassList('responsiveButtons', 'd-none');
    }
}


function addClassList(id, style) {
    document.getElementById(id).classList.add(style);
}


function removeClassList(id, style) {
    document.getElementById(id).classList.remove(style);
}