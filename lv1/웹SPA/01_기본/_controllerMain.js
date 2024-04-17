
import { PageHeader } from "./pageHeader.js";
import { PageContent } from "./pageContent.js";
import { PageMemberLogin } from "./pageMemberLogin.js";


//다른파일에서 이 클래스를 사용
//파일 이름은 소문자로 시작, 클래스 이름은 대문자로 시작
export class ControllerMain{

    static pageList = {};

    static start(){

        this.setPageList();
        this.changePage("page-header");
        this.changePage("page-content");
    }

    static setPageList(){
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-content"] = new PageContent();
        this.pageList["page-login"] = new PageMemberLogin();
    }

    static changePage(pageName){
        this.pageList[pageName].excute();
    }

}