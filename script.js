document.querySelector(".time").innerHTML = "Time: 0";
document.querySelector("#finalScore").innerHTML = "Your final score is 0.";

var startWin = document.querySelector(".startWindow");
var questionWin = document.querySelector(".questionWindow");

var question = document.querySelector(".questionText");
var choices = Array.from(document.querySelector(".choiceText"));
console.log(choices);

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];


var correctPenalty = -15;
var maxQuestions = 5;



function startQuiz() {
    if (startWin.display === "none") {
        startWin.style.display = "block";
    } else {
        startWin.style.display = "none";
        questionWin.style.display = "block";
    }

    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
}

function getNewQuestion() {
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(questionIndex);
    currentQuestion = availableQuestions[questionIndex];
    console.log(currentQuestion);
    document.querySelector(".question").innerHTML = currentQuestion.question;

    // trying to get choice options to appear under the question
    choices.forEach( choice => {
        var number = choice.dataset['number'];
        console.log("Choice number " + number)
        document.querySelector(".choiceText").innerHTML = currentQuestion['choice' + number];
    })
}


var questions = [
    {
        question: "Questean 1",

        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",

        answer: "a",
    },
    {
        question: "Questean 2",

        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",

        answer: "a",
    },
    {
        question: "Questean 3",

        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",

        answer: "a",
    },
    {
        question: "Questean 4",

        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",

        answer: "a",
    },
    {
        question: "Questean 5",

        choice1: "a",
        choice2: "b",
        choice3: "c",
        choice4: "d",

        answer: "a",
    },
];
