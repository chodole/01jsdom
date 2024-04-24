import { ControllerMain } from "./_controllerMain.js";

export let PageHeader = {

    execute(data) {
        let $header = document.querySelector("#header");  
        
        let tag = "";
        tag += 
        `
        <style>
            table, tr, td {
                border-collapse: collapse;
                border: 1px solid black;
            }
            #header-menu {
                margin: 0 auto;
                text-align: center;
                width: 500px;
                height: 100px;
            }
        </style>
        `;

        // [로그아웃] 상태 화면
        if(ControllerMain.log == null) {
            tag += 
            `
            <table id="header-menu">
                <tr>
                    <td>
                        <button id="btn-indexPage">메인화면</button>
                    </td>
                    <td>
                        <button id="btn-memberJoinPage">회원가입</button>
                    </td>
                    <td>
                        <button id="btn-memberLoginPage">로그인</button>
                    </td>
                </tr>
            </table>
            `;
        } else {
            // [로그인] 상태 화면
            tag += 
            `
            <table id="header-menu">
                <tr>
                    <td>
                        <button id="btn-indexPage">메인화면</button>
                    </td>
                    <td>
                        <button id="btn-memberListPage">회원 전체목록</button>
                    </td>
                    <td>
                        <button id="btn-memberLogoutPro">로그아웃</button>
                    </td>
                    <td>
                        <button id="btn-boardListPage">게시판</button>
                    </td>
                    <td>
                        <button id="btn-boardListPaging">게시판 페이징</button>
                    </td>
                </tr>
            </table>
            `;
        }

        $header.innerHTML = tag;

        // [로그아웃] 상태 화면
        if(ControllerMain.log == null) {
            document.querySelector("#btn-indexPage").addEventListener("click",(e) => { this.indexPageClick(e);});
            document.querySelector("#btn-memberJoinPage").addEventListener("click", (e) => { this.memberJoinPageClick(e);});
            document.querySelector("#btn-memberLoginPage").addEventListener("click", (e) => { this.memberLoginPageClick(e);});

        } else {
            document.querySelector("#btn-indexPage").addEventListener("click", (e) => { this.indexPageClick(e);});
            document.querySelector("#btn-memberListPage").addEventListener("click", (e) => { this.memberListPageClick(e);});
            document.querySelector("#btn-memberLogoutPro").addEventListener("click",(e) => { this.memberLogoutProClick(e);});
            document.querySelector("#btn-boardListPage").addEventListener("click",(e) => { this.boardListPageClick(e);});
            document.querySelector("#btn-boardListPaging").addEventListener("click", (e) => {this.boardListPagingClick(e)});
        }
    },

    indexPageClick(){
        ControllerMain.changePage("page-index", null);
    },

    memberJoinPageClick (event)  {
        ControllerMain.changePage("page-memberJoin", null);
    },

    memberListPageClick  (event)  {
        ControllerMain.changePage("page-memberList", null);
    },

    memberLoginPageClick  (event)  {
        ControllerMain.changePage("page-memberLogin", null);
    },

    memberLogoutProClick  (event)  {
        alert("로그아웃 되었습니다.");

        ControllerMain.log = null;
        ControllerMain.changePage("page-header", null);
        ControllerMain.changePage("page-index", null);
    },

    boardListPageClick  (event)  {
        ControllerMain.changePage("page-boardList", null);
    },
    boardListPagingClick  (event)  {
        ControllerMain.changePage("page-boardListPaging", null);
    }
}