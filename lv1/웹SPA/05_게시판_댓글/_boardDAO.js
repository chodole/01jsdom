import { ControllerMain } from "./_controllerMain.js";

export class BoardDAO {

    static boardList = [];

    static start() {
        this.setSampleData();
    }

    static setSampleData() {
        this.boardList = [
            {
                "boardNo"   : 1001,
                "title"     : "제목1",
                "content"   : "내용1",
                "writer"    : "작성자1",
                "regDate"   : "2023-03-19",
                "readCount" : 0,
                "ref"       : 1,
                "reStep"    : 1,
                "reLevel"   : 1
            },
            {
                "boardNo"   : 1002,
                "title"     : "제목2",
                "content"   : "내용2",
                "writer"    : "작성자2",
                "regDate"   : "2023-03-19",
                "readCount" : 0,
                "ref"       : 2,
                "reStep"    : 1,
                "reLevel"   : 1
            },
            {
                "boardNo"   : 1003,
                "title"     : "제목3",
                "content"   : "내용3",
                "writer"    : "작성자3",
                "regDate"   : "2023-03-19",
                "readCount" : 0,
                "ref"       : 3,
                "reStep"    : 1,
                "reLevel"   : 1
            },
        ];
    }

    static getBoardList() {
        return this.boardList;
    }

    static getBoardSortList() {
        // 같은 ref기준으로 내림차순 정렬
        // 같은 ref기준으로 다시 reLvel기준으로 오름차순 정렬

        this.boardList.sort((a ,b )=>{
            if(a.ref < b.ref){
                return 1;
            }else if(a.ref > b.ref){
                return -1;
            }else{
                if(a.reLevel < b.reLevel){
                    return -1;
                }else if(a.reLevel > b.reLevel){
                    return 1;
                }else{
                    return 0;
                }
            }
        });

        // for(let i=0; i<this.boardList.length; i++) {
        //     for(let j=i+1; j<this.boardList.length; j++) {
               
        //         if(this.boardList[i].ref < this.boardList[j].ref) {
        //             let temp = this.boardList[i];
        //             this.boardList[i] = this.boardList[j];
        //             this.boardList[j] = temp;
        //         } 

        //         if(this.boardList[i].ref == this.boardList[j].ref) {
        //             if(this.boardList[i].reLevel > this.boardList[j].reLevel) {
        //                 let temp = this.boardList[i];
        //                 this.boardList[i] = this.boardList[j];
        //                 this.boardList[j] = temp;
        //             }
        //         }    
        //     }
        // }

        console.log(this.boardList);
        return this.boardList;
    }

    static getBoard(boardNo) {
        let index = 0;
        for(let i=0; i<this.boardList.length; i++) {
            if(this.boardList[i].boardNo == boardNo) {
                index = i;
                break;
            }
        } 

        return this.boardList[index];
    }

    static modifyBoard(boardNo, boardTitle, boardContent) {
        let index = 0;
        for(let i=0; i<this.boardList.length; i++) {
            if(this.boardList[i].boardNo == boardNo) {
                index = i;
                break;
            }
        } 

        this.boardList[index].title = boardTitle;
        this.boardList[index].content = boardContent;
    }
    
    static deleteBoard(boardNo) {
        let index = 0;
        for(let i=0; i<this.boardList.length; i++) {
            if(this.boardList[i].boardNo == boardNo) {
                index = i;
                break;
            }
        } 

        this.boardList.splice(index, 1);
    }

    static getMaxBoardNo() {
        let maxBoardNo = 1000;
        for(let i=0; i<this.boardList.length; i++) {
            if(maxBoardNo < this.boardList[i].boardNo) {
                maxBoardNo = this.boardList[i].boardNo;
            }
        }
        return maxBoardNo;
    }
    static getMaxRef(){
        let max = 0;
        for(let i = 0; i < this.boardList.length; i++){
            if(this.boardList[i].ref > max){
                max = this.boardList[i].ref;
            }
        }
        return max;
    }

    static setBoardDummyAdd() {

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if(month < 10) {
            month = "0" + month;
        }
        let day = date.getDate();
        let today = year + "-" + month + "-" + day;

        
        for(let i=0; i<40; i++) {
            let maxboardNo = this.getMaxBoardNo() + 1;
            let maxRef = this.getMaxRef() + 1;
            let dummyBoard = {
                "boardNo"   : maxboardNo,
                "title"     : "제목" + maxboardNo,
                "content"   : "내용" + maxboardNo,
                "writer"    : "작성자" + maxboardNo,
                "regDate"   : today,
                "readCount" : 0,
                "ref"       : maxRef,
                "reStep"    : 1,
                "reLevel"   : 1
            };

            this.boardList.push(dummyBoard);
        }
    }

    static getBordCount() {
        return this.boardList.length;
    }

    static getBoardPagingList(startIndex, endIndex) {
        let boardPagingList = [];
        for(let i=startIndex; i<endIndex; i++) {
            boardPagingList.push(this.boardList[i]);
        }

        return boardPagingList;
    }

    

    static boardWritePro(inputBoardTitle, textareaBoardContent) {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if(month < 10) {
            month = "0" + month;
        }
        let day = date.getDate();
        let today = year + "-" + month + "-" + day;

        let writer = ControllerMain.log;

        let maxboardNo = this.getMaxBoardNo() + 1;

        let maxRef = this.getMaxRef() + 1;
        console.log(maxRef);
        let dummyBoard = {
            "boardNo"   : maxboardNo,
            "title"     : inputBoardTitle,
            "content"   : textareaBoardContent,
            "writer"    : writer,
            "regDate"   : today,
            "readCount" : 0,
            "ref"       : maxRef,
            "reStep"    : 1,
            "reLevel"   : 1
        };

        this.boardList.push(dummyBoard);
    }

    static checkBoardDeletePro(deleteList) {

        for(let i=0; i<deleteList.length; i++) {

            for(let j=0; j<this.boardList.length; j++) {
                if(this.boardList[j].boardNo == deleteList[i]) {
                    this.boardList.splice(j, 1);
                }
            }

        }


    }

    static boardWriteReplyPro(inputBoardTitle, textareaBoardContent, boardNo) {

        // 부모의 ref, reStep, reLevel
        let parBoard = this.getBoard(boardNo);
        let parRef = parBoard.ref;
        let parReStep = parBoard.reStep;
        let parReLevel = parBoard.reLevel;

        // 답글
        // 1. 부모의 ref를 따름
        // 2. 부모의 reStep + 1증가
        // 3. 같은 ref그룹 내에서 
        //    부모의 reLevel보다 더 큰 기존의 게시글이 있으면 모두 reLvel +1증가
        // 4. 이후 현재 답글은 부모 reLevel에 +1증가

        let ref = parRef;
        let reStep = parReStep + 1;
        for(let i=0; i<this.boardList.length; i++) {
            if(parRef == this.boardList[i].ref) {
                if(parReLevel < this.boardList[i].reLevel) {
                    this.boardList[i].reLevel += 1;
                }
            }
        }
        let reLevel = parReLevel + 1;


        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if(month < 10) {
            month = "0" + month;
        }
        let day = date.getDate();
        let today = year + "-" + month + "-" + day;

        let writer = ControllerMain.log;

        let maxboardNo = this.getMaxBoardNo() + 1;
        let dummyBoard = {
            "boardNo"   : maxboardNo,
            "title"     : inputBoardTitle,
            "content"   : textareaBoardContent,
            "writer"    : writer,
            "regDate"   : today,
            "readCount" : 0,
            "ref"       : ref,
            "reStep"    : reStep,
            "reLevel"   : reLevel
        };

        this.boardList.push(dummyBoard);

    }

}