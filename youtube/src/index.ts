// 기본 타입

let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [30,3];
let a2:Array<number> = [30];

let week:string[] = ["1","2"]
let week2:Array<string> = ["1","2"]

// week.push(3); // string[]에 넘버형을 푸쉬하기 떄문에 오류

// 튜플 (Tuple)
// 인덱스 별로 타입이 다를 경우 사용이 가능하다.
// 개수도 정해져 있다.
let b:[string, number];

b = ['z', 1];
// b = [1, 'z'];
b[0].toLowerCase(); // 스트링형이기 때문에 가능
// b[1].toLowerCase() // 넘버형이기 때문에 불가


// void: 아무 것도 반환하지 않는 함수

function sayHello():void {
    console.log("hello")
}
sayHello();

// never: 에러를 리턴하거나, 영원히 끝나지 않는 함수
function showError():never {
    throw new Error()
};

function inLoop():never {
    while (true) {
        console.log("hi")
    }
};


// enum: 비슷한 값끼지 묶은 것
// enum은 값을 수동으로 주지 않을 경우 0부터 증가한다
// 특정 값만 강제로 넣을 수 있도록 하는 타입
enum OS {
    Window,
    Ios,
    Android
};

enum OS1 {
    Window = 3, // 값을 임의로 할당 가능
    Ios = 10,
    Android// 전 필드에서 값을 임의로 할당하지 않을 경우 이전 값 +1을 함
}

console.log(OS1[10])
console.log(OS1["Ios"])

let myOS: OS;
myOS = OS.Window;
console.log(myOS)

// null
// undefined

let null1:null = null;
let unde:undefined = undefined;
