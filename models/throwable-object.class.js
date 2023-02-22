class ThrowableObject extends MovableObject {
    offset = {
        top: 15,
        left: 20,
        right: 15,
        bottom: 10,
    };
    enemyIsHit = false;
    acceleration = 1.5;

    IMAGES_ROTATING = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    IMAGES_SPLASHING = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];


    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_ROTATING);
        this.loadImages(this.IMAGES_SPLASHING);
        this.x = x;
        this.y = y;
        this.height = 65;
        this.width = 60;
        this.throw();
        this.animation();
    }


    throw() {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {

            if (this.bottleIsInAir()) {
                this.x += 4;
            }

            if (this.bottleIsOnGround()) {
                this.speedY = 1;
            }

            if (this.enemyIsHit) {
                this.speedY = 1;
            }
        }, 25);
    };


    animation() {
        let shouldPlayRotation = true;
        setInterval(() => {
            if (this.enemyIsHit || this.bottleIsOnGround()) {
                this.playAnimations(this.IMAGES_SPLASHING);
                shouldPlayRotation = false;
            } else if (shouldPlayRotation) {
                this.playAnimations(this.IMAGES_ROTATING);
            }
        }, 50);
    }


    bottleIsInAir() {
        return (this.y + this.height) - this.offset.bottom < 370;
    }

    bottleIsOnGround() {
        return (this.y + this.height) - this.offset.bottom > 440;
    }
}