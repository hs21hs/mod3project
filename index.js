//Pseudo coding
//Load the Dom -
//Initialize function - main menu screen
//leader board should render each time the player finishes the game. 


document.querySelector(".ship").style.marginLeft = "611px"
const spaceShip = document.querySelector(".ship")
const main = document.querySelector("#main")



function moveShipLeft() {
    let leftNumbers = spaceShip.style.marginLeft.replace("px", "");
    let left = parseInt(leftNumbers)

    if (left > 37) {

        spaceShip.style.marginLeft = `${left - 10}px`;

    }


}



document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowLeft") {
        moveShipLeft()

    }



})

function moveShipRight() {
    let leftNumbers = spaceShip.style.marginLeft.replace("px", "");
    let left = parseInt(leftNumbers)

    if (left < 1150) {

        spaceShip.style.marginLeft = `${left + 10}px`;

    }


}



document.addEventListener("keydown", function(e){
    
    if(e.key === "ArrowRight") {
        moveShipRight()

    }



})

function shootMissile() {
    
        const shipPosition = spaceShip.style.marginLeft.replace("px", "")
        const shipPositionNum = parseInt(shipPosition)
        const missile = document.createElement('img')
        missile.src = '../Mod3project/assets/missile.png'
        missile.className = "missile"
        
        missile.style.marginLeft = `${shipPositionNum + 17.5}px`
        missile.style.marginTop = "75%";
        setInterval(function(){
            const missileMove = missile.style.marginTop.replace("%","")
            const missileMoveNum = parseInt(missileMove)
    
            missile.style.marginTop = `${missileMoveNum - 1}%`
    
            if (missile.style.marginTop === "3%") {
                missile.remove()
            }
    
        }, 10)
    
    
        
        
    
        main.append(missile)
    
    
    }

document.addEventListener("keydown", function(e){
        
    if (e.key === " ") {

            shootMissile()
            
        }
   

})



//LeaderBoard functions 
//timer

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
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
        display = document.querySelector('#timer');
    startTimer(time, display);
};


/// Lives Function 
// might need id to connect live to the game

function setLives(){
let live = parseInt(document.querySelector('#live').innerText)
const newLive = live - 1

}



//Kill function 
function killed(){
    let kill = parseInt(document.querySelector('#kill').innerText)
    const newKill = Kill ++ 
}









// timer.children.forEach(function(time)
// {
//     setinterval({
//         time 
//     },
//     100)

// })







// Not needed so far

// document.addEventListener('DOMContentLoaded', () => {
//     let elements = []
//     let container = document.querySelector('#container')
//     // Add each row to the array
//     container.querySelectorAll('.row').forEach(el => elements.push(el))
//     // Clear the container
//     container.innerHTML = ''
//     // Sort the array from highest to lowest
//     elements.sort((a, b) => b.querySelector('.score').textContent - a.querySelector('.score').textContent)
//     // Put the elements back into the container
//     elements.forEach(e => container.appendChild(e))
//   })

//   const playerArray = [
//     {name: "Player1", score: "430", id:"player1"},
//     {name: "Player2", score: "580"}, id:"player2"},
//     {name: "Player3", score: "310"}, id:"player3"},
//     {name: "Player4", score: "640" id:"player4"},
//     {name: "Player5", score: "495", id:"player5"}
//   ]



// 