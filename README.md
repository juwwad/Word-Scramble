# Word Scramble Game

A simple Word Scramble Game built with **HTML, CSS, and JavaScript**.

---

## Features

* Randomly scrambled words.
* User guesses the correct word.
* Scoring system (+10 points for each correct guess).
* Smooth animations for correct answers.
* Sleek and modern responsive design.

---

## How It Works

1. A scrambled word is displayed.
2. The user types their guess into the input field.
3. On submitting:

   * If correct: score increases by 10, a new word is loaded, and animation plays.
   * If incorrect: "Try Again" message is shown.

---

## Code Explanation

### HTML Structure

* A main container holds the game.
* Elements:

  * **Title** (`<h1>Word Scramble</h1>`)
  * **Scrambled word display** (`<div class="scramble">`)
  * **Input field** (`<input type="text">`)
  * **Submit button** (`<button>`)
  * **Score display**

### CSS Styling

* Gradient background.
* Rounded container with shadow.
* Smooth hover effects.
* Animated scale effect when answer is correct.

### JavaScript Logic

#### Variables:

* `words`: list of words to scramble.
* `currentWord`: the current word to guess.
* `scrambledWord`: scrambled version of the word.
* `score`: player's score.

#### Functions:

* **scramble(word)**:

  * Shuffles letters of the word randomly using **Fisher-Yates Shuffle**.

```javascript
function scramble(word) {
    const arr = word.split("");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swapping elements
    }
    return arr.join("");
}
```

* **newWord()**:

  * Selects a random word from the list.
  * Scrambles it.
  * Displays it on the page.

* **animateCorrect()**:

  * Adds a scale-up animation when user answers correctly.

#### Event Listeners:

* On button click:

  * Get user input.
  * Compare with correct word.
  * If correct: update score, animate, load new word.
  * If incorrect: display "Try Again" message.

---

## Technologies Used

* HTML5
* CSS3 (with transitions and responsive design)
* Vanilla JavaScript (no libraries)

---

## Improvements Possible

* Add timer.
* Add levels or difficulty.
* Store high scores.
* Add word categories.
* Sound effects.
* More animations.

---

## Live Demo

*https://juwwad.github.io/Word-Scramble/*
---

## Author

[Jawad Ahmad](https://github.com/juwwad)
