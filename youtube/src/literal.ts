'use strict';

const userName1 = "Bob";
let userName2: string | number = "Tom";
userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface User {
    name: string;
    job: Job
};

const user: User = {
    name: "Bob",
    job: "developer"
};

interface HightSchoolStudent {
    name: string;
    grade: 1|2|3
};

interface Car {
    name: "car",
    color: string;
    start(): void;
};

interface Mobile {
    name: "mobile",
    color: string;
    call(): void;
};

function getGift(gift: Car | Mobile) {
    // 식별 가능한 유니온 타입
    console.log(gift.color); // interface 안에 동일한 key가 있기 때문에 오류 없음
    if(gift.name === "car") { // interface 안에 동일하지 않는 key가 있을 경우 분기해야함
        gift.start();
    } else {
        gift.call()
    }
};

// 교차 타입: 모든 타입이 있어야 한다.
interface Car1 {
    name: string;
    start(): void;
};
interface Toy {
    name: string;
    color: string;
    price: number;
};

const toyCar: Toy & Car1 = {
    name:"Toy",
    start() {
        console.log("")
    },
    color: "Red",
    price: 3000,
}
