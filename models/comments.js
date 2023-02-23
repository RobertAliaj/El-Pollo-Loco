class adshgj {

    isColliding(obj) {
        //Rechte Seite von Pepe trifft Linke Seite von ieinem Objekt
        // Untere Seite von Pepe trifft Obere Seite von Objekten(Münzen und Endboss auch)
        //Linke Seite von Pepe kleiner als die Rechte Seite von Objekten (Das prüft nur ob Pepe (noch) collidet oder schon an das Objekt vorbei gelaufen ist)
        //Obere Seite von Pepe trifft untere Seite von Objekten
        this.charRightCollideObjLeft(obj) &&
            this.charBottomCollideObjTop(obj) &&
            this.charLeftCollideObjRight(obj) &&
            this.charTopCollideObjBottom(obj);
    };


    // isThrownAt(bottle, obj) {
    //     return (myObj.x + myObj.width) - myObj.offset.right > obj.x + obj.offset.left &&
    //         (myObj.y + myObj.height) - myObj.offset.bottom > obj.y + obj.offset.top &&
    //         myObj.x + myObj.offset.left < (obj.x + obj.width) - obj.offset.right &&
    //         myObj.y + myObj.offset.top < (obj.y + obj.height) - obj.offset.bottom;
    // }


    // setWorld() {
    //     // die Variable "world" in der "character-Class" kriegt den Wert "this" 
    //     // this ist die ganze Instanz von der World-class, in anderen Worten alle Daten von WorldClass
    //     this.character.world = this;
    // }
}
