score = 0;
cross = true;

// music play
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');

setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function(e){
    // console.log("key code is : ", e.keyCode)
    if(e.keyCode == 38){
        // up arrow key
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if(e.keyCode == 39){
        // up arrow key
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 120 + "px";
    }
    if(e.keyCode == 37){
        // up arrow key
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 120 + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino'); 
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if(offsetX < 73 && offsetY < 52){
        gameOver.innerHTML = "Game Over <br> Reload to play again";
        gameOver.classList.add('over');
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audio.pause();
            audiogo.pause();
            gameOver.classList.remove('over');
        }, 2000);
    }
    else if(offsetX < 145 && cross){
        score += 10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }

}, 100);

function updateScore(score){
    scoreCount.innerHTML = "Your Score : " + score;
}