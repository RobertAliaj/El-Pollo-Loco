class DrawableObject {

    img;
    imageCache = [];
    x = 120;
    y = 220;
    height = 150;
    width = 100;
    currentImage = 0;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    draw(ctx) {
        // das ruft die Varible "ctx" und gibt die ganzen Details wo und wie ein Bild im Canvas gezeichnet werden soll 
        // "drawImage" ist eine Methode des Canvas 2D Context in HTML5, die verwendet wird, um Bilder auf einem Canvas-Element zu zeichnen.
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {
        // if (this instanceof Character || this instanceof Chicken || this instanceof ThrowableObject || this instanceof Endboss || this instanceof Coin || this instanceof Bottle) {
        //     // if (this instanceof Chicken || this instanceof Character) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '5';
        //     ctx.strokeStyle = 'lightcoral';
        //     ctx.rect(this.x, this.y, this.width, this.height);
        //     ctx.stroke();
        // }

        // if (this instanceof Character || this instanceof Chicken || this instanceof ThrowableObject || this instanceof Endboss || this instanceof Coin || this instanceof Bottle) {
        //     // if (this instanceof Chicken || this instanceof Character) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '2';
        //     ctx.strokeStyle = 'red';
        //     ctx.rect(this.x + this.offset.left, this.y + this.offset.top, (this.width - this.offset.left) - this.offset.right, (this.height - this.offset.top) - this.offset.bottom);
        //     ctx.stroke();
        // }
    }
}