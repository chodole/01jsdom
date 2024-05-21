import { JsonItemList } from "./jsonItemList.js";
import { ControllerMain } from "./controllerMain.js";

export class PageIndex {

    execute(data) {
        let $content = document.querySelector("#content");

        let tag = "";
        tag +=
        `
        <style>
            /* bannder */
            #banner {
                margin: 0 auto;
                text-align: center;
            }
            #slide-img {
                width: 1890px;
            }
            /* content */
            .content {
                width: 1050px;
                height: 48px;
                margin: 0 auto;
                margin-top: 100px;
                margin-bottom: 50px;
                text-align: center;
                font-size: 28px;
                color: #333333;
                font-weight: bold;
            }
            .content-img {
                width: 250px;
                cursor: pointer;
            }
            .content-space1 {
                height: 20px;
            }
            .content-space2 {
                width: 10px;
            }
            .content-text {
                text-align: left;
            }
            .content-text1 {
                font-size: 16px;
                color: #333333;
                text-align: left;
                vertical-align: top;
            }
            .content-text2 {
                font-size: 16px;
                color: #FA622F;
            }
            .content-text3 {
                font-size: 16px;
                color: #333333;
            }
            .content-text4 {
                font-size: 14px;
                color: #B5B5B5;
                text-decoration: line-through;
                text-align: left;
            }
            /* content-banner */
            #content-banner {
                margin: 0 auto;
                margin-top: 100px;
                margin-bottom: 100px;
            }
            #content-banner img {
                width: 1050px;
            }  
        </style>      
        `;

        tag +=
        `
        <!-- banner -->
        <table id="banner">
            <tr>
                <td><img id="slide-img" src="./img/banner1.jpg"></td>
            </tr>
        </table>        
        <!-- content -->
        <table class="content">
            <tr>
                <td colspan="7">
                    놓치면 후회할 가격 <img style="height: 20px;" src="./img/cramps.svg">
                </td>
            </tr>
            <tr>
                <td colspan="7" class="content-space1"></td>
            </tr>
        `;

        let maxDiscountRateItemList = JsonItemList.getInstance().getMaxDiscountRateItemList();
        tag +=
        `
            <tr>
                <td>
                    <img class="content-img" src="./img/${maxDiscountRateItemList[0].itemImage}">
                    <input type="hidden" class="itemNo" value="${maxDiscountRateItemList[0].itemNo}">
                </td>
                <td class="content-space2"></td>
                <td>
                    <img class="content-img" src="./img/${maxDiscountRateItemList[1].itemImage}">
                    <input type="hidden" class="itemNo" value="${maxDiscountRateItemList[1].itemNo}">
                </td>
                <td class="content-space2"></td>
                <td>
                    <img class="content-img" src="./img/${maxDiscountRateItemList[2].itemImage}">
                    <input type="hidden" class="itemNo" value="${maxDiscountRateItemList[2].itemNo}">
                </td>
                <td class="content-space2"></td>
                <td>
                    <img class="content-img" src="./img/${maxDiscountRateItemList[3].itemImage}">
                    <input type="hidden" class="itemNo" value="${maxDiscountRateItemList[3].itemNo}">
                </td>
            </tr>
            <tr>
                <td class="content-text1">${maxDiscountRateItemList[0].itemName}</td>
                <td class="content-space2"></td>
                <td class="content-text1">${maxDiscountRateItemList[1].itemName}</td>
                <td class="content-space2"></td>
                <td class="content-text1">${maxDiscountRateItemList[2].itemName}</td>
                <td class="content-space2"></td>
                <td class="content-text1">${maxDiscountRateItemList[3].itemName}</td>
            </tr>
            <tr>
                <td class="content-text">
                    <span class="content-text2">${maxDiscountRateItemList[0].itemDiscount}%</span>
                    <span class="content-text3">${(maxDiscountRateItemList[0].itemPrice * maxDiscountRateItemList[0].itemDiscount/100).toLocaleString()}원</span>
                </td>
                <td class="content-space2"></td>
                <td class="content-text">
                    <span class="content-text2">${maxDiscountRateItemList[1].itemDiscount}%</span>
                    <span class="content-text3">${(maxDiscountRateItemList[1].itemPrice * maxDiscountRateItemList[1].itemDiscount/100).toLocaleString()}원</span>
                </td>
                <td class="content-space2"></td>
                <td class="content-text">
                    <span class="content-text2">${maxDiscountRateItemList[2].itemDiscount}%</span>
                    <span class="content-text3">${(maxDiscountRateItemList[3].itemPrice * maxDiscountRateItemList[2].itemDiscount/100).toLocaleString()}원</span>
                </td>
                <td class="content-space2"></td>
                <td class="content-text">
                    <span class="content-text2">${maxDiscountRateItemList[3].itemDiscount}%</span>
                    <span class="content-text3">${(maxDiscountRateItemList[3].itemPrice * maxDiscountRateItemList[3].itemDiscount/100).toLocaleString()}원</span>
                </td>
            </tr>
            <tr>
                <td class="content-text4">${(maxDiscountRateItemList[0].itemPrice).toLocaleString()}원</td>
                <td class="content-space2"></td>
                <td class="content-text4">${(maxDiscountRateItemList[1].itemPrice).toLocaleString()}원</td>
                <td class="content-space2"></td>
                <td class="content-text4">${(maxDiscountRateItemList[2].itemPrice).toLocaleString()}원</td>
                <td class="content-space2"></td>
                <td class="content-text4">${(maxDiscountRateItemList[3].itemPrice).toLocaleString()}원</td>
            </tr>
        </table>
    
        <!-- content-banner -->
        <table id="content-banner">
            <tr>
                <td><img src="./img/content-banner.jpg"></td>
            </tr>
        </table>
        `;

        tag +=
        `
        <!-- content -->
        <table class="content">
            <tr>
                <td colspan="7">
                    가장 핫한 상품 <img style="height: 20px;" src="./img/cramps.svg">
                </td>
            </tr>
            <tr>
                <td colspan="7" class="content-space1"></td>
            </tr>
        `;

        maxDiscountRateItemList = JsonItemList.getInstance().getMaxItemSoldCountItemLIst();
        tag +=
        `   <tr>`;
        for(let i=0; i<maxDiscountRateItemList.length; i++) {
            tag += 
            `
                <td>
                    <img class="content-img" src="./img/${maxDiscountRateItemList[i].itemImage}">
                    <input type="hidden" class="itemNo" value="${maxDiscountRateItemList[i].itemNo}">
                </td>
            `;
            if(i < maxDiscountRateItemList.length - 1) {
                tag += 
                `
                <td class="content-space2"></td>
                `;
            }
        }
        tag +=
        `   </tr>`;

        tag +=
        `   <tr>`;
        for(let i=0; i<maxDiscountRateItemList.length; i++) {
            tag += 
            `
            <td class="content-text1">${maxDiscountRateItemList[i].itemName}</td>
            `;
            if(i < maxDiscountRateItemList.length - 1) {
                tag += 
                `
                <td class="content-space2"></td>
                `;
            }
        }
        tag +=
        `   </tr>`;

        tag +=
        `   <tr>`;
        for(let i=0; i<maxDiscountRateItemList.length; i++) {
            if(maxDiscountRateItemList[i].itemDiscount > 0) {
                let itemPrice = maxDiscountRateItemList[i].itemPrice - (maxDiscountRateItemList[i].itemPrice * maxDiscountRateItemList[i].itemDiscount/100);
                tag += 
                `
                <td class="content-text">
                    <span class="content-text2">${maxDiscountRateItemList[i].itemDiscount}%</span>
                    <span class="content-text3">${itemPrice.toLocaleString()}원</span>
                </td>
                `;
            } else {
                tag += 
                `
                <td class="content-text">
                    <span class="content-text3">${(maxDiscountRateItemList[i].itemPrice).toLocaleString()}원</span>
                </td>
                `;
            }
            if(i < maxDiscountRateItemList.length - 1) {
                tag += 
                `
                <td class="content-space2"></td>
                `;
            }
           
        }
        tag +=
        `   </tr>`;

        tag +=
        `   <tr>`;
        for(let i=0; i<maxDiscountRateItemList.length; i++) {
            tag += 
            `
            <td class="content-text4">${(maxDiscountRateItemList[i].itemPrice).toLocaleString()}원</td>
            `;
            if(i < maxDiscountRateItemList.length - 1) {
                tag += 
                `
                <td class="content-space2"></td>
                `;
            }
        }
        tag +=
        `   </tr>
        </table>
        `;
            
        $content.innerHTML = tag;

        let $itemImageList = document.querySelectorAll(".content-img");
        for(let i=0; i<$itemImageList.length; i++) {
            $itemImageList[i].addEventListener("click", this.clickPageItemInfo);
        }

        //------------------------------------------------------------------
        // 배너 슬라이드
        let count = 1;

        // 기본적인 슬라이드 루프 시작
        let loopInterval = setInterval(() => {
            nextMove(); // 다음 슬라이드를 보여주는 함수
        }, 3000);

        let nextMove = function() {
            if(count < 5) {
                count += 1;
            } else {
                count = 1;
            }
            document.querySelector("#slide-img").src = "./img/banner" + count + ".jpg";
        }


        document.addEventListener("click", function() {
            clearInterval(loopInterval);
        });
    }
    
    clickPageItemInfo = (e) => {
        let $itemNoList = document.querySelectorAll(".itemNo");
        let $itemImageList = document.querySelectorAll(".content-img");

        let itemNo = 0;
        for(let i=0; i<$itemImageList.length; i++) {
            if(e.target == $itemImageList[i]) {
                itemNo = $itemNoList[i].value;
                break;
            }
        }
        let index = JsonItemList.getInstance().getItemIndex(itemNo);

        let data = {index:index};
        ControllerMain.getInstance().changePage("page-itemInfo", data);
    }

}