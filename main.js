/* --------------- DOM References --------------- */
let game = document.getElementById("game");
game.width = 1000;
game.height = 600;

let socialDistancing = document.getElementById("socialDistancing");
let scoreBox = document.getElementById("score");
let score = 000
let start = document.getElementById("startGame")
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


function init(){
    player.render();
    virus1.render();
    virus2.render();
    virus3.render();
    virus4.render();
    if (mask1.alive) {
        mask1.render();
    }
    if (mask2.alive) {
        mask2.render();
    }
    if (mask3.alive) {
        mask3.render();
    }
    if (mask4.alive) {
        mask4.render();
    }
    if (mask5.alive) {
        mask5.render();
    }
    if (mask6.alive) {
        mask6.render();
    }
    if (mask7.alive) {
        mask7.render();
    }
    if (mask8.alive) {
        mask8.render();
    }
    if (mask9.alive) {
        mask9.render();
    }
    if (mask10.alive){
        mask10.render();
    }
}

/* ------------- Game Play -------------------*/

let gameLoop = setInterval(playingGame, 60);
let gameActive  = false;

start.addEventListener("click", clickStart)

function clickStart(){
    gameActive = true;
    start.textContent = "GOOD LUCK!";
}

function playingGame() {
    if (gameActive) {
        ctx.clearRect(0, 0, game.width, game.height);
        // console.log(player.x, player.y);
        init();
        moveVirus();
        console.log(score);
        scoreBox.textContent = "SCORE: " + score;
        if (player.alive) {
            detectCharacters();
            detectWalls();
            detectBox();
            gameWon();
        } else {
            endGame();
        }
    }
}

/* ------------- Detecting Edges --------------- */

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

function detectBox() {
    // checking top of box
    if (player.x < 896
        && player.x > 62
        && player.y > 171
        && player.y < 300) {
            player.y = 171;
            console.log("crossed TOP BOX border");

        // checking bottom of box
    } else if (player.x < 896
        && player.x > 62
        && player.y < 365
        && player.y > 300) {
            player.y = 365;
            console.log("crossed BOTTOM BOX border")

        // checking left side of box
    } else if (player.y > 171
        && player.y < 360
        && player.x > 59
        && player.x < 500) {
            player.x = 59;
            console.log("crossed LEFT BOX border")

        // checking right side of box
    } else if (player.y > 171
        && player.y < 360
        && player.x < 900
        && player.x > 500) {
            player.x = 900
    }
}

/* ------------- Detecting Characters ---------------- */

function detectCharacters() {
    detectVirus1();
    detectVirus2();
    detectVirus3();
    detectVirus4();
    collectMask1();
    collectMask2();
    collectMask3();
    collectMask4();
    collectMask5();
    collectMask6();
    collectMask7();
    collectMask8();
    collectMask9();
    collectMask10();
}

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

function collectMask1() {
    if (player.x + player.width > mask1.x
    && player.x < mask1.x + mask1.width
    && player.y < mask1.y + mask1.height
    && player.y + player.height > mask1.y
    && mask1.alive) {
    
        console.log("MASK 1 collected!! 🤿")
        mask1.alive = false
        score = score + 10
    }
}

function collectMask2() {
    if (player.x + player.width > mask2.x
    && player.x < mask2.x + mask2.width
    && player.y < mask2.y + mask2.height
    && player.y + player.height > mask2.y
    && mask2.alive) {

        console.log("MASK 2 collected!! 🤿")
        mask2.alive = false
        score = score + 10
    }
}
function collectMask3() {
    if (player.x + player.width > mask3.x
    && player.x < mask3.x + mask3.width
    && player.y < mask3.y + mask3.height
    && player.y + player.height > mask3.y
    && mask3.alive) {
    
        console.log("MASK 3 collected!! 🤿")
        mask3.alive = false
        score = score + 10
    }
}
function collectMask4() {
    if (player.x + player.width > mask4.x
    && player.x < mask4.x + mask4.width
    && player.y < mask4.y + mask4.height
    && player.y + player.height > mask4.y
    && mask4.alive) {
    
        console.log("MASK 4 collected!! 🤿")
        mask4.alive = false
        score = score + 10
    }
}
function collectMask5() {
    if (player.x + player.width > mask5.x
    && player.x < mask5.x + mask5.width
    && player.y < mask5.y + mask5.height
    && player.y + player.height > mask5.y
    && mask5.alive) {
    
        console.log("MASK 5 collected!! 🤿")
        mask5.alive = false
        score = score + 10
    }
}
function collectMask6() {
    if (player.x + player.width > mask6.x
    && player.x < mask6.x + mask6.width
    && player.y < mask6.y + mask6.height
    && player.y + player.height > mask6.y
    && mask6.alive) {
    
        console.log("MASK 6 collected!! 🤿")
        mask6.alive = false
        score = score + 10
    }
}
function collectMask7() {
    if (player.x + player.width > mask7.x
    && player.x < mask7.x + mask7.width
    && player.y < mask7.y + mask7.height
    && player.y + player.height > mask7.y
    && mask7.alive) {
    
        console.log("MASK 7 collected!! 🤿")
        mask7.alive = false
        score = score + 10
    }
}
function collectMask8() {
    if (player.x + player.width > mask8.x
    && player.x < mask8.x + mask8.width
    && player.y < mask8.y + mask8.height
    && player.y + player.height > mask8.y
    && mask8.alive) {
    
        console.log("MASK 8 collected!! 🤿")
        mask8.alive = false
        score = score + 10
    }
}
function collectMask9() {
    if (player.x + player.width > mask9.x
    && player.x < mask9.x + mask9.width
    && player.y < mask9.y + mask9.height
    && player.y + player.height > mask9.y
    && mask9.alive) {
    
        console.log("MASK 9 collected!! 🤿")
        mask9.alive = false
        score = score + 10;
    }
}
function collectMask10() {
    if (player.x + player.width > mask10.x
    && player.x < mask10.x + mask10.width
    && player.y < mask10.y + mask10.height
    && player.y + player.height > mask10.y
    && mask10.alive) {
    
        console.log("MASK 10 collected!! 🤿")
        mask10.alive = false
        score = score + 10;
    }

}

/* ------------- Player Movement ---------------- */

document.addEventListener("keydown", movePlayer);

function movePlayer(e) {
    switch(e.key) {
        case "w":
            //player.y decrement
            player.y-=6;
            break;
        case "d":
            //player.x increment
            player.x+=6;
            break;
        case "s":
            //player.y increment
            player.y+=6;
            break;
        case "a":
            //player.x decrement
            player.x-=6;
            break;
    }
}

/* ----------- Vurus Movement --------------- */
let virus1Speed;
let virus2Speed;
let virus3Speed = 15;
let virus4Speed = -15;

function moveVirus() {
    if (virus1.y <= 0) {
        virus1Speed = 9;
    } else if (virus1.y >= 550) {
        virus1Speed = -9;
    }
    virus1.y += virus1Speed;

    if (virus2.y <= 0) {
        virus2Speed = 9;
    } else if (virus2.y >= 550) {
        virus2Speed = -9;
    }
    virus2.y += virus2Speed;

    if (virus3.x <= 0) {
        virus3Speed = 15;
    } else if (virus3.x >= 950) {
        virus3Speed = -15;
    }
    virus3.x += virus3Speed;

    if (virus4.x <= 0) {
        virus4Speed = 15;
    } else if (virus4.x >= 950) {
        virus4Speed = -15;
    }
    virus4.x += virus4Speed;
}

/* ---------- Win/Lose Conditions ----------- */

function endGame() {
    clearInterval(gameLoop);
    console.log('You died!')
    scoreBox.textContent = "INFECTED"
}

function gameWon() {
    if (player.alive && score == 100){
        clearInterval(gameLoop);
        console.log("You Win!")
        scoreBox.textContent = "Player WINS!"
    }
}