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
            e.preventDefault();
            keyboard[keyName] = false;
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

