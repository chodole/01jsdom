class Note{
    sero = [];
    garo = 0;

    speed = 0;
    long = 0;

    constructor(sero,garo,speed){
        this.sero = sero;
        this.garo = garo;
        this.speed = speed;
    }
}

class NoteDao{
    noteList = [];

    setNote(){
        for(let i=0;i<10;i++){
            let sero = [];
            let garo = Math.floor(Math.random() * 4);
            let speed = Math.floor(Math.random() * 10)*100;
            let long = Math.floor(Math.random()*3)+1;

            console.log("garo = "+garo+" long ="+long);

            if(i> 0){
                if(this.noteList[i-1].sero.length>=2 && this.noteList[i-1].garo == garo){
                    i--;
                }
            }
            
            let temp = [0,garo,0];
            for(let i=0;i<long;i++){
                if(i==0){
                    sero.push(temp);
                }else{
                    sero.push(0);
                }
            }
            let note = new Note(sero,garo,speed);

            this.noteList.push(note);
        }
    }

}