class MovableObject {
    x = 120;            // x- koordinate wird festgelegt
    y = 280;            // y-koordinate wird festgelegt
    img;                // variable ohne Wert
    height = 150;       // height wird festgelegt
    width = 100;        // width wird fest gelegt
    imageCache = [];    // array welches erst mal leer ist
    currentImage = 0;   // varibale mit dem Wert 0 
    speed = 0.1;        // variable mit dem Wert 0.1


    // funktion die als Parameter ein source von einem Bild von den Unterklassen übernimmt
    loadImage(path){  
        
        // die Variale "img" kriegt den Wert "new Image()", heißt neues Bild wird erstellt 
        this.img = new Image();

        // das Bild das erstellt werden soll, braucht ein source, die kriegt sie hier (die Source wird von den Unterklassen übergeben)
        this.img.src = path;
    }


    // funktion die als Parameter ein array mit sources von Bildern von den Unterklassen übernimmt
    loadImages(arr){
        // gehe durch das array, "path" ist die Source von einem Bild im array
        arr.forEach( path => {

            // eine neue Variable "img" wird definiert(nur innerhalb diese Funktion verfügbar) die ein neues Bild erstellt
            let img = new Image();

            // das Bild das erstellt werden soll, braucht ein source, die kriegt sie hier:
            // path ist die Source von einem Bild im Array das von den Unterklassen übergeben wurde
            img.src = path;

            // in anderen Worten: this.imageCache[path] ist = neues Bild
            this.imageCache[path] = img;
        });
    }

    // funktion die verschiedne Elemente nach links bewegen lässt
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed; // speed ist = 0.1, ausser wenn es bei einer Anderen Class wo diese Funktion aufgereufen wird anders definiert ist 
        }, 1000 / 200); // 200 mal pro sekunde 
    }
}