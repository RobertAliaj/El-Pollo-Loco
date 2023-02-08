class Coin extends MovableObject {
    height = 100;
    width = 100;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x + Math.random() * 300;
        this.y = 350 - Math.random() * 300;
    }
}