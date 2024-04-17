import { ControllerMain } from "./_controllerMain.js";
import { DiaryDAO } from "./_diaryDAO.js";

export class PageContent{
    $content = null;

    excute(data){
        this.$content = document.querySelector("#content");

        let tag = "";
        tag += 
        `
        <style>
            .diary-title{
                margin: 5px;
                border: 1px solid lightgray;
                border-radius: 3px;
                box-shadow: 2px 2px 2px lightgray;
                cursor: pointer;
            }

            .aInfo{
                text-decoration: none;
                color: black;
            }

            #content{
                margin: 0 auto;
                width: 1000px;
            }

            .dayOfWeek{
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                color: #333333;
                width: 140px;
                height: 50px;
                border-bottom: 1px solid #333333;
            }

            .day{
                vertical-align: top;
                height: 70px;
                padding: 10px;
                border-bottom: 1px solid #333333;
            }

            .dayOfWeek: not(:last-child),
            .day: not(:last-child){
                border-right: 1px solid #333333;
            }

            #nav {
                margin: 0 auto;
                width: 1000px;
                height: 80px;
                border-bottom: 1px solid #333333;
            }

            #navEmpty{
                width: 500px;
            }

            .navBtn{
                background-color: white;
                border-style: none;
                cursor: pointer;
                font-size: 20px;
            }
        </style>
        `;

        tag+=
        `
        <table id="nav">
            <tr>
                <td>
                    <span id="year"></span>년<span id="month"></span>
                </td>
                <td id="navEmpty"></td>
                <td><button class="navBtn">△</button></td>
                <td><button class="navBtn">▽</button></td>
            </tr>
        </table>

        <table id="content">
            <tr>
                <td id="contentId"></td>
            </tr>
        </table>
        `;

        this.$content.innerHTML = tag;

        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;

        document.querySelector("#year").innerText = year;
        document.querySelector("#month").innerText = month;

        let navBtnList = document.querySelectorAll(".navBtn");
        navBtnList[0].addEventListener("click",this.beforeMonth);
        navBtnList[1].addEventListener("click",this.afterMonth);

        this.setCalendar();
    }

    beforeMonth = (event) =>{
        let $thisYear = document.querySelector("#year");
        let $thisMonth = document.querySelector("#month");

        let year= Number($thisYear.innerText);
        let month = Number($thisMonth.innerText) -1;

        if(month < 1){
            year-=1;
            month = 12;
        }

        $thisYear.innerText = year;
        $thisMonth.innerText = month;

        this.setCalendar();
    }

    afterMonth = (event) =>{
        let $thisYear = document.querySelector("#year");
        let $thisMonth = document.querySelector("#month");

        let year = Number($thisYear.innerText);
        let month = Number($thisMonth.innerText) +1;

        if(month > 12){
            year++;
            month = 1;
        }

        $thisYear.innerText = year;
        $thisMonth.innerText = month;

        this.setCalendar();
    }

    getTable = (event) => {
        let $table = document.createElement("table");
        $table.id = "calendar";

        for(let i=0;i<7;i++){
            let $tr = document.createElement("tr");
            for(let j=0;j<7;j++){
                let $td = document.createElement("td");

                $tr.append($td);

                if(i==0){
                    $td.classList = "dayOfWeek";
                }else{
                    $td.classList = "day";
                }

                if(j==0){
                    $td.style.color = "red";
                }else if(j==6){
                    $td.style.color = "blue";
                }
            }
            $table.append($tr);
        }
        return $table;
    }

    setCalendar = (event) =>{
        let $content = document.querySelector("#contentId");
        if($content.hasChildNodes()){
            $content.removeChild($content.firstChild);
        }

        let dayList = ControllerMain.dayList;
        let $thisYear = document.querySelector("#year").innerText;
        let $thisMonth = document.querySelector("#month").innerText-1;

        let $table = this.getTable();
        this.$content = document.querySelector("#contentId");
        this.$content.append($table);

        let lastYear = $thisYear-1;
        let total = lastYear * 365;

        total+= parseInt(lastYear / 400);
        total-= parseInt(lastYear / 100);
        total+= parseInt(lastYear / 4);

        let monthList = [31,28,31,30,31,30,31,31,30,31,30,31];

        if($thisYear%400 == 0){
            monthList = [31,29,31,30,31,30,31,31,30,31,30,31];
        }else if($thisYear%100 != 0 && $thisYear%4 == 0){
            monthList = [31,29,31,30,31,30,31,31,30,31,30,31];
        }

        for(let i=0;i<$thisMonth;i++){
            total+=monthList[i];
        }

        total+=1;

        let dayIndex = total%7;

        for(let i=0;i<dayList.length;i++){
            $table.children[0].children[i].innerText = dayList[i];
        }

        let row = 1;
        for(let i=0;i<monthList[$thisMonth];i++){
            let index = (i+dayIndex) % 7;
            $table.children[row].children[index].innerHTML = "<div><a href='#' class='aWrite'>" + (i + 1) + "</a></div>";

            if(index == 6){
                row+=1;
            }
        }

        let $aWriteList = document.querySelectorAll(".aWrite");
        console.log($aWriteList);
        for(let i=0;i<$aWriteList.length;i++){
            $aWriteList[i].addEventListener("click",this.clickWritePage);
        }

        this.setDiaryList($thisYear, $thisMonth+1);
    }

    clickWritePage = (event) => {
        let year = document.querySelector("#year").innerText;
        let month = document.querySelector("#month").innerText;

        if(Number(month)<10){
            month = "0"+month;
        }
        
        let day = event.target.innerText;
        if(Number(day)<10){
            day="0"+day;
        }

        let data = year+"-"+month+"-"+day;

        ControllerMain.changePage("page-write",data);
    }

    setDiaryList(year,month) {
        let list = DiaryDAO.getDiaryList(year,month);
        console.log(list);

        let $dayList = document.querySelectorAll(".day");

        for(let i=0;i<list.length;i++){
            let title = list[i].title;
            let day = Number(list[i].regDate.split("-")[2]);

            for(let j=0;j<$dayList.length;j++){
                if($dayList[j].children[0] != null){
                    if($dayList[j].children[0].innerText == day){
                        let $div = document.createElement("div");

                        $div.id = list[i].diaryNo;
                        $div.classList = "diary-title";
                        $div.style.color = "black";
                        $div.style.width = "100px";
                        $div.style.height = "20px";

                        $div.style.display = "block";
                        $div.style.overflow = "hidden";
                        $div.style.whiteSpace = "nowrap";
                        $div.style.textOverflow = "ellipsis";

                        $div.append(title);

                        $dayList[j].append($div);
                    }
                }
            }

            let $titleList = document.querySelectorAll(".diary-title");
            for(let i=0;i<$titleList.length;i++){
                $titleList[i].addEventListener("click", this.clickInfoPage);
            }
        }
    }

    clickInfoPage = (event) =>{
        let diaryNo = event.target.id;

        ControllerMain.changePage("page-info",diaryNo);
    }
}