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
    if (startWin.display === "none") {
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
// This gets the next question out of the array below. Embedding this function into the button class
function getNewQuestion() {
    console.log(availableQuestions.length);
    console.log(questionCounter);

    // This will switch style.display on the Questions Window page to "none" and bring up the High Score Window
    if (availableQuestions.length === 0) {
        console.log(availableQuestions.length);
        console.log(questionCounter);
        console.log("yo1");
        // questionWin.style.display === "none";
        // questionWin.style.display = "block";
        questionWin.style.display = "none";
        highScoreWin.style.display = "block";
        clearInterval(interval);
    } else {
        //questionWin.style.display = "none";
        // highScoreWin.style.display = "block";
        console.log("yo2");
    };

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

    // Splice out the used questions from the index 1 at a time. The problem with this is it happens twice 
    // each time I click a choice button because this function is called through the getNewQuestion()
    // and again because that same function is embedded below that monitors the clicked choices.
    availableQuestions.splice(questionIndex, 1);
    console.log(availableQuestions);
};

// Monitor which questions get chosen / clicked.
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        console.log(e.target);
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        // getNewQuestion();
    });
});



var questions = [
    {
        question: "Which of the following is the correct syntax to display Code Quiz in an alert box using JavaScript?",

        choice1: "alert(“GeeksforGeeks”);",
        choice2: "alertbox(“GeeksforGeeks”);",
        choice3: "msg(“GeeksforGeeks”);",
        choice4: "alert(“GeeksforGeeks”);",

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


