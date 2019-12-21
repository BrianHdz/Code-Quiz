document.querySelector(".time").innerHTML = "Time: 75";
document.querySelector("#finalScore").innerHTML = "Your final score is ";

var startWin = document.querySelector(".startWindow");
var questionWin = document.querySelector(".questionWindow");
var highScoreWin = document.querySelector(".highScoreWindow");

var question = document.querySelector(".questionText");

var choices = Array.from(document.querySelectorAll(".choiceText"));


var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 5;

var incorrectPenalty = -10;
var maxQuestions = 5;

var timeleft = 75; //document.querySelector(".time");
var interval;

// Pause the timer.
// function setTime() {
//     var minutes;
  
//     if (status === "Working") {
//       minutes = workMinutesInput.value.trim();
//     }
//     clearInterval(interval);
//     totalSeconds = minutes * 60;
// }

// function pauseTimer() {
//     clearInterval(interval);
//     renderTime();
//   }

// function to Start the Quiz when clicking the button. Html has an onclick event built in.
function startQuiz() {
    if (startWin.style.display === "none") {
        startWin.style.display = "block";
    } else {
        startWin.style.display = "none";
        questionWin.style.display = "block";
    }


    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    getNewQuestion();

    // The timer function is built in to startQuiz

    interval = setInterval(function () {
        document.querySelector(".time").innerHTML = 0 + timeleft;
        timeleft -= 1;
        if (timeleft <= -1) {
            clearInterval(interval);
        };
    }, 1000);

}


console.log(questionCounter);
// Get next question out of the array below. 
// Embedding this function into the button class
function getNewQuestion() {
    console.log(availableQuestions.length);
    console.log(questionCounter);

    // This will switch style.display on the Questions Window page to "none" and bring up the High Score Window
    if (availableQuestions.length === 0) {
        console.log(availableQuestions.length);
        console.log(questionCounter);
        console.log("yo1");
        questionWin.style.display = "none";
        highScoreWin.style.display = "block";
        
        // This will pause the timer when the high score window displays
        clearInterval(interval);
    } else {
        // Nothing happens in here. I was going to use this else statement for something. Don't need it. Erase later.
        console.log("yo2");
    };

    // Picking the question out of the array
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    document.querySelector(".question").innerHTML = currentQuestion.question;


    // Get choice options to appear under question
    choices.forEach(choice => {
        var number = choice.dataset["number"];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    // Splice out used questions from index 1 at a time. 
    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
};

// Monitor which questions get chosen / clicked.
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        console.log(e.target);
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
    });
});


// Submit the HIGH SCORE name
document.getElementById("submitName").addEventListener("click", function addHSNames(evt){
    evt.preventDefault();
    var newName = document.getElementById("scorersName");
    console.log(newName);
    document.querySelectorAll("#nameList").prepend(newName);
    
  });




var questions = [
    {
        question: "Which of the following is the correct syntax to display CODE QUIZ in an alert box using JavaScript?",

        choice1: "alertbox(“Code Quiz”);",
        choice2: "alert(“Code Quiz”);",
        choice3: "msg(“Code Quiz”);",
        choice4: "prompt(“Code Quiz”);",

        answer: "alert(“Code Quiz”);",
    },
    {
        question: "What syntax can be used to creat a new DIV element using javascript?",

        choice1: "response.createElement('div');",
        choice2: "document.createElement('div');",
        choice3: "div",
        choice4: "document.appendChild.div;",

        answer: "document.createElement('div');",
    },
    {
        question: "What is the HTML tag under which one can write the JavaScript code?",

        choice1: "javascript",
        choice2: "script",
        choice3: "scripted",
        choice4: "js",

        answer: "script",
    },
    {
        question: "What is the correct syntax for referring to an external script called “geek.js”?",

        choice1: "script href=”coolScript.js”",
        choice2: "script src=”coolScript.js”",
        choice3: "script ref=”coolScript.js”",
        choice4: "script name=”coolScript.js”",

        answer: "script src=”coolScript.js”",
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",

        choice1: "interface",
        choice2: "program",
        choice3: "throws",
        choice4: "short",

        answer: "program",
    },
];


