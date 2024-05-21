import { ControllerMain } from "./controllerMain.js";
import { JsonItemList } from "./jsonItemList.js";

export class PageItemList {

    execute(data) {
        let $content = document.querySelector("#content");

        let tag = "";
        tag += 
        `
        <style>
            /* content */
            #itemList {
                width: 1050px;
                height: 48px;
                margin: 0 auto;
                font-weight: bold;
            }
            .item-img {
                width: 250px;
            }
            .itemList-space {
                width: 25px;
            }
            .itemList-title {
                height: 150px;
                text-align: center;
                font-size: 28px;
                color: #333333;
                font-weight: bold;
            }
            .itemList-count {
                height: 50px;
                text-align: right;
                color: #333333;
                font-weight: bold;
            }
            .itemList-text1 {
                font-size: 16px;
                color: #333333;
            }
            .itemList-text2 {
                font-size: 16px;
                color: #FA622F;
            }
            .itemList-text3 {
                font-size: 16px;
                color: #333333;
            }
            .itemList-text4 {
                font-size: 14px;
                color: #B5B5B5;
                text-decoration: line-through;
                text-align: left;
            }
            .itemList-text5 {
                font-size: 12px;
                color: #B5B5B5;
                vertical-align: top;
            }
            .itemList-space2 {
                height: 80px;
            }

            /* pageNation */
            #pageNation {
                cursor: pointer;
                margin: 0 auto;
                font-size: 14px;
                font-weight: bold;
                color: gray;
                text-align: center;
                margin-bottom: 100px;
            }
            .pageMove {
                width: 30px;
                height: 30px;
                border: 1px solid lightgray;
            }  
            .a-pageItemList:hover {
                text-decoration: underline;
            }
        </style>     
        `;

        let itemList = JsonItemList.getInstance().getAllItemList();

        tag += 
        `
        <!-- content -->
        <table id="itemList">
            <tr>
                <td class="itemList-title" colspan="7">전체상품</td>
            </tr>
            <tr>
                <td class="itemList-count" colspan="7">총 ${itemList.length}건</td>
            </tr>
        `;
        
        let itemCount = itemList.length;
        let col = 4;
        let row = 3;
        let curPageNum = 1;         // 현재 페이지 번호
        if(data != null) {
            curPageNum = Number(data);
        }
        let curpageItemCount = col*row;  // 한 페이지에 보여줄 상품의 개수
        
        let startIndex = (curPageNum - 1) * curpageItemCount;
        let lastIndex = startIndex + curpageItemCount;
        if(lastIndex > itemCount) {
            lastIndex = itemCount;
        }
        row = parseInt((lastIndex - startIndex) / col);
        if((lastIndex - startIndex) % col > 0) {
            row += 1;
        }

        let endIndex = startIndex + col;     
        
        for(let j=0; j<row; j++) {
            /* 상품 이미지 */
            for(let i=startIndex; i<endIndex; i++) {
                if(i % col == 0) {
            tag += `   <tr>`;
                }
            tag += `   <td>
                            <a class="a-pageItemInfo" href="#">
                                <img class="item-img" src="./img/${ itemList[i].itemImage }">
                                <input type="hidden" class="index" value="${ i }">
                            </a>
                        </td>`;
                if(i % col != 3) {
            tag += `   <td class="itemList-space"></td>`;
                }    
                if(i % col == 3) {
            tag += `   </tr>`;
                }  
            } 
            /* 상품 명 */
            for(let i=startIndex; i<endIndex; i++) {
                if(i % col == 0) {
            tag += `   <tr>`;
                }
            tag += `   <td  class="itemList-text1">${ itemList[i].itemName }</td>`;
                if(i % col != 3) {
            tag += `   <td class="itemList-space"></td>`;
                }    
                if(i % col == 3) {
            tag += `   </tr>`;
                }                   
            }
            /* 상품 정보 */
            for(let i=startIndex; i<endIndex; i++) {
                if(i % col == 0) {
                    tag += `   <tr>`;
                }
                    tag += `   <td class="itemList-text5">${ itemList[i].itemInfo }</td>`;
                if(i % col != 3) {
                    tag += `   <td class="itemList-space"></td>`;
                }    
                if(i % col == 3) {
                    tag += `   </tr>`;
                }                   
            }        
            /* 상품 가격 */
            for(let i=startIndex; i<endIndex; i++) {
                if(i % col == 0) {
                    tag += `   <tr>`;
                }
                if(itemList[i].itemDiscount > 0) { 
                    let itemPrice = itemList[i].itemPrice - (itemList[i].itemPrice * itemList[i].itemDiscount / 100);
                    tag +=
                    `   
                    <td>
                        <span class="itemList-text2">${ itemList[i].itemDiscount }%</span>
                        <span class="itemList-text3">${ itemPrice.toLocaleString() }원</span>
                    </td>
                    `;
                } else {
                    tag +=
                    `   
                    <td>
                        <span class="itemList-text3">${ itemList[i].itemPrice.toLocaleString() }원</span>
                    </td>
                    `;
                }
                if(i % col != 3) {
                    tag += `   <td class="itemList-space"></td>`;
                }    
                if(i % col == 3) {
                    tag += `   </tr>`;
                }             
            }

            /* 상품 할인 가격 */
            for(let i=startIndex; i<endIndex; i++) {
                if(i % col == 0) {
                    tag += `   <tr>`;
                }
                if(itemList[i].itemDiscount > 0) { 
                    tag +=
                    `<td class="itemList-text4">${ itemList[i].itemPrice.toLocaleString() }원</td>`;
                } else {
                    tag += `<td></td>`;
                }
                if(i % col != 3) {
                    tag += `   <td class="itemList-space"></td>`;
                }    
                if(i % col == 3) {
                    tag += `   </tr>`;
                } 
            }   

            /* 하단 여백 */
            tag +=
            `
            <tr>
                <td class="itemList-space2" colspan="7"></td>
            </tr>
            `;
            
            startIndex += col;
            endIndex = startIndex + col;
            if(endIndex > itemCount) {
                endIndex = itemCount;
            }
        }

        tag +=`</table>`;

    
        /* 페이징 처리 */
        let onePageCount = 3;       // 한 페이지에 보여줄 페이지 번호의 개수

        let allPageCount = parseInt(itemCount / curpageItemCount);     // 전체 페이지 개수
        if(itemCount % curpageItemCount > 0) {
            allPageCount += 1;
        }

       
        let startNum = 1;           // 페이징 시작 번호
        if(curPageNum % onePageCount == 0) {
            startNum = curPageNum - 2;
        } else {
            startNum = curPageNum - curPageNum % 3 + 1;
        }
        let endNum = startNum + onePageCount - 1;   // 페이징 마지막 번호
        if(endNum > allPageCount) {
            endNum = allPageCount;
        }

        tag +=
        `
            <table id="pageNation">
                <tr>
        `;

        if(startNum > onePageCount) {
            tag += `<td class="pageMove"><a id="a-berforePageItemList"><</a></td>`;
        }
        for(let i=startNum; i<=endNum; i++) {
            tag += `<td class="pageMove"><a class="a-pageItemList">${ i }</a></td>`;
        }
        if(endNum < allPageCount) {
            tag += `<td class="pageMove"><a id="a-afterPageItemList">></a></td>`;
        }

        tag += 
        `
                </tr>
            </table>
        `;
        $content.innerHTML = tag;


        //-------------------------------------------------------------------------------------

        let $aPageItemList = document.querySelectorAll(".a-pageItemList");
        // 현재 페이지 번호 배경색 적용하기
        let index = 0;
        if(curPageNum % onePageCount > 0) {
            index = (curPageNum % onePageCount) - 1;
        } else {
            index = curPageNum - 1;
        }
        document.querySelectorAll(".pageMove")[index].style.backgroundColor = "rgb(221, 221, 221)";

        // 페이지 번호를 클릭할 때마다 클릭한 페이지 번호를 넘겨
        // 해당 페이지의 상품 출력하기
        for(let i=0; i<$aPageItemList.length; i++) {
            $aPageItemList[i].addEventListener("click", (e) => {
                let index = e.target.innerText;
                ControllerMain.getInstance().changePage("page-itemList", index);
            });
        }

        // 이전 페이지 클릭 이벤트
        if(document.querySelector("#a-berforePageItemList") != null) {
            let $aBeforePageItemList = document.querySelector("#a-berforePageItemList");
            $aBeforePageItemList.addEventListener("click", (e) => {
                let index = startNum - onePageCount;
                ControllerMain.getInstance().changePage("page-itemList", index);
            });
        }
        // 이후 페이지 클릭 이벤트
        if(document.querySelector("#a-afterPageItemList") != null) {
            let $aAfterPageItemList = document.querySelector("#a-afterPageItemList");
            $aAfterPageItemList.addEventListener("click", (e) => {
                let index = startNum + onePageCount;
                ControllerMain.getInstance().changePage("page-itemList", index);
            });
        }

        // 이미지 클릭식 상품 상세 페이지로 이동
        let $aPageItemInfo = document.querySelectorAll(".a-pageItemInfo");

        let $indexList = document.querySelectorAll(".index");

        for(let i=0; i<$aPageItemInfo.length; i++) {
            $aPageItemInfo[i].addEventListener("click", (e) => {
                let data = {index:$indexList[i].value};
                ControllerMain.getInstance().changePage("page-itemInfo", data);
            });
        }
    }


   
}