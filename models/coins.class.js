class Coin extends MovableObject {
    height = 100;
    width = 100;
    offset = {
        top: 35,
        left: 35,
        right: 35,
        bottom: 35,
    };

    collect_coin = new Audio('audio/audio_coin.mp3');

    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}