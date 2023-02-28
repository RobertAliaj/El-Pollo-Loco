function checkEndScreen() {
    setInterval(() => {
        if (youLose) {
            clearAllIntervals();
            theme_song.pause();
            setTimeout(() => {
                youLose = false;
                showLoserScreen()
            }, 2000);
        } else if (youWin) {
            setTimeout(() => {
                youWin = false;
                showWinnerScreen()
            }, 2000);
        }
    }, 100);
}


function restartGame() {
    document.getElementById('canvasDiv').classList.remove('d-none')
    document.getElementById('endScreenLoose').classList.add('d-none');
    theme_song.play();
    initLevel();
    init();
    checkEndScreen();
}


function showLoserScreen() {
    document.getElementById('canvasDiv').classList.add('d-none')
    document.getElementById('endScreenLoose').classList.remove('d-none');
}


function showWinnerScreen() {
    document.getElementById('canvasDiv').classList.add('d-none')
    document.getElementById('endScreenWin').classList.remove('d-none');
}


function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
}