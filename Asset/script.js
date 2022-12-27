const start = document.getElementById('start')
const quiz = document.getElementById('quizbox')
const answersEls = document.querySelectorAll('.answer')
const questionEls = document.getElementById('questiontext')
const choiceEls = document.getElementById('choices')
var commentEls = document.getElementById('comment')
var timeEl = document.getElementById('timer')


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

//change to currentQuestion
let currentquestion = 0
let score = 0

function loadquiz() {
    // console.log("starting quiz", event)
    var introscreen = document.getElementById('intro')
    introscreen.setAttribute("hidden",true)

    const currentquizdata = quizdata[currentquestion]
    const questiontitle = document.getElementById('questiontext')
    questiontitle.textContent = currentquizdata.title

    choiceEls.innerHTML = ""
    for (var i = 0; i < currentquizdata.choices.length; i++) {
        var currentchoice = currentquizdata.choices[i]
        var choicebutton = document.createElement("button")
        choicebutton.setAttribute("value", currentchoice)
        choicebutton.textContent = currentchoice
        choiceEls.appendChild(choicebutton)
        choicebutton.addEventListener("click", checkanswer)


    }

    function checkanswer(event) {
        console.log(event.target)
            var ans = event.target.textContent
            if (ans == quizdata[currentquestion].correct) {
                commentEls.textContent = "Correct!"
                secondsLeft = secondsLeft + 10
                score++;
        
            } else {
                commentEls.textContent = "Wrong! The Correct Answer is " + quizdata[currentquestion].correct
                secondsLeft = secondsLeft - 10
        
            }
        
            currentquestion++;
            if (currentquestion >= 5) {
                console.log("quiz is over",currentquestion)
                return
                
            }
            loadquiz();
        
        
        }
    
}



start.addEventListener("click", () => {
    loadquiz();
    setTime();

}

)

var secondsLeft = 20;
function setTime() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time" + secondsLeft

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            sendMessage();
        }

    }, 1000);
}

function sendMessage() {

    quizbox.setAttribute("style", "display:none")

    timeEl.textContent = "All done! Your final score is " + score;

    enterinitial();


}


function enterinitial() {
//create a form to input initial
    var form = document.createElement("form");

    form.setAttribute("method", "post");

    var initial = document.createElement("input");
    initial.setAttribute("type", "text");
    initial.setAttribute("name", "initial");
    initial.setAttribute("placeholder", "Enter initial");

    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    form.appendChild(initial);

    form.appendChild(s);

    document.getElementsByTagName("body")[0].appendChild(form);

}

    //store initials and scores

    function renderInitials() {
        var initials = localStorage.getItem("initial") // local storge score and initials push to array - set item first - get item - sorting function()
        var finalscore = localStorage.getItem("score")

        if (!initials || !finalscore) {
            return;
          }

    }

    function viewSocre() {
        var scoreRecord = document.createElement("h2")
        scoreRecord.textContent = "High Scores"
        var li = document.createElement("li")
        // li.textcontent=




    }


//         console.log(initial.getAttribute("value"))

//     var userScore = {
//         initials: "ZZ",
//         score
//     }

//     // store initials and scores 
//     var existingScores = window.localStorage.getItem("scores") || []
//     console.log(JSON.parse(existingScores))
//     if (JSON.parse(existingScores) && existingScores.length >0) {
//         existingScores.push(userScore)
//         window.localStorage.setItem("scores", JSON.stringify(existingScores))
//     }


//     if (existingScores.length === 0) {
//         window.localStorage.setItem("scores", JSON.stringify([].push(user)))
        
//     }

//     window.localStorage.setItem("initial", JSON.stringify(initial))

//     window.localStorage.setItem("score", JSON.stringify(score))

// }

// start.addEventListener("click", (event) => {
// console.log(event)
// loadquiz()

// }
// )

// function output() {
//     var record = document.createElement("li")
//     let record = window.localStorage.getItem("initials") + ":" + window.localStorage.getItem("scores")



// create a second html


