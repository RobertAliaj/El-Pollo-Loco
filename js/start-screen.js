function startGame() {
    document.getElementById('startScreen').classList.add('d-none')
    document.getElementById('preloader').classList.remove('d-none');
    // theme_song.play();
    initLevel();
    init();
    checkEndScreen();
    showMobileControls();
    gameIsPaused = true;
    gamesstarted = true;
    removePreloader(2000);
}


function removePreloader(time) {
    setTimeout(() => {
        document.getElementById('content').classList.add('d-none');
        document.getElementById('preloader').classList.add('d-none');
        document.getElementById('canvasDiv').classList.remove('d-none')
        gameIsPaused = false;
    }, time);

}


function showConsoleOnStartScreen() {
    document.getElementById('consoleScreen').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
}


function exitConsoleScreen() {
    document.getElementById('consoleScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
}


function showHistoryScreen() {
    document.getElementById('historyScreen').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
}


function exitHistoryScreen() {
    document.getElementById('historyScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
}


function showInfoScreen() {
    document.getElementById('infoScreen').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
}


function exitInfoScreen() {
    document.getElementById('infoScreen').classList.add('d-none');
    document.getElementById('startScreen').classList.remove('d-none');
}


function showMobileControls(){
    if (window.orientation !== undefined) {
        document.getElementById('responsiveButtons').classList.remove('d-none');
    }
}