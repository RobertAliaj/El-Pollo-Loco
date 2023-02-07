// hier werden alle Daten die bei den anderen Klassen geladen wurden, in das canvas-Element gezeichnet
class World {

    // Variable die den Character erstellt "new Charcter()"
    // das heißt man wird jetzt zu characterClass weitergeleitet und da wird erst alles ausgefürt bevor man wieder hier kommt 
    character = new Character();

    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;

    canvas; // die Variable hat erst mal nix mit dem Paramter von dem constructor zu tun 
    ctx;    // variable
    keyboard; // variable
    camera_x = 0;

    // der constructor kriegt einen Parameter übergeben
    constructor(canvas, keyboard) {

        // die Variable ctx kriegt einen neuen Wert
        // "canvas.getContext('2d')" macht es möglich das man in das Canvas Element 2d Objekte zeichnen kann 
        this.ctx = canvas.getContext('2d');

        // die Variable "canvas" von oben kriegt einen neuen Wert und zwar "das Parameter Canvas", was letztendlich der canvas ist 
        this.canvas = canvas;

        // variable Keyboard kriegt den Wert von der "Keyboard Klasse"
        this.keyboard = keyboard;

        // die Funktion Draw wird aufgerufen
        this.draw();

        //rufe die Funktion auf
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

        // hier wird die funktion addObjectsToMap aufgerufen und die Array-Variable von Oben "backgroundObjects" übergeben          
        this.addObjectsToMap(this.backgroundObjects);

        // hier wird die funktion addObjectsToMap aufgerufen und die Variable von Oben "character" übergeben          
        this.addToMap(this.character);

        // hier wird die funktion addObjectsToMap aufgerufen und die Array-Variable von Oben "clouds" übergeben          
        this.addObjectsToMap(this.clouds);

        // hier wird die funktion addObjectsToMap aufgerufen und die Array-Variable von Oben "enemies" übergeben          
        this.addObjectsToMap(this.enemies);


        this.ctx.translate(-this.camera_x, 0);

        // das wird gemacht weil "this" innerhalb von der "requestAnimationFrame" nicht erkannt wird
        let self = this;

        // das ruft die "draw" funktion einfach immer wieder auf
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    //hier werden alle variablen die mehrere Objekte drin haben (arrays) in das Canvas Element gezeichnet
    // die Varible "Object" sind die Arrays von oben mit den Objekten, also die chicken, die Wolken, das Background etc.. 
    addObjectsToMap(objects) {

        //gehe durch das array (for-Schleife), "o" is = ein Objekt
        objects.forEach(o => {

            //rufe die funktion auf und übergebe die "o" als parameter
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