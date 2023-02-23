class Chicken extends MovableObject {

    height = 45;
    width = 45;
    y = 365;
    offset = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
    };

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.DEAD);
        this.x = x + Math.random() * 0.5;
        this.speed = 0.15 + Math.random() * 0.25
        this.animate();
    }


    animate() {
        setInterval(() => this.moveLeft(), 1000 / 200);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimations(this.DEAD);
            } else {
                this.playAnimations(this.IMAGES_WALKING);
            }
        }, 100);
    }

}