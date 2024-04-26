
function reset(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dolList = [];
    color = "";
    turn = 0;

    drawGrid();
}

function drawGrid(){
    ctx.beginPath();

    for(let i=0;i<lineCount;i++){
        let startX = originX + linegap * i;
        let startY = originY;
        let endX = startX;
        let endY = startY + linegap * (lineCount - 1);

        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }

    for(let i=0;i<lineCount;i++){
        let startX = originX;
        let startY = originY + linegap * i;
        let endX = startX + linegap * (lineCount - 1);
        let endY = startY;

        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }

    ctx.closePath();
}

function gridCheck(){
    let minX = 0;
    let minY = 0;
    let maxX = 0;
    let maxY = 0;
    let gap = 25;
    let index = 0;
    
    for(let i=0;i<lineCount;i++){
        minY = originY + gap * index;
        
        if(i == 0){
            index ++;
            maxY = minY+gap;
        }else {
            index += 2;
            maxY = minY+linegap;
        }

        if(y>=minY && y<maxY){
            y = originY + i * linegap;
            
            let index2 = 0;

            for(let j=0; j<lineCount;j++){
                minX = originX + gap*index2;

                if(j == 0){
                    index2 ++;
                    maxX = minX+gap;
                }else {
                    index2 += 2;
                    maxX = minX+linegap;
                }

                if(x>=minX && x<maxX){
                    x = originX + j * linegap;

                    if(!dolCheck(x,y)){
                        if(turn%2==0){
                            color = "black";
                        }else{
                            color = "white";
                        }

                        let dol = {"x" : x, "y" : y, "color" : color};
                        dolList.push(dol);
                        return true;
                    }
                }
            }
            return false;
        }
    }
}

function dolCheck(x,y){
    for(let i=0;i<dolList.length;i++){
        if(dolList[i].x == x && dolList[i].y == y){
            return true;
        }
    }
    return false;
}

function drawDol() {
    ctx.beginPath();

    ctx.arc(dolList[turn].x,dolList[turn].y,radius,0,angle);
    ctx.fillStyle = dolList[turn].color;
    ctx.stroke();
    ctx.fill();

    ctx.closePath();
}


function winCheck() {
    for(let i=0;i<dolList.length;i++){
        let garo = 0;
        let sero = 0;
        let dagak1 = 0;
        let dagak2 = 0;

        // 가로, 세로 체크
        for(let j=0;j<5;j++){
            let garonextdol = dolList[i].x + j * linegap;
            let seroNextdol = dolList[i].y + j * linegap;

            let nextX = dolList[i].x + j*linegap;
            let nextY = dolList[i].y - j*linegap;

            let nextX2 = dolList[i].x + j*linegap;
            let nextY2 = dolList[i].y + j*linegap;

            for(let k=0;k<dolList.length; k++){
                if(dolList[i].color == dolList[k].color){
                    if(dolList[i].y == dolList[k].y && garonextdol == dolList[k].x){
                        garo++;
                    }
                    if(dolList[i].x == dolList[k].x && seroNextdol == dolList[k].y){
                        sero++;
                    }
                    if(dolList[k].y == nextY && dolList[k].x == nextX){
                        dagak1 ++;
                    }
                    if(dolList[k].y == nextY2 && dolList[k].x == nextX2){
                        dagak2 ++;
                    }
                }
            }
        }

        if(garo == 5 || sero == 5 || dagak1 == 5 || dagak2 == 5){
            return true;
        }
    }
    return false;
}

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let $grid = document.querySelector("#grid");
let $reset = document.querySelector("#reset");

$reset.addEventListener("click",reset);

let x = 0;
let y = 0;
let radius = 20;
let angle = Math.PI*2;

let dolList = [];
let blackList = [];
let whiteList = [];
let color = "";
let turn = 0;

let originX = 100;
let originY = 100;
let linegap = 50;
let lineCount = 10;

window.addEventListener("click",(e)=>{
    x = e.clientX - ctx.canvas.offsetLeft;
    y = e.clientY - ctx.canvas.offsetTop;
    
    if(gridCheck()){
        drawDol();
        
        if(winCheck()){
            setTimeout(()=>{
                alert("승자는 "+ dolList[turn].color +"색");
                reset();
            },100);
            
        }else{
            turn++;
        }
    }
});

drawGrid();
