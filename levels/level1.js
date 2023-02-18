const level1 = new Level(
    [
        // hier passiert das gleiche wie oben mit dem Character, nur heir passiert das 3 mal
        // das heißt es werden 3 Chicken erstellt und für jedes chicken läuft "chicken.class.js" ein mal komplett durch
        // für jedes Chicken werden 3 Bilder von dem Chicken zur Verfügung gestellt und animiert (laufen)
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],

    [
        // hier passiert das gleiche, nur heir passiert das mehrmals
        new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 0),
        new Cloud('img/5_background/layers/4_clouds/2.png', 720 * 1),
        new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 2),
        new Cloud('img/5_background/layers/4_clouds/2.png', 720 * 3),
        new Cloud('img/5_background/layers/4_clouds/1.png', 720 * 4),
        new Cloud('img/5_background/layers/4_clouds/2.png', 720 * 5),
    ],

    [
        // hier wird die Klasse "BackgroundObject" x mal erstellt
        // jedes sie kriegt immer wieder neue source mit neuer x-koordinate
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
        new Coin('img/8_coin/coin_1.png', 200),
        new Coin('img/8_coin/coin_1.png', 300),
        new Coin('img/8_coin/coin_2.png', 400),
        new Coin('img/8_coin/coin_1.png', 500),
        new Coin('img/8_coin/coin_2.png', 600),
        new Coin('img/8_coin/coin_2.png', 700),
        new Coin('img/8_coin/coin_1.png', 1500),
        new Coin('img/8_coin/coin_1.png', 1600),
        new Coin('img/8_coin/coin_2.png', 1700),
        new Coin('img/8_coin/coin_2.png', 1800),
        new Coin('img/8_coin/coin_2.png', 1900),
        new Coin('img/8_coin/coin_1.png', 2000),
        new Coin('img/8_coin/coin_1.png', 950),
        new Coin('img/8_coin/coin_2.png', 1000),
        new Coin('img/8_coin/coin_1.png', 1000),
        new Coin('img/8_coin/coin_2.png', 800)
    ]
);