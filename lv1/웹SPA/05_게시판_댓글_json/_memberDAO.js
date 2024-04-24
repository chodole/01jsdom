
export let MemberDAO = {
   
    memberList : [],

    start() {

       this.setSampleData();  
    },

    setSampleData(){
       this.memberList = [
           {
               "memberNo"       : 1001, 
               "memberId"       : "qwer1234", 
               "memberPw"       : "Qwer1234!", 
               "memberName"     : "송민석", 
               "memberEmail"    : "qwer@naver.com",
               "memberPhone"    : "01012345678",
               "memberZonecode"  : "02830",
               "memberAddress" : "서울 성북구 아리랑로 3",
               "memberAddressDetail" : "아리랑아파트 102동 304호",
               "memberGender"   : 0,
               "memberRoute"    : 1,
               "memberTerms"    : true,
           },
           {
               "memberNo"      : 1002, 
               "memberId"      : "abcd1234", 
               "memberPw"      : "Abcd1234!", 
               "memberName"    : "홍길동", 
               "memberEmail"   : "abcd@daum.net",
               "memberPhone"   : "01023456789",
               "memberZonecode"  : "02830",
               "memberAddress" : "서울 성북구 아리랑로 3",
               "memberAddressDetail" : "아리랑아파트 102동 304호",
               "memberGender"   : 0,
               "memberRoute"    : 1,
               "memberTerms"    : true,
           },
           {
               "memberNo"    : 1003, 
               "memberId"    : "asdf1234", 
               "memberPw"    : "Asdf1234!", 
               "memberName"  : "이수정", 
               "memberEmail" : "asdf@hotmail.com",
               "memberPhone" : "01034567890",
               "memberZonecode"  : "02830",
               "memberAddress" : "서울 성북구 아리랑로 3",
               "memberAddressDetail" : "아리랑아파트 102동 304호",
               "memberGender"   : 0,
               "memberRoute"    : 1,
               "memberTerms"    : true,
           },
       ];  
   },

    memberIdCheckPro(memberId) {
       let check = false;
       for(let i=0; i<this.memberList.length; i++) {
           // if(this.memberList[i]["memberId"] == memberId) {
           if(this.memberList[i].memberId == memberId) {
               check = true;
               break;
           }
       }

       return check;
   },

    memberEmailCheckPro(memberEmail) {
       let check = false;
       for(let i=0; i<this.memberList.length; i++) {
           if(this.memberList[i].memberEmail == memberEmail) {
               check = true;
               break;
           }
       }

       return check;
   },

    getMaxMemberNo() {
       let maxMemberNo = 1000;
       for(let i=0; i<this.memberList.length; i++) {
           if(maxMemberNo < this.memberList[i].memberNo) {
               maxMemberNo = this.memberList[i].memberNo;
           }
       }
       return maxMemberNo;
   },

    addMember(member) {
       this.memberList.push(member);
       console.log(this.memberList);
   },

    getMemberList() {
       return this.memberList;
   },

    loginMember(memberId, memberPw) {
       let result = false;
       for(let i=0; i<this.memberList.length; i++) {
           if(this.memberList[i].memberId == memberId && this.memberList[i].memberPw == memberPw) {
               result = true;
               break;
           }
       } 
       return result;
   },

}