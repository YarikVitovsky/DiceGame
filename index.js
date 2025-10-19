let p1Wins = 0;
let p2Wins = 0;
let p1Steps = 0;
let p2Steps = 0;
let lastWinner = 1; // Track who won last time (start with player 1)
const TOTAL_STEPS = 10; // First to 10 steps wins
const STEP_PERCENTAGE = 9.5; // Each step = 9.5% (10 steps = 95%)

// Cache elements once
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const titleText = document.querySelector(".title");
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

function moveCar(player) {
    // Move car by 1 step (regardless of dice value)
    if (player === 1) {
        p1Steps++;
        car1.style.left = (p1Steps * STEP_PERCENTAGE) + "%";
        return p1Steps >= TOTAL_STEPS;
    } else {
        p2Steps++;
        car2.style.left = (p2Steps * STEP_PERCENTAGE) + "%";
        return p2Steps >= TOTAL_STEPS;
    }
}

function resetRace() {
    p1Steps = 0;
    p2Steps = 0;
    car1.style.left = "0%";
    car2.style.left = "0%";
    titleText.textContent = "First to 10 steps wins!";
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
        const finished = moveCar(1);
        titleText.textContent = `Player 1 Rolled Higher!`;

        if (finished) {
            p1Wins++;
            titleText.textContent = "🏆 Player 1 Wins the Race! 🏆";
            setTimeout(() => {
                resetRace();
                hideFlag();
            }, 1000);
        }
    } else if (n2 > n1) {
        winner = 2;
        showFlag(2);
        const finished = moveCar(2);
        titleText.textContent = `Player 2 Rolled Higher!`;

        if (finished) {
            p2Wins++;
            titleText.textContent = "🏆 Player 2 Wins the Race! 🏆";
            setTimeout(() => {
                resetRace();
                hideFlag();
            }, 1000);
        }
    } else {
        hideFlag();
        titleText.textContent = "It's a Tie! Roll Again!";
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