// hier werden alle Daten die bei den anderen Klassen geladen wurden, in das canvas-Element gezeichnet
class World {

    // Variable die den Character erstellt "new Charcter()"
    // das heißt man wird jetzt zu characterClass weitergeleitet und da wird erst alles ausgefürt bevor man wieder hier kommt 
    character = new Character();

    // hier passiert das gleiche wie oben mit dem Character, nur heir passiert das 3 mal
    // das heißt es werden 3 Chicken erstellt und für jedes chicken läuft "chicken.class.js" ein mal komplett durch
    // für jedes Chicken werden 3 Bilder von dem Chicken zur Verfügung gestellt und animiert (laufen)
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    // hier auch das gleiche, das ist ein array mit nur einem Element drin, man könnte die Wolken 2 mal erstellen lassen
    // und dann hätte man 2 mal die Wolken
    clouds = [
        new Cloud()
    ];

    // hier wird die Klasse "BackgroundObject" 4 mal erstellt
    // jedes mal kriegt sie aber eine neue Source
    backgroundObjects = [
        new BackgroundObject('../img/5_background/layers/air.png', 0),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png', 0)
    ];

    canvas; // die Variable hat erst mal nix mit dem Paramter von dem constructor zu tun 
    ctx;    // variable
    keyboard; // variable

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


    
    setWorld(){
        // die Variable "world" in der "character-Class" kriegt den Wert "this" 
        // this ist die ganze Instanz von der World-class, in anderen Worten alle Daten von WorldClass
        this.character.world = this;
    }


    // hier werden die Elemente in das Canvas Element gezeichnet
    draw() {

        // die zeile löscht alle Elemente aus dem Canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // hier wird die funktion addObjectsToMap aufgerufen und die Array-Variable von Oben "backgroundObjects" übergeben          
        this.addObjectsToMap(this.backgroundObjects);

        // hier wird die funktion addObjectsToMap aufgerufen und die Variable von Oben "character" übergeben          
        this.addToMap(this.character);

        // hier wird die funktion addObjectsToMap aufgerufen und die Array-Variable von Oben "clouds" übergeben          
        this.addObjectsToMap(this.clouds);

        // hier wird die funktion addObjectsToMap aufgerufen und die Array-Variable von Oben "enemies" übergeben          
        this.addObjectsToMap(this.enemies);


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

        // das ruft die Varible "ctx" und gibt die ganzen Details wo und wie ein Bild im Canvas gezeichnet werden soll 
        // "drawImage" ist eine Methode des Canvas 2D Context in HTML5, die verwendet wird, um Bilder auf einem Canvas-Element zu zeichnen.
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }

}