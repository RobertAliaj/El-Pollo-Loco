class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottle;
    coins;
    level_end_x = 719 * 4 - 270; 

    constructor(enemies, clouds, backgroundObjects, bottle, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottle = bottle;
        this.coins = coins;
    }
}