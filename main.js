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

/* ------------- Game Loop Stuff --------------- */

function playingGame() {
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
    
    if (player.alive) {
        console.log("It's all good");
        // TODO: make this
        // detectHit()
    } else {
        endGame();
    }
}

function endGame() {
    clearInterval(gameLoop);
    console.log('It is finished')
}

let gameLoop = setInterval(playingGame, 60);

/* ------------- Moving Player ---------------- */

const movementHandler = (e) => {
    switch(e.key) {
        case "w":
            //hero.y decrement
            hero.y-=3;
            break;
        case "d":
            //hero.x increment
            hero.x+=3;
            break;
        case "s":
            //hero.y increment
            hero.y+=3;
            break;
        case "a":
            //hero.x decrement
            hero.x-=3;
            break;
    }
}