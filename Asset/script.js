const start = document.getElementById('start')
const quiz = document.getElementById('quizbox')
const answersEls = document.querySelectorAll('.answer')
const questionEls = document.getElementById('questiontext')
const choiceEls = document.getElementById('choices')
var commentEls = document.getElementById('comment')
var timeEl = document.getElementById('timer')

// const introscreen = document.getElementsByClassName('introduction')


const quizdata = [
    {
        title: "1+1=__",
        choices: ["1", "2", "3", "4"],
        correct: "2",
    },

    {
        title: "1+0=__",
        choices: ["1", "2", "3", "4"],
        correct: "1",
    },

    {
        title: "1+2=__",
        choices: ["1", "2", "3", "4"],
        correct: "3",
    },

    {
        title: "1+3=__",
        choices: ["1", "2", "3", "4"],
        correct: "4",
    }
];

let currentquestion = 0
let score = 0



function loadquiz() {

    var introscreen = document.getElementById('intro')
    introscreen.setAttribute("style", "display:none")

    const currentquizdata = quizdata[currentquestion]
    const questiontitle = document.getElementById('questiontext')
    questiontitle.textContent = currentquizdata.title


    for (var i = 0; i < currentquizdata.choices.length; i++) {
        var currentchoice = currentquizdata.choices[i]
        var choicebutton = document.createElement("button")
        choicebutton.setAttribute("value", currentchoice)
        choicebutton.textContent = currentchoice
        choiceEls.appendChild(choicebutton)

        // console.log(currentquestion)

        choicebutton.addEventListener("click", checkanswer)


    }

    function checkanswer(event) {

        var ans = event.target.textContent
        if (ans == quizdata[currentquestion].correct) {
            commentEls.textContent = "Correct!"
            // console.log(currentquestion)
        } else {
            commentEls.textContent = "Wrong! The Correct Answer is " + quizdata[currentquestion].correct
            // console.log(currentquestion)
            // console.log("choicebutton", ans)
        }

        currentquestion++;
        loadquiz();

        //delete previous buttons     

        // var previousChoice = quizdata[currentquestion - 1].choices

        // previousChoice.setAttribute("style", "display:none")
        console.log(quizdata[currentquestion - 1].choices)

    }



}



start.addEventListener("click", () => {
    loadquiz();
    setTime();

}

)

var secondsLeft = 60;
function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time" + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {
    //add display none to question content 
    timeEl.textContent = "All done! Your final score is ";

}

