import { ControllerMain } from "./controllerMain.js";
import { JsonItemList } from "./jsonItemList.js";
import { JsonMemberList } from "./jsonMemberList.js";

export class JsonCartList {

    static instance = new JsonCartList();
    static getInstance() { return JsonCartList.instance; }

    init() {
        this.cartList = null;
        this.setCartSampleData();
    }

    setCartSampleData() {
        this.cartList = [
            {
                cartNo: 1,
                cartMemberNo: 3,
                cartItemNo: 3,
                cartItemCount: 2
            },
            {
                cartNo: 2,
                cartMemberNo: 1,
                cartItemNo: 11,
                cartItemCount: 1
            },
            {
                cartNo: 3,
                cartMemberNo: 2,
                cartItemNo: 5,
                cartItemCount: 3
            },
            {
                cartNo: 4,
                cartMemberNo: 3,
                cartItemNo: 7,
                cartItemCount: 5
            },
            {
                cartNo: 5,
                cartMemberNo: 2,
                cartItemNo: 1,
                cartItemCount: 21
            },
            {
                cartNo: 6,
                cartMemberNo: 3,
                cartItemNo: 21,
                cartItemCount: 5
            },
            {
                cartNo: 7,
                cartMemberNo: 3,
                cartItemNo: 29,
                cartItemCount: 1
            },
        ];
    }

    /* 내 장바구니 */
    getCartList() {
        let id = ControllerMain.getInstance().log;
        let no = JsonMemberList.getInstance().getMemberNo(id);

        let myCartList = [];
        for(let i=0; i<this.cartList.length; i++) {
            let cart = this.cartList[i];

            let index = JsonItemList.getInstance().getItemIndex(cart.cartItemNo);
            let item = JsonItemList.getInstance().getItem(index);
            let temp = {
                itemCartNo: cart.cartNo,
                itemImage: item.itemImage,
                itemName: item.itemName,
                itemCount: cart.cartItemCount,
                itemPrice: item.itemPrice,
                itemDiscount: item.itemDiscount
            };
            if(cart.cartMemberNo == no) {
                myCartList.push(temp);
            }
        }

        return myCartList;
    }

    /* 장바구니 마지막 번호 */
    getLastCartNum() {
        return this.cartList[this.cartList.length - 1].cartNo;
    }

    /* 장바구니 담기 */
    addCart(cartData) {
        this.cartList.push(cartData);
        console.log(this.cartList);
    }

    /* 상품 한 개 삭제 */
    deleteItem(itemCartNo) {
        let index = 0;
        for(let i=0; i<this.cartList.length; i++) {
            if(itemCartNo == this.cartList[i].cartNo) {
                index = i;
                break;
            }
        }

        this.cartList.splice(index, 1);
        console.log(this.cartList);
    }

}
