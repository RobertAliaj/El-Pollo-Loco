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


/**
 * This function is used to initialize the ControlPanel
 */
function setupControls() {
    handleTouchStart();
    handleTouchEnd();
    handleKeyDown();
    handleKeyUp();
}


/**
 * This function is used to handle the Touchstart
 */
function handleTouchStart() {
    window.addEventListener('touchstart', (e) => {
        const keyName = elements[e.target.id];
        if (keyName) {
            e.preventDefault();
            keyboard[keyName] = true;
        }
    }, { passive: false });
}


/**
 * This function is used to handle the Touchend
 */
function handleTouchEnd() {
    window.addEventListener('touchend', (e) => {
        const keyName = elements[e.target.id];
        if (keyName) {
            e.preventDefault();
            keyboard[keyName] = false;
        }
    }, { passive: false });
}


/**
 * This function is used to handle the pressed Keys 
 */
function handleKeyDown() {
    window.addEventListener('keydown', (e) => {
        const keyName = keys[e.keyCode];
        if (keyName) {
            keyboard[keyName] = true;
        }
    });
}


/**
 * This function is used to handle the released keys
 */
function handleKeyUp() {
    window.addEventListener('keyup', (e) => {
        const keyName = keys[e.keyCode];
        if (keyName) {
            keyboard[keyName] = false;
        }
    });
}

