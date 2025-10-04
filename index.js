function rollDice() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1")
        .setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2")
        .setAttribute("src", "images/dice" + randomNumber2 + ".png");
    
    if (randomNumber1 > randomNumber2) {
        return 1; // Player 1 wins
    } else if (randomNumber2 > randomNumber1) {
        return 2; // Player 2 wins
    } else {
        return 0; // Draw
    }
}

function updateScore(winner) {
    let player1Score = document.querySelector(".p1").textContent;
    let player2Score = document.querySelector(".p2").textContent;
    if (winner === 1) {
        player1Score++;
        document.querySelector("h1").textContent = "Player 1 Wins!";
        document.querySelector(".p1").textContent = player1Score;
    } else if (winner === 2) {
        player2Score++;
        document.querySelector("h1").textContent = "Player 2 Wins!";
        document.querySelector(".p2").textContent = player2Score;
    }
    else {
        document.querySelector("h1").textContent = "It's a Draw!";
    }
}

function onRollClick() {
    const winner = rollDice();
    updateScore(winner);
}

function main() {
    document.querySelector(".roll-button").addEventListener("click", onRollClick);
}

main();