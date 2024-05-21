export class JsonItemList {

    static instance = new JsonItemList();
    static getInstance() { return JsonItemList.instance; }

    init() {
        this.itemList = null;
        this.setItemSampleData();
    }
    
    setItemSampleData() {
        this.itemList = [
            {
                itemNo: 1,
                itemCategory: "채소",
                itemName: "[KF365] 다다기오이 3입",
                itemDiscount: 50,
                itemPrice: 8580,
                itemStock: 1,
                itemImage: "1.jpg",
                itemSold: 1,
                itemInfo: "믿고 먹을 수 있는 상품을 합리적인 가격에, KF356",
            },
            {
                itemNo: 2,
                itemCategory: "채소",
                itemName: "깐대파 500g",
                itemDiscount: 0,
                itemPrice: 3490,
                itemStock: 2,
                itemImage: "2.jpg",
                itemSold: 2,
                itemInfo: "최대혜택가 : 2,792원",
            },
            {
                itemNo: 3,
                itemCategory: "채소",
                itemName: "영암 친환경 꿀고구마 2kg",
                itemDiscount: 0,
                itemPrice: 15200,
                itemStock: 3,
                itemImage: "3.jpg",
                itemSold: 3,
                itemInfo: "포실포실 달콤한 꿀고구마를 무농약으로 즐기세요",
            },
            {
                itemNo: 4,
                itemCategory: "채소",
                itemName: "한통 양배추",
                itemDiscount: 0,
                itemPrice: 4990,
                itemStock: 4,
                itemImage: "4.jpg",
                itemSold: 4,
                itemInfo: "아삭한 잎에 깃든 달콤함",
            },
            {
                itemNo: 5,
                itemCategory: "채소",
                itemName: "[KF365] 감자 1kg",
                itemDiscount: 50,
                itemPrice: 7980,
                itemStock: 5,
                itemImage: "5.jpg",
                itemSold: 5,
                itemInfo: "믿고 먹을 수 있는 상품을 합리적인 가격에, KF356",
            },
            {
                itemNo: 6,
                itemCategory: "채소",
                itemName: "[KF365] 애호박 1개",
                itemDiscount: 50,
                itemPrice: 3980,
                itemStock: 6,
                itemImage: "6.jpg",
                itemSold: 6,
                itemInfo: "냉장고 속 단골 식재료",
            },
            {
                itemNo: 7,
                itemCategory: "채소",
                itemName: "흙당근 1kg",
                itemDiscount: 0,
                itemPrice: 4890,
                itemStock: 7,
                itemImage: "7.jpg",
                itemSold: 7,
                itemInfo: "영양 가득 당근을 더 신선하게",
            },
            {
                itemNo: 8,
                itemCategory: "채소",
                itemName: "[KF365] 파프리카 2입",
                itemDiscount: 50,
                itemPrice: 5980,
                itemStock: 8,
                itemImage: "8.jpg",
                itemSold: 8,
                itemInfo: "믿고 먹을 수 있는 상품을 합리적인 가격에, KF356",
            },
            {
                itemNo: 9,
                itemCategory: "채소",
                itemName: "초당 옥수수(노랑이) 5입",
                itemDiscount: 0,
                itemPrice: 10900,
                itemStock: 9,
                itemImage: "9.jpg",
                itemSold: 9,
                itemInfo: "당도가 높고 아삭한 식감의 생옥수수",
            },
            {
                itemNo: 10,
                itemCategory: "채소",
                itemName: "[KF365] 브로콜리 1입",
                itemDiscount: 0,
                itemPrice: 2990,
                itemStock: 0,
                itemImage: "10.jpg",
                itemSold: 0,
                itemInfo: "믿고 먹을 수 있는 상품을 합리적인 가격에, KF356",
            },
            {
                itemNo: 11,
                itemCategory: "해산물",
                itemName: "[Picard] 관자 토마토 로즈마리",
                itemDiscount: 0,
                itemPrice: 28500,
                itemStock: 1,
                itemImage: "11.jpg",
                itemSold: 1,
                itemInfo: "요리에 활용하기 좋은 만능 관자",
            },
            {
                itemNo: 12,
                itemCategory: "해산물",
                itemName: "[어보선] 솔방울오징어 600g",
                itemDiscount: 0,
                itemPrice: 7900,
                itemStock: 2,
                itemImage: "12.jpg",
                itemSold: 2,
                itemInfo: "모양도 예쁘고 식감도 좋은",
            },
            {
                itemNo: 13,
                itemCategory: "해산물",
                itemName: "[어보선] 껍질벗긴 오징어링 20g",
                itemDiscount: 0,
                itemPrice: 7980,
                itemStock: 3,
                itemImage: "13.jpg",
                itemSold: 3,
                itemInfo: "맛과 멋이 살아있는 오징어",
            },
            {
                itemNo: 14,
                itemCategory: "해산물",
                itemName: "[동해가문] 증숙한 피문어 350g",
                itemDiscount: 0,
                itemPrice: 27900,
                itemStock: 4,
                itemImage: "14.jpg",
                itemSold: 4,
                itemInfo: "해양심층수로 세척한 증숙 문어",
            },
            {
                itemNo: 15,
                itemCategory: "해산물",
                itemName: "[대흥] 염장해파리 350g (냉장)",
                itemDiscount: 0,
                itemPrice: 5980,
                itemStock: 5,
                itemImage: "15.jpg",
                itemSold: 5,
                itemInfo: "꼬들꼬들한 식감이 매력적인",
            },
            {
                itemNo: 16,
                itemCategory: "해산물",
                itemName: "[대흥] IQF 남해안 굴 500g (냉동)",
                itemDiscount: 0,
                itemPrice: 9400,
                itemStock: 6,
                itemImage: "16.jpg",
                itemSold: 6,
                itemInfo: "다양한 요리에 부담 없이 더하는 굴",
            },
            {
                itemNo: 17,
                itemCategory: "해산물",
                itemName: "[만선] 비단 가리비 500g (생물)",
                itemDiscount: 0,
                itemPrice: 7500,
                itemStock: 7,
                itemImage: "17.jpg",
                itemSold: 7,
                itemInfo: "고운 빛깔과 부드러운 속살",
            },
            {
                itemNo: 18,
                itemCategory: "해산물",
                itemName: "[플로리아] 통영 손질 꽃멍게 150g",
                itemDiscount: 0,
                itemPrice: 5980,
                itemStock: 8,
                itemImage: "18.jpg",
                itemSold: 8,
                itemInfo: "간편하게 누리는 바다 내음",
            },
            {
                itemNo: 19,
                itemCategory: "해산물",
                itemName: "생성게알 60g",
                itemDiscount: 0,
                itemPrice: 18900,
                itemStock: 9,
                itemImage: "19.jpg",
                itemSold: 9,
                itemInfo: "제철 맞아 물오른",
            },
            {
                itemNo: 20,
                itemCategory: "해산물",
                itemName: "[만선] 비단조개 500g (생물)",
                itemDiscount: 0,
                itemPrice: 6980,
                itemStock: 0,
                itemImage: "20.jpg",
                itemSold: 0,
                itemInfo: "뽀얗게 우러나는 달큰한 국물",
            },
            {
                itemNo: 21,
                itemCategory: "과일",
                itemName: "[KF365] 당도선별 수박 6kg 이상",
                itemDiscount: 0,
                itemPrice: 20900,
                itemStock: 1,
                itemImage: "21.jpg",
                itemSold: 1,
                itemInfo: "수분가득 달콤한 제철 수박",
            },
            {
                itemNo: 22,
                itemCategory: "과일",
                itemName: "[KF365] 유명산지 고당도사과 1.5kg",
                itemDiscount: 0,
                itemPrice: 21900,
                itemStock: 2,
                itemImage: "22.jpg",
                itemSold: 2,
                itemInfo: "아삭아삭 달콤한 제철과일",
            },
            {
                itemNo: 23,
                itemCategory: "과일",
                itemName: "[KF365] 새콤달콤 제주 하우스 감귤 1.5kg",
                itemDiscount: 15,
                itemPrice: 19800,
                itemStock: 3,
                itemImage: "23.jpg",
                itemSold: 3,
                itemInfo: "언제 먹어도 반가운 과일",
            },
            {
                itemNo: 24,
                itemCategory: "과일",
                itemName: "향이가득 샤인머스캣 1송이",
                itemDiscount: 0,
                itemPrice: 12900,
                itemStock: 4,
                itemImage: "24.jpg",
                itemSold: 4,
                itemInfo: "연두빛으로 영근 달콤함 한 알",
            },
            {
                itemNo: 25,
                itemCategory: "과일",
                itemName: "[KF365] 머스크멜론 1.6kg",
                itemDiscount: 16,
                itemPrice: 11900,
                itemStock: 5,
                itemImage: "25.jpg",
                itemSold: 5,
                itemInfo: "촉촉하게 머금은 달콤함",
            },
            {
                itemNo: 26,
                itemCategory: "과일",
                itemName: "황도 복숭아 1.2kg(4~6)입",
                itemDiscount: 22,
                itemPrice: 17900,
                itemStock: 6,
                itemImage: "26.jpg",
                itemSold: 6,
                itemInfo: "노랗게 물든 촉촉한 달콤함",
            },
            {
                itemNo: 27,
                itemCategory: "과일",
                itemName: "성주 참외 1.5kg",
                itemDiscount: 0,
                itemPrice: 16900,
                itemStock: 7,
                itemImage: "27.jpg",
                itemSold: 7,
                itemInfo: "뽀얀 과육에 담긴 시원한 단맛",
            },
            {
                itemNo: 28,
                itemCategory: "과일",
                itemName: "미국산 워싱턴 생체리 500g",
                itemDiscount: 31,
                itemPrice: 12900,
                itemStock: 8,
                itemImage: "28.jpg",
                itemSold: 8,
                itemInfo: "알알이 붉은 다이아몬드의 새콤달콤한 유혹",
            },
            {
                itemNo: 29,
                itemCategory: "과일",
                itemName: "GAP 거봉 포도 450g",
                itemDiscount: 7,
                itemPrice: 12900,
                itemStock: 9,
                itemImage: "29.jpg",
                itemSold: 9,
                itemInfo: "양손에 들어오는 아담한 거봉",
            },
            {
                itemNo: 30,
                itemCategory: "과일",
                itemName: "제주산 애플망고 600g",
                itemDiscount: 17,
                itemPrice: 44900,
                itemStock: 0,
                itemImage: "30.jpg",
                itemSold: 0,
                itemInfo: "노란 속살에 달콤한 과즙 가득",
            },
            {
                itemNo: 31,
                itemCategory: "음료",
                itemName: "[페리코네 팜즈] 냉동 오렌지 주스1L",
                itemDiscount: 0,
                itemPrice: 9800,
                itemStock: 1,
                itemImage: "31.jpg",
                itemSold: 1,
                itemInfo: "오렌지의 진한 달콤함을 담은",
            },
            {
                itemNo: 32,
                itemCategory: "음료",
                itemName: "[Picard] 코코넛밀크",
                itemDiscount: 0,
                itemPrice: 7500,
                itemStock: 2,
                itemImage: "32.jpg",
                itemSold: 2,
                itemInfo: "큐브로 얼려 바로 사용 가능한",
            },
            {
                itemNo: 33,
                itemCategory: "음료",
                itemName: "[대상웰라이프] 뉴케어 인핸서 프로1.2",
                itemDiscount: 45,
                itemPrice: 109000,
                itemStock: 3,
                itemImage: "33.jpg",
                itemSold: 3,
                itemInfo: "암환자용 균형영양식",
            },
            {
                itemNo: 34,
                itemCategory: "음료",
                itemName: "[아이시스 8.0] 생수 300mL X 80개",
                itemDiscount: 8,
                itemPrice: 36000,
                itemStock: 4,
                itemImage: "34.jpg",
                itemSold: 4,
                itemInfo: "내 몸에 미네랄 밸런스와 수분을 가득 채워주는 아이시스 8.0",
            },
            {
                itemNo: 35,
                itemCategory: "음료",
                itemName: "코카콜라 (300mL X 24입)",
                itemDiscount: 0,
                itemPrice: 22900,
                itemStock: 5,
                itemImage: "35.jpg",
                itemSold: 5,
                itemInfo: "어디든 잘 어울리는 탄산음료",
            },
            {
                itemNo: 36,
                itemCategory: "음료",
                itemName: "[남양] 초코에몽 (180mL X 4개입)",
                itemDiscount: 0,
                itemPrice: 3900,
                itemStock: 6,
                itemImage: "36.jpg",
                itemSold: 6,
                itemInfo: "진하고 달콤한 초콜릿 드링크",
            },
            {
                itemNo: 37,
                itemCategory: "음료",
                itemName: "[남양] 맛있는 우유 GT 900mL",
                itemDiscount: 0,
                itemPrice: 2820,
                itemStock: 7,
                itemImage: "37.jpg",
                itemSold: 7,
                itemInfo: "고소하고 깔끔한 원유의 풍미",
            },
            {
                itemNo: 38,
                itemCategory: "음료",
                itemName: "실론티 제로 500mL X 6입",
                itemDiscount: 10,
                itemPrice: 7900,
                itemStock: 8,
                itemImage: "38.jpg",
                itemSold: 8,
                itemInfo: "가볍게 즐기는 개운한 홍차",
            },
            {
                itemNo: 39,
                itemCategory: "음료",
                itemName: "[폴 바셋] 바리스타 돌체라떼 330mL",
                itemDiscount: 0,
                itemPrice: 3400,
                itemStock: 9,
                itemImage: "39.jpg",
                itemSold: 9,
                itemInfo: "간편하게 맛보는 달콤한 풍미",
            },
            {
                itemNo: 40,
                itemCategory: "음료",
                itemName: "[트레비] 무라벨 레몬(350mL X 20개)",
                itemDiscount: 0,
                itemPrice: 11900,
                itemStock: 0,
                itemImage: "40.jpg",
                itemSold: 0,
                itemInfo: "무라벨로 즐기는 레몬의 싱그러움",
            },
            {
                itemNo: 41,
                itemCategory: "간식",
                itemName: "[그라놀로지] 선물세트 1호",
                itemDiscount: 1,
                itemPrice: 35000,
                itemStock: 1,
                itemImage: "41.jpg",
                itemSold: 1,
                itemInfo: "실속있게 꾸려 넣은 고소한 간식",
            },
            {
                itemNo: 42,
                itemCategory: "간식",
                itemName: "[하겐다즈] 파인트 피넛버터 크런치",
                itemDiscount: 2,
                itemPrice: 15500,
                itemStock: 2,
                itemImage: "42.jpg",
                itemSold: 2,
                itemInfo: "피넛버터가 자아내는 깊은 풍미",
            },
            {
                itemNo: 43,
                itemCategory: "간식",
                itemName: "[리터스포트] 미니 초콜릿믹스 9{",
                itemDiscount: 3,
                itemPrice: 5980,
                itemStock: 3,
                itemImage: "43.jpg",
                itemSold: 3,
                itemInfo: "다양하게 경험하는 미니 초콜릿",
            },
        ];
    }

    /* 할인율이 가장 높은 상품 목록 */
    getMaxDiscountRateItemList() {
        let count = 0;
        let list = [];
        for(let i=0; i<this.itemList.length; i++) {
            if(this.itemList[i].itemDiscount >= 50) {
                list.push(this.itemList[i]);
                count += 1;

                if(count == 4) {
                    break;
                }
            }
        }
        return list;
    }

    /* 판매량이 가장 많은 상품 목록 */
    getMaxItemSoldCountItemLIst() {
        let list = [];
        for(let i=0; i<4; i++) {
            let maxSoldCount = 0;
            let maxIndex = 0;
            for(let j=0; j<this.itemList.length; j++) {
                
                let check = false;
                for(let k=0;k<list.length; k++) {
                    if(this.itemList[j].itemNo == list[k].itemNo) {
                        check = true;
                        break;
                    }
                }

                if(check == false) {
                    if(maxSoldCount < this.itemList[j].itemSold) {
                        maxSoldCount = this.itemList[j].itemSold;
                        maxIndex = j;
                    }
                }
            }

            list.push(this.itemList[maxIndex]);
        }

        return list;
    }

    /* 전체상품 페이지 상품 목록 */
    getAllItemList() {
        return  this.itemList;
    }

    /* 상품번호로 상품 index 검색 */
    getItemIndex(itemNo) {
        for(let i=0; i<this.itemList.length; i++) {
            if(this.itemList[i].itemNo == itemNo) {
                return i;
            }
        }
    }

    /* 상품 상세페이지 */
    getItem(index) {
        return this.itemList[index];
    }

}