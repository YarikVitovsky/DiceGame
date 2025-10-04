let p1Score = 0;
let p2Score = 0;

// Cache elements once
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.querySelector("h1");
const p1Span = document.querySelector(".p1");
const p2Span = document.querySelector(".p2");
const btn = document.querySelector(".roll-button");

function rollDice() {
    const n1 = Math.floor(Math.random() * 6) + 1;
    const n2 = Math.floor(Math.random() * 6) + 1;

    img1.src = "images/dice" + n1 + ".png";
    img2.src = "images/dice" + n2 + ".png";

    if (n1 > n2) return 1;
    if (n2 > n1) return 2;
    return 0;
}

function applyResult(winner) {
    if (winner === 1) {
        p1Score++;
        p1Span.textContent = p1Score;
        title.textContent = "Player 1 Wins!";
    } else if (winner === 2) {
        p2Score++;
        p2Span.textContent = p2Score;
        title.textContent = "Player 2 Wins!";
    } else {
        title.textContent = "It's a Draw!";
    }
}

function onRollClick() {
    const winner = rollDice();
    applyResult(winner);
}

function main() {
    btn.addEventListener("click", onRollClick);
}

main();