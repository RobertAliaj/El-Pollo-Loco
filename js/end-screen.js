function checkEndScreen() {
    setInterval(() => {
        if (youLose) {
            setTimeout(() => {
                clearAllIntervals();
                youLose = false;
                showLoserScreen();
            }, 2000);
        } else
            if (youWin) {
                setTimeout(() => {
                    clearAllIntervals();
                    youWin = false;
                    showWinnerScreen();
                }, 2000);
            }
    }, 100);
}


function restartGame() {
    document.getElementById('canvasDiv').classList.add('d-none')
    document.getElementById('endScreenLoose').classList.add('d-none');
    document.getElementById('endScreenWin').classList.add('d-none');
    document.getElementById('preloader').classList.remove('d-none');
    document.getElementById('pause').classList.remove('d-none');
    showMobileControls();
    clearAllAudios();
    theme_song.play();
    initLevel();
    init();
    checkEndScreen();
    gameIsPaused = true;
    removePreloader(2000);
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


function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}


function clearAllAudios() {
    theme_song.pause();
    theme_song.currentTime = 0;
}


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
