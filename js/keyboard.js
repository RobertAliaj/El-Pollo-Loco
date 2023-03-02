window.addEventListener('touchstart', (e) => {
    if (e.target.id == 'leftBtn') {
        e.preventDefault();
        console.log('clicked');
        keyboard.LEFT = true;
    }
}, { passive: true });