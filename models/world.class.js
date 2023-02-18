class World {

    character = new Character(); // erstelle ein neues Objekt "character"
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
    collectedBottles = 0;
    bottleAmount = 0;
    collectedCoins = 0;
    endBossIsHit = false;
    chickenIsHit = false;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    run() {
        setInterval(() => {
            this.checkCollision();
            this.collectBottles();
            this.collectCoins();
            this.checkThrowObjects();
            this.checkBottleCollision();
        }, 50);
    }


    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }


    checkBottleCollision() {
        let endBoss = this.level.enemies[this.level.enemies.length - 1];
        this.throwableObjects.forEach((bottle, index) => {
            if (bottle.isThrownAt(bottle, this.level.enemies[11]) && index >= 0) {
                endBoss.endBossHit();
                this.endBossIsHit = true;
                this.endBossStatusBar.setPercentage(endBoss.endBossEnergy);
            }

            this.level.enemies.slice(0, -1).forEach((enemy) => {                                     // iteriere durch die Enemies, AUSSER ENDBOSS
                if (bottle.isThrownAt(bottle, enemy) && index >= 0) {                                    // wenn die Flasche mit einem Chicken kollidiert
                    enemy.energy = 0;
                }
            });
        });
    }


    checkThrowObjects() {
        this.endBossIsHit = false;
        if (this.keyboard.D) {
            if (this.throwableObjects.length < this.collectedBottles) {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(bottle);
                this.bottleAmount--;
                if (this.bottleAmount < 0) {
                    this.bottleAmount = 0;
                }
                this.bottleStatusBar.setBottleNumber(this.bottleAmount);
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
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);

        // let self = this;
        // das ruft die "draw" funktion einfach immer wieder auf
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


    setWorld() {
        // die Variable "world" in der "character-Class" kriegt den Wert "this" 
        // this ist die ganze Instanz von der World-class, in anderen Worten alle Daten von WorldClass
        this.character.world = this;
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