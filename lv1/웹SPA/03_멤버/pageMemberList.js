import { MemberDAO } from "./_memberDAO.js";
import { ControllerMain } from "./_controllerMain.js";

export class PageMemberList {

    execute(data) {
        let $content = document.querySelector("#content");

        let tag = "";
        tag += 
        `
        <style>
            table, tr, td {
                border: 1px solid black;
                border-collapse: collapse;
            }
            #content-memberList {
                margin: 0 auto;
                width: 1200px;
                text-align: center;
            }
        </style>
        `;

        tag += 
        `
        <table id="content-memberList">
            <tr>
                <td colspan="12"><h1>회원 전체 목록</h1></td>
            </tr>
            <tr>
                <td>번호</td>
                <td>아이디</td>
                <td>비밀번호</td>
                <td>이름</td>
                <td>이메일</td>
                <td>연락처</td>
                <td>우편번호</td>
                <td>도로명</td>
                <td>나머지주소</td>
                <td>성별</td>
                <td>유입경로</td>
                <td>메일 수신동의</td>
            </tr>
               
        `;

        let genderList = ["선택안함", "남자", "여자"];
        let routeList = ["기타", "인터넷 검색", "지인 권유", "SNS", "광고"];
        let memberList = MemberDAO.getMemberList();
        for(let i=0; i<memberList.length; i++) {
            tag +=
            `
            <tr>
                <td>${memberList[i].memberNo}</td>                
                <td>${memberList[i].memberId}</td>                
                <td>${memberList[i].memberPw}</td>                
                <td>${memberList[i].memberName}</td>                
                <td>${memberList[i].memberEmail}</td>                
                <td>${memberList[i].memberPhone}</td>                
                <td>${memberList[i].memberZonecode}</td>                
                <td>${memberList[i].memberAddress}</td>                
                <td>${memberList[i].memberAddressDetail}</td>   
                <td>${genderList[memberList[i].memberGender]}</td>   
                <td>${routeList[memberList[i].memberRoute]}</td>   
                <td>${memberList[i].memberTerms}</td>   
            `;
        }

        tag += `</table> `;

        $content.innerHTML = tag;
    }
}