import { ControllerMain } from "./_controllerMain.js";
import { BoardDAO } from "./_boardDAO.js";

export class PageBoardList {

    $boardNo = null;
    $atagBoardInfoPage = null;
    $buttonBoardModifyPro = null;
    $buttonBoardDeletePro = null;
    $buttonBoardWritePage = null;
    $buttonBoardDummyAddPro = null;
    $checkboxAll = null;
    $checkboxBoard = null;
    $buttonCheckBoardDeletePro = null;

    execute(data) {
        let $content = document.querySelector("#content");

        let tag = "";
        tag += 
        `
        <style>
            table, tr, td {
                border-collapse: collapse;
                border: 1px solid black;
            }
            #content-board {
                margin: 0 auto;
                width: 700px;
                text-align: center;
            }
        </style>
        `;

        tag +=
        `
        <table id="content-board">
            <tr>
                <td colspan="8"><h1>게시판 목록</h1></td>
            </tr>
            <tr>
                <td colspan="8" align="right">
                    <button id="button-boardWritePage">새글작성</button>
                    <button id="button-boardDummyAddPro">더미파일 추가하기</button>
                </td>
            </tr>
            <tr>
                <td>
                    <input id="checkbox-all" type="checkbox">전체선택
                </td>
                <td>
                    <button id="button-checkBoardDeletePro">선택 삭제</button>
                </td>
            </tr>
            <tr>
                <td>
                    선택
                </td>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
                <td>작성일</td>
                <td>조회수</td>
                <td>수정</td>
                <td>삭제</td>
            </tr>
        `;

        // let boardList = BoardDAO.getBoardList();
        let boardList = BoardDAO.getBoardSortList();
        for(let i=0; i<boardList.length; i++) {
            tag += 
            `
                <tr>
                    <td>
                        <input class="checkbox-board" type="checkbox">
                    </td>
                    <td class="boardNo">${boardList[i].boardNo}</td>
                    <td align="left">
            `;

                if(boardList[i].reStep > 1) {
                    for(let j=1; j<boardList[i].reStep; j++) {
                        tag += `→`;
                    }
                }

            tag += 
            `
                        <a class="atag-boardInfoPage" href="#">${boardList[i].title}</a>
                    </td>
                    <td>${boardList[i].writer}</td>
                    <td>${boardList[i].regDate}</td>
                    <td>${boardList[i].readCount}</td>
                    <td><button class="button-boardModifyPro">수정</button></td>
                    <td><button class="button-boardDeletePro">삭제</button></td>
                </tr>
            `;
        }

        tag += `</table>`;

        $content.innerHTML = tag;

        this.$boardNo = document.querySelectorAll(".boardNo");

        this.$atagBoardInfoPage = document.querySelectorAll(".atag-boardInfoPage");
        for(let i=0; i<this.$atagBoardInfoPage.length; i++) {
            this.$atagBoardInfoPage[i].addEventListener("click", this.boardInfoPageClick);
        }

        this.$buttonBoardModifyPro = document.querySelectorAll(".button-boardModifyPro");
        for(let i=0; i<this.$buttonBoardModifyPro.length; i++) {
            this.$buttonBoardModifyPro[i].addEventListener("click", this.boardModifyPageClick);
        }
        
        this.$buttonBoardDeletePro = document.querySelectorAll(".button-boardDeletePro");
        for(let i=0; i<this.$buttonBoardDeletePro.length; i++) {
            this.$buttonBoardDeletePro[i].addEventListener("click", this.boardDeleteProClick);
        }

        this.$buttonBoardWritePage = document.querySelector("#button-boardWritePage");
        this.$buttonBoardWritePage.addEventListener("click", this.boardWritePageClick);

        this.$buttonBoardDummyAddPro = document.querySelector("#button-boardDummyAddPro");
        this.$buttonBoardDummyAddPro.addEventListener("click", this.buttonBoardDummyAddProClick);

        this.$checkboxAll = document.querySelector("#checkbox-all");
        this.$checkboxAll.addEventListener("click", this.checkboxAllClick);

        this.$checkboxBoard = document.querySelectorAll(".checkbox-board");
        for(let i=0; i<this.$checkboxBoard.length; i++) {
            this.$checkboxBoard[i].addEventListener("click", this.checkboxBoardClick);
        }

        this.$buttonCheckBoardDeletePro = document.querySelector("#button-checkBoardDeletePro");
        this.$buttonCheckBoardDeletePro.addEventListener("click", this.buttonCheckBoardDeleteProClick);
    }

    boardInfoPageClick = (event) =>  {
        let index = 0;
        for(let i=0; i<this.$atagBoardInfoPage.length; i++) {
            if(event.target == this.$atagBoardInfoPage[i]) {
                index = i;
                break;
            }
        }
        
        ControllerMain.changePage("page-boardInfo", this.$boardNo[index].innerText);
    }

    boardModifyPageClick = (event) => {
        let index = 0;
        for(let i=0; i<this.$buttonBoardModifyPro.length; i++) {
            if(event.target == this.$buttonBoardModifyPro[i]) {
                index = i;
                break;
            }
        }
        
        ControllerMain.changePage("page-boardModify", this.$boardNo[index].innerText);
    }

    boardDeleteProClick = (event) => {
        
        let index = 0;
        for(let i=0; i<this.$buttonBoardDeletePro.length; i++) {
            if(event.target == this.$buttonBoardDeletePro[i]) {
                index = i;
                break;
            }
        }
        

        BoardDAO.deleteBoard(this.$boardNo[index].innerText);
        ControllerMain.changePage("page-boardList", null);
    }

    boardWritePageClick = (event) => {
        ControllerMain.changePage("page-boardWrite", null);
    }

    buttonBoardDummyAddProClick = (event) => {
        BoardDAO.setBoardDummyAdd();

        ControllerMain.changePage("page-boardList", null);
    }

    checkboxAllClick = (event) => {
        if(this.$checkboxAll.checked) {
            for(let i=0; i<this.$checkboxBoard.length; i++) {
                this.$checkboxBoard[i].checked = true;
            }
        } else {
            for(let i=0; i<this.$checkboxBoard.length; i++) {
                this.$checkboxBoard[i].checked = false;
            }
        }
    }

    checkboxBoardClick = (event) => {
        let count = 0;
        for(let i=0; i<this.$checkboxBoard.length; i++) {
            if(this.$checkboxBoard[i].checked) {
                count += 1;
            }
        }

        if(count == this.$checkboxBoard.length) {
            this.$checkboxAll.checked = true;
        } else {
            this.$checkboxAll.checked = false;
        }
    }

    buttonCheckBoardDeleteProClick = (event) => {
        let deleteList = [];
        for(let i=0; i<this.$checkboxBoard.length; i++) {
            if(this.$checkboxBoard[i].checked) {
                deleteList.push(Number(this.$boardNo[i].innerHTML));
            }
        }
        console.log(deleteList);

        BoardDAO.checkBoardDeletePro(deleteList);

        ControllerMain.changePage("page-boardList", null);
    }

}