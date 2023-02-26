let canvas;
let world;
let keyboard = new Keyboard();
let theme_song = new Audio('audio/themeSong.mp3');


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    // theme_song.play();
}


window.addEventListener('keydown', (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});


window.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});



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



// function changeMinMaxIcon() {
//     let img = document.getElementById('fullScreen');
//     if (img.src.includes('img/9_intro_outro_screens/start/full-screen.png')) {
//         img.src = 'img/9_intro_outro_screens/start/minimize.png';
//     } else {
//         img.src = 'img/9_intro_outro_screens/start/full-screen.png';
//         // exitFullscreen();
//     }
// }



function startGame() {
    document.getElementById('canvas').classList.remove('d-none')
    document.getElementById('startScreen').classList.add('d-none')
    theme_song.volume -= 0.90;
    theme_song.play();
    initLevel();
    init();
}


function muteSound() {
    theme_song.muted = true;
}


function unmuteSound() {
    theme_song.muted = false;
}


function showConsole() {
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


function openFullScreen() {
    let canvas = document.getElementById('canvas');
    enterFullscreen(canvas);
}


function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
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

