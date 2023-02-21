class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 45;
    speed = 0.5;
    startEndBoss = false;
    offset = {
        top: 105,
        left: 40,
        right: 40,
        bottom: 100,
    };

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];


    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALK);

        this.x = 2500;
        this.animate();

    }


    animate() {

        setInterval(() => {
            if (this.startEndBoss) {
                this.moveLeft();
            }
        }, 1000 / 200);


        setInterval(() => {
            // if (this.isDead()) {
            //     this.playAnimations(this.IMAGES_ALERT);
            // }

            if (this.startEndBoss) {
                this.playAnimations(this.IMAGES_WALK);
            }
            // this.playAnimations(this.IMAGES_ALERT);
        }, 200);
    }

}