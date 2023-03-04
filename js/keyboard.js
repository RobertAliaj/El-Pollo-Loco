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
        const keyName = elements[e.target.id];
        if (keyName) {
            e.preventDefault();
            keyboard[keyName] = true;
        }
    }, { passive: false });
}


function handleTouchEnd() {
    window.addEventListener('touchend', (e) => {
        const keyName = elements[e.target.id];
        if (keyName) {
            e.preventDefault(); // verhindert das Standardverhalten des touchstart-Ereignisses
            keyboard[keyName] = false;
        }
    }, { passive: false });
}


function handleKeyDown() {
    window.addEventListener('keydown', (e) => {         // eine Taste wird gedrückt
        const keyName = keys[e.keyCode];                // keyName = keys an der Stelle von der Nummer die gedrückt wurde, z.B keys[37] 
        if (keyName) {                                  // wenn keys[37] true ist, also wenns existiert
            keyboard[keyName] = true;                   // dann ändere den Wert von keys[37] zu true . Also 37 ist der Key in einem Objekt und LEFT ist der Wert (true oder false)
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

