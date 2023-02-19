class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;             //  ist die Geschwindigkeit nach unten
    acceleration = 2.5;     //  ist die Beschleunigung
    lastHit = 0;
    energy = 10000;
    endBossEnergy = 100;


    characterIsFalling() {
        return this.speedY < 0;
    };

    isColliding(obj) {
        return this.charRightCollideObjLeft(obj) &&
            this.charBottomCollideObjTop(obj) &&
            this.charLeftCollideObjRight(obj) &&
            this.charTopCollideObjBottom(obj);
    };


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    endBossHit() {
        this.endBossEnergy -= 20;
        if (this.endBossEnergy < 0) {
            this.endBossEnergy = 0
        }
    }


    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.75;
    }


    isDead() {
        return this.energy == 0;
    }


    playAnimations(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed; // speed ist = 0.1, ausser wenn es bei einer Anderen Class wo diese Funktion aufgereufen wird anders definiert ist 
    }


    jump() {
        this.speedY = 30; //
    }

    smallJump() {
        this.speedY = 20; //
    }


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {      // speedY wird in der JumpFunktion auf 30 gesetzt
                this.y -= this.speedY;                          // y ist = 30 - -2.5 = 32,5
                this.speedY -= this.acceleration;               // speedY ist = 0 - 2.5 = -2.5  (Beim Springen wird von speedY(30) immer 2.5px abgezogen)
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 130; // y kleiner als 130 heißt das er den Boden nicht berührt hat 
        }
    };



    //Rechte Seite von Pepe trifft Linke Seite von ieinem Objekt
    charRightCollideObjLeft(obj) {
        return this.charRightSide() > this.objLeftSide(obj);
    }

    charRightSide() {
        return this.x + this.width - this.offset.right; // Die Rechte Seite vom Character(OffsetLinie)
    };


    objLeftSide(obj) {
        return obj.x + obj.offset.left; // Die Linke Seite von Objekten (Chicken, Bottle Coin, EndBoss) (OffsetLinie)
    };



    // Untere Seite von Pepe trifft Obere Seite von Objekten(Münzen und Endboss auch)
    charBottomCollideObjTop(obj) {
        return this.charBottom() > this.objTop(obj);
    };


    charBottom() {
        return (this.y + this.height) - this.offset.bottom; // Die untere Seite vom Character(Offsetlinie)
    };


    objTop(obj) {
        return obj.y + obj.offset.top; // Die Obere Seite von Objekten(Offsetlinie)
    };



    //Linke Seite von Pepe kleiner als die Rechte Seite von Objekten
    charLeftCollideObjRight(obj) {
        return this.charLeftSide() < this.objRightSide(obj);
    };

    charLeftSide() {
        return this.x + this.offset.left; //Die Linke Seite beim Character (Offsetlinie)
    };


    objRightSide(obj) {
        return (obj.x + obj.width) - obj.offset.right;      //Die Rechte Seite bei den Objekten (Offsetlinie)
    };


    //Obere Seite von Pepe trifft untere Seite von Objekten
    charTopCollideObjBottom(obj) {
        return this.charTop() < this.objBottom(obj);
    };


    charTop() {
        return this.y + this.offset.top; // Die Obere Seite von Character (Offsetlinie)
    };


    objBottom(obj) {
        return (obj.y + obj.height) - obj.offset.bottom;  // Die Untere Seite von den Objekten (Offsetlinie) 
    };


    charOverChicken() {
        return ((this.y + this.height) - this.offset.bottom) > 370;
    }
}