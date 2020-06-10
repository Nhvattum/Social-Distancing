/* --------------- DOM References --------------- */
let game = document.getElementById("game");
game.width = 1000;
game.height = 600;

let socialDistancing = document.getElementById("socialDistancing");



let ctx = game.getContext("2d");

/* --------------- Characters ------------------- */
function Character(x, y, color, width, height) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.width = width;
    this.height = height;
    this.alive = true;
    this.render = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
let player = new Character(475, 171, "hotpink", 40, 40);

// will travel up and down
let virus1 = new Character(45, 0, "green", 50, 50);
let virus2 = new Character(905, 550, "green", 50, 50);

// will travel left and right
let virus3 = new Character(472, 81, "green", 50, 50);
let virus4 = new Character(472, 450, "green", 50, 50);

// face masks (WON'T BE ABLE TO MOVE)
let mask1 = new Character(2, 2, "blue", 30, 20);
let mask2 = new Character(600, 50, "blue", 30, 20);
let mask3 = new Character(325, 525, "blue", 30, 20);
let mask4 = new Character(968, 280, "blue", 30, 20);
let mask5 = new Character(600, 375, "blue", 30, 20);
let mask6 = new Character(2, 280, "blue", 30, 20);
let mask7 = new Character(2, 578, "blue", 30, 20);
let mask8 = new Character(968, 2, "blue", 30, 20);
let mask9 = new Character(968, 578, "blue", 30, 20);
let mask10 = new Character(325, 185, "blue", 30, 20);

/* ------------- Detecting Edges --------------- */

function playingGame() {
    ctx.clearRect(0, 0, game.width, game.height);
    console.log(player.x, player.y);
    detectWalls();
    // detectBox();
    player.render();
    virus1.render();
    virus2.render();
    virus3.render();
    virus4.render();
    mask1.render();
    mask2.render();
    mask3.render();
    mask4.render();
    mask5.render();
    mask6.render();
    mask7.render();
    mask8.render();
    mask9.render();
    mask10.render();
    detectVirus1();
    detectVirus2();
    detectVirus3();
    detectVirus4();
    
    if (player.alive) {
        console.log("It's all good");
        // TODO: make this
        // detectHit()
    } else {
        endGame();
    }
}

function detectWalls() {
    if (player.x < 0) {
        player.x = 0;
        console.log("Outside the border");
    } else if (player.x + player.width > 1000) {
        player.x = 1000 - player.width;
        console.log("Outside the border");
    } else if (player.y < 0) {
        player.y = 0;
        console.log("Outside the border");
    } else if (player.y + player.height > 600) {
        player.y = 560;
        console.log("Outside the border");
    }
}

// function detectBox() {
//     if (player.x >= 0 && player.x <= 59) {

//     }
//         && player.y >= 171
//         && player.y <=
//         }
// }


/* ------------- Detecting Characters ---------------- */
function detectVirus1() {
    if (player.x + player.width > virus1.x
    && player.x < virus1.x + virus1.width
    && player.y < virus1.y + virus1.height
    && player.y + player.height > virus1.y) {

    player.alive = false;
    }
}

function detectVirus2() {
    if (player.x + player.width > virus2.x
    && player.x < virus2.x + virus2.width
    && player.y < virus2.y + virus2.height
    && player.y + player.height > virus2.y) {

    player.alive = false;
    }
}

function detectVirus3() {
    if (player.x + player.width > virus3.x
    && player.x < virus3.x + virus3.width
    && player.y < virus3.y + virus3.height
    && player.y + player.height > virus3.y) {

    player.alive = false;
    }
}

function detectVirus4() {
    if (player.x + player.width > virus4.x
    && player.x < virus4.x + virus4.width
    && player.y < virus4.y + virus4.height
    && player.y + player.height > virus4.y) {

    player.alive = false;
    }
}

function endGame() {
    clearInterval(gameLoop);
    console.log('It is finished')
}

let gameLoop = setInterval(playingGame, 100);

/* ------------- Moving Player ---------------- */

document.addEventListener("keydown", movePlayer);

function movePlayer(e) {
    switch(e.key) {
        case "w":
            //player.y decrement
            player.y-=3;
            break;
        case "d":
            //player.x increment
            player.x+=3;
            break;
        case "s":
            //player.y increment
            player.y+=3;
            break;
        case "a":
            //player.x decrement
            player.x-=3;
            break;
    }
}