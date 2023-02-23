class Level {
    enemies;
    smallChicken;
    clouds;
    backgroundObjects;
    bottle;
    coins;
    level_end_x = 719 * 4 - 270;

    constructor(enemies, smallChicken, clouds, backgroundObjects, bottle, coins) {
        this.enemies = enemies;
        this.smallChicken = smallChicken;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottle = bottle;
        this.coins = coins;
    }
}