let canvas;
let world;
let keyboard = new Keyboard();
let theme_song = new Audio('audio/theme-song.mp3');
let gameIsPaused = false;
let youLose = false;
let youWin = false;
let gamesstarted = false;


/**
 * This function is used to initialize the Worldclass
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


