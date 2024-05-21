import { JsonItemList } from "./jsonItemList.js";
import { ControllerMain } from "./controllerMain.js";
import { JsonMemberList } from "./jsonMemberList.js";
import { JsonCartList } from "./jsonCartList.js";

export class PageItemInfo {

    execute(data) {
        let $content = document.querySelector("#content");

        let tag = "";
        tag += 
        `
        <style>
            /* content */
            #itemTable {
                margin: 0 auto;
                margin-top: 30px;
                height: 500px;
            }
            #itemInfoTable {
                width: 400px;
            }
            .itemImg {
                height: 500px;
            }
            .itemNameTd {
                height: 60px;
                font-size: 24px;
            }
            .itemInfoTd {
                font-size: 14px;
                color: gray;
                height: 40px;
            }
            .itemPriceTd {
                height: 40px;
            }
            .itemPrice {
                font-size: 28px;
                font-weight: bold;
            }
            .itemCountTd {
                height: 40px;
            }
            .minus, .plus {
                display: inline-block;
                border: 1px solid lightgray;
                border-radius: 3px;
                text-align: center;
                width: 30px;
                height: 30px;
                font-size: 20px;
                cursor: pointer;
            }
            .itemCount {
                display: inline-block;
                width: 30px;
                height: 30px;
                text-align: center;
                font-size: 20px;
            }
            .itemTotalTd {
                text-align: right;
                height: 40px;
            }
            .itemTotalText {
                font-size: 13px;
            }
            .itemTotalNumber {
                font-size: 32px;
                font-weight: bold;
            }
            .itemCartTd {
                height: 100px;
            }
            .cartBtn {
                width: 400px;
                height: 50px;
                background:  #5F0080;
                border: 1px solid #5F0080;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                color: white;
                cursor: pointer;
            }
            .rowSpace {
                height: 150px;
            }
            .colSpace {
                width: 50px;
            }
            .bold-text {
                font-size: 14px;
                font-weight: bold;
            }
            .small-text {
                font-size: 12px;
                color: gray;
            }
        </style>
        `;

        let index = data.index;
        let item = JsonItemList.getInstance().getItem(index);
        console.log(item);

        let itemPrice = 0;
        if(item.itemDiscount > 0) {
            itemPrice = item.itemPrice - (item.itemPrice * item.itemDiscount / 100);
            
        } else {
            itemPrice = item.itemPrice;
        }

        tag +=
        `
        <!-- content -->
        <table id="itemTable">
            <tr>
                <td rowspan="6">
                    <img class="itemImg" src="./img/${item.itemImage}">
                    <input type="hidden" class="index" value="${index}">
                </td>
                <td class="colSpace"></td>
                <td>
                    <table id="itemInfoTable">
                        <tr>
                            <td class="itemNameTd">
                                ${item.itemName}
                            </td>
                        </tr>
                        <tr>
                            <td class="itemInfoTd">
                                ${item.itemInfo}
                            </td>
                        </tr>
                        
            `;
            if(item.itemDiscount > 0) {
                tag +=
                ` 
                <tr>
                    <td class="itemPriceTd">
                        <span class="itemDiscount" style="font-size: 28px; color: #FA622F;">${item.itemDiscount}%</span>
                        <span class="itemPrice">${itemPrice.toLocaleString()}</span>원
                    </td>
                </tr>
                `;
            } else {
                tag +=
                `
                <tr>
                    <td class="itemPriceTd">
                        <span class="itemPrice">${itemPrice.toLocaleString()}</span>원
                    </td>
                </tr>
                `;
            }
            
            tag +=
            `
                            
                        <tr>
                            <td>
                                <hr color="lightgray" size="1px">
                                <span class="bold-text">샛별배송</span><br>
                                <span class="small-text">23시 전 주문 시 내일 아침 7시 전 도착<br>
                                (대구·부산·울산 샛별배송 운영시간 별도 확인)</span>
                                <hr color="lightgray" size="1px">
                                <span class="bold-text">판매자 : 컬리</span> 
                                <hr color="lightgray" size="1px">
                                <span class="bold-text">원산지 : 상품설명/상세정보 참조</span> 
                                <hr color="lightgray" size="1px">
                            </td>
                        </tr>
                        <tr>
                            <td class="itemCountTd">
                                <span class="minus">-</span>
                                <span class="itemCount">1</span>
                                <span class="plus">+</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="itemTotalTd">
                                <span class="itemTotalText">총상품금액 : </span>
                                <span class="itemTotalNumber">${itemPrice.toLocaleString()}</span>원
                            </td>
                        </tr>
                        <tr>
                            <td class="itemCartTd">
                                <button class="cartBtn">장바구니 담기</button>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        `;

        $content.innerHTML = tag;

        let $minus = document.querySelector(".minus");
        $minus.addEventListener("click", this.clickMinusEvent);

        let $plus = document.querySelector(".plus");
        $plus.addEventListener("click", this.clickMinusEvet);

        let $cartBtn = document.querySelector(".cartBtn");
        $cartBtn.addEventListener("click", this.clickCartPage);


    }

    clickMinusEvent = (e) => {
        let $itemCount = document.querySelector(".itemCount");
        let $itemPrice = document.querySelector(".itemPrice");
        let $itemTotalNumber = document.querySelector(".itemTotalNumber");

        let itemCount = Number($itemCount.innerText);
        let itemPrice = Number($itemPrice.innerText.replace(",", ""));
        let itemTotalNumber = Number($itemTotalNumber.innerText.replace(",", ""));

        if(itemCount > 0) {
            itemCount -= 1;
            $itemCount.innerText = itemCount;
            
            itemTotalNumber -= itemPrice;
            $itemTotalNumber.innerText = itemTotalNumber.toLocaleString();
        }
    }

    clickMinusEvet = (e) => {
        let $itemCount = document.querySelector(".itemCount");
        let $itemPrice = document.querySelector(".itemPrice");
        let $itemTotalNumber = document.querySelector(".itemTotalNumber");

        let itemCount = Number($itemCount.innerText);
        let itemPrice = Number($itemPrice.innerText.replace(",", ""));
        let itemTotalNumber = Number($itemTotalNumber.innerText.replace(",", ""));

        itemCount += 1;
        $itemCount.innerText = itemCount;
        
        itemTotalNumber += itemPrice;
        $itemTotalNumber.innerText = itemTotalNumber.toLocaleString();
    }

    clickCartPage = (e) => {
        let log = ControllerMain.getInstance().log;
        if(log == null) {
            alert("로그인 후 이용할 수 있습니다.");
            ControllerMain.getInstance().changePage("page-login", null);
        } else {
            let index = Number(document.querySelector(".index").value);
            console.log("index = " + index);
            let item = JsonItemList.getInstance().getItem(index);
            console.log(item.itemName);
            
            let $itemCount = document.querySelector(".itemCount");
            let itemCount = Number($itemCount.innerText);
            
            let log = ControllerMain.getInstance().log;
            let memberNo = JsonMemberList.getInstance().getMemberNo(log);

            let lastNo = JsonCartList.getInstance().getLastCartNum();

            let cartData = {
                cartNo: lastNo + 1,
                cartMemberNo: memberNo,
                cartItemNo: item.itemNo,
                cartItemCount: itemCount
            }

            JsonCartList.getInstance().addCart(cartData);
            ControllerMain.getInstance().changePage("page-cartInfo", null);
        }
    }
    
}