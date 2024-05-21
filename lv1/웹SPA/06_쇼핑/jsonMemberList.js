export class JsonMemberList {

    static instance = new JsonMemberList();
    static getInstance() { return JsonMemberList.instance; }

    init() {
        this.memberList = null;
        this.setMemberSampleData();
    }

    setMemberSampleData() {
        this.memberList = [
            {
                memberNo: 1,
                memberId: "qwer",
                memberPw: "1234"
            },
            {
                memberNo: 2,
                memberId: "abcd",
                memberPw: "1234"
            },
            {
                memberNo: 3,
                memberId: "haha",
                memberPw: "1234"
            },
        ];
    }

    /* 로그인 */
    loginCheck(id, pw) {
        for(let i=0; i<this.memberList.length; i++) {
            let member = this.memberList[i];
            if(member.memberId == id && member.memberPw == pw) {
                return true;
            }
        }
        return false;
    }

    /* 회원번호 */
    getMemberNo(id) {
        for(let i=0; i<this.memberList.length; i++) {
            let member = this.memberList[i];
            if(member.memberId == id) {
                return member.memberNo;
            }
        }
    }

}