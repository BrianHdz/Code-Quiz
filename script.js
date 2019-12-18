document.querySelector(".time").innerHTML = "Time: 0";
document.querySelector("#finalScore").innerHTML = "Your final score is 0.";

var startWin = document.querySelector(".startWindow");
var questionWin = document.querySelector(".questionWindow");

var question = document.querySelector(".questionText");
console.log(document.querySelector(".choiceText"));
var choices = Array.from(document.querySelectorAll(".choiceText"));
console.log(choices);

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];


var incorrectPenalty = -15;
var maxQuestions = 5;

var timeleft = 75;


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

    // The timer function is built in to startQuiz

var downloadTimer = setInterval(function(){
    document.querySelector(".time").innerHTML = 0 + timeleft;
    timeleft -= 1;
    if(timeleft <= -1){
      clearInterval(downloadTimer);
    }
  }, 1000);
  
}


function getNewQuestion() {
    questionCounter++;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(questionIndex);
    currentQuestion = availableQuestions[questionIndex];
    console.log(currentQuestion);
    document.querySelector(".question").innerHTML = currentQuestion.question;
   
    console.log(choices);
   
    // trying to get choice options to appear under the question
    choices.forEach( choice => {
        var number = choice.dataset["number"];
        console.log("Choice number " + number)
        choice.innerHTML = currentQuestion['choice' + number];
    })
}

// document.querySelector(".choiceText")

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
