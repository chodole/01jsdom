
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    keyNote();
    if(index < noteList.length-1){
        noteList[index].delay -= 2;
        if(noteList[index].delay <= 0){
            index++;
        }     
    }
    
    drawCombo();
    drawCombo2();
    lineDraw(); 
    
    moveNote();
    drawNote();
    pushNote();
    comboCheck();
}

function moveNote(){
    for(let i=0;i<=index;i++){
        if(noteList[i].check){
            noteList[i].y += noteList[i].speed;
            if(noteList[i].y >= canvas.height ){
                noteList[i].check = false;
                if(noteList[i].combo == false && i < noteList.length-1){
                    combo = 0;
                    $combo.innerHTML = combo;
                    $cmRank.innerHTML = "MISS";
                }
            }
        }
    }
}

function drawNote(){
    for(let i=0;i<=index;i++){
        if(noteList[i].check) {
            ctx.beginPath();
            ctx.rect(noteList[i].x, noteList[i].y, noteList[i].width, noteList[i].height);
            ctx.fillStyle = noteList[i].color;
            ctx.fill();
            ctx.closePath();
        }
    }
}

function keyNote(){
    for(let i=0;i<keyList.length;i++){
        ctx.beginPath();
        ctx.rect(keyList[i].x, keyList[i].y, keyList[i].width, keyList[i].height);
        ctx.fillStyle = keyList[i].color;
        ctx.fill();
        ctx.closePath();
    }
}

function lineDraw(){
    for(let i=1;i<5;i++){
        let text = "";
        if(i==1) text = "A";
        if(i==2) text = "S";
        if(i==3) text = "D";
        if(i==4) text = "F";
        
        ctx.beginPath();
        ctx.rect(i*100,0,2,canvas.height);
        ctx.fillStyle = "black";
        ctx.font = "15px serif";
        ctx.fillText(text,(i-1)*100+45,canvas.height-20);
        ctx.fill();
        ctx.closePath();
    }
}

function getKeyStay(key){
    if(keyStay[key] == "true"){
        keyStay[key] = "down";
        return true;
    }
    if(keyStay[key] == "down") {
        return false;
    }
}

function pushNote(){
    changePush(0,"A");
    changePush(1,"S");
    changePush(2,"D");
    changePush(3,"F");
}

function changePush(index, key){
    if(getKeyStay(key)){
        keyList[index].color = "red";
        comboCheck(key)
    }else if(getKeyStay(key) == false) {
        setTimeout(()=>{keyList[index].color="coral"},20);
    }
}

function comboCheck(key){
    if(key == "A"){
        for(let i=0;i<noteList.length;i++){
            if(noteList[i].x == 0 && noteList[i].check){
                comboRank(i);
            }
        }
    }

    if(key == "S"){
        for(let i=0;i<noteList.length;i++){
            if(noteList[i].x == 100 && noteList[i].check){
                comboRank(i);
            }
        }
    }

    if(key == "D"){
        for(let i=0;i<noteList.length;i++){
            if(noteList[i].x == 200 && noteList[i].check){
                comboRank(i);
            }
        }
    }

    if(key == "F"){
        for(let i=0;i<noteList.length;i++){
            if(noteList[i].x == 300 && noteList[i].check){
                comboRank(i);
            }
        }
    }
}

function comboRank(i){
    if(noteList[i].y<canvas.height-35 && noteList[i].y>=canvas.height-50){
        $cmRank.innerHTML = "GOOD";
        score += 10;
        combo++;
        noteList[i].combo = true;
        noteList[i].check = false;
        $score.innerHTML = score;
        $combo.innerHTML = combo;
    }else if(noteList[i].y>=canvas.height-35 && noteList[i].y<canvas.height-5){
        $cmRank.innerHTML = "GREAT";
        score += 20;
        combo++;
        noteList[i].combo = true;
        noteList[i].check = false;
        $score.innerHTML = score;
        $combo.innerHTML = combo;
    }else if(noteList[i].y >= canvas.height-5 || (noteList[i].y<canvas.height-50 && noteList[i].y>=canvas.height-60 )){
        $cmRank.innerHTML = "MISS";
        combo = 0;
        noteList[i].combo = false;
        noteList[i].check = false;
        $score.innerHTML = score;
        $combo.innerHTML = combo;
    }
}

function drawCombo() {
    ctx.beginPath();
    ctx.rect(0,canvas.height-60,canvas.width,10);
    ctx.fillStyle = "skyblue";
    ctx.fill();
    ctx.closePath();
}
function drawCombo2(){
    ctx.beginPath();
    ctx.rect(0,canvas.height-50,canvas.width,15);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();
}

window.addEventListener("keydown",(e)=>{
    if(e.code == "KeyA"){
        if(keyStay.A == "up"){
            keyStay.A = "true";
        }
    }
    if(e.code == "KeyS"){
        if(keyStay.S == "up"){
            keyStay.S = "true";
        }
    }
    if(e.code == "KeyD"){
        if(keyStay.D == "up"){
            keyStay.D = "true";
        }
    }
    if(e.code == "KeyF"){
        if(keyStay.F == "up"){
            keyStay.F = "true";
        }
    }
});

window.addEventListener("keyup",(e)=>{
    if(e.code == "KeyA"){
        keyStay.A = "up";
    }
    if(e.code == "KeyS"){
        keyStay.S = "up";
    }
    if(e.code == "KeyD"){
        keyStay.D = "up";
    }
    if(e.code == "KeyF"){
        keyStay.F = "up";
    }
});

function setNote(){
    for(let i=0;i<5;i++){
        let r = Math.floor(Math.random()*4);
        let note = {
            "x" : r*100,
            "y" : 0,
            "width":100,
            "height" : 30,
            "speed" : 5,
            "color" : "blue",
            "delay" : 0,
            "check" : true,
            "combo" : false
        };
        note.delay = note.height+20;
        if(i!= 0){
            note.delay = noteList[i-1].height+20;
        }

        noteList.push(note);
    }
}

function setKey(){
    for(let i=0;i<4;i++){
        let temp = {
            "x" : i*100,
            "y" : canvas.height-35,
            "width" : 100,
            "height" : 30,
            "color" : "coral"
        }
        keyList.push(temp);
    }
}

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let noteList = [];
let keyList = [];
let keyStay = {"A" : "up", "S" : "up", "D" : "up", "F" : "up"};
let index = 0;
let score = 0;
let combo = 0;
let $combo = document.querySelector("#combo");
let $score = document.querySelector("#score");
let $cmRank = document.querySelector("#comboRank");
let $button = document.querySelector("#button");

let timeInterval = null;

function note(){
    noteList = [];
    keyList = [];
    keyStay = {"A" : "up", "S" : "up", "D" : "up", "F" : "up"};
    index = 0;
    score = 0;
    combo = 0;

    $combo.innerHTML = combo;
    $score.innerHTML = score;
    $cmRank.innerHTML = "";
}

$button.addEventListener("click",()=>{
    clearInterval(timeInterval);
    note();
    setNote(); 
    setKey();

    timeInterval = setInterval(draw,10);
});

