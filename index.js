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


function moveShipLeft() {
    let leftNumbers = spaceShip.style.marginLeft.replace("%", "");
    let left = parseInt(leftNumbers)

    if (left > 3) {

        spaceShip.style.marginLeft = `${left - 1}%`;

    }


}



document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowLeft") {
        moveShipLeft()

    }



})

function moveShipRight() {
    let leftNumbers = spaceShip.style.marginLeft.replace("%", "");
    let left = parseInt(leftNumbers)

    if (left < 95) {

        spaceShip.style.marginLeft = `${left + 1}%`;

    }


}



document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowRight") {
        moveShipRight()

    }



})

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
   

})

function startGame() {
    
    const newAlien = document.createElement("img")
    newAlien.src = '../mod3project/assets/alien.png'
    newAlien.className = "alien"
    newAlien.style.left = `${Math.floor(Math.random() * 950) + 325 }px`
    newAlien.style.top = "-10%"
    let rand = Math.floor(Math.random() * 40) + 10  
    const alienMovement = setInterval(function(){
        
        const newAlienHeight = newAlien.style.top.replace("%", "")
        const newAlienHeightNum = parseInt(newAlienHeight)
        newAlien.style.top = `${newAlienHeightNum + 1}%`
        
        if (newAlien.style.top === "100%") {
            newAlien.remove()
            lives.innerHTML = lives.innerHTML - 1
          
        } 

        if (lives.innerHTML === "0") {

            clearInterval(alienMovement)
            startButton.disabled = false
            startButton.style.opacity = "1"
            const aliens = document.querySelectorAll(".alien")
            aliens.forEach(alien => alien.remove())
            div_show()
        }
        
        
    }, rand)

    
    

    main.append(newAlien)

    
}




startButton.addEventListener("click", function(){
    lives.innerHTML = "3"
    var i = 0
    
    function spawnLoop () {           //  create a loop function
        setTimeout(function () {    //  call a 3s setTimeout when the loop is called
           startGame();          //  your code here
           i++;    
                 //  increment the counter
           if (i < 1000) {
            if(lives.innerHTML === "0"){
                clearTimeout(spawnLoop)
            } else {
                spawnLoop();
            }    //  if the counter < 10, call the loop function
             
                    //  ..  again which will trigger another 
           }
           //  ..  setTimeout()
        }, 3000)
     }

     spawnLoop();                      //  start the loop

        startButton.disabled = true
        startButton.style.opacity = "0.5"

      
    
})

// if (missile.getBoundingClientRect().x === newAlien.getBoundingClientRect().x && missile.getBoundingClientRect().y === newAlien.getBoundingClientRect().y) {
//     newAlien.remove()
// }



function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    //Function to Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
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



//Kill function 
function killed(){
    let kill = parseInt(document.querySelector('#kill').innerText)
    const newKill = kill ++ 
}



//form action 

const form = document.querySelector('#form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    debugger
const name = document.createElement('div')
name.class = 'name'

const score = document.createElement('div')
score.class = 'score'


})


 










