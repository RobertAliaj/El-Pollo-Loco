class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 45;
    speed = 1;
    startEndBoss = false;
    offset = {
        top: 135,
        left: 40,
        right: 40,
        bottom: 100,
    };


    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];


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


    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];


    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];


    hasTurnedRight = false;



    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALK);

        this.x = 2500;
        this.animate();
        this.run();
    }


    run() {
        setInterval(() => {
            this.endBossTurnAround();
        }, 200);
    }

    animate() {

        setInterval(() => {

            if (this.hasTurnedRight) {
                this.moveRight();
                this.otherDirection = true;
            } else if (!this.hasTurnedRight && this.startEndBoss) {
                this.moveLeft();
                this.otherDirection = false;
                console.log(this.x);
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


    endBossTurnAround() {
        if (this.shouldTurnRight() && !this.hasTurnedRight) { // Pepe Weiter rechts is als endBoss
            this.hasTurnedRight = true;     // turn true

        } else if (this.hasTurnedRight && this.shouldTurnLeft()) {   // true und EndBoss weiter Rechts ist als Pepe
            this.hasTurnedRight = false;                               // False
        }
    }


    shouldTurnRight() {
        return (this.x + this.width + 30) < world.character.x;  // Pepe ist weiter Rechts als endBoss
    }


    shouldTurnLeft() {
        return (this.x - 30) > world.character.x + world.character.width; // EndBoss ist weiter Rechts als Pepe
    }
}