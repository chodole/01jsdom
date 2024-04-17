import { ControllerMain } from "./_controllerMain.js";
import { BoardDAO } from "./_boardDAO.js";

export class PageBoardInfo {
    execute(data) {
        let $content = document.querySelector("#content");
        
        let boardNo = Number(data);
        let board = BoardDAO.getBoard(boardNo)

        // 게시글 조회수 1증가
        board.readCount += 1;

        let tag = "";

        tag += 
        `
        <style>
            table, tr, td {
                border-collapse: collapse;
                border: 1px solid black;
            }
            #content-boardInfo {
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
        <table id="content-boardInfo">
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
                <td>${board.writer}</td>
                <td colspan="3">조회수</td>
                <td>${board.readCount}</td>
            </tr>
            <tr>
                <td>내용</td>
                <td colspan="5">
                    <textarea rows="10" cols="50">${board.content}</textarea>
                </td>
            </tr>
            <tr>
                <td colspan="6" id="boardPro">
                    <button id="button-boardReplyPage">답글쓰기</button>
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
    
    boardReplyPage = (event) =>  {
        alert("아직미구현");
    }

    boardListPage = (event) => {
        ControllerMain.changePage("page-boardList", null);
    }

}