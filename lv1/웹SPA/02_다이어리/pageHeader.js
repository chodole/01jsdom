import { ControllerMain } from "./_controllerMain.js";

export class PageHeader{
    excute(data) {
        let $header = document.querySelector("#header");

        let tag = "";

        tag+=
        `
        <style>
            table, tr, td {
                border-collapse : collapse;
            }

            #header-table {
                margin : 0 auto;
                width : 1000px;
                border-bottom: 1px solid #333333;
            }

            #time{
                font-size: 50px;
                color: #333333;
                height: 100px;
                vertical-align: bottom;
            }

            #today{
                color: blue;
                height: 50px;
                vertical-align: top;
            }
        </style>
        `;

        tag+=
        `
        <table id="header-table">
            <tr>
                <td id="time"></td>
            </tr>
            <tr>
                <td id="today"></td>
            </tr>
        </table>
        `;

        $header.innerHTML = tag;

        setInterval(this.setTime,1000);
        this.setToday();
    }

    setTime = (event)=>{
        let today = new Date();
        document.querySelector("#time").innerText = today.toLocaleTimeString();
    }

    setToday = (event) =>{
        let today = new Date();

        let dayList = ControllerMain.dayList;
        let thisYear = today.getFullYear();
        let thisMonth = today.getMonth();
        let thisDate = today.getDate();
        let thisDay = today.getDay();

        document.querySelector("#today").innerText = `${thisYear}년 ${thisMonth + 1}월 ${thisDate}일 ${dayList[thisDay]}요일`;
    }
}