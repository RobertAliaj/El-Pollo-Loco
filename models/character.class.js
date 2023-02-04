class Character extends MovableObject {

    height = 300; // lege die height fest
    width = 150;  // lege die Width fest
    y = 130;      // lege die y-Achse fest
    speed = 5;


    IMAGES_WALKING = [ // array mit allen Bildern vom character
        '../img/2_character_pepe/2_walk/W-21.png',
        '../img/2_character_pepe/2_walk/W-22.png',
        '../img/2_character_pepe/2_walk/W-23.png',
        '../img/2_character_pepe/2_walk/W-24.png',
        '../img/2_character_pepe/2_walk/W-25.png',
        '../img/2_character_pepe/2_walk/W-26.png',
    ];


    world; //varibale die den Wert von WorldClass bekommt

    constructor() { // das wird als nächstes ausgefürt 

        // hol die superklasse mit "super()" und sage von da möchte ich die function loadImage() aufrufen, und gib als Parameter die src"" von dem Bild
        // die "super()" Methode braucht man nur beim ersten mal, dann wird immer nur "this" verwendet
        super().loadImage('../img/2_character_pepe/2_walk/W-21.png');

        //rufe die Funktion loadImages() von der SuperKlasse auf, als Parameter wird das IMAGES_WALKING array übergeben
        this.loadImages(this.IMAGES_WALKING);

        // rufe die Funktion auf
        this.animate();
    }


    // neue Funktion
    animate() {


        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
            } 
            
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
            }
        }, 1000 / 60);


        // interval um die Bilder zu ändern
        setInterval(() => {

            // Nur wenn das Rechte Pfeil = true ist soll die Animation starten
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {

                this.x += this.speed;

                // modulu Methode, wenn die Bilder alle durchgespielt wurden, spielen die von Anfang an wieder los. Beispiel : 0, 1, 2 - 0, 1, 2 usw..
                let i = this.currentImage % this.IMAGES_WALKING.length;

                // path ist = das Arraw IMAGES_WALKING an einer Stelle, also das Source von einem Bild.
                let path = this.IMAGES_WALKING[i];

                // der Variablen "img" von der SuperKlasse wird der Wert  von einem Bild im "imageCache" zugewiesen
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 80)
    }

    jump() {

    }
}