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



function startQuiz() {
    if (startWin.display === "none") {
        startWin.style.display = "block";
    } else {
        startWin.style.display = "none";
        questionWin.style.display = "block";
    }
}



var questions = [
    {
        question: "Questean 1",

        choiceOne: "1",
        choiceTwo: "2",
        choiceThree: "3",
        choiceFour: "4",

        answer: "1",
    },
    {
        question: "Questean 2",

        choiceOne: "1",
        choiceTwo: "2",
        choiceThree: "3",
        choiceFour: "4",

        answer: "1",
    },
    {
        question: "Questean 3",

        choiceOne: "1",
        choiceTwo: "2",
        choiceThree: "3",
        choiceFour: "4",

        answer: "1",
    },
    {
        question: "Questean 4",

        choiceOne: "1",
        choiceTwo: "2",
        choiceThree: "3",
        choiceFour: "4",

        answer: "1",
    },
    {
        question: "Questean 5",

        choiceOne: "1",
        choiceTwo: "2",
        choiceThree: "3",
        choiceFour: "4",

        answer: "1",
    },
];
