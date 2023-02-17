class Bottlebar extends DrawableObject {

    collectedBottles = 0;

    IMAGES_BOTTLE_AMOUNT = [
        'img/Numbers/number-0.png',
        'img/Numbers/number-1.png',
        'img/Numbers/number-2.png',
        'img/Numbers/number-3.png',
        'img/Numbers/number-4.png',
        'img/Numbers/number-5.png',
        'img/Numbers/number-6.png',
        'img/Numbers/number-7.png',
        'img/Numbers/number-8.png',
        'img/Numbers/number-9.png',
        'img/Numbers/number-10.png',
        'img/Numbers/number-11.png',
        'img/Numbers/number-12.png'
    ]
 
    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE_AMOUNT);
        this.x = 70;
        this.y = 73;
        this.width = 25;
        this.height = 25;
        this.setBottleNumber(0);
    }

    setBottleNumber(collectedBottles) {
        this.collectedBottles = collectedBottles;
        let path = this.IMAGES_BOTTLE_AMOUNT[this.bottleIndex()];
        this.img = this.imageCache[path];
    }

    bottleIndex() {
        return this.collectedBottles;
    }
}