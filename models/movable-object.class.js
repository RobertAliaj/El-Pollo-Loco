class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;             //  ist die Geschwindigkeit nach unten
    acceleration = 2.5;     //  ist die Beschleunigung
    lastHit = 0;
    energy = 100;

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


    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }


    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }


    /**
     * Wenn dieser Zeitunterschied kleiner als 0,75 Sekunden ist, gibt die Funktion "isHurt" true zurück und die Animation wird abgespielt. 
     * Sobald die Funktion "isHurt" false zurückgibt(nach 0.75 Sekunden), wird die Animation gestoppt.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.75;
    }


    /**
     * This function is used to return true
     */
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
}