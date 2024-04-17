import { MemberDAO } from "./_memberDAO.js";

export class PageMemberLogin{
    excute(){
        let $content = document.querySelector("#content");
        let tag ="";
        tag += 
        `
            <style>
            #content-memberLogin {

            }
            </style>
        `;
        tag +=
        `
            <table id="content-memberLogin">
                <tr>
                    <td>아이디</td>
                    <td><input type="text" id="input-memberId"></td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td><input type="text" id="input-memberPw"></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button id="button-memberLoginPro">로그인</button>
                    </td>
                </tr>
            </table>
        `;


        $content.innerHTML = tag;

        this.$inputMemberId = document.querySelector("#input-memberId");
        this.$inputMemberPw = document.querySelector("#input-memberPw");
        this.$buttonMemberLoginPro = document.querySelector("#button-memberLoginPro");
        this.$buttonMemberLoginPro.addEventListener("click", this.buttonMemberLoginProClick);
    }

    buttonMemberLoginProClick = (event) =>{
        let memberId = this.$inputMemberId.value;
        let memberPw = this.$inputMemberPw.value;

        let check = MemberDAO.memberLogin(memberId,memberPw);
        if(check){
            alert("로그인 성공");
        }else{
            alert("로그인 실패");
        }
    }
}