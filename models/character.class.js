class Character extends MovableObject {

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    IMAGES_LONGIDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];

    height = 200;
    width = 100;
    speed = 9;
    offset = {
        top: 110,
        left: 35,
        right: 35,
        bottom: 5,
    };

    longIdle = 8;
    shortIdle = 4;
    lastKeyPressed;


    startGameShortIdle = false;
    startGameLongIdle = false;


    walking_sound = new Audio('audio/walking.mp3');
    jump_sound = new Audio('audio/jump.mp3');

    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONGIDLE);
        this.applyGravity();
        this.startGameIdle();
        this.animate();
    }


    animate() {

        setInterval(() => {
            this.checkIfIsMovingRight();
            this.checkIfIsMovingLeft();
            this.checkIfJumping();
            this.lastPressedKey();
        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimations(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimations(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimations(this.IMAGES_JUMPING);
            } else if (this.canWalk()) {
                this.playAnimations(this.IMAGES_WALKING);
            } else if (this.canStartLongIdle() || this.startGameLongIdle) {
                this.playAnimations(this.IMAGES_LONGIDLE);
            } else if (this.canStartShortIdle() || this.startGameShortIdle) {
                this.playAnimations(this.IMAGES_IDLE);
            } else {
                this.img = this.imageCache['img/2_character_pepe/1_idle/idle/I-1.png'];
            }
        }, 120);
    }


    checkIfIsMovingRight() {
        if (this.canMoveRight())
            this.moveRight();
        if (this.canMoveRightScreenEnd())
            this.moveRightOnScreenEnd();
    }


    checkIfIsMovingLeft() {
        if (this.canMoveLeft())
            this.moveLeft();
        if (this.canMoveLeftScreenEnd())
            this.moveLeftOnScreenEnd();
    }


    checkIfJumping() {
        if (this.canJump()) {
            this.jump();
        }
    }


    canMoveRight() {
        return world.keyboard.RIGHT && this.x < 719 * 3 + 120;
    }


    moveRight() {
        super.moveRight();
        this.otherDirection = false;
        world.camera_x = -this.x + 120;
    }


    canMoveRightScreenEnd() {
        return world.keyboard.RIGHT && this.x < level1.level_end_x && this.x > 719 * 3 + 120;
    }


    moveRightOnScreenEnd() {
        super.moveRight();
        this.otherDirection = false;
        world.camera_x = - 719 * 3;
    }


    canMoveLeft() {
        return world.keyboard.LEFT && this.x > 0 && this.x < 719 * 3 + 120;
    }


    moveLeft() {
        super.moveLeft();
        this.otherDirection = true;
        world.camera_x = -this.x + 120;
    }


    canMoveLeftScreenEnd() {
        return world.keyboard.LEFT && this.x < level1.level_end_x + 10 && this.x > 719 * 3 + 120;
    }


    moveLeftOnScreenEnd() {
        super.moveLeft();
        this.otherDirection = true;
        world.camera_x = -719 * 3;
    }


    canJump() {
        return world.keyboard.SPACE && !this.isAboveGround();
    }


    canWalk() {
        return world.keyboard.RIGHT || world.keyboard.LEFT;
    }


    canStartLongIdle() {
        return this.startIdle(this.longIdle);
    }


    canStartShortIdle() {
        return this.startIdle(this.shortIdle);
    }


    startIdle(idleTime) {
        let timepassed = new Date().getTime() - this.lastKeyPressed;
        timepassed = timepassed / 1000;
        return timepassed > idleTime;
    }


    lastPressedKey() {
        if (this.keyIsPressed()) {
            this.lastKeyPressed = new Date().getTime();
            this.startGameShortIdle = false;
            this.startGameLongIdle = false;
        }
    }


    keyIsPressed() {
        return keyboard.LEFT || keyboard.RIGHT || keyboard.UP || keyboard.DOWN || keyboard.SPACE || keyboard.D
    }


    startGameIdle() {
        if (!this.keyIsPressed()) {
            setTimeout(() => this.startGameShortIdle = true, 4000);
            setTimeout(() => this.startGameLongIdle = true, 8000);
        }
    }
}