class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 45;
    speed = 1;
    startEndBoss = false;
    attack = false;
    firstSight = true;
    turnRight = false;

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


    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);

        this.x = 2400;
        this.checkTurnAround();
        this.animate();
    }


    checkTurnAround() {
        setTimeout(() => this.canTurnAround(), 2000);
    }


    canTurnAround() {
        setInterval(() => this.endBossTurnAround(), 200)
    }


    animate() {
        this.moveEndBoss();
        this.animateImages();
    }


    moveEndBoss() {
        setInterval(() => {
            if (this.canMoveRight())
                this.moveRight();
            if (this.canMoveLeft())
                this.moveLeft();
        }, 1000 / 200);
    }


    canMoveRight() {
        return this.turnRight;
    }


    moveRight() {
        super.moveRight();
        this.otherDirection = true;
    }


    canMoveLeft() {
        return !this.turnRight && this.startEndBoss;
    }


    moveLeft() {
        super.moveLeft();
        this.otherDirection = false;
    }


    animateImages() {
        setTimeout(() => this.playImages(), 5000);
    }


    playImages() {
        let intervalId = setInterval(() => {
            if (this.isDead()) {
                this.playDeadAnimations(intervalId);
            } else if (this.isHurt()) {
                this.playHurtAnimations();
            } else if (this.canAttack()) {
                this.playAnimations(this.IMAGES_ATTACK);
            } else if (this.canAlert()) {
                this.playAlertAnimations();
            } else if (this.canWalk()) {
                this.playWalkAnimations();
            }
        }, 200);
    }


    playDeadAnimations(intervalId) {
        this.playAnimations(this.IMAGES_DEAD);
        this.speed = 0;
        setTimeout(() => {
            clearInterval(intervalId);
        }, 1200);
    }


    playHurtAnimations() {
        this.playAnimations(this.IMAGES_HURT);
        this.attack = true;
        this.speed = 2;
    }


    canAttack() {
        return this.isHurt && this.attack;
    }


    canAlert() {
        return this.charMeetEndBoss() && this.firstSight;
    }


    playAlertAnimations() {
        setTimeout(() => this.firstSight = false, 1000);
        this.playAnimations(this.IMAGES_ALERT)
    }


    canWalk() {
        return this.startEndBoss;
    }


    playWalkAnimations() {
        this.playAnimations(this.IMAGES_WALK);
    }


    endBossTurnAround() {
        if (this.canTurnRight())        // Pepe Weiter rechts is als endBoss
            this.turnRight = true;      // turn true
        if (this.canTurnLeft())         // true und EndBoss weiter Rechts ist als Pepe
            this.turnRight = false;     // False
    }


    canTurnRight() {
        return this.shouldTurnRight() && !this.turnRight;
    }


    shouldTurnRight() {
        return (this.x + this.width + 30) < world.character.x;  // Pepe ist weiter Rechts als endBoss
    }


    canTurnLeft() {
        return this.shouldTurnLeft() && this.turnRight;
    }


    shouldTurnLeft() {
        return (this.x - 30) > world.character.x + world.character.width; // EndBoss ist weiter Rechts als Pepe
    }


    charMeetEndBoss() {
        return (this.x - 10) > world.character.x + world.character.width && (world.character.x + world.character.width) > this.x - 200;
    }

    // der SetTimeOut um den animationenInterval wurde gemacht weil er ansosnten die ersten 5 Sekunden ein Fehler gibt weil charakter nicht gefunden werden kann
}