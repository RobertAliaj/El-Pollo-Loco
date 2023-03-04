const idsToCheck = ['leftBtn', 'rightBtn', 'jumpBtn', 'throwBtn'];

const elements = {
    'leftBtn': 'LEFT',
    'rightBtn': 'RIGHT',
    'jumpBtn': 'SPACE',
    'throwBtn': 'D'
};

const keys = {
    37: 'LEFT',
    39: 'RIGHT',
    32: 'SPACE',
    68: 'D'
};


function setupControls() {
    handleTouchStart();
    handleTouchEnd();
    handleKeyDown();
    handleKeyUp();
}


function handleTouchStart() {
    window.addEventListener('touchstart', (e) => {
        if (idsToCheck.includes(e.target.id)) {
            const keyName = elements[e.target.id];
            if (keyName) {
                e.preventDefault(); // verhindert das Standardverhalten des touchstart-Ereignisses
                keyboard[keyName] = true;
            }
        }
    }, { passive: false });
}


function handleTouchEnd() {
    window.addEventListener('touchend', (e) => {
        if (idsToCheck.includes(e.target.id)) {
            const keyName = elements[e.target.id];
            if (keyName) {
                e.preventDefault(); // verhindert das Standardverhalten des touchstart-Ereignisses
                keyboard[keyName] = false;
            }
        }
    }, { passive: false });
}


function handleKeyDown() {
    window.addEventListener('keydown', (e) => {
        const keyName = keys[e.keyCode];
        if (keyName) {
            keyboard[keyName] = true;
        }
    });
}


function handleKeyUp() {
    window.addEventListener('keyup', (e) => {
        const keyName = keys[e.keyCode];
        if (keyName) {
            keyboard[keyName] = false;
        }
    });
}



// window.addEventListener('touchend', (e) => {
//     if (idsToCheck.includes(e.target.id)) {
//         switch (e.target.id) {
//             case 'leftBtn':
//                 e.preventDefault();
//                 keyboard.LEFT = false;
//                 break;
//             case 'rightBtn':
//                 e.preventDefault();
//                 keyboard.RIGHT = false;
//                 break;
//             case 'jumpBtn':
//                 e.preventDefault();
//                 keyboard.SPACE = false;
//                 break;
//             case 'throwBtn':
//                 e.preventDefault();
//                 keyboard.D = false;
//                 break;
//             default:
//                 break;
//         }
//     }
// }, { passive: false });


// window.addEventListener('touchstart', (e) => {
//     if (idsToCheck.includes(e.target.id)) {
//         switch (e.target.id) {
//             case 'leftBtn':
//                 e.preventDefault(); // verhindert das Standardverhalten des touchstart-Ereignisses
//                 keyboard.LEFT = true;
//                 break;
//             case 'rightBtn':
//                 e.preventDefault();
//                 keyboard.RIGHT = true;
//                 break;
//             case 'jumpBtn':
//                 e.preventDefault();
//                 keyboard.SPACE = true;
//                 break;
//             case 'throwBtn':
//                 e.preventDefault();
//                 keyboard.D = true;
//                 break;
//             default:
//                 break;
//         }
//     }
// }, { passive: false });


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