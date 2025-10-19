let p1Wins = 0;
let p2Wins = 0;
let p1Position = 0;
let p2Position = 0;
let lastWinner = 1; // Track who won last time (start with player 1)
const FINISH_LINE = 95; // percentage

// Cache elements once
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const title = document.querySelector("h1");
const btn = document.querySelector(".roll-button");
const car1 = document.querySelector(".car1");
const car2 = document.querySelector(".car2");
const winFlag = document.querySelector("#winFlag");
const track1 = document.querySelector("#track1");
const track2 = document.querySelector("#track2");

function rollDice() {
    const n1 = Math.floor(Math.random() * 6) + 1;
    const n2 = Math.floor(Math.random() * 6) + 1;

    img1.src = "images/dice" + n1 + ".png";
    img2.src = "images/dice" + n2 + ".png";

    return { n1, n2 };
}

function moveCar(player, diceValue) {
    const moveAmount = diceValue * 3; // Each dice point moves 3%

    if (player === 1) {
        p1Position += moveAmount;
        if (p1Position > FINISH_LINE) p1Position = FINISH_LINE;
        car1.style.left = p1Position + "%";
        return p1Position >= FINISH_LINE;
    } else {
        p2Position += moveAmount;
        if (p2Position > FINISH_LINE) p2Position = FINISH_LINE;
        car2.style.left = p2Position + "%";
        return p2Position >= FINISH_LINE;
    }
}

function resetRace() {
    p1Position = 0;
    p2Position = 0;
    car1.style.left = "0%";
    car2.style.left = "0%";
    title.textContent = "Roll to Race!";
}

function showFlag(player) {
    // Position flag to align with winner's track
    // Each track is 80px + 20px margin = 100px spacing
    if (player === 1) {
        winFlag.style.transform = "translateY(0)";
    } else {
        winFlag.style.transform = "translateY(100px)";
    }

    lastWinner = player;
}

function hideFlag() {
    // No need to hide, flag stays visible
} function applyResult(n1, n2) {
    let winner = 0;

    if (n1 > n2) {
        winner = 1;
        showFlag(1);
        const finished = moveCar(1, n1);
        title.textContent = "Player 1 Rolled Higher!";

        if (finished) {
            title.textContent = "🏆 Player 1 Wins the Race! 🏆";
            setTimeout(() => {
                resetRace();
                hideFlag();
            }, 2000);
        }
    } else if (n2 > n1) {
        winner = 2;
        showFlag(2);
        const finished = moveCar(2, n2);
        title.textContent = "Player 2 Rolled Higher!";

        if (finished) {
            title.textContent = "🏆 Player 2 Wins the Race! 🏆";
            setTimeout(() => {
                resetRace();
                hideFlag();
            }, 2000);
        }
    } else {
        hideFlag();
        title.textContent = "It's a Tie! Roll Again!";
    }
}

function onRollClick() {
    const { n1, n2 } = rollDice();
    applyResult(n1, n2);
}

function main() {
    btn.addEventListener("click", onRollClick);
}

main();