const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const c_width  = 600;
const c_height = 600;

const box = {
    x: 10,
    y: 10,
    width: 50,
    height: 50,
    color: "#000",
    speed: 1,
    dir: 1,
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    update: function() {
        if (this.x >= (c_width - this.width)) {
            this.dir = -1;
        }else {
            this.dir = 1;
        }
        this.x += (1 * this.speed) * this.dir;
    }
}

canvas.width  = c_width;
canvas.height = c_height;

function clear() {
    ctx.clearRect(0, 0, c_width, c_height);
}

function update() {
    clear();
    box.draw();
    box.update();

    requestAnimationFrame(update);
}

update();