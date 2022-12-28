let time = 60;
let timeId;
const main = document.querySelector('main');
const choiceEl = document.getElementById('choices')
var rightEl = document.getElementById("rightWrong")
var index = 0

//timer
const downTime = () => {
    time--;
    if(time < 1){
        time = 0;
        clearInterval(timeId)
    };
    document.getElementById('time').innerText = time;
};

const init = () => {
   timeId = setInterval(downTime,1000);
    main.innerHTML = '';
    getQuestion()
};

//fuction to get the questions and answers 
function getQuestion () {
    let currentQuestion = questions[index];
    console.log(currentQuestion) 
  

    document.getElementById('question').innerText = currentQuestion.Q;
    choiceEl.innerHTML = ""
    for ( var i = 0; i < currentQuestion.A.length; i++ ) { 
        var choice = currentQuestion.A[i]
        var choicesBut = document.createElement('button')
        choicesBut.setAttribute('class', 'choices')
        choicesBut.setAttribute('value', choice)
        choicesBut.textContent = i + 1 + ': ' + choice
         choicesBut.addEventListener("click", questionClick)
        choiceEl.appendChild(choicesBut)
    }
}

//clicking the button
function questionClick(event) {
    var buttonEl = event.target;
    if(buttonEl.value !== questions[index].C) {
        time -=10;
        console.log(buttonEl.value,"button")
        rightEl.textContent = "incorrect.."
    } else  {
        rightEl.textContent = "Correct!"
    }

    index++
   
 //end quiz function 
    if (time <= 0 || index === questions.length)
    {
        clearInterval(init)
    } else {
        getQuestion();
    }

    console.log(buttonEl);
}

document.getElementById('start').addEventListener('click', init);