class CoinBar extends DrawableObject {

    collectedCoins = 0;

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
        'img/Numbers/number-12.png',
        'img/Numbers/number-13.png',
        'img/Numbers/number-14.png',
        'img/Numbers/number-15.png',
        'img/Numbers/number-16.png'
    ]

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLE_AMOUNT);
        this.x = 70;
        this.y = 119;
        this.width = 25;
        this.height = 25;
        this.setCoinNumber(0);
    }

    setCoinNumber(collectedCoins) {
        this.collectedCoins = collectedCoins;
        let path = this.IMAGES_BOTTLE_AMOUNT[this.bottleIndex()];
        this.img = this.imageCache[path];
    }

    bottleIndex() {
        return this.collectedCoins;
    }
}