# 🎲 Dice Racing Game

An interactive browser-based dice racing game where two players compete to reach the finish line first! Roll the dice, advance your car, and race to victory. Features animated racing tracks with visual progress indicators and a flag system to mark the winner. Pure HTML / CSS / JavaScript — no frameworks.

🚀 **Play it now:**  
https://yarikvitovsky.github.io/DiceGame/dice.html

---

## 🕹️ How to Play
1. Open the live link.  
2. Press **Roll Dice**.  
3. Highest die wins the round and advances **1 step** forward.  
4. **First to 10 steps wins the race!**
5. Winner's flag indicator shows who won the last race.
6. Game automatically resets after 2 seconds for a new race.

---

## ✨ Features
- Random dice (1–6) for both players each roll
- **Visual racing tracks** with animated car movement
- **Step-based progression** — first to 10 steps wins
- **Flag indicator** highlighting the last winner
- Smooth CSS animations and transitions
- Winner announcement with step progress display
- **Gold checkered finish line** at the end of each track
- Fully responsive design for desktop and mobile
- Lightweight & instant load

---

## 🧠 Tech Stack
| Layer      | Tech |
|------------|------|
| Markup     | HTML5 |
| Styling    | CSS3 (Flexbox, Animations, Transforms) |
| Logic      | Vanilla JavaScript (ES6+) |

---

## 📂 Project Structure
```
DiceGame/
  dice.html         # Main game page
  index.js          # Game logic & race mechanics
  styles.css        # Styles & animations
  images/           # Dice face images (dice1.png ... dice6.png)
  README.md         # This file
```

---

## 🔧 Local Setup
```bash
# Clone the repository
git clone https://github.com/YarikVitovsky/DiceGame.git
cd DiceGame

# Open in a browser (any method):
# 1. Double-click dice.html
# 2. Or use VS Code Live Server
# 3. Or serve via python: python -m http.server 8000
```

---

## 🌳 Version Branches

This project showcases progressive feature development through Git branching:

| Branch | Description |
|--------|-------------|
| **main** | Step-based racing (first to 10 wins) — current version |
| **v2-percentage-race** | Percentage-based movement system |
| **v1-original** | Simple dice game with score tracking |

Each branch represents a complete, functional version of the game at different stages of development.

---

## 🛠️ Possible Improvements
- Add manual Reset button
- Best of N races tournament mode
- Sound effects on roll and win
- Animated dice shake before reveal
- Dark / Light theme toggle
- Track win statistics & percentage
- Multiplayer over WebSocket
- Different car emoji selections
- Speed boosts or power-ups

---

## 🎨 Design Highlights
- **Indie Flower** & **Lobster** Google Fonts for playful typography
- CSS `scaleX(-1)` to flip cars facing right
- `translateY` transforms for smooth flag positioning
- Gradient backgrounds with checkered finish lines
- Responsive media queries for mobile optimization

---

## 📜 License
Feel free to use, learn from, or extend. Add a formal LICENSE file (MIT recommended) if you want others to reuse it clearly.

---

## ⭐ Support
If you like it: star the repo or fork and extend!

Have fun & roll on! 🎲🏁
