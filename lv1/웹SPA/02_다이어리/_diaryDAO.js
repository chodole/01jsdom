

export class DiaryDAO{
    static diaryList = [];

    static start(){
        this.setSampleData();
    }

    static setSampleData(){
        this.diaryList = [
            {
                "diaryNo" : 1001,
                "title" : "제목1",
                "content" : "내용1",
                "regDate" : "2024-04-14"
            },
            {
                "diaryNo" : 1002,
                "title" : "제목2",
                "content" : "내용2",
                "regDate" : "2024-04-14"
            },
            {
                "diaryNo" : 1003,
                "title" : "제목3",
                "content" : "내용3",
                "regDate" : "2024-04-14"
            },
            {
                "diaryNo" : 1004,
                "title" : "제목4",
                "content" : "내용4",
                "regDate" : "2024-04-14"
            },
            {
                "diaryNo" : 1005,
                "title" : "제목5",
                "content" : "내용5",
                "regDate" : "2024-04-14"
            },
        ];
    }

    static getMaxNo(){
        let maxNo = 0;
        for(let i=0;i<this.diaryList.length;i++){
            if(maxNo < this.diaryList[i].diaryNo){
                maxNo = this.diaryList[i].diaryNo;
            }
        }
        return maxNo;
    }

    static diaryWritePro(title, content, regDate){
        let diary = {
            "diaryNo" : this.getMaxNo() + 1,
            "title" : title,
            "content" : content,
            "regDate" : regDate
        };

        this.diaryList.push(diary);

        console.log(this.diaryList);
    }

    static getDiaryList(year,month){
        let temp = [];

        for(let i=0;i<this.diaryList.length;i++){
            let token = this.diaryList[i].regDate.split("-");
            let tokenYear = Number(token[0]);
            let tokenMonth = Number(token[1]);

            if(tokenYear == year && tokenMonth == month){
                temp.push(this.diaryList[i]);
            }
        }

        return temp;
    }

    static getDiaryInfo(diaryNo) {
        for(let i=0;i<this.diaryList.length;i++){
            if(this.diaryList[i].diaryNo == diaryNo){
                return this.diaryList[i];
            }
        }
    }
}