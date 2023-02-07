class Cloud extends MovableObject {
    height = 300; // height wird festgelegt
    y = 30;       // y-Achse wird festgelegt

    constructor() {
        // hol die superklasse mit "super()" und sage von da möchte ich die function loadImage() aufrufen, und gib als Parameter die src"" von dem Bild
        // die "super()" Methode braucht man nur beim ersten mal, dann wird immer nur "this" verwendet
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        //gebe der x-Achse eine zufällige Zahl
        this.x = 0 + Math.random() * 400;
        
        //width wird festgelegt
        this.width = 400;

        //rufe animate auf
        this.animate();
    }


    
    animate() {
        // rufe moveLeft auf, von der Superklasse
        this.moveLeft();
    }
}