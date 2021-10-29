class Cart {
    constructor(x, y, speed, id) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.id = id;
        this.prev = new Node(null, x, y);
        this.cart = document.getElementById(id);
    }

    moveCart(speed, x, y) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.cart.style["top"] = `${x}px`;
                this.cart.style["left"] = `${y}px`;
                resolve();
            }, speed);
        })
    }

    radToDegree(rad) {
        return (rad * 180) / Math.PI;
    }

    rideCart(node) {
        var cellWidth = $(window).width() / 16;
        return new Promise(async (resolve) => {
            var dy = node.x - this.prev.x;
            var dx = node.y - this.prev.y;
            var currentX = node.x * cellWidth - cellWidth / 4;
            var currentY = node.y * cellWidth - cellWidth / 4;
            for (var j = 0; j < parseInt(cellWidth); j++) {
                await this.moveCart(this.speed, currentX + j * dy, currentY + j * dx);
            }
            this.prev = node;
            resolve();
        });
    }

    followPath(path) {
        return new Promise(async (resolve) => {
            var kmLeft = (path.length * 0.33).toFixed(1);
            for (var node of path) {
                await this.rideCart(node);
                kmLeft = (kmLeft - 0.33).toFixed(1);
            }
            resolve();
        });
    }
}