body{
font-family:Arial;
margin:0;
text-align:center;
background:#87CEEB;
}

/* TITLE */

.title{
font-size:80px;
color:#1e88e5;
margin-top:40px;
}

/* CARD */

.card{
background:#2f3e46;
padding:30px;
border-radius:15px;
width:300px;
margin:auto;
color:white;
margin-top:120px;
}

/* INPUT */

input{
padding:10px;
width:80%;
border-radius:8px;
border:none;
}

/* BUTTON */

button{
padding:10px 25px;
margin-top:15px;
border:none;
border-radius:8px;
background:#2196f3;
color:white;
cursor:pointer;
}

/* DESCRIPTION */

.descPage{
margin-top:120px;
}

.descTitle{
font-size:80px;
color:white;
}

.descText{
font-size:20px;
color:#0d3b66;
max-width:600px;
margin:auto;
margin-top:15px;
}

/* QUIZ */

.quizContainer{
background:white;
padding:30px;
border-radius:15px;
width:420px;
margin:auto;
margin-top:120px;
box-shadow:0 10px 20px rgba(0,0,0,0.2);
}

/* ANSWERS */

.answers{
display:flex;
flex-direction:column;
gap:10px;
margin-top:20px;
}

.answerBtn{
padding:12px;
border:none;
border-radius:8px;
background:#e3f2fd;
cursor:pointer;
transition:0.2s;
}

.answerBtn:hover{
transform:scale(1.05);
}

/* CORRECT */

.correct{
background:#4caf50 !important;
color:white;
}

/* WRONG */

.wrong{
background:#f44336 !important;
color:white;
}

/* NEXT BUTTON */

.nextBtn{
margin-top:20px;
}

/* PROGRESS */

.progressBar{
width:100%;
height:12px;
background:#ddd;
border-radius:10px;
margin-top:10px;
}

.progressFill{
height:100%;
width:0%;
background:#4caf50;
}

/* HIDDEN */

.hidden{
display:none;
}

/* =========================
3D SKY BACKGROUND
========================= */

.sky3d{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:linear-gradient(#6ec6ff,#dff5ff);
overflow:hidden;
z-index:-1;
}

.sun{
position:absolute;
top:70px;
right:120px;
width:120px;
height:120px;
border-radius:50%;
background:radial-gradient(circle,#fff700,#ffb300);
box-shadow:0 0 80px rgba(255,200,0,0.7);
}

.cloud{
position:absolute;
left:-300px;
width:200px;
height:60px;
background:white;
border-radius:50px;
opacity:0.9;
box-shadow:
60px 10px white,
120px 15px white,
30px -10px white;
}

.layer1{
animation:cloudSlow 90s linear infinite;
}

.layer2{
animation:cloudMedium 60s linear infinite;
}

.layer3{
animation:cloudFast 40s linear infinite;
}

@keyframes cloudSlow{
0%{left:-300px}
100%{left:120%}
}

@keyframes cloudMedium{
0%{left:-300px}
100%{left:120%}
}

@keyframes cloudFast{
0%{left:-300px}
100%{left:120%}
}

.bird{
position:absolute;
font-size:32px;
left:-100px;
}

.bird1{
top:220px;
animation:birdFly 40s linear infinite;
}

.bird2{
top:380px;
animation:birdFly 55s linear infinite;
}

@keyframes birdFly{
0%{transform:translateX(0);}
50%{transform:translateX(80vw) translateY(-20px);}
100%{transform:translateX(160vw);}
}
You sent
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
