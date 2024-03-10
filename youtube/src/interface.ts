'use strict';

import * as stream from "stream";

let user:object;

user = {
    name: 'xx',
    age: 30
};

// console.log(user.name); // object 타입에는 특정 값이 없기 떄문에 오류를 리턴한다.
type Score = "A" | "B" | "C";

interface User {
    name: string;
    age: number;
    gender?: string; // optional한 데이터
    readonly birthDay: number;
    // [grade: number] : string;
    [grade: number] : Score
    // [grade]: 이후 key 값들을 옵셔널하게 전달할 경우
    // string은 너무 광범위하기 때문에 타입(Score)을 지정하여 저장
};

let user1: User = {
    name: "x",
    age: 30,
    birthDay: 2000,
    1: "A"
};

user1.age  =30;
user1.gender = "aa"
// user1.birthDay = 1990; // readOnly 속성이기 때문에 수정 불가

console.log(user1.age)

interface Add {
    (num1: number, num2:number): number,
};

const add:Add = function(x,y) {
    return x+y;
};

// add(10,20);

interface IsAdult {
    (age: number): boolean;
};

const a:IsAdult = (age) => {
    return age > 19;
};

console.log(a(30));

// implements: class 사용할 경우
interface Car {
    color: string;
    wheels: number;
    start(): void;
};

class Bmw implements Car {
    color;
    wheels = 3;
    constructor(c:string) {
        this.color = c;
    }
    start() {
        console.log("go..")
    }
};

const b = new Bmw("red");

console.log(b);
b.start();

// extends // 확장
interface Benz extends Car {
    door: number;
    stop(): void;
};

const benz: Benz = {
    door: 4,
    stop() {
        console.log("stop")
    },
    color: "blue",
    start() {
        console.log("start")
    },
    wheels: 4
};


// extends 여러개
interface Toy {
    name: string
};

interface ToyCar extends Car, Toy {
    price: number
};

const ToyCar: ToyCar = {
    color: "red",
    wheels: 3,
    start() {
        console.log("start")
    },
    name: "toy",
    price: 300,
}
