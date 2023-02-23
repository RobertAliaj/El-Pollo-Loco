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


    constructor(x, y, otherDirection) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_ROTATING);
        this.loadImages(this.IMAGES_SPLASHING);
        this.otherDirection = otherDirection
        this.y = y;
        this.setXCordinate(x);
        this.height = 50;
        this.width = 50;
        this.throw();
        this.animation();
    }


    throw() {
        this.speedY = 20;
        this.applyGravity();

        setInterval(() => {
            this.throwLeftOrRight();
            this.bottleCollide();
        }, 25);

    };


    bottleCollide() {
        if (this.isSplashing())
            this.speedY = 1;
    }


    isSplashing() {
        return this.bottleIsOnGround() || this.enemyIsHit;
    }


    throwLeftOrRight() {
        if (this.canThrowRight())
            this.throwRight();
        if (this.canThrowLeft())
            this.throwLeft();
    }


    canThrowRight() {
        return this.bottleIsInAir() && !this.otherDirection;
    }


    throwRight() {
        this.x += 6;
    }


    canThrowLeft() {
        return this.bottleIsInAir() && this.otherDirection;
    }


    throwLeft() {
        this.x -= 6;
    }


    animation() {
        let shouldPlayRotation = true;
        setInterval(() => {
            if (this.shouldSplash()) {
                this.playAnimations(this.IMAGES_SPLASHING);
                shouldPlayRotation = false;
            } else if (shouldPlayRotation) {
                this.playAnimations(this.IMAGES_ROTATING);
            }
        }, 50);
    }


    shouldSplash(){
        return this.enemyIsHit || this.bottleIsOnGround();
    }

    
    bottleIsInAir() {
        return (this.y + this.height) - this.offset.bottom < 370;
    }


    bottleIsOnGround() {
        return (this.y + this.height) - this.offset.bottom > 440;
    }


    setXCordinate(x) {
        this.x = !this.otherDirection ? x : x - 60;
    }
}