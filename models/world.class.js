class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    coinBar = new CoinBar();
    statusBar = new StatusBar();
    coinBarIcon = new CoinBarIcon();
    bottleStatusBar = new Bottlebar();
    bottleBarIcon = new BottleBarIcon();
    endBossIcon = new EndBossStatusBarIcon();
    endBossStatusBar = new EndBossStatusBar();

    bottleAmount = 0;
    collectedBottles = 0;
    collectedCoins = 0;
    lastThrowTime = 0;

    throwableObjects = [];
    allEnemies = this.level.enemies;
    chickens = this.level.enemies.slice(0, -1);
    endBoss = this.level.enemies[this.level.enemies.length - 1];
    smallChicken = this.level.smallChicken;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.run();
    }


    /**
     * This function is used to start checking all the processes in Game / Gamelogic
     */
    run() {
        setInterval(() => {
            this.enemyHitChar();
            this.collectBottles();
            this.collectCoins();
            this.throwBottle();
            this.bottleHitChicken();
            this.bottleHitEndBoss();
            this.startEndBossLeft();
            this.bottleHitGround();
            this.bottleHitSmallChicken();
        }, 50);

        setInterval(() => {
            this.charhitChicken();
            this.charhitSmallChicken();
            this.endBossHitCharacter();
        }, 25);
    }


    /**
     * This function is used to check when the Character kills a normal Chicken
     */
    charhitChicken() {
        this.chickens.forEach((enemy, chickenIndex) => {
            if (this.character.isColliding(enemy) && this.character.characterIsFalling()) {
                enemy.kill_chicken.play();
                this.character.smallJump();
                enemy.energy = 0;
                enemy.speed = 0;
                this.chickens.splice(chickenIndex, 1);
                this.removeChicken(enemy, this.allEnemies, chickenIndex);
            }
        });
    }


    /**
     * This function is used to check when the Character kills a small Chicken
     */
    charhitSmallChicken() {
        this.smallChicken.forEach((enemy, chickenIndex) => {
            if (this.character.isColliding(enemy) && this.character.charBottomCollideObjTop(enemy) && this.character.characterIsFalling()) {
                enemy.kill_chicken.play();
                this.character.smallJump();
                enemy.energy = 0;
                enemy.speed = 0;
                this.removeChicken(enemy, this.smallChicken, chickenIndex);
            }
        });
    }


    /**
     * This function is used to check when a small or normal chicken hits the Character
     */
    enemyHitChar() {
        const myEnemies = this.chickens.concat(this.smallChicken);
        myEnemies.forEach((enemy) => {
            if (this.character.charRightCollideObjLeft(enemy) && this.character.charLeftCollideObjRight(enemy) && !this.character.isAboveGround() && !enemy.isDead() && !this.character.isDead()) {
                this.character.hit();
                this.character.pepeIsHit.play();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }


    /**
     * This function is used to check when the Endboss hits the character
     */
    endBossHitCharacter() {
        if (this.character.isColliding(this.endBoss) && !this.endBoss.isDead() && !this.character.isDead()) {
            this.character.hit();
            this.character.pepeIsHit.play();
            this.statusBar.setPercentage(this.character.energy);
        }
    }


    /**
     * This function is used to check when a bottle hits the Endboss
     */
    bottleHitEndBoss() {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(this.endBoss) && !bottle.enemyIsHit) {
                bottle.bottle_spashing.play();
                bottle.enemyIsHit = true;
                this.endBoss.hit();
                this.endBossStatusBar.setPercentage(this.endBoss.energy);
                this.removeBottle(bottle);
            }
        });
    }


    /**
     * This function is used to check when a bottle hits a small chicken
     */
    bottleHitSmallChicken() {
        this.throwableObjects.forEach((bottle) => {
            this.smallChicken.forEach((enemy, chickenIndex) => {
                if (bottle.isColliding(enemy) && !bottle.enemyIsHit) {
                    bottle.bottle_spashing.play();
                    bottle.enemyIsHit = true;
                    enemy.energy = 0;
                    this.removeChicken(enemy, this.level.smallChicken, chickenIndex);
                    this.removeBottle(bottle);
                }
            });
        });
    }


    /**
     * This function is used to check when a bottle hits a normal chicken
     */
    bottleHitChicken() {
        this.throwableObjects.forEach((bottle) => {
            this.chickens.forEach((enemy, chickenIndex) => {
                if (bottle.isColliding(enemy) && !bottle.enemyIsHit) {
                    bottle.bottle_spashing.play();
                    bottle.enemyIsHit = true;
                    enemy.energy = 0;
                    this.chickens.splice(chickenIndex, 1);
                    this.removeChicken(enemy, this.allEnemies, chickenIndex);
                    this.removeBottle(bottle);
                }
            });
        });
    }


    /**
     * This function is used to remove a normal or a small chicken after they are dead
     */
    removeChicken(enemy, myEnemies, chickenIndex) {
        let time;
        time = enemy.isAboveGround() ? 0 : 300;
        setTimeout(() => {
            myEnemies.splice(chickenIndex, 1);
        }, time);
    }


    /**
     * This bottle is used to check when a bottle hits the ground
     */
    bottleHitGround() {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.bottleIsOnGround() && !bottle.enemyIsHit) {
                bottle.bottle_spashing.play();
                bottle.enemyIsHit = true;
                this.removeBottle(bottle);
            }
        });
    }


    /**
     *  This function is used to remove a bottle after it collides with anything or if it splashes on ground
     */
    removeBottle(bottle) {
        setTimeout(() => {
            this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
        }, 300);
    }


    /**
     * This function is used to throw a bottle
     */
    throwBottle() {
        this.enemyIsHit = false;
        const currentTime = Date.now();
        if (this.canThrowBottle(currentTime) && !gameIsPaused && !this.character.isDead() && !this.endBoss.isDead()) {
            this.createNewBottle();
            this.bottleAmount--;
            this.bottleStatusBar.setBottleNumber(this.bottleAmount);
            this.lastThrowTime = currentTime;
        }
    }


    /**
     * This function is used to check if a bottle can be thrown
     */
    canThrowBottle(currentTime) {
        return this.keyboard.D && (currentTime - this.lastThrowTime >= 200) && this.throwableObjects.length < this.collectedBottles && this.bottleAmount > 0;
    }


    /**
     * This function is used to create a new bottle and push it to the bottles array
     */
    createNewBottle() {
        let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 70, this.character.otherDirection);
        this.throwableObjects.push(bottle);
    }


    /**
     * This function is used to collect Coins
     */
    collectCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                coin.collect_coin.play();
                this.level.coins.splice(index, 1);
                this.collectedCoins++;
                this.coinBar.setCoinNumber(this.collectedCoins);
            }
        });
    }


    /**
     * This function is used to collect bottles
     */
    collectBottles() {
        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                bottle.collect_bottle.play();
                this.level.bottle.splice(index, 1);
                this.collectedBottles++;
                this.bottleAmount++;
                this.bottleStatusBar.setBottleNumber(this.bottleAmount);
            }
        });
    }


    /**
     * This function is used to start the movement and Animations of the Endboss
     */
    startEndBossLeft() {
        if (this.character.x > 2000) {
            this.endBoss.startEndBoss = true;
        }
    }


    /**
     * This function is used to draw everything on the canvas
     */
    draw() {
        this.clearCanvas();
        this.ctx.translate(this.camera_x, 0);
        this.drawMap(this.level.backgroundObjects);
        this.drawMap(this.level.clouds);

        this.drawObjects(this.level.enemies);
        this.drawObjects(this.level.smallChicken);
        this.drawObjects(this.throwableObjects);
        this.drawObjects(this.level.bottle);
        this.drawObjects(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);
        this.drawStatusBar();

        requestAnimationFrame(() => {
            this.draw();
        });
    }

    /**
     * This function is used to clear the Canvas
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    /**
     * This function is used to draw the backgroundobject, clouds etc.
     */
    drawMap(objects) {
        this.addObjectsToMap(objects);
    }


    /**
     * This function is used to draw the statusbars 
     */
    drawStatusBar() {
        this.addToMap(this.endBossStatusBar);
        this.addToMap(this.endBossIcon);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleStatusBar);
        this.addToMap(this.bottleBarIcon);
        this.addToMap(this.coinBar);
        this.addToMap(this.coinBarIcon);
    }


    /**
     * This function is used to draw the Movable Objects
     */
    drawObjects(objects) {
        this.addObjectsToMap(objects);
        this.addToMap(this.character);
    }

    /**
     * This function is used to loop through the different objects and add them to the map
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * This function is used to add the different Objects to the map
     */
    addToMap(mo) {
        if (mo.otherDirection)
            this.flipImage(mo);

        mo.draw(this.ctx)

        if (mo.otherDirection)
            this.flipImageBack(mo);
    }


    /**
     * This function is used to flip the image
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * This function is used to flip the image to the original Position
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}