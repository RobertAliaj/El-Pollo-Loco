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

    collectedBottles = 0;
    bottleAmount = 0;
    collectedCoins = 0;
    lastThrowTime = 0;

    throwableObjects = [];
    allEnemies = this.level.enemies;
    chickens = this.level.enemies.slice(0, -1);
    endBoss = this.level.enemies[this.level.enemies.length - 1];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.run();
    }


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
        }, 50);

        setInterval(() => {
            this.charhitChicken();
        }, 25);
    }


    charhitChicken() {
        this.chickens.forEach((enemy, chickenIndex) => {
            if (this.character.isColliding(enemy) && this.character.characterIsFalling()) {
                this.character.smallJump();
                enemy.energy = 0;
                this.chickens.splice(chickenIndex, 1);
                this.removeChicken(chickenIndex);
            }
        });
    }


    enemyHitChar() {
        this.allEnemies.forEach((enemy) => {
            if (this.character.charRightCollideObjLeft(enemy) && this.character.charLeftCollideObjRight(enemy) && !this.character.isAboveGround()) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }


    bottleHitEndBoss() {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.isColliding(this.endBoss) && !bottle.enemyIsHit) {
                bottle.enemyIsHit = true;
                this.endBoss.hit();
                this.endBossStatusBar.setPercentage(this.endBoss.energy);
                this.removeBottle(bottle);
            }
        });
    }


    bottleHitChicken() {
        this.throwableObjects.forEach((bottle) => {
            this.chickens.forEach((enemy, chickenIndex) => {
                if (bottle.isColliding(enemy) && !bottle.enemyIsHit) {
                    bottle.enemyIsHit = true;
                    enemy.energy = 0;
                    this.chickens.splice(chickenIndex, 1);
                    this.removeChicken(chickenIndex);
                    this.removeBottle(bottle);
                }
            });
        });
    }


    removeChicken(chickenIndex) {
        setTimeout(() => {
            this.allEnemies.splice(chickenIndex, 1);
        }, 300);
    }


    bottleHitGround() {
        this.throwableObjects.forEach((bottle) => {
            if (bottle.bottleIsOnGround() && !bottle.enemyIsHit) {
                bottle.enemyIsHit = true;
                this.removeBottle(bottle);
            }
        });
    }


    removeBottle(bottle) {
        setTimeout(() => {
            this.throwableObjects.splice(this.throwableObjects.indexOf(bottle), 1);
        }, 300);
    }


    throwBottle() {
        this.enemyIsHit = false;
        const currentTime = Date.now();
        if (this.canThrowBottle(currentTime)) {
            this.createNewBottle();
            this.bottleAmount--;
            this.bottleStatusBar.setBottleNumber(this.bottleAmount);
            this.lastThrowTime = currentTime;
        }
    }


    canThrowBottle(currentTime) {
        return this.keyboard.D && (currentTime - this.lastThrowTime >= 200) && this.throwableObjects.length < this.collectedBottles && this.bottleAmount > 0;
    }

    
    createNewBottle() {
        let bottle = new ThrowableObject(this.character.x + 50, this.character.y + 70, this.character.otherDirection);
        this.throwableObjects.push(bottle);
    }


    collectCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1);
                this.collectedCoins++;
                this.coinBar.setCoinNumber(this.collectedCoins);
            }
        });
    }


    collectBottles() {
        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottle.splice(index, 1);
                this.collectedBottles++;
                this.bottleAmount++;
                this.bottleStatusBar.setBottleNumber(this.bottleAmount);
            }
        });
    }


    startEndBossLeft() {
        if (this.character.x > 2000) {
            this.endBoss.startEndBoss = true;
        }
    }


    draw() {
        this.clearCanvas();
        this.ctx.translate(this.camera_x, 0);
        this.drawMap(this.level.backgroundObjects);
        this.drawMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        this.drawStatusBar();
        this.ctx.translate(this.camera_x, 0);

        this.drawObjects(this.level.enemies);
        this.drawObjects(this.throwableObjects);
        this.drawObjects(this.level.bottle);
        this.drawObjects(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame(() => {
            this.draw();
        });
    }


    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


    drawMap(objects) {
        this.addObjectsToMap(objects);
    }


    drawStatusBar() {
        this.addToMap(this.endBossStatusBar);
        this.addToMap(this.endBossIcon);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleStatusBar);
        this.addToMap(this.bottleBarIcon);
        this.addToMap(this.coinBar);
        this.addToMap(this.coinBarIcon);
    }


    drawObjects(objects) {
        this.addObjectsToMap(objects);
        this.addToMap(this.character);
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {

        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx)
        mo.drawFrame(this.ctx)

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}