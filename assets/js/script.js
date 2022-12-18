let time = 60;
let timeId;
const main = document.querySelector('main');
const choiceEl = document.getElementById('choices')
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

  
};

function getQuestion () {
    let currentQuestion = questions[index];
    console.log(currentQuestion) 

    document.getElementById('question').innerText = currentQuestion.Q;
    for ( var i = 0; i < currentQuestion.A.length; i++ ) { 
        var choice = currentQuestion.A[i]
        var choicesBut = document.createElement('button')
        choicesBut.setAttribute('class', 'choices')
        choicesBut.setAttribute('value', choice)
        choicesBut.textContent = i + 1 + ': ' + choice
        choiceEl.appendChild(choicesBut)
    }
}

function questionClick(event) {
    var buttonEl = event.target;

    if(!buttonEl.matches('.choice')) {
        return;
    }

    if(buttonEl.value !== questions[index].C) {
        time -=10;
    } else  {
        
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
choiceEl.onclick = questionClick

// [] ---> array initialized by a variable aka cont array = [] OR [] accessor to the array aka questions[0] is the index of my value
// () only used to initialize a method or function aka getQuestion() or filter()/map()
// . accesses properties of current value aka const dog = {id: 2, name: dog, sound: bark} const bark = dog.sound  OR I use this to access built in methods aka dog.map(index, value ) => { value.sound}