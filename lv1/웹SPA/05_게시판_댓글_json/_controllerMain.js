import { PageHeader } from "./pageHeader.js";
import { PageIndex } from "./pageIndex.js";
import { PageMemberJoin } from "./pageMemberJoin.js";
import { PageMemberList } from "./pageMemberList.js";
import { PageMemberLogin } from "./pageMemberLogin.js";
import { PageBoardList } from "./pageBoardList.js";
import { PageBoardInfo } from "./pageBoardInfo.js";
import { PageBoardModify } from "./pageBoardModify.js";
import { PageBoardWrite } from "./pageBoardWrite.js";
import { PageBoardListPaging } from "./pageBoardListPaging.js";
import { PageBoardWriteReply } from "./pageBoardWriteReply.js";

export let ControllerMain = {

     log : null,
     pageList : {},
     start() {

        this.setPageList();
        this.changePage("page-header", null);
        this.changePage("page-index", null);
    },

     setPageList() {
        this.pageList["page-header"] = PageHeader;
        this.pageList["page-index"] = PageIndex;
        this.pageList["page-memberJoin"] = PageMemberJoin;
        this.pageList["page-memberList"] = PageMemberList;
        this.pageList["page-memberLogin"] = PageMemberLogin;

        this.pageList["page-boardList"] =  PageBoardList;
        this.pageList["page-boardInfo"] =  PageBoardInfo;
        this.pageList["page-boardModify"] =  PageBoardModify;
        this.pageList["page-boardWrite"] =  PageBoardWrite;

        this.pageList["page-boardListPaging"] =  PageBoardListPaging;
        this.pageList["page-boardWriteReply"] = PageBoardWriteReply;
    },

     changePage(pageName, data) {
        this.pageList[pageName].execute(data);
    }

}

