let score = 0
let total = document.getElementById("total")


let rollResult = Math.floor(Math.random() * 6) + 1

const diceRoller = () =>{
    let rollResult = Math.floor(Math.random() * 6) + 1
    document.getElementById("rollResult").textContent = rollResult
    if (rollResult !== 1){
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
}