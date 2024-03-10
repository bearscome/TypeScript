// 접근 제한자(Access modifier) - public, private, protected
// public: 메소드, 인스턴스로 접근 가능 (클래스, 인스턴스에서 접근 가능)
// private: 해당 class에서 접근 가능 (해당 클레스 내부에서만 접근 가능)
// protected: 메소드로만 접근 가능 (자식 클래스에서만 접근 가능)
// static: 클래스로 접근 가능
// readonly: 인스턴스로 변경 불가능 해당 생성자에서 변경 가능
class Car {
    name1: string = "car";
    private  name2: string = "car";
    #name3: string = "car"; // private와 동일 외부에서 접근 불가
    protected name3: string = "car";
    readonly name4: string = "car";
    static name5: string = "car";
    color: string;
    constructor(color: string) {
        this.color = color;
    };
    start() {
        console.log("start");
        console.log(this.name2);
        console.log(this.#name3);
        console.log(Car.name5)
    }
}

class BMW extends Car {
    constructor(color:string) {
        super(color);
    }
    showName() {
        console.log(this.name1);
    }
    showName2() {
        console.log(this.name3)
    }
};

const z4 = new BMW("black")
z4.showName()
z4.showName2()
console.log(Car.name5)

// 추상 클래스
abstract class Car1 {
    color: string;
    constructor(color:string) {
        this.color = color;
    };
    start() {
        console.log("start")
    }

    abstract doSomething():void;
}

class BMW1 extends Car1 {
    constructor(color:string) {
        super(color);

    }

    doSomething() {
        console.log("hi");
    }

}

const bmw = new BMW1("red");
