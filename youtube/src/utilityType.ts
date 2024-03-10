"use strict";

// keyof
interface User {
    id: number;
    name: string;
    age: number;
    gender: "M" | "F";
};

type UserKey = keyof User; // 'id' | 'name' | 'age' | gender;

const a1: UserKey = "age";

/*
* Partial<T>
* 모든 key를 옵셔널로 변경하며, 없는 key를 사용시 오류 가 난다
* interface User {
*   id?: T
*   name?: T
*   age?: T
*   gender?: T
* }
* */
let admin1: Partial<User> = {
    id: 1,
    name: "Bob"
}

/*
* Required<T>
* 모든 key를 필수로 변경해 준다.
* */

interface AdminUser {
    id: number;
    name: string;
    age?: number;
}

let admin2: Required<AdminUser> = {
    id: 2,
    name: "Bob",
    age: 3,
};


/*
* ReadOnly<T>
* 모든 value는 수정하지 못한다.
* */

interface User3 {
    id: number;
    name: string;
    age?: number
};

let admin4: Readonly<User3> = {
    id: 1,
    name: "bob"
}
admin4.age = 4; // 읽기 전용이라 변경 불가


/*
* Record<K, T>
* key, value를 선언한다.
* */

type Grade = "1" | "2" | "3";
type Score = "A" | "B" | "C";
const score: Record<Grade, Score> = {
    1: "A",
    2: "B",
    3: "C",
};

interface User5 {
    id: number;
    name: string;
    age:number
};

function isValid(user: User5) {
    const result:Record<keyof User5, boolean> = {
        id: user.id > 0,
        name: !!user.name,
        age: user.age > 0
    };

    return result;
}


/*
* Pick<K, T>
* type에서 원하는 type만 사용한다.
* */

const admin6: Pick<User5, "id" | "name"> = { // id, name만 사용
    id: 1,
    name: "aaa"
};

/*
* Omit<K, T>
* type에서 특정 부분만 생략한다.
* */

const admin7:Omit<User5, "age" | "name"> = { // id만 남음
    id: 0,
};

/*
* Exclude<T1, T2>
* T1과 T2의 교차되는 타입을 제거한다.
* */
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string> // boolean

/*
* NonNullalble<Type>
* undefined와 null을 제외시킨다.
* */
type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>; // string, void

