// 상품 데이터
const data = [
    { name: '초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
];

// 사용자 입력 받기
const line = prompt('최대 금액을 입력해주세요.');
const amount = +line;

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.
function getItemByAmount(data, amount){
    if(isNaN(amount)){ //숫자가 아닌 다른 것을 입력 했을 때
        return null;
    }
    //데이터 가격 기준 오름차순 정렬
    data.sort(function(a,b) {
        return a.price-b.price;
    });
    
    for(let i=0; i<data.length; i++) {
        if (amount > data[i].price) { // 입력한 amount가 상품가격보다 클때 다음 상품으로 넘어간다.
            continue;
        } else if (amount == data[i].price) {  // 입력한 amount가 상품 가격과 같을 때 해당상품 반환
            return data[i];
        } else { //입력한 amount가 상품 가격보다 작을 때 이전 상품을 반환
            return data[i-1];
        }    
    }
}
