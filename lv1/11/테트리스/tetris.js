
function setBlock(){
    block = [];
    first = true;
    shape = Math.floor(Math.random() * 5);

    if(shape == 0){

    } else if(shape == 1){

    } else if(shape == 2){

    } else if(shape == 3){

    } else if(shape == 4){
        
    }

    // for(let i=1;i<3;i++){
    //     for(let j=1;j<3;j++){
    //         let temp = (4+j)+(12*i);
    //         block.push(temp);
    //     }
    // }

    for(let i=1;i<=3;i++){
        let temp = 12+4+i;
        block.push(temp);
    }
}

function Play(){
    dropBlock();
    blockMove();
}

function dropBlock(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i=0;i<block.length;i++){
        if(map[block[i]].text == "6"){
            clearInterval(timeId);
            drawMap();
            alert("game Over");
            return;
        }
    }

    for(let i=0;i<block.length;i++){
        map[block[i]].color = "yellow";
        map[block[i]].text = "6";
    }

    drawMap();

    let check = false;
    
    for(let i=0;i<block.length-1;i++){
        let temp = parseInt(block[i]/12);
        let temp2 = parseInt(block[i+1]/12);

        let blockCheck = block[i+1]+12;
        if(temp<=temp2){
            if(map[blockCheck].text == "6"){
                check = true;
            }
        }
    }
    let temp = block[block.length-1] + 12;
    if(map[temp].text == "8" || check){
        clearInterval(timeId);
        setBlock();
        timeId = setInterval(Play,100);
    }

    for(let i=0;i<block.length;i++){
        map[block[i]].color = "white";
        map[block[i]].text = "0";
        
        block[i] += 12;
    }

    if(first){
        block.unshift(19);
        first = false;
    }
}

function setMap(){
    for(let i=0;i<22;i++){
        for(let j=0;j<12;j++){
            let temp = {
                "x" : 0 + 25*j,
                "y" : 0 + 25*i,
                "width" : 25,
                "height" : 25,
                "text" : "0",
                "color" : "white",
                "block" : false
            }
            if(i==0 || j==0 || i==21 || j==11){
                temp.color = "gray";
                temp.text = "8";
            }
            map.push(temp);
        }
    }
}

function drawMap(){
    for(let i=0;i<map.length;i++){
        ctx.beginPath();
        ctx.rect(map[i].x,map[i].y,map[i].width,map[i].height);
        ctx.fillStyle = map[i].color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

function keyOnce(key) {
    if(keySet[key] == "down"){
        return true;
    }
    return false;
}

function endCheck(){
    for(let i=0;i<block.length;i++){
        if(map[block[i]].text == "8" || map[block[i]].text == "6"){
            return true;
        }
    }
    return false;
}

function blockMove(){
    if(keyOnce("right")){
        for(let i=0;i<block.length;i++){
            block[i] += 1;
        }
        if(endCheck()){
            for(let i=0;i<block.length;i++){
                block[i] -= 1;
            }
        }
    }
    if(keyOnce("left")){
        for(let i=0;i<block.length;i++){
            block[i] -= 1;
        }
        if(endCheck()){
            for(let i=0;i<block.length;i++){
                block[i] += 1;
            }
        }
    }
    if(keyOnce("down")){
        dropBlock();
    }
}

window.addEventListener("keydown",(e)=>{
    if(e.code == "ArrowDown"){
        keySet.down = "down";
    }
    if(e.code == "ArrowLeft"){
        keySet.left = "down";
    }
    if(e.code == "ArrowRight"){
        keySet.right = "down";
    }
    if(e.code == "Space"){
        keySet.turn = "down";
    }
});

window.addEventListener("keyup",(e)=>{
    if(e.code == "ArrowDown"){
        keySet.down = "up";
    }
    if(e.code == "ArrowLeft"){
        keySet.left = "up";
    }
    if(e.code == "ArrowRight"){
        keySet.right = "up";
    }
    if(e.code == "Space"){
        keySet.turn = "up";
    }
});

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let map = [];
let block = [];
let keySet = {"right" : "up", "left" : "up", "down" : "up", "turn" : "up"};
let timeId = null;
let first = true;
let shape = null;

setMap();
drawMap();
setBlock();
timeId = setInterval(Play,100);

