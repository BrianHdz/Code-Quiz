document.querySelector(".time").innerHTML = "Time: 75";
document.querySelector("#finalScore").innerHTML = "Your final score is ";

var startWin = document.querySelector(".startWindow");
var questionWin = document.querySelector(".questionWindow");
var highScoreWin = document.querySelector(".highScoreWindow");

var question = document.querySelector(".questionText");
console.log(document.querySelector(".choiceText"));
var choices = Array.from(document.querySelectorAll(".choiceText"));


var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;

var incorrectPenalty = -10;
var maxQuestions = 5;

var timeleft = 75;


// function to Start the Quiz when clicking the button. Html has an onclick event built in.
function startQuiz() {
    if (startWin.display === "none") {
        startWin.style.display = "block";
    } else {
        startWin.style.display = "none";
        questionWin.style.display = "block";
    }


    getNewQuestion();

    // The timer function is built in to startQuiz

    var downloadTimer = setInterval(function () {
        document.querySelector(".time").innerHTML = 0 + timeleft;
        timeleft -= 1;
        if (timeleft <= -1) {
            clearInterval(downloadTimer);
            
        } console.log(timeleft);
        
    }, 1000);

};




// This gets the next question out of the array below. Embedding this function into the button class
function getNewQuestion() {


    if(availableQuestions.length === 0 || questionCounter < 0){
        questionWin.display === "none";
        questionWin.style.display = "block";
    } else {
        questionWin.style.display = "none";
        highScoreWin.style.display = "block";
    }


    // picking the question happens here
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    document.querySelector(".question").innerHTML = currentQuestion.question;


    // trying to get choice options to appear under the question
    choices.forEach(choice => {
        var number = choice.dataset["number"];
        
        choice.innerHTML = currentQuestion['choice' + number];
    });

    // Splice out the used questions from the index 1 at a time
    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
};


// Monitor which questions get chosen / clicked.
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        console.log(e.target);
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        getNewQuestion();
    });
});



// All the questions(objects) are in this array.
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

