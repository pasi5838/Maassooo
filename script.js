let score = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateQuestion() {
    const num1 = getRandomInt(1, 20);
    const num2 = getRandomInt(1, 20);
    const isAddition = Math.random() > 0.5;
    const correctAnswer = isAddition ? num1 + num2 : num1 - num2;
    const questionText = isAddition ? \`\${num1} + \${num2} = ?\` : \`\${num1} - \${num2} = ?\`;

    const answers = new Set([correctAnswer]);
    while (answers.size < 4) {
        answers.add(correctAnswer + getRandomInt(-10, 10));
    }

    const choices = Array.from(answers).sort(() => Math.random() - 0.5);

    document.getElementById("question").textContent = questionText;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.onclick = () => {
            if (choice === correctAnswer) {
                score++;
                document.getElementById("result").textContent = "Benar!";
            } else {
                document.getElementById("result").textContent = "Salah!";
            }
            document.getElementById("score").textContent = "Skor: " + score;
        };
        choicesContainer.appendChild(btn);
    });
}

function startGame() {
    document.getElementById("result").textContent = "";
    generateQuestion();
}

function resetGame() {
    score = 0;
    document.getElementById("score").textContent = "Skor: 0";
    document.getElementById("result").textContent = "";
    generateQuestion();
}

window.onload = startGame;