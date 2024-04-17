import { ControllerMain } from "./_controllerMain.js";
import { MemberDAO } from "./_memberDAO.js";

export class PageMemberJoin {

    idCheck = false;
    emailCheck = false;

    $inputMemberId = null;
    $buttonMemberIdCheckPro = null;
    $inputMemberPw = null;
    $inputMemberPwRe = null;
    $inputMemberName = null;
    $inputMemberEmail = null;
    $buttonMemberEmailCheckPro = null;
    $inputMemberPhone = null;
    
    $inputMemberZonecode = null;
    $inputMemberAddress = null;
    $inputMemberAddressDetail = null;
    $buttonDaumPostAPI = null;

    $radioMemberGender = null;
    $selectMemberRoute = null;
    $checkMemberAllTerms = null;
    $checkMemberTerms = null;
    $btnMemberJoinPro = null;
    
    execute(data) {
        let $content = document.querySelector("#content");  
        
        let tag = "";
        tag += 
        `
        <style>
            #content-join {
                margin: 0 auto;
                width: 600px;
            }
            #title, #joinPro {
                text-align: center;
            }
        </style>
        `;

        tag +=
        `
        <table id="content-join">
            <tr>
                <td colspan="3" id="title"><h2>회원가입</h2></td>
            </tr>
            <tr>
                <td rowspan="2">아이디</td>
                <td><input id="input-memberId" type="text" placeholder="아이디를 입력해주세요" value="qwer1234"></td>
                <td><button id="button-memberIdCheckPro">중복확인</button></td>
            </tr>
            <tr>
                <td id="msg-memberId" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">비밀번호</td>
                <td colspan="2"><input id="input-memberPw" type="text" placeholder="비밀번호를 입력해주세요" value="Qwer1234!"></td>
            </tr>
            <tr>
                <td id="msg-memberPw" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">비밀번호확인</td>
                <td colspan="2"><input id="input-memberPwRe" type="text" placeholder="비밀번호를 한번 더 입력해주세요" value="Qwer1234!"></td>
            </tr>
            <tr>
                <td id="msg-memberPwRe" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">이름</td>
                <td colspan="2"><input id="input-memberName" type="text" placeholder="이름을 입력해주세요" value="홍길동"></td>
            </tr>
            <tr>
                <td id="msg-memberName" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">이메일</td>
                <td><input id="input-memberEmail" type="text" placeholder="이메일을 입력해주세요" value="qwer@naver.com"></td>
                <td><button id="button-memberEmailCheckPro">중복확인</button></td>
            </tr>
            <tr>
                <td id="msg-memberEmail" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">휴대폰</td>
                <td colspan="2"><input id="input-memberPhone" type="text" placeholder="숫자만 입력해주세요" value="01012345678"></td>
            </tr>
            <tr>
                <td id="msg-memberPhone" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">우편번호</td>
                <td><input id="input-memberZonecode" type="text" placeholder="우편번호를 입력해주세요" value="02830"></td>
                <td><button id="button-daumPostAPI">우편번호검색</button></td>
            </tr>
            <tr>
                <td id="msg-memberZonecode" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">도로명 주소</td>
                <td colspan="2"><input id="input-memberAddress" type="text" placeholder="도로명 주소를 입력해주세요" value="서울 성북구 아리랑로 3"></td>
            </tr>
            <tr>
                <td id="msg-memberAddress" colspan="2"></td>
            </tr>
            <tr>
                <td rowspan="2">남은 주소</td>
                <td colspan="2"><input id="input-memberAddressDetail" type="text" placeholder="남은 주소를 입력해주세요" value="남은주소"></td>
            </tr>
            <tr>
                <td id="msg-memberAddressDetail" colspan="2"></td>
            </tr>
            <tr>
                <td>성별</td>
                <td colspan="2">
                    <label><input type="radio" class="radio-memberGender" name="gender" value="1">남자</label>
                    <label><input type="radio" class="radio-memberGender" name="gender" value="2">여자</label>
                    <label><input type="radio" class="radio-memberGender" name="gender" value="0" checked>선택안함</label>
                </td>
            </tr>
            <tr>
                <td>유입 경로</td>
                <td colspan="2">
                    <select id="select-memberRoute">
                        <option value="1">인터넷 검색</option>
                        <option value="2">지인 권유</option>
                        <option value="3">SNS</option>
                        <option value="4">광고</option>
                        <option value="0" selected>기타</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td rowspan="2">이용약관동의</td>
                <td colspan="2">
                    <label><input id="check-memberAllTerms" type="checkbox">전체 동의</label>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <label><input class="check-memberTerms" type="checkbox" value="1">이용약관 동의 (필수)<br></label>
                    <label><input class="check-memberTerms" type="checkbox" value="2">개인정보취급 동의 (필수)<br></label>
                    <label><input class="check-memberTerms" type="checkbox" value="3">만 14세 이상입니다. (필수)<br></label>
                    <label><input class="check-memberTerms" type="checkbox" value="0">마케팅 메일 수신 동의 (선택)<br></label>
                </td>
            </tr>
            <tr>
                <td colspan="3" id="joinPro">
                    <button id="button-memberJoinPro">가입하기</button>
                </td>
            </tr>
        </table>        
        `;

        $content.innerHTML = tag;

        console.log("pageMemberJoin = " + ControllerMain.pageList);

        this.idCheck = false;
        this.emailCheck = false;

        this.$inputMemberId = document.querySelector("#input-memberId");
        this.$inputMemberId.addEventListener("input", this.inputMemberIdInput);

        this.$buttonMemberIdCheckPro = document.querySelector("#button-memberIdCheckPro");
        this.$buttonMemberIdCheckPro.addEventListener("click", this.buttonMemberIdCheckProClick);

        this.$inputMemberPw = document.querySelector("#input-memberPw");
        this.$inputMemberPw.addEventListener("input", this.inputMemberPwInput);

        this.$inputMemberPwRe = document.querySelector("#input-memberPwRe");
        this.$inputMemberPwRe.addEventListener("input", this.inputMemberPwReInput);

        this.$inputMemberName = document.querySelector("#input-memberName");
        this.$inputMemberName.addEventListener("input", this.inputMemberNameInput);

        this.$inputMemberEmail = document.querySelector("#input-memberEmail");
        this.$inputMemberEmail.addEventListener("input", this.inputMemberEmailInput);

        this.$buttonMemberEmailCheckPro = document.querySelector("#button-memberEmailCheckPro");
        this.$buttonMemberEmailCheckPro.addEventListener("click", this.buttonMemberEmailCheckProClick);

        this.$inputMemberPhone = document.querySelector("#input-memberPhone");
        this.$inputMemberPhone.addEventListener("input", this.inputMemberPhoneInput);

        this.$inputMemberZonecode = document.querySelector("#input-memberZonecode");

        this.$inputMemberAddress = document.querySelector("#input-memberAddress");
        this.$inputMemberAddressDetail = document.querySelector("#input-memberAddressDetail");

        this.$radioMemberGender = document.querySelectorAll(".radio-memberGender");

        this.$selectMemberRoute = document.querySelector("#select-memberRoute");

        this.$buttonDaumPostAPI = document.querySelector("#button-daumPostAPI");
        this.$buttonDaumPostAPI.addEventListener("click", this.execDaumPostcode);

        this.$checkMemberAllTerms = document.querySelector("#check-memberAllTerms");
        this.$checkMemberAllTerms.addEventListener("click", this.checkMemberAllTermsClick);

        this.$checkMemberTerms = document.querySelectorAll(".check-memberTerms");
        for(let i=0; i<this.$checkMemberTerms.length; i++) {
            this.$checkMemberTerms[i].addEventListener("click", this.checkMemberTermsClick);
        }

        this.$btnMemberJoinPro = document.querySelector("#button-memberJoinPro");
        this.$btnMemberJoinPro.addEventListener("click", this.buttonMemberJoinProClick);
    }

    /* 아이디 유효성 검사 */
    inputMemberIdInput = (event) => {
        let $msgMemberId = document.querySelector("#msg-memberId");

        let regExp = RegExp(/^[A-Za-z0-9_\-]{6,16}$/);
        if(regExp.test(this.$inputMemberId.value)) {
            $msgMemberId.innerHTML = "";
        } else {
            $msgMemberId.innerHTML = "<span style='color:#F03F40; font-size:12px;'>6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합</span>";
        }
    }

    /* 아이디 중복검사 */
    buttonMemberIdCheckProClick = (event) => {
        let regExp = RegExp(/^[A-Za-z0-9_\-]{6,16}$/);

        if(this.$inputMemberId.value == "") {
            alert("아이디를 입력해주세요.");
            this.$inputMemberId.focus();
        } else if(!regExp.test(this.$inputMemberId.value)) {
            alert("6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합");
            this.$inputMemberId.value = "";
            this.$inputMemberId.focus();
        } else {
            let result = MemberDAO.memberIdCheckPro(this.$inputMemberId.value);
            if(result == false) {
                this.idCheck = true;
                this.$inputMemberPw.focus();
                alert("사용할 수 있는 아이디 입니다.");
            } else {
                this.$inputMemberId.value = "";
                this.$inputMemberId.focus();
                alert("사용 불가능한 아이디 입니다.");
            }
        }
    }

    /* 비밀번호 유효성 검사 */
    inputMemberPwInput = (event) => {
        let $msgMemberPw = document.querySelector("#msg-memberPw");

        let regExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/);
        if(regExp.test(this.$inputMemberPw.value)) {
            $msgMemberPw.innerHTML = "";
        } else {
            $msgMemberPw.innerHTML = "<span style='color:#F03F40; font-size:12px;'>영문 대문자와 소문자, 숫자, 특수문자를 하나 이상 포함하여 8~16자 조합</span>";
        }
    }

    /* 비밀번호확인 유효성 검사 */
    inputMemberPwReInput = (event) => {
        let $msgMemberPwRe = document.querySelector("#msg-memberPwRe");

        if(this.$inputMemberPw.value == this.$inputMemberPwRe.value) {
            $msgMemberPwRe.innerHTML = "";
        } else {
            $msgMemberPwRe.innerHTML = "<span style='color:#F03F40; font-size:12px;'>동일한 비밀번호 입력</span>";
        }
    }

    /* 이름 유효성 검사 */
    inputMemberNameInput = (event) => {
        let $msgMemberName = document.querySelector("#msg-memberName");

        let regExp = RegExp(/^[가-힣]{2,6}$/);
        if(regExp.test(this.$inputMemberName.value)) {
            $msgMemberName.innerHTML = "";
        } else {
            $msgMemberName.innerHTML = "<span style='color:#F03F40; font-size:12px;'>2~6글자의 한글만 입력</span>";
        }
    }

    /* 이메일 유효성 검사 */
    inputMemberEmailInput = (event) => {
        let $msgMemberEmail = document.querySelector("#msg-memberEmail");

        let regExp = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
        if(regExp.test(this.$inputMemberEmail.value)) {
            $msgMemberEmail.innerHTML = "";
        } else {
            $msgMemberEmail.innerHTML = "<span style='color:#F03F40; font-size:12px;'>이메일 형식으로 입력해 주세요.</span>";
        }
    }

    /* 이메일 중복검사 */
    buttonMemberEmailCheckProClick = (event) => {
        let regExp = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
        if(this.$inputMemberEmail.value == "") {
            alert("이메일을 입력해주세요.");
            this.$inputMemberEmail.focus();
        } else if(!regExp.test(this.$inputMemberEmail.value)) {
            alert("이메일 형식으로 입력해 주세요.");
            this.$inputMemberEmail.value = "";
            this.$inputMemberEmail.focus();
        } else {
            this.emailCheck = true;

            /* 기능 구현하기 */
            let check = MemberDAO.memberEmailCheckPro(this.$inputMemberEmail.value);
            if(check == false) {
                this.$inputMemberPhone.focus();
                alert("사용 가능한 이메일입니다.");
            } else {
                this.$inputMemberEmail.value = "";
                this.$inputMemberEmail.focus();
                alert("사용 불가능한 이메일입니다.");
            }
        }
    }

    /* 휴대폰 유효성 검사 */
    inputMemberPhoneInput = (event) => {
        let $msgMemberPhone = document.querySelector("#msg-memberPhone");

        let regExp = RegExp(/^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/);
        if(regExp.test(this.$inputMemberPhone.value)) {
            $msgMemberPhone.innerHTML = "";
        } else {
            $msgMemberPhone.innerHTML = "<span style='color:#F03F40; font-size:12px;'>휴대폰 형식으로 입력해 주세요.</span>";
        }
    }

    /* 우편번호 검색 기능 */
    execDaumPostcode = (event) => {
        new daum.Postcode( {
            oncomplete: function(data) {

                document.querySelector("#input-memberZonecode").value = data.zonecode;
                document.querySelector("#input-memberAddress").value = data.address;

                document.querySelector("#input-memberAddressDetail").focus();
            }
        } ).open();
    }

    /* 전체동의 체크 자동화 기능 */
    checkMemberAllTermsClick = (event) => {
        if(this.$checkMemberAllTerms.checked) {
            for(let i=0; i<this.$checkMemberTerms.length; i++) {
                this.$checkMemberTerms[i].checked = true;
            }
        } else {
            for(let i=0; i<this.$checkMemberTerms.length; i++) {
                this.$checkMemberTerms[i].checked = false;
            }
        }
    }
    checkMemberTermsClick = (event) => {
        let count = 0;
        for(let i=0; i<this.$checkMemberTerms.length; i++) {
            if(this.$checkMemberTerms[i].checked) {
                count += 1;
            }
        }
        if(count == this.$checkMemberTerms.length) {
            this.$checkMemberAllTerms.checked = true;
        } else {
            this.$checkMemberAllTerms.checked = false;
        }
    }

    /* 가입하기 */
    buttonMemberJoinProClick = (event) => {
        // 아이디 입력 확인
        if(this.$inputMemberId.value == "") {
            this.$inputMemberId.focus();
            alert("아이디를 입력해주세요.");
            return false;
        }
        // 아이디 중복확인
        if(this.idCheck == false) {
            alert("아이디를 중복확인을 해주세요.");
            return false;
        }
        // 비밀번호 입력 확인
        if(this.$inputMemberPw.value == "") {
            alert("비밀번호를 입력해주세요.");
            return false;
        }
        // 비밀번호확인 입력 확인
        if(this.$inputMemberPwRe.value == "") {
            alert("비밀번호 확인을 입력해주세요.");
            return false;
        }
        // 이름 입력 확인
        if(this.$inputMemberName.value == "") {
            alert("이름을 입력해주세요.");
            return false;
        }
        // 이메일 입력 확인
        if(this.$inputMemberEmail.value == "") {
            alert("이메일을 입력하세요.");
            return false;
        }
        // 이메일 중복확인
        if(this.emailCheck == false) {
            alert("이메일 중복 확인를 해주세요.");
            return false;
        }
        // 휴대폰 입력 확인
        if(this.$inputMemberPhone.value == "") {
            alert("휴대폰 번호를 입력해주세요.");
            return false;
        }
        // 우편번호 입력 확인
        if(this.$inputMemberZonecode.value == "") {
            alert("우편번호를 입력해주세요.");
            return false;
        }
        // 도로명 입력 확인
        if(this.$inputMemberAddress.value == "") {
            alert("도로명을 입력해주세요.");
            return false;
        }
        // 남은 주소 입력 확인
        if(this.$inputMemberAddressDetail.value == "") {
            alert("남은 주소를 입력해주세요.");
            return false;
        }

        // 이용약관 동의 필수항목 선택 확인
        let checkResult = true;
        for(let i=0; i<this.$checkMemberTerms.length - 1; i++) {
            if(!this.$checkMemberTerms[i].checked) {
                checkResult = false;
                break;
            }
        }
        if(checkResult == false) {
            alert("필수 약관에 동의해주세요.");
            return false;
        } 
        
        let maxMemberNo = MemberDAO.getMaxMemberNo();

        let radioMemberGender = "";
        for(let i=0; i<this.$radioMemberGender.length; i++) {
            if(this.$radioMemberGender[i].checked) {
                radioMemberGender = this.$radioMemberGender[i].value;
            }
        }

        let checkMemberTerms = false;
        if(this.$checkMemberTerms[3].checked) {
            checkMemberTerms = true;
        }

        let member = {
            "memberNo"       : maxMemberNo + 1, 
            "memberId"       : this.$inputMemberId.value, 
            "memberPw"       : this.$inputMemberPw.value, 
            "memberName"     : this.$inputMemberName.value, 
            "memberEmail"    : this.$inputMemberEmail.value,
            "memberPhone"    : this.$inputMemberPhone.value,
            "memberZonecode"  : this.$inputMemberZonecode.value,
            "memberAddress" : this.$inputMemberAddress.value,
            "memberAddressDetail" : this.$inputMemberAddressDetail.value,
            "memberGender"   : radioMemberGender,
            "memberRoute"    : this.$selectMemberRoute.value,
            "memberTerms"    : checkMemberTerms,
        };

        MemberDAO.addMember(member);

        // 이동하기
        alert("회원가입을 축하합니다.");
        ControllerMain.changePage("page-index", null);
    }

}