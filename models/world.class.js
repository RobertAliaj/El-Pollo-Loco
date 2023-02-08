class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        
        this.canvas = canvas;
        this.keyboard = keyboard;

        this.draw();
        this.setWorld();
    }


    setWorld() {
        // die Variable "world" in der "character-Class" kriegt den Wert "this" 
        // this ist die ganze Instanz von der World-class, in anderen Worten alle Daten von WorldClass
        this.character.world = this;
    }


    // hier werden die Elemente in das Canvas Element gezeichnet
    draw() {

        // die zeile löscht alle Elemente aus dem Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);

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

    // hier werden die Objekte EFFEKTIV in das Canvas Element gezeichnet,  "mo" ist ein einziges Objekt 
    addToMap(mo) {

        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        // das ruft die Varible "ctx" und gibt die ganzen Details wo und wie ein Bild im Canvas gezeichnet werden soll 
        // "drawImage" ist eine Methode des Canvas 2D Context in HTML5, die verwendet wird, um Bilder auf einem Canvas-Element zu zeichnen.
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    flipImage(mo) {
        //speicher alle eigenschaften vom Context
        this.ctx.save();

        // diese Zeile verschiebt das Objekt
        this.ctx.translate(mo.width, 0);

        // diese Zeile spiegelt das Bild
        this.ctx.scale(-1, 1);

        // die x-Koordinate wird gespiegelt
        mo.x = mo.x * -1;
    }


    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}