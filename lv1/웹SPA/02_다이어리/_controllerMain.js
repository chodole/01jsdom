import { PageContent } from "./pageContent.js";
import { PageHeader } from "./pageHeader.js";
import { PageInfo } from "./pageInfo.js";
import { PageWrite } from "./pageWrite.js";

export class ControllerMain{
    static dayList = ["일","월","화","수","목","금","토"];
    static pageList = {};

    static start(){
        this.setPageList();

        this.changePage("page-header",null);
        this.changePage("page-content",null);
    }

    static setPageList(){
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-content"] = new PageContent();
        this.pageList["page-write"] = new PageWrite();
        this.pageList["page-info"] = new PageInfo();
    }

    static changePage(pageName, data){
        this.pageList[pageName].excute(data);
    }
}