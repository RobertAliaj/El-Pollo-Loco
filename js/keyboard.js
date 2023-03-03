const idsToCheck = ['leftBtn', 'rightBtn', 'jumpBtn', 'throwBtn'];

window.addEventListener('touchstart', (e) => {
    if (idsToCheck.includes(e.target.id)) {
        switch (e.target.id) {
            case 'leftBtn':
                e.preventDefault(); // verhindert das Standardverhalten des touchstart-Ereignisses
                keyboard.LEFT = true;
                break;
            case 'rightBtn':
                e.preventDefault();
                keyboard.RIGHT = true;
                break;
            case 'jumpBtn':
                e.preventDefault();
                keyboard.SPACE = true;
                break;
            case 'throwBtn':
                e.preventDefault();
                keyboard.D = true;
                break;
            default:
                break;
        }
    }
}, { passive: false });


window.addEventListener('touchend', (e) => {
    if (idsToCheck.includes(e.target.id)) {
        switch (e.target.id) {
            case 'leftBtn':
                e.preventDefault();
                keyboard.LEFT = false;
                break;
            case 'rightBtn':
                e.preventDefault();
                keyboard.RIGHT = false;
                break;
            case 'jumpBtn':
                e.preventDefault();
                keyboard.SPACE = false;
                break;
            case 'throwBtn':
                e.preventDefault();
                keyboard.D = false;
                break;
            default:
                break;
        }
    }
}, { passive: false });
