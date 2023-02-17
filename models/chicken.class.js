class Chicken extends MovableObject {

    height = 60;
    width = 60;
    y = 360;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    world;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);

        this.x = 400 + Math.random() * 2100;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }
    
    
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 200); // 200 mal pro sekunde 
        
        setInterval(() => {
            this.playAnimations(this.IMAGES_WALKING);
        }, 100);
    }
    
}