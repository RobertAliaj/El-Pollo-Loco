let canvas;
let world;
let keyboard = new Keyboard();
let theme_song = new Audio('audio/theme-song.mp3');
let gameIsPaused = false;
let youLose = false;
let youWin = false;
let intervalsIds = [];
let gamesstarted = false;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    setupControls();
}


function proofOrientation() {
    if (window.orientation !== undefined && window.orientation === 0) {             // wenn das Gerät eine Drehmöglichkeit hat UND gerade steht
        document.getElementById('rotateDevice').classList.remove('d-none');         // zeige das Hinweis 
        document.getElementById('content').classList.add('d-none');                 // verstecke das Content
        document.getElementById('responsiveButtons').classList.remove('d-none');
        checkOrientation();                                                         // Führe die Funktion aus
    }

    if (window.orientation !== undefined && window.orientation === 90 || window.orientation !== undefined && window.orientation === -90) { // wenn das Gerät eine Drehmöglichkeit hat UND das Gerät im sich im Landscapemodus befindet
        document.getElementById('rotateDevice').classList.add('d-none');            // verstecke das hinweis 
        document.getElementById('content').classList.remove('d-none');              // zeige das Content
        document.getElementById('responsiveButtons').classList.remove('d-none');
        checkOrientation();
    }
}


function checkOrientation() {
    window.addEventListener("orientationchange", function () {

        if (window.orientation === 0 || window.orientation === 0) {                // wenn das Gerät grade steht 
            document.getElementById("rotateDevice").classList.remove('d-none');   // zeige hinweis 
            document.getElementById('content').classList.add('d-none');            // verstecke content 
            document.getElementById('canvasDiv').classList.add('d-none');          // verstecke canvas
        }

        if (window.orientation === 90 && gamesstarted || window.orientation === -90 && gamesstarted) { // wenn das Gerät gedreht und das spiel Gestartet
            document.getElementById("rotateDevice").classList.add('d-none');                          // verstecke hinweis
            document.getElementById('canvasDiv').classList.remove('d-none');                           // zeige canvas
        }

        if (window.orientation === 90 && !gamesstarted || window.orientation === -90 && !gamesstarted) { // wenn das Gerät gedreht und das Spiel nicht gestartet 
            document.getElementById("rotateDevice").classList.add('d-none');                            // verstecke Hinweis 
            document.getElementById('content').classList.remove('d-none');                               // zeige content 
        }
    });
}

