class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    lastHit = 0;
    energy = 100;

    /**
     * This function is used to check if the Character is falling
     */
    characterIsFalling() {
        return this.speedY < 0;
    };


    /**
     * This function is used to subtract energy from the Character and Endboss
     * and to register the time when the lastHit happened
     */
    hit() {
        this.energy -= this instanceof Endboss ? 10 : 2;
        this.energy < 0 ? this.energy = 0 : this.lastHit = new Date().getTime();
    }


    /**
     * Determines whether the character is in a hurt state, based on the time elapsed since the character was last hit.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return this instanceof Character ? timePassed < 0.75 : timePassed < 1;
    }


    /**
     * This function is used to 
     */
    isDead() {
        return this.energy <= 0;
    }


    /**
     * Plays an animation by cycling through the given images.
     */
    playAnimations(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * This function is used to apply gravity on different objects
     */
    applyGravity() {
        setInterval(() => this.gravity(), 1000 / 25);
    }

    /**
     * This function is used to apply gravity to the Movable Object by updating its vertical position if it is in the air, or landing it on the ground if it is not.
     */
    gravity() {
        this.isInAir() ? this.updateVerticalPosition() : this.landOnGround();
    }


    /**
     * Determines whether the Movableobject is currently in the air, based on its position and velocity.
     */
    isInAir() {
        return this.isAboveGround() || this.speedY > 0;
    }

    /**
     *This function is used to Update the character's vertical position based on its current speed and acceleration.
     */
    updateVerticalPosition() {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
    }


    /**
     * This function is used to set the Character Back to the ground
     */
    landOnGround() {
        if (this instanceof Character) {
            this.speedY = 0;
            this.y = 220;
        }
    }


    /**
     * This function is used to check if the Movable Object is above ground
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else if (this instanceof SmallChicken) {
            return this.y < 370;
        } else {
            return this.y < 220;
        }
    };


    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    jump() {
        this.speedY = 25;
    }


    smallJump() {
        this.speedY = 15;
    }


    smallChickenJump() {
        this.speedY = 20;
    }


    /**
     * This function is used to check the Collision of an object with another object
     */
    isColliding(obj) {
        return this.charRightCollideObjLeft(obj) &&
            this.charBottomCollideObjTop(obj) &&
            this.charLeftCollideObjRight(obj) &&
            this.charTopCollideObjBottom(obj);
    };


    charRightCollideObjLeft(obj) {
        return this.charRightSide() > this.objLeftSide(obj);
    }


    charRightSide() {
        return this.x + this.width - this.offset.right;
    };


    objLeftSide(obj) {
        return obj.x + obj.offset.left;
    };


    charBottomCollideObjTop(obj) {
        return this.charBottom() > this.objTop(obj);
    };


    charBottom() {
        return (this.y + this.height) - this.offset.bottom;
    };


    objTop(obj) {
        return obj.y + obj.offset.top;
    };


    charLeftCollideObjRight(obj) {
        return this.charLeftSide() < this.objRightSide(obj);
    };


    charLeftSide() {
        return this.x + this.offset.left;
    };


    objRightSide(obj) {
        return (obj.x + obj.width) - obj.offset.right;
    };


    charTopCollideObjBottom(obj) {
        return this.charTop() < this.objBottom(obj);
    };


    charTop() {
        return this.y + this.offset.top;
    };


    objBottom(obj) {
        return (obj.y + obj.height) - obj.offset.bottom;
    };
}