class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    lastHit = 0;
    energy = 100;


    characterIsFalling() {
        return this.speedY < 0;
    };


    hit() {
        this.energy -= this instanceof Endboss ? 15 : 2;
        this.energy < 0 ? this.energy = 0 : this.lastHit = new Date().getTime();
    }


    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return this instanceof Character ? timePassed < 0.75 : timePassed < 1;
    }


    isDead() {
        return this.energy <= 0;
    }


    playAnimations(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    applyGravity() {
        setInterval(() => this.gravity(), 1000 / 25);
    }


    gravity() {
        this.isInAir() ? this.updateVerticalPosition() : this.landOnGround();
    }


    isInAir() {
        return this.isAboveGround() || this.speedY > 0;
    }


    updateVerticalPosition() {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
    }


    landOnGround() {
        if (this instanceof Character) {
            this.speedY = 0;
            this.y = 220;
        }
    }


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
        this.speedY = 10;
    }


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