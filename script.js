let words = ["Pakistan", "Honey", "Javascript", "Clueless", "Hogwarts", "Cristiano", "Jawad", "Batman", "Dostoevsky"];
let currentWord = "";
let scrambledWord = "";
let score = 0;

function scramble(word) {
    const arr = word.toLowerCase().split("");
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
}

function newWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scramble(currentWord);
    document.getElementById("scrambled-word").textContent = scrambledWord;
}
document.getElementById("skip-btn").addEventListener('click', () => {
    newWord();
})
document.getElementById("check-btn").addEventListener('click', () => {
    document.getElementById("status").style.opacity = "0";
    if (document.getElementById("text-field").value === currentWord.toLowerCase()) {
        document.getElementById("status").style.opacity = "1";
        document.getElementById("status").style.backgroundColor = "rgb(23, 142, 2)";
        document.getElementById("status").style.borderRadius = "2rem";
        document.getElementById("status").style.paddingInline = "2rem";
        document.getElementById("status").textContent = "Correct";
        score += 10;
        document.getElementById("score").textContent = `Score: ${score}`;
        document.getElementById("text-field").value = "";
        newWord();
    }
    else {
        document.getElementById("status").textContent = "Try Again";
        document.getElementById("status").style.backgroundColor = "rgb(142, 2, 2)";
        document.getElementById("status").style.borderRadius = "2rem";
        document.getElementById("status").style.paddingInline = "2rem";
    }

    setTimeout(() => {
        document.getElementById("status").style.opacity = "1";
    }, 50);

})

window.onload(newWord());