class Bottle extends MovableObject {
    width = 50;
    height = 50;
    offset = {
        top: 15,
        left: 20,
        right: 15,
        bottom: 5,
    };

    constructor(imagePath, x) {
        super().loadImage(imagePath)

        this.x = x + Math.random() * 300;

        this.y = 380;
    }
}