import { MemberDAO } from "./_memberDAO.js";
import { ControllerMain } from "./_controllerMain.js";

export let PageMemberLogin = {

    $inputMemberId : null,
    $inputMemberPw : null,
    $buttonMemberLoginPro : null,

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
            #content-login {
                margin: 0 auto;
            }
            #title, #loginPro {
                text-align: center;
            }
        </style>        
        `;

        tag +=
        `
        <table id="content-login">
            <tr>
                <td colspan="2" id="title"><h1>로그인</h1></td>
            </tr>
            <tr>
                <td>아이디</td>
                <td><input type="text" id="input-memberId" value="qwer1234"></td>
            </tr>
            <tr>
                <td>비밀번호</td>
                <td><input type="text" id="input-memberPw" value="Qwer1234!"></td>
            </tr>
            <tr>
                <td colspan="2" id="loginPro">
                    <button id="button-memberLoginPro">로그인</button>
                </td>
            </tr>
        </table>        
        `;

        $content.innerHTML = tag;

        this.$inputMemberId = document.querySelector("#input-memberId");
        this.$inputMemberPw = document.querySelector("#input-memberPw");
       
        this.$buttonMemberLoginPro = document.querySelector("#button-memberLoginPro");
        this.$buttonMemberLoginPro.addEventListener("click", (e) => {this.memberLoginPro();});
    },

    memberLoginPro  (event)  {
        if(this.$inputMemberId.value == "") {
            alert("아이디를 입력해주세요.");
            this.$inputMemberId.focus();
            return false;
        }
        if(this.$inputMemberPw.value == "") {
            alert("비밀번호를 입력해주세요.");
            this.$inputMemberPw.focus();
            return false;
        }
    
        let result = MemberDAO.loginMember(this.$inputMemberId.value, this.$inputMemberPw.value);
        if(result) {
            ControllerMain.log = this.$inputMemberId.value;
            ControllerMain.changePage("page-header", null);
            ControllerMain.changePage("page-index", null);
        } else {
            alert("아이디와 비밀번호를 확인해주세요.");
            this.$inputMemberId.value = "";
            this.$inputMemberPw.value = "";
            this.$inputMemberId.focus();
        }
    },

   
   




}