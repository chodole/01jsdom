import { ControllerMain } from "./controllerMain.js";
import { JsonMemberList } from "./jsonMemberList.js";

export class PageHeader {

    execute(data) {

        let $header = document.querySelector("#header");

        let tag = "";
        tag += 
        `
        <style>
            a {
                text-decoration: none;
                color: #333333; 
                cursor: pointer;
            }
            a:hover {
                color: #5F0080;
            }
            table, tr, td {
                /* border: 1px solid #333333; */
                border-collapse: collapse;
            }

            /* header1 */
            #headerTable1 {
                width: 1050px;
                height: 37px;
                margin: 0 auto;
                text-align: center;
                font-size: 13px;
            }
            .header1-space {
                width: 850px;
                margin: 0 auto;
                text-align: center;
            }
            .header1-menu {
                width: 60px;
            }
            .logo {
                cursor: pointer;
            }
            /* header2 */
            #headerTable2 {
                width: 1050px;
                height: 63px;
                margin: 0 auto;
                text-align: center;
            }
            .header2-img { 
                text-align: left;
            }
            .header2-logo a {
                font-size: 18px;
                font-weight: bold;
                color: #5F0080;
            }
            .header2-search {
                width: 700px;
            }
            .header2-input {
                width: 300px;
                height: 18.39px;
                font-size: 16px;
                border: none;
            }
            .header2-img {
                width: 50px;
                text-align: center;
            }
            #searchTable {
                width: 400px;
                height: 48px;
                /* table안의 table 중앙정렬 */
                margin-left: auto;
                margin-right: auto;
                /* table 모서리 둥글게 */
                border-collapse: separate;
                border-radius: 5px;
                border: 1px solid #5F0080;
            }
            .cart {
                cursor: pointer;
            }
            /* header3 */
            #headerTable3 {
                width: 1050px;
                height: 56px;
                margin: 0 auto;
                text-align: left;
                font-size: 16px;
                font-weight: bold;
            }
            .header3-menu {
                width: 170px;
            }
        </style>            
        `;

        let log = ControllerMain.getInstance().log;

        tag += 
        `
        <!-- header -->
        <table id="headerTable1">
        `;
        if(log == null) {
        tag +=
        `
            <tr>
                <td class="header1-space"></td>
                <td class="header1-menu"><a>회원가입</a></td>
                <td class="header1-bar"><img src="./img/bar.jpg"></td>
                <td class="header1-menu"><a id="clickLogin">로그인</a></td>
                <td class="header1-bar"><img src="./img/bar.jpg"></td>
                <td class="header1-menu"><a>고객센터</a></td>
            </tr>
        `;
        } else {
        tag +=
        `
        <tr>
            <td class="header1-space"></td>
            <td class="header1-menu"><a class="logout">로그아웃</a></td>
            <td class="header1-bar"><img src="./img/bar.jpg"></td>
            <td class="header1-menu"><a>정보수정</a></td>
            <td class="header1-bar"><img src="./img/bar.jpg"></td>
            <td class="header1-menu"><a>고객센터</a></td>
        </tr>
        `;
        }
        tag +=
        `
        </table>
        <table id="headerTable2">
            <tr>
                <td class="header2-img"><img src="./img/logo.svg" class="logo"></td>
                <td class="header2-logo"><a class="logo">마켓컬리</a></td>
                <td class="header2-search">
                    <table id="searchTable">
                        <tr>
                            <td><input type="text" placeholder="검색어를 입력해주세요" class="header2-input"></td>
                            <td><img src="./img/search.svg"></td>
                        </tr>
                    </table>
                </td>
                <td class="header2-img"><img class="cart" src="./img/cart.svg"></td>
            </tr>
        </table>
        <table id="headerTable3">
            <tr>
                <td class="header3-menu"><a id="a-itemListPage">전체상품</a></td>
                <td class="header3-menu"><a>신상품</a></td>
                <td class="header3-menu"><a>베스트</a></td>
                <td class="header3-menu"><a>알뜰쇼핑</a></td>
                <td class="header3-menu"><a>특가/혜택</a></td>
                <td align="right" style="width: 100px;"><a>새벽알뜰배송</a></td>
            </tr>
        </table>       
        `;

        $header.innerHTML = tag;

        let $aItemListPage = document.querySelector("#a-itemListPage");
        $aItemListPage.addEventListener("click", this.clickItemListPage);

        if(log == null) {
            let $clickLogin = document.querySelector("#clickLogin");
            $clickLogin.addEventListener("click", this.clickLoginPage);
        }
        

        let $logoList = document.querySelectorAll(".logo");
        for(let i=0; i<$logoList.length; i++) {
            $logoList[i].addEventListener("click", function() {
                ControllerMain.getInstance().changePage("page-index", null);
            });
        }

        if(log != null) {
            let $logout = document.querySelector(".logout");
            $logout.addEventListener("click", function() {
                ControllerMain.getInstance().log = null;
                ControllerMain.getInstance().changePage("page-header", null);
                ControllerMain.getInstance().changePage("page-index", null);
            })
        }

        let $cart = document.querySelector(".cart");
        $cart.addEventListener("click", this.clickCartPage);
        
    }

    clickItemListPage = (e) => {
        ControllerMain.getInstance().changePage("page-itemList", null);
    }
    
    clickLoginPage = (e) => {
        ControllerMain.getInstance().changePage("page-login", null);
    }

    clickCartPage = (e) => {
        let log = ControllerMain.getInstance().log;
        if(log == null) {
            alert("로그인 후 이용할 수 있습니다.");
            ControllerMain.getInstance().changePage("page-login", null);
        } else {
            ControllerMain.getInstance().changePage("page-cartInfo", null);
        }
    }

}