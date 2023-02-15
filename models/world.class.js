class World {


    character = new Character(); // erstelle ein neues Objekt "character"
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        // die Variable "world" in der "character-Class" kriegt den Wert "this" 
        // this ist die ganze Instanz von der World-class, in anderen Worten alle Daten von WorldClass
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollision();
            // this.checkThrowObjects();
            // this.collectBottles();
        }, 200);
    }

    // checkThrowObjects() {
    //     if (this.keyboard.D) {
    //         this.bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
    //         this.throwableObjects.push(bottle);
    //     }
    // }

    checkCollision() {
        this.level.bottle.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(bottle);
                console.log(this.throwableObjects);
            }
        });
    }

    
    // checkCollision() {
    //     this.level.enemies.forEach((enemy) => {
    //         if (this.character.isColliding(enemy)) {
    //             this.character.hit();
    //             this.statusBar.setPercentage(this.character.energy);
    //         }
    //     });
    // };


    // hier werden die Elemente in das Canvas Element gezeichnet
    draw() {

        // die zeile löscht alle Elemente aus dem Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);                    //camera_x wird kriegt den Wert beim Character, die translate-Methode braucht 2 Argumente, x und y 
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);                //d

        let self = this;
        // das ruft die "draw" funktion einfach immer wieder auf
        requestAnimationFrame(function () {
            self.draw();
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

        mo.draw(this.ctx)       // Zeichnet alles noch mal, unter anderem auch den Character
        mo.drawFrame(this.ctx)

        if (mo.otherDirection) {
            this.flipImageBack(mo);  // setzt noch mal alles auf die richtige Richtung, ausser dem Character
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