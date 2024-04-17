import { ControllerMain } from "./_controllerMain.js";
import { BoardDAO } from "./_boardDAO.js";

export class PageBoardWrite {

    execute(data) {
        
        let $content = document.querySelector("#content");

        let log = ControllerMain.log;
        let maxBoardNo = BoardDAO.getMaxBoardNo();

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
                <td colspan="4" id="title"><h1>새 게시글 작성</h1></td>
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
                    <button id="button-boardWritePro">작성하기</button>
                </td>
            </tr>
        </table>    
        `;

        $content.innerHTML = tag;

        let $buttonBoardWritePro = document.querySelector("#button-boardWritePro");
        $buttonBoardWritePro.addEventListener("click", this.boardWritePro);
    }

    boardWritePro = (event) => {

        let inputBoardTitle = document.querySelector("#input-boardTitle").value;
        let textareaBoardContent = document.querySelector("#textarea-boardContent").value;

        BoardDAO.boardWritePro(inputBoardTitle, textareaBoardContent);

        ControllerMain.changePage("page-boardList", null);
    }
    
}