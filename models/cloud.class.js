class Cloud extends MovableObject {
    height = 300; 
    y = 30;       

    constructor(imagePath, x) {
        super().loadImage(imagePath)
        this.x = x + Math.random() * 400;
        this.width = 400;
        this.animate();
    }

    animate() {
        setInterval(() => this.moveLeft(), 1000 / 60)
    }
}

