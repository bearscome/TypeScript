// Generic
"use strict";

function getSize(arr: number[]):number {
    return arr.length
};

getSize([1,2,3]);
/*
* 타입이 늘어 날 때 마다 인자 값에 받는 타입을 추가해줘야 한다.
* [1,2,3,]: number[]
* ["a","b"]: string[]
* [true,false]: boolean[]
* [{}, {name:"a"}]: object[];
* */


function getSize1<T>(arr: T[]):number {
    return arr.length;
};

getSize1<number>([1,2,3]);
getSize1<string>(["1","2","3"]);
getSize1<number | string>(["1","2","3"]);

interface Mobile1<T> {
    name: string;
    price: number;
    option:T
};

// const m1:Mobile1<object> = { // object라면
const m1:Mobile1<{color: string, coupon: boolean}> = { // 명확한 key가 전달 된다면
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false
    }
}

const m2:Mobile1<string> = {
    name: "S20",
    price: 100,
    option: "good"
};


interface User2 {
    name: string;
    age: number;
};

interface Car3 {
    name: string;
    color: string;
};

interface Car4 {
    name: boolean;
    color: string;
}

interface Book {
    price: number;
};

const user1: User2 = {name: "a", age:3};
const car1: Car3 = {name: "car", color: "red"};
const car2: Car4 = {name: true, color :"red"}
const book1: Book = {price: 3000};

function showName<T>(data: T):string {
    // 제네릭에 name이라는 프로퍼티가 있다는 보장을 받지 못하니까 에러
    return data.name
};

showName(user1);
showName(car1);
showName(book1);

function showName1<T extends {name: string}>(data: T):string {
    // 제네릭에 name이라는 프로퍼티가 있다는 보장을 받지 못하니까 에러
    return data.name
};
showName1(user1);
showName1(car1);
showName1(car2); // name이 boolean 값으로 설정되어 있어서 오류
showName1(book1); // book의 interface는 name이라는 key가 없으니 오류



