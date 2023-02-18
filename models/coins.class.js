class Coin extends MovableObject {
    height = 100;
    width = 100;
    offset = {
        top: 35,
        left: 35,
        right: 35,
        bottom: 35,
    };

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = 500; 
        // x + Math.random() * 300;
        this.y = 200;
        // - Math.random() * 300;
    }
}