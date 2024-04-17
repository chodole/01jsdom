import { ControllerMain } from "./_controllerMain.js";

export class BoardDAO {
    boardList = [];
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
            let dummyBoard = {
                "boardNo"   : maxboardNo,
                "title"     : "제목" + maxboardNo,
                "content"   : "내용" + maxboardNo,
                "writer"    : "작성자" + maxboardNo,
                "regDate"   : today,
                "readCount" : 0,
                "ref"       : 1,
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
        let dummyBoard = {
            "boardNo"   : maxboardNo,
            "title"     : inputBoardTitle,
            "content"   : textareaBoardContent,
            "writer"    : writer,
            "regDate"   : today,
            "readCount" : 0,
            "ref"       : 1,
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

}