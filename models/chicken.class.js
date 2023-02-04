class Chicken extends MovableObject {

    height = 60;  // lege die height fest
    width = 60;   // lege die Width fest
    y = 360;      // lege die y-koordinate fest

    IMAGES_WALKING = [    // array mit allen Bildern von einem chicken
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    constructor() {     // das wird als nächstes ausgefürt
        
        // hol die superklasse mit "super()" und sage von da möchte ich die function loadImage() aufrufen, und gib als Parameter die src"" von dem Bild
        // die "super()" Methode braucht man nur beim ersten mal, dann wird immer nur "this" verwendet
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png'); 
        
        //rufe die Funktion loadImages() von der SuperKlasse auf, als Parameter wird das IMAGES_WALKING array übergeben
        this.loadImages(this.IMAGES_WALKING); 

        // gib der x-Achse eine Zufällige Zahl, wobei die minimum 200 ist
        this.x = 200 + Math.random() * 400;

        // gib der Variablen speed eine Zufällige Zahl
        // da in der WorldClass 3 chicken erstellt werden, wird diese Zeil 3 mal ausgefürt und deswegen kriegt dann jedes mal (jedes chicken)
        // eine unterschiedliche Geschwindigkeit
        this.speed = 0.15 +  Math.random() * 0.25;

        // rufe die Funktion auf 
        this.animate();
    }

    //neue Funktion
    animate(){
        //rufe die Funktion moveLeft() von der Superklasse auf
        this.moveLeft();

        // interval um die Bilder zu ändern
        setInterval(() => {
            
            // modulu Methode, wenn die Bilder alle durchgespielt wurden, spielen die von Anfang an wieder los. Beispiel : 0, 1, 2 - 0, 1, 2 usw..
            let i = this.currentImage % this.IMAGES_WALKING.length;
            
            // path ist = das Arraw IMAGES_WALKING an einer Stelle, also das Source von einem Bild.
            let path = this.IMAGES_WALKING[i];

            // der Variablen "img" von der SuperKlasse wird der Wert  von einem Bild im "imageCache" zugewiesen
            this.img = this.imageCache[path];

            // currentImage wird um eins erhöht
            this.currentImage++;

        }, 100);
    }
}