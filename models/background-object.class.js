class BackgroundObject extends MovableObject {
    width = 720;   // width wird festgelegt
    height = 480;  // height wird festgelegt


    // die BackgroundObject klasse wird hier 4 erstellt und jedes mal kriegt sie eine andere src und x-Achse als parameter übergeben
    constructor(imagePath, x) {

        // hol die superklasse mit "super()" und sage von da möchte ich die function loadImage() aufrufen, und gib als Parameter die src"" von dem Bild
        // die "super()" Methode braucht man nur beim ersten mal, dann wird immer nur "this" verwendet
        super().loadImage(imagePath);

        // x-Achse kriegt den Wert von dem X Parameter das in der WorldClass definiert wurde
        this.x = x;

        // y-Achse wird festgelegt
        this.y = 480 - this.height;
    }
}