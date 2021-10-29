class Node {
    constructor(parent, x, y) {
        this.parent = parent;
        this.x = x;
        this.y = y;
    }

    equals(other) {
        return this.x == other.x && this.y == other.y;
    }
}