const idsToCheck = ['leftBtn', 'rightBtn', 'jumpBtn', 'throwBtn'];

window.addEventListener('touchstart', (e) => {
    if (idsToCheck.includes(e.target.id)) {
        switch (e.target.id) {
            case 'leftBtn':
                keyboard.LEFT = true;
                console.log('leftBtn touch');
                break;
            case 'rightBtn':
                keyboard.RIGHT = true;
                console.log('rightBtn touch');
                break;
            case 'jumpBtn':
                keyboard.SPACE = true;
                console.log('jump touch');
                break;
            case 'throwBtn':
                keyboard.D = true;
                console.log('throw touch');
                break;
            default:
                break;
        }
    }
});


window.addEventListener('touchend', (e) => {
    if (idsToCheck.includes(e.target.id)) {
        switch (e.target.id) {
            case 'leftBtn':
                keyboard.LEFT = false;
                console.log('leftBtn los');
                break;
            case 'rightBtn':
                keyboard.RIGHT = false;
                console.log('rightBtn los');
                break;
            case 'jumpBtn':
                keyboard.SPACE = false;
                console.log('jump los');
                break;
            case 'throwBtn':
                keyboard.D = false;
                console.log('throw los');
                break;
            default:
                break;
        }
    }
});
