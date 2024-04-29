let gameContainer =  document.querySelector(".game-container");



let foodX,foodY;
let headX = 12,headY = 12;
let velocityX=0,velocityY=0;

function generateFood(){
    foodX = Math.floor(Math.random()*25 +1);
    foodY = Math.floor(Math.random()*25 +1);
}



function renderGame(){
    let updatedGame = `<div class="food" style="grid-area: ${foodY}/${foodX};"></div>  `;

    headX+=velocityX;
    headY+=velocityY;

    updatedGame += `<div class="snake" style="grid-area: ${headY}/${headX};"></div>  `;

    gameContainer.innerHTML = updatedGame;
}

generateFood();
setInterval(renderGame,150);


document.addEventListener("keydown",function(e){
    console.log(e.key);

    let key = e.key;

    if(key == "ArrowUp"){
        velocityX = 0;
        velocityY = -1;
    }
    else if(key == "ArrowDown"){
        velocityX = 0;
        velocityY = 1;
    }
    else if(key == "ArrowLeft"){
        velocityY = 0;
        velocityX = -1;
    }
    else if(key == "ArrowRight" ){
        velocityY = 0;
        velocityX = 1;
    }

})