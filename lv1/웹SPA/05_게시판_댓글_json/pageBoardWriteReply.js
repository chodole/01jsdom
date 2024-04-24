import { ControllerMain } from "./_controllerMain.js";
import { BoardDAO } from "./_boardDAO.js";

export let PageBoardWriteReply = {

    boardNo : null,

    execute(data) {
        
        let $content = document.querySelector("#content");


        this.boardNo = Number(data);

        let log = ControllerMain.log;
        let maxBoardNo = BoardDAO.getMaxBoardNo() + 1;

        let tag = "";
        tag +=
        `
        <style>
            table, tr, td {
                border-collapse: collapse;
                border: 1px solid black;
            }
            #content-boardWrite {
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
        <table id="content-boardWrite">
            <tr>
                <td colspan="4" id="title"><h1>답글 게시글 작성</h1></td>
            </tr>
            <tr>
                <td>번호</td>
                <td>${maxBoardNo}</td>
                <td>작성자</td>
                <td>${log}</td>
            </tr>
            <tr>
                <td>제목</td>
                <td colspan="3"><input type="text" id="input-boardTitle"></td>
            </tr>
            <tr>
                <td>내용</td>
                <td colspan="3"><textarea rows="10" cols="50" id="textarea-boardContent"></textarea></td>
            </tr>
            <tr>
                <td colspan="4" id="boardPro">
                    <button id="button-boardWriteReplyPro">답글 작성하기</button>
                </td>
            </tr>
        </table>    
        `;

        $content.innerHTML = tag;

        let $buttonBoardWriteReplyPro = document.querySelector("#button-boardWriteReplyPro");
        $buttonBoardWriteReplyPro.addEventListener("click", (e) => {this.boardWriteReplyPro(e);});
    },

    boardWriteReplyPro  (event)  {

        let inputBoardTitle = document.querySelector("#input-boardTitle").value;
        let textareaBoardContent = document.querySelector("#textarea-boardContent").value;

        BoardDAO.boardWriteReplyPro(inputBoardTitle, textareaBoardContent, this.boardNo);

        ControllerMain.changePage("page-boardList", null);
    }
}