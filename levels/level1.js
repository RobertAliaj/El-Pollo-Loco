let level1;

function initLevel() {

    level1 = new Level(
        [
            new Chicken(900),
            new Chicken(1100),
            new Chicken(1200),
            new Chicken(1300),
            new Chicken(1700),
            new Chicken(1800),
            new Chicken(2200),
            new Chicken(2400),
            new Endboss()
        ],

        [
            new SmallChicken(800),
            new SmallChicken(850),
            new SmallChicken(1500),
            new SmallChicken(1550),
            new SmallChicken(2050),
            new SmallChicken(2100)
        ],

        [
            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 0),
            new Cloud('img/5_background/layers/4_clouds/2.png', 720 * 1),
            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 2),
            new Cloud('img/5_background/layers/4_clouds/2.png', 720 * 3),
            new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 4),
            new Cloud('img/5_background/layers/4_clouds/2.png', 720 * 5),
        ],

        [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
        ],

        [
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 0),
            new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 200),
            new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 400),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 600),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 800),
            new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1000),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 1200),
            new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1400),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 1600),
            new Bottle('img/6_salsa_bottle/2_salsa_bottle_on_ground.png', 1800),
            new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 2000)
        ],
        [
            new Coin('img/8_coin/coin_2.png', 520, 160),
            new Coin('img/8_coin/coin_2.png', 620, 160),
            new Coin('img/8_coin/coin_2.png', 720, 160),
            new Coin('img/8_coin/coin_2.png', 820, 160),
            new Coin('img/8_coin/coin_2.png', 920, 160),

            new Coin('img/8_coin/coin_1.png', 1200, 190),
            new Coin('img/8_coin/coin_1.png', 1300, 160),
            new Coin('img/8_coin/coin_2.png', 1400, 130),
            new Coin('img/8_coin/coin_1.png', 1500, 160),
            new Coin('img/8_coin/coin_1.png', 1600, 190),

            new Coin('img/8_coin/coin_2.png', 1900, 200),
            new Coin('img/8_coin/coin_2.png', 2000, 200),
            new Coin('img/8_coin/coin_1.png', 2100, 200),
            new Coin('img/8_coin/coin_1.png', 2200, 200),
            new Coin('img/8_coin/coin_2.png', 2300, 200),
            new Coin('img/8_coin/coin_2.png', 2400, 200),
        ]
    )
}