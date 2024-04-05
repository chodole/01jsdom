
let $map = document.querySelector("#snakeMap");
let head = [0,0];
let taleList = [[0,1],[0,2],[0,3]];
let taleMove = ["left","left","left"];
let wall = false;
let score = 0;

let autoMove = null;
let scoreCheck = null;
let frameCount = 0;

makeSnake();

// function AutoMove(text){
//     if(autoMove != null){
//         clearInterval(autoMove);
//     }else {
//         scoreCheck = setInterval(scoreCount,1000);
//     }
//     autoMove = setInterval(function(){move(text)},60);
// }

function step(text){
    //벽일 시 애니메이션 취소
    if(wall){
        cancelAnimationFrame(autoMove);
    }

    //프레임이 5가 되기전까지 재귀함수로 호출
    frameCount++;
    if(frameCount < 5){
        autoMove = requestAnimationFrame(function(){step(text)});
        return;
    }

    //프레임이 5가 되면 프레임을 초기화하고 애니메이션이 움직임
    frameCount = 0;
    move(text);
    autoMove = requestAnimationFrame(function(){step(text)});
}

function AutoMove(text){
    if(autoMove != null){
        //text가 겹치지 않도록 미리 애니메이션 리셋
        cancelAnimationFrame(autoMove);
    }else {
        scoreCheck = setInterval(scoreCount,1000);
    }
    autoMove = requestAnimationFrame(function(){step(text)});
}

function scoreCount() {
    score+=1;
    let scoreId = document.querySelector("#score");
    scoreId.innerHTML = score+" 점";
}

function move(text){
    let check = moveCheck(text);

    if(check){
        text = taleMove[0];
    }

    switch(text){
        case "right" : moveRight(head); break;
        case "left" : moveLeft(head); break;
        case "up" : moveUp(head); break;
        case "down": moveDown(head); break;
    }

    if(wall) {
        alert("벽에 부딪혔습니다 \n점수 : "+score+" 점");
        cancelAnimationFrame(autoMove);
        
        head = [0,0];
        taleList = [[0,1],[0,2],[0,3]];
        taleMove = ["left","left","left"];
        score = -1;

        $map.innerHTML = "";
        makeSnake();
        AutoMove("down");
        return;
    }

    if(!wall) {
        taleMoveFun();
        taleMove[2] = taleMove[1];
        taleMove[1] = taleMove[0];
        taleMove[0] = text;
    }
        
    $map.innerHTML = "";
    makeSnake();
    
}

function taleMoveFun(){
    for(let i=0;i<taleList.length;i++){
        switch(taleMove[i]){
            case "right" : moveRight(taleList[i]); break;
            case "left" : moveLeft(taleList[i]); break;
            case "up" : moveUp(taleList[i]); break;
            case "down": moveDown(taleList[i]); break;
        }
    }
}

function moveCheck(text){
    let firstCheck = null;
    let lastCheck = null;

    if(text == "right"){
        firstCheck = head[1]+1 == taleList[0][1]; 
        lastCheck = head[1]+1 == taleList[2][1] && head[0] == taleList[2][0];

        return (firstCheck || lastCheck) ? true : false;

    }else if(text == "left"){
        firstCheck = head[1]-1 == taleList[0][1];
        lastCheck = head[1]-1 == taleList[2][1] && head[0] == taleList[2][0];

        return (firstCheck || lastCheck) ? true : false;

    }else if(text == "up"){
        firstCheck = head[0]-1 == taleList[0][0];
        lastCheck = head[0]-1 == taleList[2][0] && head[1] == taleList[2][1];

        return (firstCheck || lastCheck) ? true : false;

    }else if(text == "down"){
        firstCheck = head[0]+1 == taleList[0][0];
        lastCheck = head[0]+1 == taleList[2][0] && head[1] == taleList[2][1];

        return (firstCheck || lastCheck) ? true : false;
    }
}

function moveLeft(list){
    if(list[1]<=0){
        list[1]=0;
        wall = true;
    }else{
        list[1]--;
        wall = false;
    }
}

function moveRight(list){
    if(list[1]>=8){
        list[1]=8;
        wall = true;
    }else {
        list[1]++;
        wall = false;
    }
}

function moveUp(list){
    if(list[0]<=0){
        list[0]=0;
        wall = true;
    }else{
        list[0]--;
        wall = false;
    }
}

function moveDown(list){
    if(list[0]>=8){
        list[0]=8;
        wall = true;
    }else{
        list[0]++;
        wall = false;
    }
}


let $right = document.querySelector("#right");
let $up = document.querySelector("#up");
let $left = document.querySelector("#left");
let $down = document.querySelector("#down");

$right.addEventListener("click",function(){AutoMove("right");});
$up.addEventListener("click",function(){AutoMove("up");});
$left.addEventListener("click",function(){AutoMove("left");});
$down.addEventListener("click",function(){AutoMove("down");});

window.addEventListener("keydown",(e)=>{
    if(e.code == "ArrowRight"){
        AutoMove("right");
    }else if(e.code == "ArrowLeft"){
        AutoMove("left");
    }else if(e.code == "ArrowUp"){
        AutoMove("up");
    }else if(e.code == "ArrowDown"){
        AutoMove("down");
    }
})


function makeSnake(){
    let $table = document.createElement("table");
    
    for(let i =0;i<9;i++){
        let $tr = document.createElement("tr");

        for(let j=0;j<9;j++){
            let $td = document.createElement("td");
            snakeTail($td,i,j);
            $tr.append($td);
        }
        $table.append($tr);
    }
    $map.append($table);
}

function snakeTail(e,i,j){
    if(i==head[0] && j==head[1]){
        e.style.backgroundColor = "#117A65";
    }

    for(let k=0;k<taleList.length;k++){
        if(i==taleList[k][0] && j==taleList[k][1]){
            e.style.backgroundColor="#16A085";
        }
    }
}