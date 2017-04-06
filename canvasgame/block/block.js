let myGamePiece;
let myUpBtn;
let myDownBtn;
let myLeftBtn;
let myRightBtn;

let myGameArea = {
    canvas: document.createElement('canvas'),
    start: function () {
        this.canvas.width = 300;
        this.canvas.height = 270;
        // this.canvas.style.cursor = "pointer";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 50);
        //鼠标移动事件
        // window.addEventListener('mousemove', function (e) {
        //     myGameArea.x = e.pageX;
        //     myGameArea.y = e.pageY;
        // })
        //键盘事件
        // window.addEventListener('keydown', function (e) {
        //     myGameArea.keys = (myGameArea.keys || []);
        //     myGameArea.keys[e.keyCode] = true;
        // })
        // window.addEventListener('keyup', function (e) {
        //     myGameArea.keys[e.keyCode] = false;
        // })
        //鼠标事件 触摸事件
        window.addEventListener("mousedown", function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
            console.log(e.pageX + " " + e.pageY)
        })
        window.addEventListener("mouseup", function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })
        window.addEventListener("touchstart", function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        window.addEventListener("touchend", function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })

    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.clicked = function () {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let clicked = true;
        if ((mybottom < myGameArea.y) || (mytop > myGameArea.y)
            || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
            clicked = false;
        }
        return clicked;
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    // myGamePiece.speedX = 0;
    // myGamePiece.speedY = 0;
    // if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -1; }
    // if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 1; }
    // if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -1; }
    // if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 1; }
    // myGamePiece.newPos();
    // if (myGameArea.x && myGameArea.y) {
    //     myGamePiece.x = myGameArea.x;
    //     myGamePiece.y = myGameArea.y;
    // }
    if (myGameArea.x && myGameArea.y) {
        if (myUpBtn.clicked()) {
            myGamePiece.y -= 1;
        }
        if (myDownBtn.clicked()) {
            myGamePiece.y += 1;
        }
        if (myLeftBtn.clicked()) {
            myGamePiece.x += -1;
        }
        if (myRightBtn.clicked()) {
            myGamePiece.x += 1;
        }
    }
    myUpBtn.update();
    myDownBtn.update();
    myLeftBtn.update();
    myRightBtn.update();
    myGamePiece.update();
}

function stopMove() {
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}

function moveup() {
    myGamePiece.speedY -= 1;
}

function movedown() {
    myGamePiece.speedY += 1;
}

function moveleft() {
    myGamePiece.speedX -= 1;
}

function moveright() {
    myGamePiece.speedX += 1;
}

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myUpBtn = new component(30, 30, "blue", 50, 10);
    myDownBtn = new component(30, 30, "blue", 50, 70);
    myLeftBtn = new component(30, 30, "blue", 20, 40);
    myRightBtn = new component(30, 30, "blue", 80, 40);
    myGameArea.start();
}
window.onload = function () {
    startGame();
}