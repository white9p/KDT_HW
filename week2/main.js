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
// +기호로 강제로 숫자형으로 변환해주기 보다는 parseInt나 Number로 변환해준다
const amount = parseInt(line);  

// 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
const item = getItemByAmount(data, amount);

const msg = item ? 
    `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : 
    '살 수 있는 상품이 없습니다.';

// 결과 출력
alert(msg);

// 아래에 getItemByAmount 함수를 작성하세요.
//숫자가 아닌 다른 것을 입력 했을 때 null을 반환한다.
function getItemByAmount(data, amount){
    if(typeof amount !== 'number'){ //isNan의 Null값에대한 함정으로 typeof 로 바꿔 변수의 유효성 검사를 한다
        return null;
    }
    console.log(typeof amount)
    //amount보다 작거나 같은 data.price들 만 모아 살 수 있는 상품들만 모아 온다.
    const availableItems = data.filter(d => d.price <= amount );
    
    // 살수 있는 물품들을 가격 기준 내림차순 정렬
    availableItems.sort((a,b) => b.price - a.price);
    //정렬된것중 가장 비싼 객체 추출
    return availableItems[0]
    }

