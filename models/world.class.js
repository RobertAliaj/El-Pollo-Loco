class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    statusBar = new StatusBar();
    coinBar = new CoinBar();
    coinBarIcon = new CoinBarIcon();
    bottleStatusBar = new Bottlebar();
    bottleBarIcon = new BottleBarIcon();
    endBossStatusBar = new EndBossStatusBar();
    endBossIcon = new EndBossStatusBarIcon();

    throwableObjects = [];

    endBossIsHit = false;
    chickenIsHit = false;
    collectedBottles = 0;
    bottleAmount = 0;
    collectedCoins = 0;
    lastThrowTime = 0;


    allEnemies = this.level.enemies;
    chickens = this.level.enemies.slice(0, -1)
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
            this.charhitChicken();
        }, 10);
    }


    charhitChicken() {
        this.chickens.forEach((enemy) => {
            if (this.character.isAboveGround() && this.character.characterIsFalling()) {
                if (this.character.isColliding(enemy)) {
                    this.character.smallJump();
                    enemy.energy = 0;
                    this.removeEnemy(enemy);
                }
            }
        });
    }

 // neu email adress
    removeEnemy(enemy) {
        setTimeout(() => {
            this.chickens.splice(this.chickens.indexOf(enemy), 1);
            this.allEnemies.splice(this.allEnemies.indexOf(enemy), 1);
        }, 300);
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
        this.throwableObjects.forEach((bottle, index) => {
            if (bottle.isColliding(this.endBoss) && index >= 0) {
                this.endBoss.endBossHit();
                this.endBossStatusBar.setPercentage(this.endBoss.endBossEnergy);
                this.endBossIsHit = true;
            }
        });
    }

    bottleHitChicken() {
        this.throwableObjects.forEach((bottle, index) => {
            this.chickens.forEach((enemy, chickenIndex) => {
                if (bottle.isColliding(enemy) && index >= 0) {
                    bottle.isColliding(enemy);
                    enemy.energy = 0;
                    this.chickens.splice(chickenIndex, 1);
                }
            });
        });
    }


    throwBottle() {
        this.endBossIsHit = false;
        const currentTime = Date.now();
        if (this.keyboard.D && (currentTime - this.lastThrowTime >= 200)) {
            if (this.throwableObjects.length < this.collectedBottles) {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(bottle);
                this.bottleAmount--;
                this.bottleStatusBar.setBottleNumber(this.bottleAmount);
                this.lastThrowTime = currentTime;
            }
        }
    }


    // hier werden die Elemente in das Canvas Element gezeichnet
    draw() {

        // die zeile löscht alle Elemente aus dem Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);                    //camera_x wird kriegt den Wert beim Character, die translate-Methode braucht 2 Argumente, x und y 
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.endBossStatusBar);
        this.addToMap(this.endBossIcon);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleStatusBar);
        this.addToMap(this.bottleBarIcon);
        this.addToMap(this.coinBar);
        this.addToMap(this.coinBarIcon);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame(() => {
            this.draw();
        });
    }


    //hier werden alle variablen die mehrere Objekte drin haben (arrays) in das Canvas Element gezeichnet
    // die Varible "Object" sind die Arrays von oben mit den Objekten, also die chicken, die Wolken, das Background etc.. 
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    // hier werden die Objekte EFFEKTIV in das Canvas Element gezeichnet,  "mo" ist ein Objekt (character, chicken usw..) 
    addToMap(mo) {

        if (mo.otherDirection) {
            this.flipImage(mo); // diese Zeile flipt nicht nur den Character, sondern das ganze Bild
        }

        mo.draw(this.ctx)       // hier werden alle daten definiert wo und wie das Objekt gezeichnet werden soll
        mo.drawFrame(this.ctx)

        if (mo.otherDirection) {
            this.flipImageBack(mo);  // setzt noch mal alles auf die richtige Richtung, ausser dem Character
        }
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
                this.level.bottle.splice(index, 1);                 // lösche das collected Object aus dem Array und etferne es somit aus dem Canvas
                this.collectedBottles++;
                this.bottleAmount++;
                this.bottleStatusBar.setBottleNumber(this.bottleAmount);
            }
        });
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