import { ControllerMain } from "./_controllerMain.js";
import { BoardDAO } from "./_boardDAO.js";

export class PageBoardModify {

    boardNo = 0;

    execute(data) {

        let $content = document.querySelector("#content");

        this.boardNo = Number(data);
        let board = BoardDAO.getBoard(this.boardNo);

        let tag = "";

        tag += 
        `
        <style>
            table, tr, td {
                border-collapse: collapse;
                border: 1px solid black;
            }
            #content-boardModify {
                margin: 0 auto;
                width: 500px;
            }
            #title, #boardPro {
                text-align: center;
            }
        </style>        
        `;

        tag +=
        `
        <table id="content-boardModify">
            <tr>
                <td colspan="6" id="title"><h1>게시판 정보</h1></td>
            </tr>
            <tr>
                <td>번호</td>
                <td>${board.boardNo}</td>
                <td>작성자</td>
                <td>${board.writer}</td>
                <td>작성일</td>
                <td>${board.regDate}</td>
            </tr>
            <tr>
                <td>제목</td>
                <td><input type="text" id="input-boardTitle" value="${board.title}"></td>
                <td colspan="3">조회수</td>
                <td>${board.readCount}</td>
            </tr>
            <tr>
                <td>내용</td>
                <td colspan="5">
                <textarea rows="10" cols="50" id="textarea-boardContent">${board.content}</textarea>
                </td>
            </tr>
            <tr>
                <td colspan="6" id="boardPro">
                    <button id="button-boardReplyPage">수정하기</button>
                    <button id="button-boardListPage">목록으로</button>
                </td>
            </tr>
        </table>        
        `;

        $content.innerHTML = tag;

        let $buttonBoardReplyPage = document.querySelector("#button-boardReplyPage");
        $buttonBoardReplyPage.addEventListener("click", this.boardReplyPage);

        let $buttonBoardListPage = document.querySelector("#button-boardListPage");
        $buttonBoardListPage.addEventListener("click", this.boardListPage);
        
    }

    boardReplyPage = (event) => {
        let inputBoardTitle = document.querySelector("#input-boardTitle").value;
        let inputBoardContent = document.querySelector("#textarea-boardContent").value;

        BoardDAO.modifyBoard(this.boardNo, inputBoardTitle, inputBoardContent);
        ControllerMain.changePage("page-boardList", null);
    }

    boardListPage = (event) => {
        ControllerMain.changePage("page-boardList", null);
    }

}