//Pseudo coding
//Load the Dom -
//Initialize function - main menu screen
//leader board should render each time the player finishes the game. 


document.querySelector(".ship").style.marginLeft = "50%"
const spaceShip = document.querySelector(".ship")
const main = document.querySelector("#main")
const startButton = document.querySelector("#startButton")
const lives = document.querySelector("#live")
const title = document.querySelector("#title")
const killedCounter = document.querySelector("#kill")
const finalScore = document.querySelector('#final-score')
const form = document.querySelector('#form-2')
const formInput = document.querySelector("#name-2")

getScores()

function moveShipLeft() {
    let leftNumbers = spaceShip.style.marginLeft.replace("%", "");
    let left = parseInt(leftNumbers)

    if (left > 3) {

        spaceShip.style.marginLeft = `${left - 1}%`;

    }


}



// document.addEventListener("keydown", function(e){
    
    



// })

function moveShipRight() {
    let leftNumbers = spaceShip.style.marginLeft.replace("%", "");
    let left = parseInt(leftNumbers)

    if (left < 95) {

        spaceShip.style.marginLeft = `${left + 1}%`;

    }


}



// document.addEventListener("keydown", function(e){
    
   



// })

function shootMissile() {
    
        const shipPosition = spaceShip.style.marginLeft.replace("%", "")
        // const shipPositionNum = parseInt(shipPosition)
        const missile = document.createElement('img')
        missile.src = '../mod3project/assets/missile.png'
        missile.className = "missile"
        missile.style.top = "90%"
        missile.style.left = spaceShip.getBoundingClientRect().left + 12 + "px"
        // missile.style.marginLeft = `${shipPositionNum + 1}%`
        // missile.style.marginTop = "75%";
        const intervalId = setInterval(function(){
            
            const missileMove = missile.style.top.replace("%", "")
            const missileMoveNum = parseInt(missileMove)
            missile.style.top = `${missileMoveNum - 5}%`
            
           

            if ( parseInt(missile.style.top.replace("%", "")) < 0 ) {
                missile.remove()
                clearInterval(intervalId)
            }
            
        }, 20)

        main.append(missile)
    
    
    }

document.addEventListener("keydown", function(e){
    
    if (e.key === "f") {
            
            shootMissile()
            
        }  
    if(e.key === "ArrowRight") {
            moveShipRight()
    
        }

    if(e.key === "ArrowLeft") {
            moveShipLeft()
    
        }

})


function startGame() {
    
    
    
    const newAlien = document.createElement("img")
    newAlien.src = '../mod3project/assets/alien.png'
    newAlien.className = "alien"
    newAlien.style.left = `${Math.floor(Math.random() * 750) + 400}px`
    // newAlien.style.left = `500px`
    newAlien.style.top = "-1%"
    
            
    
    alienMovementFunc(newAlien)
    main.append(newAlien)
    destroyAliens()
    
}


function alienMovementFunc(newAlien) {
    
                

    let rand = Math.floor(Math.random() * 110) + 40
        
        const alienMovement = setInterval(function() {
            
            

        const newAlienHeight = newAlien.style.top.replace("%", "")
        const newAlienHeightNum = parseInt(newAlienHeight)
        newAlien.style.top = `${newAlienHeightNum + 1}%`


        if (newAlien.style.top === '100%' ) {
            
            newAlien.remove()
            lives.innerText = parseInt(lives.innerText) - 1
            
        }


        if (lives.innerHTML === "0") {

            clearInterval(alienMovement)
            startButton.disabled = false
            startButton.style.opacity = "1"
            const getRidOfAliens = document.querySelectorAll(".alien")
            getRidOfAliens.forEach(alien => alien.remove())
            div_show()
        }
        }, rand)}



function destroyAliens() {
    setInterval(function(){

    const missiles = document.getElementsByClassName("missile")
        const aliens = document.getElementsByClassName("alien")

    for (let i = 0; i<aliens.length; i++){
   
        
        
        for (let k = 0; k<missiles.length; k++){
            if (aliens[i]){
            const alien = aliens[i];
            
            const naNmbrleft =  Math.floor(parseInt(alien.style.left.replace("px","")))
            const naPerctNmbrtop = Math.floor(parseInt(alien.style.top.replace("%","")))
            
            

            if (missiles[k]){
                const missileNmbrleft = (parseInt(missiles[k].style.left.replace("px", "")))
                const missilePerctNmbrtop = Math.floor(parseInt(missiles[k].style.top.replace("%","")));
            
                if ((naPerctNmbrtop - missilePerctNmbrtop <12 && naPerctNmbrtop - missilePerctNmbrtop >-14)&&(naNmbrleft - missileNmbrleft <0 && naNmbrleft - missileNmbrleft > -45)){ 
                    killedCounter.innerText = parseInt(killedCounter.innerText) + 1
                    const finishLeft = alien.style.left
                    const finishTop = alien.style.top
                    const explosion = document.createElement("img")
                    explosion.src = "../mod3project/assets/boom.png"
            
                    
                    
                    explosion.className = "exp"
                    explosion.style.left = finishLeft
                    explosion.style.top = finishTop
                    
                    alien.remove()
                    alien.style.top = null  //sorry
                     main.append(explosion)

                        
                        missiles[k].remove()
                        
                        
                    setTimeout(function() { explosion.remove() }, 1000);}
            } 
            }
            

       
        }}}, 100)}



startButton.addEventListener("click", function(){
    killedCounter.innerText = "0"
    lives.innerHTML = "3"
    var i = 0
    
    function spawnLoop () {           //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout when the loop is called
           startGame()
                     //  your code here
           i++;                     //  increment the counter
           if (i < 80) {  
               if (lives.innerHTML === "0") {
                    clearTimeout(spawnLoop)
               } else {
                spawnLoop();
               }        //  if the counter < 10, call the loop function
                          //  ..  again which will trigger another 
           }                        //  ..  setTimeout()
        }, 1000)
     }

     spawnLoop();                      //  start the loop

        startButton.disabled = true
        startButton.style.opacity = "0.5"

      
    
})

// if (missile.getBoundingClientRect().x === newAlien.getBoundingClientRect().x && missile.getBoundingClientRect().y === newAlien.getBoundingClientRect().y) {
//     newAlien.remove()
// }



function div_show() {
    finalScore.innerText = `You scored: ${killedCounter.innerText}`
    document.getElementById('abc').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }


    function renderGames(games) {
        
        games.forEach(function(game){

            game.score << newArray

        })



    }


















//LeaderBoard functions 
//timer

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (++ timer < 0) {
            timer ++ ;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}




window.onload = function () {
     let time = 60 / 60, // your time in seconds here
        display = document.querySelector('#timerActual');
    startTimer(time, display);
};


// Lives Function 
// might need id to connect live to the game

function setLives(){
let live = parseInt(document.querySelector('#live').innerText)
const newLive = live - 1

}






//form action 

// const form = document.querySelector('#form')
// form.addEventListener('submit', function(e){
//     e.preventDefault()
    
// const name = document.createElement('div')
// name.class = 'name'

// const score = document.createElement('div')
// score.class = 'score'


// })

 function getScores(){

  return  fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(games => renderGames(games))
 }

    function renderGames(games){
        games.sort(function(a,b){ return b.score - a.score});
        for(let i = 0; i < 5; i++){
            renderGame(games[i])
        


    }}
    


    function renderGame(game){
     const board = document.querySelector('#board')
     const newRow = document.createElement('div')
     const newSubRow1 = document.createElement('div')
     const newSubRow2 = document.createElement('div')
    
    newRow.className = 'row'
    newSubRow1.className = 'name'
    newSubRow2.className = 'score'

    newSubRow1.innerText = `${game.name}`
    newSubRow2.innerText = `${game.score}`

    newRow.appendChild(newSubRow1)
    newRow.appendChild(newSubRow2)
        board.append(newRow)
    //  newRow.innerHTML = `${game.name} : ${game.score}`

     }

     form.addEventListener("submit", function(e) {
        e.preventDefault()
            
        postGame()
        div_hide()
    })

    function postGame() {
        
        let configObj = {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                'name': formInput.value,
                'score': killedCounter.innerHTML
            })



        }
        const newRow = document.querySelectorAll(".row")
        for (let i = 0; i < newRow.length; i++) {
        
            newRow[i].remove()
        } 

        fetch('http://localhost:3000/games', configObj)
        .then(resp => resp.json())
        .then(games => getScores())
       
       

    }

    









