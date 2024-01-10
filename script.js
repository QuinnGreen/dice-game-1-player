let score = 0
let total = document.getElementById("total")
const diceImage = document.querySelector("#dice");


const diceRoller = () =>{
    let rollResult = Math.floor(Math.random() * 6) + 1
    document.getElementById("rollResult").textContent = rollResult
    diceImage.src = `dice ${rollResult}.png`;
    if (rollResult !== 1 && score < 20){
        score += rollResult
        total.textContent = score
        if (score >= 20){
            document.getElementById("winLose").textContent = "Win"
        }
    }
    else if (rollResult == 1){
        score = 0 
        total.textContent = score
        document.getElementById("winLose").textContent = "Lose"  
    }
    else if (score >= 20) {
        reset()
    }
}

const reset = () => {
    document.getElementById("rollResult").textContent = 0
    document.getElementById("winLose").textContent = ""
    total.textContent = 0
    score = 0
}