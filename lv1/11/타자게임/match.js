function Start(){
    wordList = [];
    playId = null;
    player = null;
    setPlayer();
    setWord();
    $myAnswer.focus();
    playId = setInterval(Play,10);
}

function Play(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    console.log(wordList[0].x);
    for(let i=0; i<wordList.length;i++){
        wordList[i].x -= 1;
        moveWord(i);
    }
    falseCheck();
    answerCheck();

    $hp.innerHTML = player.hp;
    $score.innerHTML = player.score;

    if(wordList.length == 0){
        alert("성공 :"+player.score+"점");
    }
}

function falseCheck(){
    if(wordList[0].x <= 70){
        player.hp -= 1;
        if(player.hp <= 0){
            alert("실패 :"+player.score+"점");
            clearInterval(playId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawPlayer();
        }
        wordList.splice(0,1);
    }
}

function answerCheck(){
    if(keyOnce()){
        if(wordList[0].text === $myAnswer.value){
            player.score += 10;
            wordList.splice(0,1);
        }
        $myAnswer.value = "";
    }
}

function setWord(){
    let word = ["apple","strawberry","banana","grape","orange","lemon","lime","melon","watermelon","peach"];

    for(let i=0;i<word.length;i++){
        let temp = {
            "x" : canvas.width+i*150,
            "y" : 320,
            "width" : 50,
            "height" : 30,
            "text" : word[i],
        }
        wordList.push(temp);
    }
}

function moveWord(i){
    ctx.beginPath();
    ctx.font = "bold 20px Gulim";
    ctx.fillStyle = "black";
    ctx.fillText(wordList[i].text,wordList[i].x,wordList[i].y);
    ctx.closePath();
}

function setPlayer(){
    player = {
        "x": 40,
        "y" : 300,
        "width" : 50,
        "height" : 60,
        "hp" : 3,
        "score" : 0
    };
}



function drawPlayer(){
    ctx.beginPath();
    ctx.rect(player.x,player.y,player.width,player.height);
    ctx.fillStyle = "Coral";
    ctx.fill();
    ctx.closePath();
}

function keyOnce(){
    if(keyonce == "true"){
        keyonce = "down";
        return true;
    }
    if(keyonce == "down"){
        return false;
    }
}

window.addEventListener("keydown",(e)=>{
    if(e.code == "Enter"){
        if(keyonce=="up"){
            keyonce = "true";
        }
    }
});

window.addEventListener("keyup",(e)=>{
    if(e.code == "Enter"){
        keyonce = "up";
    }
});



let $start = document.querySelector("#start");
$start.addEventListener("click",Start);
let $myAnswer = document.querySelector("#myAnswer");
let $hp = document.querySelector("#hp");
let $score = document.querySelector("#score");
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let playId = null;
let player = null;
let wordList = [];
let keyonce = "up";
setPlayer();
drawPlayer();