class SmallChicken extends MovableObject {
    width = 40;
    height = 40;
    y = 370;

    offset = {
        top: 2,
        left: 10,
        right: 10,
        bottom: 10,
    };
    kill_chicken = new Audio('audio/hit_chicken.mp3');

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    constructor(x) {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALKING);

        this.x = x;
        this.y = 300;
        this.speed = 0.3;
        this.animate();
    }


    animate() {
        this.applyGravity();
        let currentPosition = this.x;

        setInterval(() => {
            if (this.canMoveLeft())
                this.moveLeft()
        }, 1000 / 200);


        setInterval(() => {
            if ( this.canJump(currentPosition)) {
                this.smallChickenJump();
                currentPosition = this.x;
            }
        }, 25);


        setInterval(() => {
            if (!gameIsPaused && !world.character.isDead() && !world.endBoss.isDead()) {
                if (this.isDead()) {
                    this.playAnimations(this.IMAGES_DEAD);
                } else {
                    this.playAnimations(this.IMAGES_WALKING);
                }
            }
        }, 100);
    }


    canJump(currentPosition) {
        return !gameIsPaused && this.isAboveGround && this.x < currentPosition - 150 && this.x > currentPosition - 170;
    }

    canMoveLeft() {
        return !gameIsPaused && !this.isDead() && !world.character.isDead() && !world.endBoss.isDead();
    }

}