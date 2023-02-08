class Bottle extends MovableObject {
    width = 50;
    height = 50;

    constructor(imagePath, x) {
        super().loadImage(imagePath)

        this.x = x + Math.random() * 300;

        this.y = 380;
    }
}