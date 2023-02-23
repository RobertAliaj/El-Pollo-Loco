class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;

    constructor() {
        this.allKeysFalse();
    }

    allKeysFalse() {
        for (const key in this) {
            if (this[key] === true) {
                return false;
            }
        }
        return true;
    }
}