class Character extends MovableObject {

    height = 300;
    width = 150;
    y = 30;
    speed = 5;

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    world;
    walking_sound = new Audio('audio/walking.mp3');


    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');   // lade ein Bild hoch
        this.loadImages(this.IMAGES_WALKING);                       //lade die arrays hoch
        this.loadImages(this.IMAGES_JUMPING);                       //lade die arrays hoch
        this.loadImages(this.IMAGES_DEAD);                          //lade die arrays hoch
        this.loadImages(this.IMAGES_HURT);                          //lade die arrays hoch
        this.applyGravity();                                        // gravitation anwenden
        this.animate();                                             // animiere die Bewegungen
    }


    animate() {

        // dieses Interval ist um zu bewegen und um die Audios zu spielen
        setInterval(() => {
            // this.walking_sound.pause();                                          // jedes mal wenn die funktion aufgerufen wird, soll die audio pausiert werden
            if (this.world.keyboard.RIGHT && this.x < level1.level_end_x) {         // wenn das rechte Pfeiltaste gedrückt wurde UND die x-achse kleiner ist als die Canvas Länge
                this.moveRight();                                                   // dann laufe rechts
                this.otherDirection = false;
                // this.walking_sound.play();                                     // spiele diese Audio
            }

            if (this.world.keyboard.LEFT && this.x > 0) {                        // wenn die linke Pfeiltaste gedrückt wurde UND die x-achse größer ist als null
                this.moveLeft();                                                 // dann laufe links
                this.otherDirection = true;             
                // this.walking_sound.play();                                      // spiele diese Audio
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {           // wenn die Spacetaste gedrückt wurde UND isAboveGround = false ist 
                this.jump();                                                    // dann springe
            }

            this.world.camera_x = -this.x + 100;                                  // "bewege" die Kamera, camera_x ist = 0 - x Koordinate vom Character (120) + 100; An sich wird nicht die Kamera bewegt, sondern das Ganze Bild neu gezeichnet mit den neuen Koordinaten durch die "Camera_x" Variable und die translate Methode
        }, 1000 / 60);                                                          // das wird 60 mal pro sekunde ausgeführt


        // dieses Interval ist nur um die Verschiedenen Bilder anzuzeigen
        setInterval(() => {
            if (this.isDead()) {                                                // wenn isDead ist = true;
                this.playAnimations(this.IMAGES_DEAD);                          // dann spiele die DEAD bilder durch
            } else if (this.isHurt()) {                                         // wenn isHurt = true  
                this.playAnimations(this.IMAGES_HURT);                          // dann spiele die Hurt Bilder durch
            } else if (this.isAboveGround()) {                                  // wenn isAboveGround = true
                this.playAnimations(this.IMAGES_JUMPING);                       // dann spiele die Jumping Bilder durch
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // wenn rechts oder links gedrückt wurde    
                this.playAnimations(this.IMAGES_WALKING);                       // dann speiele die Walk Bilder durch
            } else {
                this.img = this.imageCache['img/2_character_pepe/3_jump/J-39.png']; // ansosnten zeig einfach das stehende bild an
            }
        }, 120);                                                                // jede 120 millisekunden
    }
}


// DRAWABLE OBJECT
// loadImage(path) {
//     this.img = new Image();
//     this.img.src = path;
// }


// loadImages(arr) {
//     arr.forEach(path => {
//         let img = new Image();
//         img.src = path;
//         this.imageCache[path] = img;
//     });
// }




// MOVEABLEOBJECT
// moveRight() {
//     this.x += this.speed;   speed ist = 5, also wird der x um 5 px erhöht
// }


// moveLeft() {
//     this.x -= this.speed;  speed ist = 5, also wird der x um 5 px kleiner/abgezogen
// }


// jump() {
//     this.speedY = 30; 
// }


// applyGravity() {
//     setInterval(() => {
//         if (this.isAboveGround() || this.speedY > 0) {  //wenn isAboveGround ist = true UND speedY ist größer als null
//             this.y -= this.speedY;                      // dann kriegt die y-Achse den Wert von speedY
//             this.speedY -= this.acceleration;           // acceleration = 2.5, also wird die speedY um 2,5 px kleiner
//         }
//     }, 1000 / 25);                                      // das soll 25 mal pro Sekunde ausgeführt werden
// }


// isAboveGround() {                                
//     if (this instanceof ThrowableObject) {              
//         return true;                                    
//     } else {                                             
//         return this.y < 130;                            // return true wenn die y-Achse kleiner ist als 130px
//     }
// };


// playAnimations(images) {                                 // images sind die Bilder arrays
//     let i = this.currentImage % images.length;           // iterire durch die arrays
//     let path = images[i];                                // path ist = ein Bild im array
//     this.img = this.imageCache[path];                    //  this.img ist = jedes mal wenn die Funktion ausgerufen wird das nächste Bild im Array    
//     this.currentImage++;                                 // erhöhe um eins    
// }