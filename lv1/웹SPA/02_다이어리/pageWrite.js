import { ControllerMain } from "./_controllerMain.js";
import { DiaryDAO } from "./_diaryDAO.js";

export class PageWrite{

    data = null;

    excute(data){
        this.data= data;

        let $content = document.querySelector("#content");

        let tag = "";
        tag += 
        `
        <style>
            #nav {
                margin: 0 auto;
                width: 1000px;
                height: 80px;
                border-bottom: 1px solid #333333;
            }

            #content {
                margin: 0 auto;
                width: 1000px;
                height: 450px;
            }
            #content td {
                border-bottom: 1px solid #333333;
            }
            #content td:nth-child(1) {
                height: 70px;
                width: 50px;
            }
            #content td:nth-child(2) {
                padding-left: 10px;
            }
            .content-title {
                text-align: center;
                font-weight: bold;
            }
            #input-title {
                
                width: 600px;
                height: 30px;
            }

            .content-btn {
                text-align: center;
            }
            .btn {
                width: 60px;
                height: 30px;
                display: inline-block;
            }
        </style>
        `;

        tag+=
        `
        <table id="nav">
            <tr>
                <td>
                    <span id="year"></span>년
                    <span id="month"></span>월
                    <span id="day"></span>일 다이어리 작성
                </td>
            </tr>
        </table>

        <table id="content">
            <tr>
                <td class="content-title">제목</td>
                <td>
                    <input id= "input-title" type="text">
                </td>
            </tr>
            <tr>
                <td class="content-title">내용</td>
                <td class="content-td">
                    <textarea id="textarea-content" rows="20" cols="100"></textarea>
                </td>
            </tr>
            <tr>
                <td class="content-btn" colspan="2">
                    <button class="btn-save">저장</button>
                    <button class="btn-cancle">취소</button>
                </td>
            </tr>
        </table>
        `;

        $content.innerHTML=tag;

        console.log(data);

        let temp= data.split("-");
        let year = temp[0];
        let month = temp[1];
        let day = temp[2];

        document.querySelector("#year").innerText = year;
        document.querySelector("#month").innerText = month;
        document.querySelector("#day").innerText = day;

        document.querySelector(".btn-save").addEventListener("click",this.writePro);
        document.querySelector(".btn-cancle").addEventListener("click",this.cancle);
    }

    writePro = (event)=>{
        let title = document.querySelector("#input-title").value;
        let content = document.querySelector("#textarea-content").value;
        let regDate = this.data;

        console.log(regDate);

        DiaryDAO.diaryWritePro(title, content, regDate);
        ControllerMain.changePage("page-content",null);
    }

    cancle = (event)=>{
        ControllerMain.changePage("page-content",null);
    }
}