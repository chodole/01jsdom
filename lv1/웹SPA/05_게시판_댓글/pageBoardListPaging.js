import { ControllerMain } from "./_controllerMain.js";
import { BoardDAO } from "./_boardDAO.js";

export class PageBoardListPaging {

    전체게시글수 = 0;
    한페이지에보여줄게시글수 = 0;
    현재페이지번호 = 0;
    게시글시작번호 = 0;
    게시글마침번호 = 0;

    페이지번호개수 = 0;
    페이지시작번호 = 0;
    페이지마침번호 = 0;


    execute(data) {
        console.log("data = " + data);

        let $content = document.querySelector("#content");

        /*
            1. 전체 게시글 수 = 18개
            2. 한 페이지에 보여줄 게시글 수 = 5개
            3. 현재 페이지 번호
            4. 현재 페이지의 게시글 시작번호
            5. 현재 페이지의 게시글 마침번호
        */

        this.전체게시글수 = BoardDAO.getBordCount();
        this.한페이지에보여줄게시글수 = 5;
        this.현재페이지번호 = 1;
        this.게시글시작번호 = 0;
        this.게시글마침번호 = 0;

        // 현재 페이지번호는 하단에 번호를 클릭할 때마다 변경된다.
        if(data != null) {
            this.현재페이지번호 = Number(data);
        }

        // 게시글 시작번호 계산하기
        this.게시글시작번호 = (this.현재페이지번호 - 1) * this.한페이지에보여줄게시글수;
        // 게시글 마침번호 계산하기
        this.게시글마침번호 = this.게시글시작번호 + this.한페이지에보여줄게시글수;
        if(this.게시글마침번호 > this.전체게시글수) {
            this.게시글마침번호 = this.전체게시글수;
        }

        // 게시글 가져오기
        let boardList = BoardDAO.getBoardPagingList(this.게시글시작번호, this.게시글마침번호);

        // console.log("전체게시글수 = " + this.전체게시글수);
        // console.log("현재페이지번호 = " + this.현재페이지번호);
        // console.log("게시글시작번호 = " + this.게시글시작번호);
        // console.log("게시글마침번호 = " + this.게시글마침번호);

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
            #content-boardPaging {
                margin: 0 auto;
                width: 200px;
                text-align: center;

            }
        </style>
        `;

        tag +=
        `
        <table id="content-board">
            <tr>
                <td colspan="6">
                    <h1>게시판 목록 : <span style="color:red">${this.전체게시글수}개</span></h1>
                </td>
            </tr>
            <tr>
                <td colspan="6" align="right">
                    <button id="button-boardDummyAddPro">더미파일 추가하기</button>
                </td>
            </tr>
            <tr>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
                <td>작성일</td>
            </tr>
        `;

        for(let i=0; i<boardList.length; i++) {
            tag += 
            `
                <tr>
                    <td class="boardNo">${boardList[i].boardNo}</td>
                    <td>${boardList[i].title}</td>
                    <td>${boardList[i].writer}</td>
                    <td>${boardList[i].regDate}</td>
                </tr>
            `;
        }

        tag += `</table>`;

         /*
            하단 페이지 번호 처리
            1. 화면에 출력할 페이지 번호 개수 = 5개
            2. 페이지 시작번호
            3. 페이지 마침번호
            4. 전체 페이지 개수
        */

        this.페이지번호개수 = 5;
        this.페이지시작번호 = 0;
        this.페이지마침번호 = 0;
        this.전체페이지개수 = parseInt(this.전체게시글수 / this.한페이지에보여줄게시글수);
        if(this.전체게시글수 % this.한페이지에보여줄게시글수 > 0) {
            this.전체페이지개수 += 1;
        }

        if(this.현재페이지번호 % this.페이지번호개수 == 0) {
            this.페이지시작번호 = (parseInt(this.현재페이지번호 / this.페이지번호개수) - 1) * 5 + 1;
        } else {
            this.페이지시작번호 = parseInt(this.현재페이지번호 / this.페이지번호개수) * 5 + 1;
        }

        this.페이지마침번호 = this.페이지시작번호 + this.페이지번호개수;
        if(this.페이지마침번호 > this.전체페이지개수) {
            this.페이지마침번호 = this.전체페이지개수 + 1;
        }

        tag +=
        `
            <table id="content-boardPaging">
                <tr>
        `;
        if(this.페이지시작번호 > 1) {
        tag += 
        `
                    <td>
                        <a id="atag-before" href="#">[이전]</a>
                    </td>
        `;   
        }
        for(let i=this.페이지시작번호; i< this.페이지마침번호; i++) {
        tag += 
        `
                    <td>
                        <a class="atag-boardListPagingPage" href="#">${i}</a>
                    </td>
        `;
        }

        if(this.페이지마침번호 < this.전체페이지개수) {
        tag +=
        `
                    <td>
                        <a id="atag-after" href="#">[이후]</a>
                    </td>
                </tr>
            </table>
        `;
        }

        $content.innerHTML = tag;

        this.$buttonBoardDummyAddPro = document.querySelector("#button-boardDummyAddPro");
        this.$buttonBoardDummyAddPro.addEventListener("click", this.buttonBoardDummyAddProClick);

        this.$atagBoardListPagingPage = document.querySelectorAll(".atag-boardListPagingPage");
        for(let i=0; i<this.$atagBoardListPagingPage.length; i++) {
            this.$atagBoardListPagingPage[i].addEventListener("click", this.atagBoardListPagingPageClick);
        }

        this.$atagBefore = document.querySelector("#atag-before");
        if(this.$atagBefore != null) {
            this.$atagBefore.addEventListener("click", this.atagBeforeClick);
        }

        this.$atageAfter = document.querySelector("#atag-after");
        if(this.$atageAfter != null) {
            this.$atageAfter.addEventListener("click", this.atageAfterClick);
        }
    }

    buttonBoardDummyAddProClick = (event) => {
        BoardDAO.setBoardDummyAdd();

        ControllerMain.changePage("page-boardListPaging", null);
    }

    atagBoardListPagingPageClick = (event) => {
        let index = 0;
        for(let i=0; i<this.$atagBoardListPagingPage.length; i++) {
            if(event.target == this.$atagBoardListPagingPage[i]) {
                index = i;
                break;
            }
        }

        this.현재페이지번호 = this.$atagBoardListPagingPage[index].innerText;

        ControllerMain.changePage("page-boardListPaging", this.현재페이지번호);
    }

    atagBeforeClick = (event) => {
        this.현재페이지번호 = this.페이지시작번호 - 1;
        ControllerMain.changePage("page-boardListPaging", this.현재페이지번호);
    }

    atageAfterClick = (event) => {
        this.현재페이지번호 = this.페이지마침번호;
        ControllerMain.changePage("page-boardListPaging", this.현재페이지번호);
    }

}
