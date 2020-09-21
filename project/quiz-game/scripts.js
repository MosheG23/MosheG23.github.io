
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const questionNumberElement = document.getElementById("question-number");
const summaryElement = document.getElementById("summary");


let shuffledQuestions, currentQuestionIndex, correctAnswers;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    startBtn.classList.add("hide");
    shuffledQuestions = questionsForQuiz.sort(() => Math.random() - .5);
    console.log(shuffledQuestions);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    questionNumberElement.innerText = currentQuestionIndex + 1;
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextBtn.classList.add("hide");
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hide");
    } else {
        summaryElement.classList.remove("hide");
        summaryElement.innerText = `You got ${correctAnswers} answers right!`;
        startBtn.innerText = "New Game";
        startBtn.classList.remove("hide");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
        correctAnswers++;
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}