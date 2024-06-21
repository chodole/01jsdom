/*
    api 사용 시
    로컬에서 열 때 
    > 크롬 속성 
    > 대상 수정 
        + --disable-web-security --disable-web-security --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp -–allow-file-access-from-files
    > 관리자 권한으로 열기

    OR

    크롬 확장
    https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=ko 
*/
function Start(){
    clearInterval(playId);
    playId = null;
    player = null;
    setPlayer();
    setWord();
    drawPlayer("사람.png");
    $myAnswer.focus();
    playId = setInterval(Play,15);
    $start.disabled = true;
}

function Play(){
    ctx.clearRect(90, 0, canvas.width, canvas.height);
    for(let i=0; i<wordList.length;i++){
        wordList[i].x -= 1;
        moveWord(i);
    }
    
    $hp.innerHTML = player.hp;
    $score.innerHTML = player.score;

    if(wordList.length == 0){
        $start.disabled  = true;
        $myAnswer.value = "";
        WordsApi();
        drawPlayer("사람4.png");

        clearInterval(playId);
        setTimeout(()=>alert("성공 :"+player.score+"점"),300);
    }else{
        falseCheck();
        answerCheck();
    }
}

function falseCheck(){
    if(wordList[0].x <= 90){
        player.hp -= 1;
        drawPlayer("사람3.png");
        if(player.hp <= 0){
            $hp.innerHTML = player.hp;
            $score.innerHTML = player.score;
            $start.disabled  = true;
            $myAnswer.value = "";
            WordsApi();
            
            ctx.clearRect(90, 0, canvas.width, canvas.height);
            clearInterval(playId);
            setTimeout(()=>alert("실패 :"+player.score+"점"),300);

        }
        wordList.splice(0,1); 
        
        if(wordList.length != 0){
            setTimeout(()=>drawPlayer("사람.png"),120);
        }
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

const getWords = async(wordCount) =>{
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if(response.status === 200){
        const data = await response.json();
        wordSet.push(data.puzzle);
        loading ++;

        if(loading == 10){
            $start.disabled  = false;
        }

        return data.puzzle;
    }else{
        throw new Error('unable to get puzzle');
    }
}

function WordsApi(){
    loading = 0;
    wordList = [];
    wordSet = [];
    for(let i=0; i<10; i++){
        getWords('1');
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
            "text" : wordSet[i],
        }
        wordList.push(temp);
    }
    console.log(wordSet);
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
        "x": 10,
        "y" : 250,
        "width" : 80,
        "height" : 150,
        "hp" : 3,
        "score" : 0
    };
}

function drawPlayer(imgsrc){
    ctx.clearRect(0, 0, 90, canvas.height);
    let img = new Image();
    img.src = imgsrc;
    ctx.beginPath();
    img.onload = function(){
        ctx.drawImage(img,player.x,player.y,player.width,player.height);
    }
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
            drawPlayer("사람2.png");
            keyonce = "true";
        }
    }
});

window.addEventListener("keyup",(e)=>{
    if(e.code == "Enter"){
        if(wordList.length!=0){
            setTimeout(()=>drawPlayer("사람.png"),150);
        }
            
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
let wordSet = [];
let loading = 0;
let keyonce = "up";
setPlayer();
drawPlayer("사람.png");
WordsApi();




