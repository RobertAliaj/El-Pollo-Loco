function preloadResources() {
    document.getElementById('preLoadedResources').innerHTML = loadResources();
}

function loadResources() {
    return `
    <img src="img/2_character_pepe/1_idle/idle/I-1.png">
    <img src="img/2_character_pepe/1_idle/idle/I-2.png">
    <img src="img/2_character_pepe/1_idle/idle/I-3.png">
    <img src="img/2_character_pepe/1_idle/idle/I-4.png">
    <img src="img/2_character_pepe/1_idle/idle/I-5.png">
    <img src="img/2_character_pepe/1_idle/idle/I-6.png">
    <img src="img/2_character_pepe/1_idle/idle/I-7.png">
    <img src="img/2_character_pepe/1_idle/idle/I-8.png">
    <img src="img/2_character_pepe/1_idle/idle/I-9.png">
    <img src="img/2_character_pepe/1_idle/idle/I-10.png">

    <img src="img/2_character_pepe/1_idle/long_idle/I-11.png">
    <img src="img/2_character_pepe/1_idle/long_idle/I-12.png">
    <img src="img/2_character_pepe/1_idle/long_idle/I-13.png">
    <img src="img/2_character_pepe/1_idle/long_idle/I-14.png">
    <img src="img/2_character_pepe/1_idle/long_idle/I-15.png">
    <img src="img/2_character_pepe/1_idle/long_idle/I-16.png">
    <img src="img/2_character_pepe/1_idle/long_idle/I-17.png">
    <img src="img/2_character_pepe/1_idle/long_idle/I-18.png">
    <img src="img/2_character_pepe/1_idle/long_idle/I-19.png">
    <img src="img/2_character_pepe/1_idle/long_idle/I-20.png">

    <img src="img/2_character_pepe/2_walk/W-21.png">
    <img src="img/2_character_pepe/2_walk/W-22.png">
    <img src="img/2_character_pepe/2_walk/W-23.png">
    <img src="img/2_character_pepe/2_walk/W-24.png">
    <img src="img/2_character_pepe/2_walk/W-25.png">
    <img src="img/2_character_pepe/2_walk/W-26.png">

    <img src="img/2_character_pepe/3_jump/J-31.png">
    <img src="img/2_character_pepe/3_jump/J-32.png">
    <img src="img/2_character_pepe/3_jump/J-33.png">
    <img src="img/2_character_pepe/3_jump/J-34.png">
    <img src="img/2_character_pepe/3_jump/J-35.png">
    <img src="img/2_character_pepe/3_jump/J-36.png">
    <img src="img/2_character_pepe/3_jump/J-37.png">
    <img src="img/2_character_pepe/3_jump/J-38.png">
    <img src="img/2_character_pepe/3_jump/J-39.png">

    <img src="img/2_character_pepe/4_hurt/H-41.png">
    <img src="img/2_character_pepe/4_hurt/H-42.png">
    <img src="img/2_character_pepe/4_hurt/H-43.png">

    <img src="img/2_character_pepe/5_dead/D-51.png">
    <img src="img/2_character_pepe/5_dead/D-52.png">
    <img src="img/2_character_pepe/5_dead/D-53.png">
    <img src="img/2_character_pepe/5_dead/D-54.png">
    <img src="img/2_character_pepe/5_dead/D-55.png">
    <img src="img/2_character_pepe/5_dead/D-56.png">
    <img src="img/2_character_pepe/5_dead/D-57.png">

    <img src="img/3_enemies_chicken/chicken_normal/1_walk/1_w.png">
    <img src="img/3_enemies_chicken/chicken_normal/1_walk/2_w.png">
    <img src="img/3_enemies_chicken/chicken_normal/1_walk/3_w.png">
    <img src="img/3_enemies_chicken/chicken_normal/2_dead/dead.png">

    <img src="img/3_enemies_chicken/chicken_small/1_walk/1_w.png">
    <img src="img/3_enemies_chicken/chicken_small/1_walk/2_w.png">
    <img src="img/3_enemies_chicken/chicken_small/1_walk/3_w.png">
    <img src="img/3_enemies_chicken/chicken_small/2_dead/dead.png">

    <img src="img/4_enemie_boss_chicken/1_walk/G1.png">
    <img src="img/4_enemie_boss_chicken/1_walk/G2.png">
    <img src="img/4_enemie_boss_chicken/1_walk/G3.png">
    <img src="img/4_enemie_boss_chicken/1_walk/G4.png">

    <img src="img/4_enemie_boss_chicken/3_attack/G13.png">
    <img src="img/4_enemie_boss_chicken/3_attack/G14.png">
    <img src="img/4_enemie_boss_chicken/3_attack/G15.png">
    <img src="img/4_enemie_boss_chicken/3_attack/G16.png">
    <img src="img/4_enemie_boss_chicken/3_attack/G17.png">
    <img src="img/4_enemie_boss_chicken/3_attack/G18.png">
    <img src="img/4_enemie_boss_chicken/3_attack/G19.png">
    <img src="img/4_enemie_boss_chicken/3_attack/G20.png">

    <img src="img/4_enemie_boss_chicken/4_hurt/G21.png">
    <img src="img/4_enemie_boss_chicken/4_hurt/G22.png">
    <img src="img/4_enemie_boss_chicken/4_hurt/G23.png">

    <img src="img/4_enemie_boss_chicken/5_dead/G24.png">
    <img src="img/4_enemie_boss_chicken/5_dead/G25.png">
    <img src="img/4_enemie_boss_chicken/5_dead/G26.png">

    <img src="img/5_background/layers/1_first_layer/1.png">
    <img src="img/5_background/layers/1_first_layer/2.png">

    <img src="img/5_background/layers/2_second_layer/1.png">
    <img src="img/5_background/layers/2_second_layer/2.png">

    <img src="img/5_background/layers/3_third_layer/1.png">
    <img src="img/5_background/layers/3_third_layer/2.png">

    <img src="img/5_background/layers/4_clouds/1.png">
    <img src="img/5_background/layers/4_clouds/2.png">
    <img src="img/5_background/layers/air.png">

    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png">
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png">
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png">
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png">
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png">
    <img src="img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png">

    <img src="img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png">
    <img src="img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png">
    <img src="img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png">
    <img src="img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png">

    <img src="img/6_salsa_bottle/1_salsa_bottle_on_ground.png">
    <img src="img/6_salsa_bottle/2_salsa_bottle_on_ground.png">

    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png">

    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png">
    <img src="img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png">

    <img src="img/7_statusbars/3_icons/icon_health_endboss.png">
    <img src"img/7_statusbars/3_icons/icon_salsa_bottle.png">

    <img src="img/8_coin/coin_1.png">
    <img src="img/8_coin/coin_2.png">

    <img src="img/bg-image/2.png">

    <img src="img/keys/key-d-of-a-keyboard.png">
    <img src="img/keys/left-arrow.png">
    <img src="img/keys/right-arrow.png">

    <img src="img/Numbers/number-0.png">
    <img src="img/Numbers/number-1.png">
    <img src="img/Numbers/number-2.png">
    <img src="img/Numbers/number-3.png">
    <img src="img/Numbers/number-4.png">
    <img src="img/Numbers/number-5.png">
    <img src="img/Numbers/number-6.png">
    <img src="img/Numbers/number-7.png">
    <img src="img/Numbers/number-8.png">
    <img src="img/Numbers/number-9.png">
    <img src="img/Numbers/number-10.png">
    <img src="img/Numbers/number-11.png">
    <img src="img/Numbers/number-12.png">
    <img src="img/Numbers/number-13.png">
    <img src="img/Numbers/number-14.png">
    <img src="img/Numbers/number-15.png">
    <img src="img/Numbers/number-16.png">

    <img src="img/9_intro_outro_screens/game_over/game over!.png">
    <img src="img/9_intro_outro_screens/game_over/winner.png">

    <img src="img/9_intro_outro_screens/start/back.png">
    <img src="img/9_intro_outro_screens/start/console.png">
    <img src="img/9_intro_outro_screens/start/full-screen.png">
    <img src="img/9_intro_outro_screens/start/info .png">
    <img src="img/9_intro_outro_screens/start/jump.png">
    <img src="img/9_intro_outro_screens/start/left.png">
    <img src="img/9_intro_outro_screens/start/logout.png">
    <img src="img/9_intro_outro_screens/start/minimize.png">
    <img src="img/9_intro_outro_screens/start/mute.png">
    <img src="img/9_intro_outro_screens/start/mute.png">
    <img src="img/9_intro_outro_screens/start/pause.png">
    <img src="img/9_intro_outro_screens/start/play.png">
    <img src="img/9_intro_outro_screens/start/right.png">
    <img src="img/9_intro_outro_screens/start/rotate-smartphone.png">
    <img src="img/9_intro_outro_screens/start/script.png">
    <img src="img/9_intro_outro_screens/start/startscreen_1.png">
    <img src="img/9_intro_outro_screens/start/startscreen_2.png">
    <img src="img/9_intro_outro_screens/start/throw.png">
    <img src="img/9_intro_outro_screens/start/volume-up-interface-symbol.png">


    <audio src="audio/audio_coin.mp3"></audio>
    <audio src="audio/audio_glass.mp3"></audio>
    <audio src="audio/collect_bottle.mp3"></audio>
    <audio src="audio/hit_chicken.mp3"></audio>
    <audio src="audio/jump.mp3"></audio>
    <audio src="audio/pepe-get-git.wav"></audio>
    <audio src="audio/theme-song.mp3"></audio>
    <audio src="audio/walking.mp3"></audio>
    `;
}