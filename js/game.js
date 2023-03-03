let canvas;
let world;
let keyboard = new Keyboard();
let theme_song = new Audio('audio/theme-song.mp3');
let gameIsPaused = false;
let youLose = false;
let youWin = false;
let intervalsIds = [];


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


window.addEventListener("orientationchange", function () {
    if (window.orientation === 90 || window.orientation === -90) {
        document.getElementById("rotate-device").style.display = "none";
    } else {
        document.getElementById("rotate-device").style.display = "block";
    }
});









// function proofIfKeysTouchedResp() {
//     document.getElementById('leftBtn').addEventListener('touchstart', (e) => {
//         e.preventDefault();
//         console.log('clicked');
//         // keyboard.LEFT = true;
//     }, { passive: true });
// }


// window.addEventListener('keydown', (e) => {
//     if (e.keyCode == 37) {
//         keyboard.LEFT = true;
//     }

//     if (e.keyCode == 39) {
//         keyboard.RIGHT = true;
//     }

//     if (e.keyCode == 32) {
//         keyboard.SPACE = true;
//     }

//     if (e.keyCode == 68) {
//         keyboard.D = true;
//     }
// });


// window.addEventListener('keyup', (e) => {
//     if (e.keyCode == 37) {
//         keyboard.LEFT = false;
//     }

//     if (e.keyCode == 39) {
//         keyboard.RIGHT = false;
//     }

//     if (e.keyCode == 32) {
//         keyboard.SPACE = false;
//     }

//     if (e.keyCode == 68) {
//         keyboard.D = false;
//     }
// });