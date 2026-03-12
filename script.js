let questions = [

{
question:"What is the probability that both coins are heads?",
answers:["1/2","1/3","1/4","1/6"],
correct:2
},

{
question:"What is the probability of rolling an even number?",
answers:["1/6","1/2","2/3","3/4"],
correct:1
},

{
question:"What is the probability of drawing a heart from 52 cards?",
answers:["1/2","1/4","1/13","1/3"],
correct:1
},

{
question:"Two dice rolled. Probability sum is 7?",
answers:["1/6","1/12","1/8","1/4"],
correct:0
},

{
question:"Bag: 4 red 3 blue 3 green. Probability blue?",
answers:["3/10","1/2","1/5","2/5"],
correct:0
}

];

let currentQuestion = 0;
let score = 0;

function startGame(){

document.getElementById("startScreen").classList.add("hidden");
document.getElementById("descScreen").classList.remove("hidden");

}

function startLevel1(){

document.getElementById("descScreen").classList.add("hidden");
document.getElementById("quizScreen").classList.remove("hidden");

showQuestion();

}

function showQuestion(){

let q = questions[currentQuestion];

document.getElementById("question").innerText = q.question;

let answersDiv = document.getElementById("answers");

answersDiv.innerHTML="";

q.answers.forEach((answer,index)=>{

let btn = document.createElement("button");

btn.innerText = answer;

btn.classList.add("answerBtn");

btn.onclick = ()=>selectAnswer(btn,index);

answersDiv.appendChild(btn);

});

document.getElementById("progressText").innerText =
"Question "+(currentQuestion+1)+" / "+questions.length;

let progress =
((currentQuestion)/questions.length)*100;

document.getElementById("progressFill").style.width =
progress+"%";

}

function selectAnswer(button,index){

let q = questions[currentQuestion];

let buttons = document.querySelectorAll(".answerBtn");

buttons.forEach(b=>b.disabled=true);

if(index===q.correct){

button.classList.add("correct");

score++;

document.getElementById("score").innerText = score;

}else{

button.classList.add("wrong");

buttons[q.correct].classList.add("correct");

}

document.getElementById("nextBtn").classList.remove("hidden");

}

function nextQuestion(){

currentQuestion++;

document.getElementById("nextBtn").classList.add("hidden");

if(currentQuestion<questions.length){

showQuestion();

}else{

alert("Game Finished! Score: "+score);

location.reload();

}

}
