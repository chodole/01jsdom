
function GameStart(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    railList = [];
    horseList = [];
    clearInterval(playId);

    setHorse();
    setRail();

    drawRail();
    for(let i=0;i<horseList.length;i++){
        drawHorse(i);
    }

    playId = setInterval(Play,800);
}

function Play(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRail();

    for(let i=0;i<$choose.length;i++){
        if($choose[i].checked){
            choose = $choose[i].value;
        }
    }

    if (winCheck()){
        clearInterval(playId);
        setTimeout(()=>{
            if(choose == win){
                alert("1등 ="+win+"번, 맞추셨습니다.");
            } else{
                alert("1등 ="+win+"번, 틀리셨습니다.");
            }
        },200);

        for(let i=0;i<horseList.length;i++){
            drawHorse(i);
        }
    }else{
        for(let i=0;i<horseList.length;i++){
            drawHorse(i);
        }

        for(let i=0;i<horseList.length;i++){
            let r = Math.floor(Math.random() * 5)+1;
            horseList[i].x += r*28;
        }
    }
}

function winCheck(){
    for(let i=0; i<horseList.length;i++){
        if(horseList[i].x >= 1130){
            horseList[i].x = 1130;
        }
    }

    for(let i=0; i<horseList.length;i++){
        if(horseList[i].x >= 1130){

            switch(i) {
                case 0 : win = "1"; break;
                case 1 : win = "2"; break;
                case 2 : win = "3"; break;
                case 3 : win = "4"; break;
                case 4 : win = "5"; break;
            }
            return true;
        }
    }
    return false;
}

function setHorse(){
    let gap = 28;
    for(let i=0;i<5;i++){
        let temp = {
            "x" : 10,
            "y" : i*gap + 10,
            "color": "white",
            "text" : (i+1)+""
        }

        switch(i){
                case 0 : temp.color = "red"; break;
                case 1 : temp.color = "orange"; break;
                case 2 : temp.color = "yellow"; break;
                case 3 : temp.color = "green"; break;
                case 4 : temp.color = "blue"; break;
        }

        horseList.push(temp);
    }
}

function setRail(){
    let gap = 28;
    for(let j = 0; j<horseList.length; j++){
        for(let i = 0; i<41; i++){
            let temp = {
                "x" : 0+gap*i+10,
                "y" : 0+gap*j+10
            }
            railList.push(temp);
        }
    }
}

function drawRail(){
    ctx.beginPath();
    for(let i=0;i<railList.length;i++){
        ctx.rect(railList[i].x,railList[i].y,25,25);
        ctx.stroke();
    }
    ctx.closePath();
}

function drawHorse(i){
    ctx.beginPath();
    ctx.rect(horseList[i].x,horseList[i].y,25,25);
    ctx.fillStyle = horseList[i].color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    drawNum(i);
}

function drawNum(i){
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "15px serif";
    ctx.fillText(horseList[i].text,horseList[i].x+8,horseList[i].y+17);
    ctx.fill();
    ctx.closePath();
}

let $play = document.querySelector("#play");
$play.addEventListener("click",GameStart);

let choose = ""
let $choose =document.getElementsByName("horseNum");
let win = "";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let railList = [];
let horseList = [];

setHorse();
setRail();

drawRail();
for(let i=0;i<horseList.length;i++){
    drawHorse(i);
}

let playId = null;

