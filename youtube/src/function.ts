function hello(name:string, age: number): string {
    if(!age) {
        return `hello ${name}. u r ${age}`
    } else {
        return `hello ${name}`
    };
};

// 첫 번쨰 인자 값을 옵셔널로 할 수 없음
// function hello2(name?:string, age: number): string {
//     if(!age) {
//         return `hello ${name}. u r ${age}`
//     } else {
//         return `hello ${name}`
//     };
// };
//
// 만약 인자 값에 undefined를 전달하고 싶을 떄
function hello2(age:number | undefined, name:string):string {
    if(!age) {
        return ``
    } else {
        return ``
    }
};

hello2(undefined, 'hi');

//rest
function hello3(...num: number[]):number {
    return num.reduce((cur, prev) => cur + prev , 0);
};
hello3(1,2,3)
hello3(1,2,3,4,5,6)

// this 사용
interface User {
    name: string
};

const Sam: User = {name: "sam"};
function showName(this:User):void {
    console.log(this.name);
};
const cd = showName.bind(Sam);
console.log(cd);

function showName2(this:User, age:number) {
    console.log(this.name, age);
};
const bb = showName2.bind(Sam);
bb(30);

// 오버로드
// 동일한 함수지만 매개변수의 타입이나 개수에 따라 리턴하는 타입이 다르다면 오버로드를 사용해야 한다.
interface User1 {
    name: string;
    age: number;
};

function join(name: string, age:string): string;
function join(name:string, age:number): User1;
function join(name:string, age: number | string): User1 | string {
    if(typeof age === 'number') {
        return {
            name,
            age,
        }
    } else {
        return "나이는 숫자로 입력해 주세요.";
    }
};
const sam: User = join("sam", 30);
const jain: string = join("Jane", "30")




