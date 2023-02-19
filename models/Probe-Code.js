class jkasf {


    isColliding(mo) {

        return this.charRightCollideMoLeft(mo) &&
            this.charBottomCollideMoTop(mo) &&
            this.charLeftCollideMoRight(mo) &&
            this.charTopCollideWithMoBottom(mo);
            
        //Rechte Seite von Pepe trifft Linke Seite von ieinem Objekt
        // Untere Seite von Pepe trifft Obere Seite von Objekten(Münzen und Endboss auch)
        //Linke Seite von Pepe kleiner als die Rechte Seite von Objekten
        //Obere Seite von Pepe trifft untere Seite von Objekten
    };


    //Rechte Seite von Pepe trifft Linke Seite von ieinem Objekt
    charRightCollideMoLeft(mo) {
        if (this.isRightSideChar() > this.leftSideFrom(mo)) {
            console.log('Colliding');
        }
    }

    isRightSideChar() {
        return this.x + this.width - this.offset.right; //Der Winkel Oben Rechts beim Character (OffsetLinie)
    };


    leftSideFrom(mo) {
        return mo.x + mo.offset.left; // Der Winkel Oben Links bei den Objekten (Chicken, Bottle Coin, EndBoss) (OffsetLinie)
    };



    // Untere Seite von Pepe trifft Obere Seite von Objekten(Münzen und Endboss auch)
    charBottomCollideMoTop(mo) {
        if (this.isBottomSideChar() > this.topSideFrom(mo)) {
            console.log('Treffer');
        }
    };


    isBottomSideChar() {
        return this.y + this.height - this.offset.bottom; // Der Winkel unten Links beim Character (Offsetlinie)
    };


    topSideFrom(mo) {
        return mo.y + mo.offset.top; // Der Winkel Oben Links bei den Objekten(Offsetlinie)
    };



    //Linke Seite von Pepe kleiner als die Rechte Seite von Objekten
    charLeftCollideMoRight(mo) {
        return this.isLeftSideChar() < this.rightSideFrom(mo);
    };

    isLeftSideChar() {
        return this.x + this.offset.left; //Die Linke Seite beim Character (Offsetlinie)
    };


    rightSideFrom(mo) {
        return mo.x + mo.width - mo.offset.right;      //Die Rechte Seite bei den Objekten (Offsetlinie)
    };



    //Obere Seite von Pepe trifft untere Seite von Objekten
    charTopCollideWithMoBottom(mo) {
        return this.isTopSideChar() < this.bottomSideFrom(mo);
    };


    isTopSideChar() {
        return this.y + this.offset.top; // Die Obere Seite von Character (Offsetlinie)
    };



    bottomSideFrom(mo) {
        return mo.y + mo.height - mo.offset.bottom;  // Die Untere Seite von den Objekten (Offsetlinie) 
    };



























    //     isColliding (mo) {
    //         return  (this.x + this.width) >= mo.x && 
    //                  this.x <= (mo.x + mo.width) && 
    //                 (this.y + this.offsetY + this.height) >= mo.y &&
    //                 (this.y + this.offsetY) <= (mo.y + mo.height) && 
    //                 mo.onCollisionCourse; 

    // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    // }



}