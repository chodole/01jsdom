import { ControllerMain } from "./controllerMain.js";
import { JsonMemberList } from "./jsonMemberList.js";

export class PageLogin {

    execute(data) {
        let $content = document.querySelector("#content");

        let tag = "";
        tag += 
        `
        <style>
            #loginTable {
                margin: 0 auto;
            }
            .login-header {
                color: #333333; 
                font-size: 20px; 
                font-weight: bold; 
                text-align: center;
                height: 100px;
            }
            .login-input {
                width: 340px;
                height: 54px;
                padding: 0px 11px 1px 15px;
                border-style: none;
                border: 1px solid #B5B5B5;
                border-radius: 5px;
                margin: 5px 0;
            }
            .login-sub {
                font-size: 13px;
                color: #333333;
                text-align: right;
                padding-bottom: 20px;
            }
            .login-td {
                text-align: center;
                height: 60px;
            }
            .login-btn {
                border-style: none;
                width: 370px;
                height: 54px;
                color: #FFFFFF;
                font-size: 16px;
                background-color: #5F0080;
                border-radius: 5px;
                font-weight: bold;
                cursor: pointer;
            }
            .join-btn {
                border-style: none;
                width: 370px;
                height: 54px;
                color: #5F0080;
                font-size: 16px;
                background-color: #FFFFFF;
                border: 1px solid #5F0080;
                border-radius: 5px;
                font-weight: bold;
                cursor: pointer;
            }        
        </style>
        `;

        tag +=
        `
        <table id="loginTable">
            <tr>
                <td class="login-header">로그인</td>
            </tr>
            <tr>
                <td>
                    <input class="login-input" type="text" placeholder="아이디를 입력해주세요" value="haha">
                </td>
            </tr>
            <tr>
                <td>
                    <input class="login-input" type="password" placeholder="비밀번호를 입력해주세요" value="1234">
                </td>
            </tr>
            <tr>
                <td class="login-sub">
                    <a href="">아이디 찾기</a>
                    |
                    <a href="">비밀번호 찾기</a>
                </td>
            </tr>
            <tr>
                <td class="login-td">
                    <button class="login-btn">로그인</button>
                </td>
            </tr>
            <tr>
                <td class="login-td">
                    <button class="join-btn">회원가입</button>
                </td>
            </tr>
        </table>        
        `;

        $content.innerHTML = tag;

        let $loginBtn = document.querySelector(".login-btn");
        $loginBtn.addEventListener("click", this.clickLoginCheck);

    }

    clickLoginCheck = (e) => {
        let $loginInputList = document.querySelectorAll(".login-input");

        let id = $loginInputList[0].value;
        let pw = $loginInputList[1].value;

        if(id == '') {
            alert("아이디를 입력해주세요.");
            return;
        }
        if(pw == '') {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        let check = JsonMemberList.getInstance().loginCheck(id, pw);
        if(check) {
            ControllerMain.getInstance().log = id;
            ControllerMain.getInstance().changePage("page-header", null);
            ControllerMain.getInstance().changePage("page-index", null);
        } else {
            alert("아이디와 비밀번호를 확인해주세요.");
            return;
        }

    }

}