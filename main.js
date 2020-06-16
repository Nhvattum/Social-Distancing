/* --------------- DOM References --------------- */
let game = document.getElementById("game");
game.width = 1000;
game.height = 600;

let socialDistancing = document.getElementById("socialDistancing");
let scoreBox = document.getElementById("score");
let score = 000
let start = document.getElementById("startGame")
let ctx = game.getContext("2d");

/* --------------- Character images ----------------- */
let playerImg = new Image();
playerImg.src = "img/player1.png";

let virusImg = new Image();
virusImg.src = "img/virus.png";

let maskImg = new Image();
maskImg.src = "img/mask1.png";

/* ------------------ Audio -------------------- */
// Yashoma, Dave, W3 school, and stackoverflow helped me with coding the audio
let menuMusic = document.createElement("audio");
menuMusic.src = "Audio/menu.mp3";

let gameMusic = document.createElement("audio");
gameMusic.src = "Audio/game.wav";

let maskSound = document.createElement("audio");
maskSound.src = "Audio/maskSound.wav";

let applauseSound = document.createElement("audio");
applauseSound.src = "Audio/applause.wav"

let gameOverSound = document.createElement("audio");
gameOverSound.src = "Audio/gameOver.wav"

/* --------------- Characters ------------------- */
// I learned how to render images from W3 and Mozilla
function Character(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.alive = true;
    this.img = img;
    this.render = function() {
        ctx.drawImage(this.img, this.x, this.y)
    }
}

let player = new Character(475, 171, 40, 40, playerImg);

let virus1 = new Character(45, 0, 50, 50, virusImg);
let virus2 = new Character(905, 550, 50, 50, virusImg);

let virus3 = new Character(472, 81, 50, 50, virusImg);
let virus4 = new Character(472, 450, 50, 50, virusImg);

let mask1 = new Character(2, 2, 30, 20, maskImg);
let mask2 = new Character(600, 50, 30, 20, maskImg);
let mask3 = new Character(325, 525, 30, 20, maskImg);
let mask4 = new Character(968, 280, 30, 20, maskImg);
let mask5 = new Character(600, 375, 30, 20, maskImg);
let mask6 = new Character(2, 280, 30, 20, maskImg);
let mask7 = new Character(2, 578, 30, 20, maskImg);
let mask8 = new Character(968, 2, 30, 20, maskImg);
let mask9 = new Character(968, 578, 30, 20, maskImg);
let mask10 = new Character(325, 185, 30, 20, maskImg);

// Renders all characters
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

// Game active = true is what makes the game only initiate when "Start is clicked"
function clickStart(){
    gameActive = true;
    start.textContent = "GOOD LUCK!";
}

function playingGame() {
    if (gameActive) {
        gameMusic.play();
        ctx.clearRect(0, 0, game.width, game.height);
        init();
        moveVirus();
        scoreBox.textContent = "SCORE: " + score;
        if (player.alive) {
            detectCharacters();
            detectWalls();
            detectBox();
            gameWon();
        } else {
            endGame();
            gameActive = false;
        }
    }
}

/* ------------- Detecting Edges --------------- */
function detectWalls() {
    if (player.x < 0) {
        player.x = 0;
    } else if (player.x + player.width > 1000) {
        player.x = 1000 - player.width;
    } else if (player.y < 0) {
        player.y = 0;
    } else if (player.y + player.height > 600) {
        player.y = 560;
    }
}

// Pete and Yashoma helped me a lot with writting this function
function detectBox() {
    // checking top of box
    if (player.x < 893
        && player.x > 65
        && player.y > 171
        && player.y < 300) {
            player.y = 171;

        // checking bottom of box
    } else if (player.x < 893
        && player.x > 65
        && player.y < 365
        && player.y > 300) {
            player.y = 365;

        // checking left side of box
    } else if (player.y > 171
        && player.y < 360
        && player.x > 59
        && player.x < 500) {
            player.x = 59;

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

// Dave helped me with displaying the masks properly
function collectMask1() {
    if (player.x + player.width > mask1.x
    && player.x < mask1.x + mask1.width
    && player.y < mask1.y + mask1.height
    && player.y + player.height > mask1.y
    && mask1.alive) {
    
        mask1.alive = false
        maskSound.play();
        score = score + 10
    }
}

function collectMask2() {
    if (player.x + player.width > mask2.x
    && player.x < mask2.x + mask2.width
    && player.y < mask2.y + mask2.height
    && player.y + player.height > mask2.y
    && mask2.alive) {

        mask2.alive = false
        maskSound.play();
        score = score + 10
    }
}
function collectMask3() {
    if (player.x + player.width > mask3.x
    && player.x < mask3.x + mask3.width
    && player.y < mask3.y + mask3.height
    && player.y + player.height > mask3.y
    && mask3.alive) {
    
        mask3.alive = false
        maskSound.play();
        score = score + 10
    }
}
function collectMask4() {
    if (player.x + player.width > mask4.x
    && player.x < mask4.x + mask4.width
    && player.y < mask4.y + mask4.height
    && player.y + player.height > mask4.y
    && mask4.alive) {
    
        mask4.alive = false
        maskSound.play();
        score = score + 10
    }
}
function collectMask5() {
    if (player.x + player.width > mask5.x
    && player.x < mask5.x + mask5.width
    && player.y < mask5.y + mask5.height
    && player.y + player.height > mask5.y
    && mask5.alive) {
    
        mask5.alive = false
        maskSound.play();
        score = score + 10
    }
}
function collectMask6() {
    if (player.x + player.width > mask6.x
    && player.x < mask6.x + mask6.width
    && player.y < mask6.y + mask6.height
    && player.y + player.height > mask6.y
    && mask6.alive) {
    
        mask6.alive = false
        maskSound.play();
        score = score + 10
    }
}
function collectMask7() {
    if (player.x + player.width > mask7.x
    && player.x < mask7.x + mask7.width
    && player.y < mask7.y + mask7.height
    && player.y + player.height > mask7.y
    && mask7.alive) {
    
        mask7.alive = false
        maskSound.play();
        score = score + 10
    }
}
function collectMask8() {
    if (player.x + player.width > mask8.x
    && player.x < mask8.x + mask8.width
    && player.y < mask8.y + mask8.height
    && player.y + player.height > mask8.y
    && mask8.alive) {
    
        mask8.alive = false
        maskSound.play();
        score = score + 10
    }
}
function collectMask9() {
    if (player.x + player.width > mask9.x
    && player.x < mask9.x + mask9.width
    && player.y < mask9.y + mask9.height
    && player.y + player.height > mask9.y
    && mask9.alive) {
    
        mask9.alive = false
        maskSound.play();
        score = score + 10;
    }
}
function collectMask10() {
    if (player.x + player.width > mask10.x
    && player.x < mask10.x + mask10.width
    && player.y < mask10.y + mask10.height
    && player.y + player.height > mask10.y
    && mask10.alive) {
    
        mask10.alive = false
        maskSound.play();
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
let virus3Speed = 20;
let virus4Speed = -20;

function moveVirus() {
    if (virus1.y <= 0) {
        virus1Speed = 12;
    } else if (virus1.y >= 550) {
        virus1Speed = -12;
    }
    virus1.y += virus1Speed;

    if (virus2.y <= 0) {
        virus2Speed = 12;
    } else if (virus2.y >= 550) {
        virus2Speed = -12;
    }
    virus2.y += virus2Speed;

    if (virus3.x <= 0) {
        virus3Speed = 20;
    } else if (virus3.x >= 950) {
        virus3Speed = -20;
    }
    virus3.x += virus3Speed;

    if (virus4.x <= 0) {
        virus4Speed = 20;
    } else if (virus4.x >= 950) {
        virus4Speed = -20;
    }
    virus4.x += virus4Speed;
}

/* ---------- Win/Lose Conditions ----------- */
function endGame() {
    clearInterval(gameLoop);
    gameMusic.pause();
    gameOverSound.play();
    menuMusic.play();
    scoreBox.textContent = "INFECTED";
    start.textContent = "RESTART";
}

function gameWon() {
    if (player.alive && score == 100){
        clearInterval(gameLoop);
        gameMusic.pause();
        applauseSound.play();
        menuMusic.play();
        scoreBox.textContent = "Player WINS!";
        gameActive = false;
        start.textContent = "RESTART";
    }
}
start.addEventListener("click", restart);

function restart() {
    if (scoreBox.textContent == "INFECTED"
        || scoreBox.textContent == "Player WINS!") {
            ctx.clearRect(0, 0, game.width, game.height);
            scoreBox.textContent = "Score: 000";
            score = 0;
            player.alive = true;
            player.x = 475;
            player.y = 171;
            mask1.alive = true;
            mask1.x = 2;
            mask1.y = 2;
            mask2.alive = true;
            mask2.x = 600; 
            mask2.y = 50;
            mask3.alive = true;
            mask3.x = 325;
            mask3.y = 525;
            mask4.alive = true;
            mask4.x = 968;
            mask4.y = 280;
            mask5.alive = true;
            mask5.x = 600;
            mask5.y = 375;
            mask6.alive = true;
            mask6.x = 2;
            mask6.y = 280;
            mask7.alive = true;
            mask7.x = 2;
            mask7.y = 578;
            mask8.alive = true;
            mask8.x = 968;
            mask8.y = 2;
            mask9.alive = true;
            mask9.x = 968;
            mask9.y = 578;
            mask10.alive = true;
            mask10.x = 325;
            mask10.y = 185;
            clickStart();
            gameLoop = setInterval(playingGame, 60);
            menuMusic.pause();
    }
}

/* -------------- Mobile Devices ---------------- */
// I left this in because I want to continue to try and implement it.
// The problem I have been facing is that when you hold down on a phone, it opens a menu instead of continuing to press the button

// let up = document.getElementById("up");
// let upLoop;
// let left = document.getElementById("left");
// let right = document.getElementById("right");
// let down = document.getElementById("down");

// function mobileUp() {
//     player.y-=6;
// }

// function mobileLeft() {
//     player.x-=6;
// }

// function mobileRight() {
//     player.x+=6;
// }

// function mobileDown() {
//     player.y+=6;
// }

// up.addEventListener("mousedown", function(e) {
//     mobileUp();
//     upLoop = setInterval(mobileUp, 60);
// });


// up.addEventListener("mouseup", function(e) {
//     clearInterval(upLoop);
// })

