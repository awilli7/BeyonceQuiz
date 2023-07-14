const questions = [
  {
    question: "What is Beyonce's full name?",
    answers: [
      { text: "Beyonce Kelendria Knowles Carter", correct: false },
      { text: "Beyonce Celestine Knowles Carter", correct: false },
      { text: "Beyonce Solange Knowles Carter", correct: false },
      { text: "Beyonce Giselle Knowles Carter", correct: true },
    ],
  },
  {
    question: "When is Beyonce's birthday?",
    answers: [
      { text: "9/4/1981", correct: true },
      { text: "10/12/1982", correct: false },
      { text: "8/25/1981", correct: false },
      { text: "8/17/1984", correct: false },
    ],
  },
  {
    question: "When is Beyonce's Wedding Anniversary?",
    answers: [
      { text: "2/14/2008", correct: false },
      { text: "4/4/2008", correct: true },
      { text: "10/20/2008", correct: false },
      { text: "02/4/2006", correct: false},
    ],
  },
  {
    question: "How Many Children Does Beyonce Have?",
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "Three", correct: true },
      { text: "Four", correct: false },
    ],
  },
  {
    question: "What are Beyonce's children's names?",
    answers: [
      { text: "Blue, Rumi, Sir", correct: true },
      { text: "Blue, Ava, Sean", correct: false },
      { text: "Apple, Leodis, Rumi", correct: false },
      { text: "Blue, Rumi, Sean", correct: false },
    ],
  },
  {
    question: "If Beyonce could choose to be an animal, what would she be?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Gouldian Finch", correct: false },
      { text: "Tiger", correct: false },
      { text: "Whale", correct: true },
    ],
  },
  {
    question: "Finish the lyric - 'I just fell in love..'",
    answers: [
      { text: "'I'm lookin for a new vibration'", correct: false },
      { text: "'I'm buidin my own foundation''", correct: false },
      { text: "'I just quit my job'", correct: true },
      { text: "'and I don't wanna get up'", correct: false },
    ],
  },
  {
    question: "What was the name of Beyonce's Character in Austin Powers?",
    answers: [
      { text: "Brown Sugar", correct: false },
      { text: "Foxxy Cleopatra", correct: true },
      { text: "Honey Bee", correct: false },
      { text: "Queen Bee", correct: false },
    ],
  },
  {
    question: "Finish the lyric -- 'Ooh, boy you lookin like you like what you see'",
    answers: [
      { text: "'come on over and talk to me, please'", correct: false },
      { text: "'won't you come over and check up on it'", correct: true},
      { text: "'I'mma make you check up on it'", correct: false },
      { text: "'you can't be abrasive, have to know to pace it", correct: false },
    ],
  },
  {
    question: "What is Beyonce's sister's name?",
    answers: [
      { text: "Michelle ", correct: false },
      { text: "Kelly", correct: false },
      { text: "Farrah", correct: false },
      { text: "Solange", correct: true },
    ],
  }
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
    function showQuestion(){
        resetState();
        let currentQuestion =  questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
              button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer)
        });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;

    nextButton.style.display = "block";

  });
  }

  function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again?"
    nextButton.style.display = "block"
  }
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else {
    showScore();
  }
}

  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
      handleNextButton();
    }else{
      startQuiz();
    }
  });

  

startQuiz();



