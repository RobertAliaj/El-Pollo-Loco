let canvas;
let world;
let keyboard = new Keyboard(); // erstelle eine neue Instanz
let theme_song = new Audio('audio/themeSong.mp3');

/**
 * this function is used to create the World
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard); // erstelle eine neue Instanz und gebe beide Vrablen weiter
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
