class adshgj {


    //character 
    longIdle = 8;

    //character
    checkCharLongIdle() {
        return !world.gamePaused && this.characterStartLongIdling(this.longIdle) && this.lastKeyPress > 0 && !this.isDead();
    }


    // moveable Object
    lastKeyPress;

    // movable object
    characterStartLongIdling(idleTime) {
        let timepassed = new Date().getTime() - this.lastKeyPress; // difference in ms
        timepassed = timepassed / 1000; // difference in seconds
        return timepassed > idleTime;
    };




    //worldClass
    lastKeyPressTimer() {
        if (this.checkWhichKeyIsPressed()) {
            this.character.lastKeyPress = new Date().getTime();
        }
    }

    // worldClass
    checkWhichKeyIsPressed() {
        return keyboard.LEFT || keyboard.RIGHT || keyboard.UP || keyboard.DOWN || keyboard.SPACE || keyboard.D
    }



}
