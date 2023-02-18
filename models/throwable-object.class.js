class ThrowableObject extends MovableObject {
    hitX;
    hitY;
    offset = {
        top: 15,
        left: 20,
        right: 15,
        bottom: 10,
    };
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
        this.height = 75;
        this.width = 70;
        this.throw();
        this.animation();
    }


    throw() {
        this.speedY = 30;
        this.applyGravity();
        let intervalId = setInterval(() => {
            if (this.y >= 480) {                            // wenn y-achse größer als 480
                clearInterval(intervalId);                  // stoppe das Interval
            }
            else {
                this.x += 10;
                this.hitX = this.x;
                this.hitY = this.y;
            }
        }, 25);
    };


    animation() {
        let shouldPlayRotation = true;

        setInterval(() => {
            if (world.endBossIsHit) {               // wenn der Endboss gehittet wurde UND die SplashAnimation nocht nicht abgespielt wurde
                this.playAnimations(this.IMAGES_SPLASHING);             // spiele die SplashAnimation
                shouldPlayRotation = false;                             // spiele die Rotation nicht mehr ab
            } else if (shouldPlayRotation) {                            // wenn die Rotate animation abspielen soll (= true)  
                this.playAnimations(this.IMAGES_ROTATING);              // spiele die Rotate Animation ab
            }
        }, 80);
    }
}