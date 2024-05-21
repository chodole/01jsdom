import { ControllerMain } from "./controllerMain.js";
import { JsonCartList } from "./jsonCartList.js";

export class PageCartInfo {
    execute(data) {
        let $content = document.querySelector("#content");

        let tag = "";
        tag +=
        `
        <style>
            #cartTable {
                margin: 0 auto;
                width: 1050px;
            }
            .cart-header {
                text-align: center;
                height: 240px;
            }
            .cart-sub1 {
                text-align: center;
                width: 50px;
                height: 50px;
            }
            .cart-sub2 {
                width: 180px;
            }
            #cartListTable {
                margin: 0 auto;
                width: 1050px;
            }
            .item-img {
                width: 60px;
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
            .cartList-sub1 {
                text-align: center;
                width: 50px;
                height: 50px;
            }
            .cartList-sub3 {
                font-size: 16px;
                font-weight: bold;
                color: #333333;
            }
            .cartList-sub4 {
                width: 200px;
                text-align: center;
            }
            .cartList-sub5 {
                width: 160px;
                font-size: 16px;
                font-weight: bold;
                color: #333333;
                text-align: right;
            }
            .cartList-sub6 {
                text-align: right;
            }
            #cartResultTable {
                margin: 0 auto;
                height: 300px;
                width: 1050px;
                color: #333333;
            }
            .cartResult-sub {
                width: 700px;
            }
            .cartResult-sub2 {
                text-align: right;
            }
            .black-line {
                background: black;
                height:1px;
                border:0;
            }
            .cart-line {
                background: #EAEAEA;
                height:1px;
                border:0;
            }
            .discount-price {
                font-size: 14px;
                color: #B5B5B5;
                text-decoration: line-through;
            }
            #check-all {
                width: 15px;
                height: 15px;
                cursor: pointer;
            }
            .ch {
                width: 15px;
                height: 15px;
                cursor: pointer;
            }
            .delItem {
                cursor: pointer;
            }
            .emptyCart {
                height: 300px;
                text-align: center;
            }
        </style>        
        `;

        let myCartList = JsonCartList.getInstance().getCartList();
        let count = myCartList.length;

        tag +=
        `
        <table id="cartTable">
            <tr>
                <td colspan="4" class="cart-header"><h2>장바구니</h2></td>
            </tr>
            <tr>
                <td class="cart-sub1">
                    <input type="checkbox" id="check-all"> 
                </td>
                <td class="cart-sub2">
                    전체선택 (
                        <span class="select-count">0</span> / <span>${count}</span> 
                    )
                </td>
                <td class="header1-bar"><img src="./img/bar.jpg"></td>
                <td>
                    <a>선택삭제</a>
                </td>
            </tr>
            <tr>
                <td colspan="4"><hr class="black-line"></td>
            </tr>
        </table>

        <table id="cartListTable">
        `;

        if(myCartList.length > 0) {
            for(let i=0; i<myCartList.length; i++) {
                let item = myCartList[i];
            tag += `
                <tr>
                    <td class="cartList-sub1">
                        <input type="checkbox" class="ch"> 
                    </td>
                    <td class="cartList-sub2"><img class="item-img" src="img/${item.itemImage}"></td>
                    <td class="cartList-sub3">${item.itemName}</td>
                    <td class="cartList-sub4">
                        <span class="minus">-</span>
                        <span class="itemCount" style="padding: 0 15px;">${item.itemCount}</span>
                        <span class="plus">+</span>
                    </td>
                    <td class="cartList-sub5">
                        <span class="item-price">${(item.itemPrice * item.itemCount).toLocaleString()}</span>원<br>
                    </td>
                    <td colspan="6" class="cartList-sub6">
                        <img class="delItem" src="./img/delete.svg">
                    </td>
                </tr>
            `;
                if(i < myCartList.length - 1) {
                    tag += `
                        <tr>
                            <td colspan="6">
                                <hr class="cart-line">
                            </td>
                        </tr>
                    `;
                    }

            }
            
        } else {
            tag +=
            `
            <tr>
                <td class="emptyCart">
                    장바구니에 담긴 상품이 없습니다.
                </td>
            </tr>
            `;
        }
        tag += `
            </table>
        <table id="cartResultTable">
            <tr>
                <td colspan="3"><hr class="black-line"></td>
            </tr>
            <tr>
                <td class="cartResult-sub"></td>
                <td class="cartResult-sub1">상품금액</td>
                <td class="cartResult-sub2">
                    <span class="totalItemPrice">0</span>원
                </td>
            </tr>
            <tr>
                <td class="cartResult-sub"></td>
                <td class="cartResult-sub1">배송비</td>
                <td class="cartResult-sub2">4,000원</td>
            </tr>
            <tr>
                <td colspan="3"><hr class="black-line"></td>
            </tr>
            <tr>
                <td class="cartResult-sub"></td>
                <td class="cartResult-sub1">결제예정금액</td>
                <td class="cartResult-sub2">
                    <span class="totalPrice">4,000</span>원
                </td>
            </tr>
        </table>        
        `;

        $content.innerHTML = tag;

        // 전체 선택
        let $checkAll = document.querySelector("#check-all");
        $checkAll.addEventListener("click", this.checkAllClick);
        
        
        // 선택
        let $chList = document.querySelectorAll(".ch");
        for(let i=0; i<$chList.length; i++) {
            $chList[i].addEventListener("click", this.chClick);
        }

        // 수량 감소
        let $minusList = document.querySelectorAll(".minus");
        for(let i=0; i<$minusList.length; i++) {
            $minusList[i].addEventListener("click", this.minusClick);
        }

        // 수량 증가
        let $plusList = document.querySelectorAll(".plus"); 
        for(let i=0; i<$plusList.length; i++) {
            $plusList[i].addEventListener("click", this.plusClick);
        }

        // x버튼 삭제
        let $delItemList = document.querySelectorAll(".delItem");
        for(let i=0; i<$delItemList.length; i++) {
            $delItemList[i].addEventListener("click", this.delItemClick);
        }

    }

    checkAllClick = (e) => {
        let $checkAll = document.querySelector("#check-all");
        let $chList = document.querySelectorAll(".ch");

        let count = 0;
        if($checkAll.checked) {
            for(let i=0; i<$chList.length; i++) {
                $chList[i].checked = true;
                count += 1;
            }
        } else {
            for(let i=0; i<$chList.length; i++) {
                $chList[i].checked = false;
            }
        }

        let $selectCount = document.querySelector(".select-count");
        $selectCount.innerText = count;

        this.setTotal();
    }

    chClick = (e) => {
        let $chList = document.querySelectorAll(".ch");
        
        let count = 0;
        for(let i=0; i<$chList.length; i++) {
            if($chList[i].checked) {
                count += 1;                
            }
        }

        let $selectCount = document.querySelector(".select-count");
        $selectCount.innerText = count;

        let $checkAll = document.querySelector("#check-all");
        if(count == $chList.length) {
            $checkAll.checked = true;
        } else {
            $checkAll.checked = false;
        }

        this.setTotal();
    }

    minusClick = (e) => {
        let $minusList = document.querySelectorAll(".minus");
        let index = 0;
        for(let i=0; i<$minusList.length; i++) {
            if(e.target == $minusList[i]) {
                index = i;
                break;
            }
        }

        let $itemCountList = document.querySelectorAll(".itemCount");
        let count = Number($itemCountList[index].innerText.replace(",", ""));
        if(count > 0) {
            count -= 1;
            $itemCountList[index].innerText = count;

            let myCartList = JsonCartList.getInstance().getCartList();
            let $itemPriceList = document.querySelectorAll(".item-price");
            $itemPriceList[index].innerText =  (myCartList[index].itemPrice * count).toLocaleString();
        }

        this.setTotal();
    }

    plusClick = (e) => {
        let $plusList = document.querySelectorAll(".plus");
        let index = 0;
        for(let i=0; i<$plusList.length; i++) {
            if(e.target == $plusList[i]) {
                index = i;
                break;
            }
        }

        let $itemCountList = document.querySelectorAll(".itemCount");
        let count = Number($itemCountList[index].innerText.replace(",", ""));
        count += 1;
        $itemCountList[index].innerText = count;
        
        let myCartList = JsonCartList.getInstance().getCartList();
        let $itemPriceList = document.querySelectorAll(".item-price");
        $itemPriceList[index].innerText =  (myCartList[index].itemPrice * count).toLocaleString();

        this.setTotal();
    }

    setTotal() {
        let $chList = document.querySelectorAll(".ch");
        
        let $itemPriceList = document.querySelectorAll(".item-price");

        let total = 0;
        for(let i=0; i<$chList.length; i++) {
            if($chList[i].checked) {
                total += Number($itemPriceList[i].innerText.replace(",", ""));
            }
        }

        let $totalItemPrice = document.querySelector(".totalItemPrice");
        $totalItemPrice.innerText = total.toLocaleString();

        let $totalPrice = document.querySelector(".totalPrice");
        $totalPrice.innerText = (total + 4000).toLocaleString();
    }

    delItemClick = (e) => {
        let $delItemList = document.querySelectorAll(".delItem");
        let index = 0;
        for(let i=0; i<$delItemList.length; i++) {
            if(e.target == $delItemList[i]) {
                index = i;
                break;
            }
        }
        
        let myCartList = JsonCartList.getInstance().getCartList();
        JsonCartList.getInstance().deleteItem(myCartList[index].itemCartNo);

        ControllerMain.getInstance().changePage("page-cartInfo", null);
    }

}